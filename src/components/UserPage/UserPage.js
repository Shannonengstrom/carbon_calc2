import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import { USER_ACTIONS } from '../../redux/actions/userActions';

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

  render() {

    return (
      <div>
        <Nav />
        {/* { content } */}
          <div className="top">
            <div>
            </div>
            <div>
              <h1>Welcome!</h1>
              <p>CarbonCalc motivates you to use non-motorized transportation by helping you track your daily trips and your overall transport carbon footprint. </p>
            </div>
            <div>
            </div>
          </div>
          <br />
      
          <div className="tile-container">
            <div className="tile-car">
                <Link to="/carlog" className="tile-car">
                    + car
                </Link>
            </div>
            <div className="tile-walk">
                <Link to="/walklog" className="tile-walk">
                    + walk
                </Link>
            </div>
            <div className="tile-train">
                <Link to="/trainlog" className="tile-train">
                    + train
                </Link>
            </div>
            <div className="tile-bus">
                <Link to="/buslog" className="tile-bus">
                    + bus
                </Link>
            </div>
            <div className="tile-bike">
                <Link to="/bikelog" className="tile-bike">
                    + bike
                </Link>
            </div>
          </div>

        <br/>
          <div className="bottom">
              <div>
              </div>
              <div>
                <h2>Why track your transport carbon footprint?</h2>
                  <p>According to the United States Environmental Protection Agency, the average vehicle emmits 4.67 metric tons of CO2 emissions every year.</p>
              <div className="bottom-left">
                <p>
                In other words, one passenger vehicle driven for one year (11,446 miles at 22mpg) is equivalent to: </p>
                <p>CO2 emissions from</p>
                  <ul>
                    <li>   - 5,109 pounds of coal burned </li>
                    <br/>
                    <li>   - .062 tanker trucks worth of gasoline</li>
                    <br/>
                    <li>   - 10.8 barrels of oil consumed</li>
                  </ul>
                <p>Carbon sequestered by:</p>
                  <ul>
                    <li>   - 12 tree seedlings grown for 10 years</li>
                    <br/>
                    <li>   - 5.5 acres of U.S. forests in one year</li>
                  </ul>
              </div>
            </div>
          <div>
        </div>
      </div>
      <br />
      <br />
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);

