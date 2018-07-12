import React, { Component } from 'react';
import { connect } from 'react-redux';

// const mapStateToProps = reduxState => ({
//     reduxState,
// });

class LogItem extends Component {
    // componentDidMount() {
    //     const logId = qs.parse(this.props.location.search)
    // }
    
    // handleDelete = (id) => {
    //     this.props.dispatch({type: 'DELETE_LOG', payload: id});
    // }

    render() {
        return (
            <div>
                <td>{this.props.reduxState.logList.date}</td>
                {/* <td>{this.props.logList.mode}</td> */}
                <td>{this.props.logList.miles}</td>
                <td>{this.props.logList.destination}</td>
                <td>{this.props.logList.notes}</td>
                {/* <td>{this.props.logList.total_emis}</td> */}
                {/* <td>{this.props.logList.total_saved}</td> */}
                {/* <td onClick={() => {this.handleDelete(this.props.reduxState.log.id)}}>DELETE</td> */}
            </div>
        );
    }
}

export default connect()(LogItem);
