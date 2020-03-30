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

@Component({
  selector: "app-dashboard",
  templateUrl: "dashboard.page.html",
  styleUrls: ["dashboard.page.scss"]
})
export class DashboardPage implements OnInit {
    vendorRequest: VendorRequest;

    constructor(private modalController: ModalController,
                private toastService: ToastService,
                private vendorService: VendorService,
                private filterService: FilterService) {
        this.vendorRequest = new VendorRequest();
        // plz review VendorRequest, there shows some specification
    }

    get vendors() {
        return this.vendorService.vendors;
    }

    ngOnInit() {
        this.vendorService.getVendors(this.vendorRequest);
    }

  ngOnInit() {
    // this.filterService.getVendorList();
    this.serviceProviderView = this.userService.isVendorViewEnabled(); //comment for testing
    //this.serviceProviderView = true; //uncomment for testing so there's no need to toggle on
    console.log(
      "serviceProviderView in Dashboard Page: ",
      this.serviceProviderView
    );
    // TODO: uncomment this when venodor registration completes
    // this.vendor_id = this.userService.vendor.id;
    this.vendor_id = 342; //for testing purposes - Javier's id
    this.current_tab = "available";
    this.getOrders();
  }

  getOrders() {
    this.loadingService.present();
    this.orderService.getOrders().subscribe(res => {
      console.log(res.result);
      this.loadingService.dismiss();
      if (res.code !== 0) {
        this.orders = [];
        return;
      }
      this.orders = res.result;
      //retrieve orders with bidding status
      this.orders = this.orders.filter(x => x.status == OrderStatus.Biding);
      if (this.current_tab == "bidding")
        this.orders = this.orders.filter(x =>
          x.bids.some(b => b.uid == this.vendor_id)
        );
      console.log("Order count:", this.orders.length);
      //iterate through orders and update imgUrl based on 'category', best bid and time
      this.orders.forEach(order => {
        order.time_str = moment(order.time).format("MM/DD - HH:mm");
        if (order.bids) {
          const bids = new linq.List(order.bids);
          order.best_bid = bids.any() ? bids.min(x => x.price) : 0;
        } else {
          order.best_bid = 0;
        }
        order.imgUrl = this.orderService.getImageUrl(order);
      });
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
    const bids = new linq.List(order.bids);
    const best_bid = bids.min(x => x.price);
    return best_bid.toString();
  }

  stringify_time(order: Order): string {
    return moment(order.time).format("MM/DD - HH:mm");
  }

  segmentChanged(ev: any) {
    this.current_tab = ev.detail.value;
    this.getOrders();
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

  doRefresh(event) {
    setTimeout(() => {
      this.toastService.presentToast("updated", 2000).then(() => {
        this.getOrders();
      });
      this.serviceProviderView = this.userService.isVendorViewEnabled();
      event.target.complete();
    }, 1000);
  }

  doSearch(event) {
    this.toastService
      .presentToast("your input: " + event.target.value, 2000)
      .then(() => {});
  }

  // getOrders(status: OrderStatus) {
  //   this.orders = this.orderService.getHarCodeOrders(status);
  // }

  // segmentChanged(ev: any) {
  //   this.getOrders(ev.detail.value as OrderStatus);
  //   console.log("switched to tab: ", ev.detail.value);
  // }

  async orderDetailsModal(ev: any, order: Order) {
    const modal = await this.modalController.create({
      component: OrderDetailsPage,
      componentProps: {
        order
      }
    });
    await modal.present();
    modal.onWillDismiss().then(result => {
      this.doRefresh(ev);
    });
    return;
  }
}
