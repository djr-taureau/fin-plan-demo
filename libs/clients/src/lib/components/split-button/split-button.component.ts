//tslint:disable:use-host-property-decorator
import { Component, Input, Output, EventEmitter } from '@angular/core';

interface Action {
    type: string;
}
type DispatchableAction = string | Action;

export interface SplitButtonAction {
	display: string;
	value: DispatchableAction;
}

@Component({
	selector: 'lw-split-button',
	templateUrl: './split-button.component.html',
	styleUrls: ['./split-button.component.scss'],
	host: { class: 'lw-balance-sheet' }
})
export class SplitButtonComponent {
	@Input() actions: Array<SplitButtonAction>[] = [];
	@Output() action = new EventEmitter<DispatchableAction>()

	dispatch(action: DispatchableAction) {
		this.action.emit(action);
	}
}
