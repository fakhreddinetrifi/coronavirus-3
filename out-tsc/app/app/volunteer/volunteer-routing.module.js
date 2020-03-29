import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VolunteerPage } from './volunteer.page';
const routes = [
    {
        path: '',
        component: VolunteerPage
    }
];
let VolunteerPageRoutingModule = class VolunteerPageRoutingModule {
};
VolunteerPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], VolunteerPageRoutingModule);
export { VolunteerPageRoutingModule };
//# sourceMappingURL=volunteer-routing.module.js.map