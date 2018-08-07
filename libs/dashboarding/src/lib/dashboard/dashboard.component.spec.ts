import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { DashboardClientComponent } from '../dashboard-client/dashboard-client.component';
import { DashboardAdvisorComponent } from '../dashboard-advisor/dashboard-advisor.component';
import { DashboardManagerComponent } from '../dashboard-manager/dashboard-manager.component';
import { DashboardComplianceComponent } from '../dashboard-compliance/dashboard-compliance.component';
import { StoreModule } from '@ngrx/store';
import { AuthenticationModule, UserService } from '@lifeworks/authentication';
import { EffectsModule } from '@ngrx/effects';
import { of } from 'rxjs';
import { hot } from '@nrwl/nx/testing';
import { DataPersistence } from '@nrwl/nx';

describe('DashboardComponent', () => {
	let component: DashboardComponent;
	let fixture: ComponentFixture<DashboardComponent>;
	const UserServiceMock = jasmine.createSpyObj<UserService>('userService', [
		'getUser'
	]);
	const MockUser = {
		id: 'id',
		displayName: 'name',
		roles: ['role1'],
		permissions: []
	};

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				imports: [
					AuthenticationModule,
					StoreModule.forRoot({}),
					EffectsModule.forRoot([])
				],
				declarations: [
					DashboardComponent,
					DashboardClientComponent,
					DashboardAdvisorComponent,
					DashboardManagerComponent,
					DashboardComplianceComponent
				],
				providers: [
					DataPersistence,
					{ provide: UserService, useValue: UserServiceMock }
				]
			}).compileComponents();

			UserServiceMock.getUser.and.returnValue(of(MockUser));
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(DashboardComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
