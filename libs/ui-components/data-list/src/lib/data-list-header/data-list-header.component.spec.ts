import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataListHeaderComponent } from './data-list-header.component';

describe('DataListHeaderComponent', () => {
	let component: DataListHeaderComponent;
	let fixture: ComponentFixture<DataListHeaderComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [DataListHeaderComponent]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(DataListHeaderComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
