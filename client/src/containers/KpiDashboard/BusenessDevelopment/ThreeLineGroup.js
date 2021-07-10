import React from 'react'
import ReactApexChart from 'react-apexcharts';

const ThreeLineGroupChart = () => {
    const state = {
        series: [{
            name: 'Board Approved',
            data: [64, 22, 43]
        }, {
            name: 'Appraisal Report Approved ',
            data: [52, 13, 44]
        }
            , {
            name: 'Concept Note Approved',
            data: [32, 63, 44]
        }, {
            name: 'Pre-Concept Note',
            data: [34, 24, 88]
        }
        ],
        options: {
            chart: {
                type: 'bar',
                height: 430
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                    dataLabels: {
                        position: 'top',
                    },
                }
            },
            dataLabels: {
                enabled: true,
                offsetX: -6,
                style: {
                    fontSize: '12px',
                    colors: ['#fff']
                }
            },
            stroke: {
                show: true,
                width: 1,
                colors: ['#fff']
            },
            tooltip: {
                shared: true,
                intersect: false
            },
            xaxis: {
                categories: ['AHVP', 'PEVP', 'PIVP'],
            },
            colors: ['#008FFB', '#00E396', '#FEB019','#FF4560'],
            legend: {
                show: false
            }
        },


    };
    return (
        <div id="chart">
            <ReactApexChart options={state.options} series={state.series} type="bar" height={500} />
        </div>
    )
}

export default ThreeLineGroupChart