import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import { environment } from '../environments/environment';

const API_URL = environment.api_URL;
const auth = sessionStorage.getItem('Authorization');
const wfsOptions = {
  	headers: new HttpHeaders({
    	'Content-Type' : 'text/xml',
    	'observe': 'response'
   })
};

@Injectable({
	providedIn: 'root'
})

export class AppService {
	constructor( private http: HttpClient) { }
	

	public login(payload:any) {
        return this.http.post(API_URL +'/login', payload)
    }

    public resgitser(payload:any) {
        return this.http.post(API_URL +'/register', payload)
    }
    
	/* Service Checklist */

	public getChecklist(payload) {
		return this.http.get(API_URL + '/checklist');
	}
}