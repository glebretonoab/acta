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
import { BatchManageComponent } from './components/dashboard/batch/manage/manage.component';
import { NumberingComponent } from './components/dashboard/network/numbering/numbering.component';
import { NetworkStatusComponent } from './components/dashboard/network/status/status.component';
import { ArchitectureComponent } from './components/dashboard/network/architecture/architecture.component';
import { ConfigurationComponent } from './components/dashboard/network/configuration/configuration.component';
import { ServerStatusComponent } from './components/dashboard/admin/server/status.component';
import { EditConfigurationComponent } from './components/dashboard/admin/edit/configuration.component';
import { UsersManageComponent } from './components/dashboard/admin/users/manage.component';
import { ContributorsManageComponent } from './components/dashboard/admin/contributors/manage.component';

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
      { path: 'batch/manage', component: BatchManageComponent },
      { path: 'network/numbering', component: NumberingComponent },
      { path: 'network/configuration', component: ConfigurationComponent },
      { path: 'network/status', component: NetworkStatusComponent },
      { path: 'network/architecture', component: ArchitectureComponent },
      { path: 'admin/serverstatus', component: ServerStatusComponent },
      { path: 'admin/configuration', component: EditConfigurationComponent },
      { path: 'admin/users', component: UsersManageComponent },
      { path: 'admin/contributors', component: ContributorsManageComponent }

    ]
  },
  { path: '', component: LoginComponent }
]