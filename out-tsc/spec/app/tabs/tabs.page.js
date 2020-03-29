import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';
let TabsPage = class TabsPage {
    constructor(network) {
        this.network = network;
        this.network.onDisconnect().subscribe(() => {
            alert('You must connect on internet');
        });
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
    tslib_1.__metadata("design:paramtypes", [Network])
], TabsPage);
export { TabsPage };
//# sourceMappingURL=tabs.page.js.map