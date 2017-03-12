// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
import { Routes} from '@angular/router';

import { DashboardComponent } from '../app/dashboard/dashboard.component';
import { AccountsComponent } from '../app/accounts/accounts.component'; 
import { LoginComponent } from '../app/login/login.component';
import { MainComponent, routes as mainRoutes } from '../app/main/main.component';

export const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', component: MainComponent, children: mainRoutes},
  {path: 'login', component: LoginComponent}  
];

export const environment = {
  production: false
};
