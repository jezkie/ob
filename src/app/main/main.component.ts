import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import {AccountsComponent} from '../accounts/accounts.component';
import { Routes, Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../auth/authentication-service.service'

export const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'accounts', component: AccountsComponent}
];

@Component({
  selector: 'ob-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private _service: AuthenticationService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this._service.checkCredentials();
  }

}
