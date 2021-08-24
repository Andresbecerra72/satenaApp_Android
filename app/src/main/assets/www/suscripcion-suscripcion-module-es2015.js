(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["suscripcion-suscripcion-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/suscripcion/suscripcion.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/suscripcion/suscripcion.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      <h2>Registro Usuarios</h2>\n    </ion-title>\n  </ion-toolbar>\n  \n  <ion-fab horizontal=\"end\" vertical=\"top\" slot=\"fixed\">\n    <ion-fab-button color=\"secondary\">\n      <ion-icon name=\"share\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list>\n      <ion-fab-button href=\"https://www.facebook.com/aerolineasatena\" color=\"light\">\n        <ion-icon name=\"logo-facebook\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button href=\"https://twitter.com/AerolineaSatena\" color=\"light\">\n        <ion-icon name=\"logo-twitter\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button href=\"https://www.instagram.com/aerolineasatena/\" color=\"light\">\n        <ion-icon name=\"logo-instagram\"></ion-icon>\n      </ion-fab-button>      \n    </ion-fab-list>\n  </ion-fab>\n\n</ion-header>\n\n<ion-content class=\"scroller ion-padding\" no-bounce>\n  \n\n\n\n<ion-card class=\"ion-padding\">\n  <div class=\"section-title\">\n    <h1>\n     No te pierdas ninguna Promo           \n    </h1>\n</div>\n  <ion-item>\n    <ion-label style=\"font-family: inherit;\" color=\"medium\" position=\"floating\">Nombre</ion-label>\n    <ion-input></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label style=\"font-family: inherit;\" color=\"medium\" position=\"floating\">Apellido</ion-label>\n    <ion-input></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label style=\"font-family: inherit;\" color=\"medium\" position=\"floating\">E-mail</ion-label>\n    <ion-input></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label style=\"font-family: inherit;\" color=\"medium\">Aeropuerto Más Cercano</ion-label>\n    <ion-select interface=\"popover\">\n      <ion-select-option value=\"0\">Aguachica - Hacaritama</ion-select-option>\n      <ion-select-option value=\"1\">Apartado - Carepa - A.R. Betancourt</ion-select-option>\n      <ion-select-option value=\"2\">Araracuara - Araracuara</ion-select-option>\n      <ion-select-option value=\"3\">Arauca - Santiago Perez Quiroz</ion-select-option>\n      <ion-select-option value=\"4\">Bahia Solano - Jose Celestino Mutis</ion-select-option>\n      <ion-select-option value=\"5\">Bogota - El Dorado Intl</ion-select-option>\n      <ion-select-option value=\"6\">Bucaramanga - Palonegro Intl</ion-select-option>\n      <ion-select-option value=\"7\">Buenaventura - Gerardo Tobar Lopez</ion-select-option>\n      <ion-select-option value=\"8\">Cali - Alfonso B. Aragon Intl</ion-select-option>\n      <ion-select-option value=\"9\">Florencia - Gustavo A. Paredes</ion-select-option>\n      <ion-select-option value=\"10\">Guapi - Juan Casiano</ion-select-option>\n      <ion-select-option value=\"12\">Ipiales - San Luis</ion-select-option>\n      <ion-select-option value=\"13\">La Chorrera - Virgilio Barco Vargas</ion-select-option>\n      <ion-select-option value=\"14\">La Macarena - El Refugio</ion-select-option>\n      <ion-select-option value=\"15\">La Pedrera - La Pedrera</ion-select-option>\n      <ion-select-option value=\"16\">Leticia - Alfredo V&aacute;squez Cobo</ion-select-option>\n      <ion-select-option value=\"17\">Medellin - Enrique Olaya Herrera</ion-select-option>\n      <ion-select-option value=\"18\">Mitu - Fabio A. Leon Bentley</ion-select-option>\n      <ion-select-option value=\"19\">Pitalito - Pitalito</ion-select-option>\n      <ion-select-option value=\"20\">Providencia - El Embrujo</ion-select-option>\n      <ion-select-option value=\"21\">Puerto Asis - Tres de Mayo</ion-select-option>\n      <ion-select-option value=\"22\">Puerto Carreno - German Olano</ion-select-option>\n      <ion-select-option value=\"11\">Puerto Inirida - Obando</ion-select-option>\n      <ion-select-option value=\"23\">Puerto Leguizamo - Caucaya</ion-select-option>\n      <ion-select-option value=\"24\">Quibdo - El Carano</ion-select-option>\n      <ion-select-option value=\"25\">San Andres - Gustavo Rojas Pinilla</ion-select-option>\n      <ion-select-option value=\"26\">San Jose del Guaviare - Jorge E. Gonzalez T.</ion-select-option>\n      <ion-select-option value=\"27\">San Vicente del Caguan - Eduardo Falla Solano</ion-select-option>\n      <ion-select-option value=\"28\">Saravena - Los Colonizadores</ion-select-option>\n      <ion-select-option value=\"29\">Tame - Gabriel Vargas Santos</ion-select-option>\n      <ion-select-option value=\"30\">Tarapaca - Tarapac&aacute;</ion-select-option>\n      <ion-select-option value=\"31\">Tolu - Golfo de Morrosquillo</ion-select-option>\n      <ion-select-option value=\"32\">Tumaco - La Florida</ion-select-option>\n      <ion-select-option value=\"33\">Villagarzon - Villagarzon</ion-select-option>\n      <ion-select-option value=\"34\">Villavicencio - Vanguardia</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item lines=\"none\">\n    <ion-label  style=\"font-family: inherit;\" color=\"medium\" >Acepto\n      <a style=\"font-size: 14px;\" href=\"https://www.satena.com/viewer.php?id=408&&rlsk='YUhSMGNITTZMeTkzZDNjdWMyRjBaVzVoTG1OdmJTOWtiMk4xYldWdWRHOXpMMk52Y25CdmNtRjBhWFp2TDNCdmJHbDBhV05oYzE5amIyNWthV05wYjI1bGMxOTBaWEp0YVc1dmMxOTFjMjh1Y0dSbQ=='\" target=\"_blank\" title=\"Ver términos y condiciones\"> \n        Términos y condiciones                                   \n      </a>\n    </ion-label>\n    <ion-checkbox color=\"primary\"  slot=\"start\"></ion-checkbox>\n  </ion-item>\n  <div>\n  <ion-button shape=\"round\" color=\"primary\" href=\"https://www.satena.com/\">¡Inscribirme!</ion-button>\n</div>\n</ion-card>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/suscripcion/suscripcion.module.ts":
/*!***************************************************!*\
  !*** ./src/app/suscripcion/suscripcion.module.ts ***!
  \***************************************************/
/*! exports provided: SuscripcionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuscripcionPageModule", function() { return SuscripcionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _suscripcion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./suscripcion.page */ "./src/app/suscripcion/suscripcion.page.ts");







const routes = [
    {
        path: '',
        component: _suscripcion_page__WEBPACK_IMPORTED_MODULE_6__["SuscripcionPage"]
    }
];
let SuscripcionPageModule = class SuscripcionPageModule {
};
SuscripcionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_suscripcion_page__WEBPACK_IMPORTED_MODULE_6__["SuscripcionPage"]]
    })
], SuscripcionPageModule);



