import { Component, OnInit } from '@angular/core';
import { WealthPlanModule } from '../../models';
import { Observable, of as observableOf } from 'rxjs';

const WEALTH_PLANS = [
	{ guid: '', type: '', display:'Wealth Plan 1', name: 'Wealth Plan 1', createdOn: new Date() },
	{ guid: '', type: '', display:'Wealth Plan 2', name: 'Wealth Plan 2', createdOn: new Date() },
	{ guid: '', type: '', display:'Wealth Plan 3', name: 'Wealth Plan 3', createdOn: new Date() },
	{ guid: '', type: '', display:'Wealth Plan 4', name: 'Wealth Plan ', createdOn: new Date() },
]

@Component({
  selector: 'lw-wealth-plan-list-page',
  templateUrl: './wealth-plan-list-page.component.html',
  styleUrls: ['./wealth-plan-list-page.component.scss']
})
export class WealthPlanListPageComponent implements OnInit {
  data$: Observable<WealthPlanModule[]>;

  constructor() { }

  ngOnInit() {
    this.data$ = observableOf(WEALTH_PLANS);
  }

}
