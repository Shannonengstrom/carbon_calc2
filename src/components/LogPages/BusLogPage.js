import React from 'react';
import LogForm from './LogForm';
import Nav from '../../components/Nav/Nav';

const BusLogPage = props => (
  <div className="busLogPage">
    <Nav />
    <h2>new log : bus</h2>
    <LogForm />
  </div>
);

export default BusLogPage;
