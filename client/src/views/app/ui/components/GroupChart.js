import React from 'react'
import ReactApexChart from 'react-apexcharts';

const GroupChart = ({ labelName }) => {
  const state = {

    series: [{
      name: 'Actual',
      data: [ 55,]
    }, {
      name: 'Plan',
      data: [76]
    }],
    options: {
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: 'top', // top, center, bottom
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val ;
        },
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ["#304758"]
        }
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Plan', 'Actual'],
      },
      yaxis: {
        title: {
          text: labelName
        }
      },
      fill: {
        opacity: 1
      },
      legend: {
        show: false,
      },
      labels: {
        show: true,
        formatter: function (val) {
          return val ;
        }
      },
      colors: ['#87AD40', '#2A4849'],
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands"
          }
        }
      }
    },


  };
  return (
    <div id="chart">
      <ReactApexChart options={state.options} series={state.series} type="bar" height={350} />
    </div>
  )
}

export default GroupChart
