
import React from 'react';
import { Card, CardBody, CardTitle, Progress } from 'reactstrap';

import IntlMessages from '../../helpers/IntlMessages';
import data from '../../data/profileStatuses';
import { CircularProgressbar } from 'react-circular-progressbar';

const ProfileStatuses = ({ cardClass = 'h-100' }) => {
  return (
    <Card className={cardClass}>
      <CardBody>
        <CardTitle>
          <IntlMessages id=" Delivery Rate" />
        </CardTitle>

        <div class="table-wrap">
          <div class="table-responsive">
            <table class="table table-sm table-hover mb-0">
              <thead>
                <tr>
                  <th>Indicator</th>
                  <th>completion</th>
                  <th class="w-20">progress</th>
                </tr>
              </thead>
              <tbody>
                {
                  data.map(el => (
                    <tr>
                      <td> {el.title} </td>
                      <td>
                        <span class="d-flex align-items-center"><i style={{ fontSize: '25px' }}
                          class="glyph-icon iconsminds-arrow-circle font-25 mr-10 text-light-40"></i><span> {el.total}/{el.status}  </span></span>
                      </td>
                      <td>
                        <div class="progress-wrap lb-side-left mnw-125p">
                          <div class="progress-lb-wrap">
                            <label class="progress-label mnw-25p">95%</label>
                            <div class="progress progress-bar-xs">
                              <div class="progress-bar bg-success w-95" role="progressbar"
                                aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>

        {/* {data.map((s, index) => {
          return (

            <div key={index} className="mb-4">
              <div className="d-flex">
                <div className="progress-bar-circle mb-4">
                  <CircularProgressbar
                    strokeWidth={4}
                    value={`${parseInt((s.status / s.total) * 100)}`}
                    text={`${parseInt((s.status / s.total) * 100)} %`}
                  />
                </div>
                <div className="mt-3 ml-3">
                  <div style={{ width: '150px', display: 'inline-block' }}>
                    <span >{s.title}</span>
                  </div>

                  <h5 className="float-right ml-5 text-muted">
                    {s.status}/{s.total}
                  </h5>
                </div>
              </div>
              <Progress value={(s.status / s.total) * 100} />
            </div>
          );
        })} */}
      </CardBody>
    </Card>
  );
};
export default ProfileStatuses;
