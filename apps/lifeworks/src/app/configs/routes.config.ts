import { ShellComponent } from '@lifeworks/core';

export const ApplicationRoutes = [
	{
		path: '',
		component: ShellComponent,
		children: [
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
		]
	}
];
