import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStoreToProps = reduxStore => ({
    reduxStore,
});

class LogForm extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            newInput: {
                destination: '',
                date: '',
                miles:'',
                notes: '',
            }, 
            newEmis: {
                total_emis: 0
            }
        }  
    }
     

    handleOnChange = (propName) => {
        return event => {
            console.log('event happened')
            this.setState({
                newInput:{
                    ...this.state.newInput,    
                    [propName]: event.target.value
                    }
                })
            };
        }

    addNewInput = (event) => {
        event.preventDefault();
        const body = this.state.newInput;
        console.log(body);
        const action = {type: 'ADD_INPUTS', payload: body};
        this.props.dispatch(action);
        console.log(action);
        this.calcEmis();
        }

    async calcEmis () {
        const multiplier = this.props.reduxStore.logs.logListReducer.co2_emis;
        console.log('this is the multiplier:', multiplier);
        const miles = this.state.newInput.miles
        console.log('this is the number of miles:', miles);
        const newCalc = ( multiplier * miles); 
        console.log('this is the final emission value:', newCalc);
        this.state.newEmis = newCalc;
        const body = this.state.newEmis;
        console.log('this is the body:', body);
        const action = {type: 'ADD_EMIS', payload: body};
        this.props.dispatch(action);
        console.log(action);
        await new Promise(resolve => {setTimeout(resolve, 100)})
        this.postLog(); 
    };

    
   
        

  postLog = () => {
    const body = this.props.reduxStore.logs.logListReducer;
    console.log('in postLog - this is the store:', body);
    this.props.dispatch({type: 'POST_LOG', payload: body})
    this.clearInputs();    
}

clearInputs() {
    this.setState({
        newInput: {
            destination: '',
            date: '',
            miles: '',
            notes: '',
        }, 
        newEmis: {
            total_emis: 0
        }
    });
}

    render() {
        return (
            <div>
            <pre>{JSON.stringify(this.state)}</pre>
                <form onSubmit={this.addNewInput}>    
                    <label>destination
                    <input 
                            value={this.state.newInput.destination}
                            type='text' 
                            onChange={this.handleOnChange('destination')} />
                    </label>
                    <br />
                    <label>date
                    <input 
                            value={this.state.newInput.date}
                            type='date' 
                            onChange={this.handleOnChange('date')} />
                    </label>
                    <br />
                    <label>miles
                    <input 
                            value={this.state.newInput.miles}
                            type='number' 
                            step="any" 
                            onChange={this.handleOnChange('miles')} />
                    </label>
                    <br />
                    <label>notes
                    <input 
                            value={this.state.newInput.notes}
                            type='text' 
                            onChange={this.handleOnChange('notes')} />
                    </label>
                    <br />
                    <input type='submit' value='ADD'/>
                </form>
            </div>
        );
    }
}


export default connect(mapStoreToProps)(LogForm);
