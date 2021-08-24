(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["checkin-checkin-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/checkin/checkin.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/checkin/checkin.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n        <ion-title>\n        <h2>Web Check-in</h2> \n        </ion-title>\n      </ion-toolbar>\n  \n  <ion-fab horizontal=\"end\" vertical=\"top\" slot=\"fixed\">\n      <ion-fab-button color=\"secondary\">\n        <ion-icon name=\"share\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-list>\n        <ion-fab-button href=\"https://www.facebook.com/aerolineasatena\" color=\"light\">\n          <ion-icon name=\"logo-facebook\"></ion-icon>\n        </ion-fab-button>\n        <ion-fab-button href=\"https://twitter.com/AerolineaSatena\" color=\"light\">\n          <ion-icon name=\"logo-twitter\"></ion-icon>\n        </ion-fab-button>\n        <ion-fab-button href=\"https://www.instagram.com/aerolineasatena/\" color=\"light\">\n          <ion-icon  name=\"logo-instagram\"></ion-icon>\n        </ion-fab-button>      \n      </ion-fab-list>\n    </ion-fab>\n\n</ion-header>\n\n<ion-content class=\"scroller ion-padding\">\n\n  <section>\n    <img src=\"/assets/equipaje.jpg\" />\n   </section>\n  \n   <br>\n\n\n    <section class=\"section ion-padding\">\n        \n        <p>Pasajeros que únicamente llevan equipaje de mano (Hasta 1 pieza de 5 Kgs Máximo) o no llevan equipaje.</p>\n        <div>\n            <object  width=\"100%\" height=\"450hv\" data=\"https://wc2-9r.kiusys.net/widget/\" type=\"text/html\" ></object>\n        </div>\n    </section>\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/checkin/checkin.module.ts":
/*!*******************************************!*\
  !*** ./src/app/checkin/checkin.module.ts ***!
  \*******************************************/
/*! exports provided: CheckinPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckinPageModule", function() { return CheckinPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _checkin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkin.page */ "./src/app/checkin/checkin.page.ts");







let CheckinPageModule = class CheckinPageModule {
};
CheckinPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _checkin_page__WEBPACK_IMPORTED_MODULE_6__["CheckinPage"] }])
        ],
        declarations: [_checkin_page__WEBPACK_IMPORTED_MODULE_6__["CheckinPage"]]
    })
], CheckinPageModule);



/***/ }),

/***/ "./src/app/checkin/checkin.page.scss":
/*!*******************************************!*\
  !*** ./src/app/checkin/checkin.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title {\n  color: #003883;\n}\n\nion-header {\n  background-color: #fff;\n  border-bottom: 2px solid #022471;\n  text-align: left;\n  top: 0;\n  width: 100%;\n}\n\n.section {\n  color: gray;\n}\n\n.scroller {\n  overflow-x: scroll;\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n  scroll-behavior: smooth;\n}\n\n.scroller::-webkit-scrollbar {\n  display: none;\n}\n\nobject:focus {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hlY2tpbi9DOlxcVXNlcnNcXEFORFJFU1xcRG9jdW1lbnRzXFxTT0ZUV0FSRS1ERVNJR05FUlxcaW9uaWNcXGluaWNpYWxcXEFwcFNhdGVuYS9zcmNcXGFwcFxcY2hlY2tpblxcY2hlY2tpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2NoZWNraW4vY2hlY2tpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFQyxjQUFBO0FDQUQ7O0FER0E7RUFDQyxzQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtBQ0FEOztBRElBO0VBQ0MsV0FBQTtBQ0REOztBRFFBO0VBRUMsa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtBQ05EOztBRFFDO0VBQ0UsYUFBQTtBQ05IOztBRFVFO0VBQ0QsYUFBQTtBQ1BEIiwiZmlsZSI6InNyYy9hcHAvY2hlY2tpbi9jaGVja2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XHJcblx0XHJcblx0Y29sb3I6ICAjMDAzODgzO1xyXG59XHJcblxyXG5pb24taGVhZGVyIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDIyNDcxOyBcclxuXHR0ZXh0LWFsaWduOiBsZWZ0OyBcclxuXHR0b3A6IDA7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0fVxyXG5cclxuXHJcbi5zZWN0aW9uIHtcdFxyXG5cdGNvbG9yOiBncmF5O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4uc2Nyb2xsZXIge1xyXG5cdFxyXG5cdG92ZXJmbG93LXg6IHNjcm9sbDtcclxuXHQtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XHJcblx0LW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAgLy8gSUUgMTArXHJcblx0c2Nyb2xsYmFyLXdpZHRoOiBub25lOyAgLy8gRmlyZWZveFxyXG5cdHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG4gIFxyXG5cdCY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuXHQgIGRpc3BsYXk6IG5vbmU7IC8vIFNhZmFyaSBhbmQgQ2hyb21lXHJcblx0fVxyXG4gIH1cclxuXHJcbiAgb2JqZWN0OmZvY3VzIHtcclxuXHRvdXRsaW5lOiBub25lO1xyXG4gIH0iLCJpb24tdGl0bGUge1xuICBjb2xvcjogIzAwMzg4Mztcbn1cblxuaW9uLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDIyNDcxO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2VjdGlvbiB7XG4gIGNvbG9yOiBncmF5O1xufVxuXG4uc2Nyb2xsZXIge1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuLnNjcm9sbGVyOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbm9iamVjdDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/checkin/checkin.page.ts":
/*!*****************************************!*\
  !*** ./src/app/checkin/checkin.page.ts ***!
  \*****************************************/
/*! exports provided: CheckinPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckinPage", function() { return CheckinPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CheckinPage = class CheckinPage {
    constructor() { }
};
CheckinPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-checkin',
        template: __webpack_require__(/*! raw-loader!./checkin.page.html */ "./node_modules/raw-loader/index.js!./src/app/checkin/checkin.page.html"),
        styles: [__webpack_require__(/*! ./checkin.page.scss */ "./src/app/checkin/checkin.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CheckinPage);



/***/ })

}]);
//# sourceMappingURL=checkin-checkin-module-es2015.js.map