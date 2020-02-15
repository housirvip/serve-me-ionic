import {Component, OnInit} from '@angular/core';

import {MenuController, Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {UserService} from './services/user.service';
import {FirebaseService} from './services/firebase.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private menu: MenuController,
        private firebaseService: FirebaseService,
        private userService: UserService,
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            // show status bar
            this.statusBar.overlaysWebView(false);
            this.splashScreen.hide();
        });
    }

    ngOnInit(): void {
        this.userService.getUser();
        this.firebaseService.notifyToUpdate();
    }

    async openMenu() {
        await this.menu.open('first');
    }
}
