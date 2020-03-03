import { Injectable } from '@angular/core';
import {LoadingController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  loading: HTMLIonLoadingElement;
  constructor(private loadingController: LoadingController ) { }

  async present() {


      this.loading = await this.loadingController.create({
        duration: 5000,
        message: 'please waiting',
      });
      await this.loading.present();
  }

  async dismiss() {
      await this.loading.dismiss();
  }
}
