import Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import HighchartsReact from 'highcharts-react-official';
import React, { useEffect, useRef, useState } from 'react';

HC_exporting(Highcharts);

const PortfolioByProduct = () => {
  const chartRef = useRef(null);

  const option = {
    chart: {
        type: 'column'
    },
    title: {
        text: undefined
    },
    subtitle: {
        text: undefined
    },
    xAxis: {
        categories: [
          '2008',
          '2010',
          '2012',
          '2014',
          '2016',
          '2018',
          '2020',
          '2012',
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Rainfall (mm)'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0,
          dataLabels: {
            enabled: true
        }
        },
        bar: {
      }
    },
    series: [{
        name: 'Non-Sovereign  ',
        data: [4, 7, 7,9, 4, 6, 5]

    } ]
}
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

export default PortfolioByProduct;
