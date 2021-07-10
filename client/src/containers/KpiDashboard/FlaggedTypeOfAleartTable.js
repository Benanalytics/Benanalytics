import React from 'react'
import { Table } from 'reactstrap'

const FlaggedTypeOfAleartTable = () => {
    const tableData = [
        {
            title: 'Disbursement closing date expired',
            project: 1,
            uam: "0.7",
            percent: '0%',
        },
        {
            title: 'First Disbursement delays',
            project: 4,
            uam: "179.3",
            percent: '6%',
        },
        {
            title: 'Problem Project- self rating',
            project: 1,
            uam: "2283.5",
            percent: '7%',
        },
        {

            title: 'Signature delays',
            project: 3,
            uam: "34.9",
            percent: '1%',
        },
        {
            title: 'Slow Disbursement',
            project: 9,
            uam: "17.7",
            percent: '1%',
        },
        {
            title: 'Slow procurement',
            project: 3,
            uam: "249.2",
            percent: '8%',
        },
        {
            title: 'Watch List',
            project: 1,
            uam: "180.5",
            percent: '6%',
        },
        {
            title: 'No Issue',
            project: 44,
            uam: "34.5",
            percent: '1%',
        },

    ]







    return (
        <div style={{ maxHeight: '300px', overflow: 'scroll' }}>
            <Table responsive>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Project</th>
                        <th>UA M</th>
                        <th>Percent</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tableData.map(el => (
                            <tr style={{ cursor: 'pointer' }}  >
                                <th > {el.title} </th>
                                <td > {el.project} </td>
                                <td > {el.uam} </td>
                                <td > {el.percent} </td>
                            </tr>
                        ))
                    }

                    <tr style={{ cursor: 'pointer', background: '#F8F8F8' }}  >
                        <th style={{ fontWeight: 'bold' }}> Total  </th>
                        <td style={{ fontWeight: 'bold' }}> 66 </td>
                        <td style={{ fontWeight: 'bold' }}> 23423 </td>
                        <td style={{ fontWeight: 'bold' }}> 100% </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default FlaggedTypeOfAleartTable
