import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
let AppComponent = class AppComponent {
    constructor(platform) {
        this.platform = platform;
        this.initializeApp();
    }
    initializeApp() {
        this.platform.ready().then(() => {
        });
    }
};
AppComponent = tslib_1.__decorate([
    Component({
        selector: 'app-root',
        templateUrl: 'app.component.html',
        styleUrls: ['app.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [Platform])
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map