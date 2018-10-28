import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
	ContentCoreModule,
	ContentRoutingModule,
	ContentStateModule,
	ContentUiModule
} from './+modules';
import { AgendasListPageComponent } from './pages/agendas-list-page/agendas-list-page.component';
import { WealthPlanListPageComponent } from './pages/wealth-plan-list-page/wealth-plan-list-page.component';
import { ContentNavigationComponent } from './components/content-navigation/content-navigation.component';
import { AgendasTableComponent } from './components/agendas-table/agendas-table.component';
@NgModule({
	imports: [
		CommonModule,
		ContentCoreModule,
		ContentRoutingModule,
		ContentStateModule,
		ContentUiModule
	],
	declarations: [AgendasListPageComponent, WealthPlanListPageComponent, ContentNavigationComponent, AgendasTableComponent]
})
export class ContentModule {}
