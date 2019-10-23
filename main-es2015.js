(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <nav class=\"navbar navbar-expand-lg navbar-light bg-info\">\r\n      <a class=\"navbar-brand\" href=\"#\">\r\n        <img src=\"https://cdn4.iconfinder.com/data/icons/search-engine-optimization/512/pen_paper_business_equipment_tools_flat_icon_symbol-512.png\" width=\"80\" height=\"80\" alt=\"\">\r\n      </a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n\r\n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n          <li class=\"nav-item active\">\r\n            <a class=\"nav-link\" href=\"#\" routerLink=\"/home\" routerLinkActive=\"active\">Home <span class=\"sr-only\">(current)</span></a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"#\" routerLink=\"/desktop\" routerLinkActive=\"active\">Desktop Application</a>\r\n          </li>\r\n          <!--<li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"#\" routerLink=\"/mobile\" routerLinkActive=\"active\">Mobile Application</a>\r\n          </li>-->\r\n          <li class=\"nav-item dropdown\">\r\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n              Tools\r\n            </a>\r\n            <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n              <a class=\"dropdown-item\" href=\"#\" routerLink=\"/downloads\" routerLinkActive=\"active\">Downloads</a>\r\n              <a class=\"dropdown-item\" href=\"#\"></a>\r\n              <div class=\"dropdown-divider\"></div>\r\n              <a class=\"dropdown-item\" href=\"#\" routerLink=\"/manual\" routerLinkActive=\"active\">User Manual</a>\r\n            </div>\r\n        </ul>\r\n        <form class=\"form-inline my-2 my-lg-0\">\r\n          <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\r\n          <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\r\n        </form>\r\n      </div>\r\n    </nav>\r\n    <router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/bottom-frame/bottom-frame.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/bottom-frame/bottom-frame.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h5 class=\"font-italic\">Quick Links</h5>\n  <hr>\n  <button class=\"btn btn-primary\" (click)=\"openGit()\"><i class=\"fa fa-github\"></i>Git Repository</button>\n  <button class=\"btn btn-primary\" (click)=\"openSlack()\"><i class=\"fa fa-slack\"></i>Slack</button>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/desktop-page/desktop-page.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/desktop-page/desktop-page.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container2\">\n<div class=\"parallax\">\n  <br>\n<div class=\"container\">\n    <div class=\"container1\">\n    <h1 class=\"text-center font-italic\">Desktop-Application</h1>\n    <hr>\n      <div class=\"row\">\n        <div class=\"col-xs-4 col-sm-4\">\n          <div id=\"file-transfer\" (click)=\"clickFileTransfer()\" href=\"#\" routerLink=\"/file-transfer\" routerLinkActive=\"active\">\n            <h2 class=\"font-italic\">File Transfer </h2>\n            <hr>\n            <img class=\"center\" src=\"https://img.icons8.com/ios-filled/2x/back-sorting.png\"><hr>\n            <p>- Transfer files to locally connected users</p>\n            <p>- Any size/type</p>\n            <p>- Zero ISP bandwidth used</p>\n          </div>\n        </div>\n        <div class=\"col-xs-4 col-sm-4\">\n          <div id=\"video-call\" href=\"#\" routerLink=\"/video-call\" routerLinkActive=\"active\">\n            <h2 class=\"font-italic\">Speech To Text</h2>\n            <hr>\n            <img class=\"center\" src=\"https://i.imgur.com/XPbOlpj.png\">\n            <hr>\n            <p>- Instantly Convey Audio to text</p>\n            <p>- Minimal ping</p>\n            <p>- Internet Connection Required</p>\n            <p>- Microphone required</p>\n          </div>\n        </div>\n        <div class=\"col-xs-4 col-sm-4\">\n          <div id=\"voice-messaging\" href=\"#\" routerLink=\"/voice-note\" routerLinkActive=\"active\">\n            <h2 class=\"font-italic\">Voice Messaging</h2>\n            <hr>\n            <img class=\"center\" src=\"https://img.icons8.com/ios-filled/2x/microphone.png\">\n            <hr>\n            <p>- Record and send voice messages</p>\n            <p>- Zero ISP bandwidth usage</p>\n            <p>- Microphone required</p>\n          </div>\n        </div>\n     </div>\n      <hr>\n  </div>\n</div>\n<br>\n<br>\n  <app-bottom-frame></app-bottom-frame>\n</div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/downloads-page/downloads-page.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/downloads-page/downloads-page.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"parallax\">\n  <br>\n  <div class=\"container\">\n    <div class=\"container1\">\n      <h1 class=\"font-italic\">Downloads</h1>\n      <hr>\n      <div class=\"row\">\n        <h3 class=\"font-italic\">Latest Stable Version: </h3>\n        <a href=\"https://www.google.com\">Download</a>\n      </div>\n      <div class=\"row\">\n        <h3 class=\"font-italic\">Beta Version: </h3>\n        <a href=\"https://www.google.com\">Download</a>\n      </div>\n    </div>\n  </div>\n  <br>\n  <app-bottom-frame></app-bottom-frame>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/file-transfer-page/file-transfer-page.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/file-transfer-page/file-transfer-page.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"parallax\">\n  <br>\n  <div class=\"container\">\n    <div class=\"container1\">\n      <br>\n      <h1 class=\"font-italic\">File Transfer</h1>\n      <img class=\"center\" src=\"https://i.imgur.com/7D01mMg.jpg\">\n      <h3 class=\"font-italic\">Details</h3>\n      <hr>\n      <h3 class=\"font-italic\">Instantly Transfer Files To Any Connected User!</h3>\n      <p class=\"font-italic\">Transfer any file to any connected user at high speed rates without using any isp provided bandwidth (excl. VPN users connected via the internet)</p>\n      <p class=\"font-italic\">- Users connected via ethernet cables can expect a rate of up to 100mbps </p>\n       <p class=\"font-italic\">- Wirelessly connected users can expect a rate of up to 5.5mbps  </p>\n      <h3 class=\"font-italic\">Transfers</h3>\n      <p class=\"font-italic\">Follow the on-screen instructions in 'File Transfer' tab to transfer/allow any file to/from\n        another connected user. Any user can host a connection to enable transfers, allowing any other connected used to\n        upload/download files to/from the host. All transfers can be found, by default, in the 'Transfers' folder in the\n        application directory. Alternatively, a user/host can create/choose a preffered directory</p>\n      <br>\n    </div>\n  </div>\n  <br>\n  <app-bottom-frame></app-bottom-frame>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home-page/home-page.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home-page/home-page.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"parallax\">\n<div class=\"container\">\n  <button (click)=\"getPrev()\">Previous</button>\n  <button (click)=\"getNext()\">Next</button>\n\n  <!--<div *ngFor=\"let post of posts | async\">\n  {{post | json}}\n</div>-->\n  <hr>\n  <div class=\"container1\">\n    <h2>\n      {{title | async }}\n    </h2>\n    <h3>\n      {{subtitle | async }}\n    </h3>\n    <p>\n      {{day | async}} {{month | async}}\n    </p>\n    <img src=\"{{url1 | async}}\">\n    <h4>\n      {{article | async }}\n    </h4>\n\n    <img src=\"{{url2 | async}}\">\n\n  </div>\n</div>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/manual-page/manual-page.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/manual-page/manual-page.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"container1\">\n    <h1>MANUAL PAGE</h1>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/mobile-page/mobile-page.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/mobile-page/mobile-page.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"container1\">\n    <h1>MOBILE PAGE</h1>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navigation/navigation.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navigation/navigation.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-info\">\r\n  <a class=\"navbar-brand\" href=\"#\">\r\n    <img src=\"https://cdn4.iconfinder.com/data/icons/search-engine-optimization/512/pen_paper_business_equipment_tools_flat_icon_symbol-512.png\" width=\"80\" height=\"80\" alt=\"\">\r\n  </a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\" routerLink=\"/home\" routerLinkActive=\"active\">(current)</span></a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"#\" routerLink=\"/desktop-app\" routerLinkActive=\"active\">Desktop Application</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"#\" routerLink=\"/mobile-app\" routerLinkActive=\"active\">Mobile Application</a>\r\n      </li>\r\n      <li class=\"nav-item dropdown\">\r\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          Tools\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" href=\"#\">Downloads</a>\r\n          <a class=\"dropdown-item\" href=\"#\"></a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" href=\"#\">User Manual</a>\r\n        </div>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link disabled\" href=\"#\" tabindex=\"-1\" aria-disabled=\"true\">Disabled</a>\r\n      </li>\r\n    </ul>\r\n    <form class=\"form-inline my-2 my-lg-0\">\r\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\r\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\r\n    </form>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/video-call-page/video-call-page.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/video-call-page/video-call-page.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"parallax\">\n  <br>\n  <div class=\"container\">\n    <div class=\"container1\">\n      <br>\n      <h1 class=\"font-italic\">Speech To Text</h1>\n      <img class=\"center\" src=\"https://i.imgur.com/JLzns3y.png\">\n      <h3 class=\"font-italic\">Details</h3>\n      <hr>\n      <h3 class=\"font-italic\">Audio to text in an instance!</h3>\n      <p class=\"font-italic\">- Microphone Required</p>\n      <p class=\"font-italic\">- Internet Connection Required</p>\n      <p class=\"font-italic\">- Using Google cloud's speech to text, users are able to quickly convert audio to text</p>\n      <br>\n    </div>\n  </div>\n  <br>\n  <app-bottom-frame></app-bottom-frame>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/voice-note-page/voice-note-page.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/voice-note-page/voice-note-page.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"parallax\">\n  <br>\n  <div class=\"container\">\n    <div class=\"container1\">\n      <br>\n      <h1 class=\"font-italic\">Voice Messaging</h1>\n      <img class=\"center\" src=\"https://i.imgur.com/syYJdnA.jpg\">\n      <h3 class=\"font-italic\">Details</h3>\n      <hr>\n      <h3 class=\"font-italic\">Convenient Voice Messaging</h3>\n      <p class=\"font-italic\">Record and listen to voice messages without using any isp provided bandwidth (excl. VPN users connected via the internet)</p>\n      <p class=\"font-italic\">- Advanced customization allows users to fine-tune their desired record settings</p>\n      <p class=\"font-italic\">- A microphone is required </p>\n      <h3 class=\"font-italic\">Recording</h3>\n      <p class=\"font-italic\">Record a voice-note of any length by selecting the desired input device from the listbox (connected microphones with installed, up to date, drivers should be listed)\n        The default settings can be used for a standard setup. A user may fine-tune these depending on preference.\n      </p>\n      <br>\n    </div>\n  </div>\n  <br>\n  <app-bottom-frame></app-bottom-frame>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  width: auto;\r\n  height: auto;\r\n  background-color: #ffb74a;\r\n  border-radius: 10px;\r\n  opacity: 0.9;\r\n  padding: 20px;\r\n}\r\n\r\n.container1 {\r\n  width: auto;\r\n  height: 200px;\r\n  background-color: #188f92;\r\n  opacity: 100%;\r\n  border-radius: 10px;\r\n}\r\n\r\n.bg {\r\n  width: auto;\r\n  height: 100%;\r\n  background-color: mediumaquamarine;\r\n /* background: url(\"https://static1.squarespace.com/static/59ac7cfef14aa1e8b7cff33d/59bbd1ba8fd4d209eb355f75/5b6ce95721c67c8a95fafda6/1544542536730/AdobeStock_oranges_201216111.jpeg?format=2500w\");*/\r\n  background-size: 100% 100%;\r\n  background-position: top center;\r\n}\r\n\r\n.parallax {\r\n  background-image: url(\"https://previews.123rf.com/images/liuzishan/liuzishan1701/liuzishan170100046/68987761-internet-connection-abstract-sense-of-science-and-technology-graphic-design-.jpg\");\r\n  height: 500px;\r\n  background-attachment: fixed;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtDQUFrQztDQUNuQyxzTUFBc007RUFDck0sMEJBQTBCO0VBQzFCLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLCtMQUErTDtFQUMvTCxhQUFhO0VBQ2IsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsc0JBQXNCO0NBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICB3aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYjc0YTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG9wYWNpdHk6IDAuOTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyMSB7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg4ZjkyO1xyXG4gIG9wYWNpdHk6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmJnIHtcclxuICB3aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbWVkaXVtYXF1YW1hcmluZTtcclxuIC8qIGJhY2tncm91bmQ6IHVybChcImh0dHBzOi8vc3RhdGljMS5zcXVhcmVzcGFjZS5jb20vc3RhdGljLzU5YWM3Y2ZlZjE0YWExZThiN2NmZjMzZC81OWJiZDFiYThmZDRkMjA5ZWIzNTVmNzUvNWI2Y2U5NTcyMWM2N2M4YTk1ZmFmZGE2LzE1NDQ1NDI1MzY3MzAvQWRvYmVTdG9ja19vcmFuZ2VzXzIwMTIxNjExMS5qcGVnP2Zvcm1hdD0yNTAwd1wiKTsqL1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBjZW50ZXI7XHJcbn1cclxuXHJcbi5wYXJhbGxheCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9wcmV2aWV3cy4xMjNyZi5jb20vaW1hZ2VzL2xpdXppc2hhbi9saXV6aXNoYW4xNzAxL2xpdXppc2hhbjE3MDEwMDA0Ni82ODk4Nzc2MS1pbnRlcm5ldC1jb25uZWN0aW9uLWFic3RyYWN0LXNlbnNlLW9mLXNjaWVuY2UtYW5kLXRlY2hub2xvZ3ktZ3JhcGhpYy1kZXNpZ24tLmpwZ1wiKTtcclxuICBoZWlnaHQ6IDUwMHB4O1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");



let AppComponent = class AppComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.title = 'office-tools-web';
    }
};
AppComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _desktop_page_desktop_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./desktop-page/desktop-page.component */ "./src/app/desktop-page/desktop-page.component.ts");
/* harmony import */ var _mobile_page_mobile_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mobile-page/mobile-page.component */ "./src/app/mobile-page/mobile-page.component.ts");
/* harmony import */ var _downloads_page_downloads_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./downloads-page/downloads-page.component */ "./src/app/downloads-page/downloads-page.component.ts");
/* harmony import */ var _manual_page_manual_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./manual-page/manual-page.component */ "./src/app/manual-page/manual-page.component.ts");
/* harmony import */ var _bottom_frame_bottom_frame_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./bottom-frame/bottom-frame.component */ "./src/app/bottom-frame/bottom-frame.component.ts");
/* harmony import */ var _file_transfer_page_file_transfer_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./file-transfer-page/file-transfer-page.component */ "./src/app/file-transfer-page/file-transfer-page.component.ts");
/* harmony import */ var _video_call_page_video_call_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./video-call-page/video-call-page.component */ "./src/app/video-call-page/video-call-page.component.ts");
/* harmony import */ var _voice_note_page_voice_note_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./voice-note-page/voice-note-page.component */ "./src/app/voice-note-page/voice-note-page.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



















