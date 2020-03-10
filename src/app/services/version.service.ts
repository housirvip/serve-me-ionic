import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppUpdate} from '@ionic-native/app-update/ngx';
import {environment} from '../../environments/environment';
import {ToastService} from './toast.service';

@Injectable({
    providedIn: 'root'
})
export class VersionService {
    get shouldUpdate(): boolean {
        return this._shouldUpdate;
    }

    private version: number;
    private name: number;
    private updateUrl: string;

    // tslint:disable-next-line:variable-name
    private _shouldUpdate: boolean;

    constructor(private http: HttpClient,
                private toastService: ToastService,
                private appUpdate: AppUpdate) {
        this._shouldUpdate = false;
        this.updateUrl = environment.apiUrl + 'version';
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
