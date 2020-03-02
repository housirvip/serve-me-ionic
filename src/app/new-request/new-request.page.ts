import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ModalController} from '@ionic/angular';
import {UpdateaddressPage} from '../address/updateaddress/updateaddress.page';
import {ShowAddressPage} from './show-address/show-address.page';
import {AddressService} from '../services/address.service';




@Component({
  selector: 'app-new-request',
  templateUrl: './new-request.page.html',
  styleUrls: ['./new-request.page.scss'],
})
export class NewRequestPage implements OnInit {
  get WorkTypeList() {
    return null;
  }
    requestForm = this.formBuilder.group({
    discription: ['', [Validators.required, Validators.maxLength(10)]],
      title: ['', [Validators.required, Validators.maxLength(10)]],
      address: ['', [Validators.required]],
  });
  public errorMessages = {
    discription: [
      {type: 'required', message: 'Name is required'},
      {type: 'maxlength', message: 'name should be shoter than 50 characters'}
  ]
  };


  constructor(private modalController: ModalController,
              private formBuilder: FormBuilder,
              private addressService: AddressService) {
    console.log(this.WorkTypeList);
  }
  ngOnInit() {
  }


  async openShowaddress() {
    const modal = await this.modalController.create({
      component: ShowAddressPage,
      cssClass: 'my-custom-modal-css'
    });
    // @ts-ignore
    modal.onDidDismiss().then((data) => {
      console.log('dissmisss');
      console.log(data);
    });
    return await modal.present();
  }

  saved() {
  }
}
