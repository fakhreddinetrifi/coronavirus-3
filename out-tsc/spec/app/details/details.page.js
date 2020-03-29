import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { CovidService } from '../tab2/covid.service';
import { ModalController } from '@ionic/angular';
import { Chart } from 'chart.js';
let DetailsPage = class DetailsPage {
    constructor(covidServ, modalCtrl) {
        this.covidServ = covidServ;
        this.modalCtrl = modalCtrl;
        this.date = [];
        this.val = [];
        this.death = [];
    }
    ngOnInit() {
        this.covidServ.getHistoryCountry(this.coronaDetailConfirmed).subscribe(data => {
            this.info = data;
            Object.entries(this.info.timeline.cases).map(([type, value]) => ({ type, value })).forEach(value => {
                this.date.push(value.type);
                this.val.push(value.value);
            });
            Object.entries(this.info.timeline.deaths).map(([type, value]) => ({ type, value })).forEach(value => {
                this.death.push(value.value);
            });
            this.chartConfirmed(this.date, this.val, this.death);
        });
        console.log('cases' + this.infoCases);
        console.log('deaths' + this.infoDeaths);
        console.log('recovered' + this.infoRecovered);
    }
    closeModal() {
        this.modalCtrl.dismiss();
    }
    chartConfirmed(labels, data, death) {
        this.bars = new Chart(this.barChart.nativeElement, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                        label: 'Cases confirmed',
                        data: data,
                        backgroundColor: 'rgba(0,0,0,0)',
                        borderColor: 'rgb(194,0,0)',
                        borderWidth: 1
                    },
                    {
                        label: 'Deaths',
                        data: death,
                        backgroundColor: 'rgba(0,0,0,0)',
                        borderColor: 'rgb(0,0,0)',
                        borderWidth: 1
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: true,
                                min: 0,
                                stepSize: 100
                            }
                        }]
                }
            }
        });
    }
    ionViewDidEnter() {
        this.pieCharts();
    }
    pieCharts() {
        this.pieChart = new Chart(this.pie.nativeElement, {
            type: 'pie',
            data: {
                labels: ['Cases Confirmed', 'Deaths', 'Recovered'],
                datasets: [
                    {
                        label: '# of Votes',
                        data: [this.infoCases, this.infoDeaths, this.infoRecovered],
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
};
tslib_1.__decorate([
    ViewChild('barChart', { static: false }),
    tslib_1.__metadata("design:type", Object)
], DetailsPage.prototype, "barChart", void 0);
tslib_1.__decorate([
    ViewChild('pie', { static: false }),
    tslib_1.__metadata("design:type", Object)
], DetailsPage.prototype, "pie", void 0);
DetailsPage = tslib_1.__decorate([
    Component({
        selector: 'app-details',
        templateUrl: './details.page.html',
        styleUrls: ['./details.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [CovidService, ModalController])
], DetailsPage);
export { DetailsPage };
//# sourceMappingURL=details.page.js.map