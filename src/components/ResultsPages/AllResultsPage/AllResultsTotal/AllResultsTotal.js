import React, { Component } from 'react';
import { connect } from 'react-redux';

class AllResultsTotal extends Component {

    componentDidMount = () => {
        this.props.dispatch({type: 'GET_TOTAL'});
    }

    render() {
        return (
            <tr>
                <td>total</td>
                <td>{this.props.totalEmission}</td>
                {/* <td onClick={() => {this.handleDelete(this.props.reduxState.log.id)}}>DELETE</td> */}
             </tr>  
        );
    }
}

export default connect()(AllResultsTotal);

