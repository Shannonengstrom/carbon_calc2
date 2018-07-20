import React, {Component} from 'react';
import { connect } from 'react-redux';
import LogForm from './LogForm';
import Nav from '../../components/Nav/Nav';

const mapReduxToProps = (reduxStore) => ({
  reduxStore
});

class TrainLogPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      defaults: {
        mode: 'train',
        co2_emis: 138
      }
    }
  }


  sendMultToRedux = () => {
    const body = this.state.defaults;
    console.log(body);
    const action = {type: 'ADD_DEFAULTS', payload: body};
    this.props.dispatch(action);
    console.log(action);
  }

  componentDidMount () {
    this.sendMultToRedux();
  } 

  render() {
    return (
      <div className="trainLogPage">
        <Nav />
        <h2>new log : train</h2>
        {/* <pre>{JSON.stringify(this.state)}</pre> */}
        <LogForm co2={this.state}/>
      </div>
    );
  }
}

export default connect(mapReduxToProps)(TrainLogPage);

