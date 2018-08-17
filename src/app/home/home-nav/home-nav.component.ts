import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '@app/modules/core/services/auth/auth.service';
import { QueryService } from '@app/modules/core/services/query/query.service';
import { BinaryFilterExpression } from '@app/modules/core/models/documentfilter';

@Component({
  selector: 'home-nav',
  templateUrl: './home-nav.component.html',
  styleUrls: ['./home-nav.component.css'],
})
export class HomeNavComponent implements OnInit {

  username: string;
  systemName = 'Opis';

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private authService: AuthService, private queryService: QueryService) {}

   ngOnInit() {
    this.authService.checkauth().subscribe((context) => {
      this.username = context.currentuser.fullName;
    });

    const filter = this.queryService.getFilter(1012, new BinaryFilterExpression('_key', 0, 'SystemName'));
    filter.loadColumns = ['subject', 'value'];
    this.queryService.query(filter).subscribe((res) => {
      this.systemName = res.data.rows[0].columnValues[1];
    });
   }

    logout() {
      this.authService.logout().subscribe(() => {
        this.authService.checkauth().subscribe();
      });
    }
  }
