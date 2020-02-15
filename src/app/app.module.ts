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
import {RegisterPageModule} from './register/register.module';
import {LoginPageModule} from './login/login.module';
import {SlideMenuComponent} from './slide-menu/slide-menu.component';


@NgModule({
    declarations: [
        AppComponent,
        SlideMenuComponent,
    ],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        HttpClientModule,
        LoginPageModule,
        RegisterPageModule,
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
