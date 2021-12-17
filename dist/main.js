/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/ToDoAppBackground-cropped-mobile.jpg */ "./src/images/ToDoAppBackground-cropped-mobile.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/ToDoAppBackground-cropped.jpg */ "./src/images/ToDoAppBackground-cropped.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Table of Contents\n\t1. Imports\n\t2. Global Styles\n\t3. pageGridContainer Styles\n\t\t3.1. pageGridContainer Global Styles\n\t\t3.2. pageGridContainer Target Element Styles\n\t4. Sign-in Styles\n\t\t4.1. Sign-in Global Styles\n\t\t4.2. Sign-in Target Element Styles\n\t5. Navigation Section Styles\n\t\t5.1. Navigation Section Global Styles\n\t\t5.2. Navigation Section Target Element Styles\n\t6. Navigation Menu Section Styles\n\t\t6.1. Navigation Menu Global Styles\n\t\t6.2. Navigation Menu Target Element Styles\n\t7. Main Section Styes\n\t\t7.1. Main Section Global Styles\n\t\t7.1. Main Section Target Element Styles\n\t*. Footer Style Section\n\t*. Media Query Section\n\t\t*.1. Global Media Queries\n\t\t*.2. pageGridContainer Media Queries\n\t\t*.3. Navigation Section Media Queries\n\t\t*.4. Navigation Menu Section Media Queries\n\n*/\n\n\n\n/*\t==========\n\t1. Imports\n\t========== */\n\n\n\n\n/*\t================\n\t2. Global Styles\n\t================ */\n\n\n/* \n\tCSS Styling Reset from\n\thttp://meyerweb.com/eric/tools/css/reset/ \n   \tv2.0 | 20110126\n   \tLicense: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\n\nbody {\n\tline-height: 1;\n\tmin-height: 100vh;\n\tcolor: rgb(255,255,255);\n\tfont-family: 'Roboto', sans-serif;\n\ttext-align: center;\n\tbackground-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n\tbackground-repeat: no-repeat;\n\tbackground-size: 100% 100%; \n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/*\t===========================\n\t3. pageGridContainer Styles\n\t=========================== */\n\n\t/*\t =====================\n\t3.1. pageGridContainer Global Styles\n\t\t ===================== */\n\n#pageGridContainer{\n\tdisplay: grid;\n\tgrid-template-columns: repeat(4, 1fr) ;\n  \tgrid-template-rows: auto;\n  \tgrid-template-areas: \n    \"header header header header\"\n    \"main main main main\"\n    \"footer footer footer footer\";\n}\n\n\t/*\t =======================================\n\t3.2. pageGridContainer Target Element Styles\n\t\t ======================================= */\n\n#navSection{\n\tgrid-area: header;\n}\n#navMenuSection{\n\tgrid-area: sidebar;\n}\n#mainSection{\n\tgrid-area: main;\n}\n#footerSection{\n\tgrid-area: footer;\n}\n\n\n/*\t=================\n\t4. Sign-in Styles\n\t================= */\n\n\n\t/*\t =====================\n\t4.1. Sign-in Global Styles\n\t\t ===================== */\n\nform{\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n}\n\n#signIn-Container-Inner, #signIn-Container-Outer{\n\tdisplay: flex;\n}\n\n#signIn-Container-Outer{\n\theight: 100vh;\n\tjustify-content: center;\n}\n\n#signIn-Container-Inner{\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: space-evenly;\n\tmin-width: 35%;\n\tmax-width: 80%;\n\tmargin: 8.5em 3em 13em;\n\tbackground-color: rgb(255,255,255, 0.8);\n\tborder-radius: 23px;\n}\n\n#signIn-Form-Container{\n\tmargin:0 1em;\n\tpadding: 1.5em 0;\n\tmin-width: 60%;\n\tmax-width: 80%;\n\tbackground-color: rgba(14, 9, 9, 0.4);\n}\n\n\t/*\t =============================\n\t4.2. Sign-in Target Element Styles\n\t\t ============================= */\n\n#appTitle{\n\tfont-size: 2em;\n\tmargin: 0.5em;\n\tcolor: #000;\n}\n\nform > input, form > label{\n\talign-self: center;\n\tmin-width: 60%;\n\tmax-width: 80%;\n}\n\nform >label{\n\tfont-size: 1.5em;\n\tcolor:rgb(255,255,255);\n}\n\ninput[type=button], #demoButton{\n\tmargin: 0.3em;\n\tborder: none;\n\tcursor: pointer;\n\tfont-size: 1.2em;\n\tpadding: 0.3em 3em;\n\tborder-radius: 1em;\n\ttext-decoration: none;\n\tcolor: rgb(255,255,255);\n\tbackground-color: #AE1F42;\n}\n\ninput[type=text]{\n\tmargin: 0.5em;\n\tpadding: 0.5em 1em;\n\tborder: none;\n\ttext-decoration: none;\n\tbackground: rgba(14, 9, 9, 0.5);;\n\tborder-radius: 1em;\n}\n\n#demoButton{\n\tpadding: 0.3em 2em;\n}\n\n\n/*\t============================\n\t5. Navigation Section Styles\n\t============================ */\n\t\n\t/*\t ================================\n\t5.1. Navigation Section Global Styles\n\t\t ================================ */\n\n#navSection{\n\tdisplay: flex;\n\tjustify-content: flex-start;\n\tfont-size: 2em;\n\tposition: fixed;\n\ttop: 0;\n\twidth: 100vw;\n\tcolor: black;\n\tbackground-color: rgb(255,255,255, 0.6);\n}\n\n\t/*\t ========================================\n\t5.2. Navigation Section Target Element Styles\n\t\t ======================================== */\n\n#navSection >h1{\n\tmargin-left: 0.2em;\n\tfont-size: 2em;\n\ttransition: 0.5s;\n\tcursor: pointer;\n}\n\n\n#navSection >h2{\n\tposition: absolute;\n\ttop:50%;\n\tleft:50%;\n\ttransform: translate(-50%, -50%);\n}\n\n\n/*\t=================================\n\t6. Navigation Menu Section Styles\n\t================================= */\n\n\t/*\t =============================\n\t6.1. Navigation Menu Global Styles\n\t\t ============================= */\n#navMenuSection>*{\n\tmargin-top: 1em;\n}\n\n#navMenuSection{\n\tposition: fixed;\n\ttop: 2em;\n\theight: 100vh;\n\tfont-size: 2em;  \n\twidth: 25%;\n\tcolor: black;\n\tbackground-color: white;\n\ttransform: translate(-100%, 0);\n\ttransition: 0.5s;\n}\n\n#dateSelector{\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n#projectSelector{\n\tfont-size: 0.5em;\n}\n\n#projectSelector>ul{\n\tmargin-left: 1em;\n\tlist-style-type: disc;\n}\n\n\t/*\t =====================================\n\t6.2. Navigation Menu Target Element Styles\n\t\t ===================================== */\n\n#defaultSelector > h2{\n\tmargin: 0.5em;\n}\n\n#dateSelector > p{\n\tfont-size: 0.75em;  \n}\n\n#dateSelector>input{\n\tdisplay: block;\n\tmargin: 1em;\n\ttext-align: center;\n}\n\n#projectSelector>h2{\n\tfont-size: 1.75em;\n}\n\n#projectSelector>ul>li{\n\tmargin: 0.5em;\n\n}\n\n/*\t=====================\n\t7. Main Section Styes\n\t===================== */\n\n\t/*\t ==========================\n\t7.1. Main Section Global Styles\n\t\t ========================== */\n\n#mainSection>*{\n\tmin-width: 80%;\n}\n\n#mainSection, .items, .tasks{\n\tdisplay: grid;\n}\n\n#mainSection{\n\tdisplay: flex;\n\tflex-direction: column;\n\tmargin-top: 3em;\n\tpadding-bottom: 2em;\n\tgap: 0.5em 0em;\n\tfont-size: 1.5em;\n\tcolor: black;\n\tbackground-color: rgb(255,255,255, 0.9);\n}\n\n.items{\n\tgrid-template-columns: repeat(3, 1fr);\n}\n\n.tasks{\n\tgrid-template-columns: repeat(4, 1fr);\n}\n\n.items > *{\n\tgrid-column: 1 / span 3;\n}\n\n.items{\n\tcolor: black;\n\tplace-self: center;\n\tgap: 0.5em 0em;\n\tmargin-bottom: 0.5em;\n\tbackground: rgba(14, 9, 9, 0.28);\n}\n\n.tasks>*{\n\tplace-self: center;\n\tpadding: 0.2em;\n}\n\n\t/*\t ==================================\n\t7.2. Main Section Target Element Styles\n\t\t ================================== */\n\n#mainSection > h2{\n\tfont-size: 1.5em;\n\tpadding: 0.5em;\n}\n\n.tasks>label{\n\tcolor: black;\n\tfont-size: 0.8em;\n\twidth: 100%;\n}\n\n.tasks>input{\n\theight: 100%;\n\twidth: 100%;\n}\n\n.tasks>section{\n\tdisplay: flex;\n\theight: 100%;\n\twidth:100%;\n}\n\n\n.addTask{\n\tpadding: 0.6em;\n\tmargin-bottom: 0.5em;\n\tfont-size: 0.8em;\n\tjustify-content: center;\n\tgrid-column: 2;\n\ttext-decoration: none;\n\tborder: none;\n\tborder-radius: 0.5em;\n\tcolor: white;\n\tbackground-color: #AE1F42;\n\ttransition: 0.5s;\n}\n\n.addTask:hover{\n\tbackground-color: #e03c65;\n}\n\n/*\t=======================\n\t*. Footer Style Section\n\t======================= */\n\n#footerSection{\n\tposition: fixed;\n\tleft: 0;\n\tbottom: 0;\n\twidth: 100%;\n\tbackground-color: black;\n\tcolor: white;\n\ttext-align: center;\n}\n\n/*\t======================\n\t*. Media Query Section\n\t====================== */\n\n@media only screen and (min-width: 700px) {\n\n\t/*\t ====================\n\t*.1. Global Media Queries\n\t\t ==================== */\n\n\tbody {\n\t\tbackground-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n\t}\n\n\t/*\t ===============================\n\t*.2. pageGridContainer Media Queries\n\t\t =============================== */\n\n\t\t #pageGridContainer{\n\t\t\tgrid-template-areas: \n\t\t\t\"header header header header\"\n\t\t\t\"sidebar main main main\"\n\t\t\t\"footer footer footer footer\";\n\t\t }\n\n\n\t/*\t ================================\n\t*.3. Navigation Section Media Queries\n\t\t ================================ */\n\n\t#mainSection{\n\t\tmargin: 3em 1em 0em;\n\t}\n\n\t#mainSection>*{\n\t\tmin-width: 75%;\n\t}\n\n\t#navSection>h1{\n\t\ttransform: rotate(135deg);\n\t}\n\n\t/*\t =====================================\n\t*.4. Navigation Menu Section Media Queries\n\t\t ===================================== */\n\n\t#navMenuSection{\n\t\ttransform: translate(0, 0);\n\t}\n\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* Table of Contents\n\t1. Imports\n\t2. Global Styles\n\t3. pageGridContainer Styles\n\t\t3.1. pageGridContainer Global Styles\n\t\t3.2. pageGridContainer Target Element Styles\n\t4. Sign-in Styles\n\t\t4.1. Sign-in Global Styles\n\t\t4.2. Sign-in Target Element Styles\n\t5. Navigation Section Styles\n\t\t5.1. Navigation Section Global Styles\n\t\t5.2. Navigation Section Target Element Styles\n\t6. Navigation Menu Section Styles\n\t\t6.1. Navigation Menu Global Styles\n\t\t6.2. Navigation Menu Target Element Styles\n\t7. Main Section Styes\n\t\t7.1. Main Section Global Styles\n\t\t7.1. Main Section Target Element Styles\n\t*. Footer Style Section\n\t*. Media Query Section\n\t\t*.1. Global Media Queries\n\t\t*.2. pageGridContainer Media Queries\n\t\t*.3. Navigation Section Media Queries\n\t\t*.4. Navigation Menu Section Media Queries\n\n*/\n\n\n\n/*\t==========\n\t1. Imports\n\t========== */\n\n\n@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\n\n\n\n\n/*\t================\n\t2. Global Styles\n\t================ */\n\n\n/* \n\tCSS Styling Reset from\n\thttp://meyerweb.com/eric/tools/css/reset/ \n   \tv2.0 | 20110126\n   \tLicense: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\n\nbody {\n\tline-height: 1;\n\tmin-height: 100vh;\n\tcolor: rgb(255,255,255);\n\tfont-family: 'Roboto', sans-serif;\n\ttext-align: center;\n\tbackground-image: url('./images/ToDoAppBackground-cropped-mobile.jpg');\n\tbackground-repeat: no-repeat;\n\tbackground-size: 100% 100%; \n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/*\t===========================\n\t3. pageGridContainer Styles\n\t=========================== */\n\n\t/*\t =====================\n\t3.1. pageGridContainer Global Styles\n\t\t ===================== */\n\n#pageGridContainer{\n\tdisplay: grid;\n\tgrid-template-columns: repeat(4, 1fr) ;\n  \tgrid-template-rows: auto;\n  \tgrid-template-areas: \n    \"header header header header\"\n    \"main main main main\"\n    \"footer footer footer footer\";\n}\n\n\t/*\t =======================================\n\t3.2. pageGridContainer Target Element Styles\n\t\t ======================================= */\n\n#navSection{\n\tgrid-area: header;\n}\n#navMenuSection{\n\tgrid-area: sidebar;\n}\n#mainSection{\n\tgrid-area: main;\n}\n#footerSection{\n\tgrid-area: footer;\n}\n\n\n/*\t=================\n\t4. Sign-in Styles\n\t================= */\n\n\n\t/*\t =====================\n\t4.1. Sign-in Global Styles\n\t\t ===================== */\n\nform{\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n}\n\n#signIn-Container-Inner, #signIn-Container-Outer{\n\tdisplay: flex;\n}\n\n#signIn-Container-Outer{\n\theight: 100vh;\n\tjustify-content: center;\n}\n\n#signIn-Container-Inner{\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: space-evenly;\n\tmin-width: 35%;\n\tmax-width: 80%;\n\tmargin: 8.5em 3em 13em;\n\tbackground-color: rgb(255,255,255, 0.8);\n\tborder-radius: 23px;\n}\n\n#signIn-Form-Container{\n\tmargin:0 1em;\n\tpadding: 1.5em 0;\n\tmin-width: 60%;\n\tmax-width: 80%;\n\tbackground-color: rgba(14, 9, 9, 0.4);\n}\n\n\t/*\t =============================\n\t4.2. Sign-in Target Element Styles\n\t\t ============================= */\n\n#appTitle{\n\tfont-size: 2em;\n\tmargin: 0.5em;\n\tcolor: #000;\n}\n\nform > input, form > label{\n\talign-self: center;\n\tmin-width: 60%;\n\tmax-width: 80%;\n}\n\nform >label{\n\tfont-size: 1.5em;\n\tcolor:rgb(255,255,255);\n}\n\ninput[type=button], #demoButton{\n\tmargin: 0.3em;\n\tborder: none;\n\tcursor: pointer;\n\tfont-size: 1.2em;\n\tpadding: 0.3em 3em;\n\tborder-radius: 1em;\n\ttext-decoration: none;\n\tcolor: rgb(255,255,255);\n\tbackground-color: #AE1F42;\n}\n\ninput[type=text]{\n\tmargin: 0.5em;\n\tpadding: 0.5em 1em;\n\tborder: none;\n\ttext-decoration: none;\n\tbackground: rgba(14, 9, 9, 0.5);;\n\tborder-radius: 1em;\n}\n\n#demoButton{\n\tpadding: 0.3em 2em;\n}\n\n\n/*\t============================\n\t5. Navigation Section Styles\n\t============================ */\n\t\n\t/*\t ================================\n\t5.1. Navigation Section Global Styles\n\t\t ================================ */\n\n#navSection{\n\tdisplay: flex;\n\tjustify-content: flex-start;\n\tfont-size: 2em;\n\tposition: fixed;\n\ttop: 0;\n\twidth: 100vw;\n\tcolor: black;\n\tbackground-color: rgb(255,255,255, 0.6);\n}\n\n\t/*\t ========================================\n\t5.2. Navigation Section Target Element Styles\n\t\t ======================================== */\n\n#navSection >h1{\n\tmargin-left: 0.2em;\n\tfont-size: 2em;\n\ttransition: 0.5s;\n\tcursor: pointer;\n}\n\n\n#navSection >h2{\n\tposition: absolute;\n\ttop:50%;\n\tleft:50%;\n\ttransform: translate(-50%, -50%);\n}\n\n\n/*\t=================================\n\t6. Navigation Menu Section Styles\n\t================================= */\n\n\t/*\t =============================\n\t6.1. Navigation Menu Global Styles\n\t\t ============================= */\n#navMenuSection>*{\n\tmargin-top: 1em;\n}\n\n#navMenuSection{\n\tposition: fixed;\n\ttop: 2em;\n\theight: 100vh;\n\tfont-size: 2em;  \n\twidth: 25%;\n\tcolor: black;\n\tbackground-color: white;\n\ttransform: translate(-100%, 0);\n\ttransition: 0.5s;\n}\n\n#dateSelector{\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n#projectSelector{\n\tfont-size: 0.5em;\n}\n\n#projectSelector>ul{\n\tmargin-left: 1em;\n\tlist-style-type: disc;\n}\n\n\t/*\t =====================================\n\t6.2. Navigation Menu Target Element Styles\n\t\t ===================================== */\n\n#defaultSelector > h2{\n\tmargin: 0.5em;\n}\n\n#dateSelector > p{\n\tfont-size: 0.75em;  \n}\n\n#dateSelector>input{\n\tdisplay: block;\n\tmargin: 1em;\n\ttext-align: center;\n}\n\n#projectSelector>h2{\n\tfont-size: 1.75em;\n}\n\n#projectSelector>ul>li{\n\tmargin: 0.5em;\n\n}\n\n/*\t=====================\n\t7. Main Section Styes\n\t===================== */\n\n\t/*\t ==========================\n\t7.1. Main Section Global Styles\n\t\t ========================== */\n\n#mainSection>*{\n\tmin-width: 80%;\n}\n\n#mainSection, .items, .tasks{\n\tdisplay: grid;\n}\n\n#mainSection{\n\tdisplay: flex;\n\tflex-direction: column;\n\tmargin-top: 3em;\n\tpadding-bottom: 2em;\n\tgap: 0.5em 0em;\n\tfont-size: 1.5em;\n\tcolor: black;\n\tbackground-color: rgb(255,255,255, 0.9);\n}\n\n.items{\n\tgrid-template-columns: repeat(3, 1fr);\n}\n\n.tasks{\n\tgrid-template-columns: repeat(4, 1fr);\n}\n\n.items > *{\n\tgrid-column: 1 / span 3;\n}\n\n.items{\n\tcolor: black;\n\tplace-self: center;\n\tgap: 0.5em 0em;\n\tmargin-bottom: 0.5em;\n\tbackground: rgba(14, 9, 9, 0.28);\n}\n\n.tasks>*{\n\tplace-self: center;\n\tpadding: 0.2em;\n}\n\n\t/*\t ==================================\n\t7.2. Main Section Target Element Styles\n\t\t ================================== */\n\n#mainSection > h2{\n\tfont-size: 1.5em;\n\tpadding: 0.5em;\n}\n\n.tasks>label{\n\tcolor: black;\n\tfont-size: 0.8em;\n\twidth: 100%;\n}\n\n.tasks>input{\n\theight: 100%;\n\twidth: 100%;\n}\n\n.tasks>section{\n\tdisplay: flex;\n\theight: 100%;\n\twidth:100%;\n}\n\n\n.addTask{\n\tpadding: 0.6em;\n\tmargin-bottom: 0.5em;\n\tfont-size: 0.8em;\n\tjustify-content: center;\n\tgrid-column: 2;\n\ttext-decoration: none;\n\tborder: none;\n\tborder-radius: 0.5em;\n\tcolor: white;\n\tbackground-color: #AE1F42;\n\ttransition: 0.5s;\n}\n\n.addTask:hover{\n\tbackground-color: #e03c65;\n}\n\n/*\t=======================\n\t*. Footer Style Section\n\t======================= */\n\n#footerSection{\n\tposition: fixed;\n\tleft: 0;\n\tbottom: 0;\n\twidth: 100%;\n\tbackground-color: black;\n\tcolor: white;\n\ttext-align: center;\n}\n\n/*\t======================\n\t*. Media Query Section\n\t====================== */\n\n@media only screen and (min-width: 700px) {\n\n\t/*\t ====================\n\t*.1. Global Media Queries\n\t\t ==================== */\n\n\tbody {\n\t\tbackground-image: url('./images/ToDoAppBackground-cropped.jpg');\n\t}\n\n\t/*\t ===============================\n\t*.2. pageGridContainer Media Queries\n\t\t =============================== */\n\n\t\t #pageGridContainer{\n\t\t\tgrid-template-areas: \n\t\t\t\"header header header header\"\n\t\t\t\"sidebar main main main\"\n\t\t\t\"footer footer footer footer\";\n\t\t }\n\n\n\t/*\t ================================\n\t*.3. Navigation Section Media Queries\n\t\t ================================ */\n\n\t#mainSection{\n\t\tmargin: 3em 1em 0em;\n\t}\n\n\t#mainSection>*{\n\t\tmin-width: 75%;\n\t}\n\n\t#navSection>h1{\n\t\ttransform: rotate(135deg);\n\t}\n\n\t/*\t =====================================\n\t*.4. Navigation Menu Section Media Queries\n\t\t ===================================== */\n\n\t#navMenuSection{\n\t\ttransform: translate(0, 0);\n\t}\n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/images/ToDoAppBackground-cropped-mobile.jpg":
/*!*********************************************************!*\
  !*** ./src/images/ToDoAppBackground-cropped-mobile.jpg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dc9a7f90152d8b48210a.jpg";

/***/ }),

