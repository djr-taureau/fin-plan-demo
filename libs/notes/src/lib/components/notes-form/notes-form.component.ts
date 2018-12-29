import {
	Component,
	OnInit,
  ViewChild,
  ChangeDetectionStrategy,
	Inject,
  AfterViewInit,
  ElementRef,
  EventEmitter,
  OnDestroy,
  Input,
  Output
} from '@angular/core';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';
import { map, mapTo, merge, tap, startWith, switchMap, take, first } from 'rxjs/operators';
import {
	FormGroup,
	FormBuilder,
	Validators,
  FormControl,
} from '@angular/forms';
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
  checked: false;
  notesForm: FormGroup;
  startDate = Date.now();
  minDate = new Date(Date.now());



  @Input() set note(value: NoteItem) {
    this.noteData = Object.assign({}, value);
  }

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();



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
    private notesFacade: Notes,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder) {
      this.config.modules = { toolbar: this.toolbar };
      this.notesForm = this.createFormGroup();
      this.notesFacade.currentNote$.subscribe(v => {
        this.note = v;
      })
	  }

	ngOnInit() {
    this.notesFacade.currentNote$.subscribe(v => console.log('onInit note Values', v))
    console.log('this.note:', this.note);
    this.notesFacade.currentNote$.subscribe(val => {
      console.log('current note', val);
      this.notesForm.controls['name'].setValue(val.name)
      this.notesForm.controls['note'].setValue(val.note)
      this.componentRef.directiveRef.setValue(val.note)
      this.notesForm.controls['reminderDate'].setValue(val.reminderDate)
      this.notesForm.controls['reminderTime'].setValue(val.reminderTime)
      this.notesForm.controls['clientAssociation'].setValue(val.relatedEntityGuid)
    });
  }

  ngAfterViewInit() {
    this.notesFacade.currentNote$.subscribe(v => console.log('afterViewInit note values', v))
    this.notesFacade.currentNote$.subscribe(val => {
      console.log('current note', val);
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
    // this.resetFormGroup();
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

