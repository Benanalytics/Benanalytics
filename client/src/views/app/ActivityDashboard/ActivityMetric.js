import React from 'react';
import { injectIntl } from 'react-intl';
import { Card, CardBody, CardTitle, Row } from 'reactstrap';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import ProfileStatuses from '../../../containers/dashboards/ProfileStatuses';
import SortableStaticticsRow from '../../../containers/dashboards/SortableStaticticsRow';
import SmallLineCharts from '../../../containers/dashboards/SmallLineCharts';
import SalesChartCard from '../../../containers/dashboards/SalesChartCard';
import ProductCategoriesDoughnut from '../../../containers/dashboards/ProductCategoriesDoughnut';
import WebsiteVisitsChartCard from '../../../containers/dashboards/WebsiteVisitsChartCard';
import ConversionRatesChartCard from '../../../containers/dashboards/ConversionRatesChartCard';
import OrderStockRadarChart from '../../../containers/dashboards/OrderStockRadarChart';
import ProductCategoriesPolarArea from '../../../containers/dashboards/ProductCategoriesPolarArea';
import IntlMessages from '../../../helpers/IntlMessages';
import { CircularProgressbar } from 'react-circular-progressbar';
import TopWorkload from '../../../containers/ActivityDashboard/ActiviryMetric/TopWorkload';
import ActivityHeatmap from '../../../containers/ActivityDashboard/ActiviryMetric/ActivityHeatmap';

const ActivityMetric = ({ intl, match }) => {
  const { messages } = intl;
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <h3> <h1>Activity Dashboard</h1> ( Activity Metric )</h3>
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx xl="3" lg="3" md="6" className="mb-4">
          <Card className="h-100">
            <CardBody>
              <CardTitle>
                <IntlMessages id="Overall Performance" />
              </CardTitle>
              <div className="progress-bar-banner ">
                <CircularProgressbar
                  strokeWidth={4}
                  value={50}
                  text={'50%'}
                />
              </div>
            </CardBody>
          </Card>
        </Colxx>
        <Colxx xl="4" lg="4" md="6" className="mb-4">
          <ProductCategoriesDoughnut />
        </Colxx>
        <Colxx xl="5" lg="5" md="12" className="mb-4">
          <Card className="h-100">
            <CardBody>
              <CardTitle>
                <IntlMessages id="Overall Performance" />
              </CardTitle>
              <TopWorkload />
            </CardBody>
          </Card>
        </Colxx>
        {/* <Colxx xl="4" lg="6" md="12" className="mb-4">
          <ProfileStatuses cardClass="dashboard-progress" />
        </Colxx> */}
        {/* <Colxx xl="4" lg="12" md="12">
          <SmallLineCharts itemClass="dashboard-small-chart-analytics" />
        </Colxx> */}
      </Row>
      <SortableStaticticsRow messages={messages} />
      {/* <Row>
        <Colxx xxs="12" lg="6" className="mb-4">
          <OrderStockRadarChart />
        </Colxx>
        <Colxx xxs="12" lg="6" className="mb-4">
          <ProductCategoriesPolarArea />
        </Colxx>
      </Row> */}
      <Row>
        <Colxx xxs="12" className="mb-4">
          <Card className="h-100">
            <CardBody>
              <CardTitle>
                <IntlMessages id="Activity Heatmap" />
              </CardTitle>
              <ActivityHeatmap />
            </CardBody>
          </Card>
        </Colxx>
      </Row>
    </>
  );
};
export default injectIntl(ActivityMetric);
