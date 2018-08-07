import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellComponent } from './shell.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

describe('ShellComponent', () => {
	let component: ShellComponent;
	let fixture: ComponentFixture<ShellComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				imports: [StoreModule.forRoot({}), EffectsModule.forRoot([])],
				declarations: [ShellComponent]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(ShellComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
