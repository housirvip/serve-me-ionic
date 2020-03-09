import {Injectable} from '@angular/core';
import {LoadingController} from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class LoadingService {
    loading: HTMLIonLoadingElement;

    constructor(private loadingController: LoadingController) {
        this.loading = null;
    }

    async present() {
        if (this.loading) {
            // if loading is already showing, dismiss it before create a new one
            await this.dismiss();
        }
        this.loading = await this.loadingController.create({
            duration: 2500,
            message: 'Please wait',
        });
        await this.loading.present();
    }

    async dismiss() {
        await this.loading.dismiss();
    }
}
