import React from 'react';
import SparkLineTable from './SparklineTable';
import { Sparklines, SparklinesBars, SparklinesLine } from 'react-sparklines'
const data = [5, 10, 5, 20, 43, 25, 11, 53, 62, 43, 21, 18, 44]
const SparkLineChartHighchart = () => {
  const tData = [
    {
      indicator: "Disbursement closing date expired",
      noOfProject: 11,
      uam: 128,
    },
    {
      indicator: "First Disbursement delays",
      noOfProject: 182,
      uam: 212,
    },
    {
      indicator: "Problem Project- self rating",
      noOfProject: 151,
      uam: 172,
    },
    {
      indicator: "Slow Disbursement",
      noOfProject: 421,
      uam: 87,
    },
    {
      indicator: "Slow procurement",
      noOfProject: 191,
      uam: 22,
    },
    {
      indicator: "Watch List",
      noOfProject: 163,
      uam: 12,
    },

  ]
  return (
    <SparkLineTable style={{ width: '100%' }}>
      <thead>
        <tr>
          <th style={{ fontSize: '14px' }}>Indicator</th>
          <th style={{ fontSize: '14px' }}>NO of project</th>
          <th style={{ fontSize: '14px' }}>Qtly Trend NO .</th>
          <th style={{ fontSize: '14px' }}>UA M</th>
          <th style={{ fontSize: '14px' }}>Qtly Trend UA M</th>
          <th style={{ fontSize: '14px' }}>Table Head</th>
        </tr>
      </thead>
      <tbody id="tbody-sparkline">
        {
          tData.map(el => (
            <tr>
              <th> {el.indicator}</th>
              <td>{el.noOfProject}</td>
              <td >
                <div style={{ maxWidth: '120px' }}>
                  <Sparklines data={data}>
                    <SparklinesBars style={{ stroke: "white", fill: "#41c3f9", fillOpacity: ".25" }} />
                    <SparklinesLine style={{ stroke: "#41c3f9", fill: "none" }} />
                  </Sparklines>
                </div>
              </td>
              <td>{el.uam}</td>
              <td >
                <div style={{ maxWidth: '120px' }}>
                  <Sparklines data={data}>
                    <SparklinesBars style={{ stroke: "white", fill: "#41c3f9", fillOpacity: ".25" }} />
                    <SparklinesLine style={{ stroke: "#41c3f9", fill: "none" }} />
                  </Sparklines>
                </div>
              </td>
              <td data-sparkline="-44, -1, 74, -49 ; column"></td>
            </tr>
          ))
        }
      </tbody>
    </SparkLineTable>
  )
}

export default SparkLineChartHighchart;