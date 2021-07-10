import React, { PureComponent } from "react";
import Highcharts from "highcharts";


export default class LendingOne extends PureComponent {
  instance;
  options = {
    chart: {
        type: 'bar',
        height:120,
        backgroundColor:'transparent'
    },
    title: {
        text:undefined
    }, 
    xAxis: {
                categories: ['Unplanned','Planned'],
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
        name: '',
        color:'#9ACFF9',
        data: [652,434],
    },
  ]

}
  componentDidMount() {
    setTimeout(() => {
      this.instance = Highcharts.chart("LendingOne", this.options);
    }, 500);
  }

  render() {
    return (
      <div className="LendingOne">
        <div id="LendingOne" />
      </div>
    );
  }
}


