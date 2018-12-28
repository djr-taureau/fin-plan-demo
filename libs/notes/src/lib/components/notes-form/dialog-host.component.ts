import { Component, OnDestroy } from '@angular/core'
import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NotesFormComponent } from './notes-form.component';

@Component({
  selector: 'lw-dialog-host',
  templateUrl: './dialog-host.component.html',
})

export class DialogHostComponent implements OnDestroy {
  currentDialog: MatDialogRef<NotesFormComponent> = null;
  currentDialogConfig: MatDialogConfig<NotesFormComponent> = null;
  destroy = new Subject<any>();
  constructor(public matDialog: MatDialog, private route: ActivatedRoute, private router: Router) {
      this.route.params.pipe(takeUntil(this.destroy))
      .subscribe(params => {
        console.log('params from host', params)
        if(this.currentDialog) {
          this.currentDialog.close();
        }

        this.currentDialog = matDialog.open(NotesFormComponent, {
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
