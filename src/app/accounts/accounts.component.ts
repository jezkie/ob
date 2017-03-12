import { Component } from '@angular/core';
import { Accounts } from './accounts';
import { AuthenticationService, User } from '../auth/authentication-service.service';

@Component({
  selector: 'ob-accounts',
  templateUrl: './accounts.component.html',
  styles: []
})
export class AccountsComponent {
  accounts: Accounts[];

  constructor(private _service:AuthenticationService) {
    this.accounts = [
      new Accounts('SAVINGS_001', '1111111', 1234),
      new Accounts('SAVINGS_002', '2222222', 2345),
      new Accounts('SAVINGS_003', '3333333', 3456)
    ];
  }

  selectedAccount(account: Accounts) : void {
    console.log('selected account', account);
  }

  ngOnInit() {
    this._service.checkCredentials();
  }

}
