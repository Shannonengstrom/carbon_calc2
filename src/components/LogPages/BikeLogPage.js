import React from 'react';
import LogForm from './LogForm';
import Nav from '../../components/Nav/Nav';

const BikeLogPage = props => (
  <div className="bikeLogPage">
    <Nav />
    <h2>new log : bike</h2>
    <LogForm />
  </div>
);

export default BikeLogPage;

