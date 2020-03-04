import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {FilterService} from '../../services/filter.service';
import {VendorCategory} from '../../classes/vendor-category';
import {VendorGender} from '../../classes/vendor-gender';

@Component({
    selector: 'app-type',
    templateUrl: './type.page.html',
    styleUrls: ['./type.page.scss'],
})
export class TypePage implements OnInit {

    private gender: VendorGender;
    private type: VendorCategory;
    vendorCategory: string[];

    get vendorgender() {
        return VendorGender;
    }

    // get vendortype() {
    //     return vendorCategory;
    // }

    constructor(public modalController: ModalController,
                private filterService: FilterService) {
        this.type = VendorCategory.Appliances;
        this.gender = VendorGender.whatever;
        this.vendorCategory = [];
        // tslint:disable-next-line:forin
        for (const type in VendorCategory) {
            this.vendorCategory.push(type);
        }
    }

    ngOnInit() {
    }


    onGenderChange(event) {
        this.gender = event.target.value as VendorGender;
    }

    onTypeChange(event) {
        this.type = event.target.value as VendorCategory;
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
