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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/icons8-trash-can.svg */ "./src/images/icons8-trash-can.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/icons8-edit.svg */ "./src/images/icons8-edit.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/icons8-done.svg */ "./src/images/icons8-done.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./images/icons8-cancel.svg */ "./src/images/icons8-cancel.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./images/ToDoAppBackground-cropped-mobile.jpg */ "./src/images/ToDoAppBackground-cropped-mobile.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./images/ToDoAppBackground-cropped.jpg */ "./src/images/ToDoAppBackground-cropped.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Table of Contents\n\t1. Imports\n\t2. Global Styles\n\t\t2.1. Global Styles Variables\n\t\t\t2.1.1. Global Styles Variables-Color\n\t\t\t2.1.2. Global Styles Variables-Font\n\t\t\t2.1.3. Global Styles Images\n\t\t2.2. Global Styles Global\n\t3. pageGridContainer Styles\n\t\t3.1. pageGridContainer Global Styles\n\t\t3.2. pageGridContainer Target Element Styles\n\t4. Sign-in Styles\n\t\t4.1. Sign-in Global Styles\n\t\t4.2. Sign-in Target Element Styles\n\t5. Sign-Up Styles\n\t\t5.1. Sign-Up Global Styles\n\t\t5.2. Sign-Up Target Element Styles\n\t6. Navigation Section Styles\n\t\t6.1. Navigation Section Global Styles\n\t\t6.2. Navigation Section Target Element Styles\n\t7. Navigation Menu Section Styles\n\t\t7.1. Navigation Menu Global Styles\n\t\t7.2. Navigation Menu Target Element Styles\n\t\t7.3. Navigation Edit Section Global Styles\n\t\t7.4. Navigation Edit Section Target Element Styles\n\t8. Main Section Styes\n\t\t8.1. Main Section Global Styles\n\t\t8.2. Main Section Target Element Styles\n\t\t8.3. Main Edit Section Global Styles\n\t\t8.4. Main Edit Section Target Element Styles\n\t*. Footer Style Section\n\t*. Media Query Section\n\t\t*.1. Global Media Queries\n\t\t*.2. pageGridContainer Media Queries\n\t\t*.3. Navigation Section Media Queries\n\t\t*.4. Navigation Menu Section Media Queries\n\n*/\n\n/*\t==========\n\t1. Imports\n\t========== */\n\n/*\t================\n\t2. Global Styles\n\t================ */\n\n\t/*\t============================\n\t\t2.1. Global Styles Variables\n\t\t============================ */\n\n:root{\n\n\t\t/*\t====================================\n\t\t\t2.1.1. Global Styles Variables-Color\n\t\t \t==================================== */\n\n\t--clr-primary:rgb(255,255,255);\n\t--clr-primary-opacity-light:rgb(255,255,255, 0.6);\n\t--clr-primary-opacity-mid:rgb(255,255,255, 0.8);\n\t--clr-primary-opacity-dark:rgb(255,255,255, 0.9);\n\n\t--clr-secondary:rgb(14, 9, 9);\n\t--clr-secondary-opacity-light:rgb(14, 9, 9, 0.28);\n\t--clr-secondary-opacity-mid:rgb(14, 9, 9, 0.4);\n\t--clr-secondary-opacity-dark:rgb(14, 9, 9, 0.5);\n\n\t--clr-accent:rgb(174,31,66);\n\t--clr-accent-light:rgb(224,60,101);\n\t\t\t\n\t\t/*\t===================================\n\t\t\t2.1.2. Global Styles Variables-Font\n\t\t \t=================================== */\n\n\t--ff-primary:'Roboto', sans-serif;\n\n\t/*\t\t===========================\n\t\t\t2.1.3. Global Styles Images\n\t\t \t=========================== */\n\n\t--img-trash:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n\t--img-edit:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n\t--img-done:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n\t--img-cancel:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n}\n\n\t.edit,.delete,.done,.cancel{\n\t\tbackground-repeat: no-repeat;\n\t\tbackground-size: 100% 100%;\n\t}\n\n\t/*\t=========================\n\t\t2.2. Global Styles Global\n\t\t========================= */\n/* \n\tCSS Styling Reset from\n\thttp://meyerweb.com/eric/tools/css/reset/ \n   \tv2.0 | 20110126\n   \tLicense: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\n\nbody {\n\tline-height: 1;\n\tmin-height: 100vh;\n\tfont-family: var(--ff-primary);\n\ttext-align: center;\n\tbackground-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n\tbackground-repeat: no-repeat;\n\tbackground-size: 100% 100%; \n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/*\t===========================\n\t3. pageGridContainer Styles\n\t=========================== */\n\n\t/*\t====================================\n\t\t3.1. pageGridContainer Global Styles\n\t\t==================================== */\n\n#pageGridContainer{\n\tdisplay: grid;\n\tgrid-template-columns: repeat(4, 1fr) ;\n  \tgrid-template-rows: auto;\n  \tgrid-template-areas: \n    \"header header header header\"\n    \"main main main main\"\n    \"footer footer footer footer\";\n}\n\n\t/*\t============================================\n\t\t3.2. pageGridContainer Target Element Styles\n\t\t============================================ */\n\n#navSection{\n\tgrid-area: header;\n}\n#navMenuSection{\n\tgrid-area: sidebar;\n}\n#mainSection{\n\tgrid-area: main;\n}\n#footerSection{\n\tgrid-area: footer;\n}\n\n/*\t=================\n\t4. Sign-in Styles\n\t================= */\n\n\t/*\t==========================\n\t\t4.1. Sign-in Global Styles\n\t\t========================== */\n\nform{\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n}\n\n#signIn-Container-Inner, #signIn-Container-Outer{\n\tdisplay: flex;\n}\n\n#signIn-Container-Outer{\n\theight: 100vh;\n\tjustify-content: center;\n}\n\n#signIn-Container-Inner{\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: space-evenly;\n\tmin-width: 35%;\n\tmax-width: 80%;\n\tmargin: 8.5em 3em 13em;\n\tbackground-color: var(--clr-primary-opacity-mid);\n\tborder-radius: 23px;\n}\n\n#signIn-Form-Container{\n\tmargin:0 1em;\n\tpadding: 1.5em 0;\n\tmin-width: 60%;\n\tmax-width: 80%;\n\tbackground-color: var(--clr-secondary-opacity-mid);\n}\n\n\t/*\t==================================\n\t\t4.2. Sign-in Target Element Styles\n\t\t================================== */\n\n#appTitle{\n\tfont-size: 2em;\n\tmargin: 0.5em;\n\tcolor: var(--clr-secondary);\n}\n\nform > input, form > label{\n\talign-self: center;\n\tmin-width: 60%;\n\tmax-width: 80%;\n}\n\nform >label{\n\tfont-size: 1.5em;\n\tcolor:var(--clr-primary);\n}\n\ninput[type=button], #demoButton{\n\tmargin: 0.3em;\n\tborder: none;\n\tcursor: pointer;\n\tfont-size: 1.2em;\n\tpadding: 0.3em 3em;\n\tborder-radius: 1em;\n\ttext-decoration: none;\n\tcolor: var(--clr-primary);\n\tbackground-color: var(--clr-accent);\n\ttransition: 0.5s;\n}\n\ninput[type=button]:hover, #demoButton:hover{\n\tbackground-color: var(--clr-accent-light);\n}\n\ninput[type=text]{\n\tmargin: 0.5em;\n\tpadding: 0.5em 1em;\n\tborder: none;\n\ttext-decoration: none;\n\tbackground: var(--clr-secondary-opacity-dark);\n\tborder-radius: 1em;\n}\n\n#demoButton{\n\tpadding: 0.3em 2em;\n}\n\n/*\t=================\n\t5. Sign-Up Styles\n\t================= */\n\n\n\t/*\t==========================\n\t\t5.1. Sign-Up Global Styles\n\t\t========================== */\n\nform{\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n}\n\n#signUp-Container-Inner, #signUp-Container-Outer{\n\tdisplay: flex;\n}\n\n#signUp-Container-Outer{\n\theight: 100vh;\n\tjustify-content: center;\n}\n\n#signUp-Container-Inner{\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: space-evenly;\n\tmin-width: 35%;\n\tmax-width: 80%;\n\tmargin: 8.5em 3em 13em;\n\tbackground-color: var(--clr-primary-opacity-mid);\n\tborder-radius: 23px;\n}\n\n#signUp-Form-Container{\n\tmargin:0 1em;\n\tpadding: 1.5em 0;\n\tmin-width: 60%;\n\tmax-width: 80%;\n\tbackground-color: var(--clr-secondary-opacity-mid);\n}\n\t\t\n\t/*\t==================================\n\t\t5.2. Sign-Up Target Element Styles\n\t\t================================== */\n\t\t\n#appTitle{\n\tfont-size: 2em;\n\tcolor: var(--clr-secondary);\n\t\n}\n\nform > input, form > label{\n\talign-self: center;\n\tmin-width: 60%;\n\tmax-width: 80%;\n}\n\nform >label{\n\tfont-size: 1.5em;\n\tcolor:var(--clr-primary);\n}\n\ninput[type=button], #demoButton{\n\tmargin: 0.3em;\n\tborder: none;\n\tcursor: pointer;\n\tfont-size: 1.2em;\n\tpadding: 0.3em 3em;\n\tborder-radius: 1em;\n\ttext-decoration: none;\n\tcolor: var(--clr-primary);\n\tbackground-color: var(--clr-accent);\n\ttransition: 0.5s;\n}\n\ninput[type=button]:hover, #demoButton:hover{\n\tbackground-color: var(--clr-accent-light);\n}\n\ninput[type=text]{\n\tmargin: 0.5em;\n\tpadding: 0.5em 1em;\n\tborder: none;\n\ttext-decoration: none;\n\tbackground: var(--clr-secondary-opacity-dark);\n\tborder-radius: 1em;\n}\n\n#demoButton{\n\tpadding: 0.3em 2em;\n}\n\n/*\t============================\n\t6. Navigation Section Styles\n\t============================ */\n\t\n\t/*\t=====================================\n\t\t6.1. Navigation Section Global Styles\n\t\t===================================== */\n\n#navSection{\n\tdisplay: flex;\n\tjustify-content: flex-start;\n\tfont-size: 2em;\n\tposition: fixed;\n\ttop: 0;\n\twidth: 100vw;\n\tcolor: var(--clr-secondary);\n\tbackground-color: var(--clr-primary-opacity-light);\n}\n\n\t/*\t=============================================\n\t\t6.2. Navigation Section Target Element Styles\n\t\t============================================= */\n\n#navSection >h1{\n\tmargin-left: 0.2em;\n\tfont-size: 2em;\n\ttransition: 0.5s;\n\tcursor: pointer;\n}\n\n\n#navSection >h2{\n\tposition: absolute;\n\ttop:50%;\n\tleft:50%;\n\ttransform: translate(-50%, -50%);\n}\n\n\n/*\t=================================\n\t7. Navigation Menu Section Styles\n\t================================= */\n\n\t/*\t==================================\n\t\t7.1. Navigation Menu Global Styles\n\t\t================================== */\n#navMenuSection>*{\n\tmargin-top: 1em;\n}\n\n#navMenuSection{\n\tposition: fixed;\n\ttop: 2em;\n\theight: 100vh;\n\tfont-size: 2em;  \n\twidth: 25%;\n\tcolor: var(--clr-secondary);\n\tbackground-color: var(--clr-primary);\n\ttransform: translate(-100%, 0);\n\ttransition: 0.5s;\n}\n\n#dateSelector{\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n#projectSelector{\n\tfont-size: 0.5em;\n}\n\n#projectSelector>ul{\n\tmargin: 0em 1em;\n\tlist-style-type: disc;\n}\n\n#projectSelector>ul>section>*{\n\tflex-grow: 1;\n\ttransition: 0.5s;\n}\n\n#projectSelector>ul>section>*:hover{\n\tbackground-color: var(--clr-secondary-opacity-light);\n}\n\n\t/*\t==========================================\n\t\t7.2. Navigation Menu Target Element Styles\n\t\t========================================== */\n\n#defaultSelector > h2{\n\tmargin: 0.5em;\n}\n\n#dateSelector > p{\n\tfont-size: 0.75em;  \n}\n\n#dateSelector>input{\n\tdisplay: block;\n\tmargin: 1em;\n\ttext-align: center;\n}\n\n#projectSelector>h2{\n\tfont-size: 1.75em;\n}\n\n#projectSelector>ul>li{\n\tmargin: 0.5em;\n\n}\n\n#projectSelector>ul>section{\n\tdisplay: flex;\n\tflex-direction: row;\n\theight: 2em;\n}\n\n#projectSelector>ul>section>.edit{\n\tbackground-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n\tbackground-repeat: no-repeat;\n\tbackground-size: 100% 100%;\n}\n\n#projectSelector>ul>section>.delete{\n\tbackground-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n\tbackground-repeat: no-repeat;\n\tbackground-size: 100% 100%;\n}\n\n#projectSelector>ul>.addProject{\n\tpadding: 0.6em;\n\tfont-size: 1.2em;\n\tmargin-top: 0.5em;\n\ttext-decoration: none;\n\tborder: none;\n\tborder-radius: 0.5em;\n\tcolor: var(--clr-primary);\n\tbackground-color: var(--clr-accent);\n\ttransition: 0.5s;\n}\n\n#projectSelector>ul>.addProject:hover{\n\tbackground-color: var(--clr-accent-light);\n}\n\n/*\t==========================================\n\t7.3. Navigation Edit Section Global Styles\n\t========================================== */\n\n#editProjectContainer{\n\tdisplay: flex;\n\tborder: 0.2em inset var(--clr-accent);\n\tflex-direction: column;\n}\n\n#editProjectContainer>*{\n\tflex-grow: 1;\n}\n\n#editProjectContainer>.done-cancelSection>*{\n\twidth: 100%;\n\theight: 2em;\n}\n\n\t/*\t==============================================\n\t7.4. Navigation Edit Section Target Element Styles\n\t================================================== */\n\n#editProjectContainer{\n\tdisplay: flex;\n\tborder: 0.2em inset var(--clr-accent);\n\tflex-direction: column;\n}\n\n#editProjectContainer>.done-cancelSection{\n\tdisplay: flex;\n\tjustify-content: space-evenly;\n\ttransition: 0.5s;\n}\n\n#editProjectContainer>.editTaskSelect>input{\n\twidth: 80%;\n}\n\n#editProjectContainer>.done-cancelSection>*:hover{\n\tbackground-color: var(--clr-secondary-opacity-light);\n}\n\n/*\t=====================\n\t8. Main Section Styes\n\t===================== */\n\n\t/*\t===============================\n\t\t8.1. Main Section Global Styles\n\t\t=============================== */\n\n#mainSection>*{\n\tmin-width: 80%;\n}\n\n#mainSection, .items, .tasks{\n\tdisplay: grid;\n}\n\n#mainSection{\n\tdisplay: flex;\n\tflex-direction: column;\n\tmargin-top: 3em;\n\tpadding-bottom: 2em;\n\tgap: 0.5em 0em;\n\tfont-size: 1.5em;\n\tcolor: var(--clr-secondary);\n\tbackground-color: var(--clr-primary-opacity-dark);\n}\n\n.items{\n\tgrid-template-columns: repeat(3, 1fr);\n}\n\n.tasks{\n\tgrid-template-columns: repeat(4, 1fr);\n}\n\n.items > *{\n\tgrid-column: 1 / span 3;\n}\n\n.items{\n\tcolor: var(--clr-secondary);\n\tplace-self: center;\n\tgap: 0.5em 0em;\n\tmargin-bottom: 0.5em;\n\tbackground: var(--clr-secondary-opacity-light);\n}\n\n.tasks>*{\n\tplace-self: center;\n\tpadding: 0.2em;\n}\n\n.tasks>section>*{\n\theight: 2em;\n\twidth: 2em;\n\tflex-grow: 1;\n\ttransition: 0.5s;\n}\n\n.tasks>section>*:hover{\n\tbackground-color: var(--clr-secondary-opacity-light);\n}\n\n\t/*\t=======================================\n\t\t8.2. Main Section Target Element Styles\n\t\t======================================= */\n\n#mainSection > h2{\n\tfont-size: 1.5em;\n\tpadding: 0.5em;\n}\n\n.items>h2{\n\tfont-size: 1.5em;\n\tpadding-top: 0.2em;\n}\n\n.tasks>label{\n\tcolor: var(--clr-secondary);\n\tplace-self: center;\n\tfont-size: 1em;\n\twidth: 100%;\n}\n\n.tasks>input{\n\theight: 2em;\n\twidth: 2em;\n}\n\n.tasks>section{\n\tdisplay: flex;\n\theight: 100%;\n\twidth:100%;\n}\n\n.edit{\n\tbackground-image: var(--img-edit);\n}\n\n.delete{\n\tbackground-image: var(--img-trash);\n}\n\n.addTask{\n\tpadding: 0.6em;\n\tmargin-bottom: 0.5em;\n\tfont-size: 0.8em;\n\tjustify-content: center;\n\tgrid-column: 2;\n\ttext-decoration: none;\n\tborder: none;\n\tborder-radius: 0.5em;\n\tcolor: var(--clr-primary);\n\tbackground-color: var(--clr-accent);\n\ttransition: 0.5s;\n}\n\n.addTask:hover{\n\tbackground-color: var(--clr-accent-light);\n}\n\n\t/*\t====================================\n\t\t8.3. Main Edit Section Global Styles\n\t\t==================================== */\n\n#editTask>*{\n\tplace-self: center;\n}\n\n#editTask>section>*{\n\theight: auto;\n\twidth: 90%;\n\ttransition: 0.5s;\n}\n\n#editTask>.done-cancelSection>*:hover{\n\tbackground-color: var(--clr-secondary-opacity-light);\n}\n\n#editTask>.done-cancelSection>*{\n\twidth: auto;\n\theight: auto;\n\tflex-grow: 1;\n}\n\n\t/*\t============================================\n\t\t8.4. Main Edit Section Target Element Styles\n\t\t============================================ */\n\n#editTaskContainer{\n\twidth: 100%;\n\tpadding: 0;\n\tgrid-column: span 4;\n}\n\n#editTask{\n\tdisplay: grid;\n\tmargin: auto;\n\twidth: 80%;\n\tpadding: 0;\n\tborder: 0.2em inset var(--clr-accent);\n\tgrid-template-columns: repeat(4, 1fr);\n\tcolumn-gap: 0.5em;\n}\n\n#editTask>section{\n\tdisplay: flex;\n\tflex-direction: column;\n\theight: 100%;\n\twidth: 100%;\n}\n\n#editTask>section>label{\n\tcolor: var(--clr-secondary);\n\tplace-self: center;\n\tfont-size: 1em;\n\twidth: 100%;\n}\n\n#editTask>section>textarea{\n\tresize: vertical;\n}\n\n#editTask>.done-cancelSection{\n\tflex-direction: row;\n}\n\n.done{\n\tbackground-image: var(--img-done);\n}\n\n.cancel{\n\tbackground-image: var(--img-cancel);\n}\n\n/*\t=======================\n\t*. Footer Style Section\n\t======================= */\n\n#footerSection{\n\tposition: fixed;\n\tleft: 0;\n\tbottom: 0;\n\twidth: 100%;\n\tbackground-color: var(--clr-secondary);\n\tcolor: var(--clr-primary);\n\ttext-align: center;\n}\n\n/*\t======================\n\t*. Media Query Section\n\t====================== */\n\n@media only screen and (min-width: 750px) {\n\n\t/*\t=========================\n\t\t*.1. Global Media Queries\n\t\t========================= */\n\n\tbody {\n\t\tbackground-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n\t}\n\n\t/*\t====================================\n\t\t*.2. pageGridContainer Media Queries\n\t\t==================================== */\n\n\t#pageGridContainer{\n\t\tgrid-template-areas: \n\t\t\"header header header header\"\n\t\t\"sidebar main main main\"\n\t\t\"footer footer footer footer\";\n\t}\n\n\n\t/*\t=====================================\n\t\t*.3. Navigation Section Media Queries\n\t\t===================================== */\n\n\t#mainSection{\n\t\tmargin: 3em 1em 0em;\n\t}\n\n\t#mainSection>*{\n\t\tmin-width: 75%;\n\t}\n\n\t#navSection>h1{\n\t\ttransform: rotate(135deg);\n\t}\n\n\t/*\t==========================================\n\t\t*.4. Navigation Menu Section Media Queries\n\t\t========================================== */\n\n\t#navMenuSection{\n\t\ttransform: translate(0, 0);\n\t}\n\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;CAqCC;;AAED;;aAEa;;AAIb;;mBAEmB;;CAElB;;gCAE+B;;AAEhC;;EAEE;;0CAEwC;;CAEzC,8BAA8B;CAC9B,iDAAiD;CACjD,+CAA+C;CAC/C,gDAAgD;;CAEhD,6BAA6B;CAC7B,iDAAiD;CACjD,8CAA8C;CAC9C,+CAA+C;;CAE/C,2BAA2B;CAC3B,kCAAkC;;EAEjC;;yCAEuC;;CAExC,iCAAiC;;CAEjC;;iCAEgC;;CAEhC,mDAAgD;CAChD,kDAA0C;CAC1C,kDAA0C;CAC1C,oDAA8C;AAC/C;;CAEC;EACC,4BAA4B;EAC5B,0BAA0B;CAC3B;;CAEA;;6BAE4B;AAC7B;;;;;CAKC;;AAED;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;;AAEA;CACC,cAAc;CACd,iBAAiB;CACjB,8BAA8B;CAC9B,kBAAkB;CAClB,yDAAsE;CACtE,4BAA4B;CAC5B,0BAA0B;AAC3B;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB;;AAEA;;8BAE8B;;CAE7B;;wCAEuC;;AAExC;CACC,aAAa;CACb,sCAAsC;GACpC,wBAAwB;GACxB;;;iCAG8B;AACjC;;CAEC;;gDAE+C;;AAEhD;CACC,iBAAiB;AAClB;AACA;CACC,kBAAkB;AACnB;AACA;CACC,eAAe;AAChB;AACA;CACC,iBAAiB;AAClB;;AAEA;;oBAEoB;;CAEnB;;8BAE6B;;AAE9B;CACC,aAAa;CACb,sBAAsB;CACtB,uBAAuB;AACxB;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,aAAa;CACb,uBAAuB;AACxB;;AAEA;CACC,sBAAsB;CACtB,mBAAmB;CACnB,6BAA6B;CAC7B,cAAc;CACd,cAAc;CACd,sBAAsB;CACtB,gDAAgD;CAChD,mBAAmB;AACpB;;AAEA;CACC,YAAY;CACZ,gBAAgB;CAChB,cAAc;CACd,cAAc;CACd,kDAAkD;AACnD;;CAEC;;sCAEqC;;AAEtC;CACC,cAAc;CACd,aAAa;CACb,2BAA2B;AAC5B;;AAEA;CACC,kBAAkB;CAClB,cAAc;CACd,cAAc;AACf;;AAEA;CACC,gBAAgB;CAChB,wBAAwB;AACzB;;AAEA;CACC,aAAa;CACb,YAAY;CACZ,eAAe;CACf,gBAAgB;CAChB,kBAAkB;CAClB,kBAAkB;CAClB,qBAAqB;CACrB,yBAAyB;CACzB,mCAAmC;CACnC,gBAAgB;AACjB;;AAEA;CACC,yCAAyC;AAC1C;;AAEA;CACC,aAAa;CACb,kBAAkB;CAClB,YAAY;CACZ,qBAAqB;CACrB,6CAA6C;CAC7C,kBAAkB;AACnB;;AAEA;CACC,kBAAkB;AACnB;;AAEA;;oBAEoB;;;CAGnB;;8BAE6B;;AAE9B;CACC,aAAa;CACb,sBAAsB;CACtB,uBAAuB;AACxB;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,aAAa;CACb,uBAAuB;AACxB;;AAEA;CACC,sBAAsB;CACtB,mBAAmB;CACnB,6BAA6B;CAC7B,cAAc;CACd,cAAc;CACd,sBAAsB;CACtB,gDAAgD;CAChD,mBAAmB;AACpB;;AAEA;CACC,YAAY;CACZ,gBAAgB;CAChB,cAAc;CACd,cAAc;CACd,kDAAkD;AACnD;;CAEC;;sCAEqC;;AAEtC;CACC,cAAc;CACd,2BAA2B;;AAE5B;;AAEA;CACC,kBAAkB;CAClB,cAAc;CACd,cAAc;AACf;;AAEA;CACC,gBAAgB;CAChB,wBAAwB;AACzB;;AAEA;CACC,aAAa;CACb,YAAY;CACZ,eAAe;CACf,gBAAgB;CAChB,kBAAkB;CAClB,kBAAkB;CAClB,qBAAqB;CACrB,yBAAyB;CACzB,mCAAmC;CACnC,gBAAgB;AACjB;;AAEA;CACC,yCAAyC;AAC1C;;AAEA;CACC,aAAa;CACb,kBAAkB;CAClB,YAAY;CACZ,qBAAqB;CACrB,6CAA6C;CAC7C,kBAAkB;AACnB;;AAEA;CACC,kBAAkB;AACnB;;AAEA;;+BAE+B;;CAE9B;;yCAEwC;;AAEzC;CACC,aAAa;CACb,2BAA2B;CAC3B,cAAc;CACd,eAAe;CACf,MAAM;CACN,YAAY;CACZ,2BAA2B;CAC3B,kDAAkD;AACnD;;CAEC;;iDAEgD;;AAEjD;CACC,kBAAkB;CAClB,cAAc;CACd,gBAAgB;CAChB,eAAe;AAChB;;;AAGA;CACC,kBAAkB;CAClB,OAAO;CACP,QAAQ;CACR,gCAAgC;AACjC;;;AAGA;;oCAEoC;;CAEnC;;sCAEqC;AACtC;CACC,eAAe;AAChB;;AAEA;CACC,eAAe;CACf,QAAQ;CACR,aAAa;CACb,cAAc;CACd,UAAU;CACV,2BAA2B;CAC3B,oCAAoC;CACpC,8BAA8B;CAC9B,gBAAgB;AACjB;;AAEA;CACC,aAAa;CACb,sBAAsB;AACvB;;AAEA;CACC,gBAAgB;AACjB;;AAEA;CACC,eAAe;CACf,qBAAqB;AACtB;;AAEA;CACC,YAAY;CACZ,gBAAgB;AACjB;;AAEA;CACC,oDAAoD;AACrD;;CAEC;;8CAE6C;;AAE9C;CACC,aAAa;AACd;;AAEA;CACC,iBAAiB;AAClB;;AAEA;CACC,cAAc;CACd,WAAW;CACX,kBAAkB;AACnB;;AAEA;CACC,iBAAiB;AAClB;;AAEA;CACC,aAAa;;AAEd;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,WAAW;AACZ;;AAEA;CACC,yDAAiD;CACjD,4BAA4B;CAC5B,0BAA0B;AAC3B;;AAEA;CACC,yDAAsD;CACtD,4BAA4B;CAC5B,0BAA0B;AAC3B;;AAEA;CACC,cAAc;CACd,gBAAgB;CAChB,iBAAiB;CACjB,qBAAqB;CACrB,YAAY;CACZ,oBAAoB;CACpB,yBAAyB;CACzB,mCAAmC;CACnC,gBAAgB;AACjB;;AAEA;CACC,yCAAyC;AAC1C;;AAEA;;6CAE6C;;AAE7C;CACC,aAAa;CACb,qCAAqC;CACrC,sBAAsB;AACvB;;AAEA;CACC,YAAY;AACb;;AAEA;CACC,WAAW;CACX,WAAW;AACZ;;CAEC;;qDAEoD;;AAErD;CACC,aAAa;CACb,qCAAqC;CACrC,sBAAsB;AACvB;;AAEA;CACC,aAAa;CACb,6BAA6B;CAC7B,gBAAgB;AACjB;;AAEA;CACC,UAAU;AACX;;AAEA;CACC,oDAAoD;AACrD;;AAEA;;wBAEwB;;CAEvB;;mCAEkC;;AAEnC;CACC,cAAc;AACf;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,eAAe;CACf,mBAAmB;CACnB,cAAc;CACd,gBAAgB;CAChB,2BAA2B;CAC3B,iDAAiD;AAClD;;AAEA;CACC,qCAAqC;AACtC;;AAEA;CACC,qCAAqC;AACtC;;AAEA;CACC,uBAAuB;AACxB;;AAEA;CACC,2BAA2B;CAC3B,kBAAkB;CAClB,cAAc;CACd,oBAAoB;CACpB,8CAA8C;AAC/C;;AAEA;CACC,kBAAkB;CAClB,cAAc;AACf;;AAEA;CACC,WAAW;CACX,UAAU;CACV,YAAY;CACZ,gBAAgB;AACjB;;AAEA;CACC,oDAAoD;AACrD;;CAEC;;2CAE0C;;AAE3C;CACC,gBAAgB;CAChB,cAAc;AACf;;AAEA;CACC,gBAAgB;CAChB,kBAAkB;AACnB;;AAEA;CACC,2BAA2B;CAC3B,kBAAkB;CAClB,cAAc;CACd,WAAW;AACZ;;AAEA;CACC,WAAW;CACX,UAAU;AACX;;AAEA;CACC,aAAa;CACb,YAAY;CACZ,UAAU;AACX;;AAEA;CACC,iCAAiC;AAClC;;AAEA;CACC,kCAAkC;AACnC;;AAEA;CACC,cAAc;CACd,oBAAoB;CACpB,gBAAgB;CAChB,uBAAuB;CACvB,cAAc;CACd,qBAAqB;CACrB,YAAY;CACZ,oBAAoB;CACpB,yBAAyB;CACzB,mCAAmC;CACnC,gBAAgB;AACjB;;AAEA;CACC,yCAAyC;AAC1C;;CAEC;;wCAEuC;;AAExC;CACC,kBAAkB;AACnB;;AAEA;CACC,YAAY;CACZ,UAAU;CACV,gBAAgB;AACjB;;AAEA;CACC,oDAAoD;AACrD;;AAEA;CACC,WAAW;CACX,YAAY;CACZ,YAAY;AACb;;CAEC;;gDAE+C;;AAEhD;CACC,WAAW;CACX,UAAU;CACV,mBAAmB;AACpB;;AAEA;CACC,aAAa;CACb,YAAY;CACZ,UAAU;CACV,UAAU;CACV,qCAAqC;CACrC,qCAAqC;CACrC,iBAAiB;AAClB;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,YAAY;CACZ,WAAW;AACZ;;AAEA;CACC,2BAA2B;CAC3B,kBAAkB;CAClB,cAAc;CACd,WAAW;AACZ;;AAEA;CACC,gBAAgB;AACjB;;AAEA;CACC,mBAAmB;AACpB;;AAEA;CACC,iCAAiC;AAClC;;AAEA;CACC,mCAAmC;AACpC;;AAEA;;0BAE0B;;AAE1B;CACC,eAAe;CACf,OAAO;CACP,SAAS;CACT,WAAW;CACX,sCAAsC;CACtC,yBAAyB;CACzB,kBAAkB;AACnB;;AAEA;;yBAEyB;;AAEzB;;CAEC;;6BAE4B;;CAE5B;EACC,yDAA+D;CAChE;;CAEA;;wCAEuC;;CAEvC;EACC;;;+BAG6B;CAC9B;;;CAGA;;yCAEwC;;CAExC;EACC,mBAAmB;CACpB;;CAEA;EACC,cAAc;CACf;;CAEA;EACC,yBAAyB;CAC1B;;CAEA;;8CAE6C;;CAE7C;EACC,0BAA0B;CAC3B;;AAED","sourcesContent":["/* Table of Contents\n\t1. Imports\n\t2. Global Styles\n\t\t2.1. Global Styles Variables\n\t\t\t2.1.1. Global Styles Variables-Color\n\t\t\t2.1.2. Global Styles Variables-Font\n\t\t\t2.1.3. Global Styles Images\n\t\t2.2. Global Styles Global\n\t3. pageGridContainer Styles\n\t\t3.1. pageGridContainer Global Styles\n\t\t3.2. pageGridContainer Target Element Styles\n\t4. Sign-in Styles\n\t\t4.1. Sign-in Global Styles\n\t\t4.2. Sign-in Target Element Styles\n\t5. Sign-Up Styles\n\t\t5.1. Sign-Up Global Styles\n\t\t5.2. Sign-Up Target Element Styles\n\t6. Navigation Section Styles\n\t\t6.1. Navigation Section Global Styles\n\t\t6.2. Navigation Section Target Element Styles\n\t7. Navigation Menu Section Styles\n\t\t7.1. Navigation Menu Global Styles\n\t\t7.2. Navigation Menu Target Element Styles\n\t\t7.3. Navigation Edit Section Global Styles\n\t\t7.4. Navigation Edit Section Target Element Styles\n\t8. Main Section Styes\n\t\t8.1. Main Section Global Styles\n\t\t8.2. Main Section Target Element Styles\n\t\t8.3. Main Edit Section Global Styles\n\t\t8.4. Main Edit Section Target Element Styles\n\t*. Footer Style Section\n\t*. Media Query Section\n\t\t*.1. Global Media Queries\n\t\t*.2. pageGridContainer Media Queries\n\t\t*.3. Navigation Section Media Queries\n\t\t*.4. Navigation Menu Section Media Queries\n\n*/\n\n/*\t==========\n\t1. Imports\n\t========== */\n\n@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\n\n/*\t================\n\t2. Global Styles\n\t================ */\n\n\t/*\t============================\n\t\t2.1. Global Styles Variables\n\t\t============================ */\n\n:root{\n\n\t\t/*\t====================================\n\t\t\t2.1.1. Global Styles Variables-Color\n\t\t \t==================================== */\n\n\t--clr-primary:rgb(255,255,255);\n\t--clr-primary-opacity-light:rgb(255,255,255, 0.6);\n\t--clr-primary-opacity-mid:rgb(255,255,255, 0.8);\n\t--clr-primary-opacity-dark:rgb(255,255,255, 0.9);\n\n\t--clr-secondary:rgb(14, 9, 9);\n\t--clr-secondary-opacity-light:rgb(14, 9, 9, 0.28);\n\t--clr-secondary-opacity-mid:rgb(14, 9, 9, 0.4);\n\t--clr-secondary-opacity-dark:rgb(14, 9, 9, 0.5);\n\n\t--clr-accent:rgb(174,31,66);\n\t--clr-accent-light:rgb(224,60,101);\n\t\t\t\n\t\t/*\t===================================\n\t\t\t2.1.2. Global Styles Variables-Font\n\t\t \t=================================== */\n\n\t--ff-primary:'Roboto', sans-serif;\n\n\t/*\t\t===========================\n\t\t\t2.1.3. Global Styles Images\n\t\t \t=========================== */\n\n\t--img-trash:url('./images/icons8-trash-can.svg');\n\t--img-edit:url('./images/icons8-edit.svg');\n\t--img-done:url('./images/icons8-done.svg');\n\t--img-cancel:url('./images/icons8-cancel.svg');\n}\n\n\t.edit,.delete,.done,.cancel{\n\t\tbackground-repeat: no-repeat;\n\t\tbackground-size: 100% 100%;\n\t}\n\n\t/*\t=========================\n\t\t2.2. Global Styles Global\n\t\t========================= */\n/* \n\tCSS Styling Reset from\n\thttp://meyerweb.com/eric/tools/css/reset/ \n   \tv2.0 | 20110126\n   \tLicense: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\n\nbody {\n\tline-height: 1;\n\tmin-height: 100vh;\n\tfont-family: var(--ff-primary);\n\ttext-align: center;\n\tbackground-image: url('./images/ToDoAppBackground-cropped-mobile.jpg');\n\tbackground-repeat: no-repeat;\n\tbackground-size: 100% 100%; \n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/*\t===========================\n\t3. pageGridContainer Styles\n\t=========================== */\n\n\t/*\t====================================\n\t\t3.1. pageGridContainer Global Styles\n\t\t==================================== */\n\n#pageGridContainer{\n\tdisplay: grid;\n\tgrid-template-columns: repeat(4, 1fr) ;\n  \tgrid-template-rows: auto;\n  \tgrid-template-areas: \n    \"header header header header\"\n    \"main main main main\"\n    \"footer footer footer footer\";\n}\n\n\t/*\t============================================\n\t\t3.2. pageGridContainer Target Element Styles\n\t\t============================================ */\n\n#navSection{\n\tgrid-area: header;\n}\n#navMenuSection{\n\tgrid-area: sidebar;\n}\n#mainSection{\n\tgrid-area: main;\n}\n#footerSection{\n\tgrid-area: footer;\n}\n\n/*\t=================\n\t4. Sign-in Styles\n\t================= */\n\n\t/*\t==========================\n\t\t4.1. Sign-in Global Styles\n\t\t========================== */\n\nform{\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n}\n\n#signIn-Container-Inner, #signIn-Container-Outer{\n\tdisplay: flex;\n}\n\n#signIn-Container-Outer{\n\theight: 100vh;\n\tjustify-content: center;\n}\n\n#signIn-Container-Inner{\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: space-evenly;\n\tmin-width: 35%;\n\tmax-width: 80%;\n\tmargin: 8.5em 3em 13em;\n\tbackground-color: var(--clr-primary-opacity-mid);\n\tborder-radius: 23px;\n}\n\n#signIn-Form-Container{\n\tmargin:0 1em;\n\tpadding: 1.5em 0;\n\tmin-width: 60%;\n\tmax-width: 80%;\n\tbackground-color: var(--clr-secondary-opacity-mid);\n}\n\n\t/*\t==================================\n\t\t4.2. Sign-in Target Element Styles\n\t\t================================== */\n\n#appTitle{\n\tfont-size: 2em;\n\tmargin: 0.5em;\n\tcolor: var(--clr-secondary);\n}\n\nform > input, form > label{\n\talign-self: center;\n\tmin-width: 60%;\n\tmax-width: 80%;\n}\n\nform >label{\n\tfont-size: 1.5em;\n\tcolor:var(--clr-primary);\n}\n\ninput[type=button], #demoButton{\n\tmargin: 0.3em;\n\tborder: none;\n\tcursor: pointer;\n\tfont-size: 1.2em;\n\tpadding: 0.3em 3em;\n\tborder-radius: 1em;\n\ttext-decoration: none;\n\tcolor: var(--clr-primary);\n\tbackground-color: var(--clr-accent);\n\ttransition: 0.5s;\n}\n\ninput[type=button]:hover, #demoButton:hover{\n\tbackground-color: var(--clr-accent-light);\n}\n\ninput[type=text]{\n\tmargin: 0.5em;\n\tpadding: 0.5em 1em;\n\tborder: none;\n\ttext-decoration: none;\n\tbackground: var(--clr-secondary-opacity-dark);\n\tborder-radius: 1em;\n}\n\n#demoButton{\n\tpadding: 0.3em 2em;\n}\n\n/*\t=================\n\t5. Sign-Up Styles\n\t================= */\n\n\n\t/*\t==========================\n\t\t5.1. Sign-Up Global Styles\n\t\t========================== */\n\nform{\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n}\n\n#signUp-Container-Inner, #signUp-Container-Outer{\n\tdisplay: flex;\n}\n\n#signUp-Container-Outer{\n\theight: 100vh;\n\tjustify-content: center;\n}\n\n#signUp-Container-Inner{\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: space-evenly;\n\tmin-width: 35%;\n\tmax-width: 80%;\n\tmargin: 8.5em 3em 13em;\n\tbackground-color: var(--clr-primary-opacity-mid);\n\tborder-radius: 23px;\n}\n\n#signUp-Form-Container{\n\tmargin:0 1em;\n\tpadding: 1.5em 0;\n\tmin-width: 60%;\n\tmax-width: 80%;\n\tbackground-color: var(--clr-secondary-opacity-mid);\n}\n\t\t\n\t/*\t==================================\n\t\t5.2. Sign-Up Target Element Styles\n\t\t================================== */\n\t\t\n#appTitle{\n\tfont-size: 2em;\n\tcolor: var(--clr-secondary);\n\t\n}\n\nform > input, form > label{\n\talign-self: center;\n\tmin-width: 60%;\n\tmax-width: 80%;\n}\n\nform >label{\n\tfont-size: 1.5em;\n\tcolor:var(--clr-primary);\n}\n\ninput[type=button], #demoButton{\n\tmargin: 0.3em;\n\tborder: none;\n\tcursor: pointer;\n\tfont-size: 1.2em;\n\tpadding: 0.3em 3em;\n\tborder-radius: 1em;\n\ttext-decoration: none;\n\tcolor: var(--clr-primary);\n\tbackground-color: var(--clr-accent);\n\ttransition: 0.5s;\n}\n\ninput[type=button]:hover, #demoButton:hover{\n\tbackground-color: var(--clr-accent-light);\n}\n\ninput[type=text]{\n\tmargin: 0.5em;\n\tpadding: 0.5em 1em;\n\tborder: none;\n\ttext-decoration: none;\n\tbackground: var(--clr-secondary-opacity-dark);\n\tborder-radius: 1em;\n}\n\n#demoButton{\n\tpadding: 0.3em 2em;\n}\n\n/*\t============================\n\t6. Navigation Section Styles\n\t============================ */\n\t\n\t/*\t=====================================\n\t\t6.1. Navigation Section Global Styles\n\t\t===================================== */\n\n#navSection{\n\tdisplay: flex;\n\tjustify-content: flex-start;\n\tfont-size: 2em;\n\tposition: fixed;\n\ttop: 0;\n\twidth: 100vw;\n\tcolor: var(--clr-secondary);\n\tbackground-color: var(--clr-primary-opacity-light);\n}\n\n\t/*\t=============================================\n\t\t6.2. Navigation Section Target Element Styles\n\t\t============================================= */\n\n#navSection >h1{\n\tmargin-left: 0.2em;\n\tfont-size: 2em;\n\ttransition: 0.5s;\n\tcursor: pointer;\n}\n\n\n#navSection >h2{\n\tposition: absolute;\n\ttop:50%;\n\tleft:50%;\n\ttransform: translate(-50%, -50%);\n}\n\n\n/*\t=================================\n\t7. Navigation Menu Section Styles\n\t================================= */\n\n\t/*\t==================================\n\t\t7.1. Navigation Menu Global Styles\n\t\t================================== */\n#navMenuSection>*{\n\tmargin-top: 1em;\n}\n\n#navMenuSection{\n\tposition: fixed;\n\ttop: 2em;\n\theight: 100vh;\n\tfont-size: 2em;  \n\twidth: 25%;\n\tcolor: var(--clr-secondary);\n\tbackground-color: var(--clr-primary);\n\ttransform: translate(-100%, 0);\n\ttransition: 0.5s;\n}\n\n#dateSelector{\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n#projectSelector{\n\tfont-size: 0.5em;\n}\n\n#projectSelector>ul{\n\tmargin: 0em 1em;\n\tlist-style-type: disc;\n}\n\n#projectSelector>ul>section>*{\n\tflex-grow: 1;\n\ttransition: 0.5s;\n}\n\n#projectSelector>ul>section>*:hover{\n\tbackground-color: var(--clr-secondary-opacity-light);\n}\n\n\t/*\t==========================================\n\t\t7.2. Navigation Menu Target Element Styles\n\t\t========================================== */\n\n#defaultSelector > h2{\n\tmargin: 0.5em;\n}\n\n#dateSelector > p{\n\tfont-size: 0.75em;  \n}\n\n#dateSelector>input{\n\tdisplay: block;\n\tmargin: 1em;\n\ttext-align: center;\n}\n\n#projectSelector>h2{\n\tfont-size: 1.75em;\n}\n\n#projectSelector>ul>li{\n\tmargin: 0.5em;\n\n}\n\n#projectSelector>ul>section{\n\tdisplay: flex;\n\tflex-direction: row;\n\theight: 2em;\n}\n\n#projectSelector>ul>section>.edit{\n\tbackground-image: url('./images/icons8-edit.svg');\n\tbackground-repeat: no-repeat;\n\tbackground-size: 100% 100%;\n}\n\n#projectSelector>ul>section>.delete{\n\tbackground-image: url('./images/icons8-trash-can.svg');\n\tbackground-repeat: no-repeat;\n\tbackground-size: 100% 100%;\n}\n\n#projectSelector>ul>.addProject{\n\tpadding: 0.6em;\n\tfont-size: 1.2em;\n\tmargin-top: 0.5em;\n\ttext-decoration: none;\n\tborder: none;\n\tborder-radius: 0.5em;\n\tcolor: var(--clr-primary);\n\tbackground-color: var(--clr-accent);\n\ttransition: 0.5s;\n}\n\n#projectSelector>ul>.addProject:hover{\n\tbackground-color: var(--clr-accent-light);\n}\n\n/*\t==========================================\n\t7.3. Navigation Edit Section Global Styles\n\t========================================== */\n\n#editProjectContainer{\n\tdisplay: flex;\n\tborder: 0.2em inset var(--clr-accent);\n\tflex-direction: column;\n}\n\n#editProjectContainer>*{\n\tflex-grow: 1;\n}\n\n#editProjectContainer>.done-cancelSection>*{\n\twidth: 100%;\n\theight: 2em;\n}\n\n\t/*\t==============================================\n\t7.4. Navigation Edit Section Target Element Styles\n\t================================================== */\n\n#editProjectContainer{\n\tdisplay: flex;\n\tborder: 0.2em inset var(--clr-accent);\n\tflex-direction: column;\n}\n\n#editProjectContainer>.done-cancelSection{\n\tdisplay: flex;\n\tjustify-content: space-evenly;\n\ttransition: 0.5s;\n}\n\n#editProjectContainer>.editTaskSelect>input{\n\twidth: 80%;\n}\n\n#editProjectContainer>.done-cancelSection>*:hover{\n\tbackground-color: var(--clr-secondary-opacity-light);\n}\n\n/*\t=====================\n\t8. Main Section Styes\n\t===================== */\n\n\t/*\t===============================\n\t\t8.1. Main Section Global Styles\n\t\t=============================== */\n\n#mainSection>*{\n\tmin-width: 80%;\n}\n\n#mainSection, .items, .tasks{\n\tdisplay: grid;\n}\n\n#mainSection{\n\tdisplay: flex;\n\tflex-direction: column;\n\tmargin-top: 3em;\n\tpadding-bottom: 2em;\n\tgap: 0.5em 0em;\n\tfont-size: 1.5em;\n\tcolor: var(--clr-secondary);\n\tbackground-color: var(--clr-primary-opacity-dark);\n}\n\n.items{\n\tgrid-template-columns: repeat(3, 1fr);\n}\n\n.tasks{\n\tgrid-template-columns: repeat(4, 1fr);\n}\n\n.items > *{\n\tgrid-column: 1 / span 3;\n}\n\n.items{\n\tcolor: var(--clr-secondary);\n\tplace-self: center;\n\tgap: 0.5em 0em;\n\tmargin-bottom: 0.5em;\n\tbackground: var(--clr-secondary-opacity-light);\n}\n\n.tasks>*{\n\tplace-self: center;\n\tpadding: 0.2em;\n}\n\n.tasks>section>*{\n\theight: 2em;\n\twidth: 2em;\n\tflex-grow: 1;\n\ttransition: 0.5s;\n}\n\n.tasks>section>*:hover{\n\tbackground-color: var(--clr-secondary-opacity-light);\n}\n\n\t/*\t=======================================\n\t\t8.2. Main Section Target Element Styles\n\t\t======================================= */\n\n#mainSection > h2{\n\tfont-size: 1.5em;\n\tpadding: 0.5em;\n}\n\n.items>h2{\n\tfont-size: 1.5em;\n\tpadding-top: 0.2em;\n}\n\n.tasks>label{\n\tcolor: var(--clr-secondary);\n\tplace-self: center;\n\tfont-size: 1em;\n\twidth: 100%;\n}\n\n.tasks>input{\n\theight: 2em;\n\twidth: 2em;\n}\n\n.tasks>section{\n\tdisplay: flex;\n\theight: 100%;\n\twidth:100%;\n}\n\n.edit{\n\tbackground-image: var(--img-edit);\n}\n\n.delete{\n\tbackground-image: var(--img-trash);\n}\n\n.addTask{\n\tpadding: 0.6em;\n\tmargin-bottom: 0.5em;\n\tfont-size: 0.8em;\n\tjustify-content: center;\n\tgrid-column: 2;\n\ttext-decoration: none;\n\tborder: none;\n\tborder-radius: 0.5em;\n\tcolor: var(--clr-primary);\n\tbackground-color: var(--clr-accent);\n\ttransition: 0.5s;\n}\n\n.addTask:hover{\n\tbackground-color: var(--clr-accent-light);\n}\n\n\t/*\t====================================\n\t\t8.3. Main Edit Section Global Styles\n\t\t==================================== */\n\n#editTask>*{\n\tplace-self: center;\n}\n\n#editTask>section>*{\n\theight: auto;\n\twidth: 90%;\n\ttransition: 0.5s;\n}\n\n#editTask>.done-cancelSection>*:hover{\n\tbackground-color: var(--clr-secondary-opacity-light);\n}\n\n#editTask>.done-cancelSection>*{\n\twidth: auto;\n\theight: auto;\n\tflex-grow: 1;\n}\n\n\t/*\t============================================\n\t\t8.4. Main Edit Section Target Element Styles\n\t\t============================================ */\n\n#editTaskContainer{\n\twidth: 100%;\n\tpadding: 0;\n\tgrid-column: span 4;\n}\n\n#editTask{\n\tdisplay: grid;\n\tmargin: auto;\n\twidth: 80%;\n\tpadding: 0;\n\tborder: 0.2em inset var(--clr-accent);\n\tgrid-template-columns: repeat(4, 1fr);\n\tcolumn-gap: 0.5em;\n}\n\n#editTask>section{\n\tdisplay: flex;\n\tflex-direction: column;\n\theight: 100%;\n\twidth: 100%;\n}\n\n#editTask>section>label{\n\tcolor: var(--clr-secondary);\n\tplace-self: center;\n\tfont-size: 1em;\n\twidth: 100%;\n}\n\n#editTask>section>textarea{\n\tresize: vertical;\n}\n\n#editTask>.done-cancelSection{\n\tflex-direction: row;\n}\n\n.done{\n\tbackground-image: var(--img-done);\n}\n\n.cancel{\n\tbackground-image: var(--img-cancel);\n}\n\n/*\t=======================\n\t*. Footer Style Section\n\t======================= */\n\n#footerSection{\n\tposition: fixed;\n\tleft: 0;\n\tbottom: 0;\n\twidth: 100%;\n\tbackground-color: var(--clr-secondary);\n\tcolor: var(--clr-primary);\n\ttext-align: center;\n}\n\n/*\t======================\n\t*. Media Query Section\n\t====================== */\n\n@media only screen and (min-width: 750px) {\n\n\t/*\t=========================\n\t\t*.1. Global Media Queries\n\t\t========================= */\n\n\tbody {\n\t\tbackground-image: url('./images/ToDoAppBackground-cropped.jpg');\n\t}\n\n\t/*\t====================================\n\t\t*.2. pageGridContainer Media Queries\n\t\t==================================== */\n\n\t#pageGridContainer{\n\t\tgrid-template-areas: \n\t\t\"header header header header\"\n\t\t\"sidebar main main main\"\n\t\t\"footer footer footer footer\";\n\t}\n\n\n\t/*\t=====================================\n\t\t*.3. Navigation Section Media Queries\n\t\t===================================== */\n\n\t#mainSection{\n\t\tmargin: 3em 1em 0em;\n\t}\n\n\t#mainSection>*{\n\t\tmin-width: 75%;\n\t}\n\n\t#navSection>h1{\n\t\ttransform: rotate(135deg);\n\t}\n\n\t/*\t==========================================\n\t\t*.4. Navigation Menu Section Media Queries\n\t\t========================================== */\n\n\t#navMenuSection{\n\t\ttransform: translate(0, 0);\n\t}\n\n}"],"sourceRoot":""}]);
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

