import { Component, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { AppService } from '../../app.service';
import { AuthService } from '../../auth.service';
import { OtherService } from '../../other.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {

	data: any = []
	loginData = {
		username: '',
		password: ''
	}
	modalRef: BsModalRef;

	constructor( 
		private titleService: Title,
		private router: Router, 
		private api: AppService,
		private auth: AuthService, 
		private other: OtherService,
		private modalService: BsModalService)
	{}

	login() {
		this.other.loadingPage();
		try {
		  	this.api.login(this.loginData)
			.subscribe(resp => {
				const token = resp['accessToken'];
				const info = resp['userInfo'];
				this.auth.setLoggedIn(token,info);
			},
			error => {
				this.other.alertErrorService(error.error.message);
			})
		} 
		catch (e) {
		}		
	}
}
