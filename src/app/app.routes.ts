import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/dashboard/home/home.component';
import { LaunchscriptComponent } from './components/dashboard/tests/launchscript/launchscript.component';
import { RunningComponent } from './components/dashboard/tests/running/running.component';
import { ViewComponent } from './components/dashboard/scripts/view/view.component';
import { ManageComponent } from './components/dashboard/catalogues/manage/manage.component';

export const ROUTES: Routes = [
  {
    path: 'dashboard/:status', 
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'tests/launchscript', component: LaunchscriptComponent },
      { path: 'tests/running', component: RunningComponent },
      { path: 'scripts/view', component: ViewComponent },
      { path: 'catalogues/manage', component: ManageComponent }
    ]
  },
  { path: '', component: LoginComponent }
]
