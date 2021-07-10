import React from 'react';
import { injectIntl } from 'react-intl';
import { Card, CardBody, CardTitle, Row } from 'reactstrap';
import { Colxx, Separator } from '../../../../components/common/CustomBootstrap';
import IconCardsCarousel from '../../../../containers/dashboards/IconCardsCarousel';
import Tickets from '../../../../containers/dashboards/Tickets';
import ProfileStatuses from '../../../../containers/dashboards/ProfileStatuses';
import GradientWithRadialProgressCard from '../../../../components/cards/GradientWithRadialProgressCard';
import HeatmapHighchart from './HeatmapHighchart';
import WordCloudHighchart from './WordCloudHighchart';
import Example from './Example';
import GantChart from '../../../../containers/KpiDashboard/BusenessDevelopment/GantChart copy';
import IntlMessages from '../../../../helpers/IntlMessages';
import DeliveryTaskTable from './DeliveryTaskTable';
import TaskBoard from './TaskBoard';

const DefaultDashboard = ({ intl, match }) => {
  const { messages } = intl;

  return (
    <>
      <Row>
        <Colxx sm="12" md="4" className="mb-4  h-100">
          <Colxx lg="4" xl="12" className="mb-5 h-100">
            <GradientWithRadialProgressCard
              title={`Ovarall Delivery Rate`}
              detail=" Completion Rate 5/15"
              percent={(5 / 15) * 100}
              progressText={parseInt((5 / 15) * 100)}
            />
          </Colxx>
        </Colxx>
        <Colxx sm="12" md="8">
          <IconCardsCarousel />
        </Colxx>
      </Row>
      {/* Secend row  */}
      <Row>
        <Colxx sm="12" md="5" className="mb-4">
          <ProfileStatuses />
        </Colxx>
        <Colxx sm="12" md="7" className="mb-4">
          <Card  className="">
            <CardBody>
              <CardTitle>Team Board</CardTitle>
              <TaskBoard/>
            </CardBody>
          </Card>
        </Colxx>
      </Row>
      {/* Third Row */}
      <Row>
        <Colxx md="12" lg="12" xl="12" className="mb-4">
          <Card>
            <CardBody>
              <HeatmapHighchart />
            </CardBody>
          </Card>
        </Colxx>
        <Colxx md="12" lg="12" xl="12">
          <Card>
            <CardBody>
              <WordCloudHighchart />
              <div className="pl-5 pr-5 pb-5">
                <Example />
              </div>
            </CardBody>
          </Card>
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" sm="12" md="12" lg="12" xl="12" className="mt-4">
          {/* Highcart gantt chart */}
          <Card className="h-100">
            <CardBody>
              <CardTitle>
                <IntlMessages id="Activity Schedule" />
              </CardTitle>
              <GantChart />
            </CardBody>
          </Card>
        </Colxx>
      </Row>
    </>
  );
};

export default injectIntl(DefaultDashboard);
