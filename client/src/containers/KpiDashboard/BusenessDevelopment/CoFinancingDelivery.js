import React from 'react'
import ReactApexChart from 'react-apexcharts';

const CoFinancingDelivery = () => {
    const state = {

        series: [{
            name: 'Website Blog',
            type: 'column',
            data: [320, 257, 160]
        }, {
            name: 'Social Media',
            type: 'line',
            data: [22, 12, 16]
        }],
        options: {
            chart: {
                height: 350,
                type: 'line',
                toolbar: false,
            },
            stroke: {
                width: [0, 4],
                colors: ['#5D86BD',]
            },
            title: {
            },
            dataLabels: {
                enabled: true,
                enabledOnSeries: [1]
            },
            xaxis: {
                categories: ['Approved', 'PCN', 'PAR'],
            },
            yaxis: [{
                show: false,
                title: {
                },

            }, {
                opposite: true,
                title: {
                }
            }],
            legend: {
                show: false,
            },
            fill: {
                opacity: 1,
                colors: ['#5D86BD',]
            }
        },


    };

    return (
        <div id="chart">
            <ReactApexChart options={state.options} series={state.series} type="line" height={350} />
        </div>
    )
}

export default CoFinancingDelivery
