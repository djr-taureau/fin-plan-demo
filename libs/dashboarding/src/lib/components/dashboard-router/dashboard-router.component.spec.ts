import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { hot } from '@nrwl/nx/testing';

import { DashboardRouterComponent } from './dashboard-router.component';
import { UserService } from '@lifeworks/authentication';
import {
	DashboardClientComponent,
	DashboardAdvisorComponent,
	DashboardManagerComponent,
	DashboardComplianceComponent
} from '../../pages';

import { m_User, m_UserService } from '../../testing/mock-services';

describe('DashboardComponent', () => {
	let component: DashboardRouterComponent;
	let fixture: ComponentFixture<DashboardRouterComponent>;
	let UserServiceMock: jasmine.SpyObj<UserService>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [
					DashboardRouterComponent,
					DashboardClientComponent,
					DashboardAdvisorComponent,
					DashboardManagerComponent,
					DashboardComplianceComponent
				]
			}).compileComponents();

			UserServiceMock = TestBed.get(UserService);
			UserServiceMock.getUser.and.returnValue(of(m_User));
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(DashboardRouterComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	// it('should create', () => {
	// 	expect(component).toBeTruthy();
	// });
});