/***/ "./src/global.js":
/*!***********************!*\
  !*** ./src/global.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "globaljs": () => (/* binding */ globaljs)
/* harmony export */ });
const globaljs = (() => {    
    //Function List
    const newElement = (item) => {
        let element = document.createElement(item.tag);
        if (item.htmlString) { element.innerHTML = item.htmlString; };
        if (item.classId) { element.setAttribute('class', item.classId)};
        if (item.id) { element.setAttribute('id', item.id)};
        if (item.for) { element.setAttribute('for', item.for)};
        if (item.type) { element.setAttribute('type', item.type)};
        if (item.name) { element.setAttribute('name', item.name)};
        if (item.value) { element.setAttribute('value', item.value)};
        return element;
    };

    return {newElement:newElement}
})()

/***/ }),

/***/ "./src/signInSectionFiles/signInSectionCreation.js":
/*!*********************************************************!*\
  !*** ./src/signInSectionFiles/signInSectionCreation.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "signInSectionCreation": () => (/* binding */ signInSectionCreation)
/* harmony export */ });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global */ "./src/global.js");


const signInSectionCreation = (() => {
    const cacheDom = (() => {
        let body = document.getElementsByTagName('body');
        return { body: body };
    })();

    //Sign in Object List
    const SignInObjectList = {

        signInContainerOuter: {
            tag: 'div',
            id: 'signIn-Container-Outer',
        },

        signInContainerInner: {
            tag: 'div',
            id: 'signIn-Container-Inner',
        },

        appTitle: {
            tag: 'h2',
            id: 'appTitle',
            htmlString: 'Welcome to Checkist',
        },

        signInFormContainer: {
            tag: 'div',
            id: 'signIn-Form-Container',
        },

        signinForm: {
            tag: 'form',
            id: 'userInfo',
        },

        userInfo: {
            usernameLabel: {
                tag: 'label',
                for: 'userName',
                htmlString: 'Username',
            },
            usernameInput: {
                tag: 'input',
                id: 'userName',
                type: 'text',
                name: 'userName',
            },
            passwordLabel: {
                tag: 'label',
                for: 'password',
                htmlString: 'Password',
            },
            passwordInput: {
                tag: 'input',
                id: 'password',
                type: 'text',
                name: 'password',
            },
            signinButton: {
                tag: 'input',
                id:'signInButton',
                type: 'button',
                value: 'Sign In',
            },
            signupButton: {
                tag: 'input',
                id:'signUpButton',
                type: 'button',
                value: 'Sign Up',
            },
        },

        demoButton: {
            tag: 'button',
            id: 'demoButton',
            htmlString: 'Demo',
        },

    };
    
    //Fuction List

    //Return Form Element Contents as list
    const formElementContentList = () => {
        let contentList = [];

        for (let i = 0; i < Object.keys(SignInObjectList.userInfo).length; i++) {
            let element = _global__WEBPACK_IMPORTED_MODULE_0__.globaljs.newElement(SignInObjectList.userInfo[Object.keys(SignInObjectList.userInfo)[i]]);
            contentList.push(element);
        };
        return contentList;
    };
      
    //Returns Form Element Section
    const formElementSection = () => {
        let contentList = formElementContentList(),
            element = _global__WEBPACK_IMPORTED_MODULE_0__.globaljs.newElement(SignInObjectList.signinForm);

        for (let i = 0; i < contentList.length; i++) {
            element.appendChild(contentList[i]);
        };

        return element;
    };

    //Returns Sign In Form Container Section
    const signInFormContainerSection = () => {
        let element = _global__WEBPACK_IMPORTED_MODULE_0__.globaljs.newElement(SignInObjectList.signInFormContainer);

        element.appendChild(formElementSection());

        return element;
    };

    //Returns Sign In Container Inner Section
    const signInContainerInnerSection = () => {
        let containerElement = _global__WEBPACK_IMPORTED_MODULE_0__.globaljs.newElement(SignInObjectList.signInContainerInner),
            h2Element = _global__WEBPACK_IMPORTED_MODULE_0__.globaljs.newElement(SignInObjectList.appTitle),
            buttonElement = _global__WEBPACK_IMPORTED_MODULE_0__.globaljs.newElement(SignInObjectList.demoButton),
            signInFormContainer = signInFormContainerSection(),
            elementList = [h2Element, signInFormContainer, buttonElement];

        for (let i = 0; i < elementList.length; i++) {
            containerElement.appendChild(elementList[i]);
        };

        return containerElement;
    };

    //Returns Sign In Container Outer Section
    const signInContainerOuterSection = () => {
        let element = _global__WEBPACK_IMPORTED_MODULE_0__.globaljs.newElement(SignInObjectList.signInContainerOuter),
        signInContainerInner = signInContainerInnerSection();

        element.appendChild(signInContainerInner);

        return element;
    };

    // Sign In section Creation
    const createSection = () =>{
        let element = signInContainerOuterSection();

        render.bodyAppendChild(element);
    };


    // Render to DOM
    const render = (() => {
        const bodyAppendChild = (element) =>{
            cacheDom.body[0].appendChild(element);
        };

        return {bodyAppendChild: bodyAppendChild };
    })();

    return{createSection:createSection,render:render};
})();

