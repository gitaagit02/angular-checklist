import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';


const routes: Routes = [
	// {
	//     path: '',
	//     redirectTo: 'dashboard',
	//     pathMatch: 'full',
	// },
	// {
	// 	path: '',
	// 	redirectTo: 'login',
	// 	pathMatch: 'full',
 //  	},
  	{
		path: '',
		component: LoginComponent
  	},
  	{
		path: 'login',
		component: LoginComponent,
		data: {
		  title: 'Login Page'
		}
  	},
  	{
		path: 'register',
		component: RegisterComponent,
		data: {
		  title: 'Register Page'
		}
  	},
  	{
		path: 'dashboard',
		component: DashboardComponent,
		data: {
		  title: 'Dashboard Page'
		}
  	},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
