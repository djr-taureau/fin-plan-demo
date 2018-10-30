import { EntityState } from '@lifeworks/common';
import { Tool } from '../../models';

/**
 * Interface for the 'Tool' data used in
 *  - ToolState, and
 *  - toolReducer
 */
export interface ToolsData extends EntityState<Tool> {
}

/**
 * Interface to the part of the Store containing ToolsState
 * and other information related to ToolsData.
 */
export interface ToolsState {
	readonly tools: ToolsData;
}
