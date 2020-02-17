import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-price',
  templateUrl: './price.page.html',
  styleUrls: ['./price.page.scss'],
})
export class PricePage implements OnInit {

  constructor(private modalController: ModalController) {
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


    this.dismiss();
  }

}
