import {Component, OnInit} from '@angular/core';

import {MenuController, Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {LoadingService} from './services/loading.service';
import {first} from 'rxjs/operators';
import {UserService} from './services/user.service';
import {FcmService} from './services/fcm.service';
import {environment} from '../environments/environment';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})

export class AppComponent implements OnInit {
    menuId: string;
    contentId: string;

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private menu: MenuController,
        private userService: UserService,
        private fcmService: FcmService,
        private loadingService: LoadingService,
    ) {
        this.initializeApp();
        this.menuId = 'first';
        this.contentId = 'main';
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            // show status bar
            this.statusBar.overlaysWebView(false);
            this.splashScreen.hide();
        });
    }

    async ngOnInit() {
        await this.loadingService.present();
        const user = await this.userService.user$.pipe(first()).toPromise();
        await this.loadingService.dismiss();
        if (!environment.production) {
            console.log(user);
        }
        await this.fcmService.subscribe();
        this.fcmService.listenToNotifications().subscribe(
            // TODO
            msg => console.log(msg)
        );
    }

    async openMenu() {
        await this.menu.open(this.menuId);
    }
}
