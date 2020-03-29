import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { CoronaServService } from '../service/corona-serv.service';
import { LoadingController } from '@ionic/angular';
import { Chart } from 'chart.js';
let Tab1Page = class Tab1Page {
    constructor(coronaServ, loadingCtrl) {
        this.coronaServ = coronaServ;
        this.loadingCtrl = loadingCtrl;
        this.info = null;
    }
    ngOnInit() {
        this.presentLoading().then(() => {
            this.coronaServ.getAll().subscribe(data => {
                this.info = data;
                this.createBarChart(this.info);
                this.loadingCtrl.dismiss();
            }, error1 => console.log(error1), () => this.loadingCtrl.dismiss());
        });
    }
    createBarChart(info) {
        this.bars = new Chart(this.barChart.nativeElement, {
            type: 'doughnut',
            data: {
                labels: ['Cases Confirmed', 'Deaths', 'Recovered'],
                datasets: [
                    {
                        label: '# of Votes',
                        data: [info.cases, info.deaths, info.recovered],
                        backgroundColor: [
                            'rgba(194,0,0)',
                            'rgba(0,0,0)',
                            'rgba(0,164,91)',
                        ]
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
            }
        });
    }
    doRefresh(event) {
        console.log('Begin async operation');
        setTimeout(() => {
            console.log('Async operation has ended');
            event.target.complete();
        }, 2000);
    }
    presentLoading() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: 'Please wait...'
            });
            yield loading.present();
        });
    }
};
tslib_1.__decorate([
    ViewChild('barChart', { static: false }),
    tslib_1.__metadata("design:type", Object)
], Tab1Page.prototype, "barChart", void 0);
Tab1Page = tslib_1.__decorate([
    Component({
        selector: 'app-tab1',
        templateUrl: 'tab1.page.html',
        styleUrls: ['tab1.page.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [CoronaServService, LoadingController])
], Tab1Page);
export { Tab1Page };
//# sourceMappingURL=tab1.page.js.map