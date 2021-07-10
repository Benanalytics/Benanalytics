import React, { PureComponent } from "react";
import Highcharts from "highcharts";


export default class GeoZoneChart extends PureComponent {
  instance;
  options = {
    chart: {
        type: 'bar',
        height:260,
        background:'transparent'
    },
    title: {
        text:undefined
    }, 
    xAxis: {
        categories: [
            'North South',
            'South West',
            'North East',
            'North East',
            'South East'
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
        name: 'Thruput',
        data: [1230,412,351,330,228],
        color: 'Green',
        zonesAxis: 'y',
        zones: [
            {
                value:217,
                color:'yellow',
            },
            {
                value:228,
                color:'yellow',
            },
            {
                value:262,
                color:'yellow',
            },
            {
                value:279,
                color:'pink',
            },
            {
                value:281,
                color:'pink',
            },
            {
                value:290,
                color:'pink',
            },
            {
                value:321,
                color:'#EED6B5',
            },
            {
                value:330,
                color:'#EED6B5',
            },
            {
                value:351,
                color:'#EED6B5',
            },
            {
                value:361,
                color:'#9DC8E3',
            },
            {
                value:377,
                color:'#9DC8E3',
            },
            {
                value:381,
                color:'#9DC8E3',
            },
            {
                value:412,
                color:'#9DC8E3',
            },
            {
                value:432,
                color:'#9DC8E3',
            },
            {
                value:620,
                color:'#9DC8E3',
            },
            {
                value:750,
                color:'#F2F2F2',
            },
            {
                value:950,
                color:'#F2F2F2',
            },
            {
                value:1230,
                color:'blue',
            },
        ]
    }]
}
  componentDidMount() {
    this.instance = Highcharts.chart("GeoZoneChart", this.options);
  }

  render() {
    return (
      <div className="GeoZoneChart">
        <div id="GeoZoneChart" />
      </div>
    );
  }
}
