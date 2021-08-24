(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["oficinas-oficinas-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/expandable/expandable.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/expandable/expandable.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #expandWrapper class='expand-wrapper' [class.expanded]=\"expanded\">\r\n        <ng-content></ng-content>\r\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/oficinas/oficinas.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/oficinas/oficinas.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  \r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-title>\r\n      <h2 style=\"font-size: 1.2em;\">Nuestras Oficinas</h2> \r\n      </ion-title>\r\n    </ion-toolbar>\r\n\r\n    <ion-fab horizontal=\"end\" vertical=\"top\" slot=\"fixed\">\r\n        <ion-fab-button color=\"secondary\">\r\n          <ion-icon name=\"share\"></ion-icon>\r\n        </ion-fab-button>\r\n        <ion-fab-list>\r\n          <ion-fab-button href=\"https://www.facebook.com/aerolineasatena\" color=\"light\">\r\n            <ion-icon name=\"logo-facebook\"></ion-icon>\r\n          </ion-fab-button>\r\n          <ion-fab-button href=\"https://twitter.com/AerolineaSatena\" color=\"light\">\r\n            <ion-icon name=\"logo-twitter\"></ion-icon>\r\n          </ion-fab-button>\r\n          <ion-fab-button href=\"https://www.instagram.com/aerolineasatena/\" color=\"light\">\r\n            <ion-icon name=\"logo-instagram\"></ion-icon>\r\n          </ion-fab-button>      \r\n        </ion-fab-list>\r\n      </ion-fab>\r\n\r\n\r\n  </ion-header>\r\n  \r\n  \r\n  \r\n<ion-content class=\"scroller ion-padding\" no-bounce>\r\n\r\n\r\n<ion-list >\r\n    <ion-item-sliding (click)=\"expandedItem(item)\" *ngFor=\"let item of items\">\r\n      <ion-item>\r\n\r\n        <ion-label>\r\n          <strong class=\"strongTitle\">{{item.name}}</strong> {{item.iata}}\r\n          <fa-icon class=\"icono derecha\" [icon]=\"['fas', 'map-pin']\"></fa-icon>\r\n        </ion-label>\r\n\r\n      </ion-item>\r\n      \r\n<!-- EXPANDABLE ES EL COMPONENTE SELECCIONADO PARA LA PAGINA OFICINAS-->\r\n        <app-expandable [expandHeight]=\"itemExpandedHeight\" [expanded]=\"item.expanded\">\r\n            <p class=\"paragraf\">\r\n                <strong>Oficina Principal:</strong> {{item.direccion}}&nbsp;{{item.lugar}}<br>\r\n                Teléfono: {{item.telefono}}<br>\r\n                Celular Oficina: {{item.celular}}<br>\r\n                Celular Aeropuerto: {{item.cellAeropuerto}}<br>\r\n                {{item.info}}<br>\r\n                <span>E-mail:&nbsp; </span><a href={{item.refmail}}>{{item.email}}</a>\r\n            </p>\r\n        </app-expandable>\r\n      \r\n     \r\n    </ion-item-sliding>\r\n  \r\n    \r\n  </ion-list>\r\n\r\n\r\n  \r\n\r\n\r\n\r\n<!--*****************-->\r\n    \r\n\r\n\r\n  </ion-content>\r\n\r\n  \r\n  "

/***/ }),

