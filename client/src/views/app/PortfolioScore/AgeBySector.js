import React, { PureComponent } from "react";
import Highcharts from "highcharts";
import HC_exportData from "highcharts/modules/export-data"
HC_exportData(Highcharts)

export default class AgeBySector extends PureComponent {
  instance;
  options = {
    chart: {
        type: 'bar',
        height:310,
        backgroundColor:'transparent'
    },
    title: {
        text:undefined
    }, 
    xAxis: {
                categories: [
                    "Transport and Urban Development",
                    "Water Supply and Sanitation",
                    "Financial Sector Development",
                    "Agriculture and Agrobusiness",
                    "Social and Human Capital Development",
                    "Power and Energy",
                    "Government and Multi-sector",
                    "Environment",
                ],
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
        data: [
                {y:553,color:'#21C36A'},
                {y:426,color:'#21C36A'},
                {y:325,color:'#6EE7A4'},
                {y:342,color:'#6EE7A4'},
                {y:690,color:'#6EE7A4'},
                {y:439,color:'#6EE7A4'},
                {y:832,color:'#6EE7A4'},
                {y:732,color:'#6EE7A4'}
            ],
    },
  ]

}
  componentDidMount() {
    this.instance = Highcharts.chart("AgeBySector", this.options);
  }

  render() {
    return (
      <div className="termreportone">
        <div id="AgeBySector" />
      </div>
    );
  }
}
