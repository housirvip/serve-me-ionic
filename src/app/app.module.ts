import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BaseInterceptor} from './core/base-interceptor';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FingerprintAIO} from '@ionic-native/fingerprint-aio/ngx';
import {FirebaseX} from '@ionic-native/firebase-x/ngx';

import {SlideMenuModule} from './slide-menu/slide-menu.module';

import {FirebaseUIModule, firebase, firebaseui} from 'firebaseui-angular';


import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {environment} from '../environments/environment';

const firebaseUiAuthConfig: firebaseui.auth.Config = {
    signInFlow: 'popup',
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        // {
        //     scopes: [
        //         'public_profile',
        //         'email',
        //         'user_likes',
        //         'user_friends'
        //     ],
        //     customParameters: {
        //         auth_type: 'reauthenticate'
        //     },
        //     provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID
        // },
        // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        // firebase.auth.GithubAuthProvider.PROVIDER_ID,
        // {
        //     requireDisplayName: false,
        //     provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
        // },
        // firebase.auth.PhoneAuthProvider.PROVIDER_ID,
        // firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
    ],
    tosUrl: '/settings',
    privacyPolicyUrl: '<your-privacyPolicyUrl-link>',
    credentialHelper: firebaseui.auth.CredentialHelper.NONE
};



@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        HttpClientModule,
        SlideMenuModule,
        AngularFireAuthModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        FirebaseUIModule.forRoot(firebaseUiAuthConfig)
    ],
    providers: [
        StatusBar,
        SplashScreen,
        FingerprintAIO,
        FirebaseX,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
        {provide: HTTP_INTERCEPTORS, useClass: BaseInterceptor, multi: true},
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
