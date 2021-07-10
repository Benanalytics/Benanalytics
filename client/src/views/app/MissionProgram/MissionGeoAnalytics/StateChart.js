import React, { PureComponent } from 'react';
import Highcharts from 'highcharts';

export default class StateChart extends PureComponent {
  instance;
  options = {
    chart: {
      type: 'bar',
      height: 560,
      background: 'transparent',
      events: {
        click: function (props) {
          console.log(props);
        },
      },
    },
    title: {
      text: undefined,
    },
    xAxis: {
      categories: [
        'Abia',
        'Adamawa',
        'Akwa',
        'Anambra',
        'Bauchi',
        'Bayelsa',
        'Benue',
        'Borno',
        'Cross River',
        'Delta',
        'Ebonyi',
        'Edo',
        'Ekiti',
        'Enugu',
        'Gombe',
        'Imo',
        'Jigawa',
        'Kaduna',
        'Kano',
        'Katsina',
        'Kebbi',
        'Kogi',
        'Kwara',
        'Lagos',
        'Nasarawa',
        'Niger',
        'Ogun',
        'Ondo',
        'Osun',
        'Oyo',
        'Plateau',
        'Rivers',
        'Sokoto',
        'Taraba',
        'Yobe',
        'Zamfara',
        'FCT ',
      ],
      title: {
        text: undefined,
      },
    },
    yAxis: {
      enabled: false,
      labels: {
        enabled: false,
      },
    },
    tooltip: {
      valueSuffix: '',
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true,
        },
      },
    },
    legend: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: 'Thruput',
        data: [
          2021, 2002, 1990, 1978, 1941, 1950, 1912, 1890, 1844, 1841, 1812,
          1801, 1760, 1743, 1712, 1489, 1345, 1311, 1230, 950, 750, 620, 432,
          412, 381, 377, 361, 351, 330, 321, 290, 281, 279, 262, 228, 217, 181,
        ],
        color: '#F66E6E',
        zonesAxis: 'y',
        zones: [
          {
            value: 217,
            color: 'yellow',
          },
          {
            value: 228,
            color: '#F78686',
          },
          {
            value: 262,
            color: '#F78686',
          },
          {
            value: 279,
            color: '#F78686',
          },
          {
            value: 281,
            color: '#F78686',
          },
          {
            value: 290,
            color: '#F78686',
          },
          {
            value: 321,
            color: '#F78686',
          },
          {
            value: 330,
            color: '#F78686',
          },
          {
            value: 351,
            color: '#F78686',
          },
          {
            value: 361,
            color: '#F78686',
          },
          {
            value: 377,
            color: '#F78686',
          },
          {
            value: 381,
            color: '#F78686',
          },
          {
            value: 412,
            color: '#F78686',
          },
          {
            value: 432,
            color: '#FDD2D2',
          },
          {
            value: 620,
            color: '#FDD2D2',
          },
          {
            value: 750,
            color: '#FDD2D2',
          },
          {
            value: 950,
            color: '#FDD2D2',
          },
          {
            value: 1230,
            color: '#FDD2D2',
          },
        ],
      },
    ],
  };
  componentDidMount() {
    this.instance = Highcharts.chart('statechart', this.options);
  }

  render() {
    return (
      <div className="statechart">
        <div id="statechart" />
      </div>
    );
  }
}
