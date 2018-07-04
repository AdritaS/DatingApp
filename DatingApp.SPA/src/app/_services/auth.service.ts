import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

    baseUrl = "http://localhost:5000/api/auth/"
    userToken: any
    constructor(private http: Http) { }


    login(model: any) {
        return this.http.post(this.baseUrl + "login", model, this.requestOptions()).map((response: Response) => {
            const user = response.json()

            this.userToken = user.userToken
            console.log(user)
            localStorage.setItem('userToken', this.userToken);
        })
    }

    register(model: any) {
        return this.http.post(this.baseUrl + "register", model, this.requestOptions())
    }
    private requestOptions() {
        const headers = new Headers({ 'Content-Type': 'application/json; charset=UTF-8' });
        return new RequestOptions({ headers: headers });
    }

}