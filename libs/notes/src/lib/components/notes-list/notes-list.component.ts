//tslint:disable: use-input-property-decorator use-output-property-decorator
import {
	Component,
	EventEmitter,
	ChangeDetectionStrategy
} from '@angular/core';
import {
	mixinDataSource,
	Datasource,
	ComponentBase
} from '@lifeworks/ui-components';
import { NoteItem } from '../../models';

export const _NotesListBase = mixinDataSource<
	typeof ComponentBase,
	NoteItem
>(ComponentBase);

@Component({
	selector: 'lw-notes-list',
	templateUrl: './notes-list.component.html',
	inputs: ['items'],
	outputs: ['event'],
	styleUrls: ['./notes-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotesListComponent extends _NotesListBase
	implements Datasource<NoteItem> {
	constructor() {
		super();
	}
}
