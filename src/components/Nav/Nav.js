import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div className="navbar">
    <div>
      <ul>
        <li>
          <Link to="/dashboard">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/user">
            User Home
          </Link>
        </li>
        <li>
          <Link to="/bikelog">
            Bike Log
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Nav;