const appRoutes = [
    { path: 'home', component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_9__["HomePageComponent"] },
    { path: 'desktop', component: _desktop_page_desktop_page_component__WEBPACK_IMPORTED_MODULE_10__["DesktopPageComponent"] },
    { path: 'mobile', component: _mobile_page_mobile_page_component__WEBPACK_IMPORTED_MODULE_11__["MobilePageComponent"] },
    { path: 'downloads', component: _downloads_page_downloads_page_component__WEBPACK_IMPORTED_MODULE_12__["DownloadsPageComponent"] },
    { path: 'manual', component: _manual_page_manual_page_component__WEBPACK_IMPORTED_MODULE_13__["ManualPageComponent"] },
    { path: 'file-transfer', component: _file_transfer_page_file_transfer_page_component__WEBPACK_IMPORTED_MODULE_15__["FileTransferPageComponent"] },
    { path: 'video-call', component: _video_call_page_video_call_page_component__WEBPACK_IMPORTED_MODULE_16__["VideoCallPageComponent"] },
    { path: 'voice-note', component: _voice_note_page_voice_note_page_component__WEBPACK_IMPORTED_MODULE_17__["VoiceNotePageComponent"] }
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__["NavigationComponent"],
            _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_9__["HomePageComponent"],
            _desktop_page_desktop_page_component__WEBPACK_IMPORTED_MODULE_10__["DesktopPageComponent"],
            _mobile_page_mobile_page_component__WEBPACK_IMPORTED_MODULE_11__["MobilePageComponent"],
            _downloads_page_downloads_page_component__WEBPACK_IMPORTED_MODULE_12__["DownloadsPageComponent"],
            _manual_page_manual_page_component__WEBPACK_IMPORTED_MODULE_13__["ManualPageComponent"],
            _bottom_frame_bottom_frame_component__WEBPACK_IMPORTED_MODULE_14__["BottomFrameComponent"],
            _file_transfer_page_file_transfer_page_component__WEBPACK_IMPORTED_MODULE_15__["FileTransferPageComponent"],
            _video_call_page_video_call_page_component__WEBPACK_IMPORTED_MODULE_16__["VideoCallPageComponent"],
            _voice_note_page_voice_note_page_component__WEBPACK_IMPORTED_MODULE_17__["VoiceNotePageComponent"],
        ],
        imports: [
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MDBBootstrapModule"].forRoot(),
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(appRoutes, { enableTracing: true }),
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"]
        ],
        providers: [_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/bottom-frame/bottom-frame.component.css":
/*!*********************************************************!*\
  !*** ./src/app/bottom-frame/bottom-frame.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  background-color: #359cad;\r\n  width: 100%;\r\n  border-top-left-radius: 10px;\r\n  border-top-right-radius: 10px;\r\n  padding-top: 20px;\r\n  padding-bottom: 10px;\r\n  display: block;\r\n}\r\n\r\nbutton {\r\n  margin-right: 20px;\r\n}\r\n\r\nh5 {\r\n  color: whitesmoke;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm90dG9tLWZyYW1lL2JvdHRvbS1mcmFtZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2JvdHRvbS1mcmFtZS9ib3R0b20tZnJhbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNTljYWQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbmg1IHtcclxuICBjb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/bottom-frame/bottom-frame.component.ts":
/*!********************************************************!*\
  !*** ./src/app/bottom-frame/bottom-frame.component.ts ***!
  \********************************************************/
/*! exports provided: BottomFrameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomFrameComponent", function() { return BottomFrameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BottomFrameComponent = class BottomFrameComponent {
    constructor() { }
    openGit() {
        window.open("https://github.com/frankAwesome/ITRW324Group21");
    }
    openSlack() {
        window.open("https://app.slack.com/client/TLLKMFSTY/GLJURMYH0");
    }
    ngOnInit() {
    }
};
BottomFrameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bottom-frame',
        template: __webpack_require__(/*! raw-loader!./bottom-frame.component.html */ "./node_modules/raw-loader/index.js!./src/app/bottom-frame/bottom-frame.component.html"),
        styles: [__webpack_require__(/*! ./bottom-frame.component.css */ "./src/app/bottom-frame/bottom-frame.component.css")]
    })
], BottomFrameComponent);



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let DataService = class DataService {
    constructor(http) {
        this.http = http;
        this.apiUrl = 'http://jsonplaceholder.typicode.com/users';
    }
    getUsers() {
        return this.http.get(this.apiUrl);
    }
};
DataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DataService);



