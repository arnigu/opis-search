import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '@app/modules/core/services/auth/auth.service';

@Component({
  selector: 'home-nav',
  templateUrl: './home-nav.component.html',
  styleUrls: ['./home-nav.component.css'],
})
export class HomeNavComponent implements OnInit {

  username: string;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private authService: AuthService) {}

   ngOnInit() {
    this.authService.checkauth().subscribe((context) => {
      this.username = context.currentuser.fullName;
    });
   }

    logout() {
      this.authService.logout().subscribe(() => {
        this.authService.checkauth().subscribe();
      });
    }
  }
