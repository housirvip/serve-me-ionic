import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Platform} from '@ionic/angular';
import {AngularFireMessaging} from '@angular/fire/messaging';
import {FirebaseX} from '@ionic-native/firebase-x/ngx';
import {FcmNativeService} from './fcm-native.service';
import {FcmWebService} from './fcm-web.service';
import {TokenService} from './token.service';

const fcmFactory = (
    platform: Platform,
    afMessaging: AngularFireMessaging,
    tokenService: TokenService,
    fbX: FirebaseX
) => {
    console.log('Platform is cordova? ', platform.is('cordova'));
    if (platform.is('cordova')) {
        return new FcmNativeService(platform, fbX, tokenService);
    } else {
        return new FcmWebService(afMessaging, tokenService);
    }
};

@Injectable({
    providedIn: 'root'
})
export abstract class FcmService {
    abstract subscribe(): Promise<void>;

    abstract listenToNotifications(): Observable<any>;
}

export const FcmServiceProvider = {
    provide: FcmService,
    useFactory: fcmFactory,
    deps: [Platform, AngularFireMessaging, TokenService, FirebaseX]
};