/***/ }),

/***/ "./src/app/desktop-page/desktop-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/desktop-page/desktop-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  width: auto;\r\n  height: auto;\r\n  background-color: #ffb74a;\r\n  border-radius: 10px;\r\n  opacity: 0.9;\r\n  padding: 20px;\r\n  margin: auto;\r\n}\r\n\r\n.container1 {\r\n  width: auto;\r\n  background-color: #188f92;\r\n  opacity: 100%;\r\n  border-radius: 10px;\r\n  padding: 20px;\r\n  margin: auto;\r\n}\r\n\r\n.container2 {\r\n  width: auto;\r\n}\r\n\r\nh1 {\r\n  color: whitesmoke;\r\n}\r\n\r\nh2 {\r\n  text-align: center;\r\n  color: whitesmoke;\r\n}\r\n\r\nhr {\r\n  color: whitesmoke;\r\n  display: block;\r\n}\r\n\r\n#file-transfer:hover {\r\n  background-color: #3cb8c9;\r\n  cursor: pointer;\r\n}\r\n\r\n#video-call:hover {\r\n  background-color: #3cb8c9;\r\n  cursor: pointer;\r\n}\r\n\r\n#voice-messaging:hover {\r\n  background-color: #3cb8c9;\r\n  cursor: pointer;\r\n}\r\n\r\n#video-call {\r\n  float: left;\r\n  background-color: #42a7aa;\r\n  border-radius: 10px;\r\n  padding: 20px;\r\n  margin: 10px;\r\n}\r\n\r\n#file-transfer {\r\n  float: left;\r\n  background-color: #42a7aa;\r\n  padding: 20px;\r\n  border-radius: 10px;\r\n  margin: 10px;\r\n}\r\n\r\n#voice-messaging {\r\n  float: left;\r\n  background-color: #42a7aa;\r\n  padding: 20px;\r\n  border-radius: 10px;\r\n  margin: 10px;\r\n}\r\n\r\n.parallax {\r\n  background-image: url(\"https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/GfRLKaE/videoblocks-connection-motion-blue-network-abstract-background_hbl3mhsonz_thumbnail-full01.png\");\r\n  background-attachment: fixed;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  margin: auto;\r\n  width: auto;\r\n}\r\n\r\n.center {\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  width: auto;\r\n  height: auto;\r\n  border-radius: 10px;\r\n}\r\n\r\n.center1 {\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  width: 250px;\r\n  height: auto;\r\n  border-radius: 10px;\r\n}\r\n\r\nimage {\r\n  width: 200px;\r\n  height: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVza3RvcC1wYWdlL2Rlc2t0b3AtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxxTEFBcUw7RUFDckwsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2Rlc2t0b3AtcGFnZS9kZXNrdG9wLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiNzRhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgb3BhY2l0eTogMC45O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uY29udGFpbmVyMSB7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4OGY5MjtcclxuICBvcGFjaXR5OiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5jb250YWluZXIyIHtcclxuICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuaDEge1xyXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG59XHJcblxyXG5ociB7XHJcbiAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbiNmaWxlLXRyYW5zZmVyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2NiOGM5O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4jdmlkZW8tY2FsbDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNjYjhjOTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuI3ZvaWNlLW1lc3NhZ2luZzpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNjYjhjOTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuI3ZpZGVvLWNhbGwge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MmE3YWE7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuI2ZpbGUtdHJhbnNmZXIge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MmE3YWE7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuI3ZvaWNlLW1lc3NhZ2luZyB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyYTdhYTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59XHJcbi5wYXJhbGxheCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9kMnY5eTBkdWtyNm1xMi5jbG91ZGZyb250Lm5ldC92aWRlby90aHVtYm5haWwvR2ZSTEthRS92aWRlb2Jsb2Nrcy1jb25uZWN0aW9uLW1vdGlvbi1ibHVlLW5ldHdvcmstYWJzdHJhY3QtYmFja2dyb3VuZF9oYmwzbWhzb256X3RodW1ibmFpbC1mdWxsMDEucG5nXCIpO1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbi5jZW50ZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB3aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmNlbnRlcjEge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB3aWR0aDogMjUwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbmltYWdlIHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/desktop-page/desktop-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/desktop-page/desktop-page.component.ts ***!
  \********************************************************/
