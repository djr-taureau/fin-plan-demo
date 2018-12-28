import { Component, OnDestroy } from '@angular/core'
import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NotesFormDialogComponent } from './notes-form-dialog.component';

@Component({
  selector: 'lw-dialog-host',
  templateUrl: './dialog-host.component.html',
})

export class DialogHostComponent implements OnDestroy {
  currentDialog: MatDialogRef<NotesFormDialogComponent> = null;
  currentDialogConfig: MatDialogConfig<NotesFormDialogComponent> = null;
  destroy = new Subject<any>();
  constructor(public matDialog: MatDialog, private route: ActivatedRoute, private router: Router) {
      this.route.params.pipe(takeUntil(this.destroy))
      .subscribe(params => {
        console.log('params from host', params)
        if(this.currentDialog) {
          this.currentDialog.close();
        }

        this.currentDialog = matDialog.open(NotesFormDialogComponent, {
          data: { title: '' },
          disableClose: false,
          hasBackdrop: true,
          height: '60%',
          width: '60%',
          panelClass: 'notes-form'
        })
      })
    }

    ngOnDestroy() {
      this.destroy.next();
    }

    close() {
      this.currentDialog.close();
    }
}
