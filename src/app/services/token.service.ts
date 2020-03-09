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
    }

    saveWebToken(webToken: string) {
        const token = new Token();
        token.webToken = webToken;
        if (!environment.production) {
            console.log(token);
        }
        this.http.post<Token>('tokens', token).subscribe(
            res => {
                this.token = res;
            }
        );
    }

    saveDeviceToken(deviceToken: string) {
        const token = new Token();
        token.deviceToken = deviceToken;
        if (!environment.production) {
            console.log(token);
        }
        this.http.post<Token>('tokens', token).subscribe(
            res => {
                this.token = res;
            }
        );
    }
}
