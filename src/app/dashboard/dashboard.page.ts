import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {TypePage} from './type/type.page';
import {FilterService} from '../services/filter.service';
import {PricePage} from './price/price.page';
import {ToastService} from '../services/toast.service';
import {VendorResult} from '../classes/vendor-result';
import {VendorService} from '../services/vendor.service';
import {VendorRequest} from '../classes/spec/vendor-request';
import {Vendor} from '../classes/vendor';
import {SortPage} from './sort/sort.page';
import {NewRequestPage} from '../new-request/new-request.page';
import {Router} from '@angular/router';
import {Order} from '../classes/order';
// import {NewRequestSpecificVendorPage} from '../new-request-specific-vendor/new-request-specific-vendor.page';


@Component({
    selector: 'app-dashboard',
    templateUrl: 'dashboard.page.html',
    styleUrls: ['dashboard.page.scss']
})
export class DashboardPage implements OnInit {
    vendorRequest: VendorRequest;

    constructor(private modalController: ModalController,
                private toastService: ToastService,
                private router: Router,
                private vendorService: VendorService,
                private filterService: FilterService) {
        this.vendorRequest = new VendorRequest();
        console.log(this.filterService.type);
        console.log(this.filterService.minPrice);
        console.log(this.filterService.maxPrice);

        // plz review VendorRequest, there shows some specification
    }
    get pricedesc(): boolean {
        return this.filterService.pricedesc;
    }
    get ratedesc(): boolean {
        return this.filterService.ratedesc;
    }
    get vendors() {
        return this.vendorService.vendors;
    }
    get priceOrderFilled() {
        return this.filterService.priceOrderFilled;
        }
    get rateOrderFilled() {
        return this.filterService.rateOrderFilled;
    }

    ngOnInit() {
        this.vendorRequest.priceGte = this.filterService.minPrice ;
        this.vendorRequest.priceLte = this.filterService.maxPrice ;
        this.vendorService.getVendors(this.vendorRequest);
    }

    async typeModal() {
        const modal = await this.modalController.create({
            component: TypePage
        });
        return await modal.present();
    }

    async priceModal() {
        const modal = await this.modalController.create({
            component: PricePage
        });
        return await modal.present();
    }

    async sortModal() {
        const modal = await this.modalController.create({
            component: SortPage
        });
        return await modal.present();
    }

    async newRequest(request: Vendor) {
        this.vendorService.vendor = request;
        // console.log(this.orderService.currentOrder);
        this.jump('/new-request-specific-vendor');
    }

    jump(path: string) {
        this.router.navigate([path]).then(() => {
        });
    }

    doRefresh(event) {
        this.vendorService.getVendors(this.vendorRequest);
        setTimeout(() => {
            this.toastService.presentToast('updated', 2000).then(() => {
            });
            event.target.complete();
        }, 1000);
    }

    doSearch(event) {
        this.filterService.queryString =  event.target.value;

        this.vendorService.getVendors(this.filterService.vendorRequestFactory());
    }
}
