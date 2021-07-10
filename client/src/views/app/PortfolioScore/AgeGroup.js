import Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import HighchartsReact from 'highcharts-react-official';
import React, { useEffect, useRef, useState } from 'react';

HC_exporting(Highcharts);

const AgeGroupChart = () => {
  const chartRef = useRef(null);

  const option = {
    chart: {
        type: 'column',
        height:'350px'
    },
    title: {
        text: undefined
    },
    subtitle: {
        text: undefined
    },
    xAxis: {
        categories: [
          '0-4',
          '5-9',
          '10-14',
        ],
        crosshair: true
    },
    yAxis: {
        title: {
            text: 'title'
        },
        enabled:true,
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
    legend:{
      enabled:false
    },
    series: [{
        name: 'Non-Sovereign  ',
        data: [{y:4, color:'#21C36A'},{y: 7, color:'#6EE7A4'}, {y:6, color:'#6EE7A4'} ]

    } ],
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

export default AgeGroupChart;
