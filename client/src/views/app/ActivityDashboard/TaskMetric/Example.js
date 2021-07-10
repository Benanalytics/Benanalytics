import React from 'react';
import { Progress } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Progress multi>
        <Progress bar color="success" value="25" />
        <Progress bar color="info" value="25" />
        <Progress bar color="warning" value="25" />
        <Progress bar color="danger" value="25" />
      </Progress>
      <div className="row">
        <div className="col-3 text-bold text-center text-success">
          <b>Business Developent</b>{' '}
        </div>
        <div className="col-3 text-bold text-center text-info">
          <b>Business Developent</b>{' '}
        </div>
        <div className="col-3 text-bold text-center text-warning">
          <b>Corporate Activities</b>{' '}
        </div>
        <div className="col-3 text-bold text-center text-danger">
          <b>Non Lending Activities</b>{' '}
        </div>
      </div>
    </div>
  );
};

export default Example;
