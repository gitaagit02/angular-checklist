import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { CommonModule } from "@angular/common"
import { Subscription,Observable, of} from 'rxjs';

import { AppService } from '../../app.service';
import { OtherService } from '../../other.service';
import { AuthService } from '../../auth.service';

import swal from 'sweetalert2';

@Component({
	templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

	

	constructor(
		private api: AppService,
		private other: OtherService,
		private auth: AuthService
	) {
		
	}

	ngOnInit(): void {

	}  
}