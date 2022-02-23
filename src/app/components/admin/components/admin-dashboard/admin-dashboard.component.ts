import {Component, OnInit} from '@angular/core';
import {filter, mapTo, merge, Observable} from 'rxjs';
import {ActivatedRoute, ResolveEnd, ResolveStart, Router} from '@angular/router';
import {AdminService} from '../../services/admin.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  ngOnInit(): void {}

}
