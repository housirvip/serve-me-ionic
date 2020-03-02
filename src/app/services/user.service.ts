import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {BaseResponse} from '../core/base-response';
import {User} from '../classes/user';
import {AngularFireAuth} from '@angular/fire/auth';
import {FirebaseService} from './firebase.service';
import {environment} from '../../environments/environment';
import {UserRole} from '../classes/user-role';
import {Vendor} from '../classes/vendor';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    // tslint:disable-next-line:variable-name
    private _jwt: string;
    // tslint:disable-next-line:variable-name
    private _user: User;
    // tslint:disable-next-line:variable-name
    private _vendor: Vendor;
    // tslint:disable-next-line:variable-name
    private _isLogin = false;
    // tslint:disable-next-line:variable-name
    private _isAdmin = false;
    // tslint:disable-next-line:variable-name
    private _isVendor = false;
    // tslint:disable-next-line:variable-name
    private _isCustomer = false;

    get jwt(): string {
        return this._jwt;
    }

    get user(): User {
        return this._user;
    }

    get vendor(): Vendor {
        return this._vendor;
    }

    get isLogin(): boolean {
        return this._isLogin;
    }

    get isAdmin(): boolean {
        return this._isAdmin;
    }

    get isVendor(): boolean {
        return this._isVendor;
    }

    get isCustomer(): boolean {
        return this._isCustomer;
    }

    get emailVerified(): boolean {
        if (!this.afAuth.auth.currentUser) {
            return true;
        }
        return this.afAuth.auth.currentUser.emailVerified;
    }

    constructor(private http: HttpClient,
                private afAuth: AngularFireAuth,
                private firebaseService: FirebaseService
    ) {
        afAuth.idToken.subscribe(jwt => {
            if (!jwt) {
                return;
            }
            this._jwt = jwt;
            this.getUser();
            firebaseService.notifyToUpdate();
            if (!environment.production) {
                console.log(jwt);
            }
        });
    }

    logout() {
        // remove all data for user
        this.afAuth.auth.signOut().then(() => {
                this._user = null;
                this._jwt = null;
                this._isLogin = false;
                this._isAdmin = false;
                this._isCustomer = false;
                this._isVendor = false;
            }
        );
    }

    newUser(user: User) {
        this.http.post<BaseResponse>('auth/register', user).subscribe(
            res => {
                if (res.code !== 0) {
                    return;
                }
                this.setUser(res.result);
            });
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
                this.setUser(res.result);
            });
    }

    getVendor() {
        if (!this._jwt) {
            return;
        }
        this.http.get<BaseResponse>('user/vendor', {}).subscribe(
            res => {
                if (res.code !== 0) {
                    return;
                }
                this._vendor = res.result;
            });
    }

    updateUser(user: User) {
        this.http.put<BaseResponse>('user/update', user).subscribe(
            res => {
                if (res.code !== 0) {
                    return;
                }
                this.getUser();
            }
        );
    }

    async verifyEmail() {
        const user = this.afAuth.auth.currentUser;
        return await user.sendEmailVerification();
    }

    setUser(user: User) {
        this._user = user;
        this._isLogin = true;
        if (user.role.indexOf(UserRole.ROLE_ADMIN) > 0) {
            this._isAdmin = true;
        }
        if (user.role.indexOf(UserRole.ROLE_CUSTOMER) > 0) {
            this._isCustomer = true;
        }
        if (user.role.indexOf(UserRole.ROLE_VENDOR) > 0) {
            this._isVendor = true;
            this.getVendor();
        }
    }
}
