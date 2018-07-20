import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStoreToProps = reduxStore => ({
    reduxStore,
});

class EditLogForm extends Component {



    componentDidMount () {
        this.passId(); 
    }

    passId = () => {
        const id = this.props.id;
        // this.props.dispatch({type: 'GET_LOG_BY_ID', payload: id});
    }

    constructor(props) {
        super(props);
        this.state = {
            modifiedInput: {
                id: this.props.id,
                mode: '',
                co2_emis: 10,
                destination: '',
                date: '',
                miles:'',
                notes: '',
                total_emis: 0
            }
        }  
    }

    handleOnChange = (propName) => {
        return event => {
            console.log('event happened')
            this.setState({
                modifiedInput:{
                    ...this.state.modifiedInput,    
                    [propName]: event.target.value
                    }
                })
            };
            console.log('the new state', this.state.modifiedInput);  
        }
    updateInputs = () => {
        // event.preventDefault();
        const body = this.state.modifiedInput;
        console.log(body);
        const action = {type: 'UPDATE_INPUTS', payload: body};
        this.props.dispatch(action);
        console.log(action);
        this.calcEmis();
        }

    async calcEmis () {
        const multiplier = this.state.modifiedInput.co2_emis;
        console.log('this is the multiplier:', multiplier);
        const miles = this.state.modifiedInput.miles
        console.log('this is the number of miles:', miles);
        const newCalc = ( multiplier * miles); 
        console.log('this is the final emission value:', newCalc);
        this.state.modifiedInput.total_emis = newCalc;
        // const body = this.state.newEmis;
        // console.log('this is the body:', body);
        // const action = {type: 'UPDATE_EMIS', payload: body};
        // this.props.dispatch(action);
        // console.log(action);
        // await new Promise(resolve => {setTimeout(resolve, 100)})
        this.updateLog(); 
    };

    
   
        

  updateLog = () => {
    const body = this.state.modifiedInput;
    console.log('in updateLog - this is the store:', body);
    this.props.dispatch({type: 'UPDATE_LOG', payload: body})
    // this.clearInputs();    
}

// clearInputs() {
//     this.setState({
//         newInput: {
//             destination: '',
//             date: '',
//             miles: '',
//             notes: '',
//         }, 
//         newEmis: {
//             total_emis: 0
//         }
//     });
// }

    render() {
        return (
            <div>
               {console.log(this.state)}
            <pre>{JSON.stringify(this.state)}</pre>
            <pre>{JSON.stringify(this.props.reduxStore.logs.updateReducer)}</pre>

                <form onSubmit={() => this.updateInputs(this.props.id)}> 
                    <label>mode
                    <input 
                            value={this.props.reduxStore.logs.updateReducer.mode}
                            type='text' 
                            onChange={this.handleOnChange('mode')} 
                            />
                    </label>   
                    <br />
                    <label>emission multiplier
                    <input 
                            // value={this.state.modifiedInput.notes}
                            type='text' 
                            onChange={this.handleOnChange('co2_emis')} 
                            />
                    </label>
                    <label>destination
                    <input 
                            // value={this.state.modifiedInput.destination}
                            type='text' 
                            onChange={this.handleOnChange('destination')} 
                            />
                    </label>
                    <br />
                    <label>date
                    <input 
                            // value={this.state.modifiedInput.date}
                            type='date' 
                            onChange={this.handleOnChange('date')} 
                            />
                    </label>
                    <br />
                    <label>miles
                    <input 
                            // value={this.state.modifiedInput.miles}
                            type='number' 
                            step="any" 
                            onChange={this.handleOnChange('miles')} 
                            />
                    </label>
                    <br />
                    <label>notes
                    <input 
                            // value={this.state.modifiedInput.notes}
                            type='text' 
                            onChange={this.handleOnChange('notes')} 
                            />
                    </label>
                    <br />
                    <input type='submit' value='SAVE'/>
                </form>
            </div>
        );
    }
}


export default connect(mapStoreToProps)(EditLogForm);
