import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/dashboard/home/home.component';
import { LaunchscriptComponent } from './components/dashboard/tests/launchscript/launchscript.component';
import { RunningComponent } from './components/dashboard/tests/running/running.component';
import { TracesComponent } from './components/dashboard/tests/traces/traces.component';
import { AnalysisComponent } from './components/dashboard/tests/analysis/analysis.component';
import { ViewComponent } from './components/dashboard/scripts/view/view.component';
import { CatalogManageComponent } from './components/dashboard/catalogs/manage/manage.component';
import { ReportingManageComponent } from './components/dashboard/reporting/manage/manage.component';
import { NumberingComponent } from './components/dashboard/network/numbering/numbering.component';
import { ConfigurationComponent } from './components/dashboard/network/configuration/configuration.component';
import { ServerStatusComponent } from './components/dashboard/admin/server/status.component';

export const ROUTES: Routes = [
  {
    path: 'dashboard/:status', 
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'tests/launchscript', component: LaunchscriptComponent },
      { path: 'tests/running', component: RunningComponent },
      { path: 'tests/traces', component: TracesComponent },
      { path: 'tests/analysis', component: AnalysisComponent },
      { path: 'scripts/view', component: ViewComponent },
      { path: 'catalogs/manage', component: CatalogManageComponent },
      { path: 'reporting/manage', component: ReportingManageComponent },
      { path: 'network/numbering', component: NumberingComponent },
      { path: 'network/configuration', component: ConfigurationComponent },
      { path: 'admin/serverstatus', component: ServerStatusComponent }

    ]
  },
  { path: '', component: LoginComponent }
]