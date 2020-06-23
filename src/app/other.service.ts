import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { Subject, Observable } from 'rxjs';
import { DatePipe } from '@angular/common';

@Injectable()
export class OtherService {

	constructor(
		private router: Router,
		private datePipe: DatePipe
	) { }

	loadingPage() {  		
		swal.fire({
			title: 'Loading...',
			text: 'Please Wait...',
			showConfirmButton: false,
			allowOutsideClick: false,
			onOpen: () => {
			  swal.showLoading()
			}
		})
	}

	alertErrorService(message) {  		
		swal.fire({
			title: 'Error!',
			text: message,
			showConfirmButton: false,
			allowOutsideClick: false,
		})
	}

	/**/


}
