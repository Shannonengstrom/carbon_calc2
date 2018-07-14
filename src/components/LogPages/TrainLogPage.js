import React from 'react';
import LogForm from './LogForm';
import Nav from '../../components/Nav/Nav';

const TrainLogPage = props => (
  <div className="trainLogPage">
    <Nav />
    <h2>new log : train</h2>
    <LogForm />
  </div>
);

export default TrainLogPage;
