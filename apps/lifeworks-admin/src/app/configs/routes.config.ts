import { Route } from '@angular/router';
import { AuthenticatedGuard } from '@lifeworks/authentication';

import {
	UsersPageComponent,
	AccountsPageComponent,
	AccountsUsersPageComponent,
	AccountsBillingPageComponent,
	AccountsFirmPageComponent,
	AccountsHeaderComponent,
	AccountsMenuComponent
} from '../pages';
import { PageViewComponent } from '@lifeworks/ui-components/page-layouts';
import { ACCOUNTS_NAVIGATION } from './navigation.config';

export const ApplicationRoutes: Route[] = [
	{
		path: '',
		data: { title: 'Lifeworks Admin' },

		canActivate: [AuthenticatedGuard],
		children: [
			{
				path: '',
				loadChildren: '@lifeworks/admin-features/dashboard#AdminFeaturesDashboardModule'
			},
			{
				path: '',
				loadChildren: '@lifeworks/permissions#PermissionsModule'
			},
			{
				path: 'users',
				pathMatch: 'full',
				component: UsersPageComponent,
				data: { title: 'Users' }
			},
			{
				path: 'accounts',
				component: PageViewComponent,
				data: {
					title: 'Accounts',
					pageNavigation: ACCOUNTS_NAVIGATION
				},
				children: [
					{
						path: '',
						component: AccountsHeaderComponent,
						outlet: 'page-header'
					},
					{
						path: '',
						component: AccountsMenuComponent,
						outlet: 'page-menu'
					},
					{
						path: '',
						pathMatch: 'full',
						component: AccountsPageComponent,
						data: { title: 'Home' }
					},
					{
						path: 'users',
						component: AccountsUsersPageComponent,
						data: { title: 'Users' }
					},
					{
						path: 'firms',
						component: AccountsFirmPageComponent,
						data: { title: 'Firms' }
					},
					{
						path: 'billing',
						component: AccountsBillingPageComponent,
						data: { title: 'Billing' }
					}
				]
			}
		]
	}
];
