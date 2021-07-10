import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts/highcharts-gantt';
// import HighchartMore from 'highcharts/highcharts-more';
import React, { useEffect, useRef, useState } from 'react';

// HighchartMore(Highcharts);

const ProcessListStacked = () => {
  const chartRef = useRef(null);

  const op = {
    chart: {
      type: 'column',
      backgroundColor: 'transparent',
    },
    title: {
      text: 'Trajectory of Activity By Categories',
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
        'Dec'
      ],
    },
    yAxis: {
      min: 0,
      title: {
        text: undefined,
      },
      stackLabels: {
        enabled: true,
        style: {
          fontWeight: 'bold',
          color:
            // theme
            (Highcharts.defaultOptions.title.style &&
              Highcharts.defaultOptions.title.style.color) ||
            'gray',
        },
      },
    },
    legend: {
      align: 'right',
      x: -30,
      verticalAlign: 'top',
      y: 25,
      floating: true,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || 'white',
      borderColor: '#CCC',
      borderWidth: 1,
      shadow: false,
    },
    tooltip: {
      headerFormat: '<b>{point.x}</b><br/>',
      pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}',
    },
    plotOptions: {
      column: {
        stacking: 'normal',
        dataLabels: {
          enabled: true,
        },
      },
    },
    series: [
      {
        name: 'Business Developent',
        data: [5, 3, 4, 7, 2, 5, 3, 4, 7, 2, 3, 1],
      },
      {
        name: 'Portfolio Management',
        data: [2, 2, 3, 2, 1, 2, 2, 3, 2, 1, 3, 1],
      },
      {
        name: 'Corporate Activities',
        data: [3, 4, 4, 2, 5, 3, 4, 4, 2, 5, 3, 1],
      },
      {
        name: 'Non Lending Activities	',
        data: [3, 4, 4, 2, 5, 3, 4, 4, 2, 5, 3, 1],
      },
    ],
  };

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={op}
        ref={chartRef}
      />
    </div>
  );
};

export default ProcessListStacked;
