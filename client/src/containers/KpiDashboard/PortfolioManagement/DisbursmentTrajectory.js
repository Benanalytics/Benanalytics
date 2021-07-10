import React from 'react'
import ReactApexChart from 'react-apexcharts';

const DisbursmentTrajectory = () => {

    const state = {

        series: [{
            name: ' Disbursed',
            data: ['44',]
        }, {
            name: ' Undisbursed',
            data: ['53',]
        }],
        options: {
            chart: {
                type: 'bar',
                height: 350,
                stacked: true,
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                },
            },
            stroke: {
                width: 0,
                show: false,
                colors: ['#fff']
            },
            title: {
                show: false,
                text: undefined
            },
            xaxis: {
                show:false,
                categories: [],
                labels: {
                    show: false,
                    formatter: function (val) {
                        return val + "M"
                    }
                },
                axisBorder: {
                    show: false
                },
            },
            yaxis: {
                title: {
                    text: undefined
                },
                labels: {
                    show: false
                }
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return val + "M"
                    }
                }
            },
            fill: {
                opacity: 1,
                colors: ['#C2B9B0', '#7E6859'],
            },
            legend: {
                show: false,
                position: 'top',
                horizontalAlign: 'left',
                offsetX: 40
            }
        },


    };
    return (
        <div>
            <ReactApexChart options={state.options} series={state.series} type="bar" height={150} />
        </div>
    )
}

export default DisbursmentTrajectory