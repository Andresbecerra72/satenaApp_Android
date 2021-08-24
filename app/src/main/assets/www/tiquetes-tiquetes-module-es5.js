(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tiquetes-tiquetes-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tiquetes/tiquetes.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tiquetes/tiquetes.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n        <h2>Tiquetes</h2> \n    </ion-title>\n  </ion-toolbar>\n  \n  <ion-fab horizontal=\"end\" vertical=\"top\" slot=\"fixed\">\n    <ion-fab-button color=\"secondary\">\n      <ion-icon name=\"share\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"bottom\">\n        <ion-fab-button href=\"https://www.facebook.com/aerolineasatena\" color=\"light\">\n          <ion-icon name=\"logo-facebook\"></ion-icon>\n        </ion-fab-button>\n        <ion-fab-button href=\"https://twitter.com/AerolineaSatena\" color=\"light\">\n          <ion-icon name=\"logo-twitter\"></ion-icon>\n        </ion-fab-button>\n        <ion-fab-button href=\"https://www.instagram.com/aerolineasatena/\" color=\"light\">\n          <ion-icon name=\"logo-instagram\"></ion-icon>\n        </ion-fab-button>      \n      </ion-fab-list>\n  </ion-fab>\n\n\n</ion-header>\n\n<ion-content class=\"scroller ion-padding\" no-bounce>\n\n <section>\n  <img src=\"/assets/banner/2.jpg\" />\n </section>\n\n <br>\n\n    <iframe src=\"https://kibe-9r.kiusys.net/widget/\" style=\"overflow: auto; -webkit-overflow-scrolling: touch; border: none;\" scrolling=\"yes\" width=\"100%\" height=\"100%\"> </iframe>\n          \n     <!-- <embed src=\"https://kibe-9r.kiusys.net/widget/\" height=\"100%\" width=\"100%\"> \n        https://kibe-stage-9r.kiusys.net/widget/-->\n        \n \n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tiquetes/tiquetes.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tiquetes/tiquetes.module.ts ***!
  \*********************************************/
/*! exports provided: TiquetesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiquetesPageModule", function() { return TiquetesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tiquetes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tiquetes.page */ "./src/app/tiquetes/tiquetes.page.ts");







var TiquetesPageModule = /** @class */ (function () {
    function TiquetesPageModule() {
    }
    TiquetesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tiquetes_page__WEBPACK_IMPORTED_MODULE_6__["TiquetesPage"] }])
            ],
            declarations: [_tiquetes_page__WEBPACK_IMPORTED_MODULE_6__["TiquetesPage"]]
        })
    ], TiquetesPageModule);
    return TiquetesPageModule;
}());



/***/ }),

/***/ "./src/app/tiquetes/tiquetes.page.scss":
/*!*********************************************!*\
  !*** ./src/app/tiquetes/tiquetes.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title {\n  color: #003883;\n}\n\nion-header {\n  background-color: #fff;\n  border-bottom: 2px solid #022471;\n  text-align: left;\n  top: 0;\n  width: 100%;\n}\n\n.scroller {\n  overflow-x: scroll;\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n  scroll-behavior: smooth;\n}\n\n.scroller::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGlxdWV0ZXMvQzpcXFVzZXJzXFxBTkRSRVNcXERvY3VtZW50c1xcU09GVFdBUkUtREVTSUdORVJcXGlvbmljXFxpbmljaWFsXFxBcHBTYXRlbmEvc3JjXFxhcHBcXHRpcXVldGVzXFx0aXF1ZXRlcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3RpcXVldGVzL3RpcXVldGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGNBQUE7QUNDRDs7QURFQTtFQUNDLHNCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0FDQ0Q7O0FERUE7RUFFSSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0FDQUo7O0FERUk7RUFDRSxhQUFBO0FDQU4iLCJmaWxlIjoic3JjL2FwcC90aXF1ZXRlcy90aXF1ZXRlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGUge1xyXG5cdGNvbG9yOiAgIzAwMzg4MztcclxufVxyXG5cclxuaW9uLWhlYWRlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRib3JkZXItYm90dG9tOiAycHggc29saWQgIzAyMjQ3MTsgXHJcblx0dGV4dC1hbGlnbjogbGVmdDsgXHJcblx0dG9wOiAwO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdH1cclxuXHJcbi5zY3JvbGxlciB7XHJcblx0XHJcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XHJcbiAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XHJcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7ICAvLyBJRSAxMCtcclxuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTsgIC8vIEZpcmVmb3hcclxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG5cclxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgZGlzcGxheTogbm9uZTsgLy8gU2FmYXJpIGFuZCBDaHJvbWVcclxuICAgIH1cclxufSIsImlvbi10aXRsZSB7XG4gIGNvbG9yOiAjMDAzODgzO1xufVxuXG5pb24taGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMjI0NzE7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zY3JvbGxlciB7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG4uc2Nyb2xsZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tiquetes/tiquetes.page.ts":
/*!*******************************************!*\
  !*** ./src/app/tiquetes/tiquetes.page.ts ***!
  \*******************************************/
/*! exports provided: TiquetesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiquetesPage", function() { return TiquetesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TiquetesPage = /** @class */ (function () {
    function TiquetesPage() {
    }
    TiquetesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tiquetes',
            template: __webpack_require__(/*! raw-loader!./tiquetes.page.html */ "./node_modules/raw-loader/index.js!./src/app/tiquetes/tiquetes.page.html"),
            styles: [__webpack_require__(/*! ./tiquetes.page.scss */ "./src/app/tiquetes/tiquetes.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TiquetesPage);
    return TiquetesPage;
}());



/***/ })

}]);
//# sourceMappingURL=tiquetes-tiquetes-module-es5.js.map