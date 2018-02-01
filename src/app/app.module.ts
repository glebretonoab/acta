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

// Services
import { StatusService } from './services/status.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
    BrowserAnimationsModule,
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
    ReportingManageComponent
  ],
  providers: [
    Configuration,
    StatusService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
