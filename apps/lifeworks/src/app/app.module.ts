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
  appInitializer
} from '@lifeworks/core';

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    HttpClientModule,
    NxModule.forRoot(),
    RouterModule.forRoot(
      [
        {
          path: 'activity-log',
          loadChildren: '@lifeworks/activity-log#ActivityLogModule'
        },
        {
          path: 'notifications',
          loadChildren: '@lifeworks/notifications#NotificationsModule'
        }
      ],
      { initialNavigation: 'enabled' }
    ),
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
    { provide: RouterStateSerializer, useClass: FixedRouterSerializer }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }