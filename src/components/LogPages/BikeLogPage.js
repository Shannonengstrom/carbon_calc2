import React, {Component} from 'react';
import { connect } from 'react-redux';
import LogForm from './LogForm';
import Nav from '../../components/Nav/Nav';

const mapReduxToProps = (reduxStore) => ({
  reduxStore
});

class BikeLogPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
        co2_emis_id: 5
    }
  }


  sendMultToRedux = () => {
    const body = this.state.co2_emis_id;
    console.log(body);
    const action = {type: 'ADD_MULTIPLIERID', payload: body};
    this.props.dispatch(action);
    console.log(action);
  }

  componentDidMount () {
    this.sendMultToRedux();
  } 

  render() {

    

    return (
      <div className="bikeLogPage">
        <Nav />
        <h2>new log : bike</h2>
        <pre>{JSON.stringify(this.state)}</pre>
        <LogForm co2={this.state}/>
        {/* this.props.co2 */}
      </div>
    );
  }
}

export default connect(mapReduxToProps)(BikeLogPage);

