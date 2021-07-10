import React from 'react'
import ReactApexChart from 'react-apexcharts';
import { Card, CardBody } from 'reactstrap';
import GradientWithRadialProgressCard from '../../../../components/cards/GradientWithRadialProgressCard';
import UserActivityCard from '../../../../components/cards/UserActivityCard';
import ActivityChart from './UserActivity'
const TaskBoard = () => {

    const randomnumbergenerator = (from, to) => {
        return Math.floor(Math.random() * (to - from)) + 1;
    };
    const data = [
        {
            leaderName: 'Mayra Sibley',
            progress: randomnumbergenerator(1, 100),
            heigh: randomnumbergenerator(1, 200),
            medium: randomnumbergenerator(1, 200),
            low: randomnumbergenerator(1, 200)
        },
        {
            leaderName: 'Mimi Carreira',
            progress: randomnumbergenerator(1, 100),
            heigh: randomnumbergenerator(1, 200),
            medium: randomnumbergenerator(1, 200),
            low: randomnumbergenerator(1, 200)
        },
        {
            leaderName: 'Philip Nelms',
            progress: randomnumbergenerator(1, 100),
            heigh: randomnumbergenerator(1, 200),
            medium: randomnumbergenerator(1, 200),
            low: randomnumbergenerator(1, 200)
        },
        {
            leaderName: 'Terese  ',
            progress: randomnumbergenerator(1, 100),
            heigh: randomnumbergenerator(1, 200),
            medium: randomnumbergenerator(1, 200),
            low: randomnumbergenerator(1, 200)
        },
        {
            leaderName: 'Kathryn Mengel',
            progress: randomnumbergenerator(1, 100),
            heigh: randomnumbergenerator(1, 200),
            medium: randomnumbergenerator(1, 200),
            low: randomnumbergenerator(1, 200)
        },
        {
            leaderName: 'Esperanza Lodge',
            progress: randomnumbergenerator(1, 100),
            heigh: randomnumbergenerator(1, 200),
            medium: randomnumbergenerator(1, 200),
            low: randomnumbergenerator(1, 200)
        },
        {
            leaderName: 'Laree Munsch',
            progress: randomnumbergenerator(1, 100),
            heigh: randomnumbergenerator(1, 200),
            medium: randomnumbergenerator(1, 200),
            low: randomnumbergenerator(1, 200)
        },
    ];
    const state = {

        series: [{
            name: 'Inflation',
            data: [2.3, 3.1, 4.0, 10.1,]
        }],
        options: {
            chart: {
                height: 350,
                type: 'bar',
                exports:false
            },
            plotOptions: {
                bar: {
                    borderRadius: 0,
                    dataLabels: {
                        position: 'top', // top, center, bottom
                    },
                }
            },
            dataLabels: {
                enabled: true,
                formatter: function (val) {
                    return val + "";
                },
                offsetY: -20,
                style: {
                    fontSize: '12px',
                    colors: ["#304758"]
                }
            },

            xaxis: {
                categories: ["Jan", "Feb", "Mar", "Apr"],
                show: false,
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                },
                crosshairs: {
                    fill: {
                        type: 'gradient',
                        gradient: {
                            colorFrom: '#D8E3F0',
                            colorTo: '#BED1E6',
                            stops: [0, 100],
                            opacityFrom: 0.4,
                            opacityTo: 0.5,
                        }
                    }
                },
                tooltip: {
                    enabled: true,
                }
            },
            yaxis: {
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false,
                },
                labels: {
                    show: false,
                    formatter: function (val) {

                    }
                }

            },
            title: {
                text: undefined,
                floating: true,
                offsetY: 330,
                align: 'center',
                style: {
                    color: '#444'
                }
            }
        },


    };
    return (
        <div>
            <div class="table-wrap " style={{ maxHeight: '300px', overflow: 'scroll' }} >
                <div class="table-responsive ">
                    <table class="table table-sm table-hover mb-0">
                        <thead>
                            <tr>
                                <th>Task Leader</th>
                                <th class="w-20">progress</th>
                                <th></th>
                                <th>Heigh</th>
                                <th></th>
                                <th>Medium</th>
                                <th></th>
                                <th>Low</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map(el => (
                                    <tr className="team-board-row" >
                                        <td  > {el.leaderName}
                                            <div className="user-board"  >
                                                <Card>
                                                    <CardBody>
                                                        <UserActivityCard
                                                            title={`Ovarall Progress`}
                                                            detail=""
                                                            percent={(5 / 15) * 100}
                                                            progressText={parseInt((5 / 15) * 100)}
                                                        />
                                                        <div className="row">
                                                            <div className="col-md-8 offset-md-2">
                                                                <ActivityChart idName={`id${randomnumbergenerator(1,200000000)}`} />
                                                            </div>
                                                        </div>
                                                        <div className="row" >
                                                            <div style={{height:'1px', marginBottom:'10px'}} className="col-12 progress-banner">

                                                            </div>
                                                            <div className="col-md-6" style={{ borderRight: '1px solid lightgray' }} >
                                                                <p>Urgent Task </p>
                                                                <h1 className="d-flex">12 <h5>Task</h5> </h1>
                                                            </div>
                                                            <div className="col-md-6" >
                                                                <p>Normal Task </p>
                                                                <h1 className="d-flex">12 <h5>Task</h5> </h1>
                                                            </div>
                                                        </div>
                                                    </CardBody>
                                                </Card>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="progress-wrap lb-side-left mnw-125p">
                                                <div class="progress-lb-wrap ">
                                                    <label class="progress-label mnw-25p">{el.progress}%</label>
                                                    <div class="progress progress-bar-xs">
                                                        <div class="progress-bar bg-success w-95" role="progressbar"
                                                            aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td><span style={{ width: '8px', height: '8px', borderRadius: '5px', background: '#FF0000', display: 'inline-block' }}></span></td>
                                        <td>{el.heigh} </td>
                                        <td><span style={{ width: '8px', height: '8px', borderRadius: '5px', background: '#FFC000', display: 'inline-block' }}></span></td>
                                        <td>{el.medium} </td>
                                        <td><span style={{ width: '8px', height: '8px', borderRadius: '5px', background: '#00B050', display: 'inline-block' }}></span></td>
                                        <td>{el.low} </td>
                                        <td>{randomnumbergenerator(100, 500)} </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default TaskBoard
