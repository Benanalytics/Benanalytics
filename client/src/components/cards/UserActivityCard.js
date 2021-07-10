import React from 'react';
import { Card, CardBody } from 'reactstrap';
import { CircularProgressbar } from 'react-circular-progressbar';

const Useractivity = ({
  icon,
  title,
  detail,
  percent,
  progressText,
}) => {
  return (
    <Card className="progress-banner">
      <CardBody className="justify-content-between d-flex flex-row align-items-center">
        <div>
          <i
            className={`${icon} mr-2 text-white align-text-bottom d-inline-block`}
          />
          <div>
            <p className="lead text-white"  >{title}</p>
          </div>
        </div>
          <CircularProgressbar
          style={{width:'70px'}}
            strokeWidth={2}
            value={percent}
            text={`${progressText}%`}
          />
      </CardBody>
    </Card>
  );
};
export default React.memo(Useractivity);
