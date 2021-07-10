import ReactApexChart from "react-apexcharts";

const TopWorkload = () => {

    const state = {
        series: [{
            name: 'Completed',
            data: [44, 55, 41, 37, 22, 43, 21]
        }, {
            name: 'Ongoing',
            data: [53, 32, 33, 52, 13, 43, 32]
        }, {
            name: 'On Hold',
            data: [9, 7, 5, 8, 6, 9, 4]
        }],
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
                categories: [
                    'Bernard',
                    'Yemisi',
                    'Diagne',
                    'Sylvie',
                    'Chinwe',
                    'Lawson',
                    'Linda',
                    'Bako',
                    'Bashir',
                    'Lawini'
                ],
                labels: {
                    formatter: function (val) {
                        return val + "K"
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
                        return val + "K"
                    }
                }
            },
            fill: {
                opacity: 1
            },
            legend: {
                position: 'top',
                horizontalAlign: 'left',
                offsetX: 40
            }
        },


    };
    return (
        <div id="chart">
            <ReactApexChart options={state.options} series={state.series} type="bar" height={350} />
        </div>
    )
}

export default TopWorkload
