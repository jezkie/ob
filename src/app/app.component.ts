import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './auth/authentication-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ob-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private loggedIn: boolean;
  constructor(private _service: AuthenticationService, private _router:Router) { }

  isLoggedIn(){
    return this._service.loggedIn();
  }

  ngOnInit() {
    console.log('app.component init...', this._router.url);
    this.loggedIn = this._service.loggedIn();
  }

}