/*! exports provided: DesktopPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesktopPageComponent", function() { return DesktopPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DesktopPageComponent = class DesktopPageComponent {
    constructor() { }
    clickFileTransfer() {
    }
    ngOnInit() {
    }
};
DesktopPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-desktop-page',
        template: __webpack_require__(/*! raw-loader!./desktop-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/desktop-page/desktop-page.component.html"),
        styles: [__webpack_require__(/*! ./desktop-page.component.css */ "./src/app/desktop-page/desktop-page.component.css")]
    })
], DesktopPageComponent);



/***/ }),

/***/ "./src/app/downloads-page/downloads-page.component.css":
/*!*************************************************************!*\
  !*** ./src/app/downloads-page/downloads-page.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  width: auto;\r\n  height: auto;\r\n  background-color: #ffb74a;\r\n  border-radius: 10px;\r\n  opacity: 0.9;\r\n  padding: 20px;\r\n}\r\n\r\na {\r\n  float: left;\r\n  margin-left: 5px;\r\n  color: #ffb74a;\r\n}\r\n\r\n.row {\r\n  margin-left: 20px;\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n  color: whitesmoke;\r\n}\r\n\r\np {\r\n  color: whitesmoke;\r\n  margin-left: 20px;\r\n  margin-right: 20px;\r\n}\r\n\r\nh3 {\r\n  text-align: center;\r\n  color: whitesmoke;\r\n}\r\n\r\nimg {\r\n  margin: 20px;\r\n  border-radius: 10px;\r\n}\r\n\r\n.container1 {\r\n  width: auto;\r\n  height: auto;\r\n  background-color: #188f92;\r\n  opacity: 100%;\r\n  border-radius: 10px;\r\n}\r\n\r\n.parallax {\r\n  background-image: url(\"https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/GfRLKaE/videoblocks-connection-motion-blue-network-abstract-background_hbl3mhsonz_thumbnail-full01.png\");\r\n  background-attachment: fixed;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  margin: auto;\r\n  width: auto;\r\n}\r\n\r\n.center {\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  width: 75%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG93bmxvYWRzLXBhZ2UvZG93bmxvYWRzLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UscUxBQXFMO0VBQ3JMLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvZG93bmxvYWRzLXBhZ2UvZG93bmxvYWRzLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiNzRhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgb3BhY2l0eTogMC45O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbmEge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgY29sb3I6ICNmZmI3NGE7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG59XHJcbnAge1xyXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5oMyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG59XHJcblxyXG5pbWcge1xyXG4gIG1hcmdpbjogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyMSB7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODhmOTI7XHJcbiAgb3BhY2l0eTogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4ucGFyYWxsYXgge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vZDJ2OXkwZHVrcjZtcTIuY2xvdWRmcm9udC5uZXQvdmlkZW8vdGh1bWJuYWlsL0dmUkxLYUUvdmlkZW9ibG9ja3MtY29ubmVjdGlvbi1tb3Rpb24tYmx1ZS1uZXR3b3JrLWFic3RyYWN0LWJhY2tncm91bmRfaGJsM21oc29uel90aHVtYm5haWwtZnVsbDAxLnBuZ1wiKTtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG4uY2VudGVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IDc1JTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/downloads-page/downloads-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/downloads-page/downloads-page.component.ts ***!
  \************************************************************/
