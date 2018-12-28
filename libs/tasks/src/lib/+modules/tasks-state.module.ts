import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { tasksReducer } from '../+state/tasks.reducer';
import { TasksEffects } from '../+state/tasks.effects';
import { tasksInitialState } from '../+state/tasks.init';

@NgModule({
	imports: [
		StoreModule.forFeature('Tasks', tasksReducer, {
			initialState: tasksInitialState
		}),
		EffectsModule.forFeature([TasksEffects])
	],
	declarations: [],
	providers: [TasksEffects]
})
export class TasksStateModule {}
