import { Injectable } from '@angular/core';

import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse} from '@angular/common/http';
import { Observable, EMPTY, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { OtherService } from '././other.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Injectable()
export class ApiInterceptionService implements HttpInterceptor {

  constructor(private auth: AuthService, private router: Router, private other: OtherService) { }

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		let isLoggedIn = sessionStorage.getItem('isLoggedIn');

			if (isLoggedIn) {
				req = req.clone({
				    setHeaders: {
				        Authorization: sessionStorage.getItem('Authorization')
				     }
				});
				return next.handle(req).pipe(catchError( (error: HttpErrorResponse) => {
                 	return this.catch401(error);
            	}));
			}else{
				req = req.clone({
				    setHeaders: {}
				});
				return next.handle(req);
			}

  	}

	private catch401(error: HttpErrorResponse): Observable<any> {
	    // Check if we had 401 response
	    if (error.status === 401) {
	    	this.auth.setLoggedOut();
	    	this.other.alertErrorService(error.error.message);
	    }else{
	    	this.other.alertErrorService(error.error.message);
	    }
	    return throwError(error);
	}
}
