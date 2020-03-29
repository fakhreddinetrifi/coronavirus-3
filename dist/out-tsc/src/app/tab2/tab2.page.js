import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CoronaServService } from '../service/corona-serv.service';
import { LoadingController } from '@ionic/angular';
import { CovidService } from './covid.service';
import { ModalController } from '@ionic/angular';
import { DetailsPage } from '../details/details.page';
let Tab2Page = class Tab2Page {
    constructor(coronaServ, loadingCtrl, covidServ, modalController) {
        this.coronaServ = coronaServ;
        this.loadingCtrl = loadingCtrl;
        this.covidServ = covidServ;
        this.modalController = modalController;
        this.info = null;
        this.countries = [];
    }
    ngOnInit() {
        this.presentLoading().then(() => {
            this.coronaServ.getCountries().subscribe(data => {
                this.info = data;
            }, error1 => console.log(error1), () => this.loadingCtrl.dismiss());
        });
    }
    presentLoading() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: 'Please wait...'
            });
            yield loading.present();
        });
    }
    presentModal(id, cases, deaths, recovered) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: DetailsPage,
                componentProps: {
                    coronaDetailConfirmed: id,
                    infoCases: cases,
                    infoDeaths: deaths,
                    infoRecovered: recovered
                }
            });
            return yield modal.present();
        });
    }
    doRefresh(event) {
        console.log('Begin async operation');
        setTimeout(() => {
            console.log('Async operation has ended');
            event.target.complete();
        }, 2000);
    }
};
Tab2Page = tslib_1.__decorate([
    Component({
        selector: 'app-tab2',
        templateUrl: 'tab2.page.html',
        styleUrls: ['tab2.page.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [CoronaServService, LoadingController, CovidService, ModalController])
], Tab2Page);
export { Tab2Page };
//# sourceMappingURL=tab2.page.js.map