export const ApplicationRoutes = [
	{
		path: '',
		loadChildren: '@lifeworks/dashboarding#DashboardingModule'
	},
	{
		path: 'activity-log',
		loadChildren: '@lifeworks/activity-log#ActivityLogModule'
	},
	{
		path: 'notifications',
		loadChildren: '@lifeworks/notifications#NotificationsModule'
	}
];
