(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ofertas-ofertas-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/ofertas/ofertas.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ofertas/ofertas.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n        <h2>Ofertas</h2> \n    </ion-title>\n  </ion-toolbar>\n\n  <ion-fab horizontal=\"end\" vertical=\"top\" slot=\"fixed\">\n      <ion-fab-button color=\"secondary\">\n        <ion-icon name=\"share\"></ion-icon>\n      </ion-fab-button >\n      <ion-fab-list side=\"start\">\n        <ion-fab-button href=\"https://www.facebook.com/aerolineasatena\" color=\"light\">\n          <ion-icon name=\"logo-facebook\"></ion-icon>\n        </ion-fab-button>\n        <ion-fab-button href=\"https://twitter.com/AerolineaSatena\" color=\"light\">\n          <ion-icon name=\"logo-twitter\"></ion-icon>\n        </ion-fab-button>\n        <ion-fab-button href=\"https://www.instagram.com/aerolineasatena/\" color=\"light\">\n          <ion-icon  name=\"logo-instagram\"></ion-icon>\n        </ion-fab-button>      \n      </ion-fab-list>\n    </ion-fab>\n\n\n</ion-header>\n\n<ion-content class=\"scroller ion-padding\" no-bounce>\n\n  <ion-card href=\"https://www.satena.com/comercial/tarifas-destacadas/\">\n        <img src=\"/assets/tarifas/1.jpg\" />\n        <div class=\"card-title\">Cali - Medellin</div>\n        <div class=\"card-subtitle\">Desde</div>\n        <div class=\"card-content\">$ 119.830 COP</div>\n          <ion-card-content style=\"background-color:#224F7B;\">\n          *Aplica condiciones\n          </ion-card-content>\n    </ion-card>\n\n    <ion-card href=\"https://www.satena.com/comercial/tarifas-destacadas/\">\n      <img src=\"/assets/tarifas/2.jpg\" />\n      <div class=\"card-title\">Bogota - Medellin</div>\n      <div class=\"card-subtitle\">Desde</div>\n      <div class=\"card-content\">$ 99.910 COP</div>\n        <ion-card-content style=\"background-color:#224F7B;\">\n        *Aplica condiciones\n        </ion-card-content>\n   </ion-card>\n\n\n   <ion-card href=\"https://www.satena.com/comercial/tarifas-destacadas/\">\n    <img src=\"/assets/tarifas/3.jpg\" />\n    <div class=\"card-title\">Bogota - Aguachica</div>\n    <div class=\"card-subtitle\">Desde</div>\n    <div class=\"card-content\">$ 159.890 COP</div>\n      <ion-card-content style=\"background-color:#224F7B;\">\n      *Aplica condiciones\n      </ion-card-content>\n  </ion-card>\n    \n\n  <ion-card href=\"https://www.satena.com/comercial/tarifas-destacadas/\">\n    <img src=\"/assets/tarifas/4.jpg\" />\n    <div class=\"card-title\">Medellin - Tolú</div>\n    <div class=\"card-subtitle\">Desde</div>\n    <div class=\"card-content\">$ 149.950 COP</div>\n      <ion-card-content style=\"background-color:#224F7B;\">\n      *Aplica condiciones\n      </ion-card-content>\n</ion-card>\n   \n</ion-content>\n"

/***/ }),

/***/ "./src/app/ofertas/ofertas.module.ts":
/*!*******************************************!*\
  !*** ./src/app/ofertas/ofertas.module.ts ***!
  \*******************************************/
/*! exports provided: OfertasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfertasPageModule", function() { return OfertasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ofertas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ofertas.page */ "./src/app/ofertas/ofertas.page.ts");







var OfertasPageModule = /** @class */ (function () {
    function OfertasPageModule() {
    }
    OfertasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _ofertas_page__WEBPACK_IMPORTED_MODULE_6__["OfertasPage"] }])
            ],
            declarations: [_ofertas_page__WEBPACK_IMPORTED_MODULE_6__["OfertasPage"]]
        })
    ], OfertasPageModule);
    return OfertasPageModule;
}());



/***/ }),

