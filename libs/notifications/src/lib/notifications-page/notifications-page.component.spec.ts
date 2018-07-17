import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsPageComponent } from './notifications-page.component';
import { NotificationsItemComponent } from '../notifications-item/notifications-item.component';
import { NotificationsComponent } from '../notifications/notifications.component';

describe('NotificationsPageComponent', () => {
  let component: NotificationsPageComponent;
  let fixture: ComponentFixture<NotificationsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationsPageComponent, NotificationsComponent, NotificationsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
