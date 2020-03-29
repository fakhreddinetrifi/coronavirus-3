(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["volunteer-volunteer-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/volunteer/volunteer.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/volunteer/volunteer.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppVolunteerVolunteerPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>volunteer</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/volunteer/volunteer-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/volunteer/volunteer-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: VolunteerPageRoutingModule */

  /***/
  function srcAppVolunteerVolunteerRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VolunteerPageRoutingModule", function () {
      return VolunteerPageRoutingModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _volunteer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./volunteer.page */
    "./src/app/volunteer/volunteer.page.ts");

    const routes = [{
      path: '',
      component: _volunteer_page__WEBPACK_IMPORTED_MODULE_3__["VolunteerPage"]
    }];
    let VolunteerPageRoutingModule = class VolunteerPageRoutingModule {};
    VolunteerPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], VolunteerPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/volunteer/volunteer.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/volunteer/volunteer.module.ts ***!
    \***********************************************/

  /*! exports provided: VolunteerPageModule */

  /***/
  function srcAppVolunteerVolunteerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VolunteerPageModule", function () {
      return VolunteerPageModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _volunteer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./volunteer-routing.module */
    "./src/app/volunteer/volunteer-routing.module.ts");
    /* harmony import */


    var _volunteer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./volunteer.page */
    "./src/app/volunteer/volunteer.page.ts");

    let VolunteerPageModule = class VolunteerPageModule {};
    VolunteerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _volunteer_routing_module__WEBPACK_IMPORTED_MODULE_5__["VolunteerPageRoutingModule"]],
      declarations: [_volunteer_page__WEBPACK_IMPORTED_MODULE_6__["VolunteerPage"]]
    })], VolunteerPageModule);
    /***/
  },

  /***/
  "./src/app/volunteer/volunteer.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/volunteer/volunteer.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppVolunteerVolunteerPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZvbHVudGVlci92b2x1bnRlZXIucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/volunteer/volunteer.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/volunteer/volunteer.page.ts ***!
    \*********************************************/

  /*! exports provided: VolunteerPage */

  /***/
  function srcAppVolunteerVolunteerPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VolunteerPage", function () {
      return VolunteerPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let VolunteerPage = class VolunteerPage {
      constructor() {}

      ngOnInit() {}

    };
    VolunteerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-volunteer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./volunteer.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/volunteer/volunteer.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./volunteer.page.scss */
      "./src/app/volunteer/volunteer.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], VolunteerPage);
    /***/
  }
}]);
//# sourceMappingURL=volunteer-volunteer-module-es5.js.map