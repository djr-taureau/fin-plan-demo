import { Obj, DomainEntity, DomainSubject } from '@lifeworks/common';

export type TaskItems = Array<TaskItem>;

export interface TaskItem extends DomainEntity, IRemoveable {
  task: string;
	dismissed: boolean;
	taskType: string;
	target: DomainSubject;
	source?: DomainSubject;
	subject?: DomainSubject;
}

export interface IRemoveable {
	_ui_isRemoving?: boolean;
}
