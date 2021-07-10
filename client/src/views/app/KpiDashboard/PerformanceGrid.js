import React, { useState } from 'react';
import { injectIntl } from 'react-intl';
import { Button, Card, CardBody, CardTitle, Row } from 'reactstrap';
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
import LendingCommitmentTable from './PerformanceGridTable/LendingCommitmentTable';
import MultiSelect from "react-multi-select-component";
import LendingCommitmentTableRegoin from './PerformanceGridTable/LendingCommitmentTableRegoin';





const PerformanceGrid = ({ intl, match }) => {
  const { messages } = intl;
  const [selected, setSelected] = useState([]);
  const [tableData, setTableData] = useState('complex')
  const options = [
    { label: "A", value: "2020" },
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
                  <div className="col-sm-12 col-md-4">
                    <IntlMessages
                      style={{ marginLeft: '10px' }}
                      id="KPI PERFORMANCE GRID- COMPLEX "
                    />
                  </div>
                  <div className="col-sm-12 col-md-4 complexregoin ">
                    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                      <li class="nav-item" role="presentation">
                        <button onClick={e => setTableData('complex')} class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Complex</button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button onClick={e => setTableData('regoin')} class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Regoin</button>
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-12 col-md-4 text-right">
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
              {
                tableData == 'complex' ?
                  <LendingCommitmentTable />
                  :
                  <LendingCommitmentTableRegoin />
              }
            </CardBody>
          </Card>
        </Colxx>
      </Row>
    </>
  );
};
export default injectIntl(PerformanceGrid)
