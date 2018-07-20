import React, { Component } from 'react';
import {Bar, Line, Pie} from 'chart.js';

// const myBarChart = new Chart(ctx, {
//     type: 'horizontalBar',
//     data: data,
//     options: options
// });

class DashboardChart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chartData:{
                labels: [

                ], 
                data: [

                ], 
                backgroundColor:[

                ]

            }
        }
    }
    
    render () {
        return (
            <div className="chart">
            CHART COMPONENT
                <Bar
                    date={this.state.chartData}
                    options={{
                        maintainAspectRatio: false
                    }} 
                />
            </div>
        );
    }
}

export default DashboardChart;

