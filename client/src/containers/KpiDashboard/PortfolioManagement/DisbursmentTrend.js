import React from 'react'
import ReactApexChart from 'react-apexcharts'

const MixedChart = () => {

    const state = {

        series: [{
            name: 'ADB Public',
            type: 'column',
            data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6, 2.5, 2.8, 3.8, 4.6]
        }, {
            name: 'ADB Private',
            type: 'column',
            data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5, 1.1, 3, 3.1, 4]
        }, {
            name: 'Overall Disbursement Trend',
            type: 'line',
            data: [20, 29, 37, 36, 44, 45, 50, 58, 44, 45, 50, 58]
        }],
        options: {
            chart: {
                zoom: false,
                toolbar: {
                    show: true,
                },
                height: 350,
                type: 'line',
                stacked: false
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: [0, 0, 7],
                curve: 'smooth',
                colors: ['#21C36A', '#F53201', '#008FFB'],
            },
            colors: [ '#4E6456','#BBC1C1','#008FFB'],
            title: {
                text: undefined,
                align: 'left',
                offsetX: 110
            },
            xaxis: {
                categories: [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec'
                ],
            },
            yaxis: [
                {
                    axisTicks: {
                        show: true,
                    },
                    axisBorder: {
                        show: true,
                        color: '#BBC1C1'
                    },
                    labels: {
                        style: {
                            colors: '#BBC1C1',
                        }
                    },
                    title: {
                        text: "ADB Private(UA Million)",
                        style: {
                            color: '#BBC1C1',
                        }
                    },
                    tooltip: {
                        enabled: false
                    }
                },
                {
                    seriesName: 'Income',
                    opposite: true,
                    axisTicks: {
                        show: true,
                    },
                    axisBorder: {
                        show: true,
                        color: '#4E6456'
                    },
                    labels: {
                        style: {
                            colors: '#4E6456',
                        }
                    },
                    title: {
                        text: "ADB Public   (UA Million)",
                        style: {
                            color: '#4E6456',
                        }
                    },
                },
                {
                    seriesName: 'Revenue',
                    opposite: true,
                    axisTicks: {
                        show: true,
                    },
                    axisBorder: {
                        show: true,
                        color: '#008FFB'
                    },
                    labels: {
                        style: {
                            colors: '008FFB',
                        },
                    },
                    title: {
                        text: "Overall Disbursement (UA Million) ",
                        style: {
                            color: '#008FFB',
                        }
                    }
                },
            ],
            tooltip: {
                fixed: {
                    enabled: true,
                    position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
                    offsetY: 30,
                    offsetX: 60
                },
            },
            legend: {
                show: false,
                position: 'top',
                horizontalAlign: 'left',
                offsetX: 40,
                markers: {
                    radius: 0
                },
            }
        },
    }


    return (
        <div id="chart">
            <ReactApexChart options={state.options} series={state.series} type="line" height={350} />
        </div>
    )
}

export default MixedChart