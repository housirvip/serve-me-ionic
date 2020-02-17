import {Component, OnInit} from '@angular/core';

import {MenuController, Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    menuId: string;
    contentId: string;

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private menu: MenuController,
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

    async openMenu() {
        await this.menu.open(this.menuId);
    }
}
