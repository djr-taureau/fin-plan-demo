import { Component } from '@angular/core';
import { Tools } from '../../services';
import { Observable } from 'rxjs';
import { Tool } from '../../models';

@Component({
	selector: 'lw-client-tools-page',
	templateUrl: './client-tools-page.component.html',
	styleUrls: ['./client-tools-page.component.scss']
})
export class ClientToolsPageComponent{
	tools$: Observable<Tool[]>;

	constructor(toolsService: Tools) {
		toolsService.load();
		this.tools$ = toolsService.getAll()
	}
}
