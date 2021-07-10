import React from 'react';
import SparkLineTable from './SparklineTable';

import { Sparklines, SparklinesBars, SparklinesLine, SparklinesSpots } from 'react-sparklines'
const randomnumbergenerator = (from, to) => {
  return Math.floor(Math.random() * (to - from)) + 1;
};

function returnData() {
  return [randomnumbergenerator(5, 100), randomnumbergenerator(5, 100), randomnumbergenerator(5, 100), randomnumbergenerator(5, 100), randomnumbergenerator(5, 100), randomnumbergenerator(5, 100), randomnumbergenerator(5, 100), randomnumbergenerator(5, 100), randomnumbergenerator(5, 100), randomnumbergenerator(5, 100), randomnumbergenerator(5, 100), randomnumbergenerator(5, 100)]
}
const SparkLineChartHighchart = () => (
  <SparkLineTable style={{ width: '100%' }}>
    <thead>
      <tr>
        <th style={{ fontSize: '14px', fontWeight: 'bold' }}>Sector Name</th>
        <th style={{ fontSize: '14px', fontWeight: 'bold' }}>Plan</th>
        <th style={{ fontSize: '14px', fontWeight: 'bold' }}> Plan Per Quarter </th>
        <th style={{ fontSize: '14px', fontWeight: 'bold' }}>Actual</th>
        <th style={{ fontSize: '14px', fontWeight: 'bold' }}>Result </th>
        <th style={{ fontSize: '14px', fontWeight: 'bold' }}>Result</th>
        <th style={{ fontSize: '14px', fontWeight: 'bold' }}>Result Per Quarter</th>
      </tr>
    </thead>
    <tbody id="tbody-sparkline">
      <tr>
        <th>Agriculture</th>
        <td>231</td>
        <td>
          <div style={{ maxWidth: '120px' }}>
            <Sparklines data={returnData()}>
              <SparklinesLine style={{ fill: "none" }} />
              <SparklinesSpots />
            </Sparklines>
          </div>
        </td>
        <td>251</td>
        <td>
          <div style={{ maxWidth: '120px' }}>
            <Sparklines data={returnData()}>
              <SparklinesLine style={{ fill: "none" }} />
              <SparklinesSpots />
            </Sparklines>
          </div>
        </td>
        <td>-20</td>
        <td data-sparkline="-44, -1, 74, -49 ; column"></td>
      </tr>
      <tr>
        <th>Water Supply</th>
        <td>231</td>
        <td>
          <div style={{ maxWidth: '120px' }}>
            <Sparklines data={returnData()}>
            <SparklinesLine style={{ fill: "none" }} />
              <SparklinesSpots />
            </Sparklines>
          </div>
        </td>
        <td>251</td>
        <td>
          <div style={{ maxWidth: '120px' }}>
            <Sparklines data={returnData()}>
              <SparklinesLine style={{ fill: "none" }} />
              <SparklinesSpots />
            </Sparklines>
          </div>
        </td>
        <td>-20</td>
        <td data-sparkline="-44, -1, 74, -49 ; column"></td>
      </tr>
      <tr>
        <th>Energy</th>
        <td>231</td>
        <td>
          <div style={{ maxWidth: '120px' }}>
            <Sparklines data={returnData()}>              
            <SparklinesLine style={{ fill: "none" }} />
              <SparklinesSpots />
            </Sparklines>
          </div>
        </td>
        <td>251</td>
        <td>
          <div style={{ maxWidth: '120px' }}>
            <Sparklines data={returnData()}>
              <SparklinesLine style={{ fill: "none" }} />
              <SparklinesSpots />
            </Sparklines>
          </div>
        </td>
        <td>-20</td>
        <td data-sparkline="-44, -1, 74, -49 ; column"></td>
      </tr>
      <tr>
        <th>Multi-Sector/Governance</th>
        <td>231</td>
        <td>
          <div style={{ maxWidth: '120px' }}>
            <Sparklines data={returnData()}>
              <SparklinesLine style={{ fill: "none" }} />
              <SparklinesSpots />
            </Sparklines>
          </div>
        </td>
        <td>251</td>
        <td>
          <div style={{ maxWidth: '120px' }}>
            <Sparklines data={returnData()}>
              <SparklinesLine style={{ fill: "none" }} />
              <SparklinesSpots />
            </Sparklines>
          </div>
        </td>
        <td>-20</td>
        <td data-sparkline="-44, -1, 74, -49 ; column"></td>
      </tr>
    </tbody>
  </SparkLineTable>
);

export default SparkLineChartHighchart;