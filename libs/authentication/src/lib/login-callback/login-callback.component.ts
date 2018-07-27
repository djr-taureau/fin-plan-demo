import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { retriveFromStorage } from '@lifeworks/core';
import { REDIRECT_TOKEN } from '../authentication.routes';
import { Location } from '@angular/common';
import { timeout } from 'rxjs/operators';
import { AuthService } from '../auth.service';

@Component({
  selector: 'lifeworks-login-callback',
  templateUrl: './login-callback.component.html',
  styleUrls: ['./login-callback.component.css']
})
export class LoginCallbackComponent implements OnInit {
  get authState() {
    if(this.auth.isAuthenticated()) {
      return 'Authenticating'
    } else {
      return 'Unable to authenticate';
    }
  }

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  
    setTimeout(() => {
      if(this.auth.isAuthenticated()) {
        const redir = retriveFromStorage(REDIRECT_TOKEN);
        this.router.navigate([redir])
      }
    }, 500)
  }

}
