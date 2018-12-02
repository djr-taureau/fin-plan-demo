import { Component, OnInit, Input, Output, EventEmitter, ViewChild, Inject, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DataState, getDatasetState } from '@lifeworks/common';
import { DatasourceItemEvent } from '@lifeworks/ui-components';
import { NoteItems, NoteItem } from '../../models';
import { Notes } from '../../services';

interface CanClose {
  canClose():boolean;
}

@Component({
  selector: 'lw-notes-form',
  templateUrl: './notes-form.component.html'
})
export class NotesFormComponent implements OnInit {


	data$: Observable<NoteItems>;
	isLoaded$: Observable<boolean>;
	dataState$: Observable<DataState>;
  dataItemsCount$: Observable<number>;
  notesDialogRef: MatDialogRef<NotesFormComponent>;
  dialogResult: any;
  notesFormData: any;

  constructor(
    private NotesService: Notes,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<NotesFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {
      console.log('injected data', data)
    }

	ngOnInit() {
    console.log('Notes form is starting');
		this.NotesService.load();
		this.isLoaded$ = this.NotesService.isDataLoaded();
    this.dataState$ = getDatasetState(this.isLoaded$, this.dataItemsCount$);

  }

  event(event: DatasourceItemEvent<NoteItem>) {
  		switch (event.action) {
  			case 'remove':
  				this.dismiss(event.item);
  				break;
  		}
  	}

	dismiss(Note: NoteItem) {
		this.NotesService.dismiss(Note.guid);
  }

  close() {
    console.log('NotesFormDialog.close');
    this.router.navigate([{outlets: {dialog: null}}]);
    this.dialogRef.close('Cancel');
  }

}
