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
				display: 'Permissions',
				location: '/permissions',
				order: 2
			},
			{
				display: 'Users',
				location: '/users',
				order: 3
			},
			{
				display: 'Accounts',
				location: '/accounts',
				order: 4
			}
		]
	},
	{
		display: 'My Account',
		order: 2,
		children: [{ display: 'Logout', action: 'logout', order: 1 }]
	}
];

export const ACCOUNTS_NAVIGATION: NavigationItems = [
	{
		display: 'Home',
		icon: 'dashboard',
		location: ['/accounts'],
		order: 1
	},
	{
		display: 'Users',
		location: ['users'],
		order: 2
	},
	{
		display: 'Firms',
		location: ['firms'],
		order: 3
	},
	{
		display: 'Billing',
		location: ['billing'],
		order: 3
	}
];
