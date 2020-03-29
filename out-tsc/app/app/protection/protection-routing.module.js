import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProtectionPage } from './protection.page';
const routes = [
    {
        path: '',
        component: ProtectionPage
    }
];
let ProtectionPageRoutingModule = class ProtectionPageRoutingModule {
};
ProtectionPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], ProtectionPageRoutingModule);
export { ProtectionPageRoutingModule };
//# sourceMappingURL=protection-routing.module.js.map