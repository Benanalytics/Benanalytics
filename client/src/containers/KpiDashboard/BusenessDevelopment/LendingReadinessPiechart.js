import React from 'react'
import ReactApexChart from 'react-apexcharts';

const LendingReadinessPiechart = () => {
    const state = {

        series: [44, 55, 13, 43  ],
        options: {
            chart: {
                width: 380,
                type: 'pie',
            },
            labels: ['Board Approved', 'Appraisal Report Approved', 'Concept Note Approved', 'Pre-Concept Note', ],
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        },


    };
    return (
        <div id="chart">
            <ReactApexChart options={state.options} series={state.series} type="pie" />
        </div>
    )
}

export default LendingReadinessPiechart
