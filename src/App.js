
// react
import React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

// headers
import MainHeader from './components/Headers/MainHeader';

// main pages
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import UserPage from './components/UserPage/UserPage';
import DashboardPage from './components/DashboardPage/DashboardPage';

// log pages
import BikeLogPage from './components/LogPages/BikeLogPage';
import BusLogPage from './components/LogPages/BusLogPage';
import TrainLogPage from './components/LogPages/TrainLogPage';
import WalkLogPage from './components/LogPages/WalkLogPage';
import CarLogPage from './components/LogPages/CarLogPage';

// results pages
import AllResultsPage from './components/ResultsPages/AllResultsPage/AllResultsPage';
import DailyResultsPage from './components/ResultsPages/DailyResultsPage/DailyResultsPage';
import MonthlyResultsPage from './components/ResultsPages/MonthlyResultsPage/MonthlyResultsPage';
import YearlyResultsPage from './components/ResultsPages/YearlyResultsPage/YearlyResultsPage';
import ModalResultsPage from './components/ResultsPages/ModalResultsPage/ModalResultsPage';

// error pages
// import Error404Page from './components/ErrorPages/Error404Page';
// import Forbidden403Page from './components/ErrorPages/Forbidden403Page';



//styles
import './styles/main.css';

const App = () => (
  <div>
    <MainHeader title="CarbonCalc" />
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route
          path="/home"
          component={LoginPage}
        />
        <Route
          path="/register"
          component={RegisterPage}
        />
        <Route
          path="/user"
          component={UserPage}
        />
        <Route
          path="/dashboard"
          component={DashboardPage}
        />
        <Route
          path="/bikelog"
          component={BikeLogPage}
        />
        <Route
          path="/trainlog"
          component={TrainLogPage}
        />
        <Route
          path="/buslog"
          component={BusLogPage}
        />
        <Route
          path="/walklog"
          component={WalkLogPage}
        />
        <Route
          path="/carlog"
          component={CarLogPage}
        />
          <Route
          path="/carlog"
          component={CarLogPage}
        />
          <Route
          path="/allresults"
          component={AllResultsPage}
        />
          <Route
          path="/dailyresults"
          component={DailyResultsPage}
        />
          <Route
          path="/monthlyresults"
          component={MonthlyResultsPage}
        />
          <Route
          path="/yearlyresults"
          component={YearlyResultsPage}
        />
          <Route
          path="/modalresults"
          component={ModalResultsPage}
        />
        {/* OTHERWISE (no path!) */}
        <Route render={() => <h1>404</h1>} />
      </Switch>
    </Router>
  </div>
);

export default App;
