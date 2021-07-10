import React from 'react'
import ReactApexChart from 'react-apexcharts'

const MissionSparklineChart = () => {

    const series = [{
        data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
    }]
    const options = {
        stroke: {
            width: 1,
            curve: 'smooth',
        },
        chart: {
            type: 'line',
            width: 200,
            height: 35,
            sparkline: {
                enabled: true
            }
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: function (seriesName,i  ,j) {
                        return ``
                    }
                }
            },
            marker: {
                show: false
            }
        }
    }
    return (
        <div id="chart-1">
            <ReactApexChart options={options} series={series} type="line" height={35} width={100} />
        </div>
    )
}

export default MissionSparklineChart
