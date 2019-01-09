import {
	Component,
	OnInit,
	ViewChild,
	Inject,
  AfterViewInit,
  ElementRef,
  OnDestroy
} from '@angular/core';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { DataState, getDatasetState } from '@lifeworks/common';
import { DatasourceItemEvent } from '@lifeworks/ui-components';
import { EventItem } from '../../models';
import { Events } from '../../services';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { take, takeLast } from 'ramda';
import { QuillDirective, QuillComponent, QuillConfigInterface, QuillModulesInterface } from 'ngx-quill-wrapper';

export interface Client {
	value: string;
	viewValue: string;
}
export interface Assignment {
	value: string;
	viewValue: string;
}
@Component({
	selector: 'lifeworks-todos-form-dialog',
	templateUrl: './todos-form-dialog.component.html',
  styleUrls: ['./todos-form-dialog.component.scss']
})

export class TodosFormDialogComponent implements OnInit, AfterViewInit, OnDestroy {
  eventsData: EventItem;
	todosDialogRef: MatDialogRef<TodosFormDialogComponent>;
	todosDialogConfig: MatDialogConfig<TodosFormDialogComponent>;
	dialogResult: any;
  editor: any;
  todosFormData: any;
  editorInstance;
  editorRef;
  showReminderTime: boolean;
  todosForm: FormGroup;
  startDate = Date.now();
  minDate = new Date(Date.now());

  @ViewChild(ElementRef) undoButton;
  @ViewChild(ElementRef) redoButton;

  @ViewChild(QuillDirective) directiveRef?: QuillDirective;
  @ViewChild(QuillComponent) componentRef?: QuillComponent;

  public config: QuillConfigInterface = {
    theme: 'snow',
    readOnly: false
  };

  public modules: QuillModulesInterface = {};

