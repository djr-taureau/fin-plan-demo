import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionsPageComponent } from './permissions-page.component';
import { PermissionsTableComponent } from '../../components';
import { PermissionsScopePipe } from '../../pipes';

describe('PermissionsPageComponent', () => {
	let component: PermissionsPageComponent;
	let fixture: ComponentFixture<PermissionsPageComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [
					PermissionsPageComponent,
					PermissionsTableComponent,
					PermissionsScopePipe
				]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(PermissionsPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
