import React, { Component } from 'react';
import { connect } from 'react-redux';
import AllResultsList from './AllResultsList/AllResultsList'

const mapStateToProps = reduxState => ({
    reduxState,
});

class AllResultsPage extends Component {
    componentDidMount() {
        // use component did mount to dispatch an action to request the AllResultsList from the API
        this.props.dispatch({type: 'GET_LOGS'});
    }
    
    render() {
        return (
            <div>
                <pre>{JSON.stringify(this.props.reduxState)}</pre>
                <h3>your results : all</h3>
                <table>
                    <thead>
                        <tr>
                            <th>date</th>
                            {/* <th>mode</th> */}
                            <th>destination</th>
                            <th># of miles</th>
                            <th>notes</th> 
                            {/* <th>total CO2e</th>
                            <th>total CO2e saved</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>{this.props.reduxState.AllResultsPage.map(log => {
                            return <AllResultsList logList={log} />
                            })}
                        </tr>
                    </tbody>
                    <tfooter>
                        {/* totals */}
                    </tfooter>
                </table> 
            </div>


        )
    }
}

export default connect(mapStateToProps)(AllResultsPage);

// notes
// total CO2e
// total CO2e saved
