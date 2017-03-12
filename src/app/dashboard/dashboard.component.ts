import { Component, OnInit } from '@angular/core';
import { AuthenticationService, User } from '../auth/authentication-service.service';

@Component({
  selector: 'ob-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  constructor(private _service:AuthenticationService) { }

  ngOnInit() {
    this._service.checkCredentials();
  }

}
