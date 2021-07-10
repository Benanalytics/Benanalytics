import React from 'react'
import PlanHeatmap from './PlanHeatmap'
import ThreeStrokeChart from './ThreeStrokeBar'
import PlanRange from './PlanRange'
import { Card, CardBody } from 'reactstrap'
const MissionPlan = () => {
    return (
        <div>
            <div className="row mb-4">
                <div className="col-md-8 offset-md-4">
                <div className="row">
                    <div className="col-md-4">
                    <select className="form-control">
                        <option>By Work Program</option>
                    </select>
                    </div>
                    <div className="col-md-4">
                    <select className="form-control">
                        <option>By Month</option>
                    </select>
                    </div>
                    <div className="col-md-4">
                    <select className="form-control">
                        <option>By Team Leader</option>
                    </select>
                    </div>
                </div>
                </div>
            </div>
            <Card className="mb-3">
                <CardBody>
                    <ThreeStrokeChart/>
                </CardBody>
            </Card>
            <Card className="mb-3">
                <CardBody>
                    <PlanHeatmap/>
                </CardBody>
            </Card>
            <Card className="mb-3">
                <CardBody>
                    <PlanRange/>
                </CardBody>
            </Card>
        </div>
    )
}

export default MissionPlan
