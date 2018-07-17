import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NotificationsComponent } from './notifications/notifications.component';
import { NotificationsPageComponent } from './notifications-page/notifications-page.component';
import { NotificationsItemComponent } from './notifications-item/notifications-item.component';
import { CoreModule } from '@lifeworks/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { notificationsReducer, initialState as notificationsInitialState } from './+state/notifications.reducer';
import { NotificationsEffects } from './+state/notifications.effects';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    CoreModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: NotificationsPageComponent }
    ]),
    StoreModule.forFeature('notifications', notificationsReducer, { initialState: notificationsInitialState }),
    EffectsModule.forFeature([NotificationsEffects])
  ],
  declarations: [
    NotificationsComponent,
    NotificationsPageComponent,
    NotificationsItemComponent,
  ],
  providers: [NotificationsEffects]
})
export class NotificationsModule {}
