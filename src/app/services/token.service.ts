import {Injectable} from '@angular/core';
import {Token} from '../classes/token';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class TokenService {

    private token: Token;

    constructor(private http: HttpClient) {
        this.token = JSON.parse(localStorage.getItem('token')) || new Token();
        console.log(this.token);
    }

    saveWebToken(webToken: string) {
        this.token.webToken = webToken;
        if (!environment.production) {
            console.log(this.token);
        }
        this.save();
    }

    saveDeviceToken(deviceToken: string) {
        this.token.deviceToken = deviceToken;
        if (!environment.production) {
            console.log(this.token);
        }
        this.save();
    }

    save() {
        if (this.token.id) {
            this.http.put<Token>('tokens/' + this.token.id, this.token).subscribe(
                res => {
                    this.token = res;
                    localStorage.setItem('token', JSON.stringify(this.token));
                }
            );
        } else {
            this.http.post<Token>('tokens', this.token).subscribe(
                res => {
                    this.token = res;
                    localStorage.setItem('token', JSON.stringify(this.token));
                }
            );
        }
    }
}
