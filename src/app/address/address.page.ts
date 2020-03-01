import { Component, OnInit } from '@angular/core';
import {AddressService} from '../services/address.service';
import {Address} from '../classes/address';
import {UserService} from '../services/user.service';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
})
export class AddressPage implements OnInit {

  get AddresList() {
    return this.addressService.currentAddressList;
  }
  constructor(private addressService: AddressService,
              private userService: UserService,
              private afAuth: AngularFireAuth) { }
  ngOnInit() {
     console.log(this.afAuth.auth.currentUser);
     this.userService.user ? this.addressService.getAddress(this.userService.user.id) :
         console.log('error no user,please enter this page again');
  }

}
