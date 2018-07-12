import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxState => ({
    reduxState,
});

class LogForm extends Component {
    state = {
        newLog: {
            co2_emis_id: 3,
            destination: '',
            date: '',
            miles: '',
            notes: '',
            total_emis: '',
            total_saved: '', 
            person_id: 5
        }
    }

    handleOnChange = (propName) => {
        return event => {
        console.log('event happended')
        this.setState({
            newLog:{
                ...this.state.newLog,
                [propName]: event.target.value
                } 
            })
        };
    }

    addNewLog = event => {
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_LOG', payload: this.state.newLog })
        this.setState({
            newLog: {
                co2_emis_id: '',
                destination: '',
                date: '',
                miles: '',
                notes: '',
                total_emis: '',
                total_saved: '', 
                person_id: ''
            }
        });
    }

    render() {
        return (
            <div>
                <h3>New Log!</h3>
                <pre>{JSON.stringify(this.state)}</pre>
                <form onSubmit={this.addNewLog}>
                    <input type='text' value={this.state.newLog.destination} onChange={this.handleOnChange('destination')} placeholder="destination"/>
                    <input type='date' value={this.state.newLog.date} onChange={this.handleOnChange('date')} placeholder="date"/>
                    <input type='number' min="0" step="any" value={this.state.newLog.miles} onChange={this.handleOnChange('miles')} placeholder="miles"/>
                    <input type='text' value={this.state.newLog.notes} onChange={this.handleOnChange('notes')} placeholder="notes"/>
                    <input type='submit' value='Add New Plant' />
                </form>
            </div>
        );
    }
}


export default connect(mapStateToProps)(LogForm);