/***/ "./src/app/components/expandable/expandable.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/expandable/expandable.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".expand-wrapper {\n  -webkit-transition: 0.5s linear;\n  transition: 0.5s linear;\n  overflow: hidden;\n  height: 0px;\n}\n\n.expanded {\n  height: 160px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9leHBhbmRhYmxlL0M6XFxVc2Vyc1xcQU5EUkVTXFxEb2N1bWVudHNcXFNPRlRXQVJFLURFU0lHTkVSXFxpb25pY1xcaW5pY2lhbFxcQXBwU2F0ZW5hL3NyY1xcYXBwXFxjb21wb25lbnRzXFxleHBhbmRhYmxlXFxleHBhbmRhYmxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2V4cGFuZGFibGUvZXhwYW5kYWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBSTtFQUVJLCtCQUFBO0VBQUEsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNBUjs7QURHTTtFQUNFLHdCQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2V4cGFuZGFibGUvZXhwYW5kYWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgICAuZXhwYW5kLXdyYXBwZXIge1xyXG4gICAgICAgIC8vdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjRzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuNXMgbGluZWFyO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgaGVpZ2h0OiAwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5leHBhbmRlZCB7XHJcbiAgICAgICAgaGVpZ2h0OiAxNjBweCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcblxyXG4iLCIuZXhwYW5kLXdyYXBwZXIge1xuICB0cmFuc2l0aW9uOiAwLjVzIGxpbmVhcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiAwcHg7XG59XG5cbi5leHBhbmRlZCB7XG4gIGhlaWdodDogMTYwcHggIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/expandable/expandable.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/expandable/expandable.component.ts ***!
  \***************************************************************/
/*! exports provided: ExpandableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandableComponent", function() { return ExpandableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ExpandableComponent = /** @class */ (function () {
    function ExpandableComponent() {
        this.currentHeight = 0;
    }
    ExpandableComponent.prototype.ngAfterViewInit = function () {
        //console.log(this.expanded);
        // console.log(this.expandHeight);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("expanded"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ExpandableComponent.prototype, "expanded", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("expandHeight"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ExpandableComponent.prototype, "expandHeight", void 0);
    ExpandableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-expandable",
            template: __webpack_require__(/*! raw-loader!./expandable.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/expandable/expandable.component.html"),
            styles: [__webpack_require__(/*! ./expandable.component.scss */ "./src/app/components/expandable/expandable.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExpandableComponent);
    return ExpandableComponent;
}());



/***/ }),

/***/ "./src/app/oficinas/oficinas.module.ts":
/*!*********************************************!*\
  !*** ./src/app/oficinas/oficinas.module.ts ***!
  \*********************************************/
/*! exports provided: OficinasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OficinasPageModule", function() { return OficinasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _oficinas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./oficinas.page */ "./src/app/oficinas/oficinas.page.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _components_expandable_expandable_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/expandable/expandable.component */ "./src/app/components/expandable/expandable.component.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");







//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

//se importa el expandable Component


var OficinasPageModule = /** @class */ (function () {
    function OficinasPageModule(library) {
        library.addIconPacks(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["fas"]);
        library.addIcons(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faCoffee"]);
    }
    OficinasPageModule.ctorParameters = function () { return [
        { type: _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FaIconLibrary"] }
    ]; };
    OficinasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _oficinas_page__WEBPACK_IMPORTED_MODULE_6__["OficinasPage"] }])
            ],
            declarations: [_oficinas_page__WEBPACK_IMPORTED_MODULE_6__["OficinasPage"], _components_expandable_expandable_component__WEBPACK_IMPORTED_MODULE_8__["ExpandableComponent"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FaIconLibrary"]])
    ], OficinasPageModule);
    return OficinasPageModule;
}());



/***/ }),

