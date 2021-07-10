import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import IconsUi from '../ui/components/icons';
// import { ProtectedRoute, UserRole } from '../../../helpers/authHelper';

const MissionMetric = React.lazy(() =>
    import(/* webpackChunkName: "dashboard-default" */ './MissionMetrics/MissionMetric')
);
const MissionPlan = React.lazy(() =>
    import(/* webpackChunkName: "dashboard-default" */ './MissionPlan/MissionPlan')
);
const MissionGeoAnalytics = React.lazy(() =>
    import(/* webpackChunkName: "dashboard-default" */ './MissionGeoAnalytics/MissionGeoAnalytics')
);
const KPIDashboard = ({ match }) => (
    <Suspense fallback={<div className="loading" />}>
        <Switch>
            <Route
                path={`${match.url}/mission-metrics`}
                render={(props) => <MissionMetric {...props} />}
            />
            <Route
                path={`${match.url}/mission-plan`}
                render={(props) => <MissionPlan {...props} />}
            />
            <Route
                path={`${match.url}/ui`}
                render={(props) => <IconsUi {...props} />}
            />
            <Redirect to="/error" />
        </Switch>
    </Suspense>
);
export default KPIDashboard;