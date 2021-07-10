import React, { PureComponent } from "react";
import Highcharts from "highcharts";


export default class TermReportChartTwo extends PureComponent {
  instance;
  options = {
    chart: {
        type: 'bar',
        height:110,
        backgroundColor:'transparent'
    },
    title: {
        text:undefined
    }, 
    xAxis: {
                categories: ['Disaproved','Aproved ', 'Progress'],
        title: {
            text: undefined
        },
    },
    yAxis: {
      enabled:false,
        labels: {
            enabled:false
        }
    },
    tooltip: {
        valueSuffix: ''
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
      enabled: false
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Mission Notification',
        color:'#9ACFF9',
        data: [553,426,325],
    },
  ]

}
  componentDidMount() {
    this.instance = Highcharts.chart("termReportchartTwo", this.options);
  }

  render() {
    return (
      <div className="termreporttwo">
        <div id="termReportchartTwo" />
      </div>
    );
  }
}