/*! exports provided: DownloadsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadsPageComponent", function() { return DownloadsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DownloadsPageComponent = class DownloadsPageComponent {
    constructor() { }
    ngOnInit() {
    }
};
DownloadsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-downloads-page',
        template: __webpack_require__(/*! raw-loader!./downloads-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/downloads-page/downloads-page.component.html"),
        styles: [__webpack_require__(/*! ./downloads-page.component.css */ "./src/app/downloads-page/downloads-page.component.css")]
    })
], DownloadsPageComponent);



/***/ }),

/***/ "./src/app/file-transfer-page/file-transfer-page.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/file-transfer-page/file-transfer-page.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n   width: auto;\r\n   height: auto;\r\n   background-color: #ffb74a;\r\n   border-radius: 10px;\r\n   opacity: 0.9;\r\n   padding: 20px;\r\n }\r\n\r\nh1 {\r\n  text-align: center;\r\n  color: whitesmoke;\r\n}\r\n\r\np {\r\n  color: whitesmoke;\r\n  margin-left: 20px;\r\n  margin-right: 20px;\r\n}\r\n\r\nh3 {\r\n  text-align: center;\r\n  color: whitesmoke;\r\n}\r\n\r\nimg {\r\n  margin: 20px;\r\n  border-radius: 10px;\r\n}\r\n\r\n.container1 {\r\n  width: auto;\r\n  height: auto;\r\n  background-color: #188f92;\r\n  opacity: 100%;\r\n  border-radius: 10px;\r\n}\r\n\r\n.parallax {\r\n  background-image: url(\"https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/GfRLKaE/videoblocks-connection-motion-blue-network-abstract-background_hbl3mhsonz_thumbnail-full01.png\");\r\n  background-attachment: fixed;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  margin: auto;\r\n  width: auto;\r\n}\r\n\r\n.center {\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  width: 75%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsZS10cmFuc2Zlci1wYWdlL2ZpbGUtdHJhbnNmZXItcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0dBQ0csV0FBVztHQUNYLFlBQVk7R0FDWix5QkFBeUI7R0FDekIsbUJBQW1CO0dBQ25CLFlBQVk7R0FDWixhQUFhO0NBQ2Y7O0FBRUQ7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxTEFBcUw7RUFDckwsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9maWxlLXRyYW5zZmVyLXBhZ2UvZmlsZS10cmFuc2Zlci1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgd2lkdGg6IGF1dG87XHJcbiAgIGhlaWdodDogYXV0bztcclxuICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYjc0YTtcclxuICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgb3BhY2l0eTogMC45O1xyXG4gICBwYWRkaW5nOiAyMHB4O1xyXG4gfVxyXG5cclxuaDEge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG5wIHtcclxuICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuaDMge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG5cclxuaW1nIHtcclxuICBtYXJnaW46IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmNvbnRhaW5lcjEge1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg4ZjkyO1xyXG4gIG9wYWNpdHk6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLnBhcmFsbGF4IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2Qydjl5MGR1a3I2bXEyLmNsb3VkZnJvbnQubmV0L3ZpZGVvL3RodW1ibmFpbC9HZlJMS2FFL3ZpZGVvYmxvY2tzLWNvbm5lY3Rpb24tbW90aW9uLWJsdWUtbmV0d29yay1hYnN0cmFjdC1iYWNrZ3JvdW5kX2hibDNtaHNvbnpfdGh1bWJuYWlsLWZ1bGwwMS5wbmdcIik7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuLmNlbnRlciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiA3NSU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/file-transfer-page/file-transfer-page.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/file-transfer-page/file-transfer-page.component.ts ***!
  \********************************************************************/
