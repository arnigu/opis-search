import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/modules/core/services/auth/auth.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }


  ngOnInit() {
  }

  logout() {
    console.log('Loggin out');
    this.auth.logout().subscribe((res) => {
      this.router.navigate(['/login']);
    });
  }

}
