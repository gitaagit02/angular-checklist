import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';

import { AppService } from './app.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptionService } from './api-interception.service';
import { AuthService } from './auth.service';
import { OtherService } from './other.service';

@NgModule({
  schemas : [NO_ERRORS_SCHEMA],
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
  	AppService,
    OtherService,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: ApiInterceptionService,
        multi: true,
    },
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
