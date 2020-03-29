import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { VolunteerPageRoutingModule } from './volunteer-routing.module';
import { VolunteerPage } from './volunteer.page';
let VolunteerPageModule = class VolunteerPageModule {
};
VolunteerPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            VolunteerPageRoutingModule
        ],
        declarations: [VolunteerPage]
    })
], VolunteerPageModule);
export { VolunteerPageModule };
//# sourceMappingURL=volunteer.module.js.map