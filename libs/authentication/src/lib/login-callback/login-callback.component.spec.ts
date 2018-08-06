import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { LoginCallbackComponent } from './login-callback.component';

describe('LoginCallbackComponent', () => {
	let component: LoginCallbackComponent;
	let fixture: ComponentFixture<LoginCallbackComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				imports: [RouterTestingModule],
				declarations: [LoginCallbackComponent]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(LoginCallbackComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
