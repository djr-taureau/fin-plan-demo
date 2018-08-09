import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NotificationsWidgetComponent } from './notifications-widget.component';
import { NotificationsService } from '../notifications.service';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('NotificationsWidgetComponent', () => {
	let component: NotificationsWidgetComponent;
	let fixture: ComponentFixture<NotificationsWidgetComponent>;
	const notificationsSpyOj = jasmine.createSpyObj<NotificationsService>(
		'NotificationsService',
		['get', 'isDataLoaded', 'count', 'dismiss']
	);
	notificationsSpyOj.count.and.returnValue(of(10));
	notificationsSpyOj.dismiss.and.returnValue(of(undefined));
	notificationsSpyOj.isDataLoaded.and.returnValue(of(true));
	notificationsSpyOj.get.and.returnValue(of([{
		"GUID": "1",
		"occurrence": "2017-11-05T13:15:30Z",
		"message": "__t.fullName flagged a __e.displayName for __s.fullName review",
		"status": "unread",
		"dismissed": false,
		"location": "/",
		"target": {
		  "fullName": "Jane Doe",
		  "GUID": "139"
		},
		"source": {
		  "fullName": "Ronald Johnson",
		  "GUID": "1234"
		},
		"event": {
		  "type": "client-flagged-content",
		  "subject": {
			"displayName": "scenario"
		  }
		}
	  }]));

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				imports: [RouterTestingModule, HttpClientTestingModule],
				declarations: [NotificationsWidgetComponent],
				providers: [
					{ provide: NotificationsService, useValue: notificationsSpyOj }
				]
			}).compileComponents();
			
		})

	);

	beforeEach(() => {

		fixture = TestBed.createComponent(NotificationsWidgetComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	// it('should create', () => {

	// 	expect(component).toBeTruthy();
	// });
});
