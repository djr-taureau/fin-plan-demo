import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
	NavigationComponent,
	NavigationGroupDirective,
	NavigationTitleDirective
} from './navigation/navigation.component';
import { NavigationLogoComponent } from './navigation-logo/navigation-logo.component';
import { NavigationSearchComponent } from './navigation-search/navigation-search.component';
import { NavigationIconComponent } from './navigation-icon/navigation-icon.component';
import { NavigationItemComponent } from './navigation-item/navigation-item.component';
import { RouterModule } from '@angular/router';
@NgModule({
	imports: [CommonModule, RouterModule],
	declarations: [
		NavigationComponent,
		NavigationLogoComponent,
		NavigationSearchComponent,
		NavigationIconComponent,
		NavigationGroupDirective,
		NavigationTitleDirective,
		NavigationItemComponent
	],
	exports: [
		NavigationComponent,
		NavigationLogoComponent,
		NavigationSearchComponent,
		NavigationIconComponent,
		NavigationGroupDirective,
		NavigationTitleDirective,
		NavigationItemComponent
	]
})
export class UiComponentsNavigationModule {}
