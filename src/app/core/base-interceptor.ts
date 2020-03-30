import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserService} from '../services/user.service';
import {environment} from '../../environments/environment';
import {tap} from 'rxjs/operators';
import {BaseResponse} from './base-response';
import {ToastService} from '../services/toast.service';

@Injectable()
export class BaseInterceptor implements HttpInterceptor {

    private readonly baseUrl: string;

    constructor(private userService: UserService,
                private toastService: ToastService) {
        this.baseUrl = environment.apiUrl;
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!req.url.startsWith('http')) {
            req = req.clone({
                url: this.baseUrl + req.url,
                setHeaders: {Authorization: this.userService.jwt ? 'Bearer ' + this.userService.jwt : ''}
            });
        }
        return next.handle(req).pipe(
            tap(evt => {
                if (evt instanceof HttpResponse) {
                    if (evt.ok) {
                        const rsp = evt.body;
                        if (rsp.code && rsp.code !== 0) {
                            this.toastService.presentToast(rsp.message, 2000).then(() => {
                            });
                            throw new Error(rsp.message);
                        }
                    } else {
                        this.toastService.presentToast(evt.body, 2000).then(() => {
                        });
                    }
                }
            })
        );
    }
}
