import React from 'react';
import LogForm from './LogForm';
import Nav from '../../components/Nav/Nav';

const CarLogPage = props => (
  <div className="carLogPage">
    <Nav />
    <h2>new log : car</h2>
    <LogForm />
  </div>
);

export default CarLogPage;
