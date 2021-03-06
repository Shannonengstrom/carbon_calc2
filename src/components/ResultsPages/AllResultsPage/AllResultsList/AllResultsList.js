import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditLogModal from './EditLogModal/EditLogModal';

const mapStoreToProps = reduxStore => ({
    reduxStore,
});

class AllResultsList extends Component {
    
    handleDelete = (id) => {
        this.props.dispatch({type: 'DELETE_LOG', payload: id});
        window.location.reload();
    }

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
                <td><EditLogModal 
                    id={this.props.logList.id} 
                    mode={this.props.logList.mode} 
                    co2_emis={this.props.logList.co2_emis} 
                    destination={this.props.logList.destination}
                    date={this.props.logList.date}
                    miles={this.props.logList.miles}
                    notes={this.props.logList.notes}
                    total_emis={this.props.logList.total_emis}
                    person_id={this.props.logList.person_id}
                    />
                    </td>
             </tr>  
        );
    }
}

export default connect(mapStoreToProps)(AllResultsList);

