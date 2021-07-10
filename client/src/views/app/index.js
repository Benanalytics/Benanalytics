import React, { Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AppLayout from '../../layout/AppLayout';
import IconsUi from './ui/components/icons';

const KpiDashboard = React.lazy(() =>
  import(/* webpackChunkName: "dashboards" */ './KpiDashboard')
);

const ActivityDashboard = React.lazy(() =>
  import(/* webpackChunkName: "dashboards" */ './ActivityDashboard')
);
const MissionProgram = React.lazy(() =>
  import(/* webpackChunkName: "dashboards" */ './MissionProgram')
);
const Dashboards = React.lazy(() =>
  import(/* webpackChunkName: "dashboards" */ './dashboards')
);
const Pages = React.lazy(() =>
  import(/* webpackChunkName: "pages" */ './pages')
);
const Applications = React.lazy(() =>
  import(/* webpackChunkName: "applications" */ './applications')
);
const Ui = React.lazy(() => import(/* webpackChunkName: "ui" */ './ui'));
const Menu = React.lazy(() => import(/* webpackChunkName: "menu" */ './menu'));
import PortfolioKey from './PortFolioKey/PortfolioKey';
import PortfolioScore from './PortfolioScore/PortfolioScore';
import MissionGeoAnalytics from './MissionProgram/MissionGeoAnalytics/MissionGeoAnalytics';
const BlankPage = React.lazy(() =>
  import(/* webpackChunkName: "blank-page" */ './blank-page')
);

const App = ({ match }) => {
  return (
    <AppLayout>
      <div className="dashboard-wrapper">
        <Suspense fallback={<div className="loading" />}>
          <Switch>
            <Redirect
              exact
              from={`${match.url}/`}
              to={`${match.url}/dashboards`}
            />
            <Route
              path={`${match.url}/kpi`}
              render={(props) => <KpiDashboard {...props} />}
            />

            <Route
              path={`${match.url}/activity`}
              render={(props) => <ActivityDashboard {...props} />}
            />
            <Route
              path={`${match.url}/workprogram`}
              render={(props) => <MissionProgram {...props} />}
            />
            <Route
              path={`${match.url}/dashboards`}
              render={(props) => <Dashboards {...props} />}
            />
            <Route
              path={`${match.url}/applications`}
              render={(props) => <Applications {...props} />}
            />
            <Route
              path={`${match.url}/pages`}
              render={(props) => <Pages {...props} />}
            />
            <Route
              path={`${match.url}/ui`}
              render={(props) => <Ui {...props} />}
            />
            <Route
              path={`${match.url}/menu`}
              render={(props) => <Menu {...props} />}
            />
            <Route
              path={`${match.url}/new-page`}
              render={(props) => <BlankPage {...props} />}
            />
            <Route
              path={`${match.url}/portfolio-key`}
              render={(props) => <PortfolioKey {...props} />}
            />
            
            <Route
              path={`${match.url}/portfolio-score`}
              render={(props) => <PortfolioScore {...props} />}
            />
            
            <Route
                path={`${match.url}/mission-geo-analytics`}
                render={(props) => <MissionGeoAnalytics {...props} />}
            />
            {/* <Redirect to="/error" /> */}
          </Switch>
        </Suspense>
      </div>
    </AppLayout>
  );
};

const mapStateToProps = ({ menu }) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};

export default withRouter(connect(mapStateToProps, {})(App));
