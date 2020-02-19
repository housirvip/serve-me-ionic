import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {VendorGender, VendorType} from '../../classes/vendor';
import {FilterService} from '../../services/filter.service';

@Component({
  selector: 'app-type',
  templateUrl: './type.page.html',
  styleUrls: ['./type.page.scss'],
})
export class TypePage implements OnInit {

  private gender: VendorGender;
  private type: VendorType;
  get vendorgender() { return VendorGender; }
  get vendortype() { return VendorType; }

  constructor(public modalController: ModalController,
              private filterService: FilterService) {
    this.type = VendorType.whatever;
    this.gender = VendorGender.whatever;
  }
  ngOnInit() {
  }


  onGenderChange(event) {
    // tslint:disable-next-line:radix
    this.gender = parseInt(event.target.value);
  }

    onTypeChange(event) {
      // tslint:disable-next-line:radix
      this.type = parseInt(event.target.value);
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true
    }).then(() => {
    });
  }

  submit() {
    this.filterService.gender = this.gender;
    this.filterService.type = this.type;
    this.filterService._typeFilled = true;

    // refresh VendorList
    this.filterService.getVendorList();
    this.dismiss();
  }




}
