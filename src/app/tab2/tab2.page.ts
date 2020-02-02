import {Component} from '@angular/core';
import {AlertController} from '@ionic/angular';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
    items: any[];

    constructor(private alertController: AlertController) {
        this.items = [{key: 'qwe0', value: 'qweqweqweqwe'}];
        for (let i = 1; i < 6; i++) {
            this.items.push({key: 'qwe' + i, value: 'asdasdasdasd'});
        }
    }

    doRefresh(event) {
        setTimeout(() => {
            this.items.push({key: '123', value: '123123123'});
            event.target.complete();
        }, 1000);
    }

    async read(item: any) {
        const alert = await this.alertController.create({
            header: item.key,
            // subHeader: 'Subtitle',
            message: item.value,
            buttons: ['OK']
        });

        await alert.present();
    }
}
