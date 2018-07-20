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
        this.props.dispatch({type: 'GET_TOTAL'});
    }
    
    render() {
        return (
            
            <div className="resultPage">
                <div>
                    <Nav />
                </div>
                {/* <pre>{JSON.stringify(this.props.reduxStore.logs.logListReducer)}</pre> */}
                {/* <pre>{JSON.stringify(this.props.reduxStore.logs.totalReducer)}</pre> */}


                <h3>your results : all</h3>
                <table>
                    <thead>
                        <th>date</th>
                        <th>mode</th>
                        <th>destination</th>
                        <th># of miles</th>
                        <th>notes</th> 
                        <th>CO2e</th>
                        <th></th>
                        <th></th>
                    </thead>
                    <tfoot>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>total</td>
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