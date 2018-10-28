import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsListPageComponent } from './clients-list-page.component';
import { ClientsTableComponent } from '../../components';

describe('ClientsPageComponent', () => {
	let component: ClientsListPageComponent;
	let fixture: ComponentFixture<ClientsListPageComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [ClientsListPageComponent, ClientsTableComponent]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(ClientsListPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
