import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts/highcharts-gantt';
import HighchartMore from 'highcharts/highcharts-more';
import React, { useEffect, useRef, useState } from 'react';

HighchartMore(Highcharts);

const GantChart = () => {
  const chartRef = useRef(null);
  var today = new Date(),
    day = 1000 * 60 * 60 * 24,
    // Utility functions
    dateFormat = Highcharts.dateFormat,
    defined = Highcharts.defined,
    isObject = Highcharts.isObject;

  // Set to 00:00:00:000 today
  today.setUTCHours(0);
  today.setUTCMinutes(0);
  today.setUTCSeconds(0);
  today.setUTCMilliseconds(0);
  today = today.getTime();
  let daydc = 1000 * 60 * 60 * 24;

  const op = {
    title: {
      text: '',
    },
    xAxis: [
      {
        tickInterval: daydc * 30, // Week
      }, 
    ],
    yAxis: {
      uniqueNames: true,
    },
    chart: {
      height: 800,
      backgroundColor: 'transparent',
    },
    navigator: {
      enabled: true,
      liveRedraw: true,
      series: {
        type: 'gantt',
        pointPlacement: 0.5,
        pointPadding: 0.25,
      },
      yAxis: {
        min: 0,
        max: 3,
        reversed: true,
        categories: [],
      },
    },
    scrollbar: {
      enabled: true,
    },
    rangeSelector: {
      enabled: true,
      selected: 0,
    },

    // series: [{
    //   data: [{
    //     start: Date.UTC(2014, 9, 13),
    //     end: Date.UTC(2014, 11, 29),
    //   }, {
    //     start: Date.UTC(2014, 9, 27),
    //     end: Date.UTC(2014, 10, 29)
    //   }]
    // }]
    series: [
      {
        name: 'FIRST CITY MONUMENT BANK LTD ',
        data: [
          {
            name: 'FIRST CITY MONUMENT BANK LTD ',
            id: 'new_offices',
            owner: 'Peter',
          },
          {
            name: 'Project Concept Note Activity',
            id: 'relocate',
            dependency: 'passed_inspection',
            parent: 'new_offices',
            owner: 'Josh',
          },
          {
            name: 'Task Team and Peer Review',
            id: 'relocate_staff',
            parent: 'relocate',
            start: today + 10 * day,
            end: today + 11 * day,
            owner: 'Mark',
          },
          {
            name: 'Credit Risk Committee Review',
            dependency: 'relocate_staff',
            parent: 'relocate',
            start: today + 11 * day,
            end: today + 13 * day,
            owner: 'Anne',
          },
          {
            name: 'Concept Note Country Team Review',
            dependency: 'relocate_staff',
            parent: 'relocate',
            start: today + 3 * day,
            end: today + 1 * day,
            owner: 'Anne',
          },
          {
            name: 'Concept Note Country Team Clearance',
            dependency: 'relocate_staff',
            parent: 'relocate',
            start: today + 9 * day,
            end: today + 9 * day,
          },
          {
            name: 'OpsCom Concept Note Review',
            dependency: 'relocate_staff',
            parent: 'relocate',
            start: today - 8 * day,
            end: today + 5 * day,
          },
          {
            name: ' OpsCom Concept Note Clearance',
            dependency: 'relocate_staff',
            parent: 'relocate',
            start: today + 7 * day,
            end: today + 9 * day,
          },
          {
            name: 'Environmental and Social Assessment Report ',
            dependency: 'relocate_staff',
            parent: 'relocate',
            start: today + 1 * day,
            end: today - 14 * day,
          },

          // next  project

          {
            name: 'Appraisal Mission End',
            id: 'nextrelocate',
            dependency: 'passed_inspection',
            parent: 'new_offices',
            owner: 'Josh',
          },
          {
            name: 'Submission of Draft Appraisal Document',
            id: 'nextrelocate_staff',
            parent: 'nextrelocate',
            start: today + 10 * day,
            end: today + 11 * day,
            owner: 'Mark',
          },
          {
            name: ' Task Team and Peer Review  ',
            dependency: 'nextrelocate_staff',
            parent: 'nextrelocate',
            start: today + 11 * day,
            end: today + 13 * day,
            owner: 'Anne',
          },
          {
            name: '  Credit Risk Committee Review ',
            dependency: 'nextrelocate_staff',
            parent: 'nextrelocate',
            start: today + 3 * day,
            end: today + 1 * day,
            owner: 'Anne',
          },
          {
            name: '  Appraisal Report Country Team Review  ',
            dependency: 'nextrelocate_staff',
            parent: 'nextrelocate',
            start: today + 9 * day,
            end: today + 9 * day,
          },
          {
            name: ' Appraisal Report Country Team Clearance   ',
            dependency: 'nextrelocate_staff',
            parent: 'nextrelocate',
            start: today - 8 * day,
            end: today + 5 * day,
          },
          {
            name: ' OpsCom Appraisal Report Review   ',
            dependency: 'nextrelocate_staff',
            parent: 'nextrelocate',
            start: today + 7 * day,
            end: today + 9 * day,
          },
          {
            name: '  OpsCom Appraisal Report Clearance  ',
            dependency: 'nextrelocate_staff',
            parent: 'nextrelocate',
            start: today + 1 * day,
            end: today - 14 * day,
          },
          {
            name: '  Negotiations Meeting  ',
            dependency: 'nextrelocate_staff',
            parent: 'nextrelocate',
            start: today + 1 * day,
            end: today - 14 * day,
          },
          {
            name: '   Translation Date ',
            dependency: 'nextrelocate_staff',
            parent: 'nextrelocate',
            start: today + 1 * day,
            end: today - 14 * day,
          },
        ],
      },
      // {
      //   name: 'Product',
      //   data: [
      //     {
      //       name: 'New product launch',
      //       id: 'new_product',
      //       owner: 'Peter',
      //     },
      //     {
      //       name: 'Development',
      //       id: 'development',
      //       parent: 'new_product',
      //       start: today - day,
      //       end: today + 11 * day,
      //       completed: {
      //         amount: 0.6,
      //         fill: '#e80',
      //       },
      //       owner: 'Susan',
      //     },
      //     {
      //       name: 'Beta',
      //       id: 'beta',
      //       dependency: 'development',
      //       parent: 'new_product',
      //       start: today + 12.5 * day,
      //       milestone: true,
      //       owner: 'Peter',
      //     },
      //     {
      //       name: 'Final development',
      //       id: 'finalize',
      //       dependency: 'beta',
      //       parent: 'new_product',
      //       start: today + 13 * day,
      //       end: today + 17 * day,
      //     },
      //     {
      //       name: 'Launch',
      //       dependency: 'finalize',
      //       parent: 'new_product',
      //       start: today + 17.5 * day,
      //       milestone: true,
      //       owner: 'Peter',
      //     },
      //   ],
      // },
    ],
  };

  return (
    <div>
      <HighchartsReact
        constructorType="ganttChart"
        highcharts={Highcharts}
        options={op}
        ref={chartRef}
      />
    </div>
  );
};

export default GantChart;
