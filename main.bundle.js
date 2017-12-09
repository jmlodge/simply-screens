webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\r\n  margin-top: 75px;\r\n  background-color: rgba(255, 255, 255, 0.4);\r\n}\r\n\r\n.about-title {\r\n  text-align: center;\r\n  border-bottom: solid thistle 1px;\r\n  margin: 0 20px 20px 20px;\r\n  padding: 20px 0 20px 0;\r\n}\r\n\r\n.staff-card-head {\r\n  width: 360px;\r\n  border: solid 1px #607d8b;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  color: thistle;\r\n  background-color: #607d8b;\r\n}\r\n\r\n.staff {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n\r\n}\r\n\r\n.staff img {\r\n  padding: 0 20px 0 20px;\r\n  width: 400px;\r\n}\r\n\r\n.center {\r\n  text-align: center;\r\n}\r\n\r\n.about-text {\r\n  padding: 0 20px 20px 20px;\r\n  margin: 0 20px 0 20px;\r\n  border-bottom: solid thistle 1px;\r\n}\r\n\r\naccordion {\r\n  width: 400px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  padding: 0 20px 0 20px;\r\n}\r\n\r\n\r\n.testimonial {\r\n  padding: 20px 75px 10px 75px;\r\n  margin-bottom: 20px;\r\n  border-bottom: solid thistle 1px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngStyle]=\"{'background-image': 'url(' + aboutObj.image.background + ')'}\">\n  <div class=\"container\">\n    <h3 class=\"about-title\">- {{aboutObj.title}} -</h3>\n\n    <div class=\"row about-text\">\n      <div class=\"col-md-6 col-sm-12 about-text-inner\">\n        <h4>- {{aboutObj.subtitle.serviceTitle}} -</h4>\n        <p>\n          {{aboutObj.service}}\n        </p>\n      </div>\n\n      <div class=\"col-md-6 col-sm-12 about-text-inner\">\n        <h4>- {{aboutObj.subtitle.historyTitle}} -</h4>\n        <p>\n          {{aboutObj.history}}\n        </p>\n      </div>\n    </div>\n\n    <br>\n\n    <div class=\"row about-text staff\">\n\n      <div class=\"center col-md-6 col-sm-12\">\n        <div class=\"staff-card-head\">\n          <h4>Joseph Lodge - CEO</h4>\n        </div>\n        <img [src]=\"aboutObj.image.me\">\n        <accordion>\n          <accordion-group>\n            <div accordion-heading>\n            About Joseph\n            <span class=\"float-right pull-right\"><i class=\"fa fa-caret-down\"></i></span>\n          </div>\n            This is just some content to illustrate fancy headings.\n          </accordion-group>\n        </accordion>\n      </div>\n\n      <div class=\"center col-md-6 col-sm-12\">\n        <div class=\"staff-card-head\">\n          <h4>Sarah Cumming - COO</h4>\n        </div>\n        <img [src]=\"aboutObj.image.sarah\">\n        <accordion>\n          <accordion-group>\n            <div accordion-heading>\n              About Sarah\n              <span class=\"float-right pull-right\"><i class=\"fa fa-caret-down\"></i></span>\n            </div>\n            This is just some content to illustrate fancy headings.\n          </accordion-group>\n        </accordion>\n      </div>\n    </div>\n\n    <h3 class=\"about-title\">- {{aboutObj.testTitle}} -</h3>\n    <div class=\"row testimonial\">\n      <carousel>\n\n        <slide>\n          <img [src]=\"aboutObj.image.testOne\" alt=\"First slide\" style=\"display: block; width: 100%;\">\n          <div class=\"carousel-caption\">\n            <h3>First slide label</h3>\n            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\n          </div>\n        </slide>\n\n        <slide>\n          <img [src]=\"aboutObj.image.testTwo\" alt=\"Second slide\" style=\"display: block; width: 100%;\">\n          <div class=\"carousel-caption\">\n            <h3>Second slide label</h3>\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n          </div>\n        </slide>\n\n        <slide>\n          <img [src]=\"aboutObj.image.testThree\" alt=\"Third slide\" style=\"display: block; width: 100%;\">\n          <div class=\"carousel-caption\">\n            <h3>Third slide label</h3>\n            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\n          </div>\n        </slide>\n      </carousel>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_content_service__ = __webpack_require__("../../../../../src/app/shared/service/content.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = (function () {
    function AboutComponent(contentService) {
        this.contentService = contentService;
    }
    AboutComponent.prototype.ngOnInit = function () {
        this.aboutObj = this.contentService.Objs['about'];
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/about.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_service_content_service__["a" /* ContentService */]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export appRoutes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_services_component__ = __webpack_require__("../../../../../src/app/services/services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__contact_from_contact_from_component__ = __webpack_require__("../../../../../src/app/contact-from/contact-from.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__map_map_component__ = __webpack_require__("../../../../../src/app/map/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__phone_detail_phone_detail_component__ = __webpack_require__("../../../../../src/app/phone-detail/phone-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_service_phone_service__ = __webpack_require__("../../../../../src/app/shared/service/phone.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_service_content_service__ = __webpack_require__("../../../../../src/app/shared/service/content.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__bootstrap_bootstrap_module__ = __webpack_require__("../../../../../src/app/bootstrap/bootstrap.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular_font_awesome__ = __webpack_require__("../../../../angular-font-awesome/angular-font-awesome.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__filter_pipe__ = __webpack_require__("../../../../../src/app/filter.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_12__about_about_component__["a" /* AboutComponent */] },
    { path: 'service', component: __WEBPACK_IMPORTED_MODULE_9__services_services_component__["a" /* ServicesComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_10__contact_from_contact_from_component__["a" /* ContactFromComponent */] },
    { path: 'detail/:id', component: __WEBPACK_IMPORTED_MODULE_13__phone_detail_phone_detail_component__["a" /* PhoneDetailComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__services_services_component__["a" /* ServicesComponent */],
                __WEBPACK_IMPORTED_MODULE_10__contact_from_contact_from_component__["a" /* ContactFromComponent */],
                __WEBPACK_IMPORTED_MODULE_11__map_map_component__["a" /* MapComponent */],
                __WEBPACK_IMPORTED_MODULE_13__phone_detail_phone_detail_component__["a" /* PhoneDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_19__filter_pipe__["a" /* FilterPipe */],
                __WEBPACK_IMPORTED_MODULE_12__about_about_component__["a" /* AboutComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_16__bootstrap_bootstrap_module__["a" /* AppBootstrapModule */],
                __WEBPACK_IMPORTED_MODULE_18_ngx_bootstrap__["a" /* AccordionModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_18_ngx_bootstrap__["c" /* CarouselModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_17_angular_font_awesome__["a" /* AngularFontAwesomeModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyBAdyroGQrI4px5csmiFKy9ETbbaskqmxs'
                })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_15__shared_service_content_service__["a" /* ContentService */], __WEBPACK_IMPORTED_MODULE_14__shared_service_phone_service__["a" /* PhoneService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/bootstrap/bootstrap.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppBootstrapModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_tooltip__ = __webpack_require__("../../../../ngx-bootstrap/tooltip/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppBootstrapModule = (function () {
    function AppBootstrapModule() {
    }
    AppBootstrapModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_tooltip__["a" /* TooltipModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["b" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["d" /* CollapseModule */].forRoot(),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */], __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_tooltip__["a" /* TooltipModule */], __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["b" /* ModalModule */], __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["d" /* CollapseModule */]]
        })
    ], AppBootstrapModule);
    return AppBootstrapModule;
}());



/***/ }),

/***/ "../../../../../src/app/contact-class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactClass; });
var ContactClass = (function () {
    function ContactClass(id, firstname, lastname, address, town, postcode, phone, email, phonebrand, message, address2 // optional param can not follow required
    ) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.address = address;
        this.town = town;
        this.postcode = postcode;
        this.phone = phone;
        this.email = email;
        this.phonebrand = phonebrand;
        this.message = message;
        this.address2 = address2; // optional param can not follow required
    }
    return ContactClass;
}());



/***/ }),

/***/ "../../../../../src/app/contact-from/contact-from.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ng-valid[required], .ng-valid.required  {\r\n  border-left: 5px solid #42A948; /* green */\r\n}\r\n\r\n.ng-invalid:not(form)  {\r\n  border-left: 5px solid #a94442; /* red */\r\n}\r\n\r\n.container {\r\n  margin-top: 75px;\r\n  background-color: rgba(255, 255, 255, 0.4);\r\n}\r\n\r\n.contact-left {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  width: 50%;\r\n  float: left;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n\r\n.contact-left h3 {\r\n  text-align: center;\r\n  padding-bottom: 20px;\r\n  margin: 20px 10px 15px 15px;\r\n  border-bottom: solid 1px thistle;\r\n}\r\n\r\n.contact-left p {\r\n  padding: 30px;\r\n}\r\n\r\n#lastname,\r\n#postcode {\r\n  margin-left: 4px;\r\n}\r\n\r\n.contact-right {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  width: 50%;\r\n  float: right;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n\r\n.contact-right p, h3 {\r\n  padding: 0 30px 0 30px;\r\n}\r\n\r\n#form-sm button {\r\n  margin: 10px 0 0 15px;\r\n}\r\n\r\n.btn-sub {\r\n  background-color: thistle;\r\n  border: solid 1px #607d8b;\r\n  color: #607d8b;\r\n}\r\n\r\n#btn-new {\r\n  background-color: #607d8b;\r\n  border: solid 1px thistle;\r\n  color: thistle;\r\n}\r\n\r\n.edit {\r\n  width: 51px;\r\n  margin: 0 auto 0 auto;\r\n}\r\n\r\n.col-sm-6 {\r\n  padding: 0 10px 0 0;\r\n}\r\n\r\n.pad-right {\r\n  padding-right: 10px;\r\n}\r\n\r\n.media-icons {\r\n  width: 100%;\r\n  padding: 0 50px 0 50px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  margin: 10px 0 50px 0;\r\n\r\n}\r\n\r\n.media-icons a {\r\n  margin: 15px;\r\n  color: #607d8b;\r\n}\r\n\r\n.media-icons a:hover {\r\n  color: thistle;\r\n}\r\n\r\n.map-card {\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  text-align: center;\r\n  padding:0 10px 0 10px;\r\n  border: solid white 2px;\r\n  background-color: rgba(255, 255, 255, 0.5);\r\n  box-shadow: 10px 10px 5px #888888;\r\n  border-radius: 2px;\r\n  margin: 15px 0 15px 0;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  .contact-left {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    width: 100%;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n  }\r\n\r\n  #form-sm {\r\n    width: 70%;\r\n  }\r\n\r\n  #lastname,\r\n  #postcode {\r\n    margin-left: 0;\r\n  }\r\n\r\n  .contact-right {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    width: 100%;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n  }\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact-from/contact-from.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngStyle]=\"{'background-image': 'url(' + contactObj.background + ')'}\">\n  <div class=\"container\">\n    <div class=\"contact-left\">\n      <div id=\"form-sm\" [hidden]=\"submitted\">\n        <h3>- Contact Form -</h3>\n        <form (ngSubmit)=\"onSubmit()\" #contactForm=\"ngForm\">\n          <div class=\"form-group col-md-6 col-sm-12\">\n            <label for=\"firstname\">First Name</label>\n            <input type=\"text\" class=\"form-control\" id=\"firstname\" required\n                   [(ngModel)]=\"model.firstname\" name=\"firstname\" #firstname=\"ngModel\" #spy>\n            <div [hidden]=\"firstname.valid || firstname.pristine\"\n                 class=\"alert alert-danger\">\n              First Name is required\n            </div>\n\n          </div>\n\n          <div class=\"form-group col-md-6 col-sm-12\">\n            <label for=\"lastname\">Last Name</label>\n            <input type=\"text\" class=\"form-control\" id=\"lastname\" required\n                   [(ngModel)]=\"model.lastname\" name=\"lastname\" #lastname=\"ngModel\">\n            <div [hidden]=\"lastname.valid || lastname.pristine\"\n                 class=\"alert alert-danger\">\n              Last Name is required\n            </div>\n          </div>\n\n          <div class=\"form-group pad-right col-sm-12\">\n            <label for=\"address\">Address Line 1</label>\n            <input type=\"text\" class=\"form-control\" id=\"address\" required\n                   [(ngModel)]=\"model.address\" name=\"address\" #address=\"ngModel\">\n            <div [hidden]=\"address.valid || address.pristine\"\n                 class=\"alert alert-danger\">\n              This field is required\n            </div>\n          </div>\n\n          <div class=\"form-group pad-right col-sm-12\">\n            <label for=\"address2\">Address Line 2</label>\n            <input type=\"text\" class=\"form-control\" id=\"address2\"\n                   [(ngModel)]=\"model.address2\" name=\"address2\">\n          </div>\n\n          <div class=\"form-group col-md-6 col-sm-12\">\n            <label for=\"town\">Town</label>\n            <input type=\"text\" class=\"form-control\" id=\"town\" required\n                   [(ngModel)]=\"model.town\" name=\"town\" #town=\"ngModel\">\n            <div [hidden]=\"town.valid || town.pristine\"\n                 class=\"alert alert-danger\">\n              This field is required\n            </div>\n          </div>\n\n          <div class=\"form-group col-md-6 col-sm-12\">\n            <label for=\"postcode\">Post Code</label>\n            <input type=\"text\" class=\"form-control\" id=\"postcode\" required\n                   [(ngModel)]=\"model.postcode\" name=\"postcode\" #postcode=\"ngModel\">\n            <div [hidden]=\"postcode.valid || postcode.pristine\"\n                 class=\"alert alert-danger\">\n              This field is required\n            </div>\n          </div>\n\n          <div class=\"form-group pad-right col-sm-12\">\n            <label for=\"phone\">Phone</label>\n            <input type=\"tel\" class=\"form-control\" id=\"phone\" required\n                   [(ngModel)]=\"model.phone\" name=\"phone\" #phone=\"ngModel\">\n            <div [hidden]=\"phone.valid || phone.pristine\"\n                 class=\"alert alert-danger\">\n              Phone number is required\n            </div>\n          </div>\n\n          <div class=\"form-group pad-right col-sm-12\">\n            <label for=\"email\">Email</label>\n            <input type=\"text\" class=\"form-control\" id=\"email\" required\n                   [(ngModel)]=\"model.email\" name=\"email\" #email=\"ngModel\">\n            <div [hidden]=\"email.valid || email.pristine\"\n                 class=\"alert alert-danger\">\n              Email is required\n            </div>\n          </div>\n\n          <div class=\"form-group pad-right col-sm-12\">\n            <label for=\"brand\">Phone Brand</label>\n            <select class=\"from-control\" id=\"brand\" required\n                    [(ngModel)]=\"model.phonebrand\" name=\"brands\">\n              <option *ngFor=\"let brand of brands\" [value]=\"brand\">{{brand}}</option>\n            </select>\n          </div>\n\n          <div class=\"form-group pad-right col-sm-12\">\n            <label for=\"message\">Your Message</label>\n            <input type=\"text\" class=\"form-control\" id=\"message\" required\n                   [(ngModel)]=\"model.message\" name=\"message\">\n          </div>\n\n          <button type=\"button\" class=\"btn\" id=\"btn-new\" (click)=\"newContact()\">New Contact</button>\n          <button type=\"submit\" class=\"btn btn-sub\" [disabled]=\"!contactForm.form.valid\">Submit</button>\n\n        </form>\n\n      </div>\n      <div [hidden]=\"!submitted\">\n        <h3> Thank you for getting in touch!</h3>\n        <p>One of our tecnitians will be in contact shortly to discuss your repair or if you requested just the screen\n        it will be sent out with recordered dilivery and will be with you within 48h.</p>\n        <div class=\"media-icons\">\n          <i class=\"fa fa-envelope fa-2x\"></i>\n          <i class=\"fa fa-envelope fa-2x\"></i>\n          <i class=\"fa fa-envelope fa-2x\"></i>\n        </div>\n        <div class=\"edit\">\n          <button class=\"btn btn-sub\" (click)=\"submitted=false\">Edit</button>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"contact-right\">\n      <h3>Need a new screen... We come to you</h3>\n      <p>\n        That's right we will come to your home or place of work an repair your broken smart phone screen right there and\n        then. Just fill out the contact form and we will get back to you the same day to confirm repair!\n      </p>\n\n      <div class=\"map-card\">\n        <h3>Location</h3>\n        <p>You can find use located on the map below</p>\n        <app-map></app-map>\n        <h4>Address</h4>\n        <p>6 Carolan Ct, Golcar</p>\n        <p>Huddersfield, HD7 4NA</p>\n      </div>\n\n      <h3>- Social Media -</h3>\n      <div class=\"media-icons\">\n        <a href=\"#\"><i class=\"fa fa-facebook fa-3x\"></i></a>\n        <a href=\"#\"><i class=\"fa fa-twitter fa-3x\"></i></a>\n        <a href=\"#\"><i class=\"fa fa-linkedin fa-3x\"></i></a>\n        <a href=\"#\"><i class=\"fa fa-instagram fa-3x\"></i></a>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/contact-from/contact-from.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactFromComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact_class__ = __webpack_require__("../../../../../src/app/contact-class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service_content_service__ = __webpack_require__("../../../../../src/app/shared/service/content.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactFromComponent = (function () {
    function ContactFromComponent(contentService) {
        this.contentService = contentService;
        this.brands = ['Apple', 'Samsung', 'Google', 'HTC'];
        this.model = new __WEBPACK_IMPORTED_MODULE_1__contact_class__["a" /* ContactClass */](1, 'Joseph', 'Lodge', '6 Carolan Ct', 'Huddersfield', 'HD7 4NA', 7809231190, 'josephmartinlodge@gmail.com', this.brands[2], 'Message', 'Golcar');
        this.submitted = false;
    }
    ContactFromComponent.prototype.onSubmit = function () { this.submitted = true; };
    ContactFromComponent.prototype.newContact = function () {
        this.model = new __WEBPACK_IMPORTED_MODULE_1__contact_class__["a" /* ContactClass */](42, '', '', '', '', '', +44, '', '', '');
    };
    ContactFromComponent.prototype.ngOnInit = function () {
        this.contactObj = this.contentService.Objs['contact'];
    };
    ContactFromComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact-from',
            template: __webpack_require__("../../../../../src/app/contact-from/contact-from.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contact-from/contact-from.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_service_content_service__["a" /* ContentService */]])
    ], ContactFromComponent);
    return ContactFromComponent;
}());



