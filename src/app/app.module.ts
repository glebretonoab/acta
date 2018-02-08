import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule }    from '@angular/http';

// Plugins
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AceEditorModule } from 'ng2-ace-editor';

// Configuration
import { Configuration } from './app.configuration';

// Routes
import { ROUTES } from './app.routes';

// Components
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

// Services
import { StatusService } from './services/status.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
    //BrowserAnimationsModule,
    AceEditorModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    LaunchscriptComponent,
    RunningComponent,
    TracesComponent,
    AnalysisComponent,
    ViewComponent,
    CatalogManageComponent,
    ReportingManageComponent,
    BatchManageComponent,
    NumberingComponent,
    NetworkStatusComponent,
    ArchitectureComponent,
    ConfigurationComponent,
    ServerStatusComponent,
    EditConfigurationComponent,
    UsersManageComponent,
    ContributorsManageComponent
  ],
  providers: [
    Configuration,
    StatusService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
