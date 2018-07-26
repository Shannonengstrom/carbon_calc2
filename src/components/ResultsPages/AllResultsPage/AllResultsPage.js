import React, { Component } from 'react';
import { connect } from 'react-redux';
import AllResultsList from './AllResultsList/AllResultsList'
import Nav from '../../../components/Nav/Nav';
import { USER_ACTIONS } from '../../../redux/actions/userActions';

const mapStoreToProps = reduxStore => ({
    reduxStore,
    user: reduxStore.user,
});

class AllResultsPage extends Component {
    
    componentDidMount = () => {
        this.props.dispatch({type: USER_ACTIONS.FETCH_USER});
        this.getLogs(); 
        this.props.dispatch({type: 'GET_TOTAL'});
    }

    getLogs = () => {
        this.props.dispatch({type: 'GET_LOGS', payload: this.props.user.id});
    }

    componentDidUpdate() {
        if (!this.props.user.isLoading && this.props.user.userName === null) {
          this.props.history.push('home');
        }
      }
    
    render() {
        return (
            
            <div className="resultPage">
                <div>
                    <Nav />
                </div>
                <h2>your dashboard</h2>
                <table>
                    <thead>
                        <th>date</th>
                        <th>mode</th>
                        <th>destination</th>
                        <th># of miles</th>
                        <th>notes</th> 
                        <th>CO<sub>2</sub> emissions (kg)</th>
                        <th></th>
                        <th></th>
                    </thead>
                    <tfoot>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>total CO<sub>2</sub> emissions per metric ton (kg):</td>
                            <td> 
                                {/* <AllResultsTotal /> */}
                                {this.props.reduxStore.logs.totalReducer.map( total => {
                                    return total.sum
                                })}
                            </td>
                        </tr>
                    </tfoot>
                    <tbody>
                        {this.props.reduxStore.logs.logListReducer.newLog.map(log => {
                            return <AllResultsList logList={log} />
                            })}
                    </tbody>
                </table> 
                <br />
                <br /> 
                <br />
            </div>
        )
    }
}

export default connect(mapStoreToProps)(AllResultsPage);