/*! exports provided: FileTransferPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileTransferPageComponent", function() { return FileTransferPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FileTransferPageComponent = class FileTransferPageComponent {
    constructor() { }
    ngOnInit() {
    }
};
FileTransferPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-file-transfer-page',
        template: __webpack_require__(/*! raw-loader!./file-transfer-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/file-transfer-page/file-transfer-page.component.html"),
        styles: [__webpack_require__(/*! ./file-transfer-page.component.css */ "./src/app/file-transfer-page/file-transfer-page.component.css")]
    })
], FileTransferPageComponent);



/***/ }),

/***/ "./src/app/home-page/home-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/home-page/home-page.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  width: auto;\r\n  height: auto;\r\n  background-color: #ffb74a;\r\n  border-radius: 10px;\r\n  opacity: 0.9;\r\n  padding: 20px;\r\n}\r\n\r\n.container1 {\r\n  width: auto;\r\n  height: auto;\r\n  background-color: #188f92;\r\n  opacity: 100%;\r\n  border-radius: 10px;\r\n}\r\n\r\nh2 {\r\n  text-align: center;\r\n  color: whitesmoke;\r\n}\r\n\r\nh2 { color: whitesmoke;\r\n  text-align: center;}\r\n\r\nh3 { color: whitesmoke;\r\n  text-align: center;}\r\n\r\nh4 { color: whitesmoke;\r\n  text-align: center;}\r\n\r\np { color: whitesmoke;\r\n  text-align: center;}\r\n\r\n.bg {\r\n  width: auto;\r\n  height: 100%;\r\n  background-color: mediumaquamarine;\r\n  /* background: url(\"https://static1.squarespace.com/static/59ac7cfef14aa1e8b7cff33d/59bbd1ba8fd4d209eb355f75/5b6ce95721c67c8a95fafda6/1544542536730/AdobeStock_oranges_201216111.jpeg?format=2500w\");*/\r\n  background-size: 100% 100%;\r\n  background-position: top center;\r\n}\r\n\r\nbutton {\r\n  float: left;\r\n}\r\n\r\nimg {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  display: block;\r\n  width: 500px;\r\n  height: auto;\r\n  padding: 20px;\r\n  border-radius: 20px;\r\n}\r\n\r\n.parallax {\r\n  background-image: url(\"https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/GfRLKaE/videoblocks-connection-motion-blue-network-abstract-background_hbl3mhsonz_thumbnail-full01.png\");\r\n  background-attachment: fixed;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  margin: auto;\r\n  width: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQSxLQUFLLGlCQUFpQjtFQUNwQixrQkFBa0IsQ0FBQzs7QUFFckIsS0FBSyxpQkFBaUI7RUFDcEIsa0JBQWtCLENBQUM7O0FBRXJCLEtBQUssaUJBQWlCO0VBQ3BCLGtCQUFrQixDQUFDOztBQUVyQixJQUFJLGlCQUFpQjtFQUNuQixrQkFBa0IsQ0FBQzs7QUFFckI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtDQUFrQztFQUNsQyxzTUFBc007RUFDdE0sMEJBQTBCO0VBQzFCLCtCQUErQjtBQUNqQzs7QUFDQTtFQUNFLFdBQVc7QUFDYjs7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFMQUFxTDtFQUNyTCw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiNzRhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgb3BhY2l0eTogMC45O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXIxIHtcclxuICB3aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4OGY5MjtcclxuICBvcGFjaXR5OiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbmgyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlc21va2U7XHJcbn1cclxuXHJcbmgyIHsgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO31cclxuXHJcbmgzIHsgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO31cclxuXHJcbmg0IHsgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO31cclxuXHJcbnAgeyBjb2xvcjogd2hpdGVzbW9rZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7fVxyXG5cclxuLmJnIHtcclxuICB3aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbWVkaXVtYXF1YW1hcmluZTtcclxuICAvKiBiYWNrZ3JvdW5kOiB1cmwoXCJodHRwczovL3N0YXRpYzEuc3F1YXJlc3BhY2UuY29tL3N0YXRpYy81OWFjN2NmZWYxNGFhMWU4YjdjZmYzM2QvNTliYmQxYmE4ZmQ0ZDIwOWViMzU1Zjc1LzViNmNlOTU3MjFjNjdjOGE5NWZhZmRhNi8xNTQ0NTQyNTM2NzMwL0Fkb2JlU3RvY2tfb3Jhbmdlc18yMDEyMTYxMTEuanBlZz9mb3JtYXQ9MjUwMHdcIik7Ki9cclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgY2VudGVyO1xyXG59XHJcbmJ1dHRvbiB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuaW1nIHtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi5wYXJhbGxheCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9kMnY5eTBkdWtyNm1xMi5jbG91ZGZyb250Lm5ldC92aWRlby90aHVtYm5haWwvR2ZSTEthRS92aWRlb2Jsb2Nrcy1jb25uZWN0aW9uLW1vdGlvbi1ibHVlLW5ldHdvcmstYWJzdHJhY3QtYmFja2dyb3VuZF9oYmwzbWhzb256X3RodW1ibmFpbC1mdWxsMDEucG5nXCIpO1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgd2lkdGg6IGF1dG87XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let HomePageComponent = class HomePageComponent {
    constructor(http) {
        this.http = http;
        this.ROOT_URL = 'https://jsonplaceholder.typicode.com/posts';
        this.ROOT_URL1 = 'http://51.145.47.43/api/values';
        this.page = 1;
        this.getTitle();
    }
    getPosts() {
        this.posts = this.http.get(this.ROOT_URL1);
    }
    getNext() {
        this.page++;
        this.title = this.http.get(this.ROOT_URL1 + '/' + this.page).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(post => post.title));
        this.getSubtitle();
        this.getArticle();
        this.getDay();
        this.getMonth();
        this.getURL1();
        this.getURL2();
    }
    getPrev() {
        this.page--;
        this.title = this.http.get(this.ROOT_URL1 + '/' + this.page).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(post => post.title));
        this.getSubtitle();
        this.getArticle();
        this.getDay();
        this.getMonth();
        this.getURL1();
        this.getURL2();
    }
    getTitle() {
        this.title = this.http.get(this.ROOT_URL1 + '/' + this.page).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(post => post.title));
        this.getSubtitle();
        this.getArticle();
        this.getDay();
        this.getMonth();
        this.getURL1();
        this.getURL2();
    }
    getSubtitle() {
        this.subtitle = this.http.get(this.ROOT_URL1 + '/' + this.page).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(post => post.subtitle));
    }
    getArticle() {
        this.article = this.http.get(this.ROOT_URL1 + '/' + this.page).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(post => post.article));
    }
    getDay() {
        this.day = this.http.get(this.ROOT_URL1 + '/' + this.page).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(post => post.day));
    }
    getMonth() {
        this.month = this.http.get(this.ROOT_URL1 + '/' + this.page).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(post => post.month));
    }
    getURL1() {
        this.url1 = this.http.get(this.ROOT_URL1 + '/' + this.page).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(post => post.urlone));
    }
    getURL2() {
        this.url2 = this.http.get(this.ROOT_URL1 + '/' + this.page).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(post => post.urltwo));
    }
    ngOnInit() {
    }
};
HomePageComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-page',
        template: __webpack_require__(/*! raw-loader!./home-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/home-page/home-page.component.html"),
        styles: [__webpack_require__(/*! ./home-page.component.css */ "./src/app/home-page/home-page.component.css")]
    })
], HomePageComponent);



