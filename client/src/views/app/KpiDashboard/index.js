import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Regoin from './Regoin';
// import { ProtectedRoute, UserRole } from '../../../helpers/authHelper';

const PortfolioManagement = React.lazy(() =>
  import(/* webpackChunkName: "dashboard-default" */ './PortfolioManagement')
);
const BusinessDevelopment = React.lazy(() =>
  import(/* webpackChunkName: "dashboard-default" */ './BusinessDevelopment')
);
const PerformanceGrid = React.lazy(() =>
  import(/* webpackChunkName: "dashboard-default" */ './PerformanceGrid')
);
const Readiness = React.lazy(() =>
  import(/* webpackChunkName: "dashboard-default" */ './Readiness')
);
const KPIDashboard = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/portfolio-management`} />
      <Route
        path={`${match.url}/portfolio-management`}
        render={(props) => <PortfolioManagement {...props} />}
      />
      <Route
        path={`${match.url}/business-development`}
        render={(props) => <BusinessDevelopment {...props} />}
      />
      <Route
        path={`${match.url}/business-development-regoin`}
        render={(props) => <Regoin {...props} />}
      />

      <Route
        path={`${match.url}/performance-grid`}
        render={(props) => <PerformanceGrid {...props} />}
      />

      <Route
        path={`${match.url}/readiness`}
        render={(props) => <Readiness {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default KPIDashboard;