/***/ }),

/***/ "./src/signInSectionFiles/signInSectionFunction.js":
/*!*********************************************************!*\
  !*** ./src/signInSectionFiles/signInSectionFunction.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "signInSectionFunction": () => (/* binding */ signInSectionFunction)
/* harmony export */ });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global */ "./src/global.js");
/* harmony import */ var _userStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../userStorage */ "./src/userStorage.js");

  
// window.localStorage.setItem("Andrew", JSON.stringify(Andrew));

// let newObject = window.localStorage.getItem("Andrew");
// console.log(JSON.parse(newObject));


// let info = document.getElementById('userInfo')

// console.log(info.elements['userName'].value)



// let test = () => {
//     if(window.localStorage.getItem(info.elements['userName'].value) == null){
//         console.log('This is not a username')
//     }else{
//         console.log('This Matches')
//         console.log(window.localStorage.getItem(info.elements['userName'].value))
//         let test2 = JSON.parse(window.localStorage.getItem(info.elements['userName'].value))
//         console.log(test2.password)
//     }
// }


// let test2 = (x) => {
//     if(window.localStorage.getItem(info.elements['userName'].value) == null){
//         console.log('This is not a username')
//     }else{
//         console.log('This Matches')
//         console.log(window.localStorage.getItem(info.elements['userName'].value))
//     }
// }

// test()

// window.localStorage.clear()



// This Sign in module has to handle:
//      -verification
//      -Sign-in using data from Local Storage or use Defaults from Demo
//      -Sign-up page creation/display when needed
//      -adding created Sign-in to storage (Most likely using a fuction in the userStorage Module)
//      -Demo Buttton needs to run a function from Main Section module using the Demo user data




const signInSectionFunction = (() => {
    const cacheDom = (() => {
        let body = document.getElementsByTagName('body')
        return { body: body};
    })();
    
    // Info Object List
    const users = {
        userList:['Andrew'],

        Andrew:{
            userID:'Andrew',
            password : "Andrew",
            userStorageInfo: 'Demo'
        }
        
      };

    //Event Binds

    
    //Function List
    const cacheDomTestFunction = () => {
        let info = document.getElementById('userInfo')
            signInButton = document.getElementById('signInButton')
            signUpButton = document.getElementById('signUpButton')

        

        const testFunction = () =>{
            if(users.userList.includes(info.elements['userName'].value)){
                console.log('User Id match')

                if(users[info.elements['userName'].value].password == info.elements['password'].value){
                    console.log('Password Match')
                }else{
                    console.log('Password does not match')
                }

            }else{
                console.log('User ID does not match')
            }
        }

        signInButton.addEventListener('click', testFunction)
        
    };

    // Render to DOM
    const render = (() => {
        const bodyAppendChild = (element) =>{
            cacheDom.body[0].appendChild(element);
        };

        return {bodyAppendChild: bodyAppendChild };
    })();



    return{render:render,cacheDomTestFunction:cacheDomTestFunction}


})()


/***/ }),

/***/ "./src/userStorage.js":
/*!****************************!*\
  !*** ./src/userStorage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "userStorage": () => (/* binding */ userStorage)
/* harmony export */ });
const userStorage = (() =>{
    const Demo = {
        password : "Demo",
        projectTitles : ['Home Chores', 'Work', 'Food Prep'],

        item0:{
            taskList:['Laundry', 'Vacuum', 'Dishes'],
            tasks:{
                task0:{
                    dueDate:'11/26/22',
                    complete: false,
                    notes:'Gather sheets as Well'
                },
                task1:{
                    dueDate:'11/26/22',
                    complete: false,
                    notes:'Be sure to get under Bed'
                },
                task2:{
                    dueDate:'11/26/22',
                    complete: false,
                    notes:'Gather dishes from Desk'
                }
            }
        },
        item1:{
            taskList:['Check E-mail', 'Update Project', 'Team Meeting'],
            tasks:{
                task0:{
                    dueDate:'11/26/22',
                    complete: false,
                    notes:'See if Frank replied'
                },
                task1:{
                    dueDate:'11/26/22',
                    complete: false,
                    notes:'Be sure to include updates from previous Team meeting'
                },
                task2:{
                    dueDate:'11/26/22',
                    complete: false,
                    notes:'Clarify any new Update During meeting'
                }
            }
        },
        item2:{
            taskList:['Thaw Meat', 'Cut Vegetables', 'Cook Rice'],
            tasks:{
                task0:{
                    dueDate:'11/26/22',
                    complete: false,
                    notes:'Set Meet in fridge for next day'
                },
                task1:{
                    dueDate:'11/26/22',
                    complete: false,
                    notes:'Potatoes cut in fourths'
                },
                task2:{
                    dueDate:'11/26/22',
                    complete: false,
                    notes:'Be sure mostt water is evaporated'
                }
            }
        }, 
      }
      return {Demo:Demo}
})()

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

/***/ }),

/***/ "./src/images/icons8-cancel.svg":
/*!**************************************!*\
  !*** ./src/images/icons8-cancel.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "40dacab61a45232c166b.svg";

/***/ }),

/***/ "./src/images/icons8-done.svg":
/*!************************************!*\
  !*** ./src/images/icons8-done.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a19b9f7e8efd5c985905.svg";

/***/ }),

/***/ "./src/images/icons8-edit.svg":
/*!************************************!*\
  !*** ./src/images/icons8-edit.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a51c4b606844eb183d59.svg";

/***/ }),

/***/ "./src/images/icons8-trash-can.svg":
/*!*****************************************!*\
  !*** ./src/images/icons8-trash-can.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dc8f227ef28846847f96.svg";

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
/* harmony import */ var _userStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userStorage */ "./src/userStorage.js");
/* harmony import */ var _signInSectionFiles_signInSectionFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signInSectionFiles/signInSectionFunction */ "./src/signInSectionFiles/signInSectionFunction.js");
/* harmony import */ var _signInSectionFiles_signInSectionCreation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signInSectionFiles/signInSectionCreation */ "./src/signInSectionFiles/signInSectionCreation.js");
// This is just a place Holder




// console.log('Now time for the JS')

_signInSectionFiles_signInSectionCreation__WEBPACK_IMPORTED_MODULE_3__.signInSectionCreation.createSection();

_signInSectionFiles_signInSectionFunction__WEBPACK_IMPORTED_MODULE_2__.signInSectionFunction.cacheDomTestFunction()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFNBQVMsT0FBTyxRQUFRLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxNQUFNLFFBQVEsTUFBTSxVQUFVLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxRQUFRLE9BQU8sUUFBUSxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sUUFBUSxNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsUUFBUSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksUUFBUSxNQUFNLFFBQVEsT0FBTyxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFFBQVEsTUFBTSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFFBQVEsTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sTUFBTSxRQUFRLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sTUFBTSxRQUFRLE9BQU8sUUFBUSxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFFBQVEsTUFBTSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxRQUFRLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxRQUFRLE1BQU0sVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFB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RDtBQUNBOztBQUVBO0FBQ0E7OztBQUdBOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVxQztBQUNROztBQUV0QztBQUNQO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCO0FBQ2hCLEtBQUs7Ozs7QUFJTCxXQUFXOzs7QUFHWCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNqSE07QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxjQUFjO0FBQ2QsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkVEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDcUI7QUFDdUI7QUFDdUM7QUFDQTtBQUNuRjs7QUFFQSwwR0FBbUM7O0FBRW5DLGlIQUEwQyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zaWduSW5TZWN0aW9uRmlsZXMvc2lnbkluU2VjdGlvbkNyZWF0aW9uLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3NpZ25JblNlY3Rpb25GaWxlcy9zaWduSW5TZWN0aW9uRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvdXNlclN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9pY29uczgtdHJhc2gtY2FuLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2ljb25zOC1lZGl0LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2ljb25zOC1kb25lLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2ljb25zOC1jYW5jZWwuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvVG9Eb0FwcEJhY2tncm91bmQtY3JvcHBlZC1tb2JpbGUuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvVG9Eb0FwcEJhY2tncm91bmQtY3JvcHBlZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBUYWJsZSBvZiBDb250ZW50c1xcblxcdDEuIEltcG9ydHNcXG5cXHQyLiBHbG9iYWwgU3R5bGVzXFxuXFx0XFx0Mi4xLiBHbG9iYWwgU3R5bGVzIFZhcmlhYmxlc1xcblxcdFxcdFxcdDIuMS4xLiBHbG9iYWwgU3R5bGVzIFZhcmlhYmxlcy1Db2xvclxcblxcdFxcdFxcdDIuMS4yLiBHbG9iYWwgU3R5bGVzIFZhcmlhYmxlcy1Gb250XFxuXFx0XFx0XFx0Mi4xLjMuIEdsb2JhbCBTdHlsZXMgSW1hZ2VzXFxuXFx0XFx0Mi4yLiBHbG9iYWwgU3R5bGVzIEdsb2JhbFxcblxcdDMuIHBhZ2VHcmlkQ29udGFpbmVyIFN0eWxlc1xcblxcdFxcdDMuMS4gcGFnZUdyaWRDb250YWluZXIgR2xvYmFsIFN0eWxlc1xcblxcdFxcdDMuMi4gcGFnZUdyaWRDb250YWluZXIgVGFyZ2V0IEVsZW1lbnQgU3R5bGVzXFxuXFx0NC4gU2lnbi1pbiBTdHlsZXNcXG5cXHRcXHQ0LjEuIFNpZ24taW4gR2xvYmFsIFN0eWxlc1xcblxcdFxcdDQuMi4gU2lnbi1pbiBUYXJnZXQgRWxlbWVudCBTdHlsZXNcXG5cXHQ1LiBTaWduLVVwIFN0eWxlc1xcblxcdFxcdDUuMS4gU2lnbi1VcCBHbG9iYWwgU3R5bGVzXFxuXFx0XFx0NS4yLiBTaWduLVVwIFRhcmdldCBFbGVtZW50IFN0eWxlc1xcblxcdDYuIE5hdmlnYXRpb24gU2VjdGlvbiBTdHlsZXNcXG5cXHRcXHQ2LjEuIE5hdmlnYXRpb24gU2VjdGlvbiBHbG9iYWwgU3R5bGVzXFxuXFx0XFx0Ni4yLiBOYXZpZ2F0aW9uIFNlY3Rpb24gVGFyZ2V0IEVsZW1lbnQgU3R5bGVzXFxuXFx0Ny4gTmF2aWdhdGlvbiBNZW51IFNlY3Rpb24gU3R5bGVzXFxuXFx0XFx0Ny4xLiBOYXZpZ2F0aW9uIE1lbnUgR2xvYmFsIFN0eWxlc1xcblxcdFxcdDcuMi4gTmF2aWdhdGlvbiBNZW51IFRhcmdldCBFbGVtZW50IFN0eWxlc1xcblxcdFxcdDcuMy4gTmF2aWdhdGlvbiBFZGl0IFNlY3Rpb24gR2xvYmFsIFN0eWxlc1xcblxcdFxcdDcuNC4gTmF2aWdhdGlvbiBFZGl0IFNlY3Rpb24gVGFyZ2V0IEVsZW1lbnQgU3R5bGVzXFxuXFx0OC4gTWFpbiBTZWN0aW9uIFN0eWVzXFxuXFx0XFx0OC4xLiBNYWluIFNlY3Rpb24gR2xvYmFsIFN0eWxlc1xcblxcdFxcdDguMi4gTWFpbiBTZWN0aW9uIFRhcmdldCBFbGVtZW50IFN0eWxlc1xcblxcdFxcdDguMy4gTWFpbiBFZGl0IFNlY3Rpb24gR2xvYmFsIFN0eWxlc1xcblxcdFxcdDguNC4gTWFpbiBFZGl0IFNlY3Rpb24gVGFyZ2V0IEVsZW1lbnQgU3R5bGVzXFxuXFx0Ki4gRm9vdGVyIFN0eWxlIFNlY3Rpb25cXG5cXHQqLiBNZWRpYSBRdWVyeSBTZWN0aW9uXFxuXFx0XFx0Ki4xLiBHbG9iYWwgTWVkaWEgUXVlcmllc1xcblxcdFxcdCouMi4gcGFnZUdyaWRDb250YWluZXIgTWVkaWEgUXVlcmllc1xcblxcdFxcdCouMy4gTmF2aWdhdGlvbiBTZWN0aW9uIE1lZGlhIFF1ZXJpZXNcXG5cXHRcXHQqLjQuIE5hdmlnYXRpb24gTWVudSBTZWN0aW9uIE1lZGlhIFF1ZXJpZXNcXG5cXG4qL1xcblxcbi8qXFx0PT09PT09PT09PVxcblxcdDEuIEltcG9ydHNcXG5cXHQ9PT09PT09PT09ICovXFxuXFxuLypcXHQ9PT09PT09PT09PT09PT09XFxuXFx0Mi4gR2xvYmFsIFN0eWxlc1xcblxcdD09PT09PT09PT09PT09PT0gKi9cXG5cXG5cXHQvKlxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHRcXHQyLjEuIEdsb2JhbCBTdHlsZXMgVmFyaWFibGVzXFxuXFx0XFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbjpyb290e1xcblxcblxcdFxcdC8qXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0XFx0XFx0Mi4xLjEuIEdsb2JhbCBTdHlsZXMgVmFyaWFibGVzLUNvbG9yXFxuXFx0XFx0IFxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcblxcdC0tY2xyLXByaW1hcnk6cmdiKDI1NSwyNTUsMjU1KTtcXG5cXHQtLWNsci1wcmltYXJ5LW9wYWNpdHktbGlnaHQ6cmdiKDI1NSwyNTUsMjU1LCAwLjYpO1xcblxcdC0tY2xyLXByaW1hcnktb3BhY2l0eS1taWQ6cmdiKDI1NSwyNTUsMjU1LCAwLjgpO1xcblxcdC0tY2xyLXByaW1hcnktb3BhY2l0eS1kYXJrOnJnYigyNTUsMjU1LDI1NSwgMC45KTtcXG5cXG5cXHQtLWNsci1zZWNvbmRhcnk6cmdiKDE0LCA5LCA5KTtcXG5cXHQtLWNsci1zZWNvbmRhcnktb3BhY2l0eS1saWdodDpyZ2IoMTQsIDksIDksIDAuMjgpO1xcblxcdC0tY2xyLXNlY29uZGFyeS1vcGFjaXR5LW1pZDpyZ2IoMTQsIDksIDksIDAuNCk7XFxuXFx0LS1jbHItc2Vjb25kYXJ5LW9wYWNpdHktZGFyazpyZ2IoMTQsIDksIDksIDAuNSk7XFxuXFxuXFx0LS1jbHItYWNjZW50OnJnYigxNzQsMzEsNjYpO1xcblxcdC0tY2xyLWFjY2VudC1saWdodDpyZ2IoMjI0LDYwLDEwMSk7XFxuXFx0XFx0XFx0XFxuXFx0XFx0LypcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdFxcdFxcdDIuMS4yLiBHbG9iYWwgU3R5bGVzIFZhcmlhYmxlcy1Gb250XFxuXFx0XFx0IFxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuXFx0LS1mZi1wcmltYXJ5OidSb2JvdG8nLCBzYW5zLXNlcmlmO1xcblxcblxcdC8qXFx0XFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0XFx0XFx0Mi4xLjMuIEdsb2JhbCBTdHlsZXMgSW1hZ2VzXFxuXFx0XFx0IFxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcblxcdC0taW1nLXRyYXNoOnVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuXFx0LS1pbWctZWRpdDp1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcblxcdC0taW1nLWRvbmU6dXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG5cXHQtLWltZy1jYW5jZWw6dXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG59XFxuXFxuXFx0LmVkaXQsLmRlbGV0ZSwuZG9uZSwuY2FuY2Vse1xcblxcdFxcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuXFx0XFx0YmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxuXFx0fVxcblxcblxcdC8qXFx0PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdFxcdDIuMi4gR2xvYmFsIFN0eWxlcyBHbG9iYWxcXG5cXHRcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyogXFxuXFx0Q1NTIFN0eWxpbmcgUmVzZXQgZnJvbVxcblxcdGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIFxcdHYyLjAgfCAyMDExMDEyNlxcbiAgIFxcdExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG5cXHRtaW4taGVpZ2h0OiAxMDB2aDtcXG5cXHRmb250LWZhbWlseTogdmFyKC0tZmYtcHJpbWFyeSk7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIik7XFxuXFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTsgXFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG4vKlxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdDMuIHBhZ2VHcmlkQ29udGFpbmVyIFN0eWxlc1xcblxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcblxcdC8qXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0XFx0My4xLiBwYWdlR3JpZENvbnRhaW5lciBHbG9iYWwgU3R5bGVzXFxuXFx0XFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuI3BhZ2VHcmlkQ29udGFpbmVye1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKSA7XFxuICBcXHRncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxuICBcXHRncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAgXFxcImhlYWRlciBoZWFkZXIgaGVhZGVyIGhlYWRlclxcXCJcXG4gICAgXFxcIm1haW4gbWFpbiBtYWluIG1haW5cXFwiXFxuICAgIFxcXCJmb290ZXIgZm9vdGVyIGZvb3RlciBmb290ZXJcXFwiO1xcbn1cXG5cXG5cXHQvKlxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0XFx0My4yLiBwYWdlR3JpZENvbnRhaW5lciBUYXJnZXQgRWxlbWVudCBTdHlsZXNcXG5cXHRcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiNuYXZTZWN0aW9ue1xcblxcdGdyaWQtYXJlYTogaGVhZGVyO1xcbn1cXG4jbmF2TWVudVNlY3Rpb257XFxuXFx0Z3JpZC1hcmVhOiBzaWRlYmFyO1xcbn1cXG4jbWFpblNlY3Rpb257XFxuXFx0Z3JpZC1hcmVhOiBtYWluO1xcbn1cXG4jZm9vdGVyU2VjdGlvbntcXG5cXHRncmlkLWFyZWE6IGZvb3RlcjtcXG59XFxuXFxuLypcXHQ9PT09PT09PT09PT09PT09PVxcblxcdDQuIFNpZ24taW4gU3R5bGVzXFxuXFx0PT09PT09PT09PT09PT09PT0gKi9cXG5cXG5cXHQvKlxcdD09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0XFx0NC4xLiBTaWduLWluIEdsb2JhbCBTdHlsZXNcXG5cXHRcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbmZvcm17XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jc2lnbkluLUNvbnRhaW5lci1Jbm5lciwgI3NpZ25Jbi1Db250YWluZXItT3V0ZXJ7XFxuXFx0ZGlzcGxheTogZmxleDtcXG59XFxuXFxuI3NpZ25Jbi1Db250YWluZXItT3V0ZXJ7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI3NpZ25Jbi1Db250YWluZXItSW5uZXJ7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcblxcdG1pbi13aWR0aDogMzUlO1xcblxcdG1heC13aWR0aDogODAlO1xcblxcdG1hcmdpbjogOC41ZW0gM2VtIDEzZW07XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXByaW1hcnktb3BhY2l0eS1taWQpO1xcblxcdGJvcmRlci1yYWRpdXM6IDIzcHg7XFxufVxcblxcbiNzaWduSW4tRm9ybS1Db250YWluZXJ7XFxuXFx0bWFyZ2luOjAgMWVtO1xcblxcdHBhZGRpbmc6IDEuNWVtIDA7XFxuXFx0bWluLXdpZHRoOiA2MCU7XFxuXFx0bWF4LXdpZHRoOiA4MCU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXNlY29uZGFyeS1vcGFjaXR5LW1pZCk7XFxufVxcblxcblxcdC8qXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdFxcdDQuMi4gU2lnbi1pbiBUYXJnZXQgRWxlbWVudCBTdHlsZXNcXG5cXHRcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuI2FwcFRpdGxle1xcblxcdGZvbnQtc2l6ZTogMmVtO1xcblxcdG1hcmdpbjogMC41ZW07XFxuXFx0Y29sb3I6IHZhcigtLWNsci1zZWNvbmRhcnkpO1xcbn1cXG5cXG5mb3JtID4gaW5wdXQsIGZvcm0gPiBsYWJlbHtcXG5cXHRhbGlnbi1zZWxmOiBjZW50ZXI7XFxuXFx0bWluLXdpZHRoOiA2MCU7XFxuXFx0bWF4LXdpZHRoOiA4MCU7XFxufVxcblxcbmZvcm0gPmxhYmVse1xcblxcdGZvbnQtc2l6ZTogMS41ZW07XFxuXFx0Y29sb3I6dmFyKC0tY2xyLXByaW1hcnkpO1xcbn1cXG5cXG5pbnB1dFt0eXBlPWJ1dHRvbl0sICNkZW1vQnV0dG9ue1xcblxcdG1hcmdpbjogMC4zZW07XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRmb250LXNpemU6IDEuMmVtO1xcblxcdHBhZGRpbmc6IDAuM2VtIDNlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAxZW07XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdGNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWFjY2VudCk7XFxuXFx0dHJhbnNpdGlvbjogMC41cztcXG59XFxuXFxuaW5wdXRbdHlwZT1idXR0b25dOmhvdmVyLCAjZGVtb0J1dHRvbjpob3ZlcntcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYWNjZW50LWxpZ2h0KTtcXG59XFxuXFxuaW5wdXRbdHlwZT10ZXh0XXtcXG5cXHRtYXJnaW46IDAuNWVtO1xcblxcdHBhZGRpbmc6IDAuNWVtIDFlbTtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdGJhY2tncm91bmQ6IHZhcigtLWNsci1zZWNvbmRhcnktb3BhY2l0eS1kYXJrKTtcXG5cXHRib3JkZXItcmFkaXVzOiAxZW07XFxufVxcblxcbiNkZW1vQnV0dG9ue1xcblxcdHBhZGRpbmc6IDAuM2VtIDJlbTtcXG59XFxuXFxuLypcXHQ9PT09PT09PT09PT09PT09PVxcblxcdDUuIFNpZ24tVXAgU3R5bGVzXFxuXFx0PT09PT09PT09PT09PT09PT0gKi9cXG5cXG5cXG5cXHQvKlxcdD09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0XFx0NS4xLiBTaWduLVVwIEdsb2JhbCBTdHlsZXNcXG5cXHRcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbmZvcm17XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jc2lnblVwLUNvbnRhaW5lci1Jbm5lciwgI3NpZ25VcC1Db250YWluZXItT3V0ZXJ7XFxuXFx0ZGlzcGxheTogZmxleDtcXG59XFxuXFxuI3NpZ25VcC1Db250YWluZXItT3V0ZXJ7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI3NpZ25VcC1Db250YWluZXItSW5uZXJ7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcblxcdG1pbi13aWR0aDogMzUlO1xcblxcdG1heC13aWR0aDogODAlO1xcblxcdG1hcmdpbjogOC41ZW0gM2VtIDEzZW07XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXByaW1hcnktb3BhY2l0eS1taWQpO1xcblxcdGJvcmRlci1yYWRpdXM6IDIzcHg7XFxufVxcblxcbiNzaWduVXAtRm9ybS1Db250YWluZXJ7XFxuXFx0bWFyZ2luOjAgMWVtO1xcblxcdHBhZGRpbmc6IDEuNWVtIDA7XFxuXFx0bWluLXdpZHRoOiA2MCU7XFxuXFx0bWF4LXdpZHRoOiA4MCU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXNlY29uZGFyeS1vcGFjaXR5LW1pZCk7XFxufVxcblxcdFxcdFxcblxcdC8qXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdFxcdDUuMi4gU2lnbi1VcCBUYXJnZXQgRWxlbWVudCBTdHlsZXNcXG5cXHRcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFx0XFx0XFxuI2FwcFRpdGxle1xcblxcdGZvbnQtc2l6ZTogMmVtO1xcblxcdGNvbG9yOiB2YXIoLS1jbHItc2Vjb25kYXJ5KTtcXG5cXHRcXG59XFxuXFxuZm9ybSA+IGlucHV0LCBmb3JtID4gbGFiZWx7XFxuXFx0YWxpZ24tc2VsZjogY2VudGVyO1xcblxcdG1pbi13aWR0aDogNjAlO1xcblxcdG1heC13aWR0aDogODAlO1xcbn1cXG5cXG5mb3JtID5sYWJlbHtcXG5cXHRmb250LXNpemU6IDEuNWVtO1xcblxcdGNvbG9yOnZhcigtLWNsci1wcmltYXJ5KTtcXG59XFxuXFxuaW5wdXRbdHlwZT1idXR0b25dLCAjZGVtb0J1dHRvbntcXG5cXHRtYXJnaW46IDAuM2VtO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0Zm9udC1zaXplOiAxLjJlbTtcXG5cXHRwYWRkaW5nOiAwLjNlbSAzZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogMWVtO1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRjb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1hY2NlbnQpO1xcblxcdHRyYW5zaXRpb246IDAuNXM7XFxufVxcblxcbmlucHV0W3R5cGU9YnV0dG9uXTpob3ZlciwgI2RlbW9CdXR0b246aG92ZXJ7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWFjY2VudC1saWdodCk7XFxufVxcblxcbmlucHV0W3R5cGU9dGV4dF17XFxuXFx0bWFyZ2luOiAwLjVlbTtcXG5cXHRwYWRkaW5nOiAwLjVlbSAxZW07XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS1jbHItc2Vjb25kYXJ5LW9wYWNpdHktZGFyayk7XFxuXFx0Ym9yZGVyLXJhZGl1czogMWVtO1xcbn1cXG5cXG4jZGVtb0J1dHRvbntcXG5cXHRwYWRkaW5nOiAwLjNlbSAyZW07XFxufVxcblxcbi8qXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdDYuIE5hdmlnYXRpb24gU2VjdGlvbiBTdHlsZXNcXG5cXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFx0XFxuXFx0LypcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0XFx0Ni4xLiBOYXZpZ2F0aW9uIFNlY3Rpb24gR2xvYmFsIFN0eWxlc1xcblxcdFxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4jbmF2U2VjdGlvbntcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG5cXHRmb250LXNpemU6IDJlbTtcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0dG9wOiAwO1xcblxcdHdpZHRoOiAxMDB2dztcXG5cXHRjb2xvcjogdmFyKC0tY2xyLXNlY29uZGFyeSk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXByaW1hcnktb3BhY2l0eS1saWdodCk7XFxufVxcblxcblxcdC8qXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0XFx0Ni4yLiBOYXZpZ2F0aW9uIFNlY3Rpb24gVGFyZ2V0IEVsZW1lbnQgU3R5bGVzXFxuXFx0XFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuI25hdlNlY3Rpb24gPmgxe1xcblxcdG1hcmdpbi1sZWZ0OiAwLjJlbTtcXG5cXHRmb250LXNpemU6IDJlbTtcXG5cXHR0cmFuc2l0aW9uOiAwLjVzO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuI25hdlNlY3Rpb24gPmgye1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6NTAlO1xcblxcdGxlZnQ6NTAlO1xcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5cXG5cXG4vKlxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdDcuIE5hdmlnYXRpb24gTWVudSBTZWN0aW9uIFN0eWxlc1xcblxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcblxcdC8qXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdFxcdDcuMS4gTmF2aWdhdGlvbiBNZW51IEdsb2JhbCBTdHlsZXNcXG5cXHRcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuI25hdk1lbnVTZWN0aW9uPip7XFxuXFx0bWFyZ2luLXRvcDogMWVtO1xcbn1cXG5cXG4jbmF2TWVudVNlY3Rpb257XFxuXFx0cG9zaXRpb246IGZpeGVkO1xcblxcdHRvcDogMmVtO1xcblxcdGhlaWdodDogMTAwdmg7XFxuXFx0Zm9udC1zaXplOiAyZW07ICBcXG5cXHR3aWR0aDogMjUlO1xcblxcdGNvbG9yOiB2YXIoLS1jbHItc2Vjb25kYXJ5KTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIDApO1xcblxcdHRyYW5zaXRpb246IDAuNXM7XFxufVxcblxcbiNkYXRlU2VsZWN0b3J7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jcHJvamVjdFNlbGVjdG9ye1xcblxcdGZvbnQtc2l6ZTogMC41ZW07XFxufVxcblxcbiNwcm9qZWN0U2VsZWN0b3I+dWx7XFxuXFx0bWFyZ2luOiAwZW0gMWVtO1xcblxcdGxpc3Qtc3R5bGUtdHlwZTogZGlzYztcXG59XFxuXFxuI3Byb2plY3RTZWxlY3Rvcj51bD5zZWN0aW9uPip7XFxuXFx0ZmxleC1ncm93OiAxO1xcblxcdHRyYW5zaXRpb246IDAuNXM7XFxufVxcblxcbiNwcm9qZWN0U2VsZWN0b3I+dWw+c2VjdGlvbj4qOmhvdmVye1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1zZWNvbmRhcnktb3BhY2l0eS1saWdodCk7XFxufVxcblxcblxcdC8qXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0XFx0Ny4yLiBOYXZpZ2F0aW9uIE1lbnUgVGFyZ2V0IEVsZW1lbnQgU3R5bGVzXFxuXFx0XFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuI2RlZmF1bHRTZWxlY3RvciA+IGgye1xcblxcdG1hcmdpbjogMC41ZW07XFxufVxcblxcbiNkYXRlU2VsZWN0b3IgPiBwe1xcblxcdGZvbnQtc2l6ZTogMC43NWVtOyAgXFxufVxcblxcbiNkYXRlU2VsZWN0b3I+aW5wdXR7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0bWFyZ2luOiAxZW07XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jcHJvamVjdFNlbGVjdG9yPmgye1xcblxcdGZvbnQtc2l6ZTogMS43NWVtO1xcbn1cXG5cXG4jcHJvamVjdFNlbGVjdG9yPnVsPmxpe1xcblxcdG1hcmdpbjogMC41ZW07XFxuXFxufVxcblxcbiNwcm9qZWN0U2VsZWN0b3I+dWw+c2VjdGlvbntcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFx0aGVpZ2h0OiAyZW07XFxufVxcblxcbiNwcm9qZWN0U2VsZWN0b3I+dWw+c2VjdGlvbj4uZWRpdHtcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcblxcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuXFx0YmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxufVxcblxcbiNwcm9qZWN0U2VsZWN0b3I+dWw+c2VjdGlvbj4uZGVsZXRle1xcblxcdGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuXFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG59XFxuXFxuI3Byb2plY3RTZWxlY3Rvcj51bD4uYWRkUHJvamVjdHtcXG5cXHRwYWRkaW5nOiAwLjZlbTtcXG5cXHRmb250LXNpemU6IDEuMmVtO1xcblxcdG1hcmdpbi10b3A6IDAuNWVtO1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMC41ZW07XFxuXFx0Y29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYWNjZW50KTtcXG5cXHR0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG5cXG4jcHJvamVjdFNlbGVjdG9yPnVsPi5hZGRQcm9qZWN0OmhvdmVye1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1hY2NlbnQtbGlnaHQpO1xcbn1cXG5cXG4vKlxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdDcuMy4gTmF2aWdhdGlvbiBFZGl0IFNlY3Rpb24gR2xvYmFsIFN0eWxlc1xcblxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiNlZGl0UHJvamVjdENvbnRhaW5lcntcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGJvcmRlcjogMC4yZW0gaW5zZXQgdmFyKC0tY2xyLWFjY2VudCk7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2VkaXRQcm9qZWN0Q29udGFpbmVyPip7XFxuXFx0ZmxleC1ncm93OiAxO1xcbn1cXG5cXG4jZWRpdFByb2plY3RDb250YWluZXI+LmRvbmUtY2FuY2VsU2VjdGlvbj4qe1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMmVtO1xcbn1cXG5cXG5cXHQvKlxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHQ3LjQuIE5hdmlnYXRpb24gRWRpdCBTZWN0aW9uIFRhcmdldCBFbGVtZW50IFN0eWxlc1xcblxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuI2VkaXRQcm9qZWN0Q29udGFpbmVye1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Ym9yZGVyOiAwLjJlbSBpbnNldCB2YXIoLS1jbHItYWNjZW50KTtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jZWRpdFByb2plY3RDb250YWluZXI+LmRvbmUtY2FuY2VsU2VjdGlvbntcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcblxcdHRyYW5zaXRpb246IDAuNXM7XFxufVxcblxcbiNlZGl0UHJvamVjdENvbnRhaW5lcj4uZWRpdFRhc2tTZWxlY3Q+aW5wdXR7XFxuXFx0d2lkdGg6IDgwJTtcXG59XFxuXFxuI2VkaXRQcm9qZWN0Q29udGFpbmVyPi5kb25lLWNhbmNlbFNlY3Rpb24+Kjpob3ZlcntcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItc2Vjb25kYXJ5LW9wYWNpdHktbGlnaHQpO1xcbn1cXG5cXG4vKlxcdD09PT09PT09PT09PT09PT09PT09PVxcblxcdDguIE1haW4gU2VjdGlvbiBTdHllc1xcblxcdD09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcblxcdC8qXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdFxcdDguMS4gTWFpbiBTZWN0aW9uIEdsb2JhbCBTdHlsZXNcXG5cXHRcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuI21haW5TZWN0aW9uPip7XFxuXFx0bWluLXdpZHRoOiA4MCU7XFxufVxcblxcbiNtYWluU2VjdGlvbiwgLml0ZW1zLCAudGFza3N7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuI21haW5TZWN0aW9ue1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRtYXJnaW4tdG9wOiAzZW07XFxuXFx0cGFkZGluZy1ib3R0b206IDJlbTtcXG5cXHRnYXA6IDAuNWVtIDBlbTtcXG5cXHRmb250LXNpemU6IDEuNWVtO1xcblxcdGNvbG9yOiB2YXIoLS1jbHItc2Vjb25kYXJ5KTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeS1vcGFjaXR5LWRhcmspO1xcbn1cXG5cXG4uaXRlbXN7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG59XFxuXFxuLnRhc2tze1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxufVxcblxcbi5pdGVtcyA+ICp7XFxuXFx0Z3JpZC1jb2x1bW46IDEgLyBzcGFuIDM7XFxufVxcblxcbi5pdGVtc3tcXG5cXHRjb2xvcjogdmFyKC0tY2xyLXNlY29uZGFyeSk7XFxuXFx0cGxhY2Utc2VsZjogY2VudGVyO1xcblxcdGdhcDogMC41ZW0gMGVtO1xcblxcdG1hcmdpbi1ib3R0b206IDAuNWVtO1xcblxcdGJhY2tncm91bmQ6IHZhcigtLWNsci1zZWNvbmRhcnktb3BhY2l0eS1saWdodCk7XFxufVxcblxcbi50YXNrcz4qe1xcblxcdHBsYWNlLXNlbGY6IGNlbnRlcjtcXG5cXHRwYWRkaW5nOiAwLjJlbTtcXG59XFxuXFxuLnRhc2tzPnNlY3Rpb24+KntcXG5cXHRoZWlnaHQ6IDJlbTtcXG5cXHR3aWR0aDogMmVtO1xcblxcdGZsZXgtZ3JvdzogMTtcXG5cXHR0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG5cXG4udGFza3M+c2VjdGlvbj4qOmhvdmVye1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1zZWNvbmRhcnktb3BhY2l0eS1saWdodCk7XFxufVxcblxcblxcdC8qXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0XFx0OC4yLiBNYWluIFNlY3Rpb24gVGFyZ2V0IEVsZW1lbnQgU3R5bGVzXFxuXFx0XFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuI21haW5TZWN0aW9uID4gaDJ7XFxuXFx0Zm9udC1zaXplOiAxLjVlbTtcXG5cXHRwYWRkaW5nOiAwLjVlbTtcXG59XFxuXFxuLml0ZW1zPmgye1xcblxcdGZvbnQtc2l6ZTogMS41ZW07XFxuXFx0cGFkZGluZy10b3A6IDAuMmVtO1xcbn1cXG5cXG4udGFza3M+bGFiZWx7XFxuXFx0Y29sb3I6IHZhcigtLWNsci1zZWNvbmRhcnkpO1xcblxcdHBsYWNlLXNlbGY6IGNlbnRlcjtcXG5cXHRmb250LXNpemU6IDFlbTtcXG5cXHR3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRhc2tzPmlucHV0e1xcblxcdGhlaWdodDogMmVtO1xcblxcdHdpZHRoOiAyZW07XFxufVxcblxcbi50YXNrcz5zZWN0aW9ue1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHdpZHRoOjEwMCU7XFxufVxcblxcbi5lZGl0e1xcblxcdGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLWltZy1lZGl0KTtcXG59XFxuXFxuLmRlbGV0ZXtcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1pbWctdHJhc2gpO1xcbn1cXG5cXG4uYWRkVGFza3tcXG5cXHRwYWRkaW5nOiAwLjZlbTtcXG5cXHRtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG5cXHRmb250LXNpemU6IDAuOGVtO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGdyaWQtY29sdW1uOiAyO1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMC41ZW07XFxuXFx0Y29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYWNjZW50KTtcXG5cXHR0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG5cXG4uYWRkVGFzazpob3ZlcntcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYWNjZW50LWxpZ2h0KTtcXG59XFxuXFxuXFx0LypcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHRcXHQ4LjMuIE1haW4gRWRpdCBTZWN0aW9uIEdsb2JhbCBTdHlsZXNcXG5cXHRcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4jZWRpdFRhc2s+KntcXG5cXHRwbGFjZS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbiNlZGl0VGFzaz5zZWN0aW9uPip7XFxuXFx0aGVpZ2h0OiBhdXRvO1xcblxcdHdpZHRoOiA5MCU7XFxuXFx0dHJhbnNpdGlvbjogMC41cztcXG59XFxuXFxuI2VkaXRUYXNrPi5kb25lLWNhbmNlbFNlY3Rpb24+Kjpob3ZlcntcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItc2Vjb25kYXJ5LW9wYWNpdHktbGlnaHQpO1xcbn1cXG5cXG4jZWRpdFRhc2s+LmRvbmUtY2FuY2VsU2VjdGlvbj4qe1xcblxcdHdpZHRoOiBhdXRvO1xcblxcdGhlaWdodDogYXV0bztcXG5cXHRmbGV4LWdyb3c6IDE7XFxufVxcblxcblxcdC8qXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHRcXHQ4LjQuIE1haW4gRWRpdCBTZWN0aW9uIFRhcmdldCBFbGVtZW50IFN0eWxlc1xcblxcdFxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuI2VkaXRUYXNrQ29udGFpbmVye1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Z3JpZC1jb2x1bW46IHNwYW4gNDtcXG59XFxuXFxuI2VkaXRUYXNre1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0bWFyZ2luOiBhdXRvO1xcblxcdHdpZHRoOiA4MCU7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDAuMmVtIGluc2V0IHZhcigtLWNsci1hY2NlbnQpO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuXFx0Y29sdW1uLWdhcDogMC41ZW07XFxufVxcblxcbiNlZGl0VGFzaz5zZWN0aW9ue1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0d2lkdGg6IDEwMCU7XFxufVxcblxcbiNlZGl0VGFzaz5zZWN0aW9uPmxhYmVse1xcblxcdGNvbG9yOiB2YXIoLS1jbHItc2Vjb25kYXJ5KTtcXG5cXHRwbGFjZS1zZWxmOiBjZW50ZXI7XFxuXFx0Zm9udC1zaXplOiAxZW07XFxuXFx0d2lkdGg6IDEwMCU7XFxufVxcblxcbiNlZGl0VGFzaz5zZWN0aW9uPnRleHRhcmVhe1xcblxcdHJlc2l6ZTogdmVydGljYWw7XFxufVxcblxcbiNlZGl0VGFzaz4uZG9uZS1jYW5jZWxTZWN0aW9ue1xcblxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5kb25le1xcblxcdGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLWltZy1kb25lKTtcXG59XFxuXFxuLmNhbmNlbHtcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1pbWctY2FuY2VsKTtcXG59XFxuXFxuLypcXHQ9PT09PT09PT09PT09PT09PT09PT09PVxcblxcdCouIEZvb3RlciBTdHlsZSBTZWN0aW9uXFxuXFx0PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4jZm9vdGVyU2VjdGlvbntcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0bGVmdDogMDtcXG5cXHRib3R0b206IDA7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXNlY29uZGFyeSk7XFxuXFx0Y29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi8qXFx0PT09PT09PT09PT09PT09PT09PT09PVxcblxcdCouIE1lZGlhIFF1ZXJ5IFNlY3Rpb25cXG5cXHQ9PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NTBweCkge1xcblxcblxcdC8qXFx0PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdFxcdCouMS4gR2xvYmFsIE1lZGlhIFF1ZXJpZXNcXG5cXHRcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuXFx0Ym9keSB7XFxuXFx0XFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyArIFwiKTtcXG5cXHR9XFxuXFxuXFx0LypcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHRcXHQqLjIuIHBhZ2VHcmlkQ29udGFpbmVyIE1lZGlhIFF1ZXJpZXNcXG5cXHRcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG5cXHQjcGFnZUdyaWRDb250YWluZXJ7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuXFx0XFx0XFxcImhlYWRlciBoZWFkZXIgaGVhZGVyIGhlYWRlclxcXCJcXG5cXHRcXHRcXFwic2lkZWJhciBtYWluIG1haW4gbWFpblxcXCJcXG5cXHRcXHRcXFwiZm9vdGVyIGZvb3RlciBmb290ZXIgZm9vdGVyXFxcIjtcXG5cXHR9XFxuXFxuXFxuXFx0LypcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0XFx0Ki4zLiBOYXZpZ2F0aW9uIFNlY3Rpb24gTWVkaWEgUXVlcmllc1xcblxcdFxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG5cXHQjbWFpblNlY3Rpb257XFxuXFx0XFx0bWFyZ2luOiAzZW0gMWVtIDBlbTtcXG5cXHR9XFxuXFxuXFx0I21haW5TZWN0aW9uPip7XFxuXFx0XFx0bWluLXdpZHRoOiA3NSU7XFxuXFx0fVxcblxcblxcdCNuYXZTZWN0aW9uPmgxe1xcblxcdFxcdHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XFxuXFx0fVxcblxcblxcdC8qXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0XFx0Ki40LiBOYXZpZ2F0aW9uIE1lbnUgU2VjdGlvbiBNZWRpYSBRdWVyaWVzXFxuXFx0XFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuXFx0I25hdk1lbnVTZWN0aW9ue1xcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xcblxcdH1cXG5cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQXFDQzs7QUFFRDs7YUFFYTs7QUFJYjs7bUJBRW1COztDQUVsQjs7Z0NBRStCOztBQUVoQzs7RUFFRTs7MENBRXdDOztDQUV6Qyw4QkFBOEI7Q0FDOUIsaURBQWlEO0NBQ2pELCtDQUErQztDQUMvQyxnREFBZ0Q7O0NBRWhELDZCQUE2QjtDQUM3QixpREFBaUQ7Q0FDakQsOENBQThDO0NBQzlDLCtDQUErQzs7Q0FFL0MsMkJBQTJCO0NBQzNCLGtDQUFrQzs7RUFFakM7O3lDQUV1Qzs7Q0FFeEMsaUNBQWlDOztDQUVqQzs7aUNBRWdDOztDQUVoQyxtREFBZ0Q7Q0FDaEQsa0RBQTBDO0NBQzFDLGtEQUEwQztDQUMxQyxvREFBOEM7QUFDL0M7O0NBRUM7RUFDQyw0QkFBNEI7RUFDNUIsMEJBQTBCO0NBQzNCOztDQUVBOzs2QkFFNEI7QUFDN0I7Ozs7O0NBS0M7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Q0FhQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFNBQVM7Q0FDVCxlQUFlO0NBQ2YsYUFBYTtDQUNiLHdCQUF3QjtBQUN6QjtBQUNBLGdEQUFnRDtBQUNoRDs7Q0FFQyxjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxjQUFjO0NBQ2QsaUJBQWlCO0NBQ2pCLDhCQUE4QjtDQUM5QixrQkFBa0I7Q0FDbEIseURBQXNFO0NBQ3RFLDRCQUE0QjtDQUM1QiwwQkFBMEI7QUFDM0I7QUFDQTtDQUNDLFlBQVk7QUFDYjtBQUNBOztDQUVDLFdBQVc7Q0FDWCxhQUFhO0FBQ2Q7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixpQkFBaUI7QUFDbEI7O0FBRUE7OzhCQUU4Qjs7Q0FFN0I7O3dDQUV1Qzs7QUFFeEM7Q0FDQyxhQUFhO0NBQ2Isc0NBQXNDO0dBQ3BDLHdCQUF3QjtHQUN4Qjs7O2lDQUc4QjtBQUNqQzs7Q0FFQzs7Z0RBRStDOztBQUVoRDtDQUNDLGlCQUFpQjtBQUNsQjtBQUNBO0NBQ0Msa0JBQWtCO0FBQ25CO0FBQ0E7Q0FDQyxlQUFlO0FBQ2hCO0FBQ0E7Q0FDQyxpQkFBaUI7QUFDbEI7O0FBRUE7O29CQUVvQjs7Q0FFbkI7OzhCQUU2Qjs7QUFFOUI7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLGFBQWE7QUFDZDs7QUFFQTtDQUNDLGFBQWE7Q0FDYix1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQyxzQkFBc0I7Q0FDdEIsbUJBQW1CO0NBQ25CLDZCQUE2QjtDQUM3QixjQUFjO0NBQ2QsY0FBYztDQUNkLHNCQUFzQjtDQUN0QixnREFBZ0Q7Q0FDaEQsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsWUFBWTtDQUNaLGdCQUFnQjtDQUNoQixjQUFjO0NBQ2QsY0FBYztDQUNkLGtEQUFrRDtBQUNuRDs7Q0FFQzs7c0NBRXFDOztBQUV0QztDQUNDLGNBQWM7Q0FDZCxhQUFhO0NBQ2IsMkJBQTJCO0FBQzVCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLGNBQWM7Q0FDZCxjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsd0JBQXdCO0FBQ3pCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLFlBQVk7Q0FDWixlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQixrQkFBa0I7Q0FDbEIscUJBQXFCO0NBQ3JCLHlCQUF5QjtDQUN6QixtQ0FBbUM7Q0FDbkMsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MseUNBQXlDO0FBQzFDOztBQUVBO0NBQ0MsYUFBYTtDQUNiLGtCQUFrQjtDQUNsQixZQUFZO0NBQ1oscUJBQXFCO0NBQ3JCLDZDQUE2QztDQUM3QyxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBRUE7O29CQUVvQjs7O0NBR25COzs4QkFFNkI7O0FBRTlCO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0Qix1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQyxhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0Msc0JBQXNCO0NBQ3RCLG1CQUFtQjtDQUNuQiw2QkFBNkI7Q0FDN0IsY0FBYztDQUNkLGNBQWM7Q0FDZCxzQkFBc0I7Q0FDdEIsZ0RBQWdEO0NBQ2hELG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixnQkFBZ0I7Q0FDaEIsY0FBYztDQUNkLGNBQWM7Q0FDZCxrREFBa0Q7QUFDbkQ7O0NBRUM7O3NDQUVxQzs7QUFFdEM7Q0FDQyxjQUFjO0NBQ2QsMkJBQTJCOztBQUU1Qjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixjQUFjO0NBQ2QsY0FBYztBQUNmOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLHdCQUF3QjtBQUN6Qjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixZQUFZO0NBQ1osZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixrQkFBa0I7Q0FDbEIsa0JBQWtCO0NBQ2xCLHFCQUFxQjtDQUNyQix5QkFBeUI7Q0FDekIsbUNBQW1DO0NBQ25DLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLHlDQUF5QztBQUMxQzs7QUFFQTtDQUNDLGFBQWE7Q0FDYixrQkFBa0I7Q0FDbEIsWUFBWTtDQUNaLHFCQUFxQjtDQUNyQiw2Q0FBNkM7Q0FDN0Msa0JBQWtCO0FBQ25COztBQUVBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUVBOzsrQkFFK0I7O0NBRTlCOzt5Q0FFd0M7O0FBRXpDO0NBQ0MsYUFBYTtDQUNiLDJCQUEyQjtDQUMzQixjQUFjO0NBQ2QsZUFBZTtDQUNmLE1BQU07Q0FDTixZQUFZO0NBQ1osMkJBQTJCO0NBQzNCLGtEQUFrRDtBQUNuRDs7Q0FFQzs7aURBRWdEOztBQUVqRDtDQUNDLGtCQUFrQjtDQUNsQixjQUFjO0NBQ2QsZ0JBQWdCO0NBQ2hCLGVBQWU7QUFDaEI7OztBQUdBO0NBQ0Msa0JBQWtCO0NBQ2xCLE9BQU87Q0FDUCxRQUFRO0NBQ1IsZ0NBQWdDO0FBQ2pDOzs7QUFHQTs7b0NBRW9DOztDQUVuQzs7c0NBRXFDO0FBQ3RDO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixRQUFRO0NBQ1IsYUFBYTtDQUNiLGNBQWM7Q0FDZCxVQUFVO0NBQ1YsMkJBQTJCO0NBQzNCLG9DQUFvQztDQUNwQyw4QkFBOEI7Q0FDOUIsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixxQkFBcUI7QUFDdEI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0Msb0RBQW9EO0FBQ3JEOztDQUVDOzs4Q0FFNkM7O0FBRTlDO0NBQ0MsYUFBYTtBQUNkOztBQUVBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsY0FBYztDQUNkLFdBQVc7Q0FDWCxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxhQUFhOztBQUVkOztBQUVBO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixXQUFXO0FBQ1o7O0FBRUE7Q0FDQyx5REFBaUQ7Q0FDakQsNEJBQTRCO0NBQzVCLDBCQUEwQjtBQUMzQjs7QUFFQTtDQUNDLHlEQUFzRDtDQUN0RCw0QkFBNEI7Q0FDNUIsMEJBQTBCO0FBQzNCOztBQUVBO0NBQ0MsY0FBYztDQUNkLGdCQUFnQjtDQUNoQixpQkFBaUI7Q0FDakIscUJBQXFCO0NBQ3JCLFlBQVk7Q0FDWixvQkFBb0I7Q0FDcEIseUJBQXlCO0NBQ3pCLG1DQUFtQztDQUNuQyxnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyx5Q0FBeUM7QUFDMUM7O0FBRUE7OzZDQUU2Qzs7QUFFN0M7Q0FDQyxhQUFhO0NBQ2IscUNBQXFDO0NBQ3JDLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLFlBQVk7QUFDYjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxXQUFXO0FBQ1o7O0NBRUM7O3FEQUVvRDs7QUFFckQ7Q0FDQyxhQUFhO0NBQ2IscUNBQXFDO0NBQ3JDLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLGFBQWE7Q0FDYiw2QkFBNkI7Q0FDN0IsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsVUFBVTtBQUNYOztBQUVBO0NBQ0Msb0RBQW9EO0FBQ3JEOztBQUVBOzt3QkFFd0I7O0NBRXZCOzttQ0FFa0M7O0FBRW5DO0NBQ0MsY0FBYztBQUNmOztBQUVBO0NBQ0MsYUFBYTtBQUNkOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixlQUFlO0NBQ2YsbUJBQW1CO0NBQ25CLGNBQWM7Q0FDZCxnQkFBZ0I7Q0FDaEIsMkJBQTJCO0NBQzNCLGlEQUFpRDtBQUNsRDs7QUFFQTtDQUNDLHFDQUFxQztBQUN0Qzs7QUFFQTtDQUNDLHFDQUFxQztBQUN0Qzs7QUFFQTtDQUNDLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLDJCQUEyQjtDQUMzQixrQkFBa0I7Q0FDbEIsY0FBYztDQUNkLG9CQUFvQjtDQUNwQiw4Q0FBOEM7QUFDL0M7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsY0FBYztBQUNmOztBQUVBO0NBQ0MsV0FBVztDQUNYLFVBQVU7Q0FDVixZQUFZO0NBQ1osZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0Msb0RBQW9EO0FBQ3JEOztDQUVDOzsyQ0FFMEM7O0FBRTNDO0NBQ0MsZ0JBQWdCO0NBQ2hCLGNBQWM7QUFDZjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQywyQkFBMkI7Q0FDM0Isa0JBQWtCO0NBQ2xCLGNBQWM7Q0FDZCxXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsVUFBVTtBQUNYOztBQUVBO0NBQ0MsYUFBYTtDQUNiLFlBQVk7Q0FDWixVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxpQ0FBaUM7QUFDbEM7O0FBRUE7Q0FDQyxrQ0FBa0M7QUFDbkM7O0FBRUE7Q0FDQyxjQUFjO0NBQ2Qsb0JBQW9CO0NBQ3BCLGdCQUFnQjtDQUNoQix1QkFBdUI7Q0FDdkIsY0FBYztDQUNkLHFCQUFxQjtDQUNyQixZQUFZO0NBQ1osb0JBQW9CO0NBQ3BCLHlCQUF5QjtDQUN6QixtQ0FBbUM7Q0FDbkMsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MseUNBQXlDO0FBQzFDOztDQUVDOzt3Q0FFdUM7O0FBRXhDO0NBQ0Msa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsWUFBWTtDQUNaLFVBQVU7Q0FDVixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxvREFBb0Q7QUFDckQ7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtDQUNaLFlBQVk7QUFDYjs7Q0FFQzs7Z0RBRStDOztBQUVoRDtDQUNDLFdBQVc7Q0FDWCxVQUFVO0NBQ1YsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLFlBQVk7Q0FDWixVQUFVO0NBQ1YsVUFBVTtDQUNWLHFDQUFxQztDQUNyQyxxQ0FBcUM7Q0FDckMsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixZQUFZO0NBQ1osV0FBVztBQUNaOztBQUVBO0NBQ0MsMkJBQTJCO0NBQzNCLGtCQUFrQjtDQUNsQixjQUFjO0NBQ2QsV0FBVztBQUNaOztBQUVBO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsaUNBQWlDO0FBQ2xDOztBQUVBO0NBQ0MsbUNBQW1DO0FBQ3BDOztBQUVBOzswQkFFMEI7O0FBRTFCO0NBQ0MsZUFBZTtDQUNmLE9BQU87Q0FDUCxTQUFTO0NBQ1QsV0FBVztDQUNYLHNDQUFzQztDQUN0Qyx5QkFBeUI7Q0FDekIsa0JBQWtCO0FBQ25COztBQUVBOzt5QkFFeUI7O0FBRXpCOztDQUVDOzs2QkFFNEI7O0NBRTVCO0VBQ0MseURBQStEO0NBQ2hFOztDQUVBOzt3Q0FFdUM7O0NBRXZDO0VBQ0M7OzsrQkFHNkI7Q0FDOUI7OztDQUdBOzt5Q0FFd0M7O0NBRXhDO0VBQ0MsbUJBQW1CO0NBQ3BCOztDQUVBO0VBQ0MsY0FBYztDQUNmOztDQUVBO0VBQ0MseUJBQXlCO0NBQzFCOztDQUVBOzs4Q0FFNkM7O0NBRTdDO0VBQ0MsMEJBQTBCO0NBQzNCOztBQUVEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFRhYmxlIG9mIENvbnRlbnRzXFxuXFx0MS4gSW1wb3J0c1xcblxcdDIuIEdsb2JhbCBTdHlsZXNcXG5cXHRcXHQyLjEuIEdsb2JhbCBTdHlsZXMgVmFyaWFibGVzXFxuXFx0XFx0XFx0Mi4xLjEuIEdsb2JhbCBTdHlsZXMgVmFyaWFibGVzLUNvbG9yXFxuXFx0XFx0XFx0Mi4xLjIuIEdsb2JhbCBTdHlsZXMgVmFyaWFibGVzLUZvbnRcXG5cXHRcXHRcXHQyLjEuMy4gR2xvYmFsIFN0eWxlcyBJbWFnZXNcXG5cXHRcXHQyLjIuIEdsb2JhbCBTdHlsZXMgR2xvYmFsXFxuXFx0My4gcGFnZUdyaWRDb250YWluZXIgU3R5bGVzXFxuXFx0XFx0My4xLiBwYWdlR3JpZENvbnRhaW5lciBHbG9iYWwgU3R5bGVzXFxuXFx0XFx0My4yLiBwYWdlR3JpZENvbnRhaW5lciBUYXJnZXQgRWxlbWVudCBTdHlsZXNcXG5cXHQ0LiBTaWduLWluIFN0eWxlc1xcblxcdFxcdDQuMS4gU2lnbi1pbiBHbG9iYWwgU3R5bGVzXFxuXFx0XFx0NC4yLiBTaWduLWluIFRhcmdldCBFbGVtZW50IFN0eWxlc1xcblxcdDUuIFNpZ24tVXAgU3R5bGVzXFxuXFx0XFx0NS4xLiBTaWduLVVwIEdsb2JhbCBTdHlsZXNcXG5cXHRcXHQ1LjIuIFNpZ24tVXAgVGFyZ2V0IEVsZW1lbnQgU3R5bGVzXFxuXFx0Ni4gTmF2aWdhdGlvbiBTZWN0aW9uIFN0eWxlc1xcblxcdFxcdDYuMS4gTmF2aWdhdGlvbiBTZWN0aW9uIEdsb2JhbCBTdHlsZXNcXG5cXHRcXHQ2LjIuIE5hdmlnYXRpb24gU2VjdGlvbiBUYXJnZXQgRWxlbWVudCBTdHlsZXNcXG5cXHQ3LiBOYXZpZ2F0aW9uIE1lbnUgU2VjdGlvbiBTdHlsZXNcXG5cXHRcXHQ3LjEuIE5hdmlnYXRpb24gTWVudSBHbG9iYWwgU3R5bGVzXFxuXFx0XFx0Ny4yLiBOYXZpZ2F0aW9uIE1lbnUgVGFyZ2V0IEVsZW1lbnQgU3R5bGVzXFxuXFx0XFx0Ny4zLiBOYXZpZ2F0aW9uIEVkaXQgU2VjdGlvbiBHbG9iYWwgU3R5bGVzXFxuXFx0XFx0Ny40LiBOYXZpZ2F0aW9uIEVkaXQgU2VjdGlvbiBUYXJnZXQgRWxlbWVudCBTdHlsZXNcXG5cXHQ4LiBNYWluIFNlY3Rpb24gU3R5ZXNcXG5cXHRcXHQ4LjEuIE1haW4gU2VjdGlvbiBHbG9iYWwgU3R5bGVzXFxuXFx0XFx0OC4yLiBNYWluIFNlY3Rpb24gVGFyZ2V0IEVsZW1lbnQgU3R5bGVzXFxuXFx0XFx0OC4zLiBNYWluIEVkaXQgU2VjdGlvbiBHbG9iYWwgU3R5bGVzXFxuXFx0XFx0OC40LiBNYWluIEVkaXQgU2VjdGlvbiBUYXJnZXQgRWxlbWVudCBTdHlsZXNcXG5cXHQqLiBGb290ZXIgU3R5bGUgU2VjdGlvblxcblxcdCouIE1lZGlhIFF1ZXJ5IFNlY3Rpb25cXG5cXHRcXHQqLjEuIEdsb2JhbCBNZWRpYSBRdWVyaWVzXFxuXFx0XFx0Ki4yLiBwYWdlR3JpZENvbnRhaW5lciBNZWRpYSBRdWVyaWVzXFxuXFx0XFx0Ki4zLiBOYXZpZ2F0aW9uIFNlY3Rpb24gTWVkaWEgUXVlcmllc1xcblxcdFxcdCouNC4gTmF2aWdhdGlvbiBNZW51IFNlY3Rpb24gTWVkaWEgUXVlcmllc1xcblxcbiovXFxuXFxuLypcXHQ9PT09PT09PT09XFxuXFx0MS4gSW1wb3J0c1xcblxcdD09PT09PT09PT0gKi9cXG5cXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwJyk7XFxuXFxuLypcXHQ9PT09PT09PT09PT09PT09XFxuXFx0Mi4gR2xvYmFsIFN0eWxlc1xcblxcdD09PT09PT09PT09PT09PT0gKi9cXG5cXG5cXHQvKlxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHRcXHQyLjEuIEdsb2JhbCBTdHlsZXMgVmFyaWFibGVzXFxuXFx0XFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbjpyb290e1xcblxcblxcdFxcdC8qXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0XFx0XFx0Mi4xLjEuIEdsb2JhbCBTdHlsZXMgVmFyaWFibGVzLUNvbG9yXFxuXFx0XFx0IFxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcblxcdC0tY2xyLXByaW1hcnk6cmdiKDI1NSwyNTUsMjU1KTtcXG5cXHQtLWNsci1wcmltYXJ5LW9wYWNpdHktbGlnaHQ6cmdiKDI1NSwyNTUsMjU1LCAwLjYpO1xcblxcdC0tY2xyLXByaW1hcnktb3BhY2l0eS1taWQ6cmdiKDI1NSwyNTUsMjU1LCAwLjgpO1xcblxcdC0tY2xyLXByaW1hcnktb3BhY2l0eS1kYXJrOnJnYigyNTUsMjU1LDI1NSwgMC45KTtcXG5cXG5cXHQtLWNsci1zZWNvbmRhcnk6cmdiKDE0LCA5LCA5KTtcXG5cXHQtLWNsci1zZWNvbmRhcnktb3BhY2l0eS1saWdodDpyZ2IoMTQsIDksIDksIDAuMjgpO1xcblxcdC0tY2xyLXNlY29uZGFyeS1vcGFjaXR5LW1pZDpyZ2IoMTQsIDksIDksIDAuNCk7XFxuXFx0LS1jbHItc2Vjb25kYXJ5LW9wYWNpdHktZGFyazpyZ2IoMTQsIDksIDksIDAuNSk7XFxuXFxuXFx0LS1jbHItYWNjZW50OnJnYigxNzQsMzEsNjYpO1xcblxcdC0tY2xyLWFjY2VudC1saWdodDpyZ2IoMjI0LDYwLDEwMSk7XFxuXFx0XFx0XFx0XFxuXFx0XFx0LypcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdFxcdFxcdDIuMS4yLiBHbG9iYWwgU3R5bGVzIFZhcmlhYmxlcy1Gb250XFxuXFx0XFx0IFxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuXFx0LS1mZi1wcmltYXJ5OidSb2JvdG8nLCBzYW5zLXNlcmlmO1xcblxcblxcdC8qXFx0XFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0XFx0XFx0Mi4xLjMuIEdsb2JhbCBTdHlsZXMgSW1hZ2VzXFxuXFx0XFx0IFxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcblxcdC0taW1nLXRyYXNoOnVybCgnLi9pbWFnZXMvaWNvbnM4LXRyYXNoLWNhbi5zdmcnKTtcXG5cXHQtLWltZy1lZGl0OnVybCgnLi9pbWFnZXMvaWNvbnM4LWVkaXQuc3ZnJyk7XFxuXFx0LS1pbWctZG9uZTp1cmwoJy4vaW1hZ2VzL2ljb25zOC1kb25lLnN2ZycpO1xcblxcdC0taW1nLWNhbmNlbDp1cmwoJy4vaW1hZ2VzL2ljb25zOC1jYW5jZWwuc3ZnJyk7XFxufVxcblxcblxcdC5lZGl0LC5kZWxldGUsLmRvbmUsLmNhbmNlbHtcXG5cXHRcXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcblxcdFxcdGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcblxcdH1cXG5cXG5cXHQvKlxcdD09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHRcXHQyLjIuIEdsb2JhbCBTdHlsZXMgR2xvYmFsXFxuXFx0XFx0PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qIFxcblxcdENTUyBTdHlsaW5nIFJlc2V0IGZyb21cXG5cXHRodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICBcXHR2Mi4wIHwgMjAxMTAxMjZcXG4gICBcXHRMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxuXFx0bWluLWhlaWdodDogMTAwdmg7XFxuXFx0Zm9udC1mYW1pbHk6IHZhcigtLWZmLXByaW1hcnkpO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1hZ2VzL1RvRG9BcHBCYWNrZ3JvdW5kLWNyb3BwZWQtbW9iaWxlLmpwZycpO1xcblxcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuXFx0YmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7IFxcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuLypcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHQzLiBwYWdlR3JpZENvbnRhaW5lciBTdHlsZXNcXG5cXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG5cXHQvKlxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdFxcdDMuMS4gcGFnZUdyaWRDb250YWluZXIgR2xvYmFsIFN0eWxlc1xcblxcdFxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiNwYWdlR3JpZENvbnRhaW5lcntcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcikgO1xcbiAgXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbiAgXFx0Z3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgIFxcXCJoZWFkZXIgaGVhZGVyIGhlYWRlciBoZWFkZXJcXFwiXFxuICAgIFxcXCJtYWluIG1haW4gbWFpbiBtYWluXFxcIlxcbiAgICBcXFwiZm9vdGVyIGZvb3RlciBmb290ZXIgZm9vdGVyXFxcIjtcXG59XFxuXFxuXFx0LypcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdFxcdDMuMi4gcGFnZUdyaWRDb250YWluZXIgVGFyZ2V0IEVsZW1lbnQgU3R5bGVzXFxuXFx0XFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4jbmF2U2VjdGlvbntcXG5cXHRncmlkLWFyZWE6IGhlYWRlcjtcXG59XFxuI25hdk1lbnVTZWN0aW9ue1xcblxcdGdyaWQtYXJlYTogc2lkZWJhcjtcXG59XFxuI21haW5TZWN0aW9ue1xcblxcdGdyaWQtYXJlYTogbWFpbjtcXG59XFxuI2Zvb3RlclNlY3Rpb257XFxuXFx0Z3JpZC1hcmVhOiBmb290ZXI7XFxufVxcblxcbi8qXFx0PT09PT09PT09PT09PT09PT1cXG5cXHQ0LiBTaWduLWluIFN0eWxlc1xcblxcdD09PT09PT09PT09PT09PT09ICovXFxuXFxuXFx0LypcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdFxcdDQuMS4gU2lnbi1pbiBHbG9iYWwgU3R5bGVzXFxuXFx0XFx0PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG5mb3Jte1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI3NpZ25Jbi1Db250YWluZXItSW5uZXIsICNzaWduSW4tQ29udGFpbmVyLU91dGVye1xcblxcdGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNzaWduSW4tQ29udGFpbmVyLU91dGVye1xcblxcdGhlaWdodDogMTAwdmg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNzaWduSW4tQ29udGFpbmVyLUlubmVye1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG5cXHRtaW4td2lkdGg6IDM1JTtcXG5cXHRtYXgtd2lkdGg6IDgwJTtcXG5cXHRtYXJnaW46IDguNWVtIDNlbSAxM2VtO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1wcmltYXJ5LW9wYWNpdHktbWlkKTtcXG5cXHRib3JkZXItcmFkaXVzOiAyM3B4O1xcbn1cXG5cXG4jc2lnbkluLUZvcm0tQ29udGFpbmVye1xcblxcdG1hcmdpbjowIDFlbTtcXG5cXHRwYWRkaW5nOiAxLjVlbSAwO1xcblxcdG1pbi13aWR0aDogNjAlO1xcblxcdG1heC13aWR0aDogODAlO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1zZWNvbmRhcnktb3BhY2l0eS1taWQpO1xcbn1cXG5cXG5cXHQvKlxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHRcXHQ0LjIuIFNpZ24taW4gVGFyZ2V0IEVsZW1lbnQgU3R5bGVzXFxuXFx0XFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiNhcHBUaXRsZXtcXG5cXHRmb250LXNpemU6IDJlbTtcXG5cXHRtYXJnaW46IDAuNWVtO1xcblxcdGNvbG9yOiB2YXIoLS1jbHItc2Vjb25kYXJ5KTtcXG59XFxuXFxuZm9ybSA+IGlucHV0LCBmb3JtID4gbGFiZWx7XFxuXFx0YWxpZ24tc2VsZjogY2VudGVyO1xcblxcdG1pbi13aWR0aDogNjAlO1xcblxcdG1heC13aWR0aDogODAlO1xcbn1cXG5cXG5mb3JtID5sYWJlbHtcXG5cXHRmb250LXNpemU6IDEuNWVtO1xcblxcdGNvbG9yOnZhcigtLWNsci1wcmltYXJ5KTtcXG59XFxuXFxuaW5wdXRbdHlwZT1idXR0b25dLCAjZGVtb0J1dHRvbntcXG5cXHRtYXJnaW46IDAuM2VtO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0Zm9udC1zaXplOiAxLjJlbTtcXG5cXHRwYWRkaW5nOiAwLjNlbSAzZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogMWVtO1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRjb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1hY2NlbnQpO1xcblxcdHRyYW5zaXRpb246IDAuNXM7XFxufVxcblxcbmlucHV0W3R5cGU9YnV0dG9uXTpob3ZlciwgI2RlbW9CdXR0b246aG92ZXJ7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWFjY2VudC1saWdodCk7XFxufVxcblxcbmlucHV0W3R5cGU9dGV4dF17XFxuXFx0bWFyZ2luOiAwLjVlbTtcXG5cXHRwYWRkaW5nOiAwLjVlbSAxZW07XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS1jbHItc2Vjb25kYXJ5LW9wYWNpdHktZGFyayk7XFxuXFx0Ym9yZGVyLXJhZGl1czogMWVtO1xcbn1cXG5cXG4jZGVtb0J1dHRvbntcXG5cXHRwYWRkaW5nOiAwLjNlbSAyZW07XFxufVxcblxcbi8qXFx0PT09PT09PT09PT09PT09PT1cXG5cXHQ1LiBTaWduLVVwIFN0eWxlc1xcblxcdD09PT09PT09PT09PT09PT09ICovXFxuXFxuXFxuXFx0LypcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdFxcdDUuMS4gU2lnbi1VcCBHbG9iYWwgU3R5bGVzXFxuXFx0XFx0PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG5mb3Jte1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI3NpZ25VcC1Db250YWluZXItSW5uZXIsICNzaWduVXAtQ29udGFpbmVyLU91dGVye1xcblxcdGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNzaWduVXAtQ29udGFpbmVyLU91dGVye1xcblxcdGhlaWdodDogMTAwdmg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNzaWduVXAtQ29udGFpbmVyLUlubmVye1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG5cXHRtaW4td2lkdGg6IDM1JTtcXG5cXHRtYXgtd2lkdGg6IDgwJTtcXG5cXHRtYXJnaW46IDguNWVtIDNlbSAxM2VtO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1wcmltYXJ5LW9wYWNpdHktbWlkKTtcXG5cXHRib3JkZXItcmFkaXVzOiAyM3B4O1xcbn1cXG5cXG4jc2lnblVwLUZvcm0tQ29udGFpbmVye1xcblxcdG1hcmdpbjowIDFlbTtcXG5cXHRwYWRkaW5nOiAxLjVlbSAwO1xcblxcdG1pbi13aWR0aDogNjAlO1xcblxcdG1heC13aWR0aDogODAlO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1zZWNvbmRhcnktb3BhY2l0eS1taWQpO1xcbn1cXG5cXHRcXHRcXG5cXHQvKlxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHRcXHQ1LjIuIFNpZ24tVXAgVGFyZ2V0IEVsZW1lbnQgU3R5bGVzXFxuXFx0XFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcdFxcdFxcbiNhcHBUaXRsZXtcXG5cXHRmb250LXNpemU6IDJlbTtcXG5cXHRjb2xvcjogdmFyKC0tY2xyLXNlY29uZGFyeSk7XFxuXFx0XFxufVxcblxcbmZvcm0gPiBpbnB1dCwgZm9ybSA+IGxhYmVse1xcblxcdGFsaWduLXNlbGY6IGNlbnRlcjtcXG5cXHRtaW4td2lkdGg6IDYwJTtcXG5cXHRtYXgtd2lkdGg6IDgwJTtcXG59XFxuXFxuZm9ybSA+bGFiZWx7XFxuXFx0Zm9udC1zaXplOiAxLjVlbTtcXG5cXHRjb2xvcjp2YXIoLS1jbHItcHJpbWFyeSk7XFxufVxcblxcbmlucHV0W3R5cGU9YnV0dG9uXSwgI2RlbW9CdXR0b257XFxuXFx0bWFyZ2luOiAwLjNlbTtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdGZvbnQtc2l6ZTogMS4yZW07XFxuXFx0cGFkZGluZzogMC4zZW0gM2VtO1xcblxcdGJvcmRlci1yYWRpdXM6IDFlbTtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuXFx0Y29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYWNjZW50KTtcXG5cXHR0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG5cXG5pbnB1dFt0eXBlPWJ1dHRvbl06aG92ZXIsICNkZW1vQnV0dG9uOmhvdmVye1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1hY2NlbnQtbGlnaHQpO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXRleHRde1xcblxcdG1hcmdpbjogMC41ZW07XFxuXFx0cGFkZGluZzogMC41ZW0gMWVtO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuXFx0YmFja2dyb3VuZDogdmFyKC0tY2xyLXNlY29uZGFyeS1vcGFjaXR5LWRhcmspO1xcblxcdGJvcmRlci1yYWRpdXM6IDFlbTtcXG59XFxuXFxuI2RlbW9CdXR0b257XFxuXFx0cGFkZGluZzogMC4zZW0gMmVtO1xcbn1cXG5cXG4vKlxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHQ2LiBOYXZpZ2F0aW9uIFNlY3Rpb24gU3R5bGVzXFxuXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcdFxcblxcdC8qXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdFxcdDYuMS4gTmF2aWdhdGlvbiBTZWN0aW9uIEdsb2JhbCBTdHlsZXNcXG5cXHRcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuI25hdlNlY3Rpb257XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuXFx0Zm9udC1zaXplOiAyZW07XFxuXFx0cG9zaXRpb246IGZpeGVkO1xcblxcdHRvcDogMDtcXG5cXHR3aWR0aDogMTAwdnc7XFxuXFx0Y29sb3I6IHZhcigtLWNsci1zZWNvbmRhcnkpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1wcmltYXJ5LW9wYWNpdHktbGlnaHQpO1xcbn1cXG5cXG5cXHQvKlxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdFxcdDYuMi4gTmF2aWdhdGlvbiBTZWN0aW9uIFRhcmdldCBFbGVtZW50IFN0eWxlc1xcblxcdFxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiNuYXZTZWN0aW9uID5oMXtcXG5cXHRtYXJnaW4tbGVmdDogMC4yZW07XFxuXFx0Zm9udC1zaXplOiAyZW07XFxuXFx0dHJhbnNpdGlvbjogMC41cztcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbiNuYXZTZWN0aW9uID5oMntcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOjUwJTtcXG5cXHRsZWZ0OjUwJTtcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXFxuXFxuLypcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHQ3LiBOYXZpZ2F0aW9uIE1lbnUgU2VjdGlvbiBTdHlsZXNcXG5cXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG5cXHQvKlxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHRcXHQ3LjEuIE5hdmlnYXRpb24gTWVudSBHbG9iYWwgU3R5bGVzXFxuXFx0XFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiNuYXZNZW51U2VjdGlvbj4qe1xcblxcdG1hcmdpbi10b3A6IDFlbTtcXG59XFxuXFxuI25hdk1lbnVTZWN0aW9ue1xcblxcdHBvc2l0aW9uOiBmaXhlZDtcXG5cXHR0b3A6IDJlbTtcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcblxcdGZvbnQtc2l6ZTogMmVtOyAgXFxuXFx0d2lkdGg6IDI1JTtcXG5cXHRjb2xvcjogdmFyKC0tY2xyLXNlY29uZGFyeSk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLCAwKTtcXG5cXHR0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG5cXG4jZGF0ZVNlbGVjdG9ye1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI3Byb2plY3RTZWxlY3RvcntcXG5cXHRmb250LXNpemU6IDAuNWVtO1xcbn1cXG5cXG4jcHJvamVjdFNlbGVjdG9yPnVse1xcblxcdG1hcmdpbjogMGVtIDFlbTtcXG5cXHRsaXN0LXN0eWxlLXR5cGU6IGRpc2M7XFxufVxcblxcbiNwcm9qZWN0U2VsZWN0b3I+dWw+c2VjdGlvbj4qe1xcblxcdGZsZXgtZ3JvdzogMTtcXG5cXHR0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG5cXG4jcHJvamVjdFNlbGVjdG9yPnVsPnNlY3Rpb24+Kjpob3ZlcntcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItc2Vjb25kYXJ5LW9wYWNpdHktbGlnaHQpO1xcbn1cXG5cXG5cXHQvKlxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdFxcdDcuMi4gTmF2aWdhdGlvbiBNZW51IFRhcmdldCBFbGVtZW50IFN0eWxlc1xcblxcdFxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiNkZWZhdWx0U2VsZWN0b3IgPiBoMntcXG5cXHRtYXJnaW46IDAuNWVtO1xcbn1cXG5cXG4jZGF0ZVNlbGVjdG9yID4gcHtcXG5cXHRmb250LXNpemU6IDAuNzVlbTsgIFxcbn1cXG5cXG4jZGF0ZVNlbGVjdG9yPmlucHV0e1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdG1hcmdpbjogMWVtO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3Byb2plY3RTZWxlY3Rvcj5oMntcXG5cXHRmb250LXNpemU6IDEuNzVlbTtcXG59XFxuXFxuI3Byb2plY3RTZWxlY3Rvcj51bD5saXtcXG5cXHRtYXJnaW46IDAuNWVtO1xcblxcbn1cXG5cXG4jcHJvamVjdFNlbGVjdG9yPnVsPnNlY3Rpb257XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdGhlaWdodDogMmVtO1xcbn1cXG5cXG4jcHJvamVjdFNlbGVjdG9yPnVsPnNlY3Rpb24+LmVkaXR7XFxuXFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltYWdlcy9pY29uczgtZWRpdC5zdmcnKTtcXG5cXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcblxcdGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbn1cXG5cXG4jcHJvamVjdFNlbGVjdG9yPnVsPnNlY3Rpb24+LmRlbGV0ZXtcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1hZ2VzL2ljb25zOC10cmFzaC1jYW4uc3ZnJyk7XFxuXFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG59XFxuXFxuI3Byb2plY3RTZWxlY3Rvcj51bD4uYWRkUHJvamVjdHtcXG5cXHRwYWRkaW5nOiAwLjZlbTtcXG5cXHRmb250LXNpemU6IDEuMmVtO1xcblxcdG1hcmdpbi10b3A6IDAuNWVtO1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMC41ZW07XFxuXFx0Y29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYWNjZW50KTtcXG5cXHR0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG5cXG4jcHJvamVjdFNlbGVjdG9yPnVsPi5hZGRQcm9qZWN0OmhvdmVye1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1hY2NlbnQtbGlnaHQpO1xcbn1cXG5cXG4vKlxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdDcuMy4gTmF2aWdhdGlvbiBFZGl0IFNlY3Rpb24gR2xvYmFsIFN0eWxlc1xcblxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiNlZGl0UHJvamVjdENvbnRhaW5lcntcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGJvcmRlcjogMC4yZW0gaW5zZXQgdmFyKC0tY2xyLWFjY2VudCk7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2VkaXRQcm9qZWN0Q29udGFpbmVyPip7XFxuXFx0ZmxleC1ncm93OiAxO1xcbn1cXG5cXG4jZWRpdFByb2plY3RDb250YWluZXI+LmRvbmUtY2FuY2VsU2VjdGlvbj4qe1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMmVtO1xcbn1cXG5cXG5cXHQvKlxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHQ3LjQuIE5hdmlnYXRpb24gRWRpdCBTZWN0aW9uIFRhcmdldCBFbGVtZW50IFN0eWxlc1xcblxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuI2VkaXRQcm9qZWN0Q29udGFpbmVye1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Ym9yZGVyOiAwLjJlbSBpbnNldCB2YXIoLS1jbHItYWNjZW50KTtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jZWRpdFByb2plY3RDb250YWluZXI+LmRvbmUtY2FuY2VsU2VjdGlvbntcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcblxcdHRyYW5zaXRpb246IDAuNXM7XFxufVxcblxcbiNlZGl0UHJvamVjdENvbnRhaW5lcj4uZWRpdFRhc2tTZWxlY3Q+aW5wdXR7XFxuXFx0d2lkdGg6IDgwJTtcXG59XFxuXFxuI2VkaXRQcm9qZWN0Q29udGFpbmVyPi5kb25lLWNhbmNlbFNlY3Rpb24+Kjpob3ZlcntcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItc2Vjb25kYXJ5LW9wYWNpdHktbGlnaHQpO1xcbn1cXG5cXG4vKlxcdD09PT09PT09PT09PT09PT09PT09PVxcblxcdDguIE1haW4gU2VjdGlvbiBTdHllc1xcblxcdD09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcblxcdC8qXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdFxcdDguMS4gTWFpbiBTZWN0aW9uIEdsb2JhbCBTdHlsZXNcXG5cXHRcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuI21haW5TZWN0aW9uPip7XFxuXFx0bWluLXdpZHRoOiA4MCU7XFxufVxcblxcbiNtYWluU2VjdGlvbiwgLml0ZW1zLCAudGFza3N7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuI21haW5TZWN0aW9ue1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRtYXJnaW4tdG9wOiAzZW07XFxuXFx0cGFkZGluZy1ib3R0b206IDJlbTtcXG5cXHRnYXA6IDAuNWVtIDBlbTtcXG5cXHRmb250LXNpemU6IDEuNWVtO1xcblxcdGNvbG9yOiB2YXIoLS1jbHItc2Vjb25kYXJ5KTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeS1vcGFjaXR5LWRhcmspO1xcbn1cXG5cXG4uaXRlbXN7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG59XFxuXFxuLnRhc2tze1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxufVxcblxcbi5pdGVtcyA+ICp7XFxuXFx0Z3JpZC1jb2x1bW46IDEgLyBzcGFuIDM7XFxufVxcblxcbi5pdGVtc3tcXG5cXHRjb2xvcjogdmFyKC0tY2xyLXNlY29uZGFyeSk7XFxuXFx0cGxhY2Utc2VsZjogY2VudGVyO1xcblxcdGdhcDogMC41ZW0gMGVtO1xcblxcdG1hcmdpbi1ib3R0b206IDAuNWVtO1xcblxcdGJhY2tncm91bmQ6IHZhcigtLWNsci1zZWNvbmRhcnktb3BhY2l0eS1saWdodCk7XFxufVxcblxcbi50YXNrcz4qe1xcblxcdHBsYWNlLXNlbGY6IGNlbnRlcjtcXG5cXHRwYWRkaW5nOiAwLjJlbTtcXG59XFxuXFxuLnRhc2tzPnNlY3Rpb24+KntcXG5cXHRoZWlnaHQ6IDJlbTtcXG5cXHR3aWR0aDogMmVtO1xcblxcdGZsZXgtZ3JvdzogMTtcXG5cXHR0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG5cXG4udGFza3M+c2VjdGlvbj4qOmhvdmVye1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1zZWNvbmRhcnktb3BhY2l0eS1saWdodCk7XFxufVxcblxcblxcdC8qXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0XFx0OC4yLiBNYWluIFNlY3Rpb24gVGFyZ2V0IEVsZW1lbnQgU3R5bGVzXFxuXFx0XFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuI21haW5TZWN0aW9uID4gaDJ7XFxuXFx0Zm9udC1zaXplOiAxLjVlbTtcXG5cXHRwYWRkaW5nOiAwLjVlbTtcXG59XFxuXFxuLml0ZW1zPmgye1xcblxcdGZvbnQtc2l6ZTogMS41ZW07XFxuXFx0cGFkZGluZy10b3A6IDAuMmVtO1xcbn1cXG5cXG4udGFza3M+bGFiZWx7XFxuXFx0Y29sb3I6IHZhcigtLWNsci1zZWNvbmRhcnkpO1xcblxcdHBsYWNlLXNlbGY6IGNlbnRlcjtcXG5cXHRmb250LXNpemU6IDFlbTtcXG5cXHR3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRhc2tzPmlucHV0e1xcblxcdGhlaWdodDogMmVtO1xcblxcdHdpZHRoOiAyZW07XFxufVxcblxcbi50YXNrcz5zZWN0aW9ue1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHdpZHRoOjEwMCU7XFxufVxcblxcbi5lZGl0e1xcblxcdGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLWltZy1lZGl0KTtcXG59XFxuXFxuLmRlbGV0ZXtcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1pbWctdHJhc2gpO1xcbn1cXG5cXG4uYWRkVGFza3tcXG5cXHRwYWRkaW5nOiAwLjZlbTtcXG5cXHRtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG5cXHRmb250LXNpemU6IDAuOGVtO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGdyaWQtY29sdW1uOiAyO1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMC41ZW07XFxuXFx0Y29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYWNjZW50KTtcXG5cXHR0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG5cXG4uYWRkVGFzazpob3ZlcntcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYWNjZW50LWxpZ2h0KTtcXG59XFxuXFxuXFx0LypcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHRcXHQ4LjMuIE1haW4gRWRpdCBTZWN0aW9uIEdsb2JhbCBTdHlsZXNcXG5cXHRcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4jZWRpdFRhc2s+KntcXG5cXHRwbGFjZS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbiNlZGl0VGFzaz5zZWN0aW9uPip7XFxuXFx0aGVpZ2h0OiBhdXRvO1xcblxcdHdpZHRoOiA5MCU7XFxuXFx0dHJhbnNpdGlvbjogMC41cztcXG59XFxuXFxuI2VkaXRUYXNrPi5kb25lLWNhbmNlbFNlY3Rpb24+Kjpob3ZlcntcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItc2Vjb25kYXJ5LW9wYWNpdHktbGlnaHQpO1xcbn1cXG5cXG4jZWRpdFRhc2s+LmRvbmUtY2FuY2VsU2VjdGlvbj4qe1xcblxcdHdpZHRoOiBhdXRvO1xcblxcdGhlaWdodDogYXV0bztcXG5cXHRmbGV4LWdyb3c6IDE7XFxufVxcblxcblxcdC8qXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHRcXHQ4LjQuIE1haW4gRWRpdCBTZWN0aW9uIFRhcmdldCBFbGVtZW50IFN0eWxlc1xcblxcdFxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuI2VkaXRUYXNrQ29udGFpbmVye1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Z3JpZC1jb2x1bW46IHNwYW4gNDtcXG59XFxuXFxuI2VkaXRUYXNre1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0bWFyZ2luOiBhdXRvO1xcblxcdHdpZHRoOiA4MCU7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDAuMmVtIGluc2V0IHZhcigtLWNsci1hY2NlbnQpO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuXFx0Y29sdW1uLWdhcDogMC41ZW07XFxufVxcblxcbiNlZGl0VGFzaz5zZWN0aW9ue1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0d2lkdGg6IDEwMCU7XFxufVxcblxcbiNlZGl0VGFzaz5zZWN0aW9uPmxhYmVse1xcblxcdGNvbG9yOiB2YXIoLS1jbHItc2Vjb25kYXJ5KTtcXG5cXHRwbGFjZS1zZWxmOiBjZW50ZXI7XFxuXFx0Zm9udC1zaXplOiAxZW07XFxuXFx0d2lkdGg6IDEwMCU7XFxufVxcblxcbiNlZGl0VGFzaz5zZWN0aW9uPnRleHRhcmVhe1xcblxcdHJlc2l6ZTogdmVydGljYWw7XFxufVxcblxcbiNlZGl0VGFzaz4uZG9uZS1jYW5jZWxTZWN0aW9ue1xcblxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5kb25le1xcblxcdGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLWltZy1kb25lKTtcXG59XFxuXFxuLmNhbmNlbHtcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1pbWctY2FuY2VsKTtcXG59XFxuXFxuLypcXHQ9PT09PT09PT09PT09PT09PT09PT09PVxcblxcdCouIEZvb3RlciBTdHlsZSBTZWN0aW9uXFxuXFx0PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4jZm9vdGVyU2VjdGlvbntcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0bGVmdDogMDtcXG5cXHRib3R0b206IDA7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXNlY29uZGFyeSk7XFxuXFx0Y29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi8qXFx0PT09PT09PT09PT09PT09PT09PT09PVxcblxcdCouIE1lZGlhIFF1ZXJ5IFNlY3Rpb25cXG5cXHQ9PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NTBweCkge1xcblxcblxcdC8qXFx0PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdFxcdCouMS4gR2xvYmFsIE1lZGlhIFF1ZXJpZXNcXG5cXHRcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuXFx0Ym9keSB7XFxuXFx0XFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltYWdlcy9Ub0RvQXBwQmFja2dyb3VuZC1jcm9wcGVkLmpwZycpO1xcblxcdH1cXG5cXG5cXHQvKlxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdFxcdCouMi4gcGFnZUdyaWRDb250YWluZXIgTWVkaWEgUXVlcmllc1xcblxcdFxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcblxcdCNwYWdlR3JpZENvbnRhaW5lcntcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG5cXHRcXHRcXFwiaGVhZGVyIGhlYWRlciBoZWFkZXIgaGVhZGVyXFxcIlxcblxcdFxcdFxcXCJzaWRlYmFyIG1haW4gbWFpbiBtYWluXFxcIlxcblxcdFxcdFxcXCJmb290ZXIgZm9vdGVyIGZvb3RlciBmb290ZXJcXFwiO1xcblxcdH1cXG5cXG5cXG5cXHQvKlxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHRcXHQqLjMuIE5hdmlnYXRpb24gU2VjdGlvbiBNZWRpYSBRdWVyaWVzXFxuXFx0XFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcblxcdCNtYWluU2VjdGlvbntcXG5cXHRcXHRtYXJnaW46IDNlbSAxZW0gMGVtO1xcblxcdH1cXG5cXG5cXHQjbWFpblNlY3Rpb24+KntcXG5cXHRcXHRtaW4td2lkdGg6IDc1JTtcXG5cXHR9XFxuXFxuXFx0I25hdlNlY3Rpb24+aDF7XFxuXFx0XFx0dHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcXG5cXHR9XFxuXFxuXFx0LypcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHRcXHQqLjQuIE5hdmlnYXRpb24gTWVudSBTZWN0aW9uIE1lZGlhIFF1ZXJpZXNcXG5cXHRcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG5cXHQjbmF2TWVudVNlY3Rpb257XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XFxuXFx0fVxcblxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGNvbnN0IGdsb2JhbGpzID0gKCgpID0+IHsgICAgXG4gICAgLy9GdW5jdGlvbiBMaXN0XG4gICAgY29uc3QgbmV3RWxlbWVudCA9IChpdGVtKSA9PiB7XG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdGVtLnRhZyk7XG4gICAgICAgIGlmIChpdGVtLmh0bWxTdHJpbmcpIHsgZWxlbWVudC5pbm5lckhUTUwgPSBpdGVtLmh0bWxTdHJpbmc7IH07XG4gICAgICAgIGlmIChpdGVtLmNsYXNzSWQpIHsgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgaXRlbS5jbGFzc0lkKX07XG4gICAgICAgIGlmIChpdGVtLmlkKSB7IGVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsIGl0ZW0uaWQpfTtcbiAgICAgICAgaWYgKGl0ZW0uZm9yKSB7IGVsZW1lbnQuc2V0QXR0cmlidXRlKCdmb3InLCBpdGVtLmZvcil9O1xuICAgICAgICBpZiAoaXRlbS50eXBlKSB7IGVsZW1lbnQuc2V0QXR0cmlidXRlKCd0eXBlJywgaXRlbS50eXBlKX07XG4gICAgICAgIGlmIChpdGVtLm5hbWUpIHsgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBpdGVtLm5hbWUpfTtcbiAgICAgICAgaWYgKGl0ZW0udmFsdWUpIHsgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgaXRlbS52YWx1ZSl9O1xuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtuZXdFbGVtZW50Om5ld0VsZW1lbnR9XG59KSgpIiwiaW1wb3J0IHsgZ2xvYmFsanMgfSBmcm9tICcuLi9nbG9iYWwnO1xuXG5leHBvcnQgY29uc3Qgc2lnbkluU2VjdGlvbkNyZWF0aW9uID0gKCgpID0+IHtcbiAgICBjb25zdCBjYWNoZURvbSA9ICgoKSA9PiB7XG4gICAgICAgIGxldCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKTtcbiAgICAgICAgcmV0dXJuIHsgYm9keTogYm9keSB9O1xuICAgIH0pKCk7XG5cbiAgICAvL1NpZ24gaW4gT2JqZWN0IExpc3RcbiAgICBjb25zdCBTaWduSW5PYmplY3RMaXN0ID0ge1xuXG4gICAgICAgIHNpZ25JbkNvbnRhaW5lck91dGVyOiB7XG4gICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgaWQ6ICdzaWduSW4tQ29udGFpbmVyLU91dGVyJyxcbiAgICAgICAgfSxcblxuICAgICAgICBzaWduSW5Db250YWluZXJJbm5lcjoge1xuICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgIGlkOiAnc2lnbkluLUNvbnRhaW5lci1Jbm5lcicsXG4gICAgICAgIH0sXG5cbiAgICAgICAgYXBwVGl0bGU6IHtcbiAgICAgICAgICAgIHRhZzogJ2gyJyxcbiAgICAgICAgICAgIGlkOiAnYXBwVGl0bGUnLFxuICAgICAgICAgICAgaHRtbFN0cmluZzogJ1dlbGNvbWUgdG8gQ2hlY2tpc3QnLFxuICAgICAgICB9LFxuXG4gICAgICAgIHNpZ25JbkZvcm1Db250YWluZXI6IHtcbiAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICBpZDogJ3NpZ25Jbi1Gb3JtLUNvbnRhaW5lcicsXG4gICAgICAgIH0sXG5cbiAgICAgICAgc2lnbmluRm9ybToge1xuICAgICAgICAgICAgdGFnOiAnZm9ybScsXG4gICAgICAgICAgICBpZDogJ3VzZXJJbmZvJyxcbiAgICAgICAgfSxcblxuICAgICAgICB1c2VySW5mbzoge1xuICAgICAgICAgICAgdXNlcm5hbWVMYWJlbDoge1xuICAgICAgICAgICAgICAgIHRhZzogJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICBmb3I6ICd1c2VyTmFtZScsXG4gICAgICAgICAgICAgICAgaHRtbFN0cmluZzogJ1VzZXJuYW1lJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1c2VybmFtZUlucHV0OiB7XG4gICAgICAgICAgICAgICAgdGFnOiAnaW5wdXQnLFxuICAgICAgICAgICAgICAgIGlkOiAndXNlck5hbWUnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICBuYW1lOiAndXNlck5hbWUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhc3N3b3JkTGFiZWw6IHtcbiAgICAgICAgICAgICAgICB0YWc6ICdsYWJlbCcsXG4gICAgICAgICAgICAgICAgZm9yOiAncGFzc3dvcmQnLFxuICAgICAgICAgICAgICAgIGh0bWxTdHJpbmc6ICdQYXNzd29yZCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGFzc3dvcmRJbnB1dDoge1xuICAgICAgICAgICAgICAgIHRhZzogJ2lucHV0JyxcbiAgICAgICAgICAgICAgICBpZDogJ3Bhc3N3b3JkJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3Bhc3N3b3JkJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaWduaW5CdXR0b246IHtcbiAgICAgICAgICAgICAgICB0YWc6ICdpbnB1dCcsXG4gICAgICAgICAgICAgICAgaWQ6J3NpZ25JbkJ1dHRvbicsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICdTaWduIEluJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaWdudXBCdXR0b246IHtcbiAgICAgICAgICAgICAgICB0YWc6ICdpbnB1dCcsXG4gICAgICAgICAgICAgICAgaWQ6J3NpZ25VcEJ1dHRvbicsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICdTaWduIFVwJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG5cbiAgICAgICAgZGVtb0J1dHRvbjoge1xuICAgICAgICAgICAgdGFnOiAnYnV0dG9uJyxcbiAgICAgICAgICAgIGlkOiAnZGVtb0J1dHRvbicsXG4gICAgICAgICAgICBodG1sU3RyaW5nOiAnRGVtbycsXG4gICAgICAgIH0sXG5cbiAgICB9O1xuICAgIFxuICAgIC8vRnVjdGlvbiBMaXN0XG5cbiAgICAvL1JldHVybiBGb3JtIEVsZW1lbnQgQ29udGVudHMgYXMgbGlzdFxuICAgIGNvbnN0IGZvcm1FbGVtZW50Q29udGVudExpc3QgPSAoKSA9PiB7XG4gICAgICAgIGxldCBjb250ZW50TGlzdCA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgT2JqZWN0LmtleXMoU2lnbkluT2JqZWN0TGlzdC51c2VySW5mbykubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBlbGVtZW50ID0gZ2xvYmFsanMubmV3RWxlbWVudChTaWduSW5PYmplY3RMaXN0LnVzZXJJbmZvW09iamVjdC5rZXlzKFNpZ25Jbk9iamVjdExpc3QudXNlckluZm8pW2ldXSk7XG4gICAgICAgICAgICBjb250ZW50TGlzdC5wdXNoKGVsZW1lbnQpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gY29udGVudExpc3Q7XG4gICAgfTtcbiAgICAgIFxuICAgIC8vUmV0dXJucyBGb3JtIEVsZW1lbnQgU2VjdGlvblxuICAgIGNvbnN0IGZvcm1FbGVtZW50U2VjdGlvbiA9ICgpID0+IHtcbiAgICAgICAgbGV0IGNvbnRlbnRMaXN0ID0gZm9ybUVsZW1lbnRDb250ZW50TGlzdCgpLFxuICAgICAgICAgICAgZWxlbWVudCA9IGdsb2JhbGpzLm5ld0VsZW1lbnQoU2lnbkluT2JqZWN0TGlzdC5zaWduaW5Gb3JtKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRlbnRMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNvbnRlbnRMaXN0W2ldKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9O1xuXG4gICAgLy9SZXR1cm5zIFNpZ24gSW4gRm9ybSBDb250YWluZXIgU2VjdGlvblxuICAgIGNvbnN0IHNpZ25JbkZvcm1Db250YWluZXJTZWN0aW9uID0gKCkgPT4ge1xuICAgICAgICBsZXQgZWxlbWVudCA9IGdsb2JhbGpzLm5ld0VsZW1lbnQoU2lnbkluT2JqZWN0TGlzdC5zaWduSW5Gb3JtQ29udGFpbmVyKTtcblxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGZvcm1FbGVtZW50U2VjdGlvbigpKTtcblxuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9O1xuXG4gICAgLy9SZXR1cm5zIFNpZ24gSW4gQ29udGFpbmVyIElubmVyIFNlY3Rpb25cbiAgICBjb25zdCBzaWduSW5Db250YWluZXJJbm5lclNlY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIGxldCBjb250YWluZXJFbGVtZW50ID0gZ2xvYmFsanMubmV3RWxlbWVudChTaWduSW5PYmplY3RMaXN0LnNpZ25JbkNvbnRhaW5lcklubmVyKSxcbiAgICAgICAgICAgIGgyRWxlbWVudCA9IGdsb2JhbGpzLm5ld0VsZW1lbnQoU2lnbkluT2JqZWN0TGlzdC5hcHBUaXRsZSksXG4gICAgICAgICAgICBidXR0b25FbGVtZW50ID0gZ2xvYmFsanMubmV3RWxlbWVudChTaWduSW5PYmplY3RMaXN0LmRlbW9CdXR0b24pLFxuICAgICAgICAgICAgc2lnbkluRm9ybUNvbnRhaW5lciA9IHNpZ25JbkZvcm1Db250YWluZXJTZWN0aW9uKCksXG4gICAgICAgICAgICBlbGVtZW50TGlzdCA9IFtoMkVsZW1lbnQsIHNpZ25JbkZvcm1Db250YWluZXIsIGJ1dHRvbkVsZW1lbnRdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudExpc3RbaV0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBjb250YWluZXJFbGVtZW50O1xuICAgIH07XG5cbiAgICAvL1JldHVybnMgU2lnbiBJbiBDb250YWluZXIgT3V0ZXIgU2VjdGlvblxuICAgIGNvbnN0IHNpZ25JbkNvbnRhaW5lck91dGVyU2VjdGlvbiA9ICgpID0+IHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBnbG9iYWxqcy5uZXdFbGVtZW50KFNpZ25Jbk9iamVjdExpc3Quc2lnbkluQ29udGFpbmVyT3V0ZXIpLFxuICAgICAgICBzaWduSW5Db250YWluZXJJbm5lciA9IHNpZ25JbkNvbnRhaW5lcklubmVyU2VjdGlvbigpO1xuXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoc2lnbkluQ29udGFpbmVySW5uZXIpO1xuXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH07XG5cbiAgICAvLyBTaWduIEluIHNlY3Rpb24gQ3JlYXRpb25cbiAgICBjb25zdCBjcmVhdGVTZWN0aW9uID0gKCkgPT57XG4gICAgICAgIGxldCBlbGVtZW50ID0gc2lnbkluQ29udGFpbmVyT3V0ZXJTZWN0aW9uKCk7XG5cbiAgICAgICAgcmVuZGVyLmJvZHlBcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICB9O1xuXG5cbiAgICAvLyBSZW5kZXIgdG8gRE9NXG4gICAgY29uc3QgcmVuZGVyID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgYm9keUFwcGVuZENoaWxkID0gKGVsZW1lbnQpID0+e1xuICAgICAgICAgICAgY2FjaGVEb20uYm9keVswXS5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4ge2JvZHlBcHBlbmRDaGlsZDogYm9keUFwcGVuZENoaWxkIH07XG4gICAgfSkoKTtcblxuICAgIHJldHVybntjcmVhdGVTZWN0aW9uOmNyZWF0ZVNlY3Rpb24scmVuZGVyOnJlbmRlcn07XG59KSgpOyIsIlxuICBcbi8vIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIkFuZHJld1wiLCBKU09OLnN0cmluZ2lmeShBbmRyZXcpKTtcblxuLy8gbGV0IG5ld09iamVjdCA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIkFuZHJld1wiKTtcbi8vIGNvbnNvbGUubG9nKEpTT04ucGFyc2UobmV3T2JqZWN0KSk7XG5cblxuLy8gbGV0IGluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlckluZm8nKVxuXG4vLyBjb25zb2xlLmxvZyhpbmZvLmVsZW1lbnRzWyd1c2VyTmFtZSddLnZhbHVlKVxuXG5cblxuLy8gbGV0IHRlc3QgPSAoKSA9PiB7XG4vLyAgICAgaWYod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGluZm8uZWxlbWVudHNbJ3VzZXJOYW1lJ10udmFsdWUpID09IG51bGwpe1xuLy8gICAgICAgICBjb25zb2xlLmxvZygnVGhpcyBpcyBub3QgYSB1c2VybmFtZScpXG4vLyAgICAgfWVsc2V7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCdUaGlzIE1hdGNoZXMnKVxuLy8gICAgICAgICBjb25zb2xlLmxvZyh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oaW5mby5lbGVtZW50c1sndXNlck5hbWUnXS52YWx1ZSkpXG4vLyAgICAgICAgIGxldCB0ZXN0MiA9IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGluZm8uZWxlbWVudHNbJ3VzZXJOYW1lJ10udmFsdWUpKVxuLy8gICAgICAgICBjb25zb2xlLmxvZyh0ZXN0Mi5wYXNzd29yZClcbi8vICAgICB9XG4vLyB9XG5cblxuLy8gbGV0IHRlc3QyID0gKHgpID0+IHtcbi8vICAgICBpZih3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oaW5mby5lbGVtZW50c1sndXNlck5hbWUnXS52YWx1ZSkgPT0gbnVsbCl7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCdUaGlzIGlzIG5vdCBhIHVzZXJuYW1lJylcbi8vICAgICB9ZWxzZXtcbi8vICAgICAgICAgY29uc29sZS5sb2coJ1RoaXMgTWF0Y2hlcycpXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShpbmZvLmVsZW1lbnRzWyd1c2VyTmFtZSddLnZhbHVlKSlcbi8vICAgICB9XG4vLyB9XG5cbi8vIHRlc3QoKVxuXG4vLyB3aW5kb3cubG9jYWxTdG9yYWdlLmNsZWFyKClcblxuXG5cbi8vIFRoaXMgU2lnbiBpbiBtb2R1bGUgaGFzIHRvIGhhbmRsZTpcbi8vICAgICAgLXZlcmlmaWNhdGlvblxuLy8gICAgICAtU2lnbi1pbiB1c2luZyBkYXRhIGZyb20gTG9jYWwgU3RvcmFnZSBvciB1c2UgRGVmYXVsdHMgZnJvbSBEZW1vXG4vLyAgICAgIC1TaWduLXVwIHBhZ2UgY3JlYXRpb24vZGlzcGxheSB3aGVuIG5lZWRlZFxuLy8gICAgICAtYWRkaW5nIGNyZWF0ZWQgU2lnbi1pbiB0byBzdG9yYWdlIChNb3N0IGxpa2VseSB1c2luZyBhIGZ1Y3Rpb24gaW4gdGhlIHVzZXJTdG9yYWdlIE1vZHVsZSlcbi8vICAgICAgLURlbW8gQnV0dHRvbiBuZWVkcyB0byBydW4gYSBmdW5jdGlvbiBmcm9tIE1haW4gU2VjdGlvbiBtb2R1bGUgdXNpbmcgdGhlIERlbW8gdXNlciBkYXRhXG5cbmltcG9ydCB7IGdsb2JhbGpzIH0gZnJvbSAnLi4vZ2xvYmFsJztcbmltcG9ydCB7IHVzZXJTdG9yYWdlIH0gZnJvbSAnLi4vdXNlclN0b3JhZ2UnO1xuXG5leHBvcnQgY29uc3Qgc2lnbkluU2VjdGlvbkZ1bmN0aW9uID0gKCgpID0+IHtcbiAgICBjb25zdCBjYWNoZURvbSA9ICgoKSA9PiB7XG4gICAgICAgIGxldCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVxuICAgICAgICByZXR1cm4geyBib2R5OiBib2R5fTtcbiAgICB9KSgpO1xuICAgIFxuICAgIC8vIEluZm8gT2JqZWN0IExpc3RcbiAgICBjb25zdCB1c2VycyA9IHtcbiAgICAgICAgdXNlckxpc3Q6WydBbmRyZXcnXSxcblxuICAgICAgICBBbmRyZXc6e1xuICAgICAgICAgICAgdXNlcklEOidBbmRyZXcnLFxuICAgICAgICAgICAgcGFzc3dvcmQgOiBcIkFuZHJld1wiLFxuICAgICAgICAgICAgdXNlclN0b3JhZ2VJbmZvOiAnRGVtbydcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIH07XG5cbiAgICAvL0V2ZW50IEJpbmRzXG5cbiAgICBcbiAgICAvL0Z1bmN0aW9uIExpc3RcbiAgICBjb25zdCBjYWNoZURvbVRlc3RGdW5jdGlvbiA9ICgpID0+IHtcbiAgICAgICAgbGV0IGluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlckluZm8nKVxuICAgICAgICAgICAgc2lnbkluQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZ25JbkJ1dHRvbicpXG4gICAgICAgICAgICBzaWduVXBCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lnblVwQnV0dG9uJylcblxuICAgICAgICBcblxuICAgICAgICBjb25zdCB0ZXN0RnVuY3Rpb24gPSAoKSA9PntcbiAgICAgICAgICAgIGlmKHVzZXJzLnVzZXJMaXN0LmluY2x1ZGVzKGluZm8uZWxlbWVudHNbJ3VzZXJOYW1lJ10udmFsdWUpKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVXNlciBJZCBtYXRjaCcpXG5cbiAgICAgICAgICAgICAgICBpZih1c2Vyc1tpbmZvLmVsZW1lbnRzWyd1c2VyTmFtZSddLnZhbHVlXS5wYXNzd29yZCA9PSBpbmZvLmVsZW1lbnRzWydwYXNzd29yZCddLnZhbHVlKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1Bhc3N3b3JkIE1hdGNoJylcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1Bhc3N3b3JkIGRvZXMgbm90IG1hdGNoJylcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdVc2VyIElEIGRvZXMgbm90IG1hdGNoJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHNpZ25JbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRlc3RGdW5jdGlvbilcbiAgICAgICAgXG4gICAgfTtcblxuICAgIC8vIFJlbmRlciB0byBET01cbiAgICBjb25zdCByZW5kZXIgPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBib2R5QXBwZW5kQ2hpbGQgPSAoZWxlbWVudCkgPT57XG4gICAgICAgICAgICBjYWNoZURvbS5ib2R5WzBdLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB7Ym9keUFwcGVuZENoaWxkOiBib2R5QXBwZW5kQ2hpbGQgfTtcbiAgICB9KSgpO1xuXG5cblxuICAgIHJldHVybntyZW5kZXI6cmVuZGVyLGNhY2hlRG9tVGVzdEZ1bmN0aW9uOmNhY2hlRG9tVGVzdEZ1bmN0aW9ufVxuXG5cbn0pKClcbiIsImV4cG9ydCBjb25zdCB1c2VyU3RvcmFnZSA9ICgoKSA9PntcbiAgICBjb25zdCBEZW1vID0ge1xuICAgICAgICBwYXNzd29yZCA6IFwiRGVtb1wiLFxuICAgICAgICBwcm9qZWN0VGl0bGVzIDogWydIb21lIENob3JlcycsICdXb3JrJywgJ0Zvb2QgUHJlcCddLFxuXG4gICAgICAgIGl0ZW0wOntcbiAgICAgICAgICAgIHRhc2tMaXN0OlsnTGF1bmRyeScsICdWYWN1dW0nLCAnRGlzaGVzJ10sXG4gICAgICAgICAgICB0YXNrczp7XG4gICAgICAgICAgICAgICAgdGFzazA6e1xuICAgICAgICAgICAgICAgICAgICBkdWVEYXRlOicxMS8yNi8yMicsXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbm90ZXM6J0dhdGhlciBzaGVldHMgYXMgV2VsbCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRhc2sxOntcbiAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZTonMTEvMjYvMjInLFxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIG5vdGVzOidCZSBzdXJlIHRvIGdldCB1bmRlciBCZWQnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0YXNrMjp7XG4gICAgICAgICAgICAgICAgICAgIGR1ZURhdGU6JzExLzI2LzIyJyxcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBub3RlczonR2F0aGVyIGRpc2hlcyBmcm9tIERlc2snXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBpdGVtMTp7XG4gICAgICAgICAgICB0YXNrTGlzdDpbJ0NoZWNrIEUtbWFpbCcsICdVcGRhdGUgUHJvamVjdCcsICdUZWFtIE1lZXRpbmcnXSxcbiAgICAgICAgICAgIHRhc2tzOntcbiAgICAgICAgICAgICAgICB0YXNrMDp7XG4gICAgICAgICAgICAgICAgICAgIGR1ZURhdGU6JzExLzI2LzIyJyxcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBub3RlczonU2VlIGlmIEZyYW5rIHJlcGxpZWQnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0YXNrMTp7XG4gICAgICAgICAgICAgICAgICAgIGR1ZURhdGU6JzExLzI2LzIyJyxcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBub3RlczonQmUgc3VyZSB0byBpbmNsdWRlIHVwZGF0ZXMgZnJvbSBwcmV2aW91cyBUZWFtIG1lZXRpbmcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0YXNrMjp7XG4gICAgICAgICAgICAgICAgICAgIGR1ZURhdGU6JzExLzI2LzIyJyxcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBub3RlczonQ2xhcmlmeSBhbnkgbmV3IFVwZGF0ZSBEdXJpbmcgbWVldGluZydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGl0ZW0yOntcbiAgICAgICAgICAgIHRhc2tMaXN0OlsnVGhhdyBNZWF0JywgJ0N1dCBWZWdldGFibGVzJywgJ0Nvb2sgUmljZSddLFxuICAgICAgICAgICAgdGFza3M6e1xuICAgICAgICAgICAgICAgIHRhc2swOntcbiAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZTonMTEvMjYvMjInLFxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIG5vdGVzOidTZXQgTWVldCBpbiBmcmlkZ2UgZm9yIG5leHQgZGF5J1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGFzazE6e1xuICAgICAgICAgICAgICAgICAgICBkdWVEYXRlOicxMS8yNi8yMicsXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbm90ZXM6J1BvdGF0b2VzIGN1dCBpbiBmb3VydGhzJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGFzazI6e1xuICAgICAgICAgICAgICAgICAgICBkdWVEYXRlOicxMS8yNi8yMicsXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbm90ZXM6J0JlIHN1cmUgbW9zdHQgd2F0ZXIgaXMgZXZhcG9yYXRlZCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIFxuICAgICAgfVxuICAgICAgcmV0dXJuIHtEZW1vOkRlbW99XG59KSgpIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCIvLyBUaGlzIGlzIGp1c3QgYSBwbGFjZSBIb2xkZXJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgdXNlclN0b3JhZ2UgfSBmcm9tICcuL3VzZXJTdG9yYWdlJztcbmltcG9ydCB7IHNpZ25JblNlY3Rpb25GdW5jdGlvbiB9IGZyb20gJy4vc2lnbkluU2VjdGlvbkZpbGVzL3NpZ25JblNlY3Rpb25GdW5jdGlvbic7XG5pbXBvcnQgeyBzaWduSW5TZWN0aW9uQ3JlYXRpb24gfSBmcm9tICcuL3NpZ25JblNlY3Rpb25GaWxlcy9zaWduSW5TZWN0aW9uQ3JlYXRpb24nO1xuLy8gY29uc29sZS5sb2coJ05vdyB0aW1lIGZvciB0aGUgSlMnKVxuXG5zaWduSW5TZWN0aW9uQ3JlYXRpb24uY3JlYXRlU2VjdGlvbigpO1xuXG5zaWduSW5TZWN0aW9uRnVuY3Rpb24uY2FjaGVEb21UZXN0RnVuY3Rpb24oKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==