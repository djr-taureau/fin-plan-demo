import {
	setLoadingState,
	setDataState,
} from '@lifeworks/common';
import {
	ToolsActions,
	ToolsActionTypes
} from './tools.actions';
import { toolsInitialState } from './tools.init';
import { ToolsData } from './tools.interfaces';


export function toolsReducer(
	state = toolsInitialState,
	action: ToolsActions
): ToolsData {
	switch (action.type) {
		case ToolsActionTypes.Load:
			return setLoadingState(state);

		case ToolsActionTypes.LoadSuccess:
			return setDataState(action.payload, state);
			
		default:
			return state;
	}
}
