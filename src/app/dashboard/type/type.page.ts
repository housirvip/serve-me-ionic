import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {vendorgender, vendortype} from '../../classes/vendor';
import {FilterService} from '../../services/filter.service';

@Component({
  selector: 'app-type',
  templateUrl: './type.page.html',
  styleUrls: ['./type.page.scss'],
})
export class TypePage implements OnInit {

  private gender: vendorgender;
  private type: vendortype;
  get vendorgender() { return vendorgender; }
  get vendortype() { return vendortype; }

  constructor(public modalController: ModalController,
              private filterService: FilterService) {
    this.type = vendortype.whatever;
    this.gender = vendorgender.whatever;
  }
  ngOnInit() {
  }

  submit() {
    this.filterService.gender = this.gender;
    this.filterService.type = this.type;
    this.filterService._typeFilled = true;
    this.dismiss();
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

}