/***/ "./src/images/ToDoAppBackground-cropped.jpg":
/*!**************************************************!*\
  !*** ./src/images/ToDoAppBackground-cropped.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fd4b52588fe7c46dff4e.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
// This is just a place Holder



function baby(){
    console.log('I wonder if this will find the html I am looking for since I am using webpack')
}


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVksUUFBUSxNQUFNLFFBQVEsT0FBTyxRQUFRLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sTUFBTSxRQUFRLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxRQUFRLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxRQUFRLE1BQU0sUUFBUSxPQUFPLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFFBQVEsTUFBTSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssV0FBVyxNQUFNLE1BQU0sUUFBUSxPQUFPLFFBQVEsTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sTUFBTSxRQUFRLE1BQU0sWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxRQUFRLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLE1BQU0sUUFBUSxPQUFPLE1BQU0sUUFBUSxNQUFNLFlBQVksT0FBTyxNQUFNLFFBQVEsTUFBTSxPQUFPLE9BQU8sUUFBUSxNQUFNLFFB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V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7Ozs7Ozs7Ozs7QUNyQkE7QUFDcUI7OztBQUdyQjtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9Ub0RvQXBwQmFja2dyb3VuZC1jcm9wcGVkLW1vYmlsZS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9Ub0RvQXBwQmFja2dyb3VuZC1jcm9wcGVkLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogVGFibGUgb2YgQ29udGVudHNcXG5cXHQxLiBJbXBvcnRzXFxuXFx0Mi4gR2xvYmFsIFN0eWxlc1xcblxcdDMuIHBhZ2VHcmlkQ29udGFpbmVyIFN0eWxlc1xcblxcdFxcdDMuMS4gcGFnZUdyaWRDb250YWluZXIgR2xvYmFsIFN0eWxlc1xcblxcdFxcdDMuMi4gcGFnZUdyaWRDb250YWluZXIgVGFyZ2V0IEVsZW1lbnQgU3R5bGVzXFxuXFx0NC4gU2lnbi1pbiBTdHlsZXNcXG5cXHRcXHQ0LjEuIFNpZ24taW4gR2xvYmFsIFN0eWxlc1xcblxcdFxcdDQuMi4gU2lnbi1pbiBUYXJnZXQgRWxlbWVudCBTdHlsZXNcXG5cXHQ1LiBOYXZpZ2F0aW9uIFNlY3Rpb24gU3R5bGVzXFxuXFx0XFx0NS4xLiBOYXZpZ2F0aW9uIFNlY3Rpb24gR2xvYmFsIFN0eWxlc1xcblxcdFxcdDUuMi4gTmF2aWdhdGlvbiBTZWN0aW9uIFRhcmdldCBFbGVtZW50IFN0eWxlc1xcblxcdDYuIE5hdmlnYXRpb24gTWVudSBTZWN0aW9uIFN0eWxlc1xcblxcdFxcdDYuMS4gTmF2aWdhdGlvbiBNZW51IEdsb2JhbCBTdHlsZXNcXG5cXHRcXHQ2LjIuIE5hdmlnYXRpb24gTWVudSBUYXJnZXQgRWxlbWVudCBTdHlsZXNcXG5cXHQ3LiBNYWluIFNlY3Rpb24gU3R5ZXNcXG5cXHRcXHQ3LjEuIE1haW4gU2VjdGlvbiBHbG9iYWwgU3R5bGVzXFxuXFx0XFx0Ny4xLiBNYWluIFNlY3Rpb24gVGFyZ2V0IEVsZW1lbnQgU3R5bGVzXFxuXFx0Ki4gRm9vdGVyIFN0eWxlIFNlY3Rpb25cXG5cXHQqLiBNZWRpYSBRdWVyeSBTZWN0aW9uXFxuXFx0XFx0Ki4xLiBHbG9iYWwgTWVkaWEgUXVlcmllc1xcblxcdFxcdCouMi4gcGFnZUdyaWRDb250YWluZXIgTWVkaWEgUXVlcmllc1xcblxcdFxcdCouMy4gTmF2aWdhdGlvbiBTZWN0aW9uIE1lZGlhIFF1ZXJpZXNcXG5cXHRcXHQqLjQuIE5hdmlnYXRpb24gTWVudSBTZWN0aW9uIE1lZGlhIFF1ZXJpZXNcXG5cXG4qL1xcblxcblxcblxcbi8qXFx0PT09PT09PT09PVxcblxcdDEuIEltcG9ydHNcXG5cXHQ9PT09PT09PT09ICovXFxuXFxuXFxuXFxuXFxuLypcXHQ9PT09PT09PT09PT09PT09XFxuXFx0Mi4gR2xvYmFsIFN0eWxlc1xcblxcdD09PT09PT09PT09PT09PT0gKi9cXG5cXG5cXG4vKiBcXG5cXHRDU1MgU3R5bGluZyBSZXNldCBmcm9tXFxuXFx0aHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgXFx0djIuMCB8IDIwMTEwMTI2XFxuICAgXFx0TGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcblxcdG1pbi1oZWlnaHQ6IDEwMHZoO1xcblxcdGNvbG9yOiByZ2IoMjU1LDI1NSwyNTUpO1xcblxcdGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG5cXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcblxcdGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlOyBcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbi8qXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0My4gcGFnZUdyaWRDb250YWluZXIgU3R5bGVzXFxuXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuXFx0LypcXHQgPT09PT09PT09PT09PT09PT09PT09XFxuXFx0My4xLiBwYWdlR3JpZENvbnRhaW5lciBHbG9iYWwgU3R5bGVzXFxuXFx0XFx0ID09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiNwYWdlR3JpZENvbnRhaW5lcntcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcikgO1xcbiAgXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbiAgXFx0Z3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgIFxcXCJoZWFkZXIgaGVhZGVyIGhlYWRlciBoZWFkZXJcXFwiXFxuICAgIFxcXCJtYWluIG1haW4gbWFpbiBtYWluXFxcIlxcbiAgICBcXFwiZm9vdGVyIGZvb3RlciBmb290ZXIgZm9vdGVyXFxcIjtcXG59XFxuXFxuXFx0LypcXHQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0My4yLiBwYWdlR3JpZENvbnRhaW5lciBUYXJnZXQgRWxlbWVudCBTdHlsZXNcXG5cXHRcXHQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuI25hdlNlY3Rpb257XFxuXFx0Z3JpZC1hcmVhOiBoZWFkZXI7XFxufVxcbiNuYXZNZW51U2VjdGlvbntcXG5cXHRncmlkLWFyZWE6IHNpZGViYXI7XFxufVxcbiNtYWluU2VjdGlvbntcXG5cXHRncmlkLWFyZWE6IG1haW47XFxufVxcbiNmb290ZXJTZWN0aW9ue1xcblxcdGdyaWQtYXJlYTogZm9vdGVyO1xcbn1cXG5cXG5cXG4vKlxcdD09PT09PT09PT09PT09PT09XFxuXFx0NC4gU2lnbi1pbiBTdHlsZXNcXG5cXHQ9PT09PT09PT09PT09PT09PSAqL1xcblxcblxcblxcdC8qXFx0ID09PT09PT09PT09PT09PT09PT09PVxcblxcdDQuMS4gU2lnbi1pbiBHbG9iYWwgU3R5bGVzXFxuXFx0XFx0ID09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbmZvcm17XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jc2lnbkluLUNvbnRhaW5lci1Jbm5lciwgI3NpZ25Jbi1Db250YWluZXItT3V0ZXJ7XFxuXFx0ZGlzcGxheTogZmxleDtcXG59XFxuXFxuI3NpZ25Jbi1Db250YWluZXItT3V0ZXJ7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI3NpZ25Jbi1Db250YWluZXItSW5uZXJ7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcblxcdG1pbi13aWR0aDogMzUlO1xcblxcdG1heC13aWR0aDogODAlO1xcblxcdG1hcmdpbjogOC41ZW0gM2VtIDEzZW07XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwyNTUsMjU1LCAwLjgpO1xcblxcdGJvcmRlci1yYWRpdXM6IDIzcHg7XFxufVxcblxcbiNzaWduSW4tRm9ybS1Db250YWluZXJ7XFxuXFx0bWFyZ2luOjAgMWVtO1xcblxcdHBhZGRpbmc6IDEuNWVtIDA7XFxuXFx0bWluLXdpZHRoOiA2MCU7XFxuXFx0bWF4LXdpZHRoOiA4MCU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNCwgOSwgOSwgMC40KTtcXG59XFxuXFxuXFx0LypcXHQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHQ0LjIuIFNpZ24taW4gVGFyZ2V0IEVsZW1lbnQgU3R5bGVzXFxuXFx0XFx0ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuI2FwcFRpdGxle1xcblxcdGZvbnQtc2l6ZTogMmVtO1xcblxcdG1hcmdpbjogMC41ZW07XFxuXFx0Y29sb3I6ICMwMDA7XFxufVxcblxcbmZvcm0gPiBpbnB1dCwgZm9ybSA+IGxhYmVse1xcblxcdGFsaWduLXNlbGY6IGNlbnRlcjtcXG5cXHRtaW4td2lkdGg6IDYwJTtcXG5cXHRtYXgtd2lkdGg6IDgwJTtcXG59XFxuXFxuZm9ybSA+bGFiZWx7XFxuXFx0Zm9udC1zaXplOiAxLjVlbTtcXG5cXHRjb2xvcjpyZ2IoMjU1LDI1NSwyNTUpO1xcbn1cXG5cXG5pbnB1dFt0eXBlPWJ1dHRvbl0sICNkZW1vQnV0dG9ue1xcblxcdG1hcmdpbjogMC4zZW07XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRmb250LXNpemU6IDEuMmVtO1xcblxcdHBhZGRpbmc6IDAuM2VtIDNlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAxZW07XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdGNvbG9yOiByZ2IoMjU1LDI1NSwyNTUpO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNBRTFGNDI7XFxufVxcblxcbmlucHV0W3R5cGU9dGV4dF17XFxuXFx0bWFyZ2luOiAwLjVlbTtcXG5cXHRwYWRkaW5nOiAwLjVlbSAxZW07XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRiYWNrZ3JvdW5kOiByZ2JhKDE0LCA5LCA5LCAwLjUpOztcXG5cXHRib3JkZXItcmFkaXVzOiAxZW07XFxufVxcblxcbiNkZW1vQnV0dG9ue1xcblxcdHBhZGRpbmc6IDAuM2VtIDJlbTtcXG59XFxuXFxuXFxuLypcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0NS4gTmF2aWdhdGlvbiBTZWN0aW9uIFN0eWxlc1xcblxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXHRcXG5cXHQvKlxcdCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdDUuMS4gTmF2aWdhdGlvbiBTZWN0aW9uIEdsb2JhbCBTdHlsZXNcXG5cXHRcXHQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4jbmF2U2VjdGlvbntcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG5cXHRmb250LXNpemU6IDJlbTtcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0dG9wOiAwO1xcblxcdHdpZHRoOiAxMDB2dztcXG5cXHRjb2xvcjogYmxhY2s7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwyNTUsMjU1LCAwLjYpO1xcbn1cXG5cXG5cXHQvKlxcdCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0NS4yLiBOYXZpZ2F0aW9uIFNlY3Rpb24gVGFyZ2V0IEVsZW1lbnQgU3R5bGVzXFxuXFx0XFx0ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4jbmF2U2VjdGlvbiA+aDF7XFxuXFx0bWFyZ2luLWxlZnQ6IDAuMmVtO1xcblxcdGZvbnQtc2l6ZTogMmVtO1xcblxcdHRyYW5zaXRpb246IDAuNXM7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG4jbmF2U2VjdGlvbiA+aDJ7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDo1MCU7XFxuXFx0bGVmdDo1MCU7XFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcblxcbi8qXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0Ni4gTmF2aWdhdGlvbiBNZW51IFNlY3Rpb24gU3R5bGVzXFxuXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuXFx0LypcXHQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHQ2LjEuIE5hdmlnYXRpb24gTWVudSBHbG9iYWwgU3R5bGVzXFxuXFx0XFx0ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuI25hdk1lbnVTZWN0aW9uPip7XFxuXFx0bWFyZ2luLXRvcDogMWVtO1xcbn1cXG5cXG4jbmF2TWVudVNlY3Rpb257XFxuXFx0cG9zaXRpb246IGZpeGVkO1xcblxcdHRvcDogMmVtO1xcblxcdGhlaWdodDogMTAwdmg7XFxuXFx0Zm9udC1zaXplOiAyZW07ICBcXG5cXHR3aWR0aDogMjUlO1xcblxcdGNvbG9yOiBibGFjaztcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSwgMCk7XFxuXFx0dHJhbnNpdGlvbjogMC41cztcXG59XFxuXFxuI2RhdGVTZWxlY3RvcntcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNwcm9qZWN0U2VsZWN0b3J7XFxuXFx0Zm9udC1zaXplOiAwLjVlbTtcXG59XFxuXFxuI3Byb2plY3RTZWxlY3Rvcj51bHtcXG5cXHRtYXJnaW4tbGVmdDogMWVtO1xcblxcdGxpc3Qtc3R5bGUtdHlwZTogZGlzYztcXG59XFxuXFxuXFx0LypcXHQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdDYuMi4gTmF2aWdhdGlvbiBNZW51IFRhcmdldCBFbGVtZW50IFN0eWxlc1xcblxcdFxcdCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuI2RlZmF1bHRTZWxlY3RvciA+IGgye1xcblxcdG1hcmdpbjogMC41ZW07XFxufVxcblxcbiNkYXRlU2VsZWN0b3IgPiBwe1xcblxcdGZvbnQtc2l6ZTogMC43NWVtOyAgXFxufVxcblxcbiNkYXRlU2VsZWN0b3I+aW5wdXR7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0bWFyZ2luOiAxZW07XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jcHJvamVjdFNlbGVjdG9yPmgye1xcblxcdGZvbnQtc2l6ZTogMS43NWVtO1xcbn1cXG5cXG4jcHJvamVjdFNlbGVjdG9yPnVsPmxpe1xcblxcdG1hcmdpbjogMC41ZW07XFxuXFxufVxcblxcbi8qXFx0PT09PT09PT09PT09PT09PT09PT09XFxuXFx0Ny4gTWFpbiBTZWN0aW9uIFN0eWVzXFxuXFx0PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuXFx0LypcXHQgPT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHQ3LjEuIE1haW4gU2VjdGlvbiBHbG9iYWwgU3R5bGVzXFxuXFx0XFx0ID09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuI21haW5TZWN0aW9uPip7XFxuXFx0bWluLXdpZHRoOiA4MCU7XFxufVxcblxcbiNtYWluU2VjdGlvbiwgLml0ZW1zLCAudGFza3N7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuI21haW5TZWN0aW9ue1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRtYXJnaW4tdG9wOiAzZW07XFxuXFx0cGFkZGluZy1ib3R0b206IDJlbTtcXG5cXHRnYXA6IDAuNWVtIDBlbTtcXG5cXHRmb250LXNpemU6IDEuNWVtO1xcblxcdGNvbG9yOiBibGFjaztcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LDI1NSwyNTUsIDAuOSk7XFxufVxcblxcbi5pdGVtc3tcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbn1cXG5cXG4udGFza3N7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG59XFxuXFxuLml0ZW1zID4gKntcXG5cXHRncmlkLWNvbHVtbjogMSAvIHNwYW4gMztcXG59XFxuXFxuLml0ZW1ze1xcblxcdGNvbG9yOiBibGFjaztcXG5cXHRwbGFjZS1zZWxmOiBjZW50ZXI7XFxuXFx0Z2FwOiAwLjVlbSAwZW07XFxuXFx0bWFyZ2luLWJvdHRvbTogMC41ZW07XFxuXFx0YmFja2dyb3VuZDogcmdiYSgxNCwgOSwgOSwgMC4yOCk7XFxufVxcblxcbi50YXNrcz4qe1xcblxcdHBsYWNlLXNlbGY6IGNlbnRlcjtcXG5cXHRwYWRkaW5nOiAwLjJlbTtcXG59XFxuXFxuXFx0LypcXHQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdDcuMi4gTWFpbiBTZWN0aW9uIFRhcmdldCBFbGVtZW50IFN0eWxlc1xcblxcdFxcdCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuI21haW5TZWN0aW9uID4gaDJ7XFxuXFx0Zm9udC1zaXplOiAxLjVlbTtcXG5cXHRwYWRkaW5nOiAwLjVlbTtcXG59XFxuXFxuLnRhc2tzPmxhYmVse1xcblxcdGNvbG9yOiBibGFjaztcXG5cXHRmb250LXNpemU6IDAuOGVtO1xcblxcdHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udGFza3M+aW5wdXR7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udGFza3M+c2VjdGlvbntcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHR3aWR0aDoxMDAlO1xcbn1cXG5cXG5cXG4uYWRkVGFza3tcXG5cXHRwYWRkaW5nOiAwLjZlbTtcXG5cXHRtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG5cXHRmb250LXNpemU6IDAuOGVtO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGdyaWQtY29sdW1uOiAyO1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMC41ZW07XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNBRTFGNDI7XFxuXFx0dHJhbnNpdGlvbjogMC41cztcXG59XFxuXFxuLmFkZFRhc2s6aG92ZXJ7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2UwM2M2NTtcXG59XFxuXFxuLypcXHQ9PT09PT09PT09PT09PT09PT09PT09PVxcblxcdCouIEZvb3RlciBTdHlsZSBTZWN0aW9uXFxuXFx0PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4jZm9vdGVyU2VjdGlvbntcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0bGVmdDogMDtcXG5cXHRib3R0b206IDA7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLypcXHQ9PT09PT09PT09PT09PT09PT09PT09XFxuXFx0Ki4gTWVkaWEgUXVlcnkgU2VjdGlvblxcblxcdD09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XFxuXFxuXFx0LypcXHQgPT09PT09PT09PT09PT09PT09PT1cXG5cXHQqLjEuIEdsb2JhbCBNZWRpYSBRdWVyaWVzXFxuXFx0XFx0ID09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuXFx0Ym9keSB7XFxuXFx0XFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG5cXHR9XFxuXFxuXFx0LypcXHQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdCouMi4gcGFnZUdyaWRDb250YWluZXIgTWVkaWEgUXVlcmllc1xcblxcdFxcdCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuXFx0XFx0ICNwYWdlR3JpZENvbnRhaW5lcntcXG5cXHRcXHRcXHRncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG5cXHRcXHRcXHRcXFwiaGVhZGVyIGhlYWRlciBoZWFkZXIgaGVhZGVyXFxcIlxcblxcdFxcdFxcdFxcXCJzaWRlYmFyIG1haW4gbWFpbiBtYWluXFxcIlxcblxcdFxcdFxcdFxcXCJmb290ZXIgZm9vdGVyIGZvb3RlciBmb290ZXJcXFwiO1xcblxcdFxcdCB9XFxuXFxuXFxuXFx0LypcXHQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHQqLjMuIE5hdmlnYXRpb24gU2VjdGlvbiBNZWRpYSBRdWVyaWVzXFxuXFx0XFx0ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuXFx0I21haW5TZWN0aW9ue1xcblxcdFxcdG1hcmdpbjogM2VtIDFlbSAwZW07XFxuXFx0fVxcblxcblxcdCNtYWluU2VjdGlvbj4qe1xcblxcdFxcdG1pbi13aWR0aDogNzUlO1xcblxcdH1cXG5cXG5cXHQjbmF2U2VjdGlvbj5oMXtcXG5cXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xcblxcdH1cXG5cXG5cXHQvKlxcdCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0Ki40LiBOYXZpZ2F0aW9uIE1lbnUgU2VjdGlvbiBNZWRpYSBRdWVyaWVzXFxuXFx0XFx0ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG5cXHQjbmF2TWVudVNlY3Rpb257XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XFxuXFx0fVxcblxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBeUJDOzs7O0FBSUQ7O2FBRWE7Ozs7O0FBUWI7O21CQUVtQjs7O0FBR25COzs7OztDQUtDOztBQUVEOzs7Ozs7Ozs7Ozs7O0NBYUMsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1QsZUFBZTtDQUNmLGFBQWE7Q0FDYix3QkFBd0I7QUFDekI7QUFDQSxnREFBZ0Q7QUFDaEQ7O0NBRUMsY0FBYztBQUNmOztBQUVBO0NBQ0MsY0FBYztDQUNkLGlCQUFpQjtDQUNqQix1QkFBdUI7Q0FDdkIsaUNBQWlDO0NBQ2pDLGtCQUFrQjtDQUNsQix5REFBc0U7Q0FDdEUsNEJBQTRCO0NBQzVCLDBCQUEwQjtBQUMzQjtBQUNBO0NBQ0MsWUFBWTtBQUNiO0FBQ0E7O0NBRUMsV0FBVztDQUNYLGFBQWE7QUFDZDtBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLGlCQUFpQjtBQUNsQjs7QUFFQTs7OEJBRThCOztDQUU3Qjs7MEJBRXlCOztBQUUxQjtDQUNDLGFBQWE7Q0FDYixzQ0FBc0M7R0FDcEMsd0JBQXdCO0dBQ3hCOzs7aUNBRzhCO0FBQ2pDOztDQUVDOzs0Q0FFMkM7O0FBRTVDO0NBQ0MsaUJBQWlCO0FBQ2xCO0FBQ0E7Q0FDQyxrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLGVBQWU7QUFDaEI7QUFDQTtDQUNDLGlCQUFpQjtBQUNsQjs7O0FBR0E7O29CQUVvQjs7O0NBR25COzswQkFFeUI7O0FBRTFCO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0Qix1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQyxhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0Msc0JBQXNCO0NBQ3RCLG1CQUFtQjtDQUNuQiw2QkFBNkI7Q0FDN0IsY0FBYztDQUNkLGNBQWM7Q0FDZCxzQkFBc0I7Q0FDdEIsdUNBQXVDO0NBQ3ZDLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixnQkFBZ0I7Q0FDaEIsY0FBYztDQUNkLGNBQWM7Q0FDZCxxQ0FBcUM7QUFDdEM7O0NBRUM7O2tDQUVpQzs7QUFFbEM7Q0FDQyxjQUFjO0NBQ2QsYUFBYTtDQUNiLFdBQVc7QUFDWjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixjQUFjO0NBQ2QsY0FBYztBQUNmOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixZQUFZO0NBQ1osZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixrQkFBa0I7Q0FDbEIsa0JBQWtCO0NBQ2xCLHFCQUFxQjtDQUNyQix1QkFBdUI7Q0FDdkIseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLGtCQUFrQjtDQUNsQixZQUFZO0NBQ1oscUJBQXFCO0NBQ3JCLCtCQUErQjtDQUMvQixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxrQkFBa0I7QUFDbkI7OztBQUdBOzsrQkFFK0I7O0NBRTlCOztxQ0FFb0M7O0FBRXJDO0NBQ0MsYUFBYTtDQUNiLDJCQUEyQjtDQUMzQixjQUFjO0NBQ2QsZUFBZTtDQUNmLE1BQU07Q0FDTixZQUFZO0NBQ1osWUFBWTtDQUNaLHVDQUF1QztBQUN4Qzs7Q0FFQzs7NkNBRTRDOztBQUU3QztDQUNDLGtCQUFrQjtDQUNsQixjQUFjO0NBQ2QsZ0JBQWdCO0NBQ2hCLGVBQWU7QUFDaEI7OztBQUdBO0NBQ0Msa0JBQWtCO0NBQ2xCLE9BQU87Q0FDUCxRQUFRO0NBQ1IsZ0NBQWdDO0FBQ2pDOzs7QUFHQTs7b0NBRW9DOztDQUVuQzs7a0NBRWlDO0FBQ2xDO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixRQUFRO0NBQ1IsYUFBYTtDQUNiLGNBQWM7Q0FDZCxVQUFVO0NBQ1YsWUFBWTtDQUNaLHVCQUF1QjtDQUN2Qiw4QkFBOEI7Q0FDOUIsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixxQkFBcUI7QUFDdEI7O0NBRUM7OzBDQUV5Qzs7QUFFMUM7Q0FDQyxhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxjQUFjO0NBQ2QsV0FBVztDQUNYLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGFBQWE7O0FBRWQ7O0FBRUE7O3dCQUV3Qjs7Q0FFdkI7OytCQUU4Qjs7QUFFL0I7Q0FDQyxjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLGVBQWU7Q0FDZixtQkFBbUI7Q0FDbkIsY0FBYztDQUNkLGdCQUFnQjtDQUNoQixZQUFZO0NBQ1osdUNBQXVDO0FBQ3hDOztBQUVBO0NBQ0MscUNBQXFDO0FBQ3RDOztBQUVBO0NBQ0MscUNBQXFDO0FBQ3RDOztBQUVBO0NBQ0MsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0MsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixjQUFjO0NBQ2Qsb0JBQW9CO0NBQ3BCLGdDQUFnQztBQUNqQzs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixjQUFjO0FBQ2Y7O0NBRUM7O3VDQUVzQzs7QUFFdkM7Q0FDQyxnQkFBZ0I7Q0FDaEIsY0FBYztBQUNmOztBQUVBO0NBQ0MsWUFBWTtDQUNaLGdCQUFnQjtDQUNoQixXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osV0FBVztBQUNaOztBQUVBO0NBQ0MsYUFBYTtDQUNiLFlBQVk7Q0FDWixVQUFVO0FBQ1g7OztBQUdBO0NBQ0MsY0FBYztDQUNkLG9CQUFvQjtDQUNwQixnQkFBZ0I7Q0FDaEIsdUJBQXVCO0NBQ3ZCLGNBQWM7Q0FDZCxxQkFBcUI7Q0FDckIsWUFBWTtDQUNaLG9CQUFvQjtDQUNwQixZQUFZO0NBQ1oseUJBQXlCO0NBQ3pCLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLHlCQUF5QjtBQUMxQjs7QUFFQTs7MEJBRTBCOztBQUUxQjtDQUNDLGVBQWU7Q0FDZixPQUFPO0NBQ1AsU0FBUztDQUNULFdBQVc7Q0FDWCx1QkFBdUI7Q0FDdkIsWUFBWTtDQUNaLGtCQUFrQjtBQUNuQjs7QUFFQTs7eUJBRXlCOztBQUV6Qjs7Q0FFQzs7eUJBRXdCOztDQUV4QjtFQUNDLHlEQUErRDtDQUNoRTs7Q0FFQTs7b0NBRW1DOztHQUVqQztHQUNBOzs7Z0NBRzZCO0dBQzdCOzs7Q0FHRjs7cUNBRW9DOztDQUVwQztFQUNDLG1CQUFtQjtDQUNwQjs7Q0FFQTtFQUNDLGNBQWM7Q0FDZjs7Q0FFQTtFQUNDLHlCQUF5QjtDQUMxQjs7Q0FFQTs7MENBRXlDOztDQUV6QztFQUNDLDBCQUEwQjtDQUMzQjs7QUFFRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBUYWJsZSBvZiBDb250ZW50c1xcblxcdDEuIEltcG9ydHNcXG5cXHQyLiBHbG9iYWwgU3R5bGVzXFxuXFx0My4gcGFnZUdyaWRDb250YWluZXIgU3R5bGVzXFxuXFx0XFx0My4xLiBwYWdlR3JpZENvbnRhaW5lciBHbG9iYWwgU3R5bGVzXFxuXFx0XFx0My4yLiBwYWdlR3JpZENvbnRhaW5lciBUYXJnZXQgRWxlbWVudCBTdHlsZXNcXG5cXHQ0LiBTaWduLWluIFN0eWxlc1xcblxcdFxcdDQuMS4gU2lnbi1pbiBHbG9iYWwgU3R5bGVzXFxuXFx0XFx0NC4yLiBTaWduLWluIFRhcmdldCBFbGVtZW50IFN0eWxlc1xcblxcdDUuIE5hdmlnYXRpb24gU2VjdGlvbiBTdHlsZXNcXG5cXHRcXHQ1LjEuIE5hdmlnYXRpb24gU2VjdGlvbiBHbG9iYWwgU3R5bGVzXFxuXFx0XFx0NS4yLiBOYXZpZ2F0aW9uIFNlY3Rpb24gVGFyZ2V0IEVsZW1lbnQgU3R5bGVzXFxuXFx0Ni4gTmF2aWdhdGlvbiBNZW51IFNlY3Rpb24gU3R5bGVzXFxuXFx0XFx0Ni4xLiBOYXZpZ2F0aW9uIE1lbnUgR2xvYmFsIFN0eWxlc1xcblxcdFxcdDYuMi4gTmF2aWdhdGlvbiBNZW51IFRhcmdldCBFbGVtZW50IFN0eWxlc1xcblxcdDcuIE1haW4gU2VjdGlvbiBTdHllc1xcblxcdFxcdDcuMS4gTWFpbiBTZWN0aW9uIEdsb2JhbCBTdHlsZXNcXG5cXHRcXHQ3LjEuIE1haW4gU2VjdGlvbiBUYXJnZXQgRWxlbWVudCBTdHlsZXNcXG5cXHQqLiBGb290ZXIgU3R5bGUgU2VjdGlvblxcblxcdCouIE1lZGlhIFF1ZXJ5IFNlY3Rpb25cXG5cXHRcXHQqLjEuIEdsb2JhbCBNZWRpYSBRdWVyaWVzXFxuXFx0XFx0Ki4yLiBwYWdlR3JpZENvbnRhaW5lciBNZWRpYSBRdWVyaWVzXFxuXFx0XFx0Ki4zLiBOYXZpZ2F0aW9uIFNlY3Rpb24gTWVkaWEgUXVlcmllc1xcblxcdFxcdCouNC4gTmF2aWdhdGlvbiBNZW51IFNlY3Rpb24gTWVkaWEgUXVlcmllc1xcblxcbiovXFxuXFxuXFxuXFxuLypcXHQ9PT09PT09PT09XFxuXFx0MS4gSW1wb3J0c1xcblxcdD09PT09PT09PT0gKi9cXG5cXG5cXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwJyk7XFxuXFxuXFxuXFxuXFxuLypcXHQ9PT09PT09PT09PT09PT09XFxuXFx0Mi4gR2xvYmFsIFN0eWxlc1xcblxcdD09PT09PT09PT09PT09PT0gKi9cXG5cXG5cXG4vKiBcXG5cXHRDU1MgU3R5bGluZyBSZXNldCBmcm9tXFxuXFx0aHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgXFx0djIuMCB8IDIwMTEwMTI2XFxuICAgXFx0TGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcblxcdG1pbi1oZWlnaHQ6IDEwMHZoO1xcblxcdGNvbG9yOiByZ2IoMjU1LDI1NSwyNTUpO1xcblxcdGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltYWdlcy9Ub0RvQXBwQmFja2dyb3VuZC1jcm9wcGVkLW1vYmlsZS5qcGcnKTtcXG5cXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcblxcdGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlOyBcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbi8qXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0My4gcGFnZUdyaWRDb250YWluZXIgU3R5bGVzXFxuXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuXFx0LypcXHQgPT09PT09PT09PT09PT09PT09PT09XFxuXFx0My4xLiBwYWdlR3JpZENvbnRhaW5lciBHbG9iYWwgU3R5bGVzXFxuXFx0XFx0ID09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiNwYWdlR3JpZENvbnRhaW5lcntcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcikgO1xcbiAgXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbiAgXFx0Z3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgIFxcXCJoZWFkZXIgaGVhZGVyIGhlYWRlciBoZWFkZXJcXFwiXFxuICAgIFxcXCJtYWluIG1haW4gbWFpbiBtYWluXFxcIlxcbiAgICBcXFwiZm9vdGVyIGZvb3RlciBmb290ZXIgZm9vdGVyXFxcIjtcXG59XFxuXFxuXFx0LypcXHQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0My4yLiBwYWdlR3JpZENvbnRhaW5lciBUYXJnZXQgRWxlbWVudCBTdHlsZXNcXG5cXHRcXHQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuI25hdlNlY3Rpb257XFxuXFx0Z3JpZC1hcmVhOiBoZWFkZXI7XFxufVxcbiNuYXZNZW51U2VjdGlvbntcXG5cXHRncmlkLWFyZWE6IHNpZGViYXI7XFxufVxcbiNtYWluU2VjdGlvbntcXG5cXHRncmlkLWFyZWE6IG1haW47XFxufVxcbiNmb290ZXJTZWN0aW9ue1xcblxcdGdyaWQtYXJlYTogZm9vdGVyO1xcbn1cXG5cXG5cXG4vKlxcdD09PT09PT09PT09PT09PT09XFxuXFx0NC4gU2lnbi1pbiBTdHlsZXNcXG5cXHQ9PT09PT09PT09PT09PT09PSAqL1xcblxcblxcblxcdC8qXFx0ID09PT09PT09PT09PT09PT09PT09PVxcblxcdDQuMS4gU2lnbi1pbiBHbG9iYWwgU3R5bGVzXFxuXFx0XFx0ID09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbmZvcm17XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jc2lnbkluLUNvbnRhaW5lci1Jbm5lciwgI3NpZ25Jbi1Db250YWluZXItT3V0ZXJ7XFxuXFx0ZGlzcGxheTogZmxleDtcXG59XFxuXFxuI3NpZ25Jbi1Db250YWluZXItT3V0ZXJ7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI3NpZ25Jbi1Db250YWluZXItSW5uZXJ7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcblxcdG1pbi13aWR0aDogMzUlO1xcblxcdG1heC13aWR0aDogODAlO1xcblxcdG1hcmdpbjogOC41ZW0gM2VtIDEzZW07XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwyNTUsMjU1LCAwLjgpO1xcblxcdGJvcmRlci1yYWRpdXM6IDIzcHg7XFxufVxcblxcbiNzaWduSW4tRm9ybS1Db250YWluZXJ7XFxuXFx0bWFyZ2luOjAgMWVtO1xcblxcdHBhZGRpbmc6IDEuNWVtIDA7XFxuXFx0bWluLXdpZHRoOiA2MCU7XFxuXFx0bWF4LXdpZHRoOiA4MCU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNCwgOSwgOSwgMC40KTtcXG59XFxuXFxuXFx0LypcXHQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHQ0LjIuIFNpZ24taW4gVGFyZ2V0IEVsZW1lbnQgU3R5bGVzXFxuXFx0XFx0ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuI2FwcFRpdGxle1xcblxcdGZvbnQtc2l6ZTogMmVtO1xcblxcdG1hcmdpbjogMC41ZW07XFxuXFx0Y29sb3I6ICMwMDA7XFxufVxcblxcbmZvcm0gPiBpbnB1dCwgZm9ybSA+IGxhYmVse1xcblxcdGFsaWduLXNlbGY6IGNlbnRlcjtcXG5cXHRtaW4td2lkdGg6IDYwJTtcXG5cXHRtYXgtd2lkdGg6IDgwJTtcXG59XFxuXFxuZm9ybSA+bGFiZWx7XFxuXFx0Zm9udC1zaXplOiAxLjVlbTtcXG5cXHRjb2xvcjpyZ2IoMjU1LDI1NSwyNTUpO1xcbn1cXG5cXG5pbnB1dFt0eXBlPWJ1dHRvbl0sICNkZW1vQnV0dG9ue1xcblxcdG1hcmdpbjogMC4zZW07XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRmb250LXNpemU6IDEuMmVtO1xcblxcdHBhZGRpbmc6IDAuM2VtIDNlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAxZW07XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdGNvbG9yOiByZ2IoMjU1LDI1NSwyNTUpO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNBRTFGNDI7XFxufVxcblxcbmlucHV0W3R5cGU9dGV4dF17XFxuXFx0bWFyZ2luOiAwLjVlbTtcXG5cXHRwYWRkaW5nOiAwLjVlbSAxZW07XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRiYWNrZ3JvdW5kOiByZ2JhKDE0LCA5LCA5LCAwLjUpOztcXG5cXHRib3JkZXItcmFkaXVzOiAxZW07XFxufVxcblxcbiNkZW1vQnV0dG9ue1xcblxcdHBhZGRpbmc6IDAuM2VtIDJlbTtcXG59XFxuXFxuXFxuLypcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0NS4gTmF2aWdhdGlvbiBTZWN0aW9uIFN0eWxlc1xcblxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXHRcXG5cXHQvKlxcdCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdDUuMS4gTmF2aWdhdGlvbiBTZWN0aW9uIEdsb2JhbCBTdHlsZXNcXG5cXHRcXHQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4jbmF2U2VjdGlvbntcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG5cXHRmb250LXNpemU6IDJlbTtcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0dG9wOiAwO1xcblxcdHdpZHRoOiAxMDB2dztcXG5cXHRjb2xvcjogYmxhY2s7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwyNTUsMjU1LCAwLjYpO1xcbn1cXG5cXG5cXHQvKlxcdCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0NS4yLiBOYXZpZ2F0aW9uIFNlY3Rpb24gVGFyZ2V0IEVsZW1lbnQgU3R5bGVzXFxuXFx0XFx0ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4jbmF2U2VjdGlvbiA+aDF7XFxuXFx0bWFyZ2luLWxlZnQ6IDAuMmVtO1xcblxcdGZvbnQtc2l6ZTogMmVtO1xcblxcdHRyYW5zaXRpb246IDAuNXM7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG4jbmF2U2VjdGlvbiA+aDJ7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDo1MCU7XFxuXFx0bGVmdDo1MCU7XFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcblxcbi8qXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0Ni4gTmF2aWdhdGlvbiBNZW51IFNlY3Rpb24gU3R5bGVzXFxuXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuXFx0LypcXHQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHQ2LjEuIE5hdmlnYXRpb24gTWVudSBHbG9iYWwgU3R5bGVzXFxuXFx0XFx0ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuI25hdk1lbnVTZWN0aW9uPip7XFxuXFx0bWFyZ2luLXRvcDogMWVtO1xcbn1cXG5cXG4jbmF2TWVudVNlY3Rpb257XFxuXFx0cG9zaXRpb246IGZpeGVkO1xcblxcdHRvcDogMmVtO1xcblxcdGhlaWdodDogMTAwdmg7XFxuXFx0Zm9udC1zaXplOiAyZW07ICBcXG5cXHR3aWR0aDogMjUlO1xcblxcdGNvbG9yOiBibGFjaztcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSwgMCk7XFxuXFx0dHJhbnNpdGlvbjogMC41cztcXG59XFxuXFxuI2RhdGVTZWxlY3RvcntcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNwcm9qZWN0U2VsZWN0b3J7XFxuXFx0Zm9udC1zaXplOiAwLjVlbTtcXG59XFxuXFxuI3Byb2plY3RTZWxlY3Rvcj51bHtcXG5cXHRtYXJnaW4tbGVmdDogMWVtO1xcblxcdGxpc3Qtc3R5bGUtdHlwZTogZGlzYztcXG59XFxuXFxuXFx0LypcXHQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdDYuMi4gTmF2aWdhdGlvbiBNZW51IFRhcmdldCBFbGVtZW50IFN0eWxlc1xcblxcdFxcdCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuI2RlZmF1bHRTZWxlY3RvciA+IGgye1xcblxcdG1hcmdpbjogMC41ZW07XFxufVxcblxcbiNkYXRlU2VsZWN0b3IgPiBwe1xcblxcdGZvbnQtc2l6ZTogMC43NWVtOyAgXFxufVxcblxcbiNkYXRlU2VsZWN0b3I+aW5wdXR7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0bWFyZ2luOiAxZW07XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jcHJvamVjdFNlbGVjdG9yPmgye1xcblxcdGZvbnQtc2l6ZTogMS43NWVtO1xcbn1cXG5cXG4jcHJvamVjdFNlbGVjdG9yPnVsPmxpe1xcblxcdG1hcmdpbjogMC41ZW07XFxuXFxufVxcblxcbi8qXFx0PT09PT09PT09PT09PT09PT09PT09XFxuXFx0Ny4gTWFpbiBTZWN0aW9uIFN0eWVzXFxuXFx0PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuXFx0LypcXHQgPT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHQ3LjEuIE1haW4gU2VjdGlvbiBHbG9iYWwgU3R5bGVzXFxuXFx0XFx0ID09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuI21haW5TZWN0aW9uPip7XFxuXFx0bWluLXdpZHRoOiA4MCU7XFxufVxcblxcbiNtYWluU2VjdGlvbiwgLml0ZW1zLCAudGFza3N7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuI21haW5TZWN0aW9ue1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRtYXJnaW4tdG9wOiAzZW07XFxuXFx0cGFkZGluZy1ib3R0b206IDJlbTtcXG5cXHRnYXA6IDAuNWVtIDBlbTtcXG5cXHRmb250LXNpemU6IDEuNWVtO1xcblxcdGNvbG9yOiBibGFjaztcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LDI1NSwyNTUsIDAuOSk7XFxufVxcblxcbi5pdGVtc3tcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbn1cXG5cXG4udGFza3N7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG59XFxuXFxuLml0ZW1zID4gKntcXG5cXHRncmlkLWNvbHVtbjogMSAvIHNwYW4gMztcXG59XFxuXFxuLml0ZW1ze1xcblxcdGNvbG9yOiBibGFjaztcXG5cXHRwbGFjZS1zZWxmOiBjZW50ZXI7XFxuXFx0Z2FwOiAwLjVlbSAwZW07XFxuXFx0bWFyZ2luLWJvdHRvbTogMC41ZW07XFxuXFx0YmFja2dyb3VuZDogcmdiYSgxNCwgOSwgOSwgMC4yOCk7XFxufVxcblxcbi50YXNrcz4qe1xcblxcdHBsYWNlLXNlbGY6IGNlbnRlcjtcXG5cXHRwYWRkaW5nOiAwLjJlbTtcXG59XFxuXFxuXFx0LypcXHQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdDcuMi4gTWFpbiBTZWN0aW9uIFRhcmdldCBFbGVtZW50IFN0eWxlc1xcblxcdFxcdCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuI21haW5TZWN0aW9uID4gaDJ7XFxuXFx0Zm9udC1zaXplOiAxLjVlbTtcXG5cXHRwYWRkaW5nOiAwLjVlbTtcXG59XFxuXFxuLnRhc2tzPmxhYmVse1xcblxcdGNvbG9yOiBibGFjaztcXG5cXHRmb250LXNpemU6IDAuOGVtO1xcblxcdHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udGFza3M+aW5wdXR7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udGFza3M+c2VjdGlvbntcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHR3aWR0aDoxMDAlO1xcbn1cXG5cXG5cXG4uYWRkVGFza3tcXG5cXHRwYWRkaW5nOiAwLjZlbTtcXG5cXHRtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG5cXHRmb250LXNpemU6IDAuOGVtO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGdyaWQtY29sdW1uOiAyO1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMC41ZW07XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNBRTFGNDI7XFxuXFx0dHJhbnNpdGlvbjogMC41cztcXG59XFxuXFxuLmFkZFRhc2s6aG92ZXJ7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2UwM2M2NTtcXG59XFxuXFxuLypcXHQ9PT09PT09PT09PT09PT09PT09PT09PVxcblxcdCouIEZvb3RlciBTdHlsZSBTZWN0aW9uXFxuXFx0PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4jZm9vdGVyU2VjdGlvbntcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0bGVmdDogMDtcXG5cXHRib3R0b206IDA7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLypcXHQ9PT09PT09PT09PT09PT09PT09PT09XFxuXFx0Ki4gTWVkaWEgUXVlcnkgU2VjdGlvblxcblxcdD09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XFxuXFxuXFx0LypcXHQgPT09PT09PT09PT09PT09PT09PT1cXG5cXHQqLjEuIEdsb2JhbCBNZWRpYSBRdWVyaWVzXFxuXFx0XFx0ID09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuXFx0Ym9keSB7XFxuXFx0XFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltYWdlcy9Ub0RvQXBwQmFja2dyb3VuZC1jcm9wcGVkLmpwZycpO1xcblxcdH1cXG5cXG5cXHQvKlxcdCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0Ki4yLiBwYWdlR3JpZENvbnRhaW5lciBNZWRpYSBRdWVyaWVzXFxuXFx0XFx0ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG5cXHRcXHQgI3BhZ2VHcmlkQ29udGFpbmVye1xcblxcdFxcdFxcdGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcblxcdFxcdFxcdFxcXCJoZWFkZXIgaGVhZGVyIGhlYWRlciBoZWFkZXJcXFwiXFxuXFx0XFx0XFx0XFxcInNpZGViYXIgbWFpbiBtYWluIG1haW5cXFwiXFxuXFx0XFx0XFx0XFxcImZvb3RlciBmb290ZXIgZm9vdGVyIGZvb3RlclxcXCI7XFxuXFx0XFx0IH1cXG5cXG5cXG5cXHQvKlxcdCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdCouMy4gTmF2aWdhdGlvbiBTZWN0aW9uIE1lZGlhIFF1ZXJpZXNcXG5cXHRcXHQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG5cXHQjbWFpblNlY3Rpb257XFxuXFx0XFx0bWFyZ2luOiAzZW0gMWVtIDBlbTtcXG5cXHR9XFxuXFxuXFx0I21haW5TZWN0aW9uPip7XFxuXFx0XFx0bWluLXdpZHRoOiA3NSU7XFxuXFx0fVxcblxcblxcdCNuYXZTZWN0aW9uPmgxe1xcblxcdFxcdHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XFxuXFx0fVxcblxcblxcdC8qXFx0ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHQqLjQuIE5hdmlnYXRpb24gTWVudSBTZWN0aW9uIE1lZGlhIFF1ZXJpZXNcXG5cXHRcXHQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcblxcdCNuYXZNZW51U2VjdGlvbntcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcXG5cXHR9XFxuXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIi8vIFRoaXMgaXMganVzdCBhIHBsYWNlIEhvbGRlclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cblxuZnVuY3Rpb24gYmFieSgpe1xuICAgIGNvbnNvbGUubG9nKCdJIHdvbmRlciBpZiB0aGlzIHdpbGwgZmluZCB0aGUgaHRtbCBJIGFtIGxvb2tpbmcgZm9yIHNpbmNlIEkgYW0gdXNpbmcgd2VicGFjaycpXG59XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==