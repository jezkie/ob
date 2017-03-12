import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './auth/authentication-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ob-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
  private loggedIn: boolean;
  constructor(private _service:AuthenticationService, private _router:Router) { }

  ngOnInit() {
    console.log('this._router.url', this._router.url );
    console.log(this._router.routerState);
  }

  logout(){
    this._service.logout();
  }

}
