import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AUTH_PROVIDER, AuthProvider } from '@lifeworks/authentication';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

describe('AppComponent', () => {
	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				imports: [
					RouterTestingModule,
					StoreModule.forRoot({}),
					EffectsModule.forRoot([])
				],
				providers: [{ provide: AUTH_PROVIDER, useClass: AuthProvider }],
				declarations: [AppComponent]
			}).compileComponents();
		})
	);

	it(
		'should create the app',
		async(() => {
			const fixture = TestBed.createComponent(AppComponent);
			const app = fixture.debugElement.componentInstance;
			expect(app).toBeTruthy();
		})
	);

	it(
		`should have as title 'lw'`,
		async(() => {
			const fixture = TestBed.createComponent(AppComponent);
			const app = fixture.debugElement.componentInstance;
			expect(app.title).toEqual('lw');
		})
	);
});
