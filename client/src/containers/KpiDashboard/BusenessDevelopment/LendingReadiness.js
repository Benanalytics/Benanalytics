import React from 'react'

import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import HC_more from 'highcharts/highcharts-more';
HC_more(Highcharts)



const LendingReadiness = () => {
    const lebels = ['Approved', 'PAR Approved', 'PCN Approved', 'Pre PCN', 'Lending ']
    const option = {
        chart: {
            type: 'waterfall',
            zoomType: {
            },
            backgroundColor:'transparent'
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
            text: ''
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
        navigator: {
            enabled: false,
        },
        yAxis: {
            levels:{
                enabled:false
            },
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
        rangeSelector:{
            enabled: false
        },
        series: [{
            upColor: Highcharts.getOptions().colors[2],
            color: Highcharts.getOptions().colors[3],
            data: [{
                name: 'Q1',
                y: 100,
                color: '#008FFB'
            }, {
                name: 'Q2',
                y: 500,
                color: '#00E396'
            }, {
                name: 'Q3',
                y: 200,
                color: '#FEB019'
            }, {
                name: 'Q4',
                color: '#FF4560',
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
        <div className="remove-y">
            <HighchartsReact
                highcharts={Highcharts}
                constructorType={"stockChart"}
                options={option}
            />
        </div>
    )
}

export default LendingReadiness
