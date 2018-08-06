import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthCardComponent } from './auth-card.component';
import { AUTH_PROVIDER, AuthProvider } from '../auth-provider';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

describe('AuthCardComponent', () => {
	let component: AuthCardComponent;
	let fixture: ComponentFixture<AuthCardComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				imports: [StoreModule.forRoot({}), EffectsModule.forRoot([])],
				providers: [{ provide: AUTH_PROVIDER, useClass: AuthProvider }],
				declarations: [AuthCardComponent]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(AuthCardComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
