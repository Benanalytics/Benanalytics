import ReactApexChart from 'react-apexcharts';

const LendingBargChart = () => {

    const state = {

        series: [{
            name: 'Plan',
            data: [43, 0]
        },
        {
            name: 'Actual',
            data: [0, 21]
        }
        ],
        options: {
            chart: {
                type: 'bar',
                height: 350,
                stacked: true,
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                },
            },
            stroke: {
                width: 1,
                colors: ['#fff']
            },
            title: {
                text: undefined
            },
            xaxis: {
                categories: ['Plan', 'Actual'],
                labels: {
                    formatter: function (val) {
                        return val + "M"
                    }
                }
            },
            yaxis: {
                title: {
                    text: undefined
                },
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return val + "M"
                    }
                }
            },
            fill: {
                opacity: 1,
                colors: ['#87AD40', '#2A4849']
            },
            legend: {
                show:false,
                position: 'top',
                horizontalAlign: 'left',
                offsetX: 40
            }
        },


    };



    return (

        <div id="chart">
            <ReactApexChart options={state.options} series={state.series} type="bar" height={140} />
        </div>

    )
}

export default LendingBargChart
