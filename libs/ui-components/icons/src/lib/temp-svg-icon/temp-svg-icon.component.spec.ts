import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempSvgIconComponent } from './temp-svg-icon.component';

describe('TempSvgIconComponent', () => {
	let component: TempSvgIconComponent;
	let fixture: ComponentFixture<TempSvgIconComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [TempSvgIconComponent]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(TempSvgIconComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