/***/ "./src/app/oficinas/oficinas.page.scss":
/*!*********************************************!*\
  !*** ./src/app/oficinas/oficinas.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title {\n  color: #003883;\n}\n\nion-header {\n  background-color: #fff;\n  border-bottom: 2px solid #022471;\n  text-align: left;\n  top: 0;\n  width: 100%;\n}\n\nion-label {\n  background-color: rgba(0, 0, 0, 0.04);\n  color: gray;\n}\n\n.scroller {\n  overflow-x: scroll;\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n  scroll-behavior: smooth;\n}\n\n.scroller::-webkit-scrollbar {\n  display: none;\n}\n\n.strongTitle {\n  color: #003883;\n}\n\n.paragraf {\n  padding: 20px;\n  background-color: rgba(0, 0, 0, 0.04);\n  font-style: italic;\n  color: gray;\n  font-size: small;\n}\n\n.icono.derecha {\n  float: right;\n  margin-left: 10px;\n}\n\n.toggle-down {\n  -webkit-transform: rotate(0deg);\n          transform: rotate(0deg);\n}\n\n.toggle-up {\n  color: #003883;\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb2ZpY2luYXMvQzpcXFVzZXJzXFxBTkRSRVNcXERvY3VtZW50c1xcU09GVFdBUkUtREVTSUdORVJcXGlvbmljXFxpbmljaWFsXFxBcHBTYXRlbmEvc3JjXFxhcHBcXG9maWNpbmFzXFxvZmljaW5hcy5wYWdlLnNjc3MiLCJzcmMvYXBwL29maWNpbmFzL29maWNpbmFzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGNBQUE7QUNDRDs7QURFQTtFQUNDLHNCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0FDQ0Q7O0FERUE7RUFDQyxxQ0FBQTtFQUNBLFdBQUE7QUNDRDs7QURFQTtFQUVJLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7QUNBSjs7QURFSTtFQUNFLGFBQUE7QUNBTjs7QURLQTtFQUNDLGNBQUE7QUNGRDs7QURLQTtFQUNDLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDRkQ7O0FES0E7RUFDQyxZQUFBO0VBQ0EsaUJBQUE7QUNGRDs7QURNQTtFQUNDLCtCQUFBO1VBQUEsdUJBQUE7QUNIRDs7QURPQTtFQUNDLGNBQUE7RUFDQSxnQ0FBQTtVQUFBLHdCQUFBO0FDSkQiLCJmaWxlIjoic3JjL2FwcC9vZmljaW5hcy9vZmljaW5hcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGUge1xyXG5cdGNvbG9yOiAgIzAwMzg4MztcclxufVxyXG5cclxuaW9uLWhlYWRlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRib3JkZXItYm90dG9tOiAycHggc29saWQgIzAyMjQ3MTsgXHJcblx0dGV4dC1hbGlnbjogbGVmdDsgXHJcblx0dG9wOiAwO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdH1cclxuXHJcbmlvbi1sYWJlbCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA0KTtcclxuXHRjb2xvcjogZ3JheTtcclxufVxyXG5cclxuLnNjcm9sbGVyIHtcclxuXHRcclxuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcclxuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgIC8vIElFIDEwK1xyXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAgLy8gRmlyZWZveFxyXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcblxyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICBkaXNwbGF5OiBub25lOyAvLyBTYWZhcmkgYW5kIENocm9tZVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLnN0cm9uZ1RpdGxlIHtcclxuXHRjb2xvcjogICMwMDM4ODM7XHJcbn1cclxuXHJcbi5wYXJhZ3JhZiB7XHJcblx0cGFkZGluZzogMjBweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDQpO1xyXG5cdGZvbnQtc3R5bGU6IGl0YWxpYztcclxuXHRjb2xvcjogZ3JheTtcclxuXHRmb250LXNpemU6IHNtYWxsO1xyXG59XHJcblxyXG4uaWNvbm8uZGVyZWNoYSB7XHJcblx0ZmxvYXQ6IHJpZ2h0O1xyXG5cdG1hcmdpbi1sZWZ0OiAxMHB4OyBcclxuXHRcclxufVxyXG5cclxuLnRvZ2dsZS1kb3duIHtcclxuXHR0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbi50b2dnbGUtdXAge1xyXG5cdGNvbG9yOiAgIzAwMzg4MztcclxuXHR0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgfVxyXG4gIFxyXG4iLCJpb24tdGl0bGUge1xuICBjb2xvcjogIzAwMzg4Mztcbn1cblxuaW9uLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDIyNDcxO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pb24tbGFiZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDQpO1xuICBjb2xvcjogZ3JheTtcbn1cblxuLnNjcm9sbGVyIHtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cbi5zY3JvbGxlcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc3Ryb25nVGl0bGUge1xuICBjb2xvcjogIzAwMzg4Mztcbn1cblxuLnBhcmFncmFmIHtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA0KTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiBzbWFsbDtcbn1cblxuLmljb25vLmRlcmVjaGEge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4udG9nZ2xlLWRvd24ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbn1cblxuLnRvZ2dsZS11cCB7XG4gIGNvbG9yOiAjMDAzODgzO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59Il19 */"

/***/ }),

/***/ "./src/app/oficinas/oficinas.page.ts":
/*!*******************************************!*\
  !*** ./src/app/oficinas/oficinas.page.ts ***!
  \*******************************************/
/*! exports provided: OficinasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OficinasPage", function() { return OficinasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OficinasPage = /** @class */ (function () {
    function OficinasPage() {
        this.items = [];
        //itemExpanded: boolean = false;
        this.itemExpandedHeight = 170;
        this.upClass = 'toggle-up';
        this.downClass = 'toggle-down';
        this.items = [
            {
                name: 'Aguachica',
                iata: '- HAY',
                direccion: 'Aeropuerto Hacaritama de Aguachica',
                lugar: '',
                telefono: '313 801 41 27',
                celular: '313 801 41 27',
                cellAeropuerto: '',
                email: 'aguachica@satena.com',
                refmail: 'mailto:aguachica@satena.com',
                info: '',
                expanded: false
            },
            {
                name: 'Apartadó',
                iata: '- APO',
                direccion: 'Carrera 103 No. 99 - 44',
                lugar: 'Edificio Los Almendros, Barrio Ortiz',
                telefono: ' (57+4) 8283223 - (57+4) 8282327 - (57+4) 8285011',
                celular: '(311) 254 68 06 - (311) 432 50 45',
                cellAeropuerto: '(311) 2362998',
                email: 'apartado@satena.com',
                refmail: 'mailto:apartado@satena.com',
                info: '',
                expanded: false
            },
            {
                name: 'Araracuara',
                iata: '- ACR',
                direccion: 'Vía aeropuerto',
                lugar: '',
                telefono: ' ',
                celular: '(310) 219 83 25 - (313) 868 59 83',
                cellAeropuerto: '(310) 219 83 25',
                email: 'araracuara@satena.com',
                refmail: 'mailto:araracuara@satena.com',
                info: '',
                expanded: false
            },
            {
                name: 'Arauca',
                iata: '- AUC',
                direccion: 'Aeropuerto Santiago Pérez',
                lugar: '',
                telefono: '(7) 8853407 ext 103',
                celular: '(310) 209 73 20, (320) 726 45 05, (310) 778 59 19',
                cellAeropuerto: '(310) 209 72 79',
                email: 'araucacentro@satena.com',
                refmail: 'mailto:araucacentro@satena.com',
                info: 'Ventas: Carrera 19 No 22 - 04',
                expanded: false
            },
            {
                name: 'Bahía Solano',
                iata: '- BSC',
                direccion: 'Calle 3 No 1-149',
                lugar: 'Barrio el Carmel',
                celular: '(313) 422 27 94',
                cellAeropuerto: '(311) 876 89 61',
                email: 'bahiasolano@satena.com',
                refmail: 'mailto:bahiasolano@satena.com',
                expanded: false
            },
            {
                name: 'Bogotá',
                iata: '- BOG',
                direccion: 'Av El Dorado No 103-08 Entrada 1, Interior 11',
                lugar: 'Dirección Comercial: Carrera 103 N°25D-24, Fontibón',
                telefono: '(57+1) 423 85 30',
                celular: '314 359 73 57',
                cellAeropuerto: 'WhatsApp 313 438 46 22',
                email: 'ventasaeropuerto@satena.com',
                refmail: 'mailto:ventasaeropuerto@satena.com',
                info: 'Terminal Puente Aereo Entrada Principal, Puerta 3',
                expanded: false
            },
            {
                name: 'Bucaramanga',
                iata: '- BGA',
                direccion: 'Calle 35 No 16-20 Local 5',
                lugar: 'Pasaje Santander',
                telefono: '(57+7) 6301705 - (57+7) 6707087',
                celular: '(311) 236 29 96',
                cellAeropuerto: '(311) 236 29 97',
                email: 'bucaramanga@satena.com',
                refmail: 'mailto:bucaramanga@satena.com',
                info: '',
                expanded: false
            },
            {
                name: 'Buenaventura',
                iata: '- BUN',
                direccion: 'Calle 1 No. 2A – 39',
                lugar: 'Centro',
                telefono: '(57+2) 2418009 - (57+2) 2423825',
                celular: '(310) 325 87 22',
                cellAeropuerto: '(310) 325 87 22',
                email: 'buenaventura@satena.com',
                refmail: 'mailto:buenaventura@satena.com',
                info: '',
                expanded: false
            },
            {
                name: 'Cali',
                iata: '- CLO',
                direccion: 'Cra 5 No. 8 - 12',
                lugar: '',
                telefono: ' (57+2) 8857709',
                celular: ' (311) 254 68 22, Carga:(315) 897 02 39',
                cellAeropuerto: '(57+2) 666 33 70 - (57+2) 666 32 95',
                email: 'cali@satena.com',
                refmail: 'mailto:cali@satena.com',
                info: 'Bodega de Carga: Aeropuerto Alfonso Bonilla Aragon, Terminal de carga, bodega No.5 TAESCOL.',
                expanded: false
            },
            {
                name: 'Corozal',
                iata: '- CZU',
                direccion: '',
                lugar: '',
                telefono: '(320) 7899631',
                celular: '(320) 7899631 - (300) 8102153',
                cellAeropuerto: '',
                email: 'corozal@satena.com',
                refmail: 'mailto:corozal@satena.com',
                info: '',
                expanded: false
            },
            {
                name: 'Florencia',
                iata: '- FLA',
                direccion: 'Carrera 13 No 12-57',
                lugar: 'Barrio San Francisco',
                telefono: '(57+8) 438 02 74',
                celular: '(320) 303 77 83 - (318) 493 10 41',
                cellAeropuerto: '(313) 462 83 47',
                email: 'florencia@satena.com',
                refmail: 'mailto:florencia@satena.com',
                info: '',
                expanded: false
            },
            {
                name: 'Guapi',
                iata: '- GPI',
                direccion: 'Avenida Aeropuerto Juan Casiano',
                lugar: 'Aeropuerto',
                telefono: '(57+2) 840 11 66',
                celular: '(311) 876 89 58 - (310) 322 74 46',
                cellAeropuerto: '(311) 254 68 09',
                email: 'guapi@satena.com',
                refmail: 'mailto:guapi@satena.com',
                info: '',
                expanded: false
            },
            {
                name: 'Inírida',
                iata: '- PDA',
                direccion: 'Carrera 3A No.15-05 Locales 7 y 8',
                lugar: 'El Puerto',
                telefono: '(313) 422 27 41',
                celular: '(311) 229 77 28',
                cellAeropuerto: '(311) 229 77 28',
                email: 'inirida@satena.com',
                refmail: 'mailto:inirida@satena.com',
                info: '',
                expanded: false
            },
            {
                name: 'Ipiales',
                iata: '- IPI',
                direccion: 'Carrera 7 No. 16-49',
                lugar: '',
                telefono: '(57+2) 7256085 – (57+2) 7256086',
                celular: '(321) 232 49 29',
                cellAeropuerto: '(311) 254 68 18',
                email: 'ipiales@satena.com',
                refmail: 'mailto:ipiales@satena.com',
                info: '',
                expanded: false
            },
            {
                name: 'La Chorrera',
                iata: '- LCH',
                direccion: 'Aeropuerto La Chorrera',
                lugar: '',
                telefono: '(320) 850 94 51',
                celular: '(320) 850 9451 – (320) 850 8034',
                cellAeropuerto: '',
                email: 'chorrera@satena.com',
                refmail: 'mailto:chorrera@satena.com',
                info: '',
                expanded: false
            },
            {
                name: 'La Macarena',
                iata: '- LMC',
                direccion: 'Aeropuerto La Macarena',
                lugar: '',
                telefono: '(311) 532 01 90',
                celular: '(321) 395 29 25',
                cellAeropuerto: '',
                email: 'macarena@satena.com',
                refmail: 'mailto:macarena@satena.com',
                info: '',
                expanded: false
            },
            {
                name: 'La Pedrera',
                iata: '- LPD',
                direccion: 'Aeropuerto La Pedrera',
                lugar: '',
                telefono: '(320) 488 19 46',
                celular: '(320) 488 19 46',
                cellAeropuerto: '',
                email: 'leticia@satena.com',
                refmail: 'mailto:leticia@satena.com',
                info: '',
                expanded: false
            },
            {
                name: 'Leticia',
                iata: '- LET',
                direccion: 'Aeropuerto Alfredo Vasquez Cobo',
                lugar: '',
                telefono: '(57+8) 5924845',
                celular: '(312) 457 62 91 – (310) 329 05 07',
                cellAeropuerto: '(310) 329 05 07',
                email: 'leticia@satena.com',
                refmail: 'mailto:leticia@satena.com',
                info: '',
                expanded: false
            },
            {
                name: 'Medellin',
                iata: '- EOH',
                direccion: 'Calle 7 Sur No 42-70, Oficina 1111',
                lugar: 'Edificio Forum',
                telefono: '(57+4) 444 77 00',
                celular: '(312) 457 64 32',
                cellAeropuerto: '(310) 359 20 16',
                email: 'medellin@satena.com',
                refmail: 'mailto:medellin@satena.com',
                info: 'Aeropuerto Olaya Herrera: Carrera 65A No 13-157',
                expanded: false
            },
            {
                name: 'Mitú',
                iata: '- MVP',
                direccion: 'Aeropuerto Fabio A. León Bentley',
                lugar: '',
                telefono: '(310) 803 73 98',
                celular: '(321) 205 52 53',
                cellAeropuerto: '',
                email: 'mitu@satena.com',
                refmail: 'mailto:mitu@satena.com',
                info: '',
                expanded: false
            },
            {
                name: 'Mocoa',
                iata: '',
                direccion: 'Carrera 9ª No. 17 - 42',
                lugar: 'Edificio Julio Muriel – Local 101',
                telefono: '(57+8) 429 51 06',
                celular: '(310) 560 86 03',
                cellAeropuerto: '(311) 254 68 98',
                email: 'mocoa@satena.com',
                refmail: 'mailto:mocoa@satena.com',
                info: '',
                expanded: false
            },
            {
                name: 'Neiva',
                iata: '- NVA',
                direccion: 'Carrera 8 No 20-06',
                lugar: 'Punto de Venta',
                telefono: '(57+8) 857 67 76',
                celular: '(301) 445 77 14 - (321) 371 57 76',
                cellAeropuerto: '',
                email: 'neiva@satena.com',
                refmail: 'mailto:neiva@satena.com',
                info: '',
                expanded: false
            },
            {
                name: 'Nuquí',
                iata: '- NQU',
                direccion: 'Barrio la Union',
                lugar: '',
                telefono: '(313) 846 67 51 - (315) 735 37 49',
                celular: '(315) 735 37 49',
                cellAeropuerto: '',
                email: 'nuqui@satena.com',
                refmail: 'mailto:nuqui@satena.com',
                info: '',
                expanded: false
            },
            {
                name: 'Orito',
                iata: '',
                direccion: 'Calle 8 Nº 11-49',
                lugar: 'Marco Fidel Suarez',
                telefono: '(57+8) 429 01 47',
                celular: '(321) 205 52 78',
                cellAeropuerto: '',
                email: 'orito@satena.com',
                refmail: 'mailto:orito@satena.com',
                info: '',
                expanded: false
            },
            {
                name: 'Pitalito',
                iata: '- PTX',
                direccion: 'Calle 17 No 2-59',
                lugar: 'Frente al Metro',
                telefono: '(312) 528 13 16 - (313) 499 26 02',
                celular: '(314) 421 60 82',
                cellAeropuerto: '',
                email: 'pitalito@satena.com',
                refmail: 'mailto:pitalito@satena.com',
                info: '',
                expanded: false
            },
            {
                name: 'Providencia',
                iata: '- PVA',
                direccion: 'Aeropuerto El Embrujo',
                lugar: '',
                telefono: '',
                celular: '(313) 789 83 61',
                cellAeropuerto: '',
                email: 'sanandres@satena.com',
                refmail: 'mailto:sanandres@satena.com',
                info: '',
                expanded: false
            },
            {
                name: 'Puerto Asís',
                iata: '- PUU',
                direccion: 'Carrera 20 No 9-92',
                lugar: 'Centro',
                telefono: '(57+8) 422 78 00',
                celular: '(311) 236 2974 – (311) 236 29 75 - (320) 271 38 22',
                cellAeropuerto: '(57+8) 422 79 53',
                email: 'puertoasis@satena.com',
                refmail: 'mailto:puertoasis@satena.com',
                info: '',
                expanded: false
            }
        ];
    }
    //codigo para expandir el elemento cuando se hace click 
    OficinasPage.prototype.expandedItem = function (item) {
        if (item.expanded) {
            item.expanded = false;
        }
        else {
            this.items.map(function (listItem) {
                if (item == listItem) {
                    listItem.expanded = !listItem.expanded;
                }
                else {
                    listItem.expanded = false;
                }
                return listItem;
            });
        }
    };
    //***************
    //se usa para mover el icono
    OficinasPage.prototype.toggle = function () {
        var square = document.querySelector('.icono.derecha');
        if (~square.className.indexOf(this.downClass)) {
            square.className = square.className.replace(this.downClass, this.upClass);
        }
        else {
            square.className = square.className.replace(this.upClass, this.downClass);
        }
    };
    OficinasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-oficinas',
            template: __webpack_require__(/*! raw-loader!./oficinas.page.html */ "./node_modules/raw-loader/index.js!./src/app/oficinas/oficinas.page.html"),
            styles: [__webpack_require__(/*! ./oficinas.page.scss */ "./src/app/oficinas/oficinas.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OficinasPage);
    return OficinasPage;
}());



/***/ })

}]);
//# sourceMappingURL=oficinas-oficinas-module-es5.js.map