import React, { Component } from 'react';
import { connect } from 'react-redux';
import AllResultsList from './AllResultsList/AllResultsList'
import AllResultsTotal from './AllResultsTotal/AllResultsTotal'
import Nav from '../../../components/Nav/Nav';



const mapStoreToProps = reduxStore => ({
    reduxStore,
});

class AllResultsPage extends Component {
    componentDidMount = () => {
        // use component did mount to dispatch an action to request the AllResultsList from the API
        this.props.dispatch({type: 'GET_LOGS'});
        this.props.dispatch({type: 'GET_TOTAL'});
    }
    
    render() {
        return (
            
            <div className="resultPage">
                <div>
                    <Nav />
                </div>
                <pre>{JSON.stringify(this.props.reduxStore.logs.logListReducer)}</pre>

                <h3>your results : all</h3>
                <table>
                    <thead>
                        <th>date</th>
                        <th>mode</th>
                        <th>destination</th>
                        <th># of miles</th>
                        <th>notes</th> 
                        <th>total CO2e</th>
                    </thead>
                    <tfoot>
                        <tr>
                            <td>
                                {/* <AllResultsTotal /> */}
                                {this.props.reduxStore.logs.totalReducer.totalEmission}
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