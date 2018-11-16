import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { VALUE_LIST_DATA, BREADCRUMB_DATA, STATUS_LIST_DATA } from './data';
import { map, sort, concat } from 'ramda';

export const LIST_VALUE_DATA = VALUE_LIST_DATA;

@Component({
	selector: 'lw-sandbox-page',
	templateUrl: './sandbox-page.component.html',
	styleUrls: ['./sandbox-page.component.scss']
})
export class SandboxPageComponent implements OnInit {
	valueListData = LIST_VALUE_DATA;
	breadcrumbData = BREADCRUMB_DATA;
	statusListData = STATUS_LIST_DATA;

	chartStartDate = new Date(1999, 5);

	chartEndDate = new Date(2076, 10);

	markers = [];

	markersToRender = [];

	markerBuffer = [];

	addGoal(event) {
		console.log(event);

		const newMarker = [
			{
				id: this.getNextIncrement(),
				selected: false,
				...event
			}
		];

		this.markerBuffer = concat(this.markerBuffer, newMarker);

		this.generateMarkersToRender();
	}

	removeGoal(event) {}

	clickGoal(goalId) {
		const setSelected = x => {
			if (x.id === goalId) {
				x.selected = true;
			} else {
				x.selected = false;
			}
			return x;
		};

		this.markers = map(setSelected, this.markers);
		this.markerBuffer = map(setSelected, this.markerBuffer);

		this.generateMarkersToRender();
	}

	hover(event) {}

	ngOnInit() {
		this.generateMarkersToRender();
	}

	getAllMarkersSortedById() {
		const idSorter = (a, b) => {
			return a.id > b.id ? 1 : -1;
		};
		return sort(idSorter, concat(this.markers, this.markerBuffer));
	}

	getNextIncrement() {
		const markersSortedById = this.getAllMarkersSortedById();
		if (markersSortedById.length > 0) {
			return markersSortedById[markersSortedById.length - 1].id + 1;
		} else {
			return 0;
		}
	}

	generateMarkersToRender() {
		this.markersToRender = concat(this.markers, this.markerBuffer);
	}
}
