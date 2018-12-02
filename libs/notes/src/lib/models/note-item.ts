import { Obj, DomainEntity, DomainSubject } from '@lifeworks/common';

export type NoteItems = Array<NoteItem>;

export interface NoteItem extends DomainEntity, IRemoveable {
	note: string;
	dismissed: boolean;
	noteType: string;
	target: DomainSubject;
	source?: DomainSubject;
	subject?: DomainSubject;
}

export interface IRemoveable {
	_ui_isRemoving?: boolean;
}
