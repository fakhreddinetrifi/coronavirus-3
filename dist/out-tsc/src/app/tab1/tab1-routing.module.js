import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Tab1Page } from './tab1.page';
const routes = [
    {
        path: '',
        component: Tab1Page
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], Tab1PageRoutingModule);
export { Tab1PageRoutingModule };
//# sourceMappingURL=tab1-routing.module.js.map