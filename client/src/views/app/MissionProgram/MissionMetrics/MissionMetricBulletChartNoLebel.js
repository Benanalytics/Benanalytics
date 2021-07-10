import Highcharts from 'highcharts';
import Moduler from 'highcharts/modules/bullet';
import HighchartsReact from 'highcharts-react-official';
import React, { useEffect, useRef, useState } from 'react';
Moduler(Highcharts);

const WordCloudHighchart = ({lebel,value}) => {
  const chartRef = useRef(null);
  
  const op =  {
    chart: {
        marginTop: 0,
        inverted: true,
        marginLeft: 85,
        type: 'bullet',
        height:70,
        width:500
    },
    title: {
        text: undefined
    },
    xAxis: {
        categories: [`<span class="hc-cat-title"> ${lebel}</span><br/> ${value} `]
    },
    
    legend: {
        enabled: false
    },
    yAxis: {
        gridLineWidth: 0,
        plotBands: [{
            from: 0,
            to: 150,
            color: '#406FC2'
        }, {
            from: 150,
            to: 225,
            color: '#7CB4EB'
        }, {
            from: 225,
            to: 9e9,
            color: '#94CDFE'
        }],
        title: null
    },
    series: [{
        data: [{
            y: 275,
            target: 250
        }]
    }],
    plotOptions: {
        series: {
            pointPadding: 0.25,
            borderWidth: 0,
            color: '#031F4B',
            targetOptions: {
                width: '200%'
            }
        }
    },
    tooltip: {
        pointFormat: '<b>{point.y}</b> (with target at {point.target})'
    }
}

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={op} ref={chartRef} />
    </div>
  );
};

export default WordCloudHighchart;
