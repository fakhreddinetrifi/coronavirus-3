import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';
import { MenuController } from '@ionic/angular';
let TabsPage = class TabsPage {
    constructor(network, menu) {
        this.network = network;
        this.menu = menu;
        this.selectedIndex = 0;
        this.appPages = [
            {
                title: 'Inbox',
                url: '/folder/Inbox',
                icon: 'mail'
            },
            {
                title: 'Outbox',
                url: '/folder/Outbox',
                icon: 'paper-plane'
            },
            {
                title: 'Favorites',
                url: '/folder/Favorites',
                icon: 'heart'
            },
            {
                title: 'Archived',
                url: '/folder/Archived',
                icon: 'archive'
            },
            {
                title: 'Trash',
                url: '/folder/Trash',
                icon: 'trash'
            },
            {
                title: 'Spam',
                url: '/folder/Spam',
                icon: 'warning'
            }
        ];
        this.labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
        this.network.onDisconnect().subscribe(() => {
            alert('You must connect on internet');
        });
    }
    openFirst() {
        this.menu.enable(true, 'first');
        this.menu.open('first');
    }
    ngOnInit() {
        const path = window.location.pathname.split('folder/')[1];
        if (path !== undefined) {
            this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
        }
    }
    ngOnDestroy() {
    }
};
TabsPage = tslib_1.__decorate([
    Component({
        selector: 'app-tabs',
        templateUrl: 'tabs.page.html',
        styleUrls: ['tabs.page.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [Network, MenuController])
], TabsPage);
export { TabsPage };
//# sourceMappingURL=tabs.page.js.map