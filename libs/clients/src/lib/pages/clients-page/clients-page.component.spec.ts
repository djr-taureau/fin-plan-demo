import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsPageComponent } from './clients-page.component';
import { ClientsTableComponent } from '../../components';

describe('ClientsPageComponent', () => {
	let component: ClientsPageComponent;
	let fixture: ComponentFixture<ClientsPageComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [ClientsPageComponent, ClientsTableComponent]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(ClientsPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
