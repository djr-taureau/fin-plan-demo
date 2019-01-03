import {
	Component,
	OnInit,
  ViewChild,
  ChangeDetectionStrategy,
  AfterViewInit,
  ElementRef,
  EventEmitter,
  OnDestroy,
  Input,
  Output
} from '@angular/core';

import { fromEvent } from 'rxjs/observable/fromEvent';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable} from 'rxjs';

import {
	FormGroup,
	FormBuilder,
	Validators,
  FormControl,
} from '@angular/forms';

import { NoteItem } from '../../models';
import { Notes } from '../../services';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { take, takeLast } from 'ramda';
import {
  QuillDirective,
  QuillComponent,
  QuillConfigInterface,
  QuillModulesInterface
} from 'ngx-quill-wrapper';

export interface Client {
	value: string;
	viewValue: string;
}
export interface Assignment {
	value: string;
	viewValue: string;
}

@Component({
	selector: 'lw-notes-form',
	templateUrl: './notes-form.component.html',
  styleUrls: ['./notes-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class NotesFormComponent implements OnInit, AfterViewInit, OnDestroy {
  noteData: NoteItem;
  note$: Observable<NoteItem> = this.notesFacade.currentNote$;
  noteId: string;
	dialogResult: any;
  editor: any;
	notesFormData: any;
  editorInstance;
  editorRef;
  showReminderDate: boolean;
  notesForm: FormGroup;
  startDate = Date.now();
  minDate = Date.now();



  @Input() set note(value: NoteItem) {
    this.noteData = Object.assign({}, value);
  }

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
    private notesFacade: Notes,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder) {
      this.config.modules = { toolbar: this.toolbar };
      this.notesForm = this.createFormGroup();
      this.notesForm.get('addReminder').valueChanges
        .subscribe(val => this.showReminder(val));
      this.notesFacade.currentNote$.subscribe(v => {
        this.note = v;
      })
	  }

	ngOnInit() {
    this.showReminderDate = false;
    this.notesFacade.currentNote$.subscribe(val => {
      this.notesForm.controls['name'].setValue(val.name);
      this.notesForm.controls['note'].setValue(val.note);
      this.componentRef.directiveRef.setValue(val.note);
      // if (val.reminderDate) {
      //   this.showReminderDate = true;
      // };
      this.notesForm.controls['reminderDate'].setValue(val.reminderDate);
      this.notesForm.controls['reminderTime'].setValue(val.reminderTime);
      this.notesForm.controls['clientAssociation'].setValue(val.relatedEntityGuid);
    });

  }

  ngAfterViewInit() {
    // values for hours drop-down --
    this.hours = this.hoursOfDay();
    this.notesFacade.currentNote$.subscribe(v => console.log('afterViewInit note values', v))
    this.notesFacade.currentNote$.subscribe(val => {
      this.notesForm.controls['name'].setValue(val.name)
      this.notesForm.controls['note'].setValue(val.note)
      this.componentRef.directiveRef.setValue(val.note)
      this.notesForm.controls['reminderDate'].setValue(val.reminderDate)
      this.notesForm.controls['reminderTime'].setValue(val.reminderTime)
      this.notesForm.controls['clientAssociation'].setValue(val.relatedEntityGuid)
    });
    this.editorInstance = this.componentRef.directiveRef.quill();
    this.editorRef = this.componentRef.directiveRef;
    this.notesForm.patchValue({note: (this.editorRef.getValue())});
    const redoButton = this.elem.nativeElement.querySelector('.ql-redo');
    const undoButton = this.elem.nativeElement.querySelector('.ql-undo');
    redoButton.innerHTML = '<i class="material-icons">redo</i>';
    undoButton.innerHTML = '<i class="material-icons">undo</i>';

    fromEvent(redoButton, 'click')
    .subscribe(res => this.redo(res));

    fromEvent(undoButton, 'click')
    .subscribe(res => this.undo(res));
  }

  ngOnDestroy() {
    // this.watch.unsubscribe();
    // this.resetFormGroup();
  }

  showReminder(val) {
    this.showReminderDate = !this.showReminderDate;
    if(this.showReminderDate) {
      this.notesForm.get('reminderDate').enable();
      this.notesForm.get('reminderTime').enable();
    } else {
      this.notesForm.get('reminderDate').disable();
      this.notesForm.get('reminderTime').disable();
    }
  }

  addReminderDate(event: MatDatepickerInputEvent<Date>) {
    this.notesForm.patchValue({reminderDate: event.value});
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
    this.notesForm.patchValue({note: (this.editorRef.getValue())});
  }

  onSelectionChange(event: any): void {
    console.log('Selection change:', event);
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.notesForm.controls[controlName].hasError(errorName);
  }

  public createNote = (noteFormValue) => {
    if (this.notesForm.valid) {
      this.save(noteFormValue);
    }
  }

	save(noteFormValue) {
    this.notesForm.patchValue({note: (this.editorRef.getValue())});
    console.log('form value', this.notesForm.value);
    this.noteData = {
      guid: '0b575a73-934a-4e32-93a2-0ca8ac27bc14',
      name: noteFormValue.name,
      note: noteFormValue.value,
      relatedEntityGuid: '678fc1cf-bbe9-4748-958d-f3881008c5c2',
      reminderDate: noteFormValue.reminderDate,
      entityContext: 1,
      owner: { guid: 'bb53a896-1dcc-457c-9619-8a6a0dbe30a2', displayName: 'Donald Dean', entityType: 'user' },
      createdBy: 'new User',
      reminderTime: noteFormValue.reminderTime,
      timestamps: {
        createdOn: new Date(),
        modifiedOn: new Date()
      }
    };
    this.add(this.noteData);
    this.clearEditorContent();
    this.clearEditorHistory();
  }

  onSubmit() {
    console.log('form values', this.notesForm.value);
  }

  add(Note: NoteItem) {
		this.notesFacade.add(Note);
	}
	update(Note: NoteItem) {
		this.notesFacade.update(Note);
	}

  createFormGroup() {
    return new FormGroup({
      name: new FormControl('', [Validators.required]),
      note: new FormControl('', [Validators.required]),
      addReminder: new FormControl(null),
      addTask: new FormControl(null),
      reminderDate: new FormControl({ disabled: true }),
      reminderTime: new FormControl(null),
      clientAssociation: new FormControl(null),
      assignment: new FormControl(null),
      clientVisible: new FormControl(null),
    });
  }

  resetFormGroup() {
    this.notesForm.reset({
      name: null,
      note: null,
      addReminder: false,
      addTask: null,
      reminderDate: null,
      reminderTime: null,
      assignment: null,
      clientVisible: null
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

