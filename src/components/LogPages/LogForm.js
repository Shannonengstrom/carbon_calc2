import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

const mapStateToProps = reduxStore => ({
    reduxStore,
});

class LogForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
                destination: '',
                date: '',
                miles: 0,
                notes: '',
                total_emis: 0,
                total_saved: 0, 
                person_id: 5
        }
    }

    handleOnChange = propName => (event) => {
        console.log('event happened')
        this.setState({
            ...this.state,    
            [propName]: event.target.value
            });
        console.log('state:', this.state);
        
        }

    handleSubmit = () => {
        this.sendInputsToRedux();
    }
   
    sendInputsToRedux = () => {
        const co2 = this.props.reduxStore.logs.logListReducer.co2_emis_id;
        console.log(co2);
        const body = {...this.state, co2 };
        console.log(body);
        const action = {type: 'ADD_INPUTS', payload: body};
        this.props.dispatch(action);
        console.log(body);
        this.sendNewLogToServer();
    }

    sendNewLogToServer = () => {
        const newLog = this.props.reduxStore.logs.logListReducer;
        console.log('in sendNewLogToServer', newLog)
        console.log(this.props.reduxStore);
        axios.post('/api/logs', newLog)
        .catch((error) => {
            console.log(error);
            alert('Error with axios.post!')
        });  
    }

    render() {
        return (
            <div>
            <pre>{JSON.stringify(this.state)}</pre>
                <form onSubmit={this.handleSubmit}>    
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
