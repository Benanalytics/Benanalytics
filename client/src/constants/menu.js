import { adminRoot } from './defaultValues';

const data = [
  {
    id: 'kpi-dashboard',
    icon: 'iconsminds-bucket',
    label: 'KPI  ',
    to: `${adminRoot}/dashboards`,
    // roles: [UserRole.Admin, UserRole.Editor],
    subs: [
      {
        icon: 'simple-icon-briefcase',
        label: 'Portfolio Management',
        to: `${adminRoot}/kpi/portfolio-management`,
        // roles: [UserRole.Admin],
      },

      {
        icon: 'simple-icon-briefcase',
        label: 'Business-Development',
        to: `${adminRoot}/kpi/business-development`,
        // roles: [UserRole.Admin],
      },
      {
        icon: 'simple-icon-pie-chart',
        label: 'Performance Grid',
        to: `${adminRoot}/kpi/performance-grid`,
      },
      {
        icon: 'simple-icon-pie-chart',
        label: 'Readiness',
        to: `${adminRoot}/kpi/readiness`,
        // roles: [UserRole.Admin],
      },
    ],
  },

  {
    id: 'activity-dashboard',
    icon: 'iconsminds-shop-4',
    label: 'Activity  ',
    to: `${adminRoot}/activity`,
    subs: [
      {
        icon: 'simple-icon-credit-card',
        label: 'Task Metric ',
        to: `${adminRoot}/activity/task-metric`,
      },
      {
        icon: 'simple-icon-picture',
        label: 'Activity List',
        to: `${adminRoot}/activity/process-list`,
      },
    ],
  },
  {
    id: 'mission-program',
    icon: 'iconsminds-shop-4',
    label: 'Work Program  ',
    to: `${adminRoot}/workprogram`,
    // roles: [UserRole.Admin, UserRole.Editor],
    subs: [
      {
        icon: 'simple-icon-briefcase',
        label: 'Mission Metrics',
        to: `${adminRoot}/workprogram/mission-metrics`,
        // roles: [UserRole.Admin],
      },
      {
        icon: 'simple-icon-briefcase',
        label: 'Mission Plan',
        to: `${adminRoot}/workprogram/mission-plan`,
        // roles: [UserRole.Admin],
      },
      {
        icon: 'simple-icon-briefcase',
        label: ' Icons ',
        to: `${adminRoot}/workprogram/ui`,
        // roles: [UserRole.Admin],
      },
    ],
  },
  {
    icon: 'simple-icon-briefcase',
    id: 'Portfolio  Key',
    label: 'Portfolio  Key',
    to: `${adminRoot}/portfolio-key`,
    // roles: [UserRole.Admin],
  }, 
  {
    icon: 'simple-icon-briefcase',
    label: ' GEO Analytics',
    id: ' GEO Analytics',
    to: `${adminRoot}/mission-geo-analytics`,
    // roles: [UserRole.Admin],
  },
];
export default data;
