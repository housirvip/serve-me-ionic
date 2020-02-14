import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {FirebaseService} from '../services/firebase.service';

import { Platform } from '@ionic/angular';

@Component({
    selector: 'app-tabs',
    templateUrl: 'tabs.page.html',
    styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

    constructor(private userService: UserService,
                private firebaseService: FirebaseService) {
    }


    ngOnInit(): void {
        this.userService.getUser();
        this.firebaseService.notifyToUpdate();
    }
}
