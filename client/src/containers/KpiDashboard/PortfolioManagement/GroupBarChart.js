import React from 'react'
import ReactApexChart from 'react-apexcharts';

const GroupBarchart = () => {
    let state = {

        series: [{
            name: 'Net Profit',
            data: [15, 12.8]
        }],
        options: {
            chart: {

                toolbar: {
                    show: false,
                },
                type: 'bar',
                height: 450
            },
            grid: {
                show: false
            },            
            plotOptions: {
                bar: {
                    dataLabels: {
                        position: 'top'
                    },                    
                    horizontal: false,
                    columnWidth: '55%',
                    endingShape: 'rounded'
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: false,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: ['Plan', 'Actual',],
            },
            yaxis: {
                show: false,
                title: {
                    text: ''
                }
            },
            fill: {
                opacity: 1
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        // return "$ " + val + " thousands"
                        return val
                    }
                }
            }
        },


    };
    return (
        <div id="chart" >
            <ReactApexChart options={state.options} series={state.series} type="bar" height={280} />
        </div >
    )
}

export default GroupBarchart
