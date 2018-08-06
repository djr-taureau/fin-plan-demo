import {
	Component,
	OnInit,
	Input,
	OnChanges,
	HostBinding
} from '@angular/core';

@Component({
	selector: 'lw-data-list-img',
	templateUrl: './data-list-img.component.html',
	styleUrls: ['./data-list-img.component.scss']
	// // tslint:disable-next-line:use-host-property-decorator
	// host: {
	// 	'[class]': 'classNames'
	// }
})
export class DataListImgComponent implements OnInit, OnChanges {
	@Input() type: string;

	@HostBinding('class') classes = '';

	constructor() {}

	buildClassNames = type => `lw-data-list-img-${type}`;

	ngOnInit() {
		this.classes = this.buildClassNames(this.type);
	}

	ngOnChanges() {}
}