/***/ }),

/***/ "./src/app/suscripcion/suscripcion.page.scss":
/*!***************************************************!*\
  !*** ./src/app/suscripcion/suscripcion.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title {\n  color: #003883;\n}\n\nion-header {\n  background-color: #fff;\n  border-bottom: 2px solid #022471;\n  text-align: left;\n  top: 0;\n  width: 100%;\n}\n\n.section-title h1 {\n  text-transform: capitalize;\n  font-weight: 700;\n  font-size: 18px;\n  color: #022471;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VzY3JpcGNpb24vQzpcXFVzZXJzXFxBTkRSRVNcXERvY3VtZW50c1xcU09GVFdBUkUtREVTSUdORVJcXGlvbmljXFxpbmljaWFsXFxBcHBTYXRlbmEvc3JjXFxhcHBcXHN1c2NyaXBjaW9uXFxzdXNjcmlwY2lvbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3N1c2NyaXBjaW9uL3N1c2NyaXBjaW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGNBQUE7QUNDRDs7QURFQTtFQUNDLHNCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0FDQ0Q7O0FERUM7RUFDQywwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3N1c2NyaXBjaW9uL3N1c2NyaXBjaW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XHJcblx0Y29sb3I6ICAjMDAzODgzO1xyXG59XHJcblxyXG5pb24taGVhZGVyIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDIyNDcxOyBcclxuXHR0ZXh0LWFsaWduOiBsZWZ0OyBcclxuXHR0b3A6IDA7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0fVxyXG5cclxuXHQuc2VjdGlvbi10aXRsZSBoMSB7XHJcblx0XHR0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuXHRcdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0XHRmb250LXNpemU6IDE4cHg7XHJcblx0XHRjb2xvcjogICMwMjI0NzE7XHJcblx0fVxyXG5cclxuIiwiaW9uLXRpdGxlIHtcbiAgY29sb3I6ICMwMDM4ODM7XG59XG5cbmlvbi1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAyMjQ3MTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNlY3Rpb24tdGl0bGUgaDEge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzAyMjQ3MTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/suscripcion/suscripcion.page.ts":
/*!*************************************************!*\
  !*** ./src/app/suscripcion/suscripcion.page.ts ***!
  \*************************************************/
/*! exports provided: SuscripcionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuscripcionPage", function() { return SuscripcionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SuscripcionPage = class SuscripcionPage {
    constructor() { }
    ngOnInit() {
    }
};
SuscripcionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-suscripcion',
        template: __webpack_require__(/*! raw-loader!./suscripcion.page.html */ "./node_modules/raw-loader/index.js!./src/app/suscripcion/suscripcion.page.html"),
        styles: [__webpack_require__(/*! ./suscripcion.page.scss */ "./src/app/suscripcion/suscripcion.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SuscripcionPage);



/***/ })

}]);
//# sourceMappingURL=suscripcion-suscripcion-module-es2015.js.map