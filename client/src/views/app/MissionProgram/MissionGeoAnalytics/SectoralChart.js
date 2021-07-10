import Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import HighchartsReact from 'highcharts-react-official';
import React, { useEffect, useRef, useState } from 'react';

HC_exporting(Highcharts);

const SectoralChart = () => {
  const chartRef = useRef(null);

  const option = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
    },
    title: {
      text: undefined,
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
    },
    accessibility: {
      point: {
        valueSuffix: '%',
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
        },
      },
    },
    series: [
      {
        name: 'Brands',
        colorByPoint: true,
        data: [
          {
            name: 'Agriculture',
            y: 9,
          },
          {
            name: 'Environment',
            y: 1,
          },
          {
            name: "Finance, SMEs & Private Sector Dev't",
            y: 39,
          },
          {
            name: 'Industry',
            y: 2,
          },
          {
            name: 'Multi-Sector Investment',
            y: 20,
          },
          {
            name: 'Power',
            y: 16,
          },
          {
            name: "Social & Human Dev't.",
            y: 1.2,
          },
          {
            name: 'Transport',
            y: 0,
          },
          {
            name: 'Water & Sanitation',
            y: 6,
          },
        ],
      },
    ],
  };
  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={option}
        ref={chartRef}
      />
    </div>
  );
};

export default SectoralChart;
