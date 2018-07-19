import React, { Component } from 'react';
import { connect } from 'react-redux';

class AllResultsList extends Component {
    
    handleDelete = (id) => {
        this.props.dispatch({type: 'DELETE_LOG', payload: id});
    }

    // handlePut = (id) => {
    //     this.props.dispatch({type: 'PUT_LOG', payload: id});
    // }

    render() {
        return (
            <tr>
                <td>{this.props.logList.date.split('T')[0]}</td>
                <td>{this.props.logList.mode}</td>
                <td>{this.props.logList.destination}</td>
                <td>{this.props.logList.miles}</td>
                <td>{this.props.logList.notes}</td>
                <td>{this.props.logList.total_emis}</td>
                <td onClick={() => {this.handleDelete(this.props.logList.id)}}>delete</td>
                {/* <td onClick={() => {this.handlePut(this.props.reduxState.log.id)}}>edit</td> */}
             </tr>  
        );
    }
}

export default connect()(AllResultsList);

