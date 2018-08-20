import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
	selector: 'lw-temp-svg-icon',
	templateUrl: './temp-svg-icon.component.html',
	styleUrls: ['./temp-svg-icon.component.scss']
})
export class TempSvgIconComponent implements OnInit {
	@Input() type: string;

	@HostBinding('class') classes = '';

	buildClassNames = type => `lw-data-list-img-${type}`;

	ngOnInit() {
		this.classes = this.buildClassNames(this.type);
	}
}
