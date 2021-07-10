import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { Card, CardBody, CardTitle, Row, Table } from 'reactstrap';
import LegendBox from '../Legend';
import BreakDownChart from './BreakdownChart';
import PortfolioByProduct from './PortfolioByProduct';
import PortfolioTrend from './PortfolioTrend';
import AgeGroupChart from '../PortfolioScore/AgeGroup';
import AgeBySector from '../PortfolioScore/AgeBySector';
import BankPortfolioChart from '../PortfolioScore/BankPortfolioChart';

const PortfolioKey = ({ match }) => {
  return (
    <>
      <Row>
        <div className=" col-xl-8 ">
          <Card className="h-100 ">
            <CardBody>
              <div className="mb-3">
                <h2>PORTFOLIO KEY STATISTICS</h2>
              </div>
              <div className="row portfoliokey-piechart ">
                <div className="col-md-4 col-sm-12">
                  <div className="row portfoliokey-piechart">
                    <div className="col-md-3 offset-md-2 text-center">
                      <div style={{ width: '150px', display: 'inline-block' }}>
                        <CircularProgressbar
                          style={{ width: '70px' }}
                          strokeWidth={6}
                          value={34}
                          text={`34%`}
                        />
                        <h3 className="text-center mt-3">Disbursed </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12">
                  <div className="row">
                    <div className="col-md-3 offset-md-2 text-center">
                      <div style={{ width: '150px', display: 'inline-block' }}>
                        <CircularProgressbar
                          style={{ width: '70px' }}
                          strokeWidth={6}
                          value={34}
                          text={`34%`}
                        />
                        <h3 className="text-center mt-3">SDV Disb </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12">
                  <div className="row">
                    <div className="col-md-3 offset-md-2 text-center">
                      <div style={{ width: '150px', display: 'inline-block' }}>
                        <CircularProgressbar
                          style={{ width: '70px' }}
                          strokeWidth={6}
                          value={34}
                          text={`34%`}
                        />
                        <h3 className="text-center mt-3">NSO Disb </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="portfolioKayDetails">
                <div className="portfolioKayDetailsHeader">
                  <div className="row">
                    <div className="col-md-6 col-sm-12  text-left">
                      <p>POTENTIAL EXIT :7 PROJECTS</p>
                    </div>
                    <div className="col-md-6 col-sm-12  text-right">
                      <p>AVAILABLE PROJECT SIZE : 50:43</p>
                    </div>
                  </div>
                </div>
                <div className="row row-details mt-5 mb-5">
                  <div className="col-md-4 text-center">
                    <div className="rsb" />
                    <h3>ACTIVE </h3>
                    <h3>
                      {' '}
                      <h1 style={{ fontWeight: '700' }}>$3</h1>bn
                    </h3>
                  </div>
                  <div className="col-md-4 text-center">
                    <div className="rsb" />
                    <h3>COMPLETED </h3>
                    <h3>
                      {' '}
                      <h1 style={{ fontWeight: '700' }}>$3</h1>bn
                    </h3>
                  </div>
                  <div className="col-md-4 text-center">
                    <h3>CANCALLED </h3>
                    <h3>
                      {' '}
                      <h1 style={{ fontWeight: '700' }}>$3</h1>bn
                    </h3>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
        <div className=" col-xl-4 mb-b">
          <Card className="h-100">
            <CardBody>
              <h2>BREAKDOWN BY FIN WINDOW</h2>
              <BreakDownChart />
              <div className="text-center">
                {/* <div style={{display:'inline-block'}}>
                <LegendBox
                  colors={['#7EACEF', '#444248', '#66FF76', '#FCA452']}
                  lebel={['ADB', 'ADF', 'AGTF', 'Other']}
                />
              </div> */}
              </div>
            </CardBody>
          </Card>
        </div>
      </Row>
      <Row className="mt-5">
        <div className=" col-xl-6">
          <Card className="h-100">
            <CardBody>
              <h2>PORTFOLIO TREND</h2>
              <PortfolioTrend />
            </CardBody>
          </Card>
        </div>
        <div className=" col-xl-6">
          <Card className="h-100">
            <CardBody>
              <h2>PORTFOLIO BY PRODUCTS</h2>
              <PortfolioByProduct />
            </CardBody>
          </Card>
        </div>
      </Row>

      <Row className="mt-5">
        <div className=" col-xl-6 col-sm-6 col-md-12 mb-3">
          <Card className="h-100">
            <CardBody>
              <div className="alert alert-success text-center alert-custom">
                <h3>
                  Bank Portfolio Trend (newrly 4 billion has been committed in
                  the past 7 yrs) and substantial growth ( +125% ) Expected in
                  the coming yars.
                </h3>
              </div>
              <BankPortfolioChart />
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
                <AgeGroupChart />
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
                    <div
                      className="portfolio-score"
                      style={{ width: '250px', display: 'inline-block' }}
                    >
                      <CircularProgressbar
                        style={{ width: '70px' }}
                        strokeWidth={6}
                        value={34}
                        text={`US$ 5 bn`}
                      />
                      <div className="bl-text">
                        {' '}
                        Private <br /> Sector <br /> 45%{' '}
                      </div>
                      <div className="sky-text">
                        {' '}
                        Public
                        <br /> Sector <br />
                        55%{' '}
                      </div>
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
                <h3>Public and Private Sector Ongoing Portfolio</h3>
              </div>
              <AgeBySector />
            </CardBody>
          </Card>
        </div>
      </Row>
    </>
  );
};

export default PortfolioKey;
