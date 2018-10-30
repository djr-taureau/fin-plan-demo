import { LoadDataStatus } from '@lifeworks/common';
import { ToolsData } from './tools.interfaces';

export const toolsInitialState: ToolsData = {
	status: LoadDataStatus.initial,
	entities: {}
};
