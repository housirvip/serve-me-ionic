import { Component, OnInit } from '@angular/core';
import {NavParams, PopoverController} from '@ionic/angular';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss'],
})
export class VerificationComponent implements OnInit {

  private ifVerificationRight: boolean;

  constructor(private popover: PopoverController,
              public navParams: NavParams) {
    this.ifVerificationRight = true;

  }


  ngOnInit() {}

  dismiss() {
    this.popover.dismiss();
  }

  verify() {
    this.ifVerificationRight = false;
  }


}
