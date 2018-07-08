import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { Observable } from 'rxjs/Observable';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';
@Injectable()
export class AuthService {

    baseUrl = "http://localhost:5000/api/auth/"
    userToken: any
    decodedToken: any
    jwtHelper: JwtHelper = new JwtHelper();

    constructor(private http: Http) { }


    login(model: any) {
        return this.http.post(this.baseUrl + "login", model, this.requestOptions()).map((response: Response) => {
            const user = response.json()
            this.userToken = user.tokenString
            console.log(user)
            localStorage.setItem('token', user.tokenString);
            localStorage.setItem('userToken', user.tokenString);
            this.decodedToken = this.jwtHelper.decodeToken(user.tokenString);
            console.log(this.decodedToken);
        })
    }

    register(model: any) {
        return this.http.post(this.baseUrl + "register", model, this.requestOptions()).catch(this.handleError)
    }
    loggedIn() {
        return tokenNotExpired('token')
    }
    loggedIn1() {
        const token = localStorage.getItem('userToken');
        return !!token;
    }
    private requestOptions() {
        const headers = new Headers({ 'Content-Type': 'application/json; charset=UTF-8' });
        return new RequestOptions({ headers: headers });
    }
    private handleError(error: any) {
        const applicationError = error.headers.get('Application-Error')
        if (applicationError) {
            return Observable.throw(applicationError);

        }
        const serverError = error.json();

        let modelStateError = ''

        if (serverError) {
            for (const key in serverError) {
                if (serverError[key]) {
                    modelStateError += serverError[key] + '\n';
                }
            }
        }
        return Observable.throw(modelStateError || 'Server Error');
    }

}