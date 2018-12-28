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
import { Observable } from 'rxjs';
import { map, mapTo, merge, tap, startWith } from 'rxjs/operators';
import {
	FormGroup,
	FormBuilder,
	Validators,
  FormControl,
} from '@angular/forms';
import {
	MatDialogRef,
	MAT_DIALOG_DATA,
	MatDialogConfig
} from '@angular/material/dialog';
import { DataState, getDatasetState } from '@lifeworks/common';
import { DatasourceItemEvent } from '@lifeworks/ui-components';
import { NoteItem } from '../../models';
import { Notes } from '../../services';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatSlideToggle } from '@angular/material/slide-toggle';
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
  styleUrls: ['./notes-form.component.scss']
})

export class NotesFormComponent implements OnInit, AfterViewInit, OnDestroy {
  noteData: NoteItem;
	notesDialogRef: MatDialogRef<NotesFormComponent>;
	notesDialogConfig: MatDialogConfig<NotesFormComponent>;
	dialogResult: any;
  editor: any;
	notesFormData: any;
  editorInstance;
  editorRef;
  checked: false;
  notesForm: FormGroup;
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



	constructor(
    private elem: ElementRef,
    private NotesService: Notes,
		private router: Router,
    private fb: FormBuilder,
		private dialogRef: MatDialogRef<NotesFormComponent>,
		@Inject(MAT_DIALOG_DATA) public data
	) {
    console.log('injected data', data);
      this.config.modules = { toolbar: this.toolbar };
      this.notesForm = this.createFormGroup();
	  }

	ngOnInit() {
    this.onChanges();
  }

  ngAfterViewInit() {
    this.editorInstance = this.componentRef.directiveRef.quill();
    this.editorRef = this.componentRef.directiveRef;
    this.notesForm.valueChanges.subscribe(v => {
      console.log(v);
    })

    const redoButton = this.elem.nativeElement.querySelector('.ql-redo');
    const undoButton = this.elem.nativeElement.querySelector('.ql-undo');
    redoButton.innerHTML = '<i class="material-icons">redo</i>';
    undoButton.innerHTML = '<i class="material-icons">undo</i>';
  // todo: testing to see if this works now
    fromEvent(redoButton, 'click')
    .subscribe(res => this.redo(res));

    fromEvent(undoButton, 'click')
    .subscribe(res => this.undo(res));

    this.notesForm.get('note').valueChanges.subscribe(v => {
      this.notesForm.get('note').setValidators(Validators.required);
      this.notesForm.get('note').setValidators(Validators.minLength(50));
      this.notesForm.get('note').updateValueAndValidity({
        onlySelf: true, emitEvent: true
      })
    })

  }

  ngOnDestroy() {
    // unsub
  }

  get name() {
    return this.notesForm.get('name');
  }

  get note() {
    return this.notesForm.get('note');
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
    this.resetFormGroup();
    this.close();
  }

  onSubmit() {
    console.log('form values', this.notesForm.value);
  }

  add(Note: NoteItem) {
		this.NotesService.add(Note);
	}
	update(Note: NoteItem) {
		this.NotesService.update(Note);
	}

	close() {
    this.dialogRef.close('Cancel');
    this.router.navigateByUrl('/notes');
  }

  createFormGroup() {
    return new FormGroup({
      name: new FormControl('', [Validators.required]),
      note: new FormControl(''),
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
      addReminder: null,
      addTask: null,
      reminderDate: null,
      reminderTime: null,
      clientAssociation: null,
      assignment: null,
      clientVisible: null
    })
  }
}
