import React from 'react'
import ReactApexChart from 'react-apexcharts';

const CoFinancingDeliveryChart2 = () => {
    const state = {

        series: [{
            data: [44, 55, 41, 64, 22, 43]
        }, {
            data: [53, 32, 33, 52, 13, 44]
        }],
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
                categories: ['Agribuiness', 'Multi-Sector','Water Supply','Finance','Transport','Energy'],
            },
            colors:['#66A5AD', '#C4DFE6'],
            legend:{
                show:false
            }
        },


    };
    return (
        <div id="chart">
            <ReactApexChart options={state.options} series={state.series} type="bar" height={430} />
        </div>
    )
}

export default CoFinancingDeliveryChart2
