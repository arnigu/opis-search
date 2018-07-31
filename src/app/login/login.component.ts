import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/modules/core/services/auth/auth.service';
import { Credentials } from '@app/modules/core/models/credentials';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {



  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    const creds = new Credentials();
    creds.username = 'arnigu';
    creds.password = 'gopro';
    this.auth.login(creds).subscribe((res) => {
      this.router.navigate(['/home']);
    });
  }

}
