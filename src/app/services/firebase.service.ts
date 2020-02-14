import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FirebaseX} from '@ionic-native/firebase-x';
import {Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FirebaseService {
    private token: string;
    private subject = new Subject<string>();

    constructor(private http: HttpClient,
                private firebase: FirebaseX,
    ) {
        this.readyToSendToken();
        this.initialService();
    }

    private readyToSendToken() {
        this.token = localStorage.getItem('fcm_token');
        this.subject.asObservable().subscribe(value => {
            this.http.post('user/token', {fcmToken: value})
                .subscribe(() => {
                });
        });
    }

    notifyToUpdate() {
        this.subject.next(this.token);
    }

    initialService() {
        // save the token server-side and use it to push notifications to this device
        this.firebase.getToken()
            .then(() => {
            });
        this.firebase.onTokenRefresh()
            .subscribe(token => {
                this.token = token;
                localStorage.setItem('fcm_token', token);
                this.notifyToUpdate();
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
