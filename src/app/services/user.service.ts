import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {BaseResponse} from '../core/base-response';
import {User} from '../classes/user';
import {Auth} from '../classes/auth';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    // tslint:disable-next-line:variable-name
    private _jwt: string;
    // tslint:disable-next-line:variable-name
    private _user: User;
    // tslint:disable-next-line:variable-name
    private _isLogin = false;
    // tslint:disable-next-line:variable-name
    private _isAdmin = false;

    get jwt(): string {
        return this._jwt;
    }

    get user(): User {
        return this._user;
    }

    get isLogin(): boolean {
        return this._isLogin;
    }

    get isAdmin(): boolean {
        return this._isAdmin;
    }

    constructor(private http: HttpClient) {
        this._jwt = localStorage.getItem('jwt');
    }

    async login(auth: Auth) {
        return new Promise<BaseResponse>(resolve => {
            this.http.post<BaseResponse>('auth/login', auth).subscribe(
                res => {
                    resolve(res);
                    if (res.code !== 0) {
                        return;
                    }
                    this._jwt = res.result;
                    localStorage.setItem('jwt', this._jwt);
                });
        });
    }

    async register(auth: Auth) {
        return new Promise<BaseResponse>(resolve => {
            this.http.post<BaseResponse>('auth/register', auth).subscribe(
                res => {
                    resolve(res);
                    if (res.code !== 0) {
                        return;
                    }
                    this._jwt = res.result;
                    localStorage.setItem('jwt', this._jwt);
                });
        });
    }

    logout() {
        // remove all data for user
        localStorage.removeItem('jwt');
        this._user = null;
        this._jwt = null;
        this._isLogin = false;
        this._isAdmin = false;
    }

    getUser() {
        if (!this._jwt) {
            return;
        }
        this.http.get<BaseResponse>('user/myself', {}).subscribe(
            res => {
                if (res.code !== 0) {
                    return;
                }
                this._user = res.result;
                this._isLogin = true;
                if (this._user.role.indexOf('ROLE_ADMIN') > 0) {
                    this._isAdmin = true;
                }
            });
    }

    getUserInfo() {
        if (!this._jwt) {
            return;
        }
        this.http.get<BaseResponse>('user/info', {}).subscribe(
            res => {
                if (res.code !== 0) {
                    return;
                }
                this._user.userInfo = res.result;
            });
    }
}
