import React, { PureComponent } from "react";
import Highcharts from "highcharts";
import pareto from 'highcharts/modules/pareto';
pareto(Highcharts)


export default class BandWorkloadParetoChart extends PureComponent {
  instance;

  options ={
    chart: {
        renderTo: 'container',
        type: 'column',
        height:500,
        backgroundColor:'transparent',
    },
    title: {
        text:undefined
    },
    tooltip: {
        shared: true
    },
    xAxis: {
        categories: [
            'Disbursement closing date expired',
            'First Disbursement delays',
            'Problem Project- self rating',
            ' Slow Disbursement',
            'Slow procurement',
            'Watch List'
        ],
        crosshair: true
    },
    yAxis: [{
        title: {
            text: ''
        }
    }, {
        title: {
            text: ''
        },
        minPadding: 0,
        maxPadding: 0,
        max: 100,
        min: 0,
        opposite: true,
        labels: {
            format: "{value}%"
        }
    }],
    series: [{
        type: 'pareto',
        name: 'Percentage ',
        yAxis: 1,
        zIndex: 10,
        baseSeries: 1,
        tooltip: {
            valueDecimals: 2,
            valueSuffix: '%'
        }
    }, {
        name: 'Numbers Of Project',
        type: 'column',
        zIndex: 2,
        data: [1598,1184,755, 222, 151, 105]
    }]
}

  componentDidMount() {
    this.instance = Highcharts.chart("dummy-id", this.options);
  }

  render() {
    return (
      <div>
        <div id="dummy-id" />
      </div>
    );
  }
}
