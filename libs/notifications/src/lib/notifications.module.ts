import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NotificationsComponent } from './notifications/notifications.component';
import { NotificationsPageComponent } from './notifications-page/notifications-page.component';
import { NotificationsItemComponent } from './notifications-item/notifications-item.component';
import { NiceDatePipe } from '@lifeworks/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { notificationsReducer, initialState as notificationsInitialState } from './+state/notifications.reducer';
import { NotificationsEffects } from './+state/notifications.effects';

@NgModule({
  imports: [
    CommonModule,

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
    NiceDatePipe
  ],
  providers: [NotificationsEffects]
})
export class NotificationsModule {}
