(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["protection-protection-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/protection/protection.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/protection/protection.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProtectionProtectionPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>protection</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n  <ion-card>\n    <img src=\"https://www.flagsonline.fr/uploads/2016-6-6/1200-0/tunisia.jpg\" />\n    <ion-card-header>\n      <ion-card-title class=\"ion-text-center\"><h1>شد_دارك#</h1></ion-card-title>\n    </ion-card-header>\n    <ion-card-content class=\"ion-text-right\">\n      <h2>ما نسلموش علي بعضنا و ما نسلموش في بعضنا\n        أقسم مع جارك و عاونو  كان يحتاجك\n        لكلنا يد وحدة نحميو رواحنا و صغارنا و ناس اللي نحبوهم\n      </h2>\n      <h2>شد دارك و إحمي بلادك#</h2>\n      <h2>مع بعضنا غدوة خير#</h2>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/protection/protection-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/protection/protection-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: ProtectionPageRoutingModule */

  /***/
  function srcAppProtectionProtectionRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProtectionPageRoutingModule", function () {
      return ProtectionPageRoutingModule;
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


    var _protection_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./protection.page */
    "./src/app/protection/protection.page.ts");

    const routes = [{
      path: '',
      component: _protection_page__WEBPACK_IMPORTED_MODULE_3__["ProtectionPage"]
    }];
    let ProtectionPageRoutingModule = class ProtectionPageRoutingModule {};
    ProtectionPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProtectionPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/protection/protection.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/protection/protection.module.ts ***!
    \*************************************************/

  /*! exports provided: ProtectionPageModule */

  /***/
  function srcAppProtectionProtectionModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProtectionPageModule", function () {
      return ProtectionPageModule;
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


    var _protection_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./protection-routing.module */
    "./src/app/protection/protection-routing.module.ts");
    /* harmony import */


    var _protection_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./protection.page */
    "./src/app/protection/protection.page.ts");

    let ProtectionPageModule = class ProtectionPageModule {};
    ProtectionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _protection_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProtectionPageRoutingModule"]],
      declarations: [_protection_page__WEBPACK_IMPORTED_MODULE_6__["ProtectionPage"]]
    })], ProtectionPageModule);
    /***/
  },

  /***/
  "./src/app/protection/protection.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/protection/protection.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProtectionProtectionPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb3RlY3Rpb24vcHJvdGVjdGlvbi5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/protection/protection.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/protection/protection.page.ts ***!
    \***********************************************/

  /*! exports provided: ProtectionPage */

  /***/
  function srcAppProtectionProtectionPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProtectionPage", function () {
      return ProtectionPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let ProtectionPage = class ProtectionPage {
      constructor() {}

      ngOnInit() {}

    };
    ProtectionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-protection',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./protection.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/protection/protection.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./protection.page.scss */
      "./src/app/protection/protection.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ProtectionPage);
    /***/
  }
}]);
//# sourceMappingURL=protection-protection-module-es5.js.map