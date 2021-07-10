import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { Button } from 'reactstrap';
import { Row, Card, CardBody } from 'reactstrap';
import { Colxx } from '../../../../components/common/CustomBootstrap';
import ActivityStatusBoard from '../../../../containers/dashboards/ActivityStatusBoard';
import IntlMessages from '../../../../helpers/IntlMessages';
import FoodTable from '../FoodTable';
import BandWorkloadParetoChart from './BandWorkloadParetoChart';
import ProcessListStacked from './ProcessListStackedChart';


const ProcessList = () => {
  return (
    <div>
      <Row>
        <Colxx className="mb-5" xxs="12">
          <Card>
            <CardBody>
              <ProcessListStacked />
            </CardBody>
          </Card>
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" sm="12" md="12" lg="12" xl="12" className="mb-4">
          <FoodTable />
        </Colxx>
      </Row>
    </div>
  );
};

export default ProcessList;
