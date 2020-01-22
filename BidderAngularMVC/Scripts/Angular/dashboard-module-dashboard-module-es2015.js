(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-module-dashboard-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard-module/dashboard-module.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard-module/dashboard-module.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <nav class=\"navbar navbar-default\">\n        <ul class=\"nav navbar-nav\">\n\n            <li>\n                <a routerLinkActive=\"active\" routerLink=\"/home\">Home</a>\n            </li>\n\n            <li>\n                <a routerLinkActive=\"active\" routerLink=\"/home/logout\">Logout</a>\n            </li>\n\n            <li>\n                <a routerLinkActive=\"active\" routerLink=\"/home/user/edit\">Edit</a>\n            </li>\n\n        </ul>\n    </nav>\n\n    <router-outlet></router-outlet>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard-module/edit-user-details/edit-user-details.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard-module/edit-user-details/edit-user-details.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>edit-user-details works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard-module/home/home.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard-module/home/home.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>home works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard-module/logout/logout.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard-module/logout/logout.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>logout !</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard-module/test/test.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard-module/test/test.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>test works!</p>\n"

/***/ }),

/***/ "./src/app/dashboard-module/dashboard-module.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard-module/dashboard-module.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC1tb2R1bGUvZGFzaGJvYXJkLW1vZHVsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/dashboard-module/dashboard-module.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/dashboard-module/dashboard-module.component.ts ***!
  \****************************************************************/
/*! exports provided: DashboardModuleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModuleComponent", function() { return DashboardModuleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DashboardModuleComponent = class DashboardModuleComponent {
    constructor() { }
    ngOnInit() {
    }
};
DashboardModuleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard-module',
        template: __webpack_require__(/*! raw-loader!./dashboard-module.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard-module/dashboard-module.component.html"),
        styles: [__webpack_require__(/*! ./dashboard-module.component.css */ "./src/app/dashboard-module/dashboard-module.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DashboardModuleComponent);



/***/ }),

/***/ "./src/app/dashboard-module/dashboard-module.ts":
/*!******************************************************!*\
  !*** ./src/app/dashboard-module/dashboard-module.ts ***!
  \******************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/dashboard-module/home/home.component.ts");
/* harmony import */ var _edit_user_details_edit_user_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-user-details/edit-user-details.component */ "./src/app/dashboard-module/edit-user-details/edit-user-details.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/dashboard-module/logout/logout.component.ts");
/* harmony import */ var _dashboard_module_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard-module.component */ "./src/app/dashboard-module/dashboard-module.component.ts");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./test/test.component */ "./src/app/dashboard-module/test/test.component.ts");










const dashboardRoutes = [
    {
        path: '',
        component: _dashboard_module_component__WEBPACK_IMPORTED_MODULE_8__["DashboardModuleComponent"],
        children: [
            { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
            { path: 'user/edit', component: _edit_user_details_edit_user_details_component__WEBPACK_IMPORTED_MODULE_6__["EditUserDetailsComponent"] },
            { path: 'test', component: _test_test_component__WEBPACK_IMPORTED_MODULE_9__["TestComponent"] },
            { path: 'logout', component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_7__["LogoutComponent"] }
        ]
    }
];
let DashboardModule = class DashboardModule {
};
DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(dashboardRoutes),
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
        ],
        declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _edit_user_details_edit_user_details_component__WEBPACK_IMPORTED_MODULE_6__["EditUserDetailsComponent"], _logout_logout_component__WEBPACK_IMPORTED_MODULE_7__["LogoutComponent"], _dashboard_module_component__WEBPACK_IMPORTED_MODULE_8__["DashboardModuleComponent"], _test_test_component__WEBPACK_IMPORTED_MODULE_9__["TestComponent"]]
    })
], DashboardModule);



/***/ }),

/***/ "./src/app/dashboard-module/edit-user-details/edit-user-details.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/dashboard-module/edit-user-details/edit-user-details.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC1tb2R1bGUvZWRpdC11c2VyLWRldGFpbHMvZWRpdC11c2VyLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard-module/edit-user-details/edit-user-details.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/dashboard-module/edit-user-details/edit-user-details.component.ts ***!
  \***********************************************************************************/
/*! exports provided: EditUserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserDetailsComponent", function() { return EditUserDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EditUserDetailsComponent = class EditUserDetailsComponent {
    constructor() { }
    ngOnInit() {
    }
};
EditUserDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-user-details',
        template: __webpack_require__(/*! raw-loader!./edit-user-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard-module/edit-user-details/edit-user-details.component.html"),
        styles: [__webpack_require__(/*! ./edit-user-details.component.css */ "./src/app/dashboard-module/edit-user-details/edit-user-details.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], EditUserDetailsComponent);



/***/ }),

/***/ "./src/app/dashboard-module/home/home.component.css":
/*!**********************************************************!*\
  !*** ./src/app/dashboard-module/home/home.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC1tb2R1bGUvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard-module/home/home.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/dashboard-module/home/home.component.ts ***!
  \*********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let HomeComponent = class HomeComponent {
    constructor(router, http) {
        this.router = router;
        this.http = http;
    }
    ngOnInit() {
        this.http.get('api/customer/getSessionDetails').subscribe((data) => {
        }, error => {
            this.router.navigate(['/user/login']);
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard-module/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/dashboard-module/home/home.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], HomeComponent);



/***/ }),

/***/ "./src/app/dashboard-module/logout/logout.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/dashboard-module/logout/logout.component.ts ***!
  \*************************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let LogoutComponent = class LogoutComponent {
    constructor(router, http) {
        this.router = router;
        this.http = http;
    }
    ngOnInit() {
        this.http.get('/api/customer/logout');
    }
};
LogoutComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-logout',
        template: __webpack_require__(/*! raw-loader!./logout.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard-module/logout/logout.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], LogoutComponent);



/***/ }),

/***/ "./src/app/dashboard-module/test/test.component.css":
/*!**********************************************************!*\
  !*** ./src/app/dashboard-module/test/test.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC1tb2R1bGUvdGVzdC90ZXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard-module/test/test.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/dashboard-module/test/test.component.ts ***!
  \*********************************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TestComponent = class TestComponent {
    constructor() { }
    ngOnInit() {
    }
};
TestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-test',
        template: __webpack_require__(/*! raw-loader!./test.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard-module/test/test.component.html"),
        styles: [__webpack_require__(/*! ./test.component.css */ "./src/app/dashboard-module/test/test.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TestComponent);



/***/ })

}]);
//# sourceMappingURL=dashboard-module-dashboard-module-es2015.js.map