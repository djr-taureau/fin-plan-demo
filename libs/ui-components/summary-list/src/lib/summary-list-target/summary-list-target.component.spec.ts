import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryListTargetComponent } from './summary-list-target.component';

describe('SummaryListTargetComponent', () => {
	let component: SummaryListTargetComponent;
	let fixture: ComponentFixture<SummaryListTargetComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [SummaryListTargetComponent]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(SummaryListTargetComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
