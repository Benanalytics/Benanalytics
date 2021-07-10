import Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import HighchartsReact from 'highcharts-react-official';
import React, { useEffect, useRef, useState } from 'react';

HC_exporting(Highcharts);

var colors = Highcharts.getOptions().colors,
  categories = [
    'Chrome',
    'Firefox',
    'Internet Explorer',
    'Safari',
    'Edge',
    'Opera',
    'Other',
  ],
  data = [
    {
      y: 62.74,
      color: colors[2],
      drilldown: {
        name: 'Chrome',
        categories: [
          'Chrome v65.0',
          'Chrome v64.0',
          'Chrome v63.0',
          'Chrome v62.0',
          'Chrome v61.0',
          'Chrome v60.0',
          'Chrome v59.0',
          'Chrome v58.0',
          'Chrome v57.0',
          'Chrome v56.0',
          'Chrome v55.0',
          'Chrome v54.0',
          'Chrome v51.0',
          'Chrome v49.0',
          'Chrome v48.0',
          'Chrome v47.0',
          'Chrome v43.0',
          'Chrome v29.0',
        ],
        data: [
          0.1, 1.3, 53.02, 1.4, 0.88, 0.56, 0.45, 0.49, 0.32, 0.29, 0.79, 0.18,
          0.13, 2.16, 0.13, 0.11, 0.17, 0.26,
        ],
      },
    },
    {
      y: 10.57,
      color: colors[1],
      drilldown: {
        name: 'Firefox',
        categories: [
          'Firefox v58.0',
          'Firefox v57.0',
          'Firefox v56.0',
          'Firefox v55.0',
          'Firefox v54.0',
          'Firefox v52.0',
          'Firefox v51.0',
          'Firefox v50.0',
          'Firefox v48.0',
          'Firefox v47.0',
        ],
        data: [1.02, 7.36, 0.35, 0.11, 0.1, 0.95, 0.15, 0.1, 0.31, 0.12],
      },
    },
    {
      y: 7.23,
      color: colors[0],
      drilldown: {
        name: 'Internet Explorer',
        categories: [
          'Internet Explorer v11.0',
          'Internet Explorer v10.0',
          'Internet Explorer v9.0',
          'Internet Explorer v8.0',
        ],
        data: [6.2, 0.29, 0.27, 0.47],
      },
    },
    {
      y: 5.58,
      color: colors[3],
      drilldown: {
        name: 'Safari',
        categories: [
          'Safari v11.0',
          'Safari v10.1',
          'Safari v10.0',
          'Safari v9.1',
          'Safari v9.0',
          'Safari v5.1',
        ],
        data: [3.39, 0.96, 0.36, 0.54, 0.13, 0.2],
      },
    },
    {
      y: 4.02,
      color: colors[5],
      drilldown: {
        name: 'Edge',
        categories: ['Edge v16', 'Edge v15', 'Edge v14', 'Edge v13'],
        data: [2.6, 0.92, 0.4, 0.1],
      },
    },
    {
      y: 1.92,
      color: colors[4],
      drilldown: {
        name: 'Opera',
        categories: ['Opera v50.0', 'Opera v49.0', 'Opera v12.1'],
        data: [0.96, 0.82, 0.14],
      },
    },
    {
      y: 7.62,
      color: colors[6],
      drilldown: {
        name: 'Other',
        categories: ['Other'],
        data: [7.62],
      },
    },
  ],
  browserData = [],
  versionsData = [],
  i,
  j,
  dataLen = data.length,
  drillDataLen,
  brightness;

// Build the data arrays
for (i = 0; i < dataLen; i += 1) {
  // add browser data
  browserData.push({
    name: categories[i],
    y: data[i].y,
    color: data[i].color,
  });

  // add version data
  drillDataLen = data[i].drilldown.data.length;
  for (j = 0; j < drillDataLen; j += 1) {
    brightness = 0.2 - j / drillDataLen / 5;
    versionsData.push({
      name: data[i].drilldown.categories[j],
      y: data[i].drilldown.data[j],
      color: Highcharts.color(data[i].color).brighten(brightness).get(),
    });
  }
}

const TrendPortfolioHealthChart = () => {
  const chartRef = useRef(null);

  const option = {
    chart: {
      type: 'spline',
    },

    legend: {
      symbolWidth: 40,
    },

    title: {
      text: 'Most common desktop screen readers',
    },

    subtitle: {
      text: 'Source: WebAIM. Click on points to visit official screen reader website',
    },

    yAxis: {
      title: {
        text: 'Percentage usage',
      },
      accessibility: {
        description: 'Percentage usage',
      },
    },

    xAxis: {
      title: {
        text: 'Time',
      },
      accessibility: {
        description: 'Time from December 2010 to September 2019',
      },
      categories: [
        'December 2010',
        'May 2012',
        'January 2014',
        'July 2015',
        'October 2017',
        'September 2019',
      ],
    },

    tooltip: {
      valueSuffix: '%',
    },

    plotOptions: {
      series: {
        point: {
          events: {
            click: function () {
              window.location.href = this.series.options.website;
            },
          },
        },
        cursor: 'pointer',
      },
    },

    series: [
      {
        name: 'NVDA',
        data: [34.8, 43.0, 51.2, 41.4, 64.9, 72.4],
        website: 'https://www.nvaccess.org',
        color: colors[2],
        accessibility: {
          description: 'This is the most used screen reader in 2019',
        },
      },
      {
        name: 'JAWS',
        data: [69.6, 63.7, 63.9, 43.7, 66.0, 61.7],
        website: 'https://www.freedomscientific.com/Products/Blindness/JAWS',
        dashStyle: 'ShortDashDot',
        color: colors[0],
      },
      {
        name: 'VoiceOver',
        data: [20.2, 30.7, 36.8, 30.9, 39.6, 47.1],
        website: 'http://www.apple.com/accessibility/osx/voiceover',
        dashStyle: 'ShortDot',
        color: colors[1],
      },
      {
        name: 'Narrator',
        data: [null, null, null, null, 21.4, 30.3],
        website:
          'https://support.microsoft.com/en-us/help/22798/windows-10-complete-guide-to-narrator',
        dashStyle: 'Dash',
        color: colors[9],
      },
      {
        name: 'ZoomText/Fusion',
        data: [6.1, 6.8, 5.3, 27.5, 6.0, 5.5],
        website: 'http://www.zoomtext.com/products/zoomtext-magnifierreader',
        dashStyle: 'ShortDot',
        color: colors[5],
      },
      {
        name: 'Other',
        data: [42.6, 51.5, 54.2, 45.8, 20.2, 15.4],
        website:
          'http://www.disabled-world.com/assistivedevices/computer/screen-readers.php',
        dashStyle: 'ShortDash',
        color: colors[3],
      },
    ],

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 550,
          },
          chartOptions: {
            chart: {
              spacingLeft: 3,
              spacingRight: 3,
            },
            legend: {
              itemWidth: 150,
            },
            xAxis: {
              categories: [
                'Dec. 2010',
                'May 2012',
                'Jan. 2014',
                'July 2015',
                'Oct. 2017',
                'Sep. 2019',
              ],
              title: '',
            },
            yAxis: {
              visible: false,
            },
          },
        },
      ],
    },
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

export default TrendPortfolioHealthChart;
