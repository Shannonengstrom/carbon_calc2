import React from 'react';
import { Link } from 'react-router-dom';
 
const DashboardLinks = () => (
    <div className="navbar">
        <div>
        <ul>
            <li>
            <Link to="/allresults">
                > all
            </Link>
            </li>
            <li>
            <Link to="/dailyresults">
                > by day
            </Link>
            </li>
            <li>
            <Link to="/monthlyresults">
                > by month
            </Link>
            </li>
            <li>
            <Link to="/yearlyresults">
                > by year
            </Link>
            </li>
            <li>
            <Link to="/modalresults">
                > by mode
            </Link>
            </li>
        </ul>
        </div>
    </div>
);

export default DashboardLinks;

