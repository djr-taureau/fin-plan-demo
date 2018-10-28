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
				display: 'Clients',
				icon: 'clients',
				location: '/clients',
				order: 2
			},
			{
				display: 'Content',
				icon: 'content',
				location: '/content',
				order: 3
			},
			{
				display: 'Reports',
				icon: 'reports',
				location: '/reports',
				order: 4
			}
		]
	},
	{
		display: 'My Account',
		order: 2,
		children: [
			{ display: 'Profile', location: '/profile', order: 1 },
			{ display: 'Settings', location: '/settings', order: 2 },
			{ display: 'Logout', action: 'logout', order: 3, cssClass: 'callout' }
		]
	}
];
