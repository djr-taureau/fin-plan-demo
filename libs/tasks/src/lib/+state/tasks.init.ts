import { LoadDataStatus } from '@lifeworks/common';
import { TasksData } from './tasks.interfaces';

export const tasksInitialState: TasksData = {
	status: LoadDataStatus.initial,
	entities: {}
};
