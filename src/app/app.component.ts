import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { AuthService } from './auth.service';
import { DashboardComponent } from './views/dashboard/dashboard.component';

@Component({
  selector: 'body',
  template: '<router-outlet></router-outlet>',
  providers: [ DashboardComponent ]
})
export class AppComponent implements OnInit {
	constructor(private router: Router,
		public location: Location,
		private auth: AuthService,
		public dashboard: DashboardComponent
	) { }

	ngOnInit() {
		this.router.events.subscribe((event) => {
			if (event instanceof NavigationEnd) {                
				let titlee = this.location.prepareExternalUrl(this.location.path());
				titlee = titlee.slice(1);
				let isLoggedIn:any = this.auth.getLoggedIn();
				if(isLoggedIn == null) {
					isLoggedIn = false;
				}

				if ( !isLoggedIn ) {
					this.router.navigateByUrl('/login');
				}else{
					this.router.navigateByUrl(titlee);
				}
			}
			window.scrollTo(0, 0);
		});
	}
}
