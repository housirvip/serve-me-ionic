import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserService} from '../services/user.service';
import {environment} from '../../environments/environment';
import {tap} from 'rxjs/operators';
import {BaseResponse} from './base-response';
import {ToastController} from '@ionic/angular';

@Injectable()
export class BaseInterceptor implements HttpInterceptor {

    private readonly baseUrl: string;

    constructor(private userService: UserService,
                private toastController: ToastController) {
        this.baseUrl = environment.apiUrl;
    }

    async presentToast(msg: string) {
        const toast = await this.toastController.create({
            message: msg,
            duration: 2000
        });
        return await toast.present();
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!req.url.startsWith('http')) {
            req = req.clone({
                url: this.baseUrl + req.url,
                setHeaders: {Authorization: 'Bearer ' + this.userService.jwt}
            });
        }
        return next.handle(req).pipe(
            tap(evt => {
                if (evt instanceof HttpResponse) {
                    if (evt.ok) {
                        const rsp = evt.body as BaseResponse;
                        if (rsp.code !== 0) {
                            this.presentToast(rsp.message).then(() => {
                            });
                        }
                    } else {
                        this.presentToast(evt.body).then(() => {
                        });
                    }
                }
                // console.log(evt);
            })
        );
    }
}
