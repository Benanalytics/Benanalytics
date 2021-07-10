import React, { useState } from 'react';
import { injectIntl } from 'react-intl';
import { Card, CardBody, CardTitle, Row } from 'reactstrap';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import {
  PerformanceGridTable,
  PerformanceGridTable2,
  PerformanceGridTable3,
  PerformanceGridTable4,
  PerformanceGridTable5,
  PerformanceGridTable6,
} from '../../../containers/ui/PerformanceGridTable';
import IntlMessages from '../../../helpers/IntlMessages';
import LegendBox from '../Legend';
import { table1 } from './data';
import LendingCommitmentTableRegoin from './PerformanceGridTable/LendingCommitmentTableRegoin';
import MultiSelect from "react-multi-select-component";





const Regoin = ({ intl, match }) => {
  const { messages } = intl;
  const [selected, setSelected] = useState([]);

  const options = [
    { label: "Grapes 🍇", value: "grapes" },
    { label: "Mango 🥭", value: "mango" },
    { label: "Strawberry 🍓", value: "strawberry", disabled: true },
    { label: "Watermelon 🍉", value: "watermelon" },
    { label: "Pear 🍐", value: "pear" },
    { label: "Apple 🍎", value: "apple" },
    { label: "Tangerine 🍊", value: "tangerine" },
    { label: "Pineapple 🍍", value: "pineapple" },
    { label: "Peach 🍑", value: "peach" },
  ];
  return (
    <>
      <div className="row mb-3">
        <div className="col-md-4 offset-md-8">
          <div>
            <MultiSelect
              options={options}
              value={selected}
              onChange={setSelected}
              labelledBy="Filter Option"
            />
          </div>
        </div>
      </div>
      <Row>
        <Colxx sm="12" md="12" className="mb-4">
          <Card className=" h-100">
            <CardBody>
              <CardTitle>
                <div className="row">
                  <div className="col-sm-12 col-md-6">
                    <IntlMessages
                      style={{ marginLeft: '10px' }}
                      id="KPI PERFORMANCE GRID- COMPLEX "
                    />
                  </div>
                  <div className="col-sm-12 col-md-6 text-right">
                    <div style={{ display: 'inline-block' }}>
                      <div style={{ border: '1px solid lightgray', padding: '5px 10px' }}>
                        <LegendBox
                          colors={["#2E8CFF", "#FF0000", "#FFC000", "#92D050",]}
                          lebel={['NULL	', 'OFF TRACK	', 'AT RISK	', 'ON TRACK']}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CardTitle>
              <LendingCommitmentTableRegoin />
            </CardBody>
          </Card>
        </Colxx>
        <Colxx sm="12" md="12" className="mb-4">
          <Card className=" h-100">
            <CardBody>
              <CardTitle>
                <div className="row">
                  <div className="col-sm-12 col-md-6">
                    <IntlMessages
                      style={{ marginLeft: '10px' }}
                      id="LENDING AND COMMITMENTS"
                    />
                  </div>
                  <div className="col-sm-12 col-md-6 text-right">
                    <div style={{ display: 'inline-block' }}>
                      <LegendBox
                        colors={['#3E681C', '#FFBB00', '#FB6442']}
                        lebel={['On Track	', 'Off Track	', 'At Risk	']}
                      />
                    </div>
                  </div>
                </div>
              </CardTitle>
              <PerformanceGridTable2 />
            </CardBody>
          </Card>
        </Colxx>
        <Colxx sm="12" md="12" className="mb-4">
          <Card className=" h-100">
            <CardBody>
              <CardTitle>
                <div className="row">
                  <div className="col-sm-12 col-md-6">
                    <IntlMessages
                      style={{ marginLeft: '10px' }}
                      id="RESOURCES MOBILIZATION AND DONOR CORDINATION"
                    />
                  </div>
                  <div className="col-sm-12 col-md-6 text-right">
                    <div style={{ display: 'inline-block' }}>
                      <LegendBox
                        colors={['#3E681C', '#FFBB00', '#FB6442']}
                        lebel={['On Track	', 'Off Track	', 'At Risk	']}
                      />
                    </div>
                  </div>
                </div>
              </CardTitle>
              <PerformanceGridTable3 />
            </CardBody>
          </Card>
        </Colxx>
        <Colxx sm="12" md="12" className="mb-4">
          <Card className=" h-100">
            <CardBody>
              <CardTitle>
                <div className="row">
                  <div className="col-sm-12 col-md-6">
                    <IntlMessages
                      style={{ marginLeft: '10px' }}
                      id=" NON-LENDING AND COUNTRY DIALOGUE"
                    />
                  </div>
                  <div className="col-sm-12 col-md-6 text-right">
                    <div style={{ display: 'inline-block' }}>
                      <LegendBox
                        colors={['#3E681C', '#FFBB00', '#FB6442']}
                        lebel={['On Track	', 'Off Track	', 'At Risk	']}
                      />
                    </div>
                  </div>
                </div>
              </CardTitle>
              <PerformanceGridTable4 />
            </CardBody>
          </Card>
        </Colxx>
        <Colxx sm="12" md="12" className="mb-4">
          <Card className=" h-100">
            <CardBody>
              <CardTitle>
                <div className="row">
                  <div className="col-sm-12 col-md-6">
                    <IntlMessages
                      style={{ marginLeft: '10px' }}
                      id="PORTFOLIO QUALITY AND PERFORMANCE"
                    />
                  </div>
                  <div className="col-sm-12 col-md-6 text-right">
                    <div style={{ display: 'inline-block' }}>
                      <LegendBox
                        colors={['#3E681C', '#FFBB00', '#FB6442']}
                        lebel={['On Track	', 'Off Track	', 'At Risk	']}
                      />
                    </div>
                  </div>
                </div>
              </CardTitle>
              <PerformanceGridTable5 />
            </CardBody>
          </Card>
        </Colxx>
        <Colxx sm="12" md="12" className="mb-4">
          <Card className=" h-100">
            <CardBody>
              <CardTitle>
                <div className="row">
                  <div className="col-sm-12 col-md-6">
                    <IntlMessages
                      style={{ marginLeft: '10px' }}
                      id="PROCESS EFFICIENCY AND CORPORATE COMMITMENTS"
                    />
                  </div>
                  <div className="col-sm-12 col-md-6 text-right">
                    <div style={{ display: 'inline-block' }}>
                      <LegendBox
                        colors={['#3E681C', '#FFBB00', '#FB6442']}
                        lebel={['On Track	', 'Off Track	', 'At Risk	']}
                      />
                    </div>
                  </div>
                </div>
              </CardTitle>
              <PerformanceGridTable5 />
            </CardBody>
          </Card>
        </Colxx>
        <Colxx sm="12" md="12" className="mb-4">
          <Card className=" h-100">
            <CardBody>
              <CardTitle>
                <div className="row">
                  <div className="col-sm-12 col-md-6">
                    <IntlMessages
                      style={{ marginLeft: '10px' }}
                      id="MONITORING AND OPERATIONAL REPORTING"
                    />
                  </div>
                  <div className="col-sm-12 col-md-6 text-right">
                    <div style={{ display: 'inline-block' }}>
                      <LegendBox
                        colors={['#3E681C', '#FFBB00', '#FB6442']}
                        lebel={['On Track	', 'Off Track	', 'At Risk	']}
                      />
                    </div>
                  </div>
                </div>
              </CardTitle>
              <PerformanceGridTable />
            </CardBody>
          </Card>
        </Colxx>
      </Row>
    </>
  );
};
export default injectIntl(Regoin)