    private toolbar: any = [
      ['redo', 'undo'],
      [{ 'size': ['small', false, 'large', 'huge'] }],
      ['bold', 'italic', 'underline'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['link']
    ];

	clients: Client[] = [
		{ value: '0', viewValue: 'Client 1' },
		{ value: '1', viewValue: 'Client 2' },
		{ value: '2', viewValue: 'Client 3' }
	];

	assignments: Assignment[] = [
		{ value: '0', viewValue: 'Assign 1' },
		{ value: '1', viewValue: 'Assign 2' },
		{ value: '2', viewValue: 'Assign 3' }
  ];

  hours: any[];

	constructor(
    private elem: ElementRef,
    private EventsService: Events,
		private router: Router,
    private fb: FormBuilder,
		private dialogRef: MatDialogRef<TodosFormDialogComponent>
	) {
      this.config.modules = { toolbar: this.toolbar };
      this.todosForm = this.createFormGroup();
      this.todosForm.get('addReminderTime').valueChanges
        .subscribe(val => this.showReminder(val));
	  }

	ngOnInit() {
    this.showReminderTime = false;
    this.onChanges();
  }

  ngAfterViewInit() {
    this.hours = this.hoursOfDay();
    this.editorInstance = this.componentRef.directiveRef.quill();
    this.editorRef = this.componentRef.directiveRef;
    this.todosForm.valueChanges.subscribe(v => {
      console.log(v);
    })

    const redoButton = this.elem.nativeElement.querySelector('.ql-redo');
    const undoButton = this.elem.nativeElement.querySelector('.ql-undo');
    redoButton.innerHTML = '<i class="material-icons">redo</i>';
    undoButton.innerHTML = '<i class="material-icons">undo</i>';

    fromEvent(redoButton, 'click')
    .subscribe(res => this.redo(res));

    fromEvent(undoButton, 'click')
    .subscribe(res => this.undo(res));

    this.todosForm.get('reminderNotes').valueChanges.subscribe(v => {
    this.todosForm.get('reminderNotes').setValidators(Validators.required);
    this.todosForm.get('reminderNotes').setValidators(Validators.minLength(50));
    this.todosForm.get('reminderNotes').updateValueAndValidity({
        onlySelf: true, emitEvent: true
      })
    })

  }

  ngOnDestroy() {
    // unsub
  }

  get name() {
    return this.todosForm.get('name');
  }

  get note() {
    return this.todosForm.get('reminderNotes');
  }

  showReminder(val){
    this.showReminderTime = !this.showReminderTime;
    if(this.showReminderTime) {
      this.todosForm.get('reminderTime').enable();
    } else {
      this.todosForm.get('reminderTime').disable();
    }
  }

  addReminderDate(event: MatDatepickerInputEvent<Date>) {
    this.todosForm.patchValue({reminderDate: event.value});
  }

  onEditorCreated(event: any): void {
    console.log('Editor create:', event);
    console.log(event.editor);
  }

	redo(event) {
		this.editorRef.instance.history.redo();
  }

	undo(event) {
    event.preventDefault();
    event.stopPropagation();
    this.editorRef.instance.history.undo();
  }

  onChanges(): void {
    //
  }

  clearEditorContent(): void {
    this.editorRef.clear();
  }

  clearEditorHistory(): void {
    this.editorRef.instance.history.clear();
  }

  onEditorBlur(event: any): void {
    console.log('editor blur', event);
  }

  onEditorFocus(event: any): void {
    console.log('Editor focus:', event);
  }

  onEditorCreate(event: any): void {
    console.log('Editor create:', event);
  }

  onValueChange(value: string): void {
    console.log('Value change:', value);
  }

  onContentChange(event: any): void {
    this.todosForm.patchValue({reminderNotes: (this.editorRef.getValue())});
  }

  onSelectionChange(event: any): void {
    console.log('Selection change:', event);
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.todosForm.controls[controlName].hasError(errorName);
  }

  public createTodo = (todosFormValue) => {
    if (this.todosForm.valid) {
      this.save(todosFormValue);
    }
  }

	save(todosFormValue) {
    this.todosForm.patchValue({reminderNotes: (this.editorRef.getValue())});
    console.log('form value', this.todosForm.value);
    this.eventsData = {
      guid: '0b575a73-934a-4e32-93a2-0ca8ac27bc14',
      reminderNotes: todosFormValue.reminderNotes,
      dueDate: todosFormValue.reminderDate,
      reminderTime: todosFormValue.reminderTime,
      status: 'NOT_COMPLETED',
      dismissed: false,
      eventType: 'todo',
      assignedTo: { firstName: 'Don', lastName: 'Juan', email: 'test@testy.com' },
      context: { scope: 4, entity: '9745b40d-1e52-4652-84ca-9baa1dac6437' },
      timestamps: {
        createdOn: new Date(),
        modifiedOn: new Date()
      }
    };
    this.add(this.eventsData);
    this.clearEditorContent();
    this.clearEditorHistory();
    this.resetFormGroup();
    this.close();
  }

  onSubmit() {
    console.log('form values', this.todosForm.value);
  }

  add(event: EventItem) {
		this.EventsService.add(event);
	}
	update(event: EventItem) {
		this.EventsService.update(event);
	}

	close() {
    this.dialogRef.close('Cancel');
    // todo: change to previous activated Route
    this.router.navigateByUrl('/tasks');
  }

  createFormGroup() {
    return new FormGroup({
      reminderNotes: new FormControl('', [Validators.required]),
      reminderDate: new FormControl({ disabled: true }),
      reminderTime: new FormControl(null),
      addReminderTime: new FormControl(null),
      clientAssociation: new FormControl(null),
      assignment: new FormControl(null),
    });
  }

  resetFormGroup() {
    this.todosForm.reset({
      reminderNotes: null,
      reminderDate: null,
      reminderTime: null,
      addReminderTime: false,
      clientAssociation: null,
      assignment: null,
    })
  }

  hoursOfDay() {
    const hours = Array.from(Array(24).keys());
    const takeMorning = take(12);
    const takeEvening = takeLast(12);
    const AM = takeMorning(hours);
    const PM = takeEvening(hours);
    const  clockHours = [];
    const result = clockHours.concat(PM, AM);
    return this.hourParts(result);
  }

  hourParts(hours: number[]) {
    const hourPartList = [];
    hours.map(v => {
      const clockHour = v > 12 ? v - 12 : v;
      const suffix = v > 11 ? 'PM' : 'AM';
      const hourPartObj1 = { value: `${clockHour}:00 ${suffix}`, viewValue: `${clockHour}:00 ${suffix}` };
      const hourPartObj2 = { value: `${clockHour}:30 ${suffix}`, viewValue: `${clockHour}:30 ${suffix}` };
      hourPartList.push(hourPartObj1);
      hourPartList.push(hourPartObj2);
    });
    return hourPartList;
  }
}
