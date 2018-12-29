import { Subject } from 'rxjs';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NoteItem }  from '../../models/note-item';
import { Notes } from '../../services/notes.facade';

@Component({
	selector: 'lw-notes-list-navigation',
	templateUrl: './notes-list-navigation.component.html',
  styleUrls: ['./notes-list-navigation.component.scss'],
})

export class NotesListNavigationComponent implements OnInit {

  @Input() dataItems: NoteItem[];
  @Output() selectedNote = new EventEmitter<NoteItem>();

  displayData: NoteItem[];
  note: NoteItem;
  note$ = this.notesFacade.currentNote$;
  notes$ = this.notesFacade.allNotes$;
  numNotes = 0;

	constructor(
    private router: Router,
    private route: ActivatedRoute,
    private notesFacade: Notes,
	) {
    this.notes$.subscribe(notes => {
      this.numNotes = notes.length;
    });
    this.note$.subscribe(v => {
      this.note = v;
    });
  }

	ngOnInit() {
    this.notesFacade.selectNote(this.dataItems[0].guid)
  }

  viewNote(item: NoteItem) {
    this.selectedNote.emit(item);
    this.notesFacade.selectNote(item.guid);
  }

}
