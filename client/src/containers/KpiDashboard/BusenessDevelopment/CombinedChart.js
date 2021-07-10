import Highcharts from 'highcharts';
import HighchartsHeatmap from 'highcharts/modules/heatmap';
import HighchartsReact from 'highcharts-react-official';
import React, { useEffect, useRef, useState } from 'react';
import HC_exporting from 'highcharts/modules/exporting';
HC_exporting(Highcharts);

const CombinedChart = () => {
  const chartRef = useRef(null);

  const op = {
    title: {
      text: ' ',
    },
    chart: {
      exporting: {
        enabled: true,
      },
      backgroundColor: 'transparent',
    },
    xAxis: {
      title: 'ADB',
      categories: [
        'Agric',
        'Multi-Sector',
        'Water Supply.',
        'Energy',
        'Finance',
      ],
    },
    labels: {
      items: [
        {
          html: 'Bank vs Co-financing',
          style: {
            left: '50px',
            top: '18px',
            color:
              // theme
              (Highcharts.defaultOptions.title.style &&
                Highcharts.defaultOptions.title.style.color) ||
              'black',
          },
        },
      ],
    },
    series: [
      {
        type: 'column',
        name: 'Bank',
        data: [3, 2, 1, 3, 4],
      },
      {
        type: 'column',
        name: 'Co-Fiancing',
        data: [2, 3, 5, 7, 6],
      },
      {
        type: 'spline',
        name: 'No. of Project',
        data: [3, 2.67, 3, 6.33, 3.33],
        marker: {
          lineWidth: 2,
          lineColor: Highcharts.getOptions().colors[2],
          fillColor: 'white',
        },
      },
      {
        type: 'pie',
        name: 'Total consumption',
        data: [
          {
            name: 'Bank',
            y: 13,
            color: Highcharts.getOptions().colors[0], // Jane's color
          },
          {
            name: 'Co-Fiancing',
            y: 23,
            color: Highcharts.getOptions().colors[1], // John's color
          },
        ],
        center: [100, 80],
        size: 100,
        showInLegend: false,
        dataLabels: {
          enabled: false,
        },
      },
    ],

    exporting: {
      enabled: true,
    },
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={op} ref={chartRef} />
    </div>
  );
};

export default CombinedChart;
