import React from 'react';
import { Redirect } from 'react-router-dom';

//results pages
import AllResultsPage from '../ResultsPages/AllResultsPage/AllResultsPage'
import DailyResultsPage from '../ResultsPages/DailyResultsPage/DailyResultsPage'
import MonthlyResultsPage from '../ResultsPages/MonthlyResultsPage/MonthlyResultsPage'
import YearlyResultsPage from '../ResultsPages/YearlyResultsPage/YearlyResultsPage'
import ModalResultsPage from '../ResultsPages/ModalResultsPage/ModalResultsPage'

class DashboardTiles extends Component { 
    
    constructor() {
        super(); 
        this.state = {
        toAllResults: false, 
        toDailyResults: false, 
        toMonthlyResults: false, 
        toYearlyResults: false, 
        toModalResults: false
        }
    }
    
    handleClickAll = () => {
        (this.setState({toAllResults: true}));
    }

    handleClickDaily = () => {
        (this.setState({toDailyResults: true}));
    }

    handleClickMonthly = () => {
        (this.setState({toMonthlyResults: true}));
    }

    handleClickYearly = () => {
        (this.setState({toYearlyResults: true}));
    }

    handleClickModal = () => {
        (this.setState({toModalResults: true}));
    }

    render() {
        if(this.state.toAllResults === true) {
            return <Redirect to='/allresults'/>
        }
        if(this.state.toDailyResults === true) {
            return <Redirect to='/dailyresults'/>
        }
        if(this.state.toMonthlyResults === true) {
            return <Redirect to='/monthlyresults'/>
        }
        if(this.state.toYearlyResults === true) {
            return <Redirect to='/yearlyresults'/>
        }
        if(this.state.toModalResults === true) {
            return <Redirect to='/modalresults'/>
        }

        return (
        <div>
            <div>
                <h2>Tiles will go here - with links to results!</h2>
            </div>
            
            <div>
                <button onClick={this.handleClickAll}>
                    > All 
                </button>
                <button onClick={this.handleClickDaily}>
                    > by day
                </button>
                <button onClick={this.handleClickMonthly}>
                    > by month
                </button>
                <button onClick={this.handleClickYearly}>
                    > by year
                </button>
                <button onClick={this.handleClickModal}>
                    > by mode
                </button>
            </div>
        </div>
        );
    }
}


// const DashboardTiles = props => (
//   <div>
//     <h2>Tiles will go here - with links to results!</h2>
   
//   </div>
// );

export default DashboardTiles;
