import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {User} from '../classes/user';
import {AngularFireAuth} from '@angular/fire/auth';
import {environment} from '../../environments/environment';
import {Vendor} from '../classes/vendor';
import {FirebaseService} from './firebase.service';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    set vendorView(value: boolean) {
        this._vendorView = value;
    }

    get vendorView(): boolean {
        return this._vendorView;
    }

    get jwt(): string {
        return this._jwt || localStorage.getItem('jwt');
    }

    get user(): User {
        return this._user;
    }

    get vendor(): Vendor {
        return this._vendor;
    }

    get isVendor(): boolean {
        return this._isVendor;
    }

    get emailVerified(): boolean {
        if (!this.afAuth.auth.currentUser) {
            return true;
        }
        return this.afAuth.auth.currentUser.emailVerified;
    }

    // tslint:disable-next-line:variable-name
    private _jwt: string;
    // tslint:disable-next-line:variable-name
    private _user: User;
    // tslint:disable-next-line:variable-name
    private _vendor: Vendor;
    // tslint:disable-next-line:variable-name
    private _isLogin = false;
    // tslint:disable-next-line:variable-name
    private _isVendor = false;

    // tslint:disable-next-line:variable-name
    private _vendorView = false;

    constructor(private http: HttpClient,
                private afAuth: AngularFireAuth,
                private firebaseService: FirebaseService,
    ) {
        afAuth.idToken.subscribe(jwt => {
            if (!jwt) {
                return;
            }
            this._jwt = jwt;
            localStorage.setItem('jwt', jwt);
            this.getUser();
            this.syncDeviceToken(this.firebaseService.deviceToken);
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
                this._isVendor = false;
                this._vendorView = false;
            }
        );
    }

    newUser(user: User) {
        user.password = 'serve-me';
        this.http.post<User>('auth/local/register', user).subscribe(
            res => {
                this.setUser(res);
            });
    }

    getUser() {
        if (!this._jwt) {
            return;
        }
        this.http.get<User>('users/me', {}).subscribe(
            res => {
                this.setUser(res);
            });
    }

    updateUser(user: User) {
        if (!this._isLogin) {
            return;
        }
        this.http.put<User>('users/' + this._user.id, user).subscribe(
            res => {
                this.setUser(res);
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
        if (user.vendor) {
            this._vendor = user.vendor;
            this._isVendor = true;
        }
    }

    syncDeviceToken(deviceToken: string) {
        const user = new User();
        user.deviceToken = deviceToken;
        this.updateUser(user);
    }
}
