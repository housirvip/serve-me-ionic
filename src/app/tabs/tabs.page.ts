import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';

import { Platform } from '@ionic/angular';
import {Router, RouterEvent} from '@angular/router';

@Component({
    selector: 'app-tabs',
    templateUrl: 'tabs.page.html',
    styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

    menuPages = [
        {
            title: 'settings',
            url: '/tabs/settings'
        }
    ];

    selectedMenuPath = '';

    constructor(private userService: UserService,
                private router: Router) {
        this.router.events.subscribe((event: RouterEvent) => {
            console.log('router event trigged:' + event.url);
            this.selectedMenuPath = event.url;
        });
    }


    ngOnInit(): void {
        this.userService.getUser();
    }
}
