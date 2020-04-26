import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {FilterService} from '../../services/filter.service';
import {VendorService} from '../../services/vendor.service';

@Component({
    selector: 'app-sort',
    templateUrl: './sort.page.html',
    styleUrls: ['./sort.page.scss'],
})
export class SortPage implements OnInit {
  public pricedesc: boolean;
  public ratedesc: boolean;

    constructor(private modalController: ModalController,
                private filterService: FilterService,
                private vendorService: VendorService) {
      console.log(filterService);
      this.pricedesc = this.filterService.pricedesc;
      this.ratedesc = this.filterService.ratedesc;
    }
    ngOnInit() {

    }

    dismiss() {
        this.modalController.dismiss({
            dismissed: true
        }).then(() => {
        });
    }

  selecedChanged(event) {
      //  console.log(event.detail);
        this.filterService.rateOrderFilled = false;
        this.filterService.priceOrderFilled = false;
        switch (event.detail.value) {
          case  'priceAsce' :  this.filterService.priceOrderFilled = true; this.filterService.pricedesc = false; break;
          case  'priceDesc' :   this.filterService.priceOrderFilled = true; this.filterService.pricedesc = true; break;
          case  'rateAsce' :   this.filterService.rateOrderFilled = true; this.filterService.ratedesc = false; break;
          case  'rateDesc' :   this.filterService.rateOrderFilled = true; this.filterService.ratedesc = true; break;
         }
    //    console.log(this.filterService);
    }


    submit() {
       // console.log(this.filterService.vendorRequestFactory());
        this.vendorService.getVendors(this.filterService.vendorRequestFactory());
        this.dismiss();
    }

}
