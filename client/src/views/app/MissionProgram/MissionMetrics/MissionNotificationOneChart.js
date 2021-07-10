import React, { PureComponent } from "react";
import Highcharts from "highcharts";


export default class TotalMissionPerMonthChart extends PureComponent {
  instance;
  options = {
    chart: {
        type: 'bar',
        height:160,
        backgroundColor:'transparent'
    },
    title: {
        text:undefined
    }, 
    xAxis: {
        categories: ['Finalized','Ongoing ', 'Unsigned' , 'Signed', 'NA'],
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
        data: [123, 95, 75, 62, 12 ],
        color: 'Green',
        zonesAxis: 'y',
        zones: [
          {
            value: 100,
            color: '#7CB5EC',
        }, {
            color: '#406FC3',
        }]
    }]
}
  componentDidMount() {
    this.instance = Highcharts.chart("missionNotificationon", this.options);
  }

  render() {
    return (
      <div className="missionChart">
        <div id="missionNotificationon" />
      </div>
    );
  }
}
