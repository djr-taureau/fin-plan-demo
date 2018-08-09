import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DataListImgComponent } from './data-list-img.component';
describe('DataListImgComponent', () => {
	let component: DataListImgComponent;
	let fixture: ComponentFixture<DataListImgComponent>;
	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [DataListImgComponent]
			}).compileComponents();
		})
	);
	beforeEach(() => {
		fixture = TestBed.createComponent(DataListImgComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
