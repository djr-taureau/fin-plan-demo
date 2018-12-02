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
				path: '',
				loadChildren: '@lifeworks/activity-log#ActivityLogModule'
			},
			{
				path: '',
				loadChildren: '@lifeworks/notifications#NotificationsModule'
			},
			{
				path: '',
				loadChildren: '@lifeworks/clients#ClientsModule'
			},
			{
				path: '',
				loadChildren: '@lifeworks/content#ContentModule'
      },
      {
				path: '',
        loadChildren: '@lifeworks/notes#NotesModule',
			}
		]
	}
];
