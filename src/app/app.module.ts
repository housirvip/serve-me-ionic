import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BaseInterceptor } from "./core/base-interceptor";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { FingerprintAIO } from "@ionic-native/fingerprint-aio/ngx";
import { FirebaseX } from "@ionic-native/firebase-x/ngx";

import { SlideMenuModule } from "./slide-menu/slide-menu.module";

import { AngularFireModule } from "@angular/fire";
import { environment } from "../environments/environment";
import { AngularFireMessagingModule } from "@angular/fire/messaging";
import { Camera } from "@ionic-native/camera/ngx";
//import { OrderDetailsPageModule } from "./orders/order-details/order-details.module";
import { DatePipe } from "@angular/common";
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    SlideMenuModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireMessagingModule
    //OrderDetailsPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FingerprintAIO,
    FirebaseX,
    Camera,
    DatePipe,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: BaseInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
