import React, { useState } from 'react';
import { injectIntl } from 'react-intl';
import { Card, CardBody, CardTitle, Row } from 'reactstrap';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import LandingDeliveryTracjectoryChart from '../../../containers/KpiDashboard/BusenessDevelopment/LandingDeliveryTracjectoryChart';
import LendingBargChart from '../../../containers/KpiDashboard/BusenessDevelopment/LendingBragChart';
import IntlMessages from '../../../helpers/IntlMessages';
import LegendBox from '../Legend';

import LendingQuarterlyPlanChart from '../../../containers/KpiDashboard/BusenessDevelopment/LendingQuarterlyPlanChart';
import { ThemeColors } from '../../../helpers/ThemeColors';
import { SmallLineChart } from '../../../components/charts';
import LendingReadiness from '../../../containers/KpiDashboard/BusenessDevelopment/LendingReadiness';
import GantChart from '../../../containers/KpiDashboard/BusenessDevelopment/GantChart';
import CombinedChart from '../../../containers/KpiDashboard/BusenessDevelopment/CombinedChart';

const colors = ThemeColors();

const BussinessDevelopment = ({ intl, match }) => {
  const { messages } = intl;
  const [tableData, setTableData] = useState([
    {
      color: '#FF4560',
      title: 'Special Agro-industrial Processing Zones (Phase I (SAPZs I)',
      uam: '100',
      complex: 'AHVP',
      boardDate: '12-JAN-2021',
    },
    {
      color: '#00E396',
      title: 'Komadugu-Yobe Multipurpose Water Resources Development Project ',
      uam: '7.3',
      complex: 'AHVP',
      boardDate: '12-JAN-2021',
    },
    {
      color: '#FEB019',
      title: 'Nigeria First City Monument Bank LOC',
      uam: '9.2',
      complex: 'AHVP',
      boardDate: '12-JAN-2021',
    },
    {
      color: '#ED5752',
      title: 'Nigeria Innovation Programme',
      uam: '5.6',
      complex: 'AHVP',
      boardDate: '12-JAN-2021',
    },
    {
      color: '#00E396',
      title: 'Akure-Ado Ekiti Road Rehabilitation and Dualization Project',
      uam: '10.0',
      complex: 'PIVP',
      boardDate: '12-JAN-2021',
    },
    {
      color: '#FEB019',
      title: 'Abuja Urban Mobility and Bus Rapid Transport (BRT) Project',
      uam: '5.2',
      complex: 'PIVP',
      boardDate: '12-JAN-2021',
    },
    {
      color: '#00E396',
      title: 'Electricity Cooperatives in Lagos State',
      uam: '5.1',
      complex: 'PIVP',
      boardDate: '12-JAN-2021',
    },
  ]);
  const [modalBasic, setModalBasic] = useState(false);
  const smallChartData1 = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Sovereign  Lending ',
        borderColor: colors.themeColor1,
        pointBorderColor: colors.themeColor1,
        pointHoverBackgroundColor: colors.themeColor1,
        pointHoverBorderColor: colors.themeColor1,
        pointRadius: 2,
        pointBorderWidth: 3,
        pointHoverRadius: 2,
        fill: false,
        borderWidth: 2,
        data: [50, 1300, 1550, 921],
        datalabels: {
          align: 'end',
          anchor: 'end',
        },
      },
    ],
  };
  const smallChartData2 = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Non-Soverign  Lending',
        borderColor: colors.themeColor1,
        pointBorderColor: colors.themeColor1,
        pointHoverBackgroundColor: colors.themeColor1,
        pointHoverBorderColor: colors.themeColor1,
        pointRadius: 2,
        pointBorderWidth: 3,
        pointHoverRadius: 2,
        fill: false,
        borderWidth: 2,
        data: [3, 2432, 243, 6428],
        datalabels: {
          align: 'end',
          anchor: 'end',
        },
      },
    ],
  };
  const waterfall1 = ['Q1', 'Q2', 'Q3', 'Q4', 'Lending'];
  const waterfall2 = [
    'Approved',
    'PAR Approved',
    'PCN Approved',
    'Pre PCN',
    'Lending ',
  ];
  return (
    <>
      <Row>
        <Colxx xxs="12" sm="12" md="6" lg="4" xl="4" className="mb-4">
          <Card className="h-100">
            <CardBody className=" mt-4">
              <div className="row">
                <div className="col-md-12" style={{ position: 'relative' }}>
                  <div className="text-center">
                    <div className={`icon-row-item  text-center `}>
                      <i
                        className="glyph-icon simple-icon-refresh color-theme-1"
                        style={{ fontSize: '30px' }}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mt-4">
                    <div className="row mt-1">
                      <div className="col-md-6">
                        <p className="lead color-theme-1 mb-1 value">$12,890</p>
                      </div>
                      <div className="col-md-6 text-right">
                        <h5 className="lead color-theme-1 mb-1 value">87%</h5>
                      </div>
                    </div>
                    <div class="progress progress-bar-xs ">
                      <div
                        class="progress-bar bg-primary w-95"
                        role="progressbar"
                        aria-valuenow="35"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </Colxx>
        <Colxx xxs="12" sm="12" md="6" lg="8" xl="8" className="mb-4">
          <Card className=" h-100">
            <CardBody>
              <div className="row">
                <div
                  className="col-md-6"
                  style={{ borderRight: '1px solid #cacaca' }}
                >
                  <div className="p-1">
                    <SmallLineChart data={smallChartData1} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="p-1">
                    <SmallLineChart data={smallChartData2} />
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" sm="12" md="6" lg="" xl="6" className="mb-4 hide-y">
          <Card>
            <CardBody>
              <CardTitle>
                <IntlMessages id="Lending Quarterly Plan" />
              </CardTitle>
              <LendingQuarterlyPlanChart lebel={waterfall1} />
            </CardBody>
          </Card>
        </Colxx>
        <Colxx xxs="12" sm="12" md="6" lg="" xl="6" className="mb-4">
          <Card className="h-100">
            <CardBody>
              <CardTitle>
                <IntlMessages id=" Lending Readiness " />
              </CardTitle>
              <LendingReadiness lebel={waterfall2} />
            </CardBody>
          </Card>
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" sm="12" md="12" lg="12" xl="12" className="mb-4">
          <Card className="h-100">
            <CardBody>
              <CardTitle>
                <IntlMessages id="Co-Financing Delivery By Sector" />
              </CardTitle>
              <CombinedChart />
            </CardBody>
          </Card>
        </Colxx>
      </Row>
      <Row>
        <Colxx sm="12" md="6" className="mb-4">
          <Card className=" h-100">
            <CardBody>
              <CardTitle>
                <IntlMessages id="Lending  Delivery Plan" />
              </CardTitle>
              <LandingDeliveryTracjectoryChart />
            </CardBody>
          </Card>
        </Colxx>
        <Colxx sm="12" md="6" className="mb-4">
          <Card className=" h-100">
            <CardBody>
              <CardTitle>
                <IntlMessages id="Lending in Q1 BRAG" />
              </CardTitle>
              <LegendBox
                colors={['#87AD40', '#2A4849']}
                lebel={['Plan', 'Actual']}
              />
              <LendingBargChart />
            </CardBody>
          </Card>
        </Colxx>
      </Row>
      <Row>
        <Colxx sm="12" md="6" className="mb-4">
          <Card className=" h-100">
            <CardBody>
              <CardTitle>
                <IntlMessages id="Total Lending Approval" />
              </CardTitle>
              <LegendBox
                colors={['#87AD40', '#2A4849']}
                lebel={['Plan', 'Actual']}
              />
              <LendingBargChart />
            </CardBody>
          </Card>
        </Colxx>
        <Colxx sm="12" md="6" className="mb-4">
          <Card className=" h-100">
            <CardBody>
              <CardTitle>
                <IntlMessages id="Co-Financing Partnership Resources" />
              </CardTitle>
              <LegendBox
                colors={['#87AD40', '#2A4849']}
                lebel={['Plan', 'Actual']}
              />
              <LendingBargChart />
            </CardBody>
          </Card>
        </Colxx>
      </Row>
      {/* <Row>
        <Colxx xxs="12" sm="12" md="12" lg="12" xl="12" className="mb-4">
          <Card className="h-100">
            <CardBody>
              <CardTitle>
                <IntlMessages id="Co-Financing Delivery By Sector" />
              </CardTitle>
              <CombinedChart1 />
            </CardBody>
          </Card>
        </Colxx>
      </Row> */}
      <Row>
        <Colxx xxs="12" sm="12" md="12" lg="12" xl="12" className="mb-4">
          {/* Highcart gantt chart */}
          <Card className="h-100">
            <CardBody>
              <CardTitle>
                <IntlMessages id=" Lending  Delivery  Gantt Chart " />
              </CardTitle>
              <GantChart />
            </CardBody>
          </Card>
        </Colxx>
      </Row>
    </>
  );
};

export default injectIntl(BussinessDevelopment);
