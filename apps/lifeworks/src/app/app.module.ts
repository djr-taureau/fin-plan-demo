import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {
  StoreRouterConnectingModule,
  routerReducer,
  RouterStateSerializer
} from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';
import {
  FixedRouterSerializer,
  ConfigService,
  appInitializer,
  CONFIG_URL
} from '@lifeworks/core';
import { AuthenticationModule, AUTH_PROVIDER } from '@lifeworks/authentication';
import { ApplicationRoutes, AuthConfig } from './configs';

// tslint:disable-next-line
import { AzureAdAuthProviderModule } from '@lifeworks/authentication/providers/azure-ad-auth-provider';

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    HttpClientModule,
    AzureAdAuthProviderModule,
    AuthenticationModule.forRoot(AuthConfig),
    NxModule.forRoot(),
    RouterModule.forRoot(ApplicationRoutes, { initialNavigation: 'enabled' }),
    StoreModule.forRoot(
      { route: routerReducer },
      {
        initialState: {},
        metaReducers: !environment.production ? [storeFreeze] : []
      }
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' })
  ],
  providers: [
    ConfigService,
    {
      useFactory: appInitializer,
      provide: APP_INITIALIZER,
      multi: true,
      deps: [ConfigService]
    },
    { provide: RouterStateSerializer, useClass: FixedRouterSerializer },
    { provide: CONFIG_URL, useValue: environment.configUrl }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }