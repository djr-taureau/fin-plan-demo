import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryListLocationComponent } from './summary-list-location.component';

describe('SummaryListLocationComponent', () => {
	let component: SummaryListLocationComponent;
	let fixture: ComponentFixture<SummaryListLocationComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [SummaryListLocationComponent]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(SummaryListLocationComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
