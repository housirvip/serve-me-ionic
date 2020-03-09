import {Injectable} from '@angular/core';
import {AngularFireMessaging} from '@angular/fire/messaging';
import {first} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {FcmService} from './fcm.service';
import {TokenService} from './token.service';

@Injectable({
    providedIn: 'root'
})
export class FcmWebService implements FcmService {

    constructor(
        private afMessaging: AngularFireMessaging,
        private tokenService: TokenService) {
    }

    async subscribe() {
        let token: string;
        try {
            token = await this.afMessaging.requestToken.pipe(first()).toPromise();
        } catch (err) {
            console.error('Can not get push token: ', err);
            /*
             * temporary workaround
             * https://github.com/firebase/firebase-js-sdk/issues/2364#issuecomment-570820017
             */
            if (err.code === 'messaging/token-unsubscribe-failed') {
                this.subscribe();
            }
        }

        return this.saveToken(token);
    }

    private async saveToken(token): Promise<void> {
        if (!token) {
            return;
        }

        return this.tokenService.saveWebToken(token);
    }

    public listenToNotifications(): Observable<any> {
        return this.afMessaging.messages;
    }
}
