import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { CoronaServService } from '../service/corona-serv.service';
let VolunteerPage = class VolunteerPage {
    constructor(callNumber, coronaServ) {
        this.callNumber = callNumber;
        this.coronaServ = coronaServ;
        coronaServ.getVolunteer().valueChanges().subscribe(data => {
            this.volunteers = data;
        });
    }
    ngOnInit() {
    }
    call(num) {
        this.callNumber.callNumber(num, true)
            .then(res => console.log('Launched dialer!', res))
            .catch(err => console.log('Error launching dialer', err));
    }
};
VolunteerPage = tslib_1.__decorate([
    Component({
        selector: 'app-volunteer',
        templateUrl: './volunteer.page.html',
        styleUrls: ['./volunteer.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [CallNumber, CoronaServService])
], VolunteerPage);
export { VolunteerPage };
//# sourceMappingURL=volunteer.page.js.map