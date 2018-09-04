import { NavigationItems } from '@lifeworks/common';

export const NAVIGATION: NavigationItems = [
	{
		order: 1,
		children: [
			{
				display: 'Dashboard',
				icon: 'dashboard',
				location: '/',
				order: 1
			},
			{
				display: 'Activity',
				icon: 'activity',
				location: '/activity-log',
				order: 2
			}
		]
	},
	{
		display: 'My Account',
		order: 2,
		children: [{ display: 'Logout', action: 'logout', order: 1 }]
	}
];
