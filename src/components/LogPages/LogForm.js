import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxStore => ({
    reduxStore,
});

class LogForm extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            newInput: {
                destination: '',
                date: '',
                miles: 0,
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
                console.log('state:', this.state);
            };
        }
        
      
        ///now addNewLog
    // sendInputsToRedux = () => {
    //     const co2 = this.props.reduxStore.logs.logListReducer.co2_emis_id;
    //     console.log(co2);
    //     const body = {...this.state, co2 };
    //     console.log(body);
    //     const action = {type: 'ADD_INPUTS', payload: body};
    //     this.props.dispatch(action);
    //     console.log(body);
    //     this.sendNewLogToServer();
    // }


    // componentDidMount() {
    //     const co2_emis_id = this.props.reduxStore.logs.logListReducer.co2_emis_id;
    //     console.log(co2_emis_id);
    //     this.state.newLog = {...this.state.newLog, co2_emis_id };
    // }
    

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
        await new Promise(resolve => {setTimeout(resolve, 1000)})
        this.postLog(); 
    };

    
    addNewInput = (event) => {
        event.preventDefault();
        const body = this.state.newInput;
        console.log(body);
        const action = {type: 'ADD_INPUTS', payload: body};
        this.props.dispatch(action);
        console.log(action);
        this.calcEmis();
     }
        

  postLog = () => {
    // const newInput = this.props.reduxStore.logs.logListReducer.co2_emis;
    // const newEmis = this.state.newEmis;
    const newLog = this.props.reduxStore.logs.logListReducer;
    // console.log('in postLog - this is newInput:', newInput);
    // console.log('in postLog - this is newEmis:', newEmis);
    console.log('in postLog - this is the store:', newLog);
    this.props.dispatch({type: 'POST_LOG', payload: newLog
            // {newInput: newInput, newEmis: newEmis, co2_emis_id: store.co2_emis_id}
    })    
    // this.setState({
    //     newInput: {
    //         destination: '',
    //         date: '',
    //         miles: '',
    //         notes: '',
    //     }
    // });
}




    render() {
        return (
            <div>
            <pre>{JSON.stringify(this.state)}</pre>
                <form onSubmit={this.addNewInput}>    
                    <label>destination
                    <input 
                            type='text' 
                            onChange={this.handleOnChange('destination')} />
                    </label>
                    <br />
                    <label>date
                    <input 
                            type='date' 
                            onChange={this.handleOnChange('date')} />
                    </label>
                    <br />
                    <label>miles
                    <input 
                            type='number' 
                            min="0" 
                            step="any" 
                            onChange={this.handleOnChange('miles')} />
                    </label>
                    <br />
                    <label>notes
                    <input 
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


export default connect(mapStateToProps)(LogForm);
