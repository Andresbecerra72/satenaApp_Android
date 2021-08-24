(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["servicios-servicios-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/expand/expand.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/expand/expand.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #expandWrapper class='expand-wrapper' [class.expanded]=\"expanded\" [class.expander]=\"expander\"  [class.expandxs]=\"expandxs\">\n  <ng-content></ng-content>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/servicios/servicios.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/servicios/servicios.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n        <h2>Servicios</h2> \n      </ion-title>\n  </ion-toolbar>\n\n  <ion-fab horizontal=\"end\" vertical=\"top\" slot=\"fixed\">\n      <ion-fab-button color=\"secondary\">\n        <ion-icon name=\"share\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-list>\n        <ion-fab-button href=\"https://www.facebook.com/aerolineasatena\" color=\"light\">\n          <ion-icon name=\"logo-facebook\"></ion-icon>\n        </ion-fab-button>\n        <ion-fab-button href=\"https://twitter.com/AerolineaSatena\" color=\"light\">\n          <ion-icon name=\"logo-twitter\"></ion-icon>\n        </ion-fab-button>\n        <ion-fab-button href=\"https://www.instagram.com/aerolineasatena/\" color=\"light\">\n          <ion-icon name=\"logo-instagram\"></ion-icon>\n        </ion-fab-button>      \n      </ion-fab-list>\n    </ion-fab>\n\n\n</ion-header>\n\n \n   <ion-content class=\"scroller ion-padding\" no-bounce>\n    <ion-card href=\"https://www.satena.com/css/img/carga/recomendaciones_generales.jpg\">\n      <img src=\"/assets/banner/recomend.jpg\" />\n     </ion-card>\n \n    <ion-list >\n\n              <!-- PRIMER SLINDING RECOMENDADOS-->\n              <ion-item-sliding (click)=\"expandedItem00(item)\" *ngFor=\"let item of item00\">\n                <ion-item>\n          \n                  <ion-label>\n                    <strong class=\"strongTitle\">{{item.name}}</strong>\n                    <fa-icon class=\"icono derecha\" [icon]=\"['fas', 'wheelchair']\"></fa-icon>\n                  </ion-label>\n          \n                </ion-item>\n                \n          <!-- EXPAND ES EL COMPONENTE SELECCIONADO PARA LA PAGINA SERVICIOS-->\n                  <app-expand [expandHeight]=\"itemExpandedHeight\" [expandxs]=\"item.expanded\">\n                      <p class=\"paragraf\">\n                          <li>{{item.info}}</li><br>\n                          Dirección: {{item.direccion}}<br>\n                          Celular:{{item.cell}}<br>\n                          <span>E-mail:&nbsp; </span><a href={{item.refmail}}>{{item.email}}</a>\n                      </p>\n                      \n                      \n                  </app-expand>\n                \n               \n              </ion-item-sliding>\n\n\n                  <!-- SEGUNDO SLINDING VIAJEROS CON ARMAS-->\n      <ion-item-sliding (click)=\"expandedItem0(item)\" *ngFor=\"let item of item0\">\n        <ion-item>\n  \n          <ion-label>\n            <strong class=\"strongTitle\">{{item.name}}</strong>\n            <fa-icon class=\"icono derecha\" [icon]=\"['fas', 'bomb']\"></fa-icon>\n          </ion-label>\n  \n        </ion-item>\n        \n  <!-- EXPAND ES EL COMPONENTE SELECCIONADO PARA LA PAGINA SERVICIOS-->\n          <app-expand [expandHeight]=\"itemExpandedHeight\" [expandxs]=\"item.expanded\">\n              <p class=\"paragraf\">\n                  <li>{{item.info}}</li><br>\n                   Dirección: {{item.direccion}}<br>\n                  Celular:{{item.cell}}<br>\n                  <span>E-mail:&nbsp; </span><a href={{item.refmail}}>{{item.email}}</a>\n              </p>\n              \n              \n          </app-expand>\n        \n       \n      </ion-item-sliding>\n\n               <!-- TERCERO SLINDING CORREO Y CARGA-->\n\n        <ion-item-sliding (click)=\"expandedItem1(item)\" *ngFor=\"let item of item1\">\n          <ion-item>\n    \n            <ion-label>\n              <strong class=\"strongTitle\">{{item.name}}</strong>\n              <fa-icon class=\"icono derecha\" [icon]=\"['fas', 'box-open']\"></fa-icon>\n            </ion-label>\n    \n          </ion-item>\n          \n    <!-- EXPAND ES EL COMPONENTE SELECCIONADO PARA LA PAGINA SERVICIOS-->\n            <app-expand [expandHeight]=\"itemExpandedHeight\" [expanded]=\"item.expanded\">\n                <p class=\"paragraf\">\n                    <strong>SATENA</strong> {{item.info}}<br>\n                    <li>{{item.paragraph1}}</li><br>\n                    <li>{{item.paragraph2}}</li><br>\n                    <li>{{item.paragraph3}}</li><br>\n                    Dirección:{{item.direccion}}<br>\n                    Celular:{{item.cell}}&nbsp;\n                    <span>E-mail:&nbsp; </span><a href={{item.refmail}}>{{item.email}}</a>\n                </p>\n                \n                \n            </app-expand>\n          \n         \n        </ion-item-sliding>\n\n        <!-- CUARTO SLINDING TRANSPORTE DE CARGA-->\n      \n        <ion-item-sliding (click)=\"expandedItem2(item)\" *ngFor=\"let item of item2\">\n          <ion-item>\n    \n            <ion-label>\n              <strong class=\"strongTitle\">{{item.name}}</strong>\n              <fa-icon class=\"icono derecha\" [icon]=\"['fas', 'truck']\"></fa-icon>\n            </ion-label>\n    \n          </ion-item>\n          \n    <!-- EXPAND ES EL COMPONENTE SELECCIONADO PARA LA PAGINA SERVICIOS-->\n            <app-expand [expandHeight]=\"itemExpandedHeight\" [expander]=\"item.expanded\">\n                <p class=\"paragraf\">\n                    <strong>SATENA</strong> {{item.info}}<br>\n                           \n                            \n                <!-- SUBITEMS SLINDING DEL TRANSPORTE DE CARGA-->\n                <ion-item-sliding (click)=\"expandedSubItems(item)\" *ngFor=\"let item of subitems\">\n                  \n                  <ion-item>\n            \n                    <ion-label>\n                      <strong class=\"strongTitle\">{{item.name}}</strong>\n                      <fa-icon class=\"icono derecha\" [icon]=\"['fas', 'people-carry']\"></fa-icon>\n                    </ion-label>\n            \n                  </ion-item>\n\n                  <app-expand [expandHeight]=\"itemExpandedHeight\" [expander]=\"item.expanded\">\n                    <p class=\"paragraf\">\n                        <li>{{item.paragraph1}}</li><br>\n                        <li>{{item.paragraph2}}</li><br>\n                        <li>{{item.paragraph3}}</li><br>\n                        <li>{{item.paragraph4}}</li><br>\n                        <li>{{item.paragraph5}}</li><br>\n                        <li>{{item.paragraph6}}</li><br>\n                        <a href=\"{{item.link}}\">{{item.info}}</a>\n              \n                    </p>\n                    \n                    \n                </app-expand>\n\n                </ion-item-sliding>\n              </p>\n                \n            </app-expand>\n          \n         \n        </ion-item-sliding>\n        \n      </ion-list>\n   \n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/components/expand/expand.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/expand/expand.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".expand-wrapper {\n  -webkit-transition: 0.5s linear;\n  transition: 0.5s linear;\n  overflow: hidden;\n  height: 0px;\n}\n\n.expanded {\n  height: 480px !important;\n}\n\n.expander {\n  height: 680px !important;\n}\n\n.expandxs {\n  height: 200px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9leHBhbmQvQzpcXFVzZXJzXFxBTkRSRVNcXERvY3VtZW50c1xcU09GVFdBUkUtREVTSUdORVJcXGlvbmljXFxpbmljaWFsXFxBcHBTYXRlbmEvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGV4cGFuZFxcZXhwYW5kLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2V4cGFuZC9leHBhbmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSwrQkFBQTtFQUFBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDQUo7O0FER0U7RUFDRSx3QkFBQTtBQ0FKOztBREdFO0VBQ0Usd0JBQUE7QUNBSjs7QURHRTtFQUNFLHdCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2V4cGFuZC9leHBhbmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhwYW5kLXdyYXBwZXIge1xyXG4gICAgLy90cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuNHMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGxpbmVhcjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBoZWlnaHQ6IDBweDtcclxuICB9XHJcblxyXG4gIC5leHBhbmRlZCB7XHJcbiAgICBoZWlnaHQ6IDQ4MHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuZXhwYW5kZXIge1xyXG4gICAgaGVpZ2h0OiA2ODBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmV4cGFuZHhzIHtcclxuICAgIGhlaWdodDogMjAwcHggIWltcG9ydGFudDtcclxuICB9IiwiLmV4cGFuZC13cmFwcGVyIHtcbiAgdHJhbnNpdGlvbjogMC41cyBsaW5lYXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogMHB4O1xufVxuXG4uZXhwYW5kZWQge1xuICBoZWlnaHQ6IDQ4MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5leHBhbmRlciB7XG4gIGhlaWdodDogNjgwcHggIWltcG9ydGFudDtcbn1cblxuLmV4cGFuZHhzIHtcbiAgaGVpZ2h0OiAyMDBweCAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/expand/expand.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/expand/expand.component.ts ***!
  \*******************************************************/
/*! exports provided: ExpandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandComponent", function() { return ExpandComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ExpandComponent = class ExpandComponent {
    constructor() {
        this.currentHeight = 0;
    }
    ngAfterViewInit() {
        //console.log(this.expanded);
        //console.log(this.expandHeight);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("expanded"),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ExpandComponent.prototype, "expanded", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("expander"),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ExpandComponent.prototype, "expander", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("expandxs"),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ExpandComponent.prototype, "expandxs", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("expandHeight"),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ExpandComponent.prototype, "expandHeight", void 0);
ExpandComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-expand',
        template: __webpack_require__(/*! raw-loader!./expand.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/expand/expand.component.html"),
        styles: [__webpack_require__(/*! ./expand.component.scss */ "./src/app/components/expand/expand.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ExpandComponent);



/***/ }),

/***/ "./src/app/servicios/servicios.module.ts":
/*!***********************************************!*\
  !*** ./src/app/servicios/servicios.module.ts ***!
  \***********************************************/
/*! exports provided: ServiciosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiciosPageModule", function() { return ServiciosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _servicios_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./servicios.page */ "./src/app/servicios/servicios.page.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _components_expand_expand_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/expand/expand.component */ "./src/app/components/expand/expand.component.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");







//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

//se importa el expandable Component


const routes = [
    {
        path: '',
        component: _servicios_page__WEBPACK_IMPORTED_MODULE_6__["ServiciosPage"]
    }
];
let ServiciosPageModule = class ServiciosPageModule {
    constructor(library) {
        library.addIconPacks(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["fas"]);
        library.addIcons(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faCoffee"]);
    }
};
ServiciosPageModule.ctorParameters = () => [
    { type: _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FaIconLibrary"] }
];
ServiciosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_servicios_page__WEBPACK_IMPORTED_MODULE_6__["ServiciosPage"], _components_expand_expand_component__WEBPACK_IMPORTED_MODULE_8__["ExpandComponent"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FaIconLibrary"]])
], ServiciosPageModule);



/***/ }),

/***/ "./src/app/servicios/servicios.page.scss":
/*!***********************************************!*\
  !*** ./src/app/servicios/servicios.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title {\n  color: #003883;\n}\n\nion-header {\n  background-color: #fff;\n  border-bottom: 2px solid #022471;\n  text-align: left;\n  top: 0;\n  width: 100%;\n}\n\nion-label {\n  background-color: rgba(0, 0, 0, 0.04);\n  color: gray;\n}\n\n.scroller {\n  overflow-x: scroll;\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n  scroll-behavior: smooth;\n}\n\n.scroller::-webkit-scrollbar {\n  display: none;\n}\n\n.strongTitle {\n  color: #003883;\n}\n\n.paragraf {\n  padding: 20px;\n  background-color: rgba(0, 0, 0, 0.04);\n  font-style: italic;\n  color: gray;\n  font-size: small;\n}\n\n.icono.derecha {\n  float: right;\n  margin-left: 10px;\n}\n\n.toggle-down {\n  -webkit-transform: rotate(0deg);\n          transform: rotate(0deg);\n}\n\n.toggle-up {\n  color: #003883;\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmljaW9zL0M6XFxVc2Vyc1xcQU5EUkVTXFxEb2N1bWVudHNcXFNPRlRXQVJFLURFU0lHTkVSXFxpb25pY1xcaW5pY2lhbFxcQXBwU2F0ZW5hL3NyY1xcYXBwXFxzZXJ2aWNpb3NcXHNlcnZpY2lvcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3NlcnZpY2lvcy9zZXJ2aWNpb3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsY0FBQTtBQ0NEOztBREVBO0VBQ0Msc0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7QUNDRDs7QURFQTtFQUNDLHFDQUFBO0VBQ0EsV0FBQTtBQ0NEOztBREVBO0VBRUksa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtBQ0FKOztBREVJO0VBQ0UsYUFBQTtBQ0FOOztBREtBO0VBQ0MsY0FBQTtBQ0ZEOztBREtBO0VBQ0MsYUFBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNGRDs7QURLQTtFQUNDLFlBQUE7RUFDQSxpQkFBQTtBQ0ZEOztBRE1BO0VBQ0MsK0JBQUE7VUFBQSx1QkFBQTtBQ0hEOztBRE9BO0VBQ0MsY0FBQTtFQUNBLGdDQUFBO1VBQUEsd0JBQUE7QUNKRCIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2lvcy9zZXJ2aWNpb3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxlIHtcclxuXHRjb2xvcjogICMwMDM4ODM7XHJcbn1cclxuXHJcbmlvbi1oZWFkZXIge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMjI0NzE7IFxyXG5cdHRleHQtYWxpZ246IGxlZnQ7IFxyXG5cdHRvcDogMDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHR9XHJcblxyXG5pb24tbGFiZWwge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNCk7XHJcblx0Y29sb3I6IGdyYXk7XHJcbn1cclxuXHJcbi5zY3JvbGxlciB7XHJcblx0XHJcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XHJcbiAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XHJcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7ICAvLyBJRSAxMCtcclxuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTsgIC8vIEZpcmVmb3hcclxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG5cclxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgZGlzcGxheTogbm9uZTsgLy8gU2FmYXJpIGFuZCBDaHJvbWVcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi5zdHJvbmdUaXRsZSB7XHJcblx0Y29sb3I6ICAjMDAzODgzO1xyXG59XHJcblxyXG4ucGFyYWdyYWYge1xyXG5cdHBhZGRpbmc6IDIwcHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA0KTtcclxuXHRmb250LXN0eWxlOiBpdGFsaWM7XHJcblx0Y29sb3I6IGdyYXk7XHJcblx0Zm9udC1zaXplOiBzbWFsbDtcclxufVxyXG5cclxuLmljb25vLmRlcmVjaGEge1xyXG5cdGZsb2F0OiByaWdodDtcclxuXHRtYXJnaW4tbGVmdDogMTBweDsgXHJcblx0XHJcbn1cclxuXHJcbi50b2dnbGUtZG93biB7XHJcblx0dHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4udG9nZ2xlLXVwIHtcclxuXHRjb2xvcjogICMwMDM4ODM7XHJcblx0dHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gIH1cclxuICBcclxuIiwiaW9uLXRpdGxlIHtcbiAgY29sb3I6ICMwMDM4ODM7XG59XG5cbmlvbi1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAyMjQ3MTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLWxhYmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA0KTtcbiAgY29sb3I6IGdyYXk7XG59XG5cbi5zY3JvbGxlciB7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG4uc2Nyb2xsZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnN0cm9uZ1RpdGxlIHtcbiAgY29sb3I6ICMwMDM4ODM7XG59XG5cbi5wYXJhZ3JhZiB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG59XG5cbi5pY29uby5kZXJlY2hhIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLnRvZ2dsZS1kb3duIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG59XG5cbi50b2dnbGUtdXAge1xuICBjb2xvcjogIzAwMzg4MztcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/servicios/servicios.page.ts":
/*!*********************************************!*\
  !*** ./src/app/servicios/servicios.page.ts ***!
  \*********************************************/
/*! exports provided: ServiciosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiciosPage", function() { return ServiciosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ServiciosPage = class ServiciosPage {
    constructor() {
        this.item00 = []; //recomendados
        this.item0 = []; //viajeros con armas
        this.item1 = []; //correo y carga
        this.item2 = []; //transporte de carga
        this.subitems = []; //subitems carga 
        //itemExpanded: boolean = false;
        this.itemExpandedHeight = 200;
        this.upClass = 'toggle-up';
        this.downClass = 'toggle-down';
        //personas recomendadas
        this.item00 = [
            {
                name: 'Personas Recomendadas',
                info: 'Los pasajeros con alguna discapacidad y los adultos mayores, que requieran asistencia especial, así como los niños menores de cinco (5) años y las mujeres embarazadas, junto con sus acompañantes (en caso de ser necesario), tendrán prelación para el embarque. ',
                direccion: 'Terminal Puente Aéreo: Av. Calle 26 #103-08 Entrada Principal, Puerta 3',
                cell: '(571) 423 85 30 Ext. 2294 - 2049 - 2048',
                email: 'info@satena.com. ',
                refmail: 'mailto:info@satena.com. ',
            }
        ];
        //viajeros con armas
        this.item0 = [
            {
                name: 'Viajeros con Armas',
                info: 'Para mayor informacion del procedimiento comunicarse con los numeros de contacto o presentarse 3 horas antes en los modulos.',
                direccion: 'Terminal Puente Aéreo: Av. Calle 26 #103-08 Entrada Principal, Puerta 3',
                cell: '(571) 423 85 30 Ext. 2294 - 2049 - 2048',
                email: 'info@satena.com. ',
                refmail: 'mailto:info@satena.com. ',
            }
        ];
        //transporte correo y carga
        this.item1 = [
            {
                name: 'Correo y Carga',
                info: 'ofrece el servicio de transporte de carga y correo en su modalidad Aeropuerto–Aeropuerto.',
                paragraph1: 'Transporte de correo aeropuerto – aeropuerto: Se considera todo paquete cuyo peso sea inferior a 2 kilos; tiene tiempos de entrega entre 24 y 48 horas. Si es un destino el cual no tiene frecuencia diaria, se le debe informar un tiempo aproximado de entrega al cliente.',
                paragraph2: 'Transporte de carga aeropuerto – aeropuerto: Se considera carga todo paquete cuyo peso sea superior a 2 kilos. Este servicio está sujeto a disponibilidad de cupo en la aeronave. Se considera carga común todas aquellas que no requieren un tratamiento o cuidado especial.',
                paragraph3: 'Transportes especiales aeropuerto – aeropuerto: Se considera transporte especial, todos aquellos envíos que requieren un tratamiento diferente ya sea por su naturaleza o por el manejo de los mismos. Dentro de este tipo de envíos se consideran: mascotas, muestras médicas no contagiosas, animales de cría, transporte de plantas y objetos delicados.',
                details: 'Para mayor información puedes comunicarte con nuestra bodega de carga.',
                direccion: 'Calle 25 D Bis carrera 102 A Bodega 1',
                cell: '311 236 29 69',
                email: 'carga@satena.com',
                refmail: 'mailto:carga@satena.com',
                expanded: false
            },
        ];
        //transporte de carga
        this.item2 = [
            {
                name: 'Transporte de carga',
                info: 'ofrece a la comunidad interesada en transporte de carga, los servicios de transporte aeropuerto - aeropuerto en sus rutas de operación de manera responsable y segura. Y con el fin de prestarles un buen servicio recomendamos a nuestros estimados clientes tener en cuenta lo siguiente:',
                expanded: false
            },
        ];
        //subitems del transporte de carga
        this.subitems = [
            {
                name: 'Trans. de componentes sanguineos',
                paragraph1: 'facilita el transporte de componentes sanguíneos, teniendo en cuenta que cumplan la instrucción de embalaje 650 que se aplica al número ONU 3373 (Sustancias biológicas de Categoría B)',
                paragraph2: 'Las muestras deberán empacarse en embalajes de buena calidad, lo suficientemente fuertes para soportar los choques y cargas que se encuentran normalmente durante el transporte.',
                paragraph3: 'Los embalajes deben ser construidos y cerrados de una forma tal que se prevenga cualquier pérdida del contenido que pudiera ocasionarse bajo condiciones normales del transporte, por las vibraciones, cambios de temperatura, humedad o presión.',
                paragraph4: 'Se debe adjuntar el certificado del laboratorio remitente, donde se indique que la manipulación de estos elementos no representa riesgos para el ser humano.',
                paragraph5: 'Para mayor información puedes comunicarte con nuestra bodega de carga.',
                expanded: false
            },
            {
                name: 'Transporte de perros y gatos',
                paragraph1: 'Se deben transportar en guacales en fibra de vidrio, con su adecuada ventilación, cierre seguro y en óptimas condiciones, en donde la mascota pueda viajar sin que su estado tanto físico como emocional se vean afectados',
                paragraph2: 'La mascota no debe llevar collares, lazos o cualquier otro elemento que pueda afectar su integridad física',
                paragraph3: 'Los perros que se encuentran clasificados dentro de las llamadas "Razas Peligrosas" deben llevar siempre bozal y se debe conservar un espacio de 10 cm entre las paredes del guacal y el animal',
                paragraph4: 'Debes enviar solo una mascota por guacal. Se harán excepciones cuando se trate de mascotas recién nacidas, caso en el que se pueden manejar dos ejemplares por guacal.',
                paragraph5: 'Se debe anexar el carné de vacunas, el cual se entregará al destinatario. En su defecto cuando la mascota no cumpla con la edad requerida para ser vacunada, se debe exigir un certificado expedido por un veterinario calificado.',
                paragraph6: 'La mascota debe ser recogida en el destino antes de las 18:00 horas del mismo día, ya que las mascotas no pueden pasar la noche en las bodegas de carga',
                expanded: false
            },
            {
                name: 'Transporte de piezas fragiles',
                paragraph1: 'Para el transporte de toda pieza considerada frágil como cuadros, elementos de vidrio, porcelanas, objetos de mármol, entre otros, se debe exigir un embalaje que lo proteja de golpes y demás riesgos propios del transporte de carga, como envoltura en madera y/o icopor entre otros que lo protejan.',
                paragraph2: 'Exija la etiqueta que lo identifique como pieza Frágil y/o la etiqueta de orientación del bulto.',
                paragraph3: 'Direccion: Calle 25 D Bis carrera 102 A Bodega 1',
                paragraph4: 'Celular: 311 236 29 69 Email: carga@satena.com',
                expanded: false
            },
            {
                name: 'Mercancias extranjeras',
                paragraph1: 'Para el envío de mercancías como calzado, vestuario, tecnología de comunicaciones (celulares-computadores) y/o licores en unidades comerciales, se debe presentar la Factura de Compra y/o copia de la Declaración de Importación donde tenga la descripción de la mercancía a transportar con el fin de evitar el decomiso, aprehensión o inmovilización de las mismas por parte de las autoridades',
                paragraph2: 'Direccion: Calle 25 D Bis carrera 102 A Bodega 1',
                paragraph3: 'Celular: 311 236 29 69 Email: carga@satena.com',
                expanded: false
            },
            {
                name: 'Contrato de carga',
                paragraph1: 'El presente documento contiene las condiciones contractuales que condicionan la prestación del servicio para el transporte de Carga.',
                paragraph2: 'Direccion: Calle 25 D Bis carrera 102 A Bodega 1',
                paragraph3: 'Celular: 311 236 29 69 Email: carga@satena.com',
                info: 'Ver Contrato',
                link: 'https://www.satena.com/viewer.php?id=383&&rlsk=%27YUhSMGNITTZMeTkzZDNjdWMyRjBaVzVoTG1OdmJTOWtiMk4xYldWdWRHOXpMMlpwYkdWekwyTnZiblJ5WVhSdlgyUmxYMk5oY21kaExuQmtaZz09%27',
                expanded: false
            },
        ];
    }
    //personas recomendadas
    //codigo para expandir el elemento cuando se hace click 
    expandedItem00(item) {
        if (item.expanded) {
            item.expanded = false;
        }
        else {
            this.item00.map(listItem => {
                if (item == listItem) {
                    listItem.expanded = !listItem.expanded;
                }
                else {
                    listItem.expanded = false;
                }
                return listItem;
            });
        }
    }
    //viajeros con armas
    //codigo para expandir el elemento cuando se hace click 
    expandedItem0(item) {
        if (item.expanded) {
            item.expanded = false;
        }
        else {
            this.item0.map(listItem => {
                if (item == listItem) {
                    listItem.expanded = !listItem.expanded;
                }
                else {
                    listItem.expanded = false;
                }
                return listItem;
            });
        }
    }
    //transporte de correo y cargas
    //codigo para expandir el elemento cuando se hace click 
    expandedItem1(item) {
        if (item.expanded) {
            item.expanded = false;
        }
        else {
            this.item1.map(listItem => {
                if (item == listItem) {
                    listItem.expanded = !listItem.expanded;
                }
                else {
                    listItem.expanded = false;
                }
                return listItem;
            });
        }
    }
    //transporte de carga
    //codigo para expandir el elemento cuando se hace click 
    expandedItem2(item) {
        if (item.expanded) {
            item.expanded = true;
        }
        else {
            this.item2.map(listItem => {
                if (item == listItem) {
                    listItem.expanded = !listItem.expanded;
                }
                else {
                    listItem.expanded = false;
                }
                return listItem;
            });
        }
    }
    //subitems de Carga
    //codigo para expandir el elemento cuando se hace click 
    expandedSubItems(item) {
        if (item.expanded) {
            item.expanded = false;
        }
        else {
            this.subitems.map(listItem => {
                if (item == listItem) {
                    listItem.expanded = !listItem.expanded;
                }
                else {
                    listItem.expanded = false;
                }
                return listItem;
            });
        }
    }
    //***************
    //se usa para mover el icono
    toggle() {
        var square = document.querySelector('.icono.derecha');
        if (~square.className.indexOf(this.downClass)) {
            square.className = square.className.replace(this.downClass, this.upClass);
        }
        else {
            square.className = square.className.replace(this.upClass, this.downClass);
        }
    }
};
ServiciosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-servicios',
        template: __webpack_require__(/*! raw-loader!./servicios.page.html */ "./node_modules/raw-loader/index.js!./src/app/servicios/servicios.page.html"),
        styles: [__webpack_require__(/*! ./servicios.page.scss */ "./src/app/servicios/servicios.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ServiciosPage);



/***/ })

}]);
//# sourceMappingURL=servicios-servicios-module-es2015.js.map