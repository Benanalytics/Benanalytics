import React, { PureComponent } from "react";
import Highcharts from "highcharts";


export default class TotalMissionPerMonthChart extends PureComponent {
  instance;

  options ={
    chart: {
        type: 'area',
        backgroundColor:'transparent'

    },
    title: {
        text: 'Total Mission per Month '
    },
    subtitle: {
        text: 'This section provides detailed breakdown of mission planning in one-year period.Area chart shows mission volume, and Bar charts give us information about the distribution according to work program category: Lending Program, Pipeline and Business Development, and portfolio management',
        color:'blue'
    },

    legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        enabled:false,
        x: 100,
        y: 70,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF'
    },
    xAxis: {
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
                        'Dec',
                    ],
    },
    yAxis: {
        title: {
            text: "Number"
        }
    },
    plotOptions: {
        area: {
            fillOpacity: 1
        }
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Total Mission',
        data: [5, 1, 4, 4, 5, 2, 3,6,3,5,3, 7]
    }],
}
  componentDidMount() {
      setTimeout(() => {
        this.instance = Highcharts.chart("dummy-id", this.options);
      }, 1000);
  }

  render() {
    return (
      <div>
        <div id="dummy-id" />
      </div>
    );
  }
}