/***/ }),

/***/ "./src/app/manual-page/manual-page.component.css":
/*!*******************************************************!*\
  !*** ./src/app/manual-page/manual-page.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  width: auto;\r\n  height: auto;\r\n  background-color: #ffb74a;\r\n  border-radius: 10px;\r\n  opacity: 0.9;\r\n  padding: 20px;\r\n}\r\n\r\n.container1 {\r\n  width: auto;\r\n  height: 200px;\r\n  background-color: #188f92;\r\n  opacity: 100%;\r\n  border-radius: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFudWFsLXBhZ2UvbWFudWFsLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL21hbnVhbC1wYWdlL21hbnVhbC1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICB3aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYjc0YTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG9wYWNpdHk6IDAuOTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyMSB7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg4ZjkyO1xyXG4gIG9wYWNpdHk6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/manual-page/manual-page.component.ts":
/*!******************************************************!*\
  !*** ./src/app/manual-page/manual-page.component.ts ***!
  \******************************************************/
/*! exports provided: ManualPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManualPageComponent", function() { return ManualPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ManualPageComponent = class ManualPageComponent {
    constructor() { }
    ngOnInit() {
    }
};
ManualPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manual-page',
        template: __webpack_require__(/*! raw-loader!./manual-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/manual-page/manual-page.component.html"),
        styles: [__webpack_require__(/*! ./manual-page.component.css */ "./src/app/manual-page/manual-page.component.css")]
    })
], ManualPageComponent);



/***/ }),

/***/ "./src/app/mobile-page/mobile-page.component.css":
/*!*******************************************************!*\
  !*** ./src/app/mobile-page/mobile-page.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  width: auto;\r\n  height: auto;\r\n  background-color: #ffb74a;\r\n  border-radius: 10px;\r\n  opacity: 0.9;\r\n  padding: 20px;\r\n}\r\n\r\n.container1 {\r\n  width: auto;\r\n  height: 200px;\r\n  background-color: #188f92;\r\n  opacity: 100%;\r\n  border-radius: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9iaWxlLXBhZ2UvbW9iaWxlLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL21vYmlsZS1wYWdlL21vYmlsZS1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICB3aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYjc0YTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG9wYWNpdHk6IDAuOTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyMSB7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg4ZjkyO1xyXG4gIG9wYWNpdHk6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/mobile-page/mobile-page.component.ts":
/*!******************************************************!*\
  !*** ./src/app/mobile-page/mobile-page.component.ts ***!
  \******************************************************/
/*! exports provided: MobilePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobilePageComponent", function() { return MobilePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MobilePageComponent = class MobilePageComponent {
    constructor() { }
    ngOnInit() {
    }
};
MobilePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mobile-page',
        template: __webpack_require__(/*! raw-loader!./mobile-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/mobile-page/mobile-page.component.html"),
        styles: [__webpack_require__(/*! ./mobile-page.component.css */ "./src/app/mobile-page/mobile-page.component.css")]
    })
], MobilePageComponent);



/***/ }),

/***/ "./src/app/navigation/navigation.component.css":
/*!*****************************************************!*\
  !*** ./src/app/navigation/navigation.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavigationComponent = class NavigationComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navigation',
        template: __webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/index.js!./src/app/navigation/navigation.component.html"),
        styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/navigation/navigation.component.css")]
    })
], NavigationComponent);



/***/ }),

