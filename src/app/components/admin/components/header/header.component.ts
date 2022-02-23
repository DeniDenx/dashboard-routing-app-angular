import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../../services/auth.service';
import {filter, mapTo, merge, Observable} from 'rxjs';
import {AdminService} from '../../services/admin.service';
import {ActivatedRoute, ResolveEnd, ResolveStart, Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoading!: Observable<boolean>;
  private showLoader!: Observable<boolean>;
  private hideLoader!: Observable<boolean>;

  constructor(private authService: AuthService,
              private adminService: AdminService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.showLoader = this.router.events
      .pipe(filter((e) => e instanceof ResolveStart), mapTo(true));
    this.hideLoader = this.router.events.pipe(filter((e) => e instanceof ResolveEnd), mapTo(false));

    this.isLoading = merge(this.hideLoader, this.showLoader);

  }

  logout(): void {
    this.authService.logout();
  }

}
