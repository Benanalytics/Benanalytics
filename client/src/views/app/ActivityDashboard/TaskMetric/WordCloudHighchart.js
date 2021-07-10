import Highcharts from 'highcharts';
import HighchartsHeatmap from 'highcharts/modules/wordcloud';
import HighchartsReact from 'highcharts-react-official';
import React, { useEffect, useRef, useState } from 'react';
HighchartsHeatmap(Highcharts);

const WordCloudHighchart = () => {
  const chartRef = useRef(null);
 
  var myData = [
    
    {
      name: 'Appraisal',
      weight: 2,
    },
    {
      name: 'Co-Financing',
      weight: 25,
    },
    {
      name: 'Corporate Actions',
      weight: 18,
    },
    {
      name: 'Disbursement',
      weight: 16,
    },
    {
      name: 'Donor Coordination',
      weight: 22,
    },
    {
      name: 'E&S Issues',
      weight: 8,
    },
    {
      name: 'Fin Management',
      weight: 12,
    },
    {
      name: 'Knowledge Works',
      weight: 12,
    },
    {
      name: 'Procurement',
      weight: 26,
    },
    {
      name: 'Supervision',
      weight: 5,
    },
    {
      name: '',
      weight: 2,
    },
  ];
  const op = {
    chart: {
      exporting: {
        enabled: true,
      },
      backgroundColor: 'transparent',
    },
    accessibility: {
      screenReaderSection: {
        beforeChartFormat:
          '<h5>{chartTitle}</h5>' +
          '<div>{chartSubtitle}</div>' +
          '<div>{chartLongdesc}</div>' +
          '<div>{viewTableButton}</div>',
      },
    },
    series: [
      {
        type: 'wordcloud',
        data: myData,
        name: 'Occurrences',
      },
    ],
    title: {
      text: 'Workload Per Activity Category',
    },
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={op} ref={chartRef} />
    </div>
  );
};

export default WordCloudHighchart;
