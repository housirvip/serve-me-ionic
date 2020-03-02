import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-new-request',
  templateUrl: './new-request.page.html',
  styleUrls: ['./new-request.page.scss'],
})
export class NewRequestPage implements OnInit {
  get WorkTypeList() {
    return null;
  }
  updateAddressForm = this.formBuilder.group({
    discription: ['', [Validators.required, Validators.maxLength(10)]],
  });

  get discription() {
    return this.updateAddressForm.get('name');
  }
  public errorMessages = {
    discription: [
      {type: 'required', message: 'Name is required'},
      {type: 'maxlength', message: 'name should be shoter than 50 characters'}
  ]
  };


  constructor(private modalController: ModalController,
              private formBuilder: FormBuilder) {
    console.log(this.WorkTypeList);
  }
  ngOnInit() {
  }

  saved() {
  }
}
