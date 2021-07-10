import React from 'react';
import { injectIntl } from 'react-intl';
import { Card, CardBody, CardTitle, Row, Table } from 'reactstrap';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';

import WebsiteVisitsChartCard from '../../../containers/KpiDashboard/WebsiteVisitsChartCard';
import ProductCategoriesPolarArea from '../../../containers/KpiDashboard/ProductCategoriesPolarArea';
import DisbursmentTrajectory from '../../../containers/KpiDashboard/PortfolioManagement/DisbursmentTrajectory';
import DisbursmentWindow from '../../../containers/KpiDashboard/PortfolioManagement/DisbursementWindow';
import DisbursmentTrend from '../../../containers/KpiDashboard/PortfolioManagement/DisbursmentTrend';
import IntlMessages from '../../../helpers/IntlMessages';
import GroupChart from '../ui/components/GroupChart';
import ThreeStrokeChart from '../../../containers/KpiDashboard/PortfolioManagement/ThreeStrokeChart';
import LegendBox from '../Legend';
import HighcahrtSparkline from '../ui/components/HighchartSparkline';
import SparkLineChartHighchart from '../ui/components/Sparkline/SparklineChart';
import PortfolioHelthFlaggedTypeChart from '../ui/components/PortfolioHelthFlaggedTypeChart';
import BandWorkloadParetoChart from './BandWorkloadParetoChart';
import PortfolioHealthChart from './PortfolioHealthChart';
import TrendPortfolioHealthChart from './TrendPortfolioHealthChart';

const PortfolioManagement = ({ intl, match }) => {
  const { messages } = intl;
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <h4>
            {' '}
            <h1>Kpi Dashboard</h1> ( Portfolio Management )
          </h4>
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx sm="12" md="12" lg="6" xl="6" className="mb-4">
          <Card className="h-100">
            <CardBody>
              <CardTitle>
                <IntlMessages id="Overall Portfolio Health (%) " />
              </CardTitle>
              <PortfolioHealthChart />
            </CardBody>
          </Card>
        </Colxx>
        <Colxx sm="12" md="12" lg="6" xl="6" className="mb-4">
          <Card className="h-100">
            <CardBody>
              <CardTitle>
                <IntlMessages id="Portfolio Health by Sector (UA M)" />
              </CardTitle>
              <PortfolioHelthFlaggedTypeChart />
            </CardBody>
          </Card>
        </Colxx>
        <Colxx sm="12" md="12" className="mb-4">
          <Card className="h-100">
            <CardBody>
              <CardTitle>
                <IntlMessages id="Trend in Portfolio Health" />
              </CardTitle>
              <div className="">
                <LegendBox
                  colors={['#21C36A', '#F53201', '#FFBF61']}
                  lebel={['Satisfactory', 'Flagged', 'Watchlist']}
                />
                <TrendPortfolioHealthChart />
              </div>
            </CardBody>
          </Card>
        </Colxx>
        <Colxx sm="12" md="12" lg="12" xl="12" className="mb-4">
          <Card className="h-100">
            <CardBody>
              <CardTitle>
                <IntlMessages id="Flags Indicator affecting Portfolio" />
              </CardTitle>
              <BandWorkloadParetoChart />
              <div className="pt-5">
                <SparkLineChartHighchart />
              </div>
            </CardBody>
          </Card>
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" lg="6" className="mb-4">
          <Card className="h-100">
            <CardBody>
              <CardTitle>
                <IntlMessages id="Disbursement Trajectory" />
              </CardTitle>
              <div className="">
                <LegendBox
                  colors={['#bfbfbf', '#7E6859']}
                  lebel={['Disbursed', 'Undisbursed']}
                />
                <DisbursmentTrajectory />
              </div>
            </CardBody>
          </Card>
        </Colxx>
        <Colxx xxs="12" lg="6" className="mb-4">
          <Card className="h-100">
            <CardBody>
              <CardTitle>
                <IntlMessages id="Disbursement By Window" />
              </CardTitle>
              <div className="chart-container">
                <LegendBox
                  colors={['#74B1A9', '#BBC1C1', '#4E6456', '#ADD1C1']}
                  lebel={['Other', 'ADB Private', 'ADB Public', 'ADF']}
                />
                <DisbursmentWindow />
              </div>
            </CardBody>
          </Card>
        </Colxx>
        <Colxx xxs="12" lg="12" className="mb-4">
          <Card className="h-100">
            <CardBody className="pt-5 pb-5">
              <CardTitle>
                <IntlMessages id="Disbursment Trend" />
              </CardTitle>
              <div className="pb-3">
                <LegendBox
                  colors={['#BBC1C1', '#4E6456', '#008FFB']}
                  lebel={[
                    'ADB Private',
                    'ADB Public',
                    'Overall Disbursement Trend',
                  ]}
                />
                <div className="chart-container ">
                  <DisbursmentTrend />
                </div>
              </div>
            </CardBody>
          </Card>
        </Colxx>
      </Row>

      <Row>
        <Colxx xxs="12">
          <h3> Process Efficiency </h3>
          <Separator className="" />
        </Colxx>
      </Row>
      <Row className="mt-4">
        <Colxx xxs="6" sm="4" md="4" lg="4" xl="4" className="mb-4">
          <Card className="h-100">
            <CardBody>
              <CardTitle className="text-center">
                <IntlMessages
                  className="text-center"
                  id="Approval To Signature"
                />
              </CardTitle>
              <GroupChart labelName="Month" />
            </CardBody>
          </Card>
        </Colxx>
        <Colxx xxs="6" sm="4" md="4" lg="4" xl="4" className="mb-4">
          <Card className="h-100">
            <CardBody>
              <CardTitle className="text-center">
                <IntlMessages
                  className="text-center"
                  id="Approval To 1st Disbursment "
                />
              </CardTitle>
              <GroupChart labelName="Month" />
            </CardBody>
          </Card>
        </Colxx>
        <Colxx xxs="6" sm="4" md="4" lg="4" xl="4" className="mb-4">
          <Card className="h-100">
            <CardBody>
              <CardTitle className="text-center">
                <IntlMessages
                  className="text-center"
                  id=" Completions Report"
                />
              </CardTitle>
              <GroupChart labelName="Number" />
            </CardBody>
          </Card>
        </Colxx>
        <Colxx xxs="6" sm="4" md="4" lg="4" xl="4" className="mb-4">
          <Card className="h-100">
            <CardBody>
              <CardTitle className="text-center">
                <IntlMessages
                  className="text-center"
                  id="Timely Supervision Report "
                />
              </CardTitle>
              <GroupChart labelName="Number" />
            </CardBody>
          </Card>
        </Colxx>
        <Colxx xxs="6" sm="4" md="4" lg="4" xl="4" className="mb-4">
          <Card className="h-100">
            <CardBody>
              <CardTitle className="text-center">
                <IntlMessages
                  className="text-center"
                  id="Loans & Grants Signature"
                />
              </CardTitle>
              <GroupChart labelName="UA M" />
            </CardBody>
          </Card>
        </Colxx>
        <Colxx xxs="6" sm="4" md="4" lg="4" xl="4" className="mb-4">
          <Card className="h-100">
            <CardBody>
              <CardTitle className="text-center">
                <IntlMessages
                  className="text-center"
                  id="Loans & Grants Cancellation"
                />
              </CardTitle>
              <GroupChart labelName="Month" />
            </CardBody>
          </Card>
        </Colxx>
      </Row>
    </>
  );
};
export default injectIntl(PortfolioManagement);
