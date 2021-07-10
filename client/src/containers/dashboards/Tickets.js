
import React from 'react';
import { NavLink } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Card, CardBody, CardTitle, Progress } from 'reactstrap';

import IntlMessages from '../../helpers/IntlMessages';
import data from '../../data/tickets';
import { adminRoot } from '../../constants/defaultValues';
import { CircularProgressbar } from 'react-circular-progressbar';

const Tickets = () => {
  return (
    <Card className="h-100">
      <CardBody>
        <CardTitle>
          <IntlMessages id="Task Board" />
        </CardTitle>
        <div className="dashboard-list-with-user">
        <hr/>
          <PerfectScrollbar
            options={{ suppressScrollX: true, wheelPropagation: false }} style={{height:'370px'}}
          >
              <table class="table table-borderless">
                <thead>
                  <tr>
                    <th scope="col" style={{textAlign:'left'}} colSpan="2"> Task Leader</th>
                    <th scope="col">Progress</th>
                    <th scope="col" style={{textAlign:'center'}}>High </th>
                    <th scope="col" style={{textAlign:'center'}}>Medium</th>
                    <th scope="col" style={{textAlign:'center'}}>Low</th>
                  </tr>
                </thead>
                <tbody>
                    {data.map((ticket, index) => {
                      return (
                        <tr
                          key={index}
                        >
                            <td>
                              <NavLink to={`${adminRoot}/pages/product/details`}>
                                <img
                                  src={ticket.thumb}
                                  alt={ticket.title}
                                  className="img-thumbnail border-0 rounded-circle list-thumbnail align-self-center xsmall mb-1  "
                                />
                              </NavLink>
                            </td>
                            <td>
                              <NavLink to={`${adminRoot}/pages/product/details`} style={{width:'100px'}}>
                                <p className="font-weight-medium mt-2 ">{ticket.title}</p>
                              </NavLink>
                            </td>
                            <td scope="row">
                              <div className="progress-bar-circle mb-1">
                                  <CircularProgressbar
                                    strokeWidth={4}
                                    value={12}
                                    text={23}
                                  />
                                </div>
                            </td>
                            <td style={{textAlign:'center', color:'#FF0000'}}> <span style={{width:'8px',height:'8px',borderRadius:'5px',background:'#FF0000',display:'inline-block'}}></span> 7</td>
                            <td style={{textAlign:'center', color:'#FFC000'}}> <span style={{width:'8px',height:'8px',borderRadius:'5px',background:'#FFC000',display:'inline-block'}}></span> 9</td>
                            <td style={{textAlign:'center', color:'#00B050'}}> <span style={{width:'8px',height:'8px',borderRadius:'5px',background:'#00B050',display:'inline-block'}}></span> 3</td>
                          </tr>
                      );
                    })}
                </tbody>
              </table>
          </PerfectScrollbar>
        </div>
      </CardBody>
    </Card>
  );
};
export default Tickets;
