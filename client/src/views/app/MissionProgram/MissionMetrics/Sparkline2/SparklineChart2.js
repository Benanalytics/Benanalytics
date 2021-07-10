import React from 'react';
import SparkLineTable from './SparklineTable';

const SparkLineChartHighchart = () => (
  <SparkLineTable style={{ width: '100%' }}>
    <thead>
      <tr>
        <th style={{fontSize:'14px',fontWeight: 'bold'}}>Project/Activity  Name</th>
        <th style={{fontSize:'14px',fontWeight: 'bold'}}>Plan</th>
        <th style={{fontSize:'14px',fontWeight: 'bold'}}> Plan Per Quarter </th>
        <th style={{fontSize:'14px',fontWeight: 'bold'}}>Actual</th>
        <th style={{fontSize:'14px',fontWeight: 'bold'}}>Result </th>
        <th style={{fontSize:'14px',fontWeight: 'bold'}}>Result</th>
        <th style={{fontSize:'14px',fontWeight: 'bold'}}>Result Per Quarter</th>
      </tr>
    </thead>
    <tbody id="tbody-sparkline">
      <tr>
        <th>ADDITIONAL LOAN TO IBSDLIEP FOR THE COMPLETION OF FSTC LASSA</th>
        <td>231</td>
        <td data-sparkline="52, 49, 97, 33 ">
        </td><td>251</td>
        <td data-sparkline="96, 50, 23, 82 ">
        </td><td>-20</td>
        <td data-sparkline="-44, -1, 74, -49 ; column"></td>
      </tr>
      <tr>
        <th>PRST WIFE TRIP TO LOKOJA, NIGERIA</th>
        <td>231</td>
        <td data-sparkline="52, 49, 97, 33 ">
        </td><td>251</td>
        <td data-sparkline="96, 50, 23, 82 ">
        </td><td>-20</td>
        <td data-sparkline="-44, -1, 74, -49 ; column"></td>
      </tr>
      <tr>
        <th>MISSION TO PARTICIPATE IN THE COMBINED TRAINING PROGRAM ON THE COUNTRY RESILIENCE AND FRAGILITY ASSESSMENT (CRFA) TOOL AND CHHR OPEN SKY SESSION </th>
        <td>231</td>
        <td data-sparkline="52, 49, 97, 33 ">
        </td><td>251</td>
        <td data-sparkline="96, 50, 23, 82 ">
        </td><td>-20</td>
        <td data-sparkline="-44, -1, 74, -49 ; column"></td>
      </tr>
      <tr>
        <th>SUPPORT TO NATIONAL PROG. ON MALARIA ELIMINATION AND NUTRITION IMPROVEMENT PROJECT IN ANAMBRA & ONDO</th>
        <td>231</td>
        <td data-sparkline="52, 49, 97, 33 ">
        </td><td>251</td>
        <td data-sparkline="96, 50, 23, 82 ">
        </td><td>-20</td>
        <td data-sparkline="-44, -1, 74, -49 ; column"></td>
      </tr>
    </tbody>
  </SparkLineTable>
);

export default SparkLineChartHighchart;