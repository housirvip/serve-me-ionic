import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {FilterService} from '../../services/filter.service';
import {VendorCategory} from '../../classes/vendor-category';
import {VendorGender} from '../../classes/vendor-gender';
import {VendorRequest} from '../../classes/spec/vendor-request';
import {VendorService} from '../../services/vendor.service';

@Component({
    selector: 'app-type',
    templateUrl: './type.page.html',
    styleUrls: ['./type.page.scss'],
})
export class TypePage implements OnInit {
    vendorRequest: VendorRequest;
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
                private filterService: FilterService,
                private vendorService: VendorService) {
        this.vendorRequest = new VendorRequest();
        this.type = VendorCategory.Appliances;
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
        this.filterService.type = this.type;
        this.filterService._typeFilled = true;
        console.log(this.filterService.vendorRequestFactory());
        this.vendorService.getVendors(this.filterService.vendorRequestFactory());
        this.dismiss();
    }
}