/***/ }),

/***/ "../../../../../src/app/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (phones, term) {
        // check if undefined
        if (term === undefined || term === '') {
            return phones.slice(0, 4);
        }
        // return updated phones array
        return phones.filter(function (phone) {
            return phone.name.toLowerCase().includes(term.toLowerCase());
        });
    };
    FilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "footer {\r\n  background-color: #607d8b;\r\n  border-top: solid black 1px;\r\n}\r\n\r\n.footer-left {\r\n  padding-left: 30px;\r\n}\r\n\r\n.footer-left p {\r\n  margin-bottom: 0;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.footer-distributed p.footer-links {\r\n  font-size:18px;\r\n  font-weight: bold;\r\n  color: #ffffff;\r\n}\r\n\r\n.footer-distributed p.footer-links a {\r\n  display:inline-block;\r\n  line-height: 2;\r\n  text-decoration: none;\r\n  padding-top: 10px;\r\n  color: #ffffff\r\n}\r\n\r\n.footer-distributed .footer-right{\r\n  float: right;\r\n  margin-top: 20px;\r\n  max-width: 250px;\r\n  padding-right: 30px;\r\n}\r\n\r\n.footer-distributed .footer-right a {\r\n  display: inline-block;\r\n  width: 35px;\r\n  height: 35px;\r\n  background-color:  #33383b;\r\n  border-radius: 2px;\r\n  font-size: 20px;\r\n  color: #ffffff;\r\n  text-align: center;\r\n  line-height: 35px;\r\n  margin-left: 7px;\r\n}\r\n\r\n\r\n@media (max-width: 600px) {\r\n\r\n  .footer-distributed .footer-left,\r\n  .footer-distributed .footer-right {\r\n    text-align: center;\r\n  }\r\n\r\n  .footer-distributed .footer-right {\r\n    float: none;\r\n    margin: 0 auto 20px auto;\r\n    padding-top: 20px;\r\n  }\r\n\r\n  .footer-distributed .footer-left p.footer-links {\r\n    line-height: 1.8;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer id=\"footer\" class=\"footer-distributed\">\n\n  <div class=\"footer-right\">\n    <a href=\"#\"><i class=\"fa fa-facebook\"></i></a>\n    <a href=\"#\"><i class=\"fa fa-twitter\"></i></a>\n    <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a>\n    <a href=\"#\"><i class=\"fa fa-instagram\"></i></a>\n  </div>\n\n  <div class=\"footer-left\">\n\n    <p class=\"footer-links\">\n      <a href=\"/\">Home</a>\n      |\n      <a href=\"/about\">About</a>\n      |\n      <a href=\"/service\">Services</a>\n      |\n      <a href=\"/contact\">Contact</a>\n    </p>\n\n    <p>Joseph Lodge &copy; 2017</p>\n  </div>\n\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* home background */\r\n\r\n.home-banner {\r\n  height: 100vh;\r\n  overflow: hidden;\r\n  position: relative;\r\n}\r\n\r\n.home-banner img {\r\n  position: relative;\r\n  width: 100%;\r\n}\r\n\r\n/* home background END */\r\n\r\n/* search box */\r\n\r\n.home-search {\r\n  position: absolute;\r\n  top: 20%;\r\n  left: 50%;\r\n  z-index: 10;\r\n  text-align: center;\r\n  border: solid white 1px;\r\n  padding: 10px;\r\n  background-color: rgba(255, 255, 255, 0.4);\r\n  box-shadow: 10px 10px 5px #888888;\r\n  border-radius: 2px;\r\n  min-width: 340px;\r\n}\r\n\r\n.home-search img {\r\n  width: 100px;\r\n  display: inline-block;\r\n}\r\n\r\n.home-search h2 {\r\n  display: inline-block;\r\n  padding-right: 20px;\r\n\r\n}\r\n\r\n.home-search form {\r\n  text-align: center;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n}\r\n\r\n.home-search input {\r\n  margin-top: 20px;\r\n  padding-left: 10px;\r\n  width: 100%;\r\n  border-radius: 26px;\r\n  -webkit-box-flex: 2;\r\n      -ms-flex-positive: 2;\r\n          flex-grow: 2;\r\n}\r\n\r\n.home-search button {\r\n  margin-top: 20px;\r\n  background: none;\r\n  border: none;\r\n\r\n}\r\n\r\n.home-search h5 {\r\n  padding-top: 20px;\r\n\r\n}\r\n\r\n/* search box END */\r\n\r\n/* popular repairs and search results */\r\n\r\n.pop-repairs {\r\n  z-index: 20;\r\n  position: absolute;\r\n  top:55%;\r\n  left: 50%;\r\n  -webkit-transform: translateX(-50%);\r\n  transform: translateX(-50%)\r\n}\r\n\r\n.phone-flx {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  width: 100%;\r\n}\r\n\r\n.phone-flx a {\r\n  height: 150px;\r\n}\r\n\r\nh3 {\r\n  text-align: center;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.phone-card h4 {\r\n  position: relative;\r\n  margin-left: 20px;\r\n}\r\n\r\n#mod {\r\n  margin-top: -10px;\r\n}\r\n\r\n.phone-card {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex-positive: 1;\r\n          flex-grow: 1;\r\n  margin:20px;\r\n  padding: 20px;\r\n  text-align: center;\r\n  color: black;\r\n  min-width:240px;\r\n  height:120px;\r\n  background-color: rgba(255, 255, 255, 0.6);\r\n  border: solid white 1px;\r\n  box-shadow: 10px 10px 5px #888888;\r\n  border-radius: 2px;\r\n}\r\n.phone-card:hover {\r\n  background-color: #EEE;\r\n  cursor: pointer;\r\n  color: #607d8b;\r\n  -webkit-transform: scale(1.2);\r\n  transform: scale(1.2);\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\n.phone-card img {\r\n  max-width: 100px;\r\n  float: left;\r\n  margin-top: -12px;\r\n  box-shadow: 2px 2px 1px #888888;\r\n  border-radius: 2px;\r\n}\r\n\r\n/* popular repairs and search results END */\r\n\r\n/* media queries */\r\n\r\n@media screen and (max-width: 768px) {\r\n  .phone-flx {\r\n    -ms-flex-pack: distribute;\r\n        justify-content: space-around;\r\n    -webkit-box-orient:vertical;\r\n    -webkit-box-direction:normal;\r\n        -ms-flex-direction:column;\r\n            flex-direction:column;\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n  .phone-card {\r\n    width: 320px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  .home-banner {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    min-height: 360px;\r\n  }\r\n\r\n  #banner-img {\r\n    display: none;\r\n  }\r\n\r\n  .home-search {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: auto;\r\n            flex: auto;\r\n    position: relative;\r\n    top: 0;\r\n    left: 0;\r\n    margin-top: 100px !important; /* makes sure that on smaller screen margin-top is 100px */\r\n    margin-bottom: 100px;\r\n    max-height: 250px;\r\n\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 1205px) {\r\n  .pop-repairs {\r\n    position: relative;\r\n  }\r\n  .home-banner {\r\n    height: 60vh;\r\n  }\r\n  .home-search {\r\n    margin-top: 20px;\r\n  }\r\n}\r\n\r\n/* media queries END */\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngStyle]=\"{'background-image': 'url(' + homeObj.background + ')'}\">\n  <!-- home background banner and search -->\n  <div class=\"home-banner\">\n    <img id=\"banner-img\" [src]=\"homeObj.image\">\n    <div class=\"home-search\">\n      <img [src]=\"homeObj.icon\">\n      <h2>{{homeObj.title}}</h2>\n      <form id=\"filter\">\n        <input type=\"text\" [(ngModel)]=\"term\" [ngModelOptions]=\"{standalone: true}\" #search=\"ngModel\"\n               placeholder=\" What screen are you looking for?\"/>\n        <button type=\"button\"><i class=\"fa fa-search\"></i></button>\n      </form>\n      <h5>{{homeObj.subtitle}}</h5>\n    </div>\n  </div>\n  <!-- home background banner and search END -->\n\n  <!-- popular repairs and search results -->\n  <div class=\"pop-repairs\">\n    <div class=\"container\">\n      <div [hidden]=\"!search.pristine\">\n        <h3>{{homeObj.top}}</h3>\n      </div>\n      <div [hidden]=\"search.pristine\">\n        <h3>{{homeObj.search}}</h3>\n      </div>\n      <div class=\"phone-flx\">\n        <a *ngFor=\"let phone of phones | filter: term\" routerLink=\"/detail/{{phone.id}}\">\n          <div class=\"phone-card\">\n            <img [src]=\"phone.image\">\n            <h4>{{phone.name}}</h4>\n            <br>\n            <h4 id=\"mod\">{{phone.model}}</h4>\n          </div>\n        </a>\n      </div>\n    </div>\n  </div>\n  <!-- popular repairs and search results END -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_content_service__ = __webpack_require__("../../../../../src/app/shared/service/content.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service_phone_service__ = __webpack_require__("../../../../../src/app/shared/service/phone.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__filter_pipe__ = __webpack_require__("../../../../../src/app/filter.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function () {
    function HomeComponent(contentService, phoneService) {
        this.contentService = contentService;
        this.phoneService = phoneService;
        this.fader = false;
    }
    HomeComponent.prototype.getPhones = function () {
        var _this = this;
        this.phoneService.getPhones()
            .subscribe(function (phones) { return _this.phones = phones; });
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.homeObj = this.contentService.Objs['home'];
        this.getPhones();
        console.log(this.phones);
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__filter_pipe__["a" /* FilterPipe */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_service_content_service__["a" /* ContentService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_service_phone_service__["a" /* PhoneService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/map/map.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\r\n  height: 200px;\r\n  width: 300px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/map/map.component.html":
/***/ (function(module, exports) {

module.exports = "<agm-map [latitude]=\"lat\" [longitude]=\"long\" [zoom]=zoom>\n  <agm-marker [latitude]=\"lat\" [longitude]=\"long\"></agm-marker>\n</agm-map>\n\n"

/***/ }),

/***/ "../../../../../src/app/map/map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MapComponent = (function () {
    function MapComponent() {
        this.lat = 53.640552;
        this.long = -1.857861;
        this.zoom = 12;
    }
    MapComponent.prototype.ngOnInit = function () {
    };
    MapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-map',
            template: __webpack_require__("../../../../../src/app/map/map.component.html"),
            styles: [__webpack_require__("../../../../../src/app/map/map.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* transitions to reduce nav size and fade logo */\r\n\r\nnav {\r\n  min-height: 75px;\r\n  transition: all 1s;\r\n}\r\n\r\n.page-scroll {\r\n  min-height: 50px;\r\n}\r\n\r\n.page-scroll img {\r\n  opacity: 0;\r\n}\r\n\r\nimg {\r\n  height: 50px;\r\n  margin-top: 10px;\r\n  opacity: 1;\r\n  transition: opacity .75s ease-in-out;\r\n}\r\n\r\n/* transitions to reduce nav size and fade logo END */\r\n\r\nnav.navbar.navbar-inverse {\r\n  margin-bottom: 0;\r\n  background-color: #607d8b;\r\n}\r\n\r\n/* font and background colours */\r\n\r\n#navbar ul li a {\r\n  color: thistle;\r\n}\r\n\r\n#navbar ul li a:hover {\r\n  color: darkslateblue;\r\n}\r\n\r\n.navbar-brand {\r\n  color: thistle;\r\n}\r\n\r\n/* font and background colours END */\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\" [ngClass]=\"{'page-scroll': isScrolled}\">\r\n  <div class=\"container\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle collapsed\" (click)=\"isCollapsed = !isCollapsed\">\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a class=\"navbar-brand\" href=\"\">simplyScreens</a>\r\n      <div class=\"navbar-left\"><img [ngClass]=\"{'page-scroll-img': isScrolled}\" [src]=\"navObj.logo\"></div>\r\n    </div>\r\n    <div id=\"navbar\" class=\"navbar-collapse collapse\" [collapse]=\"isCollapsed\">\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <li><a routerLink=\"/home\" routerLinkActive=\"active\">Home</a></li>\r\n        <li><a routerLink=\"/about\" routerLinkActive=\"active\">About</a></li>\r\n        <li><a routerLink=\"/service\" routerLinkActive=\"active\">Service</a></li>\r\n        <li><a routerLink=\"/contact\" routerLinkActive=\"active\">Contact</a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_content_service__ = __webpack_require__("../../../../../src/app/shared/service/content.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = (function () {
    function NavbarComponent(contentService) {
        this.contentService = contentService;
        this.isCollapsed = true;
        this.isScrolled = false;
        this.startPos = 0;
        this.changePos = 50;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.navObj = this.contentService.Objs['nav'];
    };
    NavbarComponent.prototype.onScrollEvent = function () {
        this.startPos = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);
        if (this.startPos >= this.changePos) {
            this.isScrolled = true;
        }
        else {
            this.isScrolled = false;
        }
        console.log(this.isScrolled);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('window:scroll', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], NavbarComponent.prototype, "onScrollEvent", null);
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_service_content_service__["a" /* ContentService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/phone-detail/phone-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\r\n  background-color: rgba(255, 255, 255, 0.6);\r\n}\r\n\r\n.detail {\r\n  max-width: 800px;\r\n  text-align: center;\r\n  border: solid 2px thistle;\r\n  margin: 90px auto 0 auto;\r\n}\r\n\r\n.detail img {\r\n  border: solid 2px thistle;\r\n  max-width: 430px;\r\n  margin-top: 10px;\r\n}\r\n\r\n.detail ul {\r\n  width: 210px;\r\n  margin: 10px auto 10px auto;\r\n}\r\n\r\n.detail-btns {\r\n  margin: 10px auto 10px auto;\r\n  width: 200px;\r\n  padding-left: 20px;\r\n}\r\n\r\n#go-back {\r\n  background-color: thistle;\r\n  border: solid 1px #607d8b;\r\n  color: #607d8b;\r\n}\r\n\r\n#contact {\r\n  background-color: #607d8b;\r\n  border: solid 1px thistle;\r\n  color: thistle;\r\n}\r\n\r\n.row {\r\n  border-bottom: solid 1px thistle;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n@media screen and (max-width: 545px) {\r\n  .detail img {\r\n    width: 90%;\r\n  }\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/phone-detail/phone-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngStyle]=\"{'background-image': 'url(' + detailObj.background + ')'}\">\n  <div class=\"container\">\n    <div class=\"detail\" *ngIf=\"phone\">\n      <h2>- {{ phone.name }} - {{ phone.model }} -</h2>\n      <div> id: {{ phone.id }} </div>\n      <img [src]=\"phone.image\">\n      <ul>\n        <li>Screen Type - {{ phone.screen }}</li>\n        <li>Screen Cost - {{ phone.cost }}</li>\n        <li>Repair Cost - {{phone.repair }}</li>\n      </ul>\n    </div>\n    <div class=\"detail-btns\">\n      <button class=\"btn\" id=\"go-back\" (click)=\"goBack()\">Go Back</button>\n      <button class=\"btn\" id=\"contact\" routerLink=\"/contact/\">Contact</button>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <h4>Just The Screen</h4>\n        <p>If you feel confident we are able to send you just the screen for you to repair yourself. Please take\n        note of the id number below the make and model and enter this along with SCREEN ONLY in the message field\n        our contact form</p>\n      </div>\n\n      <div class=\"col-md-6\">\n        <h4>Full Repair</h4>\n        <p>If you would like our full repair service Please take note of the id number below the make and model and enter\n          this along with FULL REPAIR in the message field our contact form  </p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/phone-detail/phone-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhoneDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_service_phone_service__ = __webpack_require__("../../../../../src/app/shared/service/phone.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__phone__ = __webpack_require__("../../../../../src/app/phone.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_service_content_service__ = __webpack_require__("../../../../../src/app/shared/service/content.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PhoneDetailComponent = (function () {
    function PhoneDetailComponent(route, phoneService, location, contentService) {
        this.route = route;
        this.phoneService = phoneService;
        this.location = location;
        this.contentService = contentService;
    }
    PhoneDetailComponent.prototype.ngOnInit = function () {
        this.getPhone();
        this.detailObj = this.contentService.Objs['service'];
    };
    PhoneDetailComponent.prototype.getPhone = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.phoneService.getPhone(id).subscribe(function (phone) { return _this.phone = phone; });
    };
    PhoneDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__phone__["a" /* PhoneClass */])
    ], PhoneDetailComponent.prototype, "phone", void 0);
    PhoneDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-phone-detail',
            template: __webpack_require__("../../../../../src/app/phone-detail/phone-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/phone-detail/phone-detail.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__shared_service_phone_service__["a" /* PhoneService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_5__shared_service_content_service__["a" /* ContentService */]])
    ], PhoneDetailComponent);
    return PhoneDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/phone.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhoneClass; });
var PhoneClass = (function () {
    function PhoneClass() {
    }
    return PhoneClass;
}());



/***/ }),

/***/ "../../../../../src/app/services/services.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\r\n  background-color: rgba(255, 255, 255, 0.6);\r\n}\r\n\r\n#top-con {\r\n  margin-top: 95px;\r\n}\r\n\r\n#bottom-con {\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.ph-flx-con {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: start;\r\n      -ms-flex-align: start;\r\n          align-items: flex-start;\r\n  width: 100%;\r\n}\r\n\r\n.ph-flx-con a {\r\n  height: 150px;\r\n}\r\n\r\nh3 {\r\n  text-align: center;\r\n  margin: 60px auto 20px auto;\r\n  padding-bottom: 5px;\r\n  border-bottom: solid 1px #607d8b;\r\n  width: 300px;\r\n}\r\n\r\n.module h4 {\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\n\r\n.mod {\r\n  margin-top: -10px;\r\n}\r\n\r\n.module {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex-positive: 1;\r\n          flex-grow: 1;\r\n  margin:20px;\r\n  padding: 20px;\r\n  text-align: center;\r\n  color: black;\r\n  min-width:240px;\r\n  height:120px;\r\n  background-color: rgba(255, 255, 255, 0.6);\r\n  border: solid white 1px;\r\n  box-shadow: 10px 10px 5px #888888;\r\n  border-radius: 2px;\r\n}\r\n.module:hover {\r\n  background-color: #EEE;\r\n  cursor: pointer;\r\n  color: #607d8b;\r\n  -webkit-transform: scale(1.2);\r\n  transform: scale(1.2);\r\n}\r\n\r\n.module img {\r\n  max-width: 100px;\r\n  float: left;\r\n  margin-top: -12px;\r\n  box-shadow: 2px 2px 1px #888888;\r\n  border-radius: 2px;\r\n}\r\n\r\n.info-flex {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  padding-left: 15px;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  .ph-flx-con {\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n  }\r\n\r\n  .module {\r\n    width: 320px;\r\n  }\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/services/services.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngStyle]=\"{'background-image': 'url(' + serviceObj.background + ')'}\">\n  <div class=\"container\">\n    <h3 id=\"top-con\">- Apple -</h3>\n    <div class=\"ph-flx-con\">\n\n      <a *ngFor=\"let phone of phones\" routerLink=\"/detail/{{phone.id}}\">\n        <ng-container *ngIf=\"phone.name === 'iPhone'\">\n          <div class=\"module\">\n            <img [src]=\"phone.image\">\n            <div class=\"info-flex\">\n              <h4>{{phone.name}} {{phone.model}}</h4>\n            </div>\n          </div>\n        </ng-container>\n      </a>\n    </div>\n\n    <h3 class=\"con-space\">- Samsung -</h3>\n    <div class=\"ph-flx-con\">\n\n      <a *ngFor=\"let phone of phones\" routerLink=\"/detail/{{phone.id}}\">\n        <ng-container *ngIf=\"phone.name === 'Samsung'\">\n          <div class=\"module\">\n            <img [src]=\"phone.image\">\n            <div class=\"info-flex\">\n              <h4>{{phone.name}} {{phone.model}}</h4>\n            </div>\n          </div>\n        </ng-container>\n      </a>\n    </div>\n\n    <h3 class=\"con-space\">- Google -</h3>\n    <div class=\"ph-flx-con\">\n\n      <a *ngFor=\"let phone of phones\" routerLink=\"/detail/{{phone.id}}\">\n        <ng-container *ngIf=\"phone.name === 'Pixel'\">\n          <div class=\"module\">\n            <img [src]=\"phone.image\">\n            <div class=\"info-flex\">\n              <h4>{{phone.name}} {{phone.model}}</h4>\n            </div>\n          </div>\n        </ng-container>\n      </a>\n    </div>\n\n    <h3 class=\"con-space\">- HTC -</h3>\n    <div class=\"ph-flx-con\" id=\"bottom-con\">\n\n      <a *ngFor=\"let phone of phones\" routerLink=\"/detail/{{phone.id}}\">\n        <ng-container *ngIf=\"phone.name === 'HTC'\">\n          <div class=\"module\">\n            <img [src]=\"phone.image\">\n            <div class=\"info-flex\">\n              <h4>{{phone.name}} {{phone.model}}</h4>\n            </div>\n          </div>\n        </ng-container>\n      </a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/services/services.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_phone_service__ = __webpack_require__("../../../../../src/app/shared/service/phone.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_service_content_service__ = __webpack_require__("../../../../../src/app/shared/service/content.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ServicesComponent = (function () {
    function ServicesComponent(phoneService, modalService, contentService) {
        this.phoneService = phoneService;
        this.modalService = modalService;
        this.contentService = contentService;
    }
    ServicesComponent.prototype.getPhones = function () {
        var _this = this;
        this.phoneService.getPhones()
            .subscribe(function (phones) { return _this.phones = phones; });
    };
    ServicesComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    ServicesComponent.prototype.ngOnInit = function () {
        this.getPhones();
        this.serviceObj = this.contentService.Objs['service'];
    };
    ServicesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-services',
            template: __webpack_require__("../../../../../src/app/services/services.component.html"),
            styles: [__webpack_require__("../../../../../src/app/services/services.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_service_phone_service__["a" /* PhoneService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["b" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_service_content_service__["a" /* ContentService */]])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/service/content.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ContentService = (function () {
    function ContentService() {
        this.Objs = {
            'home': {
                title: 'simplyScreens',
                subtitle: 'Lets NOT Have A Smashing Time',
                top: 'Top Screen Repairs',
                search: 'Search Results',
                image: 'assets/main-img-home.jpeg',
                background: 'assets/stonehaven.png',
                icon: 'assets/main-icon-home.png'
            },
            'about': {
                title: 'About',
                subtitle: {
                    team: 'Meet the team!',
                    serviceTitle: 'Service',
                    historyTitle: 'History'
                },
                service: 'Our company is all about convenience for you.. the customer. We strive to quickly and efficiently repair your\n' +
                    '        broken phone screen at work at home or even using our special recorded delivery. To give you peace of mind\n' +
                    '        that you are getting the best service possible. We only ever use grade A screens sourced from the manufacturers.\n' +
                    '        We are also happy to send you the screen for you to repair yourself.',
                history: 'Our company is a fictional online smart phone repair service foundered December 2017 as a stream 1 project for\n' +
                    '        code institute diploma in software development. This site is purely aesthetic and does not offer any real services.',
                testTitle: 'Testimonials',
                image: {
                    me: 'assets/joseph.jpg',
                    sarah: 'assets/sarah.jpg',
                    testOne: 'assets/test-one.jpg',
                    testTwo: 'assets/test-two.jpg',
                    testThree: 'assets/test-three.jpg',
                    background: 'assets/dust_scratches.png',
                }
            },
            'service': {
                image: 'assets/smashed screen.jpg',
                background: 'assets/circles-dark.png'
            },
            'nav': {
                logo: '/assets/mobile-phone-logo-icon.png'
            },
            'contact': {
                background: '/assets/circles-light.png'
            },
        };
    }
    ContentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], ContentService);
    return ContentService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/service/phone-list.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PHONES; });
