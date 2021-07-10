import React from 'react';
import { Card, CardBody, CardTitle, Row, Table } from 'reactstrap';
import { CircularProgressbar } from 'react-circular-progressbar';
import AgeGroupChart from './AgeGroup';
import AgeBySector from './AgeBySector';
import BankPortfolioChart from './BankPortfolioChart';

const PortfolioScore = ({ match }) => {
  return (
    <>  
      <Row className="mt-5">
        <div className=" col-xl-6 col-sm-6 col-md-12 mb-3">
          <Card className="h-100">
            <CardBody> 
                <div className="alert alert-success text-center alert-custom">
                    <h3>Bank Portfolio Trend (newrly 4 billion has been committed in the past 7 yrs) and substantial growth ( +125% ) Expected in the coming yars.</h3>
                </div>
                <BankPortfolioChart/>
            </CardBody>
          </Card>
        </div>  
        <div className=" col-xl-6 col-sm-6 col-md-12 mb-3">
          <Card className="h-100">
            <CardBody> 
                <div className="alert alert-success text-center alert-custom">
                    <h3>Ovarall Portfolio Age</h3>
                </div>
                <div className="age-group-chart">
                  <AgeGroupChart/>
                  <h3 className="text-center"> Age Group </h3>
                  <p>No.of Project </p>
                </div>
            </CardBody>
          </Card>
        </div>  
      </Row>
      <Row className="mt-5">
        <div className=" col-xl-6 col-sm-6 col-md-12 mb-3">
          <Card className="h-100">
            <CardBody> 
                <div className="alert alert-success text-center alert-custom">
                    <h3>Avarage Age By Sector</h3>
                </div>
                <div className="age-group-chart"> 
                <div className="row">
                  <div className="col-md-8 offset-md-2 text-center">
                  <div className="portfolio-score" style={{ width: '250px', display:'inline-block' }}>
                    <CircularProgressbar
                      style={{ width: '70px' }}
                      strokeWidth={6}
                      value={34}
                      text={`US$ 5 bn`}
                    />
                    <div className="bl-text"> Private <br/> Sector <br/> 45% </div>
                    <div className="sky-text"> Public<br/> Sector <br/>55% </div>
                  </div>
                  </div>
                </div>
                </div>
            </CardBody>
          </Card>
        </div>
        <div className=" col-xl-6 col-sm-6 col-md-12 mb-3">
          <Card className="h-100">
            <CardBody> 
                <div className="alert alert-success text-center alert-custom">
                    <h3>Public and Private Sector Ongoing  Portfolio</h3>
                </div>
                <AgeBySector/>
            </CardBody>
          </Card>
        </div>  
      </Row>
    </>
  );
};

export default PortfolioScore;
