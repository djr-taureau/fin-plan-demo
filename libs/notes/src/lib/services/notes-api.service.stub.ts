import { of } from 'rxjs';

export class NotesApiServiceStub {
  all() {return of([])}
  create(note) {return of({})}
  update(note) {return of({})}

}