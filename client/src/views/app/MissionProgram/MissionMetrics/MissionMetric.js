import React from 'react';
import { Row, Card, CardBody, CardTitle, Table } from 'reactstrap';
import { Colxx } from '../../../../components/common/CustomBootstrap';
import MissionNotificationOneChart from './MissionNotificationOneChart';
import MissionNotificationOneChartTwo from './MissionNotificationOneChartTwo';
import TermReportChart from './TermReportChart';
import TermReportChartTwo from './TermReportChartTwo';
import TotalMissionPerMonthChart from './TotalMissionPerMonthChart';
import SparklineChart from './Sparkline/SparklineChart'
import SparklineChar2 from './Sparkline2/SparklineChart2'
import Lending from './Lending'
import LendingOne from './LendingOne';
import LendingTwo from './LendingTwo';
import IntlMessages from '../../../../helpers/IntlMessages';
import { CircularProgressbar } from 'react-circular-progressbar';
import MissionMetricBulletChart from './MissionMetricBulletChartNoLebel'
import MissionSparklineChart from './MissionSparklineChart';





const MissionMetric = () => {

  const randomnumbergenerator = (from, to) => {
    return Math.floor(Math.random() * (to - from))+1;
  };
  return (
    <div>
      <div className="row mb-4">
        <div className="col-md-6 offset-md-6">
          <div className="row">
            <div className="col-md-6">
              <select className="form-control">
                <option>By Work Program</option>
              </select>
            </div>
            <div className="col-md-6">
              <select className="form-control">
                <option>By Team Leader</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-5"  >
        <div className="col-md-9 ">
          <div className="row mb-3">
            <div className="col-md-12">
              <Card className=" h-100">
                <CardBody>
                  <CardTitle>
                    <IntlMessages id="Monitoring and Business Delivery Metric" />
                  </CardTitle>
                  <Table>
                    <thead>
                      <tr>
                        <th>Bullet Chart</th>
                        <th>Year to Date</th>
                        <th>Actual </th>
                        <th>Target </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ minWidth: '200px', maxWidth: '400px' }}>
                          <MissionMetricBulletChart value="1754" lebel="Supervision" />
                        </td>
                        <td> <MissionSparklineChart /> </td>
                        <td> <span>{randomnumbergenerator(1,10000)}</span> </td>
                        <td> <span>{randomnumbergenerator(1,10000)}</span> </td>
                      </tr>
                      <tr>
                        <td style={{ minWidth: '200px', maxWidth: '400px' }}>
                          <MissionMetricBulletChart value="5284" lebel="PCR/XSR" />
                        </td>
                        <td> <MissionSparklineChart /> </td>
                        <td> <span>{randomnumbergenerator(1,10000)}</span> </td>
                        <td> <span>{randomnumbergenerator(1,10000)}</span> </td>
                      </tr>
                      <tr>
                        <td style={{ minWidth: '200px', maxWidth: '400px' }}>
                          <MissionMetricBulletChart value="4613" lebel="Appraisal" />
                        </td>
                        <td> <MissionSparklineChart /> </td>
                        <td> <span>{randomnumbergenerator(1,10000)}</span> </td>
                        <td> <span>{randomnumbergenerator(1,10000)}</span> </td>
                      </tr>

                      <tr>
                        <td style={{ minWidth: '200px', maxWidth: '400px' }}>
                          <MissionMetricBulletChart value="1754" lebel="Preparation" />
                        </td>
                        <td> <MissionSparklineChart /> </td>
                        <td> <span>{randomnumbergenerator(1,10000)}</span> </td>
                        <td> <span>{randomnumbergenerator(1,10000)}</span> </td>
                      </tr>
                      <tr>
                        <td style={{ minWidth: '200px', maxWidth: '400px' }}>
                          <MissionMetricBulletChart value="5284" lebel="Identification" />
                        </td>
                        <td> <MissionSparklineChart /> </td>
                        <td> <span>{randomnumbergenerator(1,10000)}</span> </td>
                        <td> <span>{randomnumbergenerator(1,10000)}</span> </td>
                      </tr>
                      <tr>
                        <td style={{ minWidth: '200px', maxWidth: '400px' }}>
                          <MissionMetricBulletChart value="4613" lebel="Dialogue" />
                        </td>
                        <td> <MissionSparklineChart /> </td>
                        <td> <span>{randomnumbergenerator(1,10000)}</span> </td>
                        <td> <span>{randomnumbergenerator(1,10000)}</span> </td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Card className=" h-100">
                <CardBody>
                  <CardTitle>MISSION DELIVERY</CardTitle>
                  <div className="single-status-bar mb-3">
                    <div className="row">
                      <div className="col-xs-3">
                        <div className="text-center">
                          <div className="icon-box">
                            <span className="glyph-icon iconsminds-video-tripod"></span>
                          </div>
                        </div>
                      </div>
                      <div className="col-xs-9">
                        <div class="progress-wrap lb-side-left  mt-2">
                          <div class="progress-lb-wrap">
                            <div className="row">
                              <div className="col-xs-9 text-left">
                                <label class="progress-label mnw-25p">Lending Program</label>
                              </div>
                              <div className="col-xs-3 text-right">
                                <label class="progress-label mnw-25p">95%</label>
                              </div>
                            </div>
                            <div class="progress progress-bar-xs">
                              <div class="progress-bar bg-custom w-95" role="progressbar"
                                aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single-status-bar mb-3">
                    <div className="row">
                      <div className="col-xs-3">
                        <div className="text-center">
                          <div className="icon-box">
                            <span className="glyph-icon iconsminds-file-copy"></span>
                          </div>
                        </div>
                      </div>
                      <div className="col-xs-9">
                        <div class="progress-wrap lb-side-left  mt-2">
                          <div class="progress-lb-wrap">
                            <div className="row">
                              <div className="col-xs-9 text-left">
                                <label class="progress-label mnw-25p">Lending Program</label>
                              </div>
                              <div className="col-xs-3 text-right">
                                <label class="progress-label mnw-25p">67%</label>
                              </div>
                            </div>
                            <div class="progress progress-bar-xs">
                              <div class="progress-bar bg-custom w-67" role="progressbar"
                                aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single-status-bar mb-3">
                    <div className="row">
                      <div className="col-xs-3">
                        <div className="text-center">
                          <div className="icon-box">
                            <span className="glyph-icon simple-icon-game-controller"></span>
                          </div>
                        </div>
                      </div>
                      <div className="col-xs-9">
                        <div class="progress-wrap lb-side-left  mt-2">
                          <div class="progress-lb-wrap">
                            <div className="row">
                              <div className="col-xs-9 text-left">
                                <label class="progress-label mnw-25p">Lending Program</label>
                              </div>
                              <div className="col-xs-3 text-right">
                                <label class="progress-label mnw-25p">35%</label>
                              </div>
                            </div>
                            <div class="progress progress-bar-xs">
                              <div class="progress-bar bg-custom w-45" role="progressbar"
                                aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
            <div className="col-md-6">
              <Card className="h-100">
                <CardBody>
                  <CardTitle>
                    <IntlMessages id="MISSION DELIVERY" />
                  </CardTitle>
                  <div className="row">
                    <div className="col-md-8 offset-md-2 mission">
                      <CircularProgressbar
                        style={{ width: '70px' }}
                        strokeWidth={3}
                        value={34}
                        text={`34%`}
                      />
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <Card className=" h-100">
            <CardBody  >
              <div >
                <div style={{ borderBottom: '1px solid lightgray', marginBottom: '10px' }}  >
                  <div>
                    <p style={{ color: '#95CEFF' }} className="d-flex"> <h1 className=" ">15</h1 > <span className="ml-3" ></span> Mission Notification   </p>
                  </div>
                  <MissionNotificationOneChart />
                </div>
                <div style={{ borderBottom: '1px solid lightgray', marginBottom: '10px' }} >
                  <div>
                    <p style={{ color: '#95CEFF' }} className="d-flex"> <h1 className=" ">15</h1 > <span className="ml-3" ></span> Mission Aide  Memoire   </p>
                  </div>
                  <MissionNotificationOneChartTwo />
                </div>
                <div style={{ borderBottom: '1px solid lightgray', marginBottom: '10px' }} className="">
                  <div>
                    <p style={{ color: '#95CEFF' }} className="d-flex"> <h1 className=" ">15</h1 > <span className="ml-3" ></span> Term of Reference   </p>
                  </div>
                  <TermReportChartTwo />
                </div>
                <div className="">
                  <div>
                    <p style={{ color: '#95CEFF' }} className="d-flex"> <h1 className=" ">15</h1 > <span className="ml-3" ></span> Back to Office Report</p>
                  </div>
                  <TermReportChart />
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div  >
      <Row>
        <Colxx xxs="12" sm="12" md="12" lg="12" xl="12" className="mb-4">
          <Card className=" h-100">
            <CardBody  >
              <div>
                <TotalMissionPerMonthChart />
              </div>
              <div className="row ">
                <div className="col-md-4">
                  <p className="ml-3 mt-3">Lending</p>
                  <hr />
                  <Lending />
                </div>
                <div className="col-md-4">
                  <p className="ml-3 mt-3">Pipeline</p>
                  <hr />
                  <LendingOne />
                </div>
                <div className="col-md-4">
                  <p className="ml-3 mt-3">Portfolio</p>
                  <hr />
                  <LendingTwo />
                </div>
              </div>
            </CardBody>
          </Card>
        </Colxx>
      </Row>
      <div className="mt-5">
        <Card>
          <CardBody>
            <h3 className="text-center"> Mission Delivery By Sector </h3>
            <div className="mt-2">
              <SparklineChart />
            </div>
          </CardBody>
        </Card>
      </div>
      <div className="mt-5">
        <Card>
          <CardBody >
            <h3 className="text-center"> Mission Delivery By Project / Activity</h3>
            <div className="mt-2">
              <SparklineChar2 />
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default MissionMetric;
