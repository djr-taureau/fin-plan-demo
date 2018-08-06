import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {
	NavigationComponent,
	NavigationTitleDirective,
	NavigationGroupDirective
} from './navigation.component';

describe('NavigationComponent', () => {
	let component: NavigationComponent;
	let fixture: ComponentFixture<NavigationComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [
					NavigationComponent,
					NavigationTitleDirective,
					NavigationGroupDirective
				]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(NavigationComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
