import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppUpdate} from '@ionic-native/app-update/ngx';
import {environment} from '../../environments/environment';
import {ToastService} from './toast.service';

@Injectable({
    providedIn: 'root'
})
export class VersionService {
    set shouldCheck(value: boolean) {
        localStorage.setItem('shouldCheck', String(value));
        this._shouldCheck = value;
    }

    get shouldCheck(): boolean {
        return this._shouldCheck;
    }

    get shouldUpdate(): boolean {
        return this._shouldUpdate;
    }

    private version: number;
    private name: number;
    private updateUrl: string;

    // tslint:disable-next-line:variable-name
    private _shouldUpdate: boolean;
    // tslint:disable-next-line:variable-name
    private _shouldCheck: boolean;

    constructor(private http: HttpClient,
                private toastService: ToastService,
                private appUpdate: AppUpdate) {
        this._shouldUpdate = false;
        this.updateUrl = environment.apiUrl + 'version';

        this._shouldCheck = Boolean(localStorage.getItem('shouldCheck'));
        if (this._shouldCheck) {
            this.checkAppUpdate()
        }
    }

    checkAppUpdate() {
        this.appUpdate.checkAppUpdate(this.updateUrl).then(res => {
            console.log(res);
            if (res.code === RspCode.VERSION_NEED_UPDATE) {
                this._shouldUpdate = true;
            }
            this.toastService.presentToast(res.msg, 2000).then();
        });
    }
}

enum RspCode {
    VERSION_NEED_UPDATE = 201,
    VERSION_UP_TO_UPDATE = 202,
    VERSION_UPDATING = 203,

    VERSION_RESOLVE_FAIL = 301,
    VERSION_COMPARE_FAIL = 302,
}
