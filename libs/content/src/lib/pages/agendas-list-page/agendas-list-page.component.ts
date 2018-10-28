import { Component, OnInit } from '@angular/core';
import { Agenda } from '../../models';
import { Observable, of as observableOf } from 'rxjs';

const AGENDAS = [
	{ guid: '', type: '', display:'Agenda 1', name: 'Agenda 1', createdOn: new Date() },
	{ guid: '', type: '', display:'Agenda 2', name: 'Agenda 2', createdOn: new Date() },
	{ guid: '', type: '', display:'Agenda 3', name: 'Agenda 3', createdOn: new Date() },
	{ guid: '', type: '', display:'Agenda 4', name: 'Agenda ', createdOn: new Date() },
]

@Component({
  selector: 'lw-agendas-list-page',
  templateUrl: './agendas-list-page.component.html',
  styleUrls: ['./agendas-list-page.component.scss']
})
export class AgendasListPageComponent implements OnInit {
	data$: Observable<Agenda[]>;
  constructor() { }

  ngOnInit() {
    this.data$ = observableOf(AGENDAS)
  }

  

}
