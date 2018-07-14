import React, { Component } from 'react';
import { connect } from 'react-redux';
// import MonthlyResultsList from './AllResultsList/AllResultsList'
import axios from 'axios';
import Nav from '../../../components/Nav/Nav';

const mapStateToProps = reduxState => ({
    reduxState,
});

class MonthlyResultsPage extends Component {
    componentDidMount = () => {
        // use component did mount to dispatch an action to request the AllResultsList from the API
        this.props.dispatch({type: 'GET_LOGS'
        });
    }
    
    render() {
        return (
            
            <div className="resultPage">
                <div>
                    <Nav />
                </div>
                <pre>{JSON.stringify(this.props.reduxState.logs)}</pre>
                <h3>your results : by month</h3>
                <table>
                    <tr>
                        <th>month</th>
                        <th>year</th>
                        <th>bike</th>
                        <th>walk</th>
                        <th>train</th>
                        <th>bus</th>
                        <th>car</th>
                        {/* <th>total CO2e</th>
                        <th>total CO2e saved</th> */}
                    </tr>
                    <tbody>
                        {/* {this.props.reduxState.logs.logListReducer.map(log => {
                            return <ModalResultsList logList={log} />
                            })} */}
                    </tbody>
                    <tfooter>
                        {/* totals */}
                    </tfooter>
                </table> 
                <br />
                <br /> 
                <br />
            </div>


        )
    }
}

export default connect(mapStateToProps)(MonthlyResultsPage);

// notes
// total CO2e
// total CO2e saved
