import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';

import IntlMessages from '../../helpers/IntlMessages';
import { PolarAreaChart } from '../../components/charts';


const ProductCategoriesPolarArea = ({ chartClass = 'chart-container' }) => {
  const polarAreaChartData = {
    labels: ['Satisfactory','Flagged ' ,'Watchlist',],
    datasets: [
      {
        data: [80, 90, 70],
        borderWidth: 2,
        borderColor: ['#21C36A', '#F53201', '#FFBF61'],
        backgroundColor: ['#21C36A', '#F53201', '#FFBF61'],
      },
    ],
  };
  return (
    <Card className="h-100">
      <CardBody>
        <CardTitle>
          <IntlMessages id="Overall Portfolio Health (%) " />
        </CardTitle>
        <div className="p-3"></div>
        <div className={chartClass}>
          <PolarAreaChart shadow data={polarAreaChartData} />
        </div>
      </CardBody>
    </Card>
  );
};

export default ProductCategoriesPolarArea;
