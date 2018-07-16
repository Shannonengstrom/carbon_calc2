import React, { Component } from 'react';
import { connect } from 'react-redux';
// import DailyResultsList from './AllResultsList/AllResultsList'
import Nav from '../../../components/Nav/Nav';

const mapStateToProps = reduxState => ({
    reduxState,
});

class DailyResultsPage extends Component {
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
                <h3>your results : by day</h3>
                <table>
                    <tr>
                        <th>date</th>
                        <th>bike</th>
                        <th>walk</th>
                        <th>train</th>                         <th>train</th> 
                        <th>bus</th> 
                        <th>car</th> 
                        {/* <th>total CO2e</th>
                        <th>total CO2e saved</th> */}
                    </tr>
                    <tbody>
                        {/* {this.props.reduxState.logs.logListReducer.map(log => {
                            return <DailyResultsList logList={log} />
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

export default connect(mapStateToProps)(DailyResultsPage);

// notes
// total CO2e
// total CO2e saved
