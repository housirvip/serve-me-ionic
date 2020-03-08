import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FirebaseX} from '@ionic-native/firebase-x/ngx';

@Injectable({
    providedIn: 'root'
})
export class FirebaseService {
    get deviceToken(): string {
        return this._deviceToken;
    }

    // tslint:disable-next-line:variable-name
    private _deviceToken: string;

    constructor(private http: HttpClient,
                private firebase: FirebaseX,
    ) {
        this._deviceToken = localStorage.getItem('deviceToken');
        this.initialService();
    }

    initialService() {
        // save the deviceToken server-side and use it to push notifications to this device
        this.firebase.getToken()
            .then(() => {
            });
        this.firebase.onTokenRefresh()
            .subscribe(token => {
                this._deviceToken = token;
                localStorage.setItem('deviceToken', token);
            });
        // check notification permission
        this.firebase.hasPermission()
            .then(r => {
                if (!r) {
                    this.firebase.grantPermission().then(() => {
                    });
                }
            });
        // callback for cloud message
        this.firebase.onMessageReceived()
            .subscribe(data => {
                    // TODO
                    console.log(data);
                },
                error => console.error('Error getting notification', error)
            );
    }
}
