import {ActivatedRoute, ResolveEnd, ResolveStart, Router} from '@angular/router';
import { AdminService } from '../../services/admin.service';
import {filter, map, mapTo, merge, Observable} from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { User } from '../../user';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  // isLoading!: Observable<boolean>;
  // private showLoader!: Observable<boolean>;
  // private hideLoader!: Observable<boolean>;

  personalList!: Observable<User[]>;

  constructor(
    private adminService: AdminService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.personalList = this.activatedRoute.data.pipe(map((data) =>{
      return data?.['users']
    }));

    // this.showLoader = this.router.events.pipe(filter((e) => e instanceof ResolveStart), mapTo(true));
    // this.hideLoader = this.router.events.pipe(filter((e) => e instanceof ResolveEnd), mapTo(false));
    //
    // this.isLoading = merge(this.hideLoader, this.showLoader);
  }
}
