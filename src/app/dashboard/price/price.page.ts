import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {FilterService} from '../../services/filter.service';
import {VendorService} from '../../services/vendor.service';

@Component({
  selector: 'app-price',
  templateUrl: './price.page.html',
  styleUrls: ['./price.page.scss'],
})
export class PricePage implements OnInit {

  constructor(private modalController: ModalController,
              private filterService: FilterService,
              private vendorService: VendorService) {
    this.minPrice = 0;
    this.maxPrice = 0;
  }

  private minPrice: number;
  private  maxPrice: number;

  ngOnInit() {
  }
  dismiss() {
    this.modalController.dismiss({
      dismissed: true
    }).then(() => {
    });
  }
  onChange(event) {
    this.minPrice = event.detail.value.lower;
    this.maxPrice = event.detail.value.upper;


  }

  submit() {
    this.filterService.maxPrice = this.maxPrice;
    this.filterService.minPrice = this.minPrice;
    this.filterService._priceFilled = true;

    // refresh VendorList
    console.log(this.filterService.vendorRequestFactory());
    this.vendorService.getVendors(this.filterService.vendorRequestFactory());
    this.dismiss();
  }

}
