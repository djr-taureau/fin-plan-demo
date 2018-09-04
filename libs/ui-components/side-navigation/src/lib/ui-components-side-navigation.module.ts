import { NgModule } from '@angular/core';
import { SideNavigationCoreModule } from './+modules';

import {
	SideNavComponent,
	NavigationGroupDirective,
	NavigationTitleDirective,
	NavigationLogoComponent,
	NavigationSearchComponent,
	NavigationIconComponent,
	NavigationItemComponent
} from './components';

@NgModule({
	imports: [SideNavigationCoreModule],
	declarations: [
		SideNavComponent,
		NavigationLogoComponent,
		NavigationSearchComponent,
		NavigationIconComponent,
		NavigationGroupDirective,
		NavigationTitleDirective,
		NavigationItemComponent
	],
	exports: [
		SideNavComponent,
		NavigationLogoComponent,
		NavigationSearchComponent,
		NavigationIconComponent,
		NavigationGroupDirective,
		NavigationTitleDirective,
		NavigationItemComponent
	]
})
export class UiComponentsSideNavigationModule {}
