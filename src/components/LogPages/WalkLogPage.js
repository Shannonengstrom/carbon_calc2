import React from 'react';
import LogForm from './LogForm';
import Nav from '../../components/Nav/Nav';

const WalkLogPage = props => (
  <div className="walkLogPage">
    <Nav />
    <h2>new log : walk</h2>
    <LogForm />
  </div>
);

export default WalkLogPage;