/***/ "./src/app/ofertas/ofertas.page.scss":
/*!*******************************************!*\
  !*** ./src/app/ofertas/ofertas.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title {\n  color: #003883;\n}\n\nion-header {\n  background-color: #fff;\n  border-bottom: 2px solid #022471;\n  text-align: left;\n  top: 0;\n  width: 100%;\n}\n\n.scroller {\n  overflow-x: scroll;\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n  scroll-behavior: smooth;\n}\n\n.scroller::-webkit-scrollbar {\n  display: none;\n}\n\n.card-title {\n  position: absolute;\n  left: 20px;\n  top: 30%;\n  width: 100%;\n  font-weight: bold;\n  color: #fff;\n  font-size: 2em;\n}\n\n.card-subtitle {\n  position: absolute;\n  left: 20px;\n  top: 48%;\n  width: 100%;\n  color: #fff;\n  font-size: 1.5em;\n}\n\n.card-content {\n  position: absolute;\n  left: 20px;\n  top: 55%;\n  width: 100%;\n  font-weight: bold;\n  color: #fff;\n  font-size: 1.7em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb2ZlcnRhcy9DOlxcVXNlcnNcXEFORFJFU1xcRG9jdW1lbnRzXFxTT0ZUV0FSRS1ERVNJR05FUlxcaW9uaWNcXGluaWNpYWxcXEFwcFNhdGVuYS9zcmNcXGFwcFxcb2ZlcnRhc1xcb2ZlcnRhcy5wYWdlLnNjc3MiLCJzcmMvYXBwL29mZXJ0YXMvb2ZlcnRhcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxjQUFBO0FDQ0Q7O0FERUE7RUFDQyxzQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtBQ0NEOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtBQ0NKOztBRENJO0VBQ0UsYUFBQTtBQ0NOOztBREdBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDQUY7O0FER0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvb2ZlcnRhcy9vZmVydGFzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XHJcblx0Y29sb3I6ICAjMDAzODgzO1xyXG59XHJcblxyXG5pb24taGVhZGVyIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDIyNDcxOyBcclxuXHR0ZXh0LWFsaWduOiBsZWZ0OyBcclxuXHR0b3A6IDA7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0fVxyXG5cclxuLnNjcm9sbGVyIHtcclxuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcclxuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgIC8vIElFIDEwK1xyXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAgLy8gRmlyZWZveFxyXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcblxyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICBkaXNwbGF5OiBub25lOyAvLyBTYWZhcmkgYW5kIENocm9tZVxyXG4gICAgfVxyXG59XHJcblxyXG4uY2FyZC10aXRsZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDIwcHg7XHJcbiAgdG9wOiAzMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAyLjBlbTtcclxufVxyXG5cclxuLmNhcmQtc3VidGl0bGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAyMHB4O1xyXG4gIHRvcDogNDglO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMS41ZW07XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRlbnQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAyMHB4O1xyXG4gIHRvcDogNTUlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMS43ZW07XHJcbn0iLCJpb24tdGl0bGUge1xuICBjb2xvcjogIzAwMzg4Mztcbn1cblxuaW9uLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDIyNDcxO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2Nyb2xsZXIge1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuLnNjcm9sbGVyOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jYXJkLXRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAyMHB4O1xuICB0b3A6IDMwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAyZW07XG59XG5cbi5jYXJkLXN1YnRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAyMHB4O1xuICB0b3A6IDQ4JTtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEuNWVtO1xufVxuXG4uY2FyZC1jb250ZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAyMHB4O1xuICB0b3A6IDU1JTtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxLjdlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/ofertas/ofertas.page.ts":
/*!*****************************************!*\
  !*** ./src/app/ofertas/ofertas.page.ts ***!
  \*****************************************/
/*! exports provided: OfertasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfertasPage", function() { return OfertasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OfertasPage = /** @class */ (function () {
    function OfertasPage() {
    }
    OfertasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ofertas',
            template: __webpack_require__(/*! raw-loader!./ofertas.page.html */ "./node_modules/raw-loader/index.js!./src/app/ofertas/ofertas.page.html"),
            styles: [__webpack_require__(/*! ./ofertas.page.scss */ "./src/app/ofertas/ofertas.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OfertasPage);
    return OfertasPage;
}());



/***/ })

}]);
//# sourceMappingURL=ofertas-ofertas-module-es5.js.map