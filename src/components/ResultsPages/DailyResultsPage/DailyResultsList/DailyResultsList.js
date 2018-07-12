import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxState => ({
    reduxState,
});

class LogItem extends Component {
    // componentDidMount() {
    //     const logId = qs.parse(this.props.location.search)
    // }
    
    handleDelete = (id) => {
        this.props.dispatch({type: 'DELETE_LOG', payload: id});
    }

    render() {
        return (
            <div>
                <td>{this.props.reduxState.logList[i].date}</td>
                {/* <td>{this.props.reduxState.logList[i].mode}</td> */}
                <td>{this.props.reduxState.logList[i].miles}</td>
                <td>{this.props.reduxState.logList[i].destination}</td>
                <td>{this.props.reduxState.logList[i].notes}</td>
                {/* <td>{this.props.reduxState.logList[i].total_emis}</td> */}
                {/* <td>{this.props.reduxState.logList[i].total_saved}</td> */}
                <td onClick={() => {this.handleDelete(this.props.reduxState.log.id)}}>DELETE</td>
            </div>
        );
    }
}

export default connect(mapStateToProps)(LogItem);
