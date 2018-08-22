//tslint:disable:no-input-rename
import {
	Directive,
	Input,
	ElementRef,
	AfterViewInit,
	Renderer2
} from '@angular/core';

export type CaretPosition = 'start' | 'end';
export type CaretDirection = 'up' | 'down' | 'left' | 'right';
export type CaretColor = 'white' | 'orange' | 'green' | 'blue';

@Directive({
	selector: '[lwInlineCaret]'
})
export class InlineCaretDirective implements AfterViewInit {
	@Input('lwInlineFontIcon') icon = '';
	@Input() caretPosition: CaretPosition = 'end';
	@Input() caretDirection: CaretDirection = 'right';
	@Input() caretColor: CaretColor = 'orange';

	constructor(
		private _elementRef: ElementRef,
		private _renderer: Renderer2
	) {}

	createCaret(direction: CaretDirection, color: CaretColor) {
		const spanEle: HTMLElement = this._renderer.createElement('span');
		const icon = this._renderer.setValue(spanEle, '&gt;');
		this._renderer.addClass(spanEle, 'inline-caret');
		this._renderer.addClass(spanEle, `caret-color-${color}`);
		spanEle.innerHTML = this.getCaretHtml(direction);

		return spanEle;
	}

	getCaretHtml(direction: CaretDirection) {
		switch (direction) {
			case 'up':
				return 'arrow_drop_up';
			case 'down':
				return 'arrow_drop_down';
			case 'left':
				return 'arrow_left';
			case 'right':
				return 'arrow_right';
		}
	}

	getHostElement(): HTMLElement {
		return this._elementRef.nativeElement;
	}

	insertCaret(
		direction: CaretDirection,
		position: CaretPosition,
		color: CaretColor
	) {
		const caret = this.createCaret(direction, color);
		if (position === 'start') {
			this._renderer.insertBefore(
				this.getHostElement(),
				caret,
				this.getHostElement().firstChild
			);
		} else {
			this._renderer.appendChild(this.getHostElement(), caret);
		}
	}

	ngAfterViewInit() {
		this.insertCaret(
			this.caretDirection,
			this.caretPosition,
			this.caretColor
		);
	}
}
