import {Component, OnInit} from '@angular/core';
import {VersionService} from '../services/version.service';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.page.html',
    styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

    constructor(private versionService: VersionService) {
    }

    ngOnInit() {
    }

    appUpdate() {
        this.versionService.checkAppUpdate();
    }
}
