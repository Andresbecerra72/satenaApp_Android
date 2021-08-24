(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"header_home\">\n  <ion-toolbar >   \n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n        <img src=\"/assets/logo.png\" alt=\"Satena\">\n   \n   </ion-toolbar>\n  \n  \n</ion-header>\n\n<ion-content class=\"scroller\" no-bounce>\n\n  <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\n    <ion-fab-button color=\"primary\">\n      <ion-icon name=\"share\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"start\">\n      <ion-fab-button href=\"https://www.facebook.com/aerolineasatena\" color=\"light\">\n        <ion-icon name=\"logo-facebook\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button href=\"https://twitter.com/AerolineaSatena\" color=\"light\">\n        <ion-icon name=\"logo-twitter\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button href=\"https://www.instagram.com/aerolineasatena/\" color=\"light\">\n        <ion-icon name=\"logo-instagram\"></ion-icon>\n      </ion-fab-button>      \n    </ion-fab-list>\n  </ion-fab>\n\n  <ion-slides [options]=\"slideOptsFade\">\n\n    \n\n    <ion-slide style=\"background-image: url(/assets/1.jpg); background-size: 100% 100%;\">\n\n       \n      \n    </ion-slide>\n\n    <ion-slide style=\"background-image: url(/assets/2.jpg); background-size: 100% 100%;\">\n\n      \n      \n    </ion-slide>\n\n    <ion-slide style=\"background-image: url(/assets/3.jpg); background-size: 100% 100%;\">\n    \n       \n      \n    </ion-slide>\n\n    <ion-slide style=\"background-image: url(/assets/4.jpg); background-size: 100% 100%;\">\n    \n       \n      \n    </ion-slide>\n\n    <ion-slide style=\"background-image: url(/assets/5.jpg); background-size: 100% 100%;\">\n    \n       \n      \n    </ion-slide>\n\n   \n\n  </ion-slides>\n<!--\n  <section class=\"#\">\n    <div style=\"position: absolute; top: 245px; width: 100%;  z-index: 2;\"> \n      <ion-button fill=\"outline\" color=\"light\" expand=\"block\"  href=\"../tabs/tiquetes/\">\n        <h3 style=\"color: lightgray;\"> TIQUETES ONLINE</h3>\n        <ion-icon slot=\"start\" name=\"cart\"></ion-icon>\n      </ion-button>\n    </div>\n     <div style=\"position: absolute; top: 480px; width: 100%;  z-index: 2;\">\n      <ion-button fill=\"outline\" color=\"light\" expand=\"block\"  href=\"../tabs/checkin\">\n        <h3 style=\"color:lightgray;\">WEB CHECK-IN</h3>\n       \n        <ion-icon slot=\"start\" name=\"stopwatch\"></ion-icon>\n      </ion-button>\n    </div>\n</section>\n-->\n \n</ion-content>\n\n\n    \n   \n  \n\n    \n    \n\n"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"] }])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header_home {\n  --background: #fff;\n  border-bottom: 3px solid #022471;\n  padding: 15px 0;\n  position: fixed;\n  text-align: center;\n  top: 0;\n  width: 100%;\n  z-index: 3;\n}\n\n.header_home {\n  --background: -moz-linear-gradient(top, rgba(0,0,0,.5) 0%, rgba(0,0,0,0) 100%);\n  --background: -webkit-linear-gradient(top, rgba(0,0,0,.5) 0%,rgba(0,0,0,0) 100%);\n  --background: linear-gradient(to bottom, rgba(0,0,0,.5) 0%,rgba(0,0,0,0) 100%);\n  border-bottom: 0;\n}\n\n.scroller {\n  overflow-x: scroll;\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n  scroll-behavior: smooth;\n}\n\n.scroller::-webkit-scrollbar {\n  display: none;\n}\n\nion-slides {\n  box-sizing: border-box;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column;\n  height: calc(100vh - 62px);\n  margin-bottom: 62px;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  position: relative;\n  overflow: auto;\n}\n\n.image1 {\n  --background: url(\"/assets/1.jpg\") no-repeat cover fixed center;\n  background: url(\"/assets/1.jpg\") no-repeat fixed center;\n  background-size: cover;\n}\n\n.btns_home {\n  bottom: 25px;\n  position: absolute;\n  top: 470px;\n  width: 100%;\n  z-index: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXEFORFJFU1xcRG9jdW1lbnRzXFxTT0ZUV0FSRS1ERVNJR05FUlxcaW9uaWNcXGluaWNpYWxcXEFwcFNhdGVuYS9zcmNcXGFwcFxcaG9tZVxcaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNDLGdDQUFBO0VBQ0EsZUFBQTtFQUNDLGVBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFBUSxXQUFBO0VBQ1AsVUFBQTtBQ0VMOztBREFBO0VBQ0ksOEVBQUE7RUFDQSxnRkFBQTtFQUNBLDhFQUFBO0VBQ0MsZ0JBQUE7QUNHTDs7QURHQTtFQUVFLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7QUNERjs7QURHRTtFQUNFLGFBQUE7QUNESjs7QURNQTtFQUNFLHNCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO1VBQUEseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNIRjs7QURNQTtFQUNFLCtEQUFBO0VBQ0EsdURBQUE7RUFHQSxzQkFBQTtBQ0hGOztBRE1BO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDSEYiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcl9ob21lIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xuICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMwMjI0NzE7IFxuICAgcGFkZGluZzogMTVweCAwO1xuICAgIHBvc2l0aW9uOiBmaXhlZDsgXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcbiAgICB0b3A6IDA7IHdpZHRoOiAxMDAlO1xuICAgICB6LWluZGV4OiAzO1xuICAgIH1cbi5oZWFkZXJfaG9tZSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMCwwLDAsLjUpIDAlLCByZ2JhKDAsMCwwLDApIDEwMCUpO1xuICAgIC0tYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDAsMCwwLC41KSAwJSxyZ2JhKDAsMCwwLDApIDEwMCUpO1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgwLDAsMCwuNSkgMCUscmdiYSgwLDAsMCwwKSAxMDAlKTtcbiAgICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgICB9XG5cblxuICBcblxuLnNjcm9sbGVyIHtcblx0XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7ICAvLyBJRSAxMCtcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAgLy8gRmlyZWZveFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcblxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTsgLy8gU2FmYXJpIGFuZCBDaHJvbWVcbiAgfVxufVxuXG5cbmlvbi1zbGlkZXMge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjJweCk7XG4gIG1hcmdpbi1ib3R0b206IDYycHg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGF1dG9cbn1cblxuLmltYWdlMSB7XG4gIC0tYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzLzEuanBnJykgbm8tcmVwZWF0IGNvdmVyIGZpeGVkIGNlbnRlcjtcbiAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzLzEuanBnJykgbm8tcmVwZWF0IGZpeGVkIGNlbnRlcjsgXG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uYnRuc19ob21lIHtcbiAgYm90dG9tOiAyNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDcwcHg7IFxuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMjtcbiAgIFxufVxuIiwiLmhlYWRlcl9ob21lIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzAyMjQ3MTtcbiAgcGFkZGluZzogMTVweCAwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMztcbn1cblxuLmhlYWRlcl9ob21lIHtcbiAgLS1iYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMCwwLDAsLjUpIDAlLCByZ2JhKDAsMCwwLDApIDEwMCUpO1xuICAtLWJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgwLDAsMCwuNSkgMCUscmdiYSgwLDAsMCwwKSAxMDAlKTtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsMCwwLC41KSAwJSxyZ2JhKDAsMCwwLDApIDEwMCUpO1xuICBib3JkZXItYm90dG9tOiAwO1xufVxuXG4uc2Nyb2xsZXIge1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuLnNjcm9sbGVyOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmlvbi1zbGlkZXMge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjJweCk7XG4gIG1hcmdpbi1ib3R0b206IDYycHg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5pbWFnZTEge1xuICAtLWJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvMS5qcGdcIikgbm8tcmVwZWF0IGNvdmVyIGZpeGVkIGNlbnRlcjtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy8xLmpwZ1wiKSBuby1yZXBlYXQgZml4ZWQgY2VudGVyO1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmJ0bnNfaG9tZSB7XG4gIGJvdHRvbTogMjVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQ3MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomePage = class HomePage {
    //contructor
    constructor() {
        //************EFECTOS PARA EL SLIDE********** */
        this.slideOpts = {
            autoplay: {
                delay: 5000,
            },
            loop: true
        };
        //Configuration for each Slider Fade
        this.slideOptsFade = {
            autoplay: {
                delay: 5000,
            },
            on: {
                beforeInit() {
                    const swiper = this;
                    swiper.classNames.push(`${swiper.params.containerModifierClass}fade`);
                    const overwriteParams = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: true,
                        spaceBetween: 0,
                        virtualTranslate: true,
                        loop: true,
                        speed: 2500
                    };
                    swiper.params = Object.assign(swiper.params, overwriteParams);
                    swiper.params = Object.assign(swiper.originalParams, overwriteParams);
                },
                setTranslate() {
                    const swiper = this;
                    const { slides } = swiper;
                    for (let i = 0; i < slides.length; i += 1) {
                        const $slideEl = swiper.slides.eq(i);
                        const offset$$1 = $slideEl[0].swiperSlideOffset;
                        let tx = -offset$$1;
                        if (!swiper.params.virtualTranslate)
                            tx -= swiper.translate;
                        let ty = 0;
                        if (!swiper.isHorizontal()) {
                            ty = tx;
                            tx = 0;
                        }
                        const slideOpacity = swiper.params.fadeEffect.crossFade
                            ? Math.max(1 - Math.abs($slideEl[0].progress), 0)
                            : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
                        $slideEl
                            .css({
                            opacity: slideOpacity,
                        })
                            .transform(`translate3d(${tx}px, ${ty}px, 0px)`);
                    }
                },
                setTransition(duration) {
                    const swiper = this;
                    const { slides, $wrapperEl } = swiper;
                    slides.transition(duration);
                    if (swiper.params.virtualTranslate && duration !== 0) {
                        let eventTriggered = false;
                        slides.transitionEnd(() => {
                            if (eventTriggered)
                                return;
                            if (!swiper || swiper.destroyed)
                                return;
                            eventTriggered = true;
                            swiper.animating = false;
                            const triggerEvents = ['webkitTransitionEnd', 'transitionend'];
                            for (let i = 0; i < triggerEvents.length; i += 1) {
                                $wrapperEl.trigger(triggerEvents[i]);
                            }
                        });
                    }
                },
            }
        };
        //Configuration for each Slider Flip
        this.slideOptsFlip = {
            autoplay: {
                delay: 5000,
            },
            on: {
                beforeInit() {
                    const swiper = this;
                    swiper.classNames.push(`${swiper.params.containerModifierClass}flip`);
                    swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
                    const overwriteParams = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: true,
                        spaceBetween: 0,
                        virtualTranslate: true,
                        loop: true,
                        speed: 2500
                    };
                    swiper.params = Object.assign(swiper.params, overwriteParams);
                    swiper.originalParams = Object.assign(swiper.originalParams, overwriteParams);
                },
                setTranslate() {
                    const swiper = this;
                    const { $, slides, rtlTranslate: rtl } = swiper;
                    for (let i = 0; i < slides.length; i += 1) {
                        const $slideEl = slides.eq(i);
                        let progress = $slideEl[0].progress;
                        if (swiper.params.flipEffect.limitRotation) {
                            progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
                        }
                        const offset$$1 = $slideEl[0].swiperSlideOffset;
                        const rotate = -180 * progress;
                        let rotateY = rotate;
                        let rotateX = 0;
                        let tx = -offset$$1;
                        let ty = 0;
                        if (!swiper.isHorizontal()) {
                            ty = tx;
                            tx = 0;
                            rotateX = -rotateY;
                            rotateY = 0;
                        }
                        else if (rtl) {
                            rotateY = -rotateY;
                        }
                        $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;
                        if (swiper.params.flipEffect.slideShadows) {
                            // Set shadows
                            let shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                            let shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
                            if (shadowBefore.length === 0) {
                                shadowBefore = swiper.$(`<div class="swiper-slide-shadow-${swiper.isHorizontal() ? 'left' : 'top'}"></div>`);
                                $slideEl.append(shadowBefore);
                            }
                            if (shadowAfter.length === 0) {
                                shadowAfter = swiper.$(`<div class="swiper-slide-shadow-${swiper.isHorizontal() ? 'right' : 'bottom'}"></div>`);
                                $slideEl.append(shadowAfter);
                            }
                            if (shadowBefore.length)
                                shadowBefore[0].style.opacity = Math.max(-progress, 0);
                            if (shadowAfter.length)
                                shadowAfter[0].style.opacity = Math.max(progress, 0);
                        }
                        $slideEl
                            .transform(`translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
                    }
                },
                setTransition(duration) {
                    const swiper = this;
                    const { slides, activeIndex, $wrapperEl } = swiper;
                    slides
                        .transition(duration)
                        .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
                        .transition(duration);
                    if (swiper.params.virtualTranslate && duration !== 0) {
                        let eventTriggered = false;
                        // eslint-disable-next-line
                        slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
                            if (eventTriggered)
                                return;
                            if (!swiper || swiper.destroyed)
                                return;
                            eventTriggered = true;
                            swiper.animating = false;
                            const triggerEvents = ['webkitTransitionEnd', 'transitionend'];
                            for (let i = 0; i < triggerEvents.length; i += 1) {
                                $wrapperEl.trigger(triggerEvents[i]);
                            }
                        });
                    }
                }
            }
        };
        //Configuration for each Slider Cube
        this.slideOptsCube = {
            autoplay: {
                delay: 5000,
            },
            loop: true,
            speed: 2500,
            cubeEffect: {
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
            },
            on: {
                beforeInit: function () {
                    const swiper = this;
                    swiper.classNames.push(`${swiper.params.containerModifierClass}cube`);
                    swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
                    const overwriteParams = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: true,
                        resistanceRatio: 0,
                        spaceBetween: 0,
                        centeredSlides: false,
                        virtualTranslate: true,
                    };
                    this.params = Object.assign(this.params, overwriteParams);
                    this.originalParams = Object.assign(this.originalParams, overwriteParams);
                },
                setTranslate: function () {
                    const swiper = this;
                    const { $el, $wrapperEl, slides, width: swiperWidth, height: swiperHeight, rtlTranslate: rtl, size: swiperSize, } = swiper;
                    const params = swiper.params.cubeEffect;
                    const isHorizontal = swiper.isHorizontal();
                    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
                    let wrapperRotate = 0;
                    let $cubeShadowEl;
                    if (params.shadow) {
                        if (isHorizontal) {
                            $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');
                            if ($cubeShadowEl.length === 0) {
                                $cubeShadowEl = swiper.$('<div class="swiper-cube-shadow"></div>');
                                $wrapperEl.append($cubeShadowEl);
                            }
                            $cubeShadowEl.css({ height: `${swiperWidth}px` });
                        }
                        else {
                            $cubeShadowEl = $el.find('.swiper-cube-shadow');
                            if ($cubeShadowEl.length === 0) {
                                $cubeShadowEl = swiper.$('<div class="swiper-cube-shadow"></div>');
                                $el.append($cubeShadowEl);
                            }
                        }
                    }
                    for (let i = 0; i < slides.length; i += 1) {
                        const $slideEl = slides.eq(i);
                        let slideIndex = i;
                        if (isVirtual) {
                            slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
                        }
                        let slideAngle = slideIndex * 90;
                        let round = Math.floor(slideAngle / 360);
                        if (rtl) {
                            slideAngle = -slideAngle;
                            round = Math.floor(-slideAngle / 360);
                        }
                        const progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
                        let tx = 0;
                        let ty = 0;
                        let tz = 0;
                        if (slideIndex % 4 === 0) {
                            tx = -round * 4 * swiperSize;
                            tz = 0;
                        }
                        else if ((slideIndex - 1) % 4 === 0) {
                            tx = 0;
                            tz = -round * 4 * swiperSize;
                        }
                        else if ((slideIndex - 2) % 4 === 0) {
                            tx = swiperSize + (round * 4 * swiperSize);
                            tz = swiperSize;
                        }
                        else if ((slideIndex - 3) % 4 === 0) {
                            tx = -swiperSize;
                            tz = (3 * swiperSize) + (swiperSize * 4 * round);
                        }
                        if (rtl) {
                            tx = -tx;
                        }
                        if (!isHorizontal) {
                            ty = tx;
                            tx = 0;
                        }
                        const transform$$1 = `rotateX(${isHorizontal ? 0 : -slideAngle}deg) rotateY(${isHorizontal ? slideAngle : 0}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;
                        if (progress <= 1 && progress > -1) {
                            wrapperRotate = (slideIndex * 90) + (progress * 90);
                            if (rtl)
                                wrapperRotate = (-slideIndex * 90) - (progress * 90);
                        }
                        $slideEl.transform(transform$$1);
                        if (params.slideShadows) {
                            // Set shadows
                            let shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                            let shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
                            if (shadowBefore.length === 0) {
                                shadowBefore = swiper.$(`<div class="swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}"></div>`);
                                $slideEl.append(shadowBefore);
                            }
                            if (shadowAfter.length === 0) {
                                shadowAfter = swiper.$(`<div class="swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}"></div>`);
                                $slideEl.append(shadowAfter);
                            }
                            if (shadowBefore.length)
                                shadowBefore[0].style.opacity = Math.max(-progress, 0);
                            if (shadowAfter.length)
                                shadowAfter[0].style.opacity = Math.max(progress, 0);
                        }
                    }
                    $wrapperEl.css({
                        '-webkit-transform-origin': `50% 50% -${swiperSize / 2}px`,
                        '-moz-transform-origin': `50% 50% -${swiperSize / 2}px`,
                        '-ms-transform-origin': `50% 50% -${swiperSize / 2}px`,
                        'transform-origin': `50% 50% -${swiperSize / 2}px`,
                    });
                    if (params.shadow) {
                        if (isHorizontal) {
                            $cubeShadowEl.transform(`translate3d(0px, ${(swiperWidth / 2) + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(90deg) rotateZ(0deg) scale(${params.shadowScale})`);
                        }
                        else {
                            const shadowAngle = Math.abs(wrapperRotate) - (Math.floor(Math.abs(wrapperRotate) / 90) * 90);
                            const multiplier = 1.5 - ((Math.sin((shadowAngle * 2 * Math.PI) / 360) / 2)
                                + (Math.cos((shadowAngle * 2 * Math.PI) / 360) / 2));
                            const scale1 = params.shadowScale;
                            const scale2 = params.shadowScale / multiplier;
                            const offset$$1 = params.shadowOffset;
                            $cubeShadowEl.transform(`scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${(swiperHeight / 2) + offset$$1}px, ${-swiperHeight / 2 / scale2}px) rotateX(-90deg)`);
                        }
                    }
                    const zFactor = (swiper.browser.isSafari || swiper.browser.isUiWebView) ? (-swiperSize / 2) : 0;
                    $wrapperEl
                        .transform(`translate3d(0px,0,${zFactor}px) rotateX(${swiper.isHorizontal() ? 0 : wrapperRotate}deg) rotateY(${swiper.isHorizontal() ? -wrapperRotate : 0}deg)`);
                },
                setTransition: function (duration) {
                    const swiper = this;
                    const { $el, slides } = swiper;
                    slides
                        .transition(duration)
                        .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
                        .transition(duration);
                    if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
                        $el.find('.swiper-cube-shadow').transition(duration);
                    }
                },
            }
        };
        //Configuration for each Slider CoverFLow
        this.slideOptsCoverFlow = {
            autoplay: {
                delay: 5000,
            },
            loop: true,
            slidesPerView: 3,
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
            on: {
                beforeInit() {
                    const swiper = this;
                    swiper.classNames.push(`${swiper.params.containerModifierClass}coverflow`);
                    swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
                    swiper.params.watchSlidesProgress = true;
                    swiper.originalParams.watchSlidesProgress = true;
                },
                setTranslate() {
                    const swiper = this;
                    const { width: swiperWidth, height: swiperHeight, slides, $wrapperEl, slidesSizesGrid, $ } = swiper;
                    const params = swiper.params.coverflowEffect;
                    const isHorizontal = swiper.isHorizontal();
                    const transform$$1 = swiper.translate;
                    const center = isHorizontal ? -transform$$1 + (swiperWidth / 2) : -transform$$1 + (swiperHeight / 2);
                    const rotate = isHorizontal ? params.rotate : -params.rotate;
                    const translate = params.depth;
                    // Each slide offset from center
                    for (let i = 0, length = slides.length; i < length; i += 1) {
                        const $slideEl = slides.eq(i);
                        const slideSize = slidesSizesGrid[i];
                        const slideOffset = $slideEl[0].swiperSlideOffset;
                        const offsetMultiplier = ((center - slideOffset - (slideSize / 2)) / slideSize) * params.modifier;
                        let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
                        let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
                        // var rotateZ = 0
                        let translateZ = -translate * Math.abs(offsetMultiplier);
                        let translateY = isHorizontal ? 0 : params.stretch * (offsetMultiplier);
                        let translateX = isHorizontal ? params.stretch * (offsetMultiplier) : 0;
                        // Fix for ultra small values
                        if (Math.abs(translateX) < 0.001)
                            translateX = 0;
                        if (Math.abs(translateY) < 0.001)
                            translateY = 0;
                        if (Math.abs(translateZ) < 0.001)
                            translateZ = 0;
                        if (Math.abs(rotateY) < 0.001)
                            rotateY = 0;
                        if (Math.abs(rotateX) < 0.001)
                            rotateX = 0;
                        const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                        $slideEl.transform(slideTransform);
                        $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
                        if (params.slideShadows) {
                            // Set shadows
                            let $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                            let $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
                            if ($shadowBeforeEl.length === 0) {
                                $shadowBeforeEl = swiper.$(`<div class="swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}"></div>`);
                                $slideEl.append($shadowBeforeEl);
                            }
                            if ($shadowAfterEl.length === 0) {
                                $shadowAfterEl = swiper.$(`<div class="swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}"></div>`);
                                $slideEl.append($shadowAfterEl);
                            }
                            if ($shadowBeforeEl.length)
                                $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
                            if ($shadowAfterEl.length)
                                $shadowAfterEl[0].style.opacity = (-offsetMultiplier) > 0 ? -offsetMultiplier : 0;
                        }
                    }
                    // Set correct perspective for IE10
                    if (swiper.support.pointerEvents || swiper.support.prefixedPointerEvents) {
                        const ws = $wrapperEl[0].style;
                        ws.perspectiveOrigin = `${center}px 50%`;
                    }
                },
                setTransition(duration) {
                    const swiper = this;
                    swiper.slides
                        .transition(duration)
                        .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
                        .transition(duration);
                }
            }
        };
    }
};
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map