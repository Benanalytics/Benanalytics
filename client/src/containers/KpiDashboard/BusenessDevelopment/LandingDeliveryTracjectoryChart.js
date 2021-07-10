import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts/highcharts-gantt';
// import HighchartMore from 'highcharts/highcharts-more';
import React, { useEffect, useRef, useState } from 'react';

// HighchartMore(Highcharts);

const LendingDeliveryTrajectoryChart = () => {
    const chartRef = useRef(null);

    const op = {
        
        chart: {
            type: 'bar',
            height:230,
            backgroundColor: 'transparent'
        },
        title: {
            text:undefined
        },
        xAxis: {
            categories: ['Plan', 'Actual',]
        },
        yAxis: {
            lebels:{
                enabled: false
            },
            min: 0,
            title: {
                text:undefined
            }
        },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            },
            bar:{
                dataLabels:{
                    enabled: true
                }
            }
        },
        series: [{
            name: 'Aproved',
            data: [5, 0,]
        }, {
            name: 'BRAG',
            data: [2, 0,]
        }, {
            name: 'Reserve',
            data: [3, 0,]
        }, {
            name: 'Actual',
            data: [0, 3,]
        }
    ]
    }

    return (
        <div className="remove-y">
            <HighchartsReact
                highcharts={Highcharts}
                options={op}
                ref={chartRef}
            />
        </div>
    );
};

export default LendingDeliveryTrajectoryChart;
