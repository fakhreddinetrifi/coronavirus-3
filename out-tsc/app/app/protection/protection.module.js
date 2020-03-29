import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProtectionPageRoutingModule } from './protection-routing.module';
import { ProtectionPage } from './protection.page';
let ProtectionPageModule = class ProtectionPageModule {
};
ProtectionPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            ProtectionPageRoutingModule
        ],
        declarations: [ProtectionPage]
    })
], ProtectionPageModule);
export { ProtectionPageModule };
//# sourceMappingURL=protection.module.js.map