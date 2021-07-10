import React from 'react'
import ReactApexChart from 'react-apexcharts';

const DisbursmentWindow = () => {

    const state = {

        series: [{
            name: 'Other',
            data: [43, 21]
        }, {
            name: 'ADB Private',
            data: [43, 32]
        }, {
            name: 'ADB Public',
            data: [11, 20]
        }, {
            name: 'ADF',
            data: [24, 10]
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
                width: 1,
                colors: ['#fff']
            },
            title: {
                text: undefined
            },
            xaxis: {
                categories: ['Plan', 'Actual'],
                labels: {
                    formatter: function (val) {
                        return val + "M"
                    }
                }
            },
            yaxis: {
                title: {
                    text: undefined
                },
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return val + "M"
                    }
                }
            },
            fill: {
                colors: ['#74B1A9', '#BBC1C1', '#4E6456', '#ADD1C1'],
                opacity: 1,

            },
            legend: {
                show:false,
                position: 'top',
                horizontalAlign: 'left',
                offsetX: 40,
                labels: {
                    colors: ['#008FFB', '#00E396', '#58BDFF', '#FF4560'],
                }
            }
        },
    };



    return (

        <div id="chart">
            <ReactApexChart options={state.options} series={state.series} type="bar" height={250} />
        </div>

    )
}

export default DisbursmentWindow
