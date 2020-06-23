import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './app.service';


@Injectable()
export class AuthService {
    private isUserLoggedIn;
    private userInfo:any = {};
    public bodyElemet;

    constructor(private router: Router, private api: AppService,) {
        this.isUserLoggedIn = false;
        this.bodyElemet = document.querySelector('body');
        localStorage.clear();

    }

    setLoggedIn(response, info) {
        this.isUserLoggedIn = true;
        sessionStorage.setItem('isLoggedIn', this.isUserLoggedIn);
        sessionStorage.setItem('Authorization', response.accessToken);
        this.router.navigate(['dashboard']);
    }

    getLoggedIn() {
        const isLoggedIn = sessionStorage.getItem('isLoggedIn');
        return isLoggedIn;
    }

    setLoggedOut() {
        this.isUserLoggedIn = false;
        sessionStorage.clear();
        this.router.navigate(['login']);
    }
}
