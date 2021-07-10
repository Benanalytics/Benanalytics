import React from 'react'
import ReactApexChart from 'react-apexcharts';

const CoFinancingDeliveryChart = () => {
    const state = {
        series: [{
            name: 'PRODUCT A',
            data: [41, 67, 22, 43]
        }, {
            name: 'PRODUCT B',
            data: [20, 8, 13, 27]
        }],
        options: {
            chart: {
                type: 'bar',
                height: 350,
                stacked: true,
                toolbar: {
                    show: true
                },
                zoom: {
                    enabled: true
                }
            },
            dataLabels: {
                enabled: true,
                formatter: function (val) {
                    return val;
                },
                offsetY: -20,
                style: {
                    fontSize: '12px',
                    colors: ["#304758"]
                }
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    legend: {
                        position: 'bottom',
                        offsetX: -10,
                        offsetY: 0
                    }
                }
            }],
            plotOptions: {
                bar: {
                    borderRadius: 5,
                    horizontal: false,
                },
            },
            xaxis: {
                categories: ['Q1', 'Q2', 'Q3', 'Q4',],
            },
            legend: {
                show: false
            },
            fill: {
                opacity: 1,
                colors: ['#C4DFE6', '#66A5AD']
            }
        },


    };
    return (
        <div id="chart">
            <ReactApexChart options={state.options} series={state.series} type="bar" height={350} />
        </div>
    )
}

export default CoFinancingDeliveryChart
