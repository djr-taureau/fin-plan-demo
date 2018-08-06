import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataListContentComponent } from './data-list-content.component';

describe('DataListContentComponent', () => {
	let component: DataListContentComponent;
	let fixture: ComponentFixture<DataListContentComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [DataListContentComponent]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(DataListContentComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
