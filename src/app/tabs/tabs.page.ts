import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';

import { FCM } from '@ionic-native/fcm/ngx';
import { Platform } from '@ionic/angular';

@Component({
    selector: 'app-tabs',
    templateUrl: 'tabs.page.html',
    styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

    constructor(private userService: UserService,
                private fcm: FCM,
                public plt: Platform) {
        this.plt.ready()
            .then(() => {
                this.fcm.onNotification().subscribe(data => {
                    if (data.wasTapped) {
                        console.log('Received in background');
                    } else {
                        console.log('Received in foreground');
                    }
                });

                this.fcm.onTokenRefresh().subscribe(token => {
                    // Register your new token in your back-end if you want
                    // backend.registerToken(token);
                });
            });
    }

    subscribeToTopic() {
        this.fcm.subscribeToTopic('enappd');
    }
    getToken() {
        this.fcm.getToken().then(token => {
            // Register your new token in your back-end if you want
            // backend.registerToken(token);
        });
    }
    unsubscribeFromTopic() {
        this.fcm.unsubscribeFromTopic('enappd');
    }

    ngOnInit(): void {
        this.userService.getUser();
    }
}
