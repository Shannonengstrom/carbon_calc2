import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


import Nav from '../../components/Nav/Nav';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';


const mapStateToProps = state => ({
  user: state.user,
});

class UserPage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

  logout = () => {
    this.props.dispatch(triggerLogout());
    // this.props.history.push('home');
  }

  render() {
    let content = null;

    if (this.props.user.userName) {
      content = (
        <div>
          <h1
            id="welcome"
          >
            Welcome, { this.props.user.userName }!
          </h1>
          <button
            onClick={this.logout}
          >
            Log Out
          </button>
        </div>
      );
    }

    return (
      <div>   
        <Nav />
        { content }
        <div className="tile-container">
          <div className="tile-cell">
            <div className="tile-car">
              <Link to="/carlog">
                  + car
              </Link>
            </div>
          </div>
          <div className="tile-cell">
            <div className="tile-walk">
              <Link to="/walklog">
                  + walk
              </Link>
            </div>
          </div>
          <div className="tile-cell">
            <div className="tile-train">
              <Link to="/trainlog">
                  + train
              </Link>
            </div>
          </div>
          <div className="tile-cell">
            <div className="tile-bus">
              <Link to="/buslog">
                  + bus
              </Link>
            </div>
          </div>
          <div className="tile-cell">
            <div className="tile-bike">
              <Link to="/bikelog">
                  + bike
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);