var PHONES = [
    { id: 1, model: '6', name: 'iPhone', cost: '£50.00', screen: 'LED 4.7in', repair: '£65.00', image: 'assets/iphone-6.jpg' },
    { id: 8, model: '2 XL', name: 'Pixel', cost: '£180.00', screen: 'OLED 6in', repair: '£210.00', image: '/assets/pixel-2-XL.jpg' },
    { id: 11, model: 'S8 Plus', name: 'Samsung', cost: '190.00', screen: 'AMOLED 6.28in', repair: '230.00', image: 'assets/samsung-galaxy-s8-plus.jpg' },
    { id: 9, model: 'U11', name: 'HTC', cost: '£110.00', screen: 'LCD5 5.5in', repair: '£120.00', image: '/assets/htc-u11.jpg' },
    { id: 2, model: '6s', name: 'iPhone', cost: '£60.00', screen: 'LED 4.7in', repair: '£75.00', image: '/assets/iphone-6s-plus.jpg' },
    { id: 3, model: '7', name: 'iPhone', cost: '£70.00', screen: 'LED 4.7in', repair: '£85.00', image: 'assets/iphone-7-plus.jpg' },
    { id: 4, model: '8', name: 'iPhone', cost: '£80.00', screen: 'LED 4.7in', repair: '£95.00', image: 'assets/iPhone-8-plus.jpg' },
    { id: 5, model: '1', name: 'Pixel', cost: '£120.00', screen: 'AMOLED 5in', repair: '£150.00', image: 'assets/pixel.jpg' },
    { id: 6, model: '1 XL', name: 'Pixel', cost: '£160.00', screen: 'AMOLED 5.5in', repair: '£190.00', image: 'assets/pixel-xl.jpg' },
    { id: 7, model: '2', name: 'Pixel', cost: '£150.00', screen: 'AMOLED 5in', repair: '£180.00', image: 'assets/pixel-2.jpg' },
    { id: 10, model: 'S8', name: 'Samsung', cost: '£180.00', screen: 'AMOLED 5.8in', repair: '£210.00', image: 'assets/samsung-galaxy-s8.jpg' },
    { id: 12, model: 'S7', name: 'Samsung', cost: '£120.00', screen: 'OLED 5.1in', repair: '£150.00', image: '/assets/samsung-galaxy-S7.jpg' },
];


/***/ }),

/***/ "../../../../../src/app/shared/service/phone.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhoneService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__phone_list__ = __webpack_require__("../../../../../src/app/shared/service/phone-list.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PhoneService = (function () {
    function PhoneService() {
    }
    PhoneService.prototype.getPhones = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(__WEBPACK_IMPORTED_MODULE_2__phone_list__["a" /* PHONES */]);
    };
    PhoneService.prototype.getPhone = function (id) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(__WEBPACK_IMPORTED_MODULE_2__phone_list__["a" /* PHONES */].find(function (phone) { return phone.id === id; }));
    };
    PhoneService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], PhoneService);
    return PhoneService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map