/***/ "./src/app/video-call-page/video-call-page.component.css":
/*!***************************************************************!*\
  !*** ./src/app/video-call-page/video-call-page.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  width: auto;\r\n  height: auto;\r\n  background-color: #ffb74a;\r\n  border-radius: 10px;\r\n  opacity: 0.9;\r\n  padding: 20px;\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n  color: whitesmoke;\r\n}\r\n\r\np {\r\n  color: whitesmoke;\r\n  margin-left: 20px;\r\n  margin-right: 20px;\r\n}\r\n\r\nh3 {\r\n  text-align: center;\r\n  color: whitesmoke;\r\n}\r\n\r\nimg {\r\n  margin: 20px;\r\n  border-radius: 10px;\r\n}\r\n\r\n.container1 {\r\n  width: auto;\r\n  height: auto;\r\n  background-color: #188f92;\r\n  opacity: 100%;\r\n  border-radius: 10px;\r\n}\r\n\r\n.parallax {\r\n  background-image: url(\"https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/GfRLKaE/videoblocks-connection-motion-blue-network-abstract-background_hbl3mhsonz_thumbnail-full01.png\");\r\n  background-attachment: fixed;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  margin: auto;\r\n  width: auto;\r\n}\r\n\r\n.center {\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  width: 75%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW8tY2FsbC1wYWdlL3ZpZGVvLWNhbGwtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxTEFBcUw7RUFDckwsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC92aWRlby1jYWxsLXBhZ2UvdmlkZW8tY2FsbC1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICB3aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYjc0YTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG9wYWNpdHk6IDAuOTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG59XHJcbnAge1xyXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5oMyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG59XHJcblxyXG5pbWcge1xyXG4gIG1hcmdpbjogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyMSB7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODhmOTI7XHJcbiAgb3BhY2l0eTogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4ucGFyYWxsYXgge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vZDJ2OXkwZHVrcjZtcTIuY2xvdWRmcm9udC5uZXQvdmlkZW8vdGh1bWJuYWlsL0dmUkxLYUUvdmlkZW9ibG9ja3MtY29ubmVjdGlvbi1tb3Rpb24tYmx1ZS1uZXR3b3JrLWFic3RyYWN0LWJhY2tncm91bmRfaGJsM21oc29uel90aHVtYm5haWwtZnVsbDAxLnBuZ1wiKTtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG4uY2VudGVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IDc1JTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/video-call-page/video-call-page.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/video-call-page/video-call-page.component.ts ***!
  \**************************************************************/
/*! exports provided: VideoCallPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoCallPageComponent", function() { return VideoCallPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let VideoCallPageComponent = class VideoCallPageComponent {
    constructor() { }
    ngOnInit() {
    }
};
VideoCallPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-video-call-page',
        template: __webpack_require__(/*! raw-loader!./video-call-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/video-call-page/video-call-page.component.html"),
        styles: [__webpack_require__(/*! ./video-call-page.component.css */ "./src/app/video-call-page/video-call-page.component.css")]
    })
], VideoCallPageComponent);



/***/ }),

/***/ "./src/app/voice-note-page/voice-note-page.component.css":
/*!***************************************************************!*\
  !*** ./src/app/voice-note-page/voice-note-page.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  width: auto;\r\n  height: auto;\r\n  background-color: #ffb74a;\r\n  border-radius: 10px;\r\n  opacity: 0.9;\r\n  padding: 20px;\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n  color: whitesmoke;\r\n}\r\n\r\np {\r\n  color: whitesmoke;\r\n  margin-left: 20px;\r\n  margin-right: 20px;\r\n}\r\n\r\nh3 {\r\n  text-align: center;\r\n  color: whitesmoke;\r\n}\r\n\r\nimg {\r\n  margin: 20px;\r\n  border-radius: 10px;\r\n}\r\n\r\n.container1 {\r\n  width: auto;\r\n  height: auto;\r\n  background-color: #188f92;\r\n  opacity: 100%;\r\n  border-radius: 10px;\r\n}\r\n\r\n.parallax {\r\n  background-image: url(\"https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/GfRLKaE/videoblocks-connection-motion-blue-network-abstract-background_hbl3mhsonz_thumbnail-full01.png\");\r\n  background-attachment: fixed;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  margin: auto;\r\n  width: auto;\r\n}\r\n\r\n.center {\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  width: 75%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdm9pY2Utbm90ZS1wYWdlL3ZvaWNlLW5vdGUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxTEFBcUw7RUFDckwsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC92b2ljZS1ub3RlLXBhZ2Uvdm9pY2Utbm90ZS1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICB3aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYjc0YTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG9wYWNpdHk6IDAuOTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG59XHJcbnAge1xyXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5oMyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG59XHJcblxyXG5pbWcge1xyXG4gIG1hcmdpbjogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyMSB7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODhmOTI7XHJcbiAgb3BhY2l0eTogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4ucGFyYWxsYXgge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vZDJ2OXkwZHVrcjZtcTIuY2xvdWRmcm9udC5uZXQvdmlkZW8vdGh1bWJuYWlsL0dmUkxLYUUvdmlkZW9ibG9ja3MtY29ubmVjdGlvbi1tb3Rpb24tYmx1ZS1uZXR3b3JrLWFic3RyYWN0LWJhY2tncm91bmRfaGJsM21oc29uel90aHVtYm5haWwtZnVsbDAxLnBuZ1wiKTtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG4uY2VudGVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IDc1JTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/voice-note-page/voice-note-page.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/voice-note-page/voice-note-page.component.ts ***!
  \**************************************************************/
/*! exports provided: VoiceNotePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoiceNotePageComponent", function() { return VoiceNotePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let VoiceNotePageComponent = class VoiceNotePageComponent {
    constructor() { }
    ngOnInit() {
    }
};
VoiceNotePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-voice-note-page',
        template: __webpack_require__(/*! raw-loader!./voice-note-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/voice-note-page/voice-note-page.component.html"),
        styles: [__webpack_require__(/*! ./voice-note-page.component.css */ "./src/app/voice-note-page/voice-note-page.component.css")]
    })
], VoiceNotePageComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\user\Desktop\Angular\office-tools-web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map