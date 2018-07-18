import React, { Component } from 'react';
import { connect } from 'react-redux';
import AllResultsList from './AllResultsList/AllResultsList'
import Nav from '../../../components/Nav/Nav';



const mapStoreToProps = reduxStore => ({
    reduxStore,
});

class AllResultsPage extends Component {
    componentDidMount = () => {
        // use component did mount to dispatch an action to request the AllResultsList from the API
        this.props.dispatch({type: 'GET_LOGS'});
    }
    
    render() {
        return (
            
            <div className="resultPage">
                <div>
                    <Nav />
                </div>
                <pre>{JSON.stringify(this.props.reduxStore)}</pre>
                <h3>your results : all</h3>
                <table>
                    <tr>
                        <th>date</th>
                        <th>mode</th>
                        <th>destination</th>
                        <th># of miles</th>
                        <th>notes</th> 
                        <th>total CO2e</th>
                    </tr>
                    <tbody>
                        {this.props.reduxStore.logs.logListReducer.map(log => {
                            return <AllResultsList logList={log} />
                            })}
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

export default connect(mapStoreToProps)(AllResultsPage);

// notes
// total CO2e
// total CO2e saved
