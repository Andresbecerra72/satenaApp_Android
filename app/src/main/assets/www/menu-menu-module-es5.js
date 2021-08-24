(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-menu-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/menu/menu.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/menu/menu.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-split-pane>\n<ion-menu contentId=\"content\">\n\n  <ion-header>\n    <ion-toolbar color=\"light\" class=\"ion-padding\">\n      <img src=\"/assets/logoblue.png\" alt=\"Satena\">\n   \n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n\n    <ion-list color=\"light\">\n\n      <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of pages\">\n\n        <ion-item color=\"light\" lines=\"none\" [routerLink]=\"p.url\" routerDirection = \"root\" [class.active-item]=\"selectedPath.startsWith(p.url)\">\n          <ion-label style=\"color: #003883; font-style: oblique;\">\n            {{p.title}}\n          </ion-label>\n          <ion-icon name=\"{{p.icon}}\" slot=\"end\" style=\"color: #003883\">\n           \n          </ion-icon>\n        </ion-item>\n\n      </ion-menu-toggle>\n<br>\n      <ion-item>\n        <img src=\"/assets/aviones/embraer_170.png\" alt=\"#\">\n      </ion-item>\n\n      <!--Usado para un acceso con login-->\n<!-- \n      <ion-item tappable routerLink = \"/home\" routerDirection = \"root\">\n        <ion-icon name=\"log-out\" slot=\"start\"></ion-icon>\n        Logout\n      </ion-item>\n    -->\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n<ion-router-outlet id=\"content\" main></ion-router-outlet>\n\n</ion-split-pane>"

/***/ }),

/***/ "./src/app/menu/menu-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/menu/menu-routing.module.ts ***!
  \*********************************************/
/*! exports provided: MenuPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageRoutingModule", function() { return MenuPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.page */ "./src/app/menu/menu.page.ts");




var routes = [
    {
        path: '',
        component: _menu_page__WEBPACK_IMPORTED_MODULE_3__["MenuPage"],
        children: [
            {
                path: 'first',
                loadChildren: function () { return __webpack_require__.e(/*! import() | tabs-tabs-module */ "tabs-tabs-module").then(__webpack_require__.bind(null, /*! ../tabs/tabs.module */ "./src/app/tabs/tabs.module.ts")).then(function (m) { return m.TabsPageModule; }); }
            },
            {
                path: 'second',
                loadChildren: function () { return __webpack_require__.e(/*! import() | servicios-servicios-module */ "servicios-servicios-module").then(__webpack_require__.bind(null, /*! ../servicios/servicios.module */ "./src/app/servicios/servicios.module.ts")).then(function (m) { return m.ServiciosPageModule; }); }
            },
            {
                path: 'third',
                loadChildren: function () { return __webpack_require__.e(/*! import() | suscripcion-suscripcion-module */ "suscripcion-suscripcion-module").then(__webpack_require__.bind(null, /*! ../suscripcion/suscripcion.module */ "./src/app/suscripcion/suscripcion.module.ts")).then(function (m) { return m.SuscripcionPageModule; }); }
            },
        ]
    }
];
var MenuPageRoutingModule = /** @class */ (function () {
    function MenuPageRoutingModule() {
    }
    MenuPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], MenuPageRoutingModule);
    return MenuPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/menu/menu.module.ts":
/*!*************************************!*\
  !*** ./src/app/menu/menu.module.ts ***!
  \*************************************/
/*! exports provided: MenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _menu_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu-routing.module */ "./src/app/menu/menu-routing.module.ts");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu.page */ "./src/app/menu/menu.page.ts");







var MenuPageModule = /** @class */ (function () {
    function MenuPageModule() {
    }
    MenuPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _menu_routing_module__WEBPACK_IMPORTED_MODULE_5__["MenuPageRoutingModule"]
            ],
            declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"]]
        })
    ], MenuPageModule);
    return MenuPageModule;
}());



/***/ }),

/***/ "./src/app/menu/menu.page.scss":
/*!*************************************!*\
  !*** ./src/app/menu/menu.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active-item {\n  border-left: 8px solid var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9DOlxcVXNlcnNcXEFORFJFU1xcRG9jdW1lbnRzXFxTT0ZUV0FSRS1ERVNJR05FUlxcaW9uaWNcXGluaWNpYWxcXEFwcFNhdGVuYS9zcmNcXGFwcFxcbWVudVxcbWVudS5wYWdlLnNjc3MiLCJzcmMvYXBwL21lbnUvbWVudS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSwrQ0FBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvbWVudS9tZW51LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uYWN0aXZlLWl0ZW0ge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiLmFjdGl2ZS1pdGVtIHtcbiAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59Il19 */"

/***/ }),

/***/ "./src/app/menu/menu.page.ts":
/*!***********************************!*\
  !*** ./src/app/menu/menu.page.ts ***!
  \***********************************/
/*! exports provided: MenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPage", function() { return MenuPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var MenuPage = /** @class */ (function () {
    function MenuPage(router) {
        var _this = this;
        this.router = router;
        this.pages = [
            {
                title: 'Home',
                url: '/menu/first',
                icon: 'home'
            },
            {
                title: 'Servicios',
                url: '/menu/second',
                icon: 'information-circle-outline'
            },
            {
                title: 'Registrate',
                url: '/menu/third',
                icon: 'contact'
            },
        ];
        this.selectedPath = '';
        this.router.events.subscribe(function (event) {
            if (event && event.url) {
                _this.selectedPath = event.url;
            }
        });
    }
    MenuPage.prototype.ngOnInit = function () {
    };
    MenuPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    MenuPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! raw-loader!./menu.page.html */ "./node_modules/raw-loader/index.js!./src/app/menu/menu.page.html"),
            styles: [__webpack_require__(/*! ./menu.page.scss */ "./src/app/menu/menu.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MenuPage);
    return MenuPage;
}());



/***/ })

}]);
//# sourceMappingURL=menu-menu-module-es5.js.map