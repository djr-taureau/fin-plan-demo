import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationIconComponent } from './navigation-icon.component';

describe('NavigationIconComponent', () => {
	let component: NavigationIconComponent;
	let fixture: ComponentFixture<NavigationIconComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [NavigationIconComponent]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(NavigationIconComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
