import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts/highcharts-gantt";
import HighchartMore from "highcharts/highcharts-more";
import React, { useEffect, useRef, useState } from 'react'

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

    const op = {
      title: {
        text: '',
      },
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

      series: [
        {
          name: 'Offices',
          data: [
            {
              name: 'New offices',
              id: 'new_offices',
              owner: 'Peter',
            },
            {
              name: 'Prepare office building',
              id: 'prepare_building',
              parent: 'new_offices',
              start: today - 2 * day,
              end: today + 6 * day,
              completed: {
                amount: 0.2,
              },
              owner: 'Linda',
            },
            {
              name: 'Inspect building',
              id: 'inspect_building',
              dependency: 'prepare_building',
              parent: 'new_offices',
              start: today + 6 * day,
              end: today + 8 * day,
              owner: 'Ivy',
            },
            {
              name: 'Passed inspection',
              id: 'passed_inspection',
              dependency: 'inspect_building',
              parent: 'new_offices',
              start: today + 9.5 * day,
              milestone: true,
              owner: 'Peter',
            },
            {
              name: 'Relocate',
              id: 'relocate',
              dependency: 'passed_inspection',
              parent: 'new_offices',
              owner: 'Josh',
            },
            {
              name: 'Relocate staff',
              id: 'relocate_staff',
              parent: 'relocate',
              start: today + 10 * day,
              end: today + 11 * day,
              owner: 'Mark',
            },
            {
              name: 'Relocate test facility',
              dependency: 'relocate_staff',
              parent: 'relocate',
              start: today + 11 * day,
              end: today + 13 * day,
              owner: 'Anne',
            },
            {
              name: 'Relocate cantina',
              dependency: 'relocate_staff',
              parent: 'relocate',
              start: today + 11 * day,
              end: today + 14 * day,
            },
          ],
        },
        {
          name: 'Product',
          data: [
            {
              name: 'New product launch',
              id: 'new_product',
              owner: 'Peter',
            },
            {
              name: 'Development',
              id: 'development',
              parent: 'new_product',
              start: today - day,
              end: today + 11 * day,
              completed: {
                amount: 0.6,
                fill: '#e80',
              },
              owner: 'Susan',
            },
            {
              name: 'Beta',
              id: 'beta',
              dependency: 'development',
              parent: 'new_product',
              start: today + 12.5 * day,
              milestone: true,
              owner: 'Peter',
            },
            {
              name: 'Final development',
              id: 'finalize',
              dependency: 'beta',
              parent: 'new_product',
              start: today + 13 * day,
              end: today + 17 * day,
            },
            {
              name: 'Launch',
              dependency: 'finalize',
              parent: 'new_product',
              start: today + 17.5 * day,
              milestone: true,
              owner: 'Peter',
            },
          ],
        },
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
    )
}

export default GantChart