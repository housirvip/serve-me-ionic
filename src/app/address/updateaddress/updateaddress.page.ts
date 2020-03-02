import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {Address} from '../../classes/address';
import {FormBuilder, Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-updateaddress',
  templateUrl: './updateaddress.page.html',
  styleUrls: ['./updateaddress.page.scss'],
})
export class UpdateaddressPage implements OnInit {
  updateAddressForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.maxLength(10)]],
    phone: ['', [Validators.required, Validators.pattern('^\\D?(\\d{3})\\D?\\D?(\\d{3})\\D?(\\d{4})$')]],
    city: ['', [Validators.required, Validators.maxLength(100)]],
    state: ['',  [Validators.required, Validators.maxLength(100)]],
    address2: ['',  [Validators.required, Validators.maxLength(100)]],
    zipcode: ['',  [Validators.required , Validators.pattern('^\\d{5}(?:[-\\s]\\d{4})?$')]],
  });

  get name() {
    return this.updateAddressForm.get('name');
  }
  get phone() {
    return this.updateAddressForm.get('phone');
  }
  get city() {
    return this.updateAddressForm.get('city');
  }
  get state() {
    return this.updateAddressForm.get('state');
  }
  get address2() {
    return this.updateAddressForm.get('address2');
  }
  get zipcode() {
    return this.updateAddressForm.get('zipcode');
  }
  public errorMessages = {
     name: [
       {type: 'required', message: 'Name is required'},
       {type: 'maxlength', message: 'name should be shoter than 50 characters'}
     ],
    phone: [
      {type: 'required', message: 'phone is required'},
      {type: 'pattern', message: 'Please enter a vaild phone number'}
    ],
    city: [
      {type: 'required', message: 'city is required'},
      {type: 'maxlength', message: 'name should be shoter than 50 characters'}
    ],
    state: [
      {type: 'required', message: 'state is required'},
      {type: 'maxlength', message: 'name should be shoter than 50 characters'}
    ],
    zipcode: [
      {type: 'required', message: 'zipcode is required'},
      {type: 'pattern', message: 'Please enter a vaild zip code'}
    ],
    address2: [
      {type: 'required', message: 'address2 is required'},
      {type: 'maxlength', message: 'name should be shoter than 100 characters'}
    ],
  };
  private newAddress: Address;
  private fullname: string;
  constructor(private modalController: ModalController,
              private formBuilder: FormBuilder) {
    this.newAddress = new Address();
  }
  ngOnInit() {
  }

  saved() {
    console.log(this.newAddress);
    this.dismiss();
  }
  dismiss() {
    this.modalController.dismiss({
      dismissed: true,
      address: this.newAddress
    }).then(() => {
    });
  }

}
