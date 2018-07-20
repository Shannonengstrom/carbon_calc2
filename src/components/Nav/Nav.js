import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { triggerLogout } from '../../redux/actions/loginActions';


const mapStateToProps = state => ({
  user: state.user,
});

class Nav extends Component {

  logout = () => {
    this.props.dispatch(triggerLogout());
    // this.props.history.push('home');
  }

  render() {
    let content = null;

    if (this.props.user.userName) {
      content = (
        <div className="nav-right">
          <ul>
            <li>
              <h1
                id="welcome"
              >
                Welcome, { this.props.user.userName }!
              </h1>
            </li>
            <li>
              <button
                onClick={this.logout}
              >
                Log Out
              </button>
            </li>
          </ul>
        </div>
      );
    }

    return (
        <div className="navbar">
          <div className="nav-left">
            <ul>
              <li>
                <Link to="/user">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
            { content }
        </div>
    );
  }
}

export default connect(mapStateToProps)(Nav);
