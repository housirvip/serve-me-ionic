import {Injectable} from '@angular/core';
import {Platform} from '@ionic/angular';
import {FirebaseX} from '@ionic-native/firebase-x/ngx';
import {Observable} from 'rxjs';
import {FcmService} from './fcm.service';
import {TokenService} from './token.service';

@Injectable({
    providedIn: 'root'
})
export class FcmNativeService implements FcmService {

    constructor(
        private platform: Platform,
        private firebase: FirebaseX,
        private tokenService: TokenService) {
    }

    async subscribe(): Promise<void> {
        await this.platform.ready();

        let token: string;
        if (this.platform.is('android')) {
            token = await this.firebase.getToken();
        } else if (this.platform.is('ios')) {
            token = await this.firebase.getToken();
            await this.firebase.grantPermission();
        }
        console.log(`The token is ${token}`);

        return this.saveToken(token);
    }

    async hasPermission(): Promise<boolean> {
        await this.platform.ready();

        return await this.firebase.hasPermission();
    }

    private async saveToken(token): Promise<void> {
        if (!token) {
            return;
        }

        return this.tokenService.saveDeviceToken(token);
    }

    listenToNotifications(): Observable<any> {
        return this.firebase.onMessageReceived();
    }
}
