import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
// import { ProtectedRoute, UserRole } from '../../../helpers/authHelper';

const TaskMetric = React.lazy(() =>
    import(/* webpackChunkName: "dashboard-default" */ './TaskMetric/TaskMetric')
);
const ActivityList = React.lazy(() =>
import(/* webpackChunkName: "dashboard-default" */ './ActivityList')
);

const ProcessList = React.lazy(() =>
import(/* webpackChunkName: "dashboard-default" */ './ProcessList/ProcessListPage')
);
const KPIDashboard = ({ match }) => (
    <Suspense fallback={<div className="loading" />}>
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/task-metric`} />
            <Route
                path={`${match.url}/task-metric`}
                render={(props) => <TaskMetric {...props} />}
            />
            <Route
                path={`${match.url}/activity-list`}
                render={(props) => <ActivityList {...props} />}
            />
            <Route
                path={`${match.url}/process-list`}
                render={(props) => <ProcessList {...props} />}
            />
            <Redirect to="/error" />
        </Switch>
    </Suspense>
);
export default KPIDashboard;