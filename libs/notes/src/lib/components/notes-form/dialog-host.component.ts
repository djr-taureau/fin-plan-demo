import { Component, OnDestroy } from '@angular/core'
import { VERSION, MatDialogRef, MatDialog, MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {NotesFormComponent} from './notes-form.component';

@Component({
  selector: 'lw-test',
  templateUrl: 'dialog-host.component.html',
})

export class DialogHostComponent implements OnDestroy {
  currentDialog: MatDialogRef<NotesFormComponent> = null;
  destroy = new Subject<any>();
  constructor(public matDialog: MatDialog, private route: ActivatedRoute, private router: Router) {
      this.route.params.pipe(takeUntil(this.destroy))
      .subscribe(params => {
        console.log('params from host', params)
        if(this.currentDialog) {
          this.currentDialog.close();
        }
        this.currentDialog = matDialog.open(NotesFormComponent, {
          data: { title: 'This is a new component' }
        })
      })
      this.currentDialog.afterClosed().subscribe(result => {
        console.log('Dialog was closed', result);
        this.router.navigateByUrl('/notes');
      })
    }

    ngOnDestroy() {
      this.destroy.next();
    }
}
