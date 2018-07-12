
// react
import React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

// headers
import LoginHeader from './components/Headers/LoginHeader';
import MainHeader from './components/Headers/MainHeader';

// main pages
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import UserPage from './components/UserPage/UserPage';
import InfoPage from './components/InfoPage/InfoPage';

// log pages
import BusLogPage from './components/LogPages/BusLogPage';
import TrainLogPage from './components/LogPages/TrainLogPage';
import WalkLogPage from './components/LogPages/WalkLogPage';
import BikeLogPage from './components/LogPages/BikeLogPage';
import CarLogPage from './components/LogPages/CarLogPage';
import LogForm from './components/LogPages/LogForm';

// results pages
import AllResultsPage from './components/ResultsPages/AllResultsPage';
import DailyResultsPage from './components/ResultsPages/DailyResultsPage';
import MonthlyResultsPage from './components/ResultsPages/MonthlyResultsPage';
import YearlyResultsPage from './components/ResultsPages/YearlyResultsPage';
import ModalResultsPage from './components/ResultsPages/ModalResultsPage';

// error pages
import Error404Page from './components/ErrorPages/Error404Page';
import Forbidden403Page from './components/ErrorPages/Forbidden403Page';



//styles
import './styles/main.css';

const App = () => (
  <div>
    <MainHeader title="Project Base" />
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
          path="/info"
          component={InfoPage}
        />
        {/* OTHERWISE (no path!) */}
        <Route render={() => <h1>404</h1>} />

      </Switch>
    </Router>
  </div>
);

export default App;
