import React from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
const PortfolioHelthFlaggedTypeChart = () => {
  const op = {
    colors: ['#21C36A', '#F53201', '#FFBF61'],
    chart: {
      type: 'column',
      inverted: true,
      polar: true,
      backgroundColor: 'transparent',
    },
    title: {
      text: '',
    },
    tooltip: {
      outside: true,
    },
    pane: {
      size: '85%',
      innerSize: '20%',
      endAngle: 270,
    },
    exporting: {
      buttons: {
        contextButton: {
          menuItems: [
            'printChart',
            'separator',
            'downloadPNG',
            'downloadJPEG',
            'downloadPDF',
            'downloadSVG',
          ],
        },
      },
    },
    xAxis: {
      tickInterval: 1,
      labels: {
        align: 'right',
        useHTML: true,
        allowOverlap: true,
        step: 1,
        y: 3,
        style: {
          fontSize: '13px',
        },
      },
      lineWidth: 0,
      categories: [
        'Agric <span class="f16"><span id="flag" class="flag no">' +
          '</span></span>',
        'Water Suplly <span class="f16"><span id="flag" class="flag us">' +
          '</span></span>',
        'Finance <span class="f16"><span id="flag" class="flag de">' +
          '</span></span>',
        'Transport <span class="f16"><span id="flag" class="flag ca">' +
          '</span></span>',
        'Energy <span class="f16"><span id="flag" class="flag at">' +
          '</span></span>',
        'Multi-Sector <span class="f16"><span id="flag" class="flag at">' +
          '</span></span>',
      ],
    },
    yAxis: {
      crosshair: {
        enabled: true,
        color: '#000',
      },
      lineWidth: 0,
      tickInterval: 25,
      reversedStacks: false,
      endOnTick: true,
      showLastLabel: true,
    },
    plotOptions: {
      column: {
        stacking: 'normal',
        borderWidth: 0,
        pointPadding: 0,
        groupPadding: 0.15,
      },
    },
    series: [
      {
        name: 'Satisfactory ',
        data: [125, 110, 86, 64, 81, 67],
      },
      {
        name: 'Flagged',
        data: [132, 105, 92, 73, 64, 76],
      },
      {
        name: 'Watchlist',
        data: [111, 90, 60, 62, 87, 44],
      },
    ],
  };
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={op} />
    </div>
  );
};

export default PortfolioHelthFlaggedTypeChart;
