import React from 'react'

import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import HC_more from 'highcharts/highcharts-more';
HC_more(Highcharts)



const LendingQuarterlyPlanChart = () => {
    const lebels = ['Q1', 'Q2', 'Q3', 'Q4', 'Lending']
    const option = {
        chart: {
            type: 'waterfall',
            zoomType: {
            },
            backgroundColor: 'transparent'
        },
        rangeSelector: {
            allButtonsEnabled: false,
            inputEnabled: false
        },
        scrollbar: {
            enabled: false,
        },
        credits: {
            enabled: false,
        },
        zoom: false,
        title: {
        },
        xAxis: {
            type: 'text',
            labels:
            {
                formatter: function (value) {
                    return lebels[value.value]
                }
            },
        },
        rangeSelector: {
            enabled: false
        },
        navigator: {
            enabled: false,
        },
        yAxis: {
            title: {
                text: 'USD'
            },
        },

        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: '<b>${point.y:,.2f}</b> USD'
        },
        series: [{
            upColor: Highcharts.getOptions().colors[2],
            color: Highcharts.getOptions().colors[3],
            data: [{
                name: 'Q1',
                y: 100,
                color: '#87AD40'
            }, {
                name: 'Q2',
                y: 500,
                color: '#87AD40'
            }, {
                name: 'Q3',
                y: 200,
                color: '#87AD40'

            },
            {
                name: 'Q4',
                color: '#87AD40',
                y: 700
            }, {
                name: 'Lending',
                isIntermediateSum: true,
                color: '#3E6052'
            }],
            dataLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold'
                },
            },
            pointPadding: 0
        }]
    }

    return (
        <div>
            <div className="remove-y" >
                <HighchartsReact
                    highcharts={Highcharts}
                    constructorType={"stockChart"}
                    options={option}
                />
            </div>
        </div>
    )
}

export default LendingQuarterlyPlanChart
