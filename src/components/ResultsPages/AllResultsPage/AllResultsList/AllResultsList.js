import React, { Component } from 'react';
import { connect } from 'react-redux';
// import qs from 'query-string';


class AllResultsList extends Component {
    
    // handleDelete = (id) => {
    //     this.props.dispatch({type: 'DELETE_ELEMENT', payload: id});
    // }

    render() {
        return (
            <tr>
                <td>{this.props.logList.date}</td>
                {/* <td>{this.props.logList.mode}</td> */}
                <td>{this.props.logList.miles}</td>
                <td>{this.props.logList.destination}</td>
                <td>{this.props.logList.notes}</td>
                {/* <td>{this.props.logList.total_emis}</td> */}
                {/* <td>{this.props.logList.total_saved}</td> */}
                {/* <td onClick={() => {this.handleDelete(this.props.reduxState.log.id)}}>DELETE</td> */}
             </tr>  
        );
    }
}

export default connect()(AllResultsList);
