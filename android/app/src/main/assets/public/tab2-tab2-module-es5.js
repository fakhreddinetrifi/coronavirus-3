(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"], {
  /***/
  "./node_modules/ng2-search-filter/ng2-search-filter.js":
  /*!*************************************************************!*\
    !*** ./node_modules/ng2-search-filter/ng2-search-filter.js ***!
    \*************************************************************/

  /*! exports provided: Ng2SearchPipeModule, Ng2SearchPipe */

  /***/
  function node_modulesNg2SearchFilterNg2SearchFilterJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Ng2SearchPipeModule", function () {
      return Ng2SearchPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Ng2SearchPipe", function () {
      return Ng2SearchPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    class Ng2SearchPipe {
      /**
       * @param {?} items object from array
       * @param {?} term term's search
       * @return {?}
       */
      transform(items, term) {
        if (!term || !items) return items;
        return Ng2SearchPipe.filter(items, term);
      }
      /**
       *
       * @param {?} items List of items to filter
       * @param {?} term  a string term to compare with every property of the list
       *
       * @return {?}
       */


      static filter(items, term) {
        const
        /** @type {?} */
        toCompare = term.toLowerCase();
        /**
         * @param {?} item
         * @param {?} term
         * @return {?}
         */

        function checkInside(item, term) {
          for (let
          /** @type {?} */
          property in item) {
            if (item[property] === null || item[property] == undefined) {
              continue;
            }

            if (typeof item[property] === 'object') {
              if (checkInside(item[property], term)) {
                return true;
              }
            }

            if (item[property].toString().toLowerCase().includes(toCompare)) {
              return true;
            }
          }

          return false;
        }

        return items.filter(function (item) {
          return checkInside(item, term);
        });
      }

    }

    Ng2SearchPipe.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
      args: [{
        name: 'filter',
        pure: false
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /**
     * @nocollapse
     */

    Ng2SearchPipe.ctorParameters = () => [];

    class Ng2SearchPipeModule {}

    Ng2SearchPipeModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [Ng2SearchPipe],
        exports: [Ng2SearchPipe]
      }]
    }];
    /**
     * @nocollapse
     */

    Ng2SearchPipeModule.ctorParameters = () => [];
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=ng2-search-filter.js.map

    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab2Tab2PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Coronavirus by Country\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n    <ion-searchbar [(ngModel)]=\"searchCountry\" autocomplete=\"off\"></ion-searchbar>\r\n  <ion-card *ngFor=\"let i of info | filter:searchCountry\">\r\n    <ion-card-header>\r\n      <ion-card-title>{{ i?.country }}</ion-card-title>\r\n    </ion-card-header>\r\n\r\n    <ion-card-content>\r\n      <p><ion-text color=\"primary\">Active: </ion-text>{{ i?.active | number}}</p>\r\n      <p><ion-text color=\"danger\">Cases: </ion-text>{{ i?.cases | number }} | <ion-text color=\"danger\">Today Cases: </ion-text>{{i?.todayCases | number}}</p>\r\n      <p>Deaths: {{ i?.deaths | number }} | Today Deaths: {{i?.todayDeaths | number}}</p>\r\n      <p><ion-text color=\"success\">Recovered: </ion-text>{{ i?.recovered | number }} | <ion-text color=\"success\">Critical: </ion-text>{{i?.critical | number}}</p>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/tab2/tab2.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tab2/tab2.module.ts ***!
    \*************************************/

  /*! exports provided: Tab2PageModule */

  /***/
  function srcAppTab2Tab2ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function () {
      return Tab2PageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tab2.page */
    "./src/app/tab2/tab2.page.ts");
    /* harmony import */


    var ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng2-search-filter */
    "./node_modules/ng2-search-filter/ng2-search-filter.js");

    let Tab2PageModule = class Tab2PageModule {};
    Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__["Ng2SearchPipeModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]
      }])],
      declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
    })], Tab2PageModule);
    /***/
  },

  /***/
  "./src/app/tab2/tab2.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tab2/tab2.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab2Tab2PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content ion-toolbar {\n  --background: translucent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMi9EOlxcRGV2XFxpb25pY0FwcFxcY29yb25hdmlydXMtMy9zcmNcXGFwcFxcdGFiMlxcdGFiMi5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xyXG59IiwiaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/tab2/tab2.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tab2/tab2.page.ts ***!
    \***********************************/

  /*! exports provided: Tab2Page */

  /***/
  function srcAppTab2Tab2PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab2Page", function () {
      return Tab2Page;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_corona_serv_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service/corona-serv.service */
    "./src/app/service/corona-serv.service.ts");

    let Tab2Page = class Tab2Page {
      constructor(coronaServ) {
        this.coronaServ = coronaServ;
        this.info = null;
      }

      ngOnInit() {
        this.coronaServ.getCountries().subscribe(data => {
          this.info = data;
        });
      }

    };

    Tab2Page.ctorParameters = () => [{
      type: _service_corona_serv_service__WEBPACK_IMPORTED_MODULE_2__["CoronaServService"]
    }];

    Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tab2',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tab2.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tab2.page.scss */
      "./src/app/tab2/tab2.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_corona_serv_service__WEBPACK_IMPORTED_MODULE_2__["CoronaServService"]])], Tab2Page);
    /***/
  }
}]);
//# sourceMappingURL=tab2-tab2-module-es5.js.map