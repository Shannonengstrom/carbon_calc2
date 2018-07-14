import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxState => ({
    reduxState,
});

// componentDidMount = () => {
//     this.props.dispatch({ type: 'FETCH_MULTIPLIER', payload: this.state.newLog.co2_emis_id
//     });
//   }

class LogForm extends Component {
    state = {
        newLog: {
            co2_emis_id: 3,
            destination: '',
            date: '',
            miles: 0,
            notes: '',
            total_emis: 0,
            total_saved: 0, 
            person_id: 5
        }
    }

    handleOnChange = (propName) => {
        return event => {
        console.log('event happened')
        this.setState({
            newLog:{
                ...this.state.newLog,
                [propName]: event.target.value
                } 
            })
        };
    }

    handleMileChange = () => {
        return event => {
        console.log('event happened')
        this.setState({
            newLog:{
                ...this.state.newLog,
                miles: event.target.value
                } 
            })
        };
    }
  

    render() {
        return (
            <div>
                <pre>{JSON.stringify(this.state)}</pre>
                <form onSubmit={this.addNewLog}>    
                    <label for="destination">destination
                    <input 
                            type='text' 
                            value={this.state.newLog.destination} 
                            onChange={this.handleOnChange('destination')} 
                            id="destination"/>
                    </label>
                    <br />
                    <label for="date">date
                    <input 
                            type='date' 
                            value={this.state.newLog.date} 
                            onChange={this.handleOnChange('date')} 
                            id="date"/>
                    </label>
                    <br />
                    <label for="miles">miles
                    <input 
                            type='number' 
                            min="0" 
                            step="any" 
                            value={this.state.newLog.miles} 
                            onChange={this.handleOnChange('miles')} 
                            id="miles"/>
                    </label>
                    <br />
                    <label for="notes">notes
                    <input 
                            type='text' 
                            value={this.state.newLog.notes} 
                            onChange={this.handleOnChange('notes')} 
                            id="notes"/>
                    </label>
                    <br />
                    <input type='submit' value='ADD' />
                </form>
            </div>
        );
    }
}


export default connect(mapStateToProps)(LogForm);
