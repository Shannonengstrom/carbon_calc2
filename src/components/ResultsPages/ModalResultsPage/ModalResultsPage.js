import React, { Component } from 'react';
import { connect } from 'react-redux';
// import ModalResultsList from './AllResultsList/AllResultsList'
import Nav from '../../../components/Nav/Nav';

const mapStateToProps = reduxState => ({
    reduxState,
});

class ModalResultsPage extends Component {
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
                <h3>your results : by mode</h3>
                <table>
                    <tr>
                        <th></th>
                        <th>miles to date</th>
                        <th>total C02e score</th>
                        <th>total C02e saved</th>
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

export default connect(mapStateToProps)(ModalResultsPage);

// notes
// total CO2e
// total CO2e saved
