import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../components/Nav/Nav';
import DashboardLinks from './DashboardLinks/DashboardLinks';
// import DashboardChart from './DashboardChart/DashboardChart';


import { USER_ACTIONS } from '../../redux/actions/userActions';


const mapStateToProps = state => ({
  user: state.user,
});

class DashboardPage extends Component {
  componentDidMount() {
    this.props.dispatch({type: USER_ACTIONS.FETCH_USER});
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

  render() {
    let content = null;

    if (this.props.user.userName) {
      content = (
        <div>
          <p>
            Dashboard
          </p>
        </div>
      );
    }

    return (
      <div>
        <Nav />
        { content }
        <DashboardLinks />
        Dashboard Chart here
        {/* <DashboardChart /> */}
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(DashboardPage);
