(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      {{info?.country | titlecase}}\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content\r\n            pullingIcon=\"arrow-dropdown\"\r\n            refreshingSpinner=\"circles\"\r\n            refreshingText=\"Refreshing...\"\r\n            close-duration=\"2000ms\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-title>\r\n        <ion-text color=\"danger\">Cases Confirmed: </ion-text> {{info?.cases | number}}\r\n      </ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <p>Today Cases: {{info?.todayCases}}</p>\r\n      <p><span style=\"color: #3171e0;\">Active: </span>{{info?.active}}</p>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-card-header>\r\n\r\n      <ion-card-title>\r\n        Deaths: {{info?.deaths | number}}\r\n      </ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <p>Today Deaths: {{info?.todayDeaths}}</p>\r\n      <p><span style=\"color: #e0ac08\">Critical: </span>{{info?.critical}}</p>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-card-header>\r\n\r\n      <ion-card-title>\r\n        <ion-text color=\"success\">Recovered: </ion-text>{{info?.recovered | number}}\r\n      </ion-card-title>\r\n    </ion-card-header>\r\n  </ion-card>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-title>GOVERNORATES</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <canvas #barChart height=\"500\"></canvas>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-list>\r\n    <ion-item *ngFor=\"let governement of governements\">\r\n      <ion-label>{{governement?.nom}}</ion-label>\r\n      <ion-badge color=\"light\">{{governement?.val}}</ion-badge>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/tab3/tab3.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tab3/tab3.page.ts");







let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }])
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
    })
], Tab3PageModule);



/***/ }),

/***/ "./src/app/tab3/tab3.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-toolbar {\n  --background: translucent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMy9EOlxcRGV2XFxpb25pY0FwcFxcY29yb25hdmlydXMtMy9zcmNcXGFwcFxcdGFiM1xcdGFiMy5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjMvdGFiMy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdGFiMy90YWIzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xyXG59IiwiaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/tab3/tab3.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tab2_covid_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tab2/covid.service */ "./src/app/tab2/covid.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _service_corona_serv_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/corona-serv.service */ "./src/app/service/corona-serv.service.ts");






let Tab3Page = class Tab3Page {
    constructor(covidServ, loadingCtrl, CoronaServ) {
        this.covidServ = covidServ;
        this.loadingCtrl = loadingCtrl;
        this.CoronaServ = CoronaServ;
        this.labels = [];
        this.data = [];
        this.info = [];
        this.presentLoading().then(() => {
            this.covidServ.getCountry().subscribe(data => {
                this.info = data;
            }, error1 => console.log(error1), () => {
                this.loadingCtrl.dismiss();
            });
        });
        this.CoronaServ.getGovernements().valueChanges().subscribe((data) => {
            this.governements = data;
            this.labels = [];
            this.data = [];
            data.forEach(value => {
                this.labels.push(value.nom);
                this.data.push(value.val);
            });
            this.pieCharts(this.labels, this.data);
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
    }
    pieCharts(labels, data) {
        this.bars = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"](this.barChart.nativeElement, {
            type: 'pie',
            data: {
                // tslint:disable-next-line:max-line-length
                labels: labels,
                datasets: [
                    {
                        label: '# of Votes',
                        data: data,
                        backgroundColor: [
                            'rgb(99,66,210)',
                            'rgb(89,213,253)',
                            'rgb(255,149,120)',
                            'rgb(251,107,128)',
                            'rgb(59,167,86)',
                            'rgb(101,99,255)',
                            'rgb(252,190,44)',
                            'rgb(10,36,99)',
                            'rgb(216,49,91)',
                            'rgb(0,100,148)',
                            'rgb(220,73,58)',
                            'rgb(67,146,241)',
                            'rgb(140,30,7)',
                            'rgb(108,209,61)',
                            'rgb(23,146,22)',
                            'rgb(180,119,217)',
                            'rgb(229,229,229)',
                            'rgb(225,53,53)',
                            'rgb(85,23,67)',
                            'rgb(248,85,50)',
                            'rgb(62,82,73)',
                            'rgb(2,61,47)',
                            'rgb(229,193,166)',
                            'rgb(234,247,213)',
                            'rgb(0,0,0)',
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: 'Please wait...'
            });
            yield loading.present();
        });
    }
};
Tab3Page.ctorParameters = () => [
    { type: _tab2_covid_service__WEBPACK_IMPORTED_MODULE_3__["CovidService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _service_corona_serv_service__WEBPACK_IMPORTED_MODULE_5__["CoronaServService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('barChart', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], Tab3Page.prototype, "barChart", void 0);
Tab3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab3',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tab3.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tab3.page.scss */ "./src/app/tab3/tab3.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tab2_covid_service__WEBPACK_IMPORTED_MODULE_3__["CovidService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _service_corona_serv_service__WEBPACK_IMPORTED_MODULE_5__["CoronaServService"]])
], Tab3Page);



/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module-es2015.js.map