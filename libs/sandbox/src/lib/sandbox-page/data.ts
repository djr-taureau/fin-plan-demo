import { breadcrumb } from '@lifeworks/ui-components/breadcrumb';
import { StatusListItems } from '@lifeworks/ui-components/status-list';

export const VALUE_LIST_DATA = [
	{ name: 'Johnathan Avery', value: 1 },
	{ name: 'Dwyane Johnson', value: 31 },
	{ name: 'Rick Flare', value: 750 },
	{ name: 'Terry Hogan', value: 21 },
	{ name: 'Bam Bam Bigelo', value: 2 }
];

export const BREADCRUMB_DATA: breadcrumb[] = [
	{ display: 'Folder: Level 1', location: '/', order: 1 },
	{ display: 'Folder: Level 2', location: '/', order: 2 },
	{ display: 'Folder: Level 3', location: '/', order: 3 },
	{ display: 'Folder: Level 4', location: '/', order: 4 },
	{ display: 'Folder: Current', location: '/', order: 5 }
];

export const STATUS_LIST_DATA: StatusListItems = [
	{
		display: 'Status Item 1',
		location: '/sandbox',
		order: 1,
		status: 'In Progress'
	},
	{
		display: 'Status Item 2',
		location: '/',
		order: 2,
		status: 'Complete'
	},
	{
		display: 'Status Item 3',
		location: '/',
		order: 3,
		status: 'Not Started'
	},
	{
		display: 'Status Item 4',
		location: '/',
		order: 4,
		collapsed: true,
		status: 'Not Started',
		children: [
			{
				display: 'Status Item 4: Child 1',
				location: '/',
				order: 1,
				status: 'Not Started'
			},
			{
				display: 'Status Item 4: Child 2',
				location: '/',
				order: 2,
				status: 'Not Started'
			},
			{
				display: 'Status Item 4: Child 3',
				location: '/',
				order: 3,
				status: 'Not Started'
			}
		]
	},
	{
		display: 'Status Item 5',
		location: '/',
		order: 5,
		collapsed: true,
		status: 'Not Started',
		children: [
			{
				display: 'Status Item 5: Child 1',
				location: '/',
				status: 'Not Started',
				order: 1
			},
			{
				display: 'Status Item 5: Child 2',
				location: '/',
				status: 'Not Started',
				order: 2
			},
			{
				display: 'Status Item 5: Child 3',
				location: '/',
				order: 3,
				collapsed: false,
				status: 'Not Started',
				children: [
					{
						display: 'Status Item 5: Child 3: Child 1',
						location: '/',
						order: 1,
						status: 'Not Started'
					},
					{
						display: 'Status Item 5: Child 3: Child 2',
						location: '/',
						order: 2,
						status: 'Not Started'
					},
					{
						display: 'Status Item 5: Child 3: Child 3',
						location: '/',
						order: 3,
						status: 'Not Started'
					}
				]
			}
		]
	}
];
