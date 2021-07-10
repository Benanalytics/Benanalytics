import React from 'react'

const Status = () => {
    return (
        <div>
            <Card className={itemClass}>
                <CardBody>
                    <SmallLineChart data={smallChartData1} />
                </CardBody>
            </Card>
        </div>
    )
}

export default Status
