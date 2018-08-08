import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataListHeaderComponent } from './data-list-header.component';
import { RouterModule } from '@angular/router';

describe('DataListHeaderComponent', () => {
	let component: DataListHeaderComponent;
	let fixture: ComponentFixture<DataListHeaderComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				imports: [RouterModule],
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
