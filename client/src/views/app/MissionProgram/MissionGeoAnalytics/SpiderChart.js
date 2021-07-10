import React from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import HighchartMore from 'highcharts/highcharts-more';
// HighchartMore(HighchartsReact);
require('highcharts/modules/exporting')(Highcharts);
require('highcharts/highcharts-more')(Highcharts);

const SpiderChart = () => {
  const op = {
    chart: {
      polar: true,
      type: 'line',
    },

    accessibility: {
      description: 'Description .',
    },

    title: {
      text: 'Budget vs spending',
      x: -80,
    },

    pane: {
      size: '80%',
    },

    xAxis: {
      categories: [
        'Sales',
        'Marketing',
        'Development',
        'Customer Support',
        'Information Technology',
        'Administration',
      ],
      tickmarkPlacement: 'on',
      lineWidth: 0,
    },

    yAxis: {
      gridLineInterpolation: 'polygon',
      lineWidth: 0,
      min: 0,
    },

    tooltip: {
      shared: true,
      pointFormat:
        '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>',
    },

    legend: {
      align: 'right',
      verticalAlign: 'middle',
      layout: 'vertical',
    },

    series: [
      {
        name: 'Allocated Budget',
        data: [43000, 19000, 60000, 35000, 17000, 10000],
        pointPlacement: 'on',
      },
      {
        name: 'Actual Spending',
        data: [50000, 39000, 42000, 31000, 26000, 14000],
        pointPlacement: 'on',
      },
    ],

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              align: 'center',
              verticalAlign: 'bottom',
              layout: 'horizontal',
            },
            pane: {
              size: '70%',
            },
          },
        },
      ],
    },
  };
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={op} />
    </div>
  );
};

export default SpiderChart;
