import React, {Component} from 'react';
import { connect } from 'react-redux';
import LogForm from './LogForm';
import Nav from '../../components/Nav/Nav';

const mapReduxToProps = (reduxStore) => ({
  reduxStore
});

class BusLogPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      defaults: {
        mode: 'bus',
        co2_emis: 2.2
      }
    }
  }


  sendMultToRedux = () => {
    const body = this.state.defaults;
    const action = {type: 'ADD_DEFAULTS', payload: body};
    this.props.dispatch(action);
  }

  componentDidMount () {
    this.sendMultToRedux();
  } 

  render() {
    return (
      <div className="busLogPage">
        <Nav />
        <h2>new log : bus</h2>
        <LogForm co2={this.state}/>
      </div>
    );
  }
}

export default connect(mapReduxToProps)(BusLogPage);

