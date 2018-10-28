import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AgendasListPageComponent } from '../pages/agendas-list-page/agendas-list-page.component';
import { WealthPlanListPageComponent } from '../pages/wealth-plan-list-page/wealth-plan-list-page.component';
import { ContentNavigationComponent } from '../components/content-navigation/content-navigation.component';
import { PageComponent } from '@lifeworks/ui-components/layouts';

@NgModule({
	imports: [
		RouterModule.forChild([
			{
				path: 'content',
				component: PageComponent,
				data: {
					title: 'Content'
				},
				children: [
					{
						path: '',
						component: ContentNavigationComponent,
						outlet: 'page-header',
						data: {
							pageNavigation: [
								{
									display: 'Agendas',
									count: 16,
									order: 1,
									location: ['/content/agendas']
								},
								{
									display: 'Tasks',
									count: 32,
									order: 2,
									location: ['/content/tasks']
								},
								{
									display: 'Wealth Plan Modules',
									count: 53,
									order: 3,
									location: ['/content/wealth-plans']
								}
							]
						}
					},
					{
						path: '',
						pathMatch: 'full',
						redirectTo: 'agendas'
					},
					{
						path: 'wealth-plans',
						component: WealthPlanListPageComponent
					},
					{
						path: 'agendas',
						component: AgendasListPageComponent
					}
				]
			}
		])
	],
	exports: [RouterModule]
})
export class ContentRoutingModule {}
