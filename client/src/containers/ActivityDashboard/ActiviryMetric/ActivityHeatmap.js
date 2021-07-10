import ReactApexChart from 'react-apexcharts'


const ActivityHeatmap = () => {

    function generateData(count, yrange) {
        var i = 0;
        var series = [];
        while (i < count) {
            var x = (i + 1).toString();
            var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

            series.push({
                x: x,
                y: y
            });
            i++;
        }
        return series;
    }

    const state = {

        series: [{
            name: 'Jan',
            data: generateData(30, {
                min: -30,
                max: 55
            })
        },
        {
            name: 'Feb',
            data: generateData(30, {
                min: -30,
                max: 55
            })
        },
        {
            name: 'Mar',
            data: generateData(30, {
                min: -30,
                max: 55
            })
        },
        {
            name: 'Apr',
            data: generateData(30, {
                min: -30,
                max: 55
            })
        },
        {
            name: 'May',
            data: generateData(30, {
                min: -30,
                max: 55
            })
        },
        {
            name: 'Jun',
            data: generateData(30, {
                min: -30,
                max: 55
            })
        },
        {
            name: 'Jul',
            data: generateData(30, {
                min: -30,
                max: 55
            })
        },
        {
            name: 'Aug',
            data: generateData(30, {
                min: -30,
                max: 55
            })
        },
        {
            name: 'Sep',
            data: generateData(30, {
                min: -30,
                max: 55
            })
        }
            ,
        {
            name: 'Oct',
            data: generateData(30, {
                min: -30,
                max: 55
            })
        }
            ,
        {
            name: 'Nov',
            data: generateData(30, {
                min: -30,
                max: 55
            })
        }
            ,
        {
            name: 'Dec',
            data: generateData(30, {
                min: -30,
                max: 55
            })
        }
        ],
        options: {
            chart: {
                height: 350,
                type: 'heatmap',
            },
            plotOptions: {
                heatmap: {
                    shadeIntensity: 0.5,
                    radius: 0,
                    useFillColorAsStroke: true,
                    colorScale: {
                        ranges: [{
                            from: -30,
                            to: 5,
                            name: 'Low',
                            color: '#00A100'
                        },
                        {
                            from: 6,
                            to: 20,
                            name: 'Medium',
                            color: '#128FD9'
                        },
                        {
                            from: 21,
                            to: 45,
                            name: 'High',
                            color: '#FFB200'
                        },
                        {
                            from: 46,
                            to: 55,
                            name: 'Extreme',
                            color: '#FF0000'
                        }
                        ]
                    }
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: 1
            },
            title: {
            },
        },


    };
    return (
        <div id="chart">
            <ReactApexChart options={state.options} series={state.series} type="heatmap" height={700} />
        </div>
    )
}

export default ActivityHeatmap