import { Obj, DomainEntity, DomainSubject } from '@lifeworks/common';

// export type NoteItems = Array<NoteItem>;

export interface NoteItem extends DomainEntity, IRemoveable {
  guid: string;
  name: string;
  note: string;
  relatedEntityGuid?: string;
  entityContext?: number;
  owner: DomainSubject;
  reminderDate?: Date;
  reminderTime?: string;
  createdBy: string;
  modifiedBy?: string;
}

export interface IRemoveable {
	_ui_isRemoving?: boolean;
}
