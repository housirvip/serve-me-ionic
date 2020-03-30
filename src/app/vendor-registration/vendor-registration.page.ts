import { Component, OnInit } from "@angular/core";
import { ToastService } from "../services/toast.service";
import { UpdateaddressPage } from "../address/updateaddress/updateaddress.page";
import { UserService } from "../services/user.service";
import { FilterService } from "../services/filter.service";
import { Router } from "@angular/router";
import { MenuController, ModalController } from "@ionic/angular";
import { AngularFireAuth } from "@angular/fire/auth";
import { AddressService } from "../services/address.service";
import { ShowAddressPage } from "../new-request/show-address/show-address.page";
import { Address } from "../classes/address";
import { VendorCategory } from "../classes/vendor-category";
import { Vendor } from "../classes/vendor";
import { VendorService } from "../services/vendor.service";
import { LoadingService } from "../services/loading.service";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-VendorRegistration",
  templateUrl: "./vendor-registration.page.html",
  styleUrls: ["./vendor-registration.page.scss"]
})
export class VendorRegistrationPage implements OnInit {
  selectedAddress: Address;
  private type: VendorCategory;
  vendorCategory: string[];
  private currentVendor: Vendor;
  private availableDate: string[];

  vendorRegistersForm = this.formBuilder.group({
    name: ["", [Validators.required, Validators.maxLength(20)]],
    price: ["", [Validators.required, Validators.pattern("[0-9]+\\.?[0-9]*")]],
    type: ["", [Validators.required, Validators.minLength(1)]],
    date: ["", [Validators.required, Validators.minLength(1)]]
  });

  ngOnInit(): void {
    this.addressService.getList();
  }

  constructor(
    private userService: UserService,
    private router: Router,
    private menu: MenuController,
    private toastService: ToastService,
    private afAuth: AngularFireAuth,
    private filterService: FilterService,
    private addressService: AddressService,
    private vendorService: VendorService,
    private loadingService: LoadingService,
    private formBuilder: FormBuilder,
    private modalController: ModalController
  ) {
    // this.type = VendorCategory.Appliances;
    this.vendorCategory = [];
    this.currentVendor = new Vendor();
    this.availableDate = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ];
    // tslint:disable-next-line:forin
    for (const type1 in VendorCategory) {
      this.vendorCategory.push(type1);
    }
  }

  async openShowAddress() {
    if (!this.addressService.addresses.length) {
      const newAddressModel = await this.modalController.create({
        component: UpdateaddressPage
      });
      newAddressModel.onDidDismiss().then(data => {
        if (data.data.address.name) {
          console.log("current address");
          console.log(this.addressService.currentAddress);
          this.selectedAddress = this.addressService.currentAddress;
        }
        this.currentVendor.address = this.selectedAddress;
      });
      return await newAddressModel.present();
    } else {
      const modal = await this.modalController.create({
        component: ShowAddressPage,
        cssClass: "my-custom-modal-css"
      });
      modal.onDidDismiss().then((data: any) => {
        this.selectedAddress = data.data
          ? data.data.address
          : this.selectedAddress;
        console.log(this.selectedAddress);
        this.currentVendor.address = this.selectedAddress;
      });
      return await modal.present();
    }

    this.currentVendor.address = this.selectedAddress;
    console.log(this.currentVendor.address);
  }

  onTypeChange(event) {
    // this.type = event.target.value as VendorCategory;
    // console.log(this.type);
    this.currentVendor.categories = event.target.value;
  }

  onDateChange(event) {
    // this.type = event.target.value as VendorCategory;
    console.log(event.target.value);
  }

  onNameChange(event) {
    this.currentVendor.name = event.target.value;
    // console.log(this.currentVendor.name);
  }

  async saved() {
    // const javatime = this.datePipe.transform(this.isoDate, 'yyyy-MM-dd hh:mm:ss');
    // console.log(javatime);
    // this.currentOrder.time = javatime;
    // console.log(this.selectedAddress);

    // this.loadingService.present();
    this.vendorService.newVendors(this.currentVendor);
    console.log(this.currentVendor);
    this.returnHome();
  }

  jump(path: string) {
    this.router.navigate([path]).then(() => {});
  }

  async returnHome() {
    this.jump("dashboard");
  }

  onPriceChange(event) {
    this.currentVendor.price = event.target.value;
    console.log(event.target.value);
  }
}
