import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '@app/modules/core/services/auth/auth.service';
import { Credentials } from '@app/modules/core/models/credentials';
import { Router, ActivatedRoute, Params } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild ('user') userInput: ElementRef;
  @ViewChild ('pass') passwordInput: ElementRef;

  returnUrl: undefined;

  username = '';
  password = '';

  errormessage: string;

  constructor(private auth: AuthService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit() {
        // read returnUrl from queryParameters if available
        this.route.queryParams.subscribe((qParams: Params) => {
          this.returnUrl = qParams['returnUrl'];
        });
        this.setFocus();
  }


  login() {
    this.errormessage = undefined;
    const creds = new Credentials();
    creds.username = this.username;
    creds.password = this.password;
    this.auth.login(creds).subscribe((res) => {
      this.router.navigate([this.returnUrl || '/home']);
    }, (err) => {

      console.log(err);
      this.password = '';
      this.setFocus();
      this.errormessage = err.status > 400 ? err.error : 'Connection error';
    });
  }

  private setFocus() {
    if (this.username.length === 0) {
      this.userInput.nativeElement.focus();
    } else {
      console.log('focus pass');
      this.passwordInput.nativeElement.focus();
    }
  }

}
