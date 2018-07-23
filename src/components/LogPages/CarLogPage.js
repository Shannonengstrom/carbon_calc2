import React, {Component} from 'react';
import { connect } from 'react-redux';
import LogForm from './LogForm';
import Nav from '../../components/Nav/Nav';

const mapReduxToProps = (reduxStore) => ({
  reduxStore
});

class CarLogPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      defaults: {
        mode: 'car',
        co2_emis: .4045
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
      <div className="carLogPage">
        <Nav />
        <h2>new log : car</h2>
        {/* <pre>{JSON.stringify(this.state)}</pre> */}
        <LogForm co2={this.state}/>
      </div>
    );
  }
}

export default connect(mapReduxToProps)(CarLogPage);

