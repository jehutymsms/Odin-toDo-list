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
___CSS_LOADER_EXPORT___.push([module.id, "/* Table of Contents\n\t1. Imports\n\t2. Global Styles\n\t\t2.1. Global Styles Variables\n\t\t\t2.1.1. Global Styles Variables-Color\n\t\t\t2.1.2. Global Styles Variables-Font\n\t\t\t2.1.3. Global Styles Images\n\t\t2.2. Global Styles Global\n\t3. pageGridContainer Styles\n\t\t3.1. pageGridContainer Global Styles\n\t\t3.2. pageGridContainer Target Element Styles\n\t4. Sign-in Styles\n\t\t4.1. Sign-in Global Styles\n\t\t4.2. Sign-in Target Element Styles\n\t5. Sign-Up Styles\n\t\t5.1. Sign-Up Global Styles\n\t\t5.2. Sign-Up Target Element Styles\n\t6. Navigation Section Styles\n\t\t6.1. Navigation Section Global Styles\n\t\t6.2. Navigation Section Target Element Styles\n\t7. Navigation Menu Section Styles\n\t\t7.1. Navigation Menu Global Styles\n\t\t7.2. Navigation Menu Target Element Styles\n\t\t7.3. Navigation Edit Section Global Styles\n\t\t7.4. Navigation Edit Section Target Element Styles\n\t8. Main Section Styes\n\t\t8.1. Main Section Global Styles\n\t\t8.2. Main Section Target Element Styles\n\t\t8.3. Main Edit Section Global Styles\n\t\t8.4. Main Edit Section Target Element Styles\n\t*. Footer Style Section\n\t*. Media Query Section\n\t\t*.1. Global Media Queries\n\t\t*.2. pageGridContainer Media Queries\n\t\t*.3. Navigation Section Media Queries\n\t\t*.4. Navigation Menu Section Media Queries\n\n*/\n\n/*\t==========\n\t1. Imports\n\t========== */\n\n/*\t================\n\t2. Global Styles\n\t================ */\n\n\t/*\t============================\n\t\t2.1. Global Styles Variables\n\t\t============================ */\n\n:root{\n\n\t\t/*\t====================================\n\t\t\t2.1.1. Global Styles Variables-Color\n\t\t \t==================================== */\n\n\t--clr-primary:rgb(255,255,255);\n\t--clr-primary-opacity-light:rgb(255,255,255, 0.6);\n\t--clr-primary-opacity-mid:rgb(255,255,255, 0.8);\n\t--clr-primary-opacity-dark:rgb(255,255,255, 0.9);\n\n\t--clr-secondary:rgb(14, 9, 9);\n\t--clr-secondary-opacity-light:rgb(14, 9, 9, 0.28);\n\t--clr-secondary-opacity-mid:rgb(14, 9, 9, 0.4);\n\t--clr-secondary-opacity-dark:rgb(14, 9, 9, 0.5);\n\n\t--clr-accent:rgb(174,31,66);\n\t--clr-accent-light:rgb(224,60,101);\n\t\t\t\n\t\t/*\t===================================\n\t\t\t2.1.2. Global Styles Variables-Font\n\t\t \t=================================== */\n\n\t--ff-primary:'Roboto', sans-serif;\n\n\t/*\t\t===========================\n\t\t\t2.1.3. Global Styles Images\n\t\t \t=========================== */\n\n\t--img-trash:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n\t--img-edit:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n\t--img-done:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n\t--img-cancel:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n}\n\n\t.edit,.delete,.done,.cancel{\n\t\tbackground-repeat: no-repeat;\n\t\tbackground-size: 100% 100%;\n\t}\n\n\t/*\t=========================\n\t\t2.2. Global Styles Global\n\t\t========================= */\n/* \n\tCSS Styling Reset from\n\thttp://meyerweb.com/eric/tools/css/reset/ \n   \tv2.0 | 20110126\n   \tLicense: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\n\nbody {\n\tline-height: 1;\n\tmin-height: 100vh;\n\tfont-family: var(--ff-primary);\n\ttext-align: center;\n\tbackground-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n\tbackground-repeat: no-repeat;\n\tbackground-size: 100% 100%; \n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/*\t===========================\n\t3. pageGridContainer Styles\n\t=========================== */\n\n\t/*\t====================================\n\t\t3.1. pageGridContainer Global Styles\n\t\t==================================== */\n\n#pageGridContainer{\n\tdisplay: grid;\n\tgrid-template-columns: repeat(4, 1fr) ;\n  \tgrid-template-rows: auto;\n  \tgrid-template-areas: \n    \"header header header header\"\n    \"main main main main\"\n    \"footer footer footer footer\";\n}\n\n\t/*\t============================================\n\t\t3.2. pageGridContainer Target Element Styles\n\t\t============================================ */\n\n#navSection{\n\tgrid-area: header;\n}\n#navMenuSection{\n\tgrid-area: sidebar;\n}\n#mainSection{\n\tgrid-area: main;\n}\n#footerSection{\n\tgrid-area: footer;\n}\n\n/*\t=================\n\t4. Sign-in Styles\n\t================= */\n\n\t/*\t==========================\n\t\t4.1. Sign-in Global Styles\n\t\t========================== */\n\nform{\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n}\n\n#signIn-Container-Inner, #signIn-Container-Outer{\n\tdisplay: flex;\n}\n\n#signIn-Container-Outer{\n\theight: 100vh;\n\tjustify-content: center;\n}\n\n#signIn-Container-Inner{\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: space-evenly;\n\tmin-width: 35%;\n\tmax-width: 80%;\n\tmargin: 8.5em 3em 13em;\n\tbackground-color: var(--clr-primary-opacity-mid);\n\tborder-radius: 23px;\n}\n\n#signIn-Form-Container{\n\tmargin:0 1em;\n\tpadding: 1.5em 0;\n\tmin-width: 60%;\n\tmax-width: 80%;\n\tbackground-color: var(--clr-secondary-opacity-mid);\n}\n\n\t/*\t==================================\n\t\t4.2. Sign-in Target Element Styles\n\t\t================================== */\n\n#appTitle{\n\tfont-size: 2em;\n\tmargin: 0.5em;\n\tcolor: var(--clr-secondary);\n}\n\nform > input, form > label{\n\talign-self: center;\n\tmin-width: 60%;\n\tmax-width: 80%;\n}\n\nform >label{\n\tfont-size: 1.5em;\n\tcolor:var(--clr-primary);\n}\n\ninput[type=button], #demoButton{\n\tmargin: 0.3em;\n\tborder: none;\n\tcursor: pointer;\n\tfont-size: 1.2em;\n\tpadding: 0.3em 3em;\n\tborder-radius: 1em;\n\ttext-decoration: none;\n\tcolor: var(--clr-primary);\n\tbackground-color: var(--clr-accent);\n\ttransition: 0.5s;\n}\n\ninput[type=button]:hover, #demoButton:hover{\n\tbackground-color: var(--clr-accent-light);\n}\n\ninput[type=text], input[type=password]{\n\tmargin: 0.5em;\n\tpadding: 0.5em 1em;\n\tborder: none;\n\ttext-decoration: none;\n\tbackground: var(--clr-secondary-opacity-dark);\n\tborder-radius: 1em;\n}\n\n#demoButton{\n\tpadding: 0.3em 2em;\n}\n\n/*\t=================\n\t5. Sign-Up Styles\n\t================= */\n\n\n\t/*\t==========================\n\t\t5.1. Sign-Up Global Styles\n\t\t========================== */\n\nform{\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n}\n\n#signUp-Container-Inner, #signUp-Container-Outer{\n\tdisplay: flex;\n}\n\n#signUp-Container-Outer{\n\theight: 100vh;\n\tjustify-content: center;\n}\n\n#signUp-Container-Inner{\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: space-evenly;\n\tmin-width: 35%;\n\tmax-width: 80%;\n\tmargin: 8.5em 3em 13em;\n\tbackground-color: var(--clr-primary-opacity-mid);\n\tborder-radius: 23px;\n}\n\n#signUp-Form-Container{\n\tmargin:0 1em;\n\tpadding: 1.5em 0;\n\tmin-width: 60%;\n\tmax-width: 80%;\n\tbackground-color: var(--clr-secondary-opacity-mid);\n}\n\t\t\n\t/*\t==================================\n\t\t5.2. Sign-Up Target Element Styles\n\t\t================================== */\n\t\t\n#appTitle{\n\tfont-size: 2em;\n\tcolor: var(--clr-secondary);\n\t\n}\n\nform > input, form > label{\n\talign-self: center;\n\tmin-width: 60%;\n\tmax-width: 80%;\n}\n\nform >label{\n\tfont-size: 1.5em;\n\tcolor:var(--clr-primary);\n}\n\ninput[type=button], #demoButton{\n\tmargin: 0.3em;\n\tborder: none;\n\tcursor: pointer;\n\tfont-size: 1.2em;\n\tpadding: 0.3em 3em;\n\tborder-radius: 1em;\n\ttext-decoration: none;\n\tcolor: var(--clr-primary);\n\tbackground-color: var(--clr-accent);\n\ttransition: 0.5s;\n}\n\ninput[type=button]:hover, #demoButton:hover{\n\tbackground-color: var(--clr-accent-light);\n}\n\ninput[type=text]{\n\tmargin: 0.5em;\n\tpadding: 0.5em 1em;\n\tborder: none;\n\ttext-decoration: none;\n\tbackground: var(--clr-secondary-opacity-dark);\n\tborder-radius: 1em;\n}\n\n#demoButton{\n\tpadding: 0.3em 2em;\n}\n\n/*\t============================\n\t6. Navigation Section Styles\n\t============================ */\n\t\n\t/*\t=====================================\n\t\t6.1. Navigation Section Global Styles\n\t\t===================================== */\n\n#navSection{\n\tdisplay: flex;\n\tjustify-content: flex-start;\n\tfont-size: 2em;\n\tposition: fixed;\n\ttop: 0;\n\twidth: 100vw;\n\tcolor: var(--clr-secondary);\n\tbackground-color: var(--clr-primary-opacity-light);\n}\n\n\t/*\t=============================================\n\t\t6.2. Navigation Section Target Element Styles\n\t\t============================================= */\n\n#navSection >h1{\n\tmargin-left: 0.2em;\n\tfont-size: 2em;\n\ttransition: 0.5s;\n\tcursor: pointer;\n}\n\n\n#navSection >h2{\n\tposition: absolute;\n\ttop:50%;\n\tleft:50%;\n\ttransform: translate(-50%, -50%);\n}\n\n\n/*\t=================================\n\t7. Navigation Menu Section Styles\n\t================================= */\n\n\t/*\t==================================\n\t\t7.1. Navigation Menu Global Styles\n\t\t================================== */\n#navMenuSection>*{\n\tmargin-top: 1em;\n}\n\n#navMenuSection{\n\tposition: fixed;\n\ttop: 2em;\n\theight: 100vh;\n\tfont-size: 2em;  \n\twidth: 25%;\n\tcolor: var(--clr-secondary);\n\tbackground-color: var(--clr-primary);\n\ttransform: translate(-100%, 0);\n\ttransition: 0.5s;\n}\n\n#dateSelector{\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n#projectSelector{\n\tfont-size: 0.5em;\n}\n\n#projectSelector>ul{\n\tmargin: 1em;\n\tlist-style-type: disc;\n}\n\n#projectSelector>ul>section>*{\n\tflex-grow: 1;\n\ttransition: 0.5s;\n}\n\n#projectSelector>ul>section>*:hover{\n\tbackground-color: var(--clr-secondary-opacity-light);\n}\n\n\t/*\t==========================================\n\t\t7.2. Navigation Menu Target Element Styles\n\t\t========================================== */\n\n#defaultSelector > h2{\n\tmargin: 0.5em;\n}\n\n#dateSelector > p{\n\tfont-size: 0.75em;  \n}\n\n#dateSelector>input{\n\tdisplay: block;\n\tmargin: 1em;\n\ttext-align: center;\n}\n\n#projectSelector>h2{\n\tfont-size: 1.75em;\n}\n\n#projectSelector>ul>li{\n\tmargin: 0.5em;\n\n}\n\n#projectSelector>ul>section{\n\tdisplay: flex;\n\tflex-direction: row;\n\theight: 2em;\n}\n\n#projectSelector>ul>section>.edit{\n\tbackground-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n\tbackground-repeat: no-repeat;\n\tbackground-size: 100% 100%;\n}\n\n#projectSelector>ul>section>.delete{\n\tbackground-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n\tbackground-repeat: no-repeat;\n\tbackground-size: 100% 100%;\n}\n\n#projectSelector>ul>.addProject{\n\tpadding: 0.6em;\n\tfont-size: 1.2em;\n\tmargin-top: 0.5em;\n\ttext-decoration: none;\n\tborder: none;\n\tborder-radius: 0.5em;\n\tcolor: var(--clr-primary);\n\tbackground-color: var(--clr-accent);\n\ttransition: 0.5s;\n}\n\n#projectSelector>ul>.addProject:hover{\n\tbackground-color: var(--clr-accent-light);\n}\n\n/*\t==========================================\n\t7.3. Navigation Edit Section Global Styles\n\t========================================== */\n\n#editProjectContainer{\n\tdisplay: flex;\n\tborder: 0.2em inset var(--clr-accent);\n\tflex-direction: column;\n}\n\n#editProjectContainer>*{\n\tflex-grow: 1;\n}\n\n#editProjectContainer>.done-cancelSection>*{\n\twidth: 100%;\n\theight: 2em;\n}\n\n\t/*\t==============================================\n\t7.4. Navigation Edit Section Target Element Styles\n\t================================================== */\n\n#editProjectContainer{\n\tdisplay: flex;\n\tborder: 0.2em inset var(--clr-accent);\n\tflex-direction: column;\n}\n\n#editProjectContainer>.done-cancelSection{\n\tdisplay: flex;\n\tjustify-content: space-evenly;\n\ttransition: 0.5s;\n}\n\n#editProjectContainer>.editTaskSelect>input{\n\twidth: 80%;\n}\n\n#editProjectContainer>.done-cancelSection>*:hover{\n\tbackground-color: var(--clr-secondary-opacity-light);\n}\n\n/*\t=====================\n\t8. Main Section Styes\n\t===================== */\n\n\t/*\t===============================\n\t\t8.1. Main Section Global Styles\n\t\t=============================== */\n\n#mainSection>*{\n\tmin-width: 80%;\n}\n\n#mainSection, .items, .tasks{\n\tdisplay: grid;\n}\n\n#mainSection{\n\tdisplay: flex;\n\tflex-direction: column;\n\tmargin-top: 3em;\n\tpadding-bottom: 2em;\n\tgap: 0.5em 0em;\n\tfont-size: 1.5em;\n\tcolor: var(--clr-secondary);\n\tbackground-color: var(--clr-primary-opacity-dark);\n}\n\n.items{\n\tgrid-template-columns: repeat(3, 1fr);\n}\n\n.tasks{\n\tgrid-template-columns: repeat(4, 1fr);\n}\n\n.items > *{\n\tgrid-column: 1 / span 3;\n}\n\n.items{\n\tcolor: var(--clr-secondary);\n\tplace-self: center;\n\tgap: 0.5em 0em;\n\tmargin-bottom: 0.5em;\n\tbackground: var(--clr-secondary-opacity-light);\n}\n\n.tasks>*{\n\tplace-self: center;\n\tpadding: 0.2em;\n}\n\n.tasks>section>*{\n\theight: 2em;\n\twidth: 2em;\n\tflex-grow: 1;\n\ttransition: 0.5s;\n}\n\n.tasks>section>*:hover{\n\tbackground-color: var(--clr-secondary-opacity-light);\n}\n\n\t/*\t=======================================\n\t\t8.2. Main Section Target Element Styles\n\t\t======================================= */\n\n#mainSection > h2{\n\tfont-size: 1.5em;\n\tpadding: 0.5em;\n}\n\n.items>h2{\n\tfont-size: 1.5em;\n\tpadding-top: 0.2em;\n}\n\n.tasks>label{\n\tcolor: var(--clr-secondary);\n\tplace-self: center;\n\tfont-size: 1em;\n\twidth: 100%;\n}\n\n.tasks>input{\n\theight: 2em;\n\twidth: 2em;\n}\n\n.tasks>section{\n\tdisplay: flex;\n\theight: 100%;\n\twidth:100%;\n}\n\n.edit{\n\tbackground-image: var(--img-edit);\n}\n\n.delete{\n\tbackground-image: var(--img-trash);\n}\n\n.addTask{\n\tpadding: 0.6em;\n\tmargin-bottom: 0.5em;\n\tfont-size: 0.8em;\n\tjustify-content: center;\n\tgrid-column: 2;\n\ttext-decoration: none;\n\tborder: none;\n\tborder-radius: 0.5em;\n\tcolor: var(--clr-primary);\n\tbackground-color: var(--clr-accent);\n\ttransition: 0.5s;\n}\n\n.addTask:hover{\n\tbackground-color: var(--clr-accent-light);\n}\n\n\t/*\t====================================\n\t\t8.3. Main Edit Section Global Styles\n\t\t==================================== */\n\n#editTask>*{\n\tplace-self: center;\n}\n\n#editTask>section>*{\n\theight: auto;\n\twidth: 90%;\n\ttransition: 0.5s;\n}\n\n#editTask>.done-cancelSection>*:hover{\n\tbackground-color: var(--clr-secondary-opacity-light);\n}\n\n#editTask>.done-cancelSection>*{\n\twidth: auto;\n\theight: auto;\n\tflex-grow: 1;\n}\n\n\t/*\t============================================\n\t\t8.4. Main Edit Section Target Element Styles\n\t\t============================================ */\n\n#editTaskContainer{\n\twidth: 100%;\n\tpadding: 0;\n\tgrid-column: span 4;\n}\n\n#editTask{\n\tdisplay: grid;\n\tmargin: auto;\n\twidth: 80%;\n\tpadding: 0;\n\tborder: 0.2em inset var(--clr-accent);\n\tgrid-template-columns: repeat(3, 1fr);\n\tcolumn-gap: 0.5em;\n}\n\n#editTask>section{\n\tdisplay: flex;\n\tflex-direction: column;\n\theight: 100%;\n\twidth: 100%;\n}\n\n#editTask>section>label{\n\tcolor: var(--clr-secondary);\n\tplace-self: center;\n\tfont-size: 1em;\n\twidth: 100%;\n}\n\n#editTask>section>textarea{\n\tresize: vertical;\n}\n\n#editTask>.done-cancelSection{\n\tflex-direction: row;\n}\n\n.done{\n\tbackground-image: var(--img-done);\n}\n\n.cancel{\n\tbackground-image: var(--img-cancel);\n}\n\n/*\t=======================\n\t*. Footer Style Section\n\t======================= */\n\n#footerSection{\n\tposition: fixed;\n\tleft: 0;\n\tbottom: 0;\n\twidth: 100%;\n\tbackground-color: var(--clr-secondary);\n\tcolor: var(--clr-primary);\n\ttext-align: center;\n}\n\n/*\t======================\n\t*. Media Query Section\n\t====================== */\n\n@media only screen and (min-width: 750px) {\n\n\t/*\t=========================\n\t\t*.1. Global Media Queries\n\t\t========================= */\n\n\tbody {\n\t\tbackground-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n\t}\n\n\t/*\t====================================\n\t\t*.2. pageGridContainer Media Queries\n\t\t==================================== */\n\n\t#pageGridContainer{\n\t\tgrid-template-areas: \n\t\t\"header header header header\"\n\t\t\"sidebar main main main\"\n\t\t\"footer footer footer footer\";\n\t}\n\n\n\t/*\t=====================================\n\t\t*.3. Navigation Section Media Queries\n\t\t===================================== */\n\n\t#mainSection{\n\t\tmargin: 3em 1em 0em;\n\t}\n\n\t#mainSection>*{\n\t\tmin-width: 75%;\n\t}\n\n\t#navSection>h1{\n\t\ttransform: rotate(135deg);\n\t}\n\n\t/*\t==========================================\n\t\t*.4. Navigation Menu Section Media Queries\n\t\t========================================== */\n\n\t#navMenuSection{\n\t\ttransform: translate(0, 0);\n\t}\n\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* Table of Contents\n\t1. Imports\n\t2. Global Styles\n\t\t2.1. Global Styles Variables\n\t\t\t2.1.1. Global Styles Variables-Color\n\t\t\t2.1.2. Global Styles Variables-Font\n\t\t\t2.1.3. Global Styles Images\n\t\t2.2. Global Styles Global\n\t3. pageGridContainer Styles\n\t\t3.1. pageGridContainer Global Styles\n\t\t3.2. pageGridContainer Target Element Styles\n\t4. Sign-in Styles\n\t\t4.1. Sign-in Global Styles\n\t\t4.2. Sign-in Target Element Styles\n\t5. Sign-Up Styles\n\t\t5.1. Sign-Up Global Styles\n\t\t5.2. Sign-Up Target Element Styles\n\t6. Navigation Section Styles\n\t\t6.1. Navigation Section Global Styles\n\t\t6.2. Navigation Section Target Element Styles\n\t7. Navigation Menu Section Styles\n\t\t7.1. Navigation Menu Global Styles\n\t\t7.2. Navigation Menu Target Element Styles\n\t\t7.3. Navigation Edit Section Global Styles\n\t\t7.4. Navigation Edit Section Target Element Styles\n\t8. Main Section Styes\n\t\t8.1. Main Section Global Styles\n\t\t8.2. Main Section Target Element Styles\n\t\t8.3. Main Edit Section Global Styles\n\t\t8.4. Main Edit Section Target Element Styles\n\t*. Footer Style Section\n\t*. Media Query Section\n\t\t*.1. Global Media Queries\n\t\t*.2. pageGridContainer Media Queries\n\t\t*.3. Navigation Section Media Queries\n\t\t*.4. Navigation Menu Section Media Queries\n\n*/\n\n/*\t==========\n\t1. Imports\n\t========== */\n\n@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\n\n/*\t================\n\t2. Global Styles\n\t================ */\n\n\t/*\t============================\n\t\t2.1. Global Styles Variables\n\t\t============================ */\n\n:root{\n\n\t\t/*\t====================================\n\t\t\t2.1.1. Global Styles Variables-Color\n\t\t \t==================================== */\n\n\t--clr-primary:rgb(255,255,255);\n\t--clr-primary-opacity-light:rgb(255,255,255, 0.6);\n\t--clr-primary-opacity-mid:rgb(255,255,255, 0.8);\n\t--clr-primary-opacity-dark:rgb(255,255,255, 0.9);\n\n\t--clr-secondary:rgb(14, 9, 9);\n\t--clr-secondary-opacity-light:rgb(14, 9, 9, 0.28);\n\t--clr-secondary-opacity-mid:rgb(14, 9, 9, 0.4);\n\t--clr-secondary-opacity-dark:rgb(14, 9, 9, 0.5);\n\n\t--clr-accent:rgb(174,31,66);\n\t--clr-accent-light:rgb(224,60,101);\n\t\t\t\n\t\t/*\t===================================\n\t\t\t2.1.2. Global Styles Variables-Font\n\t\t \t=================================== */\n\n\t--ff-primary:'Roboto', sans-serif;\n\n\t/*\t\t===========================\n\t\t\t2.1.3. Global Styles Images\n\t\t \t=========================== */\n\n\t--img-trash:url('./images/icons8-trash-can.svg');\n\t--img-edit:url('./images/icons8-edit.svg');\n\t--img-done:url('./images/icons8-done.svg');\n\t--img-cancel:url('./images/icons8-cancel.svg');\n}\n\n\t.edit,.delete,.done,.cancel{\n\t\tbackground-repeat: no-repeat;\n\t\tbackground-size: 100% 100%;\n\t}\n\n\t/*\t=========================\n\t\t2.2. Global Styles Global\n\t\t========================= */\n/* \n\tCSS Styling Reset from\n\thttp://meyerweb.com/eric/tools/css/reset/ \n   \tv2.0 | 20110126\n   \tLicense: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\n\nbody {\n\tline-height: 1;\n\tmin-height: 100vh;\n\tfont-family: var(--ff-primary);\n\ttext-align: center;\n\tbackground-image: url('./images/ToDoAppBackground-cropped-mobile.jpg');\n\tbackground-repeat: no-repeat;\n\tbackground-size: 100% 100%; \n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/*\t===========================\n\t3. pageGridContainer Styles\n\t=========================== */\n\n\t/*\t====================================\n\t\t3.1. pageGridContainer Global Styles\n\t\t==================================== */\n\n#pageGridContainer{\n\tdisplay: grid;\n\tgrid-template-columns: repeat(4, 1fr) ;\n  \tgrid-template-rows: auto;\n  \tgrid-template-areas: \n    \"header header header header\"\n    \"main main main main\"\n    \"footer footer footer footer\";\n}\n\n\t/*\t============================================\n\t\t3.2. pageGridContainer Target Element Styles\n\t\t============================================ */\n\n#navSection{\n\tgrid-area: header;\n}\n#navMenuSection{\n\tgrid-area: sidebar;\n}\n#mainSection{\n\tgrid-area: main;\n}\n#footerSection{\n\tgrid-area: footer;\n}\n\n/*\t=================\n\t4. Sign-in Styles\n\t================= */\n\n\t/*\t==========================\n\t\t4.1. Sign-in Global Styles\n\t\t========================== */\n\nform{\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n}\n\n#signIn-Container-Inner, #signIn-Container-Outer{\n\tdisplay: flex;\n}\n\n#signIn-Container-Outer{\n\theight: 100vh;\n\tjustify-content: center;\n}\n\n#signIn-Container-Inner{\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: space-evenly;\n\tmin-width: 35%;\n\tmax-width: 80%;\n\tmargin: 8.5em 3em 13em;\n\tbackground-color: var(--clr-primary-opacity-mid);\n\tborder-radius: 23px;\n}\n\n#signIn-Form-Container{\n\tmargin:0 1em;\n\tpadding: 1.5em 0;\n\tmin-width: 60%;\n\tmax-width: 80%;\n\tbackground-color: var(--clr-secondary-opacity-mid);\n}\n\n\t/*\t==================================\n\t\t4.2. Sign-in Target Element Styles\n\t\t================================== */\n\n#appTitle{\n\tfont-size: 2em;\n\tmargin: 0.5em;\n\tcolor: var(--clr-secondary);\n}\n\nform > input, form > label{\n\talign-self: center;\n\tmin-width: 60%;\n\tmax-width: 80%;\n}\n\nform >label{\n\tfont-size: 1.5em;\n\tcolor:var(--clr-primary);\n}\n\ninput[type=button], #demoButton{\n\tmargin: 0.3em;\n\tborder: none;\n\tcursor: pointer;\n\tfont-size: 1.2em;\n\tpadding: 0.3em 3em;\n\tborder-radius: 1em;\n\ttext-decoration: none;\n\tcolor: var(--clr-primary);\n\tbackground-color: var(--clr-accent);\n\ttransition: 0.5s;\n}\n\ninput[type=button]:hover, #demoButton:hover{\n\tbackground-color: var(--clr-accent-light);\n}\n\ninput[type=text], input[type=password]{\n\tmargin: 0.5em;\n\tpadding: 0.5em 1em;\n\tborder: none;\n\ttext-decoration: none;\n\tbackground: var(--clr-secondary-opacity-dark);\n\tborder-radius: 1em;\n}\n\n#demoButton{\n\tpadding: 0.3em 2em;\n}\n\n/*\t=================\n\t5. Sign-Up Styles\n\t================= */\n\n\n\t/*\t==========================\n\t\t5.1. Sign-Up Global Styles\n\t\t========================== */\n\nform{\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n}\n\n#signUp-Container-Inner, #signUp-Container-Outer{\n\tdisplay: flex;\n}\n\n#signUp-Container-Outer{\n\theight: 100vh;\n\tjustify-content: center;\n}\n\n#signUp-Container-Inner{\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: space-evenly;\n\tmin-width: 35%;\n\tmax-width: 80%;\n\tmargin: 8.5em 3em 13em;\n\tbackground-color: var(--clr-primary-opacity-mid);\n\tborder-radius: 23px;\n}\n\n#signUp-Form-Container{\n\tmargin:0 1em;\n\tpadding: 1.5em 0;\n\tmin-width: 60%;\n\tmax-width: 80%;\n\tbackground-color: var(--clr-secondary-opacity-mid);\n}\n\t\t\n\t/*\t==================================\n\t\t5.2. Sign-Up Target Element Styles\n\t\t================================== */\n\t\t\n#appTitle{\n\tfont-size: 2em;\n\tcolor: var(--clr-secondary);\n\t\n}\n\nform > input, form > label{\n\talign-self: center;\n\tmin-width: 60%;\n\tmax-width: 80%;\n}\n\nform >label{\n\tfont-size: 1.5em;\n\tcolor:var(--clr-primary);\n}\n\ninput[type=button], #demoButton{\n\tmargin: 0.3em;\n\tborder: none;\n\tcursor: pointer;\n\tfont-size: 1.2em;\n\tpadding: 0.3em 3em;\n\tborder-radius: 1em;\n\ttext-decoration: none;\n\tcolor: var(--clr-primary);\n\tbackground-color: var(--clr-accent);\n\ttransition: 0.5s;\n}\n\ninput[type=button]:hover, #demoButton:hover{\n\tbackground-color: var(--clr-accent-light);\n}\n\ninput[type=text]{\n\tmargin: 0.5em;\n\tpadding: 0.5em 1em;\n\tborder: none;\n\ttext-decoration: none;\n\tbackground: var(--clr-secondary-opacity-dark);\n\tborder-radius: 1em;\n}\n\n#demoButton{\n\tpadding: 0.3em 2em;\n}\n\n/*\t============================\n\t6. Navigation Section Styles\n\t============================ */\n\t\n\t/*\t=====================================\n\t\t6.1. Navigation Section Global Styles\n\t\t===================================== */\n\n#navSection{\n\tdisplay: flex;\n\tjustify-content: flex-start;\n\tfont-size: 2em;\n\tposition: fixed;\n\ttop: 0;\n\twidth: 100vw;\n\tcolor: var(--clr-secondary);\n\tbackground-color: var(--clr-primary-opacity-light);\n}\n\n\t/*\t=============================================\n\t\t6.2. Navigation Section Target Element Styles\n\t\t============================================= */\n\n#navSection >h1{\n\tmargin-left: 0.2em;\n\tfont-size: 2em;\n\ttransition: 0.5s;\n\tcursor: pointer;\n}\n\n\n#navSection >h2{\n\tposition: absolute;\n\ttop:50%;\n\tleft:50%;\n\ttransform: translate(-50%, -50%);\n}\n\n\n/*\t=================================\n\t7. Navigation Menu Section Styles\n\t================================= */\n\n\t/*\t==================================\n\t\t7.1. Navigation Menu Global Styles\n\t\t================================== */\n#navMenuSection>*{\n\tmargin-top: 1em;\n}\n\n#navMenuSection{\n\tposition: fixed;\n\ttop: 2em;\n\theight: 100vh;\n\tfont-size: 2em;  \n\twidth: 25%;\n\tcolor: var(--clr-secondary);\n\tbackground-color: var(--clr-primary);\n\ttransform: translate(-100%, 0);\n\ttransition: 0.5s;\n}\n\n#dateSelector{\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n#projectSelector{\n\tfont-size: 0.5em;\n}\n\n#projectSelector>ul{\n\tmargin: 1em;\n\tlist-style-type: disc;\n}\n\n#projectSelector>ul>section>*{\n\tflex-grow: 1;\n\ttransition: 0.5s;\n}\n\n#projectSelector>ul>section>*:hover{\n\tbackground-color: var(--clr-secondary-opacity-light);\n}\n\n\t/*\t==========================================\n\t\t7.2. Navigation Menu Target Element Styles\n\t\t========================================== */\n\n#defaultSelector > h2{\n\tmargin: 0.5em;\n}\n\n#dateSelector > p{\n\tfont-size: 0.75em;  \n}\n\n#dateSelector>input{\n\tdisplay: block;\n\tmargin: 1em;\n\ttext-align: center;\n}\n\n#projectSelector>h2{\n\tfont-size: 1.75em;\n}\n\n#projectSelector>ul>li{\n\tmargin: 0.5em;\n\n}\n\n#projectSelector>ul>section{\n\tdisplay: flex;\n\tflex-direction: row;\n\theight: 2em;\n}\n\n#projectSelector>ul>section>.edit{\n\tbackground-image: url('./images/icons8-edit.svg');\n\tbackground-repeat: no-repeat;\n\tbackground-size: 100% 100%;\n}\n\n#projectSelector>ul>section>.delete{\n\tbackground-image: url('./images/icons8-trash-can.svg');\n\tbackground-repeat: no-repeat;\n\tbackground-size: 100% 100%;\n}\n\n#projectSelector>ul>.addProject{\n\tpadding: 0.6em;\n\tfont-size: 1.2em;\n\tmargin-top: 0.5em;\n\ttext-decoration: none;\n\tborder: none;\n\tborder-radius: 0.5em;\n\tcolor: var(--clr-primary);\n\tbackground-color: var(--clr-accent);\n\ttransition: 0.5s;\n}\n\n#projectSelector>ul>.addProject:hover{\n\tbackground-color: var(--clr-accent-light);\n}\n\n/*\t==========================================\n\t7.3. Navigation Edit Section Global Styles\n\t========================================== */\n\n#editProjectContainer{\n\tdisplay: flex;\n\tborder: 0.2em inset var(--clr-accent);\n\tflex-direction: column;\n}\n\n#editProjectContainer>*{\n\tflex-grow: 1;\n}\n\n#editProjectContainer>.done-cancelSection>*{\n\twidth: 100%;\n\theight: 2em;\n}\n\n\t/*\t==============================================\n\t7.4. Navigation Edit Section Target Element Styles\n\t================================================== */\n\n#editProjectContainer{\n\tdisplay: flex;\n\tborder: 0.2em inset var(--clr-accent);\n\tflex-direction: column;\n}\n\n#editProjectContainer>.done-cancelSection{\n\tdisplay: flex;\n\tjustify-content: space-evenly;\n\ttransition: 0.5s;\n}\n\n#editProjectContainer>.editTaskSelect>input{\n\twidth: 80%;\n}\n\n#editProjectContainer>.done-cancelSection>*:hover{\n\tbackground-color: var(--clr-secondary-opacity-light);\n}\n\n/*\t=====================\n\t8. Main Section Styes\n\t===================== */\n\n\t/*\t===============================\n\t\t8.1. Main Section Global Styles\n\t\t=============================== */\n\n#mainSection>*{\n\tmin-width: 80%;\n}\n\n#mainSection, .items, .tasks{\n\tdisplay: grid;\n}\n\n#mainSection{\n\tdisplay: flex;\n\tflex-direction: column;\n\tmargin-top: 3em;\n\tpadding-bottom: 2em;\n\tgap: 0.5em 0em;\n\tfont-size: 1.5em;\n\tcolor: var(--clr-secondary);\n\tbackground-color: var(--clr-primary-opacity-dark);\n}\n\n.items{\n\tgrid-template-columns: repeat(3, 1fr);\n}\n\n.tasks{\n\tgrid-template-columns: repeat(4, 1fr);\n}\n\n.items > *{\n\tgrid-column: 1 / span 3;\n}\n\n.items{\n\tcolor: var(--clr-secondary);\n\tplace-self: center;\n\tgap: 0.5em 0em;\n\tmargin-bottom: 0.5em;\n\tbackground: var(--clr-secondary-opacity-light);\n}\n\n.tasks>*{\n\tplace-self: center;\n\tpadding: 0.2em;\n}\n\n.tasks>section>*{\n\theight: 2em;\n\twidth: 2em;\n\tflex-grow: 1;\n\ttransition: 0.5s;\n}\n\n.tasks>section>*:hover{\n\tbackground-color: var(--clr-secondary-opacity-light);\n}\n\n\t/*\t=======================================\n\t\t8.2. Main Section Target Element Styles\n\t\t======================================= */\n\n#mainSection > h2{\n\tfont-size: 1.5em;\n\tpadding: 0.5em;\n}\n\n.items>h2{\n\tfont-size: 1.5em;\n\tpadding-top: 0.2em;\n}\n\n.tasks>label{\n\tcolor: var(--clr-secondary);\n\tplace-self: center;\n\tfont-size: 1em;\n\twidth: 100%;\n}\n\n.tasks>input{\n\theight: 2em;\n\twidth: 2em;\n}\n\n.tasks>section{\n\tdisplay: flex;\n\theight: 100%;\n\twidth:100%;\n}\n\n.edit{\n\tbackground-image: var(--img-edit);\n}\n\n.delete{\n\tbackground-image: var(--img-trash);\n}\n\n.addTask{\n\tpadding: 0.6em;\n\tmargin-bottom: 0.5em;\n\tfont-size: 0.8em;\n\tjustify-content: center;\n\tgrid-column: 2;\n\ttext-decoration: none;\n\tborder: none;\n\tborder-radius: 0.5em;\n\tcolor: var(--clr-primary);\n\tbackground-color: var(--clr-accent);\n\ttransition: 0.5s;\n}\n\n.addTask:hover{\n\tbackground-color: var(--clr-accent-light);\n}\n\n\t/*\t====================================\n\t\t8.3. Main Edit Section Global Styles\n\t\t==================================== */\n\n#editTask>*{\n\tplace-self: center;\n}\n\n#editTask>section>*{\n\theight: auto;\n\twidth: 90%;\n\ttransition: 0.5s;\n}\n\n#editTask>.done-cancelSection>*:hover{\n\tbackground-color: var(--clr-secondary-opacity-light);\n}\n\n#editTask>.done-cancelSection>*{\n\twidth: auto;\n\theight: auto;\n\tflex-grow: 1;\n}\n\n\t/*\t============================================\n\t\t8.4. Main Edit Section Target Element Styles\n\t\t============================================ */\n\n#editTaskContainer{\n\twidth: 100%;\n\tpadding: 0;\n\tgrid-column: span 4;\n}\n\n#editTask{\n\tdisplay: grid;\n\tmargin: auto;\n\twidth: 80%;\n\tpadding: 0;\n\tborder: 0.2em inset var(--clr-accent);\n\tgrid-template-columns: repeat(3, 1fr);\n\tcolumn-gap: 0.5em;\n}\n\n#editTask>section{\n\tdisplay: flex;\n\tflex-direction: column;\n\theight: 100%;\n\twidth: 100%;\n}\n\n#editTask>section>label{\n\tcolor: var(--clr-secondary);\n\tplace-self: center;\n\tfont-size: 1em;\n\twidth: 100%;\n}\n\n#editTask>section>textarea{\n\tresize: vertical;\n}\n\n#editTask>.done-cancelSection{\n\tflex-direction: row;\n}\n\n.done{\n\tbackground-image: var(--img-done);\n}\n\n.cancel{\n\tbackground-image: var(--img-cancel);\n}\n\n/*\t=======================\n\t*. Footer Style Section\n\t======================= */\n\n#footerSection{\n\tposition: fixed;\n\tleft: 0;\n\tbottom: 0;\n\twidth: 100%;\n\tbackground-color: var(--clr-secondary);\n\tcolor: var(--clr-primary);\n\ttext-align: center;\n}\n\n/*\t======================\n\t*. Media Query Section\n\t====================== */\n\n@media only screen and (min-width: 750px) {\n\n\t/*\t=========================\n\t\t*.1. Global Media Queries\n\t\t========================= */\n\n\tbody {\n\t\tbackground-image: url('./images/ToDoAppBackground-cropped.jpg');\n\t}\n\n\t/*\t====================================\n\t\t*.2. pageGridContainer Media Queries\n\t\t==================================== */\n\n\t#pageGridContainer{\n\t\tgrid-template-areas: \n\t\t\"header header header header\"\n\t\t\"sidebar main main main\"\n\t\t\"footer footer footer footer\";\n\t}\n\n\n\t/*\t=====================================\n\t\t*.3. Navigation Section Media Queries\n\t\t===================================== */\n\n\t#mainSection{\n\t\tmargin: 3em 1em 0em;\n\t}\n\n\t#mainSection>*{\n\t\tmin-width: 75%;\n\t}\n\n\t#navSection>h1{\n\t\ttransform: rotate(135deg);\n\t}\n\n\t/*\t==========================================\n\t\t*.4. Navigation Menu Section Media Queries\n\t\t========================================== */\n\n\t#navMenuSection{\n\t\ttransform: translate(0, 0);\n\t}\n\n}"],"sourceRoot":""}]);
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

/***/ "./src/NavSectionFiles/navSectionCreation.js":
/*!***************************************************!*\
  !*** ./src/NavSectionFiles/navSectionCreation.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "navSectionCreation": () => (/* binding */ navSectionCreation)
/* harmony export */ });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global */ "./src/global.js");



const navSectionCreation = (() => {

    // Sign in Object List
    const navObjectList = {


        navSection: {
            tag: 'div',
            id: 'navSection',
        },

        navSectionOptions: {
            item1: {
                tag: 'h1',
                htmlString: '+',
            },
            item2: {
                tag: 'h2',
                htmlString: 'Checkist',
            },
        },

        navMenuSection: {
            tag: 'div',
            id: 'navMenuSection',
        },

        defaultSelector: {
            tag: 'div',
            id: 'defaultSelector',
        },

        homeTitle: {
            tag: 'h2',
            htmlString: 'Home',
        },

        projectSelector: {
            tag: 'div',
            id: 'projectSelector',
        },

        projectsTitle: {
            tag: 'h2',
            htmlString: 'Projects',
        },

        projectList: {
            tag: 'ul',
        },

        projectInfo: {
            item: {
                tag: 'li',
            },
        },

        section: {
            tag: 'section',
        },

        edit: {
            tag: 'div',
            id: 'editProj',
            classId: 'edit',
        },

        delete: {
            tag: 'div',
            id: 'deleteProj',
            classId: 'delete',
        },

        button: {
            tag: 'button',
            classId: 'addProject',
            htmlString: 'Add Project',
        },

    };

    // Fuction List

    // Return Nav Section Contents as list
    const NavSectionContentList = () => {
        let contentList = [];

        for (let i = 0; i < Object.keys(navObjectList.navSectionOptions).length; i++) {
            let element = _global__WEBPACK_IMPORTED_MODULE_0__.globaljs.newElement(navObjectList.navSectionOptions[Object.keys(navObjectList.navSectionOptions)[i]]);
            contentList.push(element);
        };
        return contentList;
    };

    // Returns Nav Element Section
    const navElementSection = () => {
        let contentList = NavSectionContentList(),
            element = _global__WEBPACK_IMPORTED_MODULE_0__.globaljs.newElement(navObjectList.navSection);

        for (let i = 0; i < contentList.length; i++) {
            element.appendChild(contentList[i]);
        };

        return element;
    };

    // Returns defaultSelector Section
    const defaultSelectorSection = () => {
        let element = _global__WEBPACK_IMPORTED_MODULE_0__.globaljs.newElement(navObjectList.defaultSelector),
            item = _global__WEBPACK_IMPORTED_MODULE_0__.globaljs.newElement(navObjectList.homeTitle);

        element.appendChild(item);

        return element;
    };

    // Edit/delete Section
    const edit_DeleteSection = () => {
        let element = _global__WEBPACK_IMPORTED_MODULE_0__.globaljs.newElement(navObjectList.section),
            edit = _global__WEBPACK_IMPORTED_MODULE_0__.globaljs.newElement(navObjectList.edit),
            deLete = _global__WEBPACK_IMPORTED_MODULE_0__.globaljs.newElement(navObjectList.delete);

        element.append(edit, deLete);

        return element;
    };

    // Returns Project List Section elements
    const projectULSection = (list) => {
        let containerULElement = _global__WEBPACK_IMPORTED_MODULE_0__.globaljs.newElement(navObjectList.projectList),
            button = _global__WEBPACK_IMPORTED_MODULE_0__.globaljs.newElement(navObjectList.button);

        for (let i = 0; i < list.projectTitles.length; i++) {
            let item = _global__WEBPACK_IMPORTED_MODULE_0__.globaljs.newElement(navObjectList.projectInfo.item),
                edit_delete = edit_DeleteSection();
            item.innerHTML = list.projectTitles[i];
            containerULElement.append(item, edit_delete)

        };

        containerULElement.appendChild(button)
        return containerULElement;
    };

    // Returns projectSelector Section
    const projectSelectorSection = (item) => {
        let element = _global__WEBPACK_IMPORTED_MODULE_0__.globaljs.newElement(navObjectList.projectSelector),
            projectTitle = _global__WEBPACK_IMPORTED_MODULE_0__.globaljs.newElement(navObjectList.projectsTitle),
            projectContentList = projectULSection(item);

        element.append(projectTitle, projectContentList);

        return element;
    };


    // Returns navMenuSection Section
    const navMenuSectionSection = (item) => {
        let element = _global__WEBPACK_IMPORTED_MODULE_0__.globaljs.newElement(navObjectList.navMenuSection),
            defaultSection = defaultSelectorSection(),
            projectSection = projectSelectorSection(item);

        element.append(defaultSection, projectSection);

        return element;
    };



    // Sign In section Creation
    const createSection = (info) => {
        let element = _global__WEBPACK_IMPORTED_MODULE_0__.globaljs.pageGridConntainer();
        element.append(navElementSection(),navMenuSectionSection(info))

        _global__WEBPACK_IMPORTED_MODULE_0__.globaljs.render.bodyAppendChild(element);
    };

    return { createSection: createSection };
})();

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
    // Cache Dom
    const cacheDom = (() => {
        let body = document.getElementsByTagName('body')
        return { body: body};
    })();


    // Function List
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

    const pageGridConntainer = () => {
        let pageGridContainer = {
            tag: 'div',
            id: 'pageGridContainer',
        }

        return globaljs.newElement(pageGridContainer)
    }

    // Render to DOM
    const render = (() => {
        const bodyAppendChild = (element) =>{
            cacheDom.body[0].appendChild(element);
        };

        const removePrev = () => {
            cacheDom.body[0].lastElementChild.remove();
        };

        const removeElement = (element) =>{
            element.remove();
        };

        return {bodyAppendChild: bodyAppendChild, removePrev:removePrev, removeElement:removeElement};
    })();


    return {newElement:newElement, pageGridConntainer:pageGridConntainer ,render:render}

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
                type: 'password',
                name: 'password',
            },
            signinButton: {
                tag: 'input',
                id: 'signInButton',
                type: 'button',
                value: 'Sign In',
            },
            signupButton: {
                tag: 'input',
                id: 'signUpButton',
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
    const createSection = () => {
        let element = signInContainerOuterSection();

        _global__WEBPACK_IMPORTED_MODULE_0__.globaljs.render.bodyAppendChild(element);
    };


    return { createSection: createSection };
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
/* harmony import */ var _signUpSectionFiles_signUpSectionCreation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../signUpSectionFiles/signUpSectionCreation.js */ "./src/signUpSectionFiles/signUpSectionCreation.js");
/* harmony import */ var _signUpSectionFiles_signUpSectionFunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../signUpSectionFiles/signUpSectionFunction */ "./src/signUpSectionFiles/signUpSectionFunction.js");

  
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
    


    
    const signInFunction = () => {
        // Cache Dom List
        let info = document.getElementById('userInfo'),
            signInButton = document.getElementById('signInButton'),
            signUpButton = document.getElementById('signUpButton'),
            demoButton = document.getElementById('demoButton'),
            signInContainer = document.getElementById('signIn-Container-Outer');;


        //Function List
        const userValidation = ( userToValidate ) =>{
            if (_userStorage__WEBPACK_IMPORTED_MODULE_1__.userStorage.users.userList.includes(userToValidate)) {
                return true
            }else{
                return false
            };
        };

        const passwordValidation = ( user, passwordToValidate ) =>{
            if (_userStorage__WEBPACK_IMPORTED_MODULE_1__.userStorage.users[user].password == passwordToValidate) {
                return true
            }else{
                return false
            };
        };

        const signInValidation = () =>{
            if(userValidation(info.elements['userName'].value)){

                if(passwordValidation(info.elements['userName'].value, info.elements['password'].value)){
                }else{
                    alert('Password does not match')
                }

            }else{
                alert('User ID does not match')
            }
        }


        //Event Binds
        signInButton.addEventListener('click', signInValidation)
        signUpButton.addEventListener('click', function () {
            _global__WEBPACK_IMPORTED_MODULE_0__.globaljs.render.removeElement(signInContainer);
            _signUpSectionFiles_signUpSectionCreation_js__WEBPACK_IMPORTED_MODULE_2__.signUpSectionCreation.createSection();
            _signUpSectionFiles_signUpSectionFunction__WEBPACK_IMPORTED_MODULE_3__.signUpSectionFunction.signUpFunction()
        })
        
    };

    



    return{signInFunction:signInFunction}


})()


/***/ }),

/***/ "./src/signUpSectionFiles/signUpSectionCreation.js":
/*!*********************************************************!*\
  !*** ./src/signUpSectionFiles/signUpSectionCreation.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "signUpSectionCreation": () => (/* binding */ signUpSectionCreation)
/* harmony export */ });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global */ "./src/global.js");



const signUpSectionCreation = (() => {

    //Sign in Object List
    const SignUpObjectList = {

        signUpContainerOuter: {
            tag: 'div',
            id: 'signUp-Container-Outer',
        },

        signUpContainerInner: {
            tag: 'div',
            id: 'signUp-Container-Inner',
        },

        appTitle: {
            tag: 'h2',
            id: 'appTitle',
            htmlString: 'Log-In Creation',
        },

        signUpFormContainer: {
            tag: 'div',
            id: 'signUp-Form-Container',
        },

        signUpForm: {
            tag: 'form',
            id:'userCreateInfo',
        },

        userInfo: {
            usernameLabel: {
                tag: 'label',
                for: 'userName',
                htmlString: 'Create Username',
            },
            userRequire: {
                tag: 'h2',
                id: 'userRequire',
                htmlString:'Requirements:',
            },
            userRequirements: {
                tag: 'h2',
                id: 'userRequirements',
                htmlString:'at least six characters long, one number, one lowercase and one uppercase letter',
            },
            usernameInput: {
                tag: 'input',
                id: 'createUserName',
                type: 'text',
                name: 'userName',
            },
            passwordLabel: {
                tag: 'label',
                for: 'password',
                htmlString: 'Create Password',
            },
            passwordRequire: {
                tag: 'h2',
                id: 'pwRequire',
                htmlString:'Requirements:',
            },
            passwordRequirements: {
                tag: 'h2',
                id: 'pwdRequirements',
                htmlString:'at least six characters long including underscore,  one number, one lowercase and one uppercase letter',
            },
            passwordInput: {
                tag: 'input',
                id: 'passwcreatePassword',
                type: 'text',
                name: 'password',
            },
            
            createButton: {
                tag: 'input',
                id:'signUpCreate',
                type: 'button',
                value: 'Create',
            },
            cancelButton: {
                tag: 'input',
                id:'signUpCancel',
                type: 'button',
                value: 'Cancel',
            },
        },
    };
    
    //Fuction List

    //Return Form Element Contents as list
    const formElementContentList = () => {
        let contentList = [];

        for (let i = 0; i < Object.keys(SignUpObjectList.userInfo).length; i++) {
            let element = _global__WEBPACK_IMPORTED_MODULE_0__.globaljs.newElement(SignUpObjectList.userInfo[Object.keys(SignUpObjectList.userInfo)[i]]);
            contentList.push(element);
        };
        return contentList;
    };
      
    //Returns Form Element Section
    const formElementSection = () => {
        let contentList = formElementContentList(),
            element = _global__WEBPACK_IMPORTED_MODULE_0__.globaljs.newElement(SignUpObjectList.signUpForm);

        for (let i = 0; i < contentList.length; i++) {
            element.appendChild(contentList[i]);
        };

        return element;
    };

    //Returns Sign In Form Container Section
    const signUpFormContainerSection = () => {
        let element = _global__WEBPACK_IMPORTED_MODULE_0__.globaljs.newElement(SignUpObjectList.signUpFormContainer);

        element.appendChild(formElementSection());

        return element;
    };

    //Returns Sign In Container Inner Section
    const signUpContainerInnerSection = () => {
        let containerElement = _global__WEBPACK_IMPORTED_MODULE_0__.globaljs.newElement(SignUpObjectList.signUpContainerInner),
            h2Element = _global__WEBPACK_IMPORTED_MODULE_0__.globaljs.newElement(SignUpObjectList.appTitle),
            signInFormContainer = signUpFormContainerSection(),
            elementList = [h2Element, signInFormContainer];

        for (let i = 0; i < elementList.length; i++) {
            containerElement.appendChild(elementList[i]);
        }

        return containerElement;
    };

    //Returns Sign In Container Outer Section
    const signUpContainerOuterSection = () => {
        let element = _global__WEBPACK_IMPORTED_MODULE_0__.globaljs.newElement(SignUpObjectList.signUpContainerOuter),
        signUpContainerInner = signUpContainerInnerSection();

        element.appendChild(signUpContainerInner);

        return element;
    };

    // Sign In section Creation
    const createSection = () =>{
        let element = signUpContainerOuterSection();

        _global__WEBPACK_IMPORTED_MODULE_0__.globaljs.render.bodyAppendChild(element);
    };


    return{createSection:createSection};
})();

/***/ }),

/***/ "./src/signUpSectionFiles/signUpSectionFunction.js":
/*!*********************************************************!*\
  !*** ./src/signUpSectionFiles/signUpSectionFunction.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "signUpSectionFunction": () => (/* binding */ signUpSectionFunction)
/* harmony export */ });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global */ "./src/global.js");
/* harmony import */ var _userStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../userStorage */ "./src/userStorage.js");
/* harmony import */ var _signInSectionFiles_signInSectionCreation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../signInSectionFiles/signInSectionCreation */ "./src/signInSectionFiles/signInSectionCreation.js");
/* harmony import */ var _signInSectionFiles_signInSectionFunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../signInSectionFiles/signInSectionFunction */ "./src/signInSectionFiles/signInSectionFunction.js");
const Andrew = {
    password : "Andrew",
  }
  
// window.localStorage.setItem("Andrew", JSON.stringify(Andrew));

let newObject = window.localStorage.getItem("Andrew");
// console.log(JSON.parse(newObject));


let info = document.getElementById('userInfo')

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

;




const signUpSectionFunction = (() => {
    const cacheDom = (() => {
        let body = document.getElementsByTagName('body')
        return { body: body };
    })();

    const signUpFunction = () => {
        // Cache Dom List
        let info = document.getElementById('userCreateInfo'),
            signUpCreate = document.getElementById('signUpCreate'),
            signUpCancel = document.getElementById('signUpCancel'),
            signUpContainer = document.getElementById('signUp-Container-Outer');;


        //Function List
        const userCreateValidation = ( userToValidate ) =>{
            if (_userStorage__WEBPACK_IMPORTED_MODULE_1__.userStorage.checkUsername(userToValidate)) {
                return true
            }else{
                return false
            };
        };

        const passwordCreateValidation = ( passwordToValidate ) =>{
            if (_userStorage__WEBPACK_IMPORTED_MODULE_1__.userStorage.checkPassword(passwordToValidate)) {
                return true
            }else{
                return false
            };
        };

        const signUpValidation = () =>{
            if(userCreateValidation(info.elements['userName'].value)){

                if(passwordCreateValidation(info.elements['password'].value)){
                }else{
                    alert('Password does not meet requirements')
                }

            }else{
                alert('User ID does not meet requirements')
            }
        }


        //Event Binds
        signUpCreate.addEventListener('click', signUpValidation)
        signUpCancel.addEventListener('click', function () {
            _global__WEBPACK_IMPORTED_MODULE_0__.globaljs.render.removeElement(signUpContainer);
            _signInSectionFiles_signInSectionCreation__WEBPACK_IMPORTED_MODULE_2__.signInSectionCreation.createSection();
            _signInSectionFiles_signInSectionFunction__WEBPACK_IMPORTED_MODULE_3__.signInSectionFunction.signInFunction();
        })
        
    };

    return{signUpFunction:signUpFunction}
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

    const users = {
        userList:['Andrew'],

        Andrew:{
            userID:'Andrew',
            password : "Andrew",
            userStorageInfo: 'demo'
        }
    };

    const demo = {
        password : "Demo",
        projectTitles : ['Home Chores', 'Work', 'Food Prep'],

        item0:{
            taskList:['Laundry', 'Vacuum', 'Dishes'],
            tasks:{
                task0:{
                    dueDate:'11/26/22',
                    complete: false,
                },
                task1:{
                    dueDate:'11/26/22',
                    complete: false,
                },
                task2:{
                    dueDate:'11/26/22',
                    complete: false,
                }
            }
        },
        item1:{
            taskList:['Check E-mail', 'Update Project', 'Team Meeting'],
            tasks:{
                task0:{
                    dueDate:'11/26/22',
                    complete: false,
                },
                task1:{
                    dueDate:'11/26/22',
                    complete: false,

                },
                task2:{
                    dueDate:'11/26/22',
                    complete: false,
                }
            }
        },
        item2:{
            taskList:['Thaw Meat', 'Cut Vegetables', 'Cook Rice'],
            tasks:{
                task0:{
                    dueDate:'11/26/22',
                    complete: false,
                },
                task1:{
                    dueDate:'11/26/22',
                    complete: false,
                },
                task2:{
                    dueDate:'11/26/22',
                    complete: false,
                }
            }
        }, 
    }

    // Function List


    const checkUsername = (str) => {
        // at least one number, one lowercase and one uppercase letter
        // at least six characters
        var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
        return re.test(str);
    }

    const checkPassword = (str) => {
        // at least one number, one lowercase and one uppercase letter
        // at least six characters that are letters, numbers or the underscore
        var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/;
        return re.test(str);
    }
      return {demo:demo, users:users, checkUsername:checkUsername,checkPassword:checkPassword}
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
/* harmony import */ var _signInSectionFiles_signInSectionCreation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signInSectionFiles/signInSectionCreation */ "./src/signInSectionFiles/signInSectionCreation.js");
/* harmony import */ var _signInSectionFiles_signInSectionFunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signInSectionFiles/signInSectionFunction */ "./src/signInSectionFiles/signInSectionFunction.js");
/* harmony import */ var _signUpSectionFiles_signUpSectionFunction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signUpSectionFiles/signUpSectionFunction */ "./src/signUpSectionFiles/signUpSectionFunction.js");
/* harmony import */ var _signUpSectionFiles_signUpSectionCreation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signUpSectionFiles/signUpSectionCreation */ "./src/signUpSectionFiles/signUpSectionCreation.js");
/* harmony import */ var _NavSectionFiles_navSectionCreation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NavSectionFiles/navSectionCreation */ "./src/NavSectionFiles/navSectionCreation.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./global */ "./src/global.js");
// This is just a place Holder














// console.log('Now time for the JS')

// signInSectionCreation.createSection();

// signInSectionFunction.signInFunction();

// signUpSectionCreation.createSection();
// signUpSectionFunction.signUpFunction();
const Andrew = _userStorage__WEBPACK_IMPORTED_MODULE_1__.userStorage.demo
_NavSectionFiles_navSectionCreation__WEBPACK_IMPORTED_MODULE_6__.navSectionCreation.createSection(Andrew);
window.localStorage.setItem("Andrew", JSON.stringify(Andrew));

// let newObject = window.localStorage.getItem("Andrew");
// console.log(JSON.parse(newObject));

// let info = document.getElementById('userInfo')

// let test = () => {
//     if(window.localStorage.getItem(info.elements['userName'].value) == null){
//         console.log('This is not a username')
//     }else{
//         console.log('This Matches')
//         let test2 = JSON.parse(window.localStorage.getItem(info.elements['userName'].value))
//         console.log(test2.projectTitles)
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFNBQVMsT0FBTyxRQUFRLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxNQUFNLFFBQVEsTUFBTSxVQUFVLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxRQUFRLE9BQU8sUUFBUSxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sUUFBUSxNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsUUFBUSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksUUFBUSxNQUFNLFFBQVEsT0FBTyxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFFBQVEsTUFBTSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFFBQVEsTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sTUFBTSxRQUFRLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sTUFBTSxRQUFRLE9BQU8sUUFBUSxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFFBQVEsTUFBTSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxRQUFRLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxRQUFRLE1BQU0sVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFB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OztBQUV1QztBQUNBOztBQUVBO0FBQ0E7O0FBRVQ7Ozs7QUFJdEM7QUFDcEM7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGVBQWUsMERBQWdCO0FBQy9CLGlHQUFnQztBQUNoQzs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9OYXZTZWN0aW9uRmlsZXMvbmF2U2VjdGlvbkNyZWF0aW9uLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zaWduSW5TZWN0aW9uRmlsZXMvc2lnbkluU2VjdGlvbkNyZWF0aW9uLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3NpZ25JblNlY3Rpb25GaWxlcy9zaWduSW5TZWN0aW9uRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc2lnblVwU2VjdGlvbkZpbGVzL3NpZ25VcFNlY3Rpb25DcmVhdGlvbi5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zaWduVXBTZWN0aW9uRmlsZXMvc2lnblVwU2VjdGlvbkZ1bmN0aW9uLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3VzZXJTdG9yYWdlLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvaWNvbnM4LXRyYXNoLWNhbi5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9pY29uczgtZWRpdC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9pY29uczgtZG9uZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9pY29uczgtY2FuY2VsLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL1RvRG9BcHBCYWNrZ3JvdW5kLWNyb3BwZWQtbW9iaWxlLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL1RvRG9BcHBCYWNrZ3JvdW5kLWNyb3BwZWQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogVGFibGUgb2YgQ29udGVudHNcXG5cXHQxLiBJbXBvcnRzXFxuXFx0Mi4gR2xvYmFsIFN0eWxlc1xcblxcdFxcdDIuMS4gR2xvYmFsIFN0eWxlcyBWYXJpYWJsZXNcXG5cXHRcXHRcXHQyLjEuMS4gR2xvYmFsIFN0eWxlcyBWYXJpYWJsZXMtQ29sb3JcXG5cXHRcXHRcXHQyLjEuMi4gR2xvYmFsIFN0eWxlcyBWYXJpYWJsZXMtRm9udFxcblxcdFxcdFxcdDIuMS4zLiBHbG9iYWwgU3R5bGVzIEltYWdlc1xcblxcdFxcdDIuMi4gR2xvYmFsIFN0eWxlcyBHbG9iYWxcXG5cXHQzLiBwYWdlR3JpZENvbnRhaW5lciBTdHlsZXNcXG5cXHRcXHQzLjEuIHBhZ2VHcmlkQ29udGFpbmVyIEdsb2JhbCBTdHlsZXNcXG5cXHRcXHQzLjIuIHBhZ2VHcmlkQ29udGFpbmVyIFRhcmdldCBFbGVtZW50IFN0eWxlc1xcblxcdDQuIFNpZ24taW4gU3R5bGVzXFxuXFx0XFx0NC4xLiBTaWduLWluIEdsb2JhbCBTdHlsZXNcXG5cXHRcXHQ0LjIuIFNpZ24taW4gVGFyZ2V0IEVsZW1lbnQgU3R5bGVzXFxuXFx0NS4gU2lnbi1VcCBTdHlsZXNcXG5cXHRcXHQ1LjEuIFNpZ24tVXAgR2xvYmFsIFN0eWxlc1xcblxcdFxcdDUuMi4gU2lnbi1VcCBUYXJnZXQgRWxlbWVudCBTdHlsZXNcXG5cXHQ2LiBOYXZpZ2F0aW9uIFNlY3Rpb24gU3R5bGVzXFxuXFx0XFx0Ni4xLiBOYXZpZ2F0aW9uIFNlY3Rpb24gR2xvYmFsIFN0eWxlc1xcblxcdFxcdDYuMi4gTmF2aWdhdGlvbiBTZWN0aW9uIFRhcmdldCBFbGVtZW50IFN0eWxlc1xcblxcdDcuIE5hdmlnYXRpb24gTWVudSBTZWN0aW9uIFN0eWxlc1xcblxcdFxcdDcuMS4gTmF2aWdhdGlvbiBNZW51IEdsb2JhbCBTdHlsZXNcXG5cXHRcXHQ3LjIuIE5hdmlnYXRpb24gTWVudSBUYXJnZXQgRWxlbWVudCBTdHlsZXNcXG5cXHRcXHQ3LjMuIE5hdmlnYXRpb24gRWRpdCBTZWN0aW9uIEdsb2JhbCBTdHlsZXNcXG5cXHRcXHQ3LjQuIE5hdmlnYXRpb24gRWRpdCBTZWN0aW9uIFRhcmdldCBFbGVtZW50IFN0eWxlc1xcblxcdDguIE1haW4gU2VjdGlvbiBTdHllc1xcblxcdFxcdDguMS4gTWFpbiBTZWN0aW9uIEdsb2JhbCBTdHlsZXNcXG5cXHRcXHQ4LjIuIE1haW4gU2VjdGlvbiBUYXJnZXQgRWxlbWVudCBTdHlsZXNcXG5cXHRcXHQ4LjMuIE1haW4gRWRpdCBTZWN0aW9uIEdsb2JhbCBTdHlsZXNcXG5cXHRcXHQ4LjQuIE1haW4gRWRpdCBTZWN0aW9uIFRhcmdldCBFbGVtZW50IFN0eWxlc1xcblxcdCouIEZvb3RlciBTdHlsZSBTZWN0aW9uXFxuXFx0Ki4gTWVkaWEgUXVlcnkgU2VjdGlvblxcblxcdFxcdCouMS4gR2xvYmFsIE1lZGlhIFF1ZXJpZXNcXG5cXHRcXHQqLjIuIHBhZ2VHcmlkQ29udGFpbmVyIE1lZGlhIFF1ZXJpZXNcXG5cXHRcXHQqLjMuIE5hdmlnYXRpb24gU2VjdGlvbiBNZWRpYSBRdWVyaWVzXFxuXFx0XFx0Ki40LiBOYXZpZ2F0aW9uIE1lbnUgU2VjdGlvbiBNZWRpYSBRdWVyaWVzXFxuXFxuKi9cXG5cXG4vKlxcdD09PT09PT09PT1cXG5cXHQxLiBJbXBvcnRzXFxuXFx0PT09PT09PT09PSAqL1xcblxcbi8qXFx0PT09PT09PT09PT09PT09PVxcblxcdDIuIEdsb2JhbCBTdHlsZXNcXG5cXHQ9PT09PT09PT09PT09PT09ICovXFxuXFxuXFx0LypcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0XFx0Mi4xLiBHbG9iYWwgU3R5bGVzIFZhcmlhYmxlc1xcblxcdFxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG46cm9vdHtcXG5cXG5cXHRcXHQvKlxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdFxcdFxcdDIuMS4xLiBHbG9iYWwgU3R5bGVzIFZhcmlhYmxlcy1Db2xvclxcblxcdFxcdCBcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG5cXHQtLWNsci1wcmltYXJ5OnJnYigyNTUsMjU1LDI1NSk7XFxuXFx0LS1jbHItcHJpbWFyeS1vcGFjaXR5LWxpZ2h0OnJnYigyNTUsMjU1LDI1NSwgMC42KTtcXG5cXHQtLWNsci1wcmltYXJ5LW9wYWNpdHktbWlkOnJnYigyNTUsMjU1LDI1NSwgMC44KTtcXG5cXHQtLWNsci1wcmltYXJ5LW9wYWNpdHktZGFyazpyZ2IoMjU1LDI1NSwyNTUsIDAuOSk7XFxuXFxuXFx0LS1jbHItc2Vjb25kYXJ5OnJnYigxNCwgOSwgOSk7XFxuXFx0LS1jbHItc2Vjb25kYXJ5LW9wYWNpdHktbGlnaHQ6cmdiKDE0LCA5LCA5LCAwLjI4KTtcXG5cXHQtLWNsci1zZWNvbmRhcnktb3BhY2l0eS1taWQ6cmdiKDE0LCA5LCA5LCAwLjQpO1xcblxcdC0tY2xyLXNlY29uZGFyeS1vcGFjaXR5LWRhcms6cmdiKDE0LCA5LCA5LCAwLjUpO1xcblxcblxcdC0tY2xyLWFjY2VudDpyZ2IoMTc0LDMxLDY2KTtcXG5cXHQtLWNsci1hY2NlbnQtbGlnaHQ6cmdiKDIyNCw2MCwxMDEpO1xcblxcdFxcdFxcdFxcblxcdFxcdC8qXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHRcXHRcXHQyLjEuMi4gR2xvYmFsIFN0eWxlcyBWYXJpYWJsZXMtRm9udFxcblxcdFxcdCBcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcblxcdC0tZmYtcHJpbWFyeTonUm9ib3RvJywgc2Fucy1zZXJpZjtcXG5cXG5cXHQvKlxcdFxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdFxcdFxcdDIuMS4zLiBHbG9iYWwgU3R5bGVzIEltYWdlc1xcblxcdFxcdCBcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG5cXHQtLWltZy10cmFzaDp1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcblxcdC0taW1nLWVkaXQ6dXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG5cXHQtLWltZy1kb25lOnVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuXFx0LS1pbWctY2FuY2VsOnVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxufVxcblxcblxcdC5lZGl0LC5kZWxldGUsLmRvbmUsLmNhbmNlbHtcXG5cXHRcXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcblxcdFxcdGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcblxcdH1cXG5cXG5cXHQvKlxcdD09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHRcXHQyLjIuIEdsb2JhbCBTdHlsZXMgR2xvYmFsXFxuXFx0XFx0PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qIFxcblxcdENTUyBTdHlsaW5nIFJlc2V0IGZyb21cXG5cXHRodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICBcXHR2Mi4wIHwgMjAxMTAxMjZcXG4gICBcXHRMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxuXFx0bWluLWhlaWdodDogMTAwdmg7XFxuXFx0Zm9udC1mYW1pbHk6IHZhcigtLWZmLXByaW1hcnkpO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpO1xcblxcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuXFx0YmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7IFxcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuLypcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHQzLiBwYWdlR3JpZENvbnRhaW5lciBTdHlsZXNcXG5cXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG5cXHQvKlxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdFxcdDMuMS4gcGFnZUdyaWRDb250YWluZXIgR2xvYmFsIFN0eWxlc1xcblxcdFxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiNwYWdlR3JpZENvbnRhaW5lcntcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcikgO1xcbiAgXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbiAgXFx0Z3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgIFxcXCJoZWFkZXIgaGVhZGVyIGhlYWRlciBoZWFkZXJcXFwiXFxuICAgIFxcXCJtYWluIG1haW4gbWFpbiBtYWluXFxcIlxcbiAgICBcXFwiZm9vdGVyIGZvb3RlciBmb290ZXIgZm9vdGVyXFxcIjtcXG59XFxuXFxuXFx0LypcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdFxcdDMuMi4gcGFnZUdyaWRDb250YWluZXIgVGFyZ2V0IEVsZW1lbnQgU3R5bGVzXFxuXFx0XFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4jbmF2U2VjdGlvbntcXG5cXHRncmlkLWFyZWE6IGhlYWRlcjtcXG59XFxuI25hdk1lbnVTZWN0aW9ue1xcblxcdGdyaWQtYXJlYTogc2lkZWJhcjtcXG59XFxuI21haW5TZWN0aW9ue1xcblxcdGdyaWQtYXJlYTogbWFpbjtcXG59XFxuI2Zvb3RlclNlY3Rpb257XFxuXFx0Z3JpZC1hcmVhOiBmb290ZXI7XFxufVxcblxcbi8qXFx0PT09PT09PT09PT09PT09PT1cXG5cXHQ0LiBTaWduLWluIFN0eWxlc1xcblxcdD09PT09PT09PT09PT09PT09ICovXFxuXFxuXFx0LypcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdFxcdDQuMS4gU2lnbi1pbiBHbG9iYWwgU3R5bGVzXFxuXFx0XFx0PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG5mb3Jte1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI3NpZ25Jbi1Db250YWluZXItSW5uZXIsICNzaWduSW4tQ29udGFpbmVyLU91dGVye1xcblxcdGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNzaWduSW4tQ29udGFpbmVyLU91dGVye1xcblxcdGhlaWdodDogMTAwdmg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNzaWduSW4tQ29udGFpbmVyLUlubmVye1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG5cXHRtaW4td2lkdGg6IDM1JTtcXG5cXHRtYXgtd2lkdGg6IDgwJTtcXG5cXHRtYXJnaW46IDguNWVtIDNlbSAxM2VtO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1wcmltYXJ5LW9wYWNpdHktbWlkKTtcXG5cXHRib3JkZXItcmFkaXVzOiAyM3B4O1xcbn1cXG5cXG4jc2lnbkluLUZvcm0tQ29udGFpbmVye1xcblxcdG1hcmdpbjowIDFlbTtcXG5cXHRwYWRkaW5nOiAxLjVlbSAwO1xcblxcdG1pbi13aWR0aDogNjAlO1xcblxcdG1heC13aWR0aDogODAlO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1zZWNvbmRhcnktb3BhY2l0eS1taWQpO1xcbn1cXG5cXG5cXHQvKlxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHRcXHQ0LjIuIFNpZ24taW4gVGFyZ2V0IEVsZW1lbnQgU3R5bGVzXFxuXFx0XFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiNhcHBUaXRsZXtcXG5cXHRmb250LXNpemU6IDJlbTtcXG5cXHRtYXJnaW46IDAuNWVtO1xcblxcdGNvbG9yOiB2YXIoLS1jbHItc2Vjb25kYXJ5KTtcXG59XFxuXFxuZm9ybSA+IGlucHV0LCBmb3JtID4gbGFiZWx7XFxuXFx0YWxpZ24tc2VsZjogY2VudGVyO1xcblxcdG1pbi13aWR0aDogNjAlO1xcblxcdG1heC13aWR0aDogODAlO1xcbn1cXG5cXG5mb3JtID5sYWJlbHtcXG5cXHRmb250LXNpemU6IDEuNWVtO1xcblxcdGNvbG9yOnZhcigtLWNsci1wcmltYXJ5KTtcXG59XFxuXFxuaW5wdXRbdHlwZT1idXR0b25dLCAjZGVtb0J1dHRvbntcXG5cXHRtYXJnaW46IDAuM2VtO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0Zm9udC1zaXplOiAxLjJlbTtcXG5cXHRwYWRkaW5nOiAwLjNlbSAzZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogMWVtO1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRjb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1hY2NlbnQpO1xcblxcdHRyYW5zaXRpb246IDAuNXM7XFxufVxcblxcbmlucHV0W3R5cGU9YnV0dG9uXTpob3ZlciwgI2RlbW9CdXR0b246aG92ZXJ7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWFjY2VudC1saWdodCk7XFxufVxcblxcbmlucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9cGFzc3dvcmRde1xcblxcdG1hcmdpbjogMC41ZW07XFxuXFx0cGFkZGluZzogMC41ZW0gMWVtO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuXFx0YmFja2dyb3VuZDogdmFyKC0tY2xyLXNlY29uZGFyeS1vcGFjaXR5LWRhcmspO1xcblxcdGJvcmRlci1yYWRpdXM6IDFlbTtcXG59XFxuXFxuI2RlbW9CdXR0b257XFxuXFx0cGFkZGluZzogMC4zZW0gMmVtO1xcbn1cXG5cXG4vKlxcdD09PT09PT09PT09PT09PT09XFxuXFx0NS4gU2lnbi1VcCBTdHlsZXNcXG5cXHQ9PT09PT09PT09PT09PT09PSAqL1xcblxcblxcblxcdC8qXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHRcXHQ1LjEuIFNpZ24tVXAgR2xvYmFsIFN0eWxlc1xcblxcdFxcdD09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuZm9ybXtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNzaWduVXAtQ29udGFpbmVyLUlubmVyLCAjc2lnblVwLUNvbnRhaW5lci1PdXRlcntcXG5cXHRkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jc2lnblVwLUNvbnRhaW5lci1PdXRlcntcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jc2lnblVwLUNvbnRhaW5lci1Jbm5lcntcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuXFx0bWluLXdpZHRoOiAzNSU7XFxuXFx0bWF4LXdpZHRoOiA4MCU7XFxuXFx0bWFyZ2luOiA4LjVlbSAzZW0gMTNlbTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeS1vcGFjaXR5LW1pZCk7XFxuXFx0Ym9yZGVyLXJhZGl1czogMjNweDtcXG59XFxuXFxuI3NpZ25VcC1Gb3JtLUNvbnRhaW5lcntcXG5cXHRtYXJnaW46MCAxZW07XFxuXFx0cGFkZGluZzogMS41ZW0gMDtcXG5cXHRtaW4td2lkdGg6IDYwJTtcXG5cXHRtYXgtd2lkdGg6IDgwJTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItc2Vjb25kYXJ5LW9wYWNpdHktbWlkKTtcXG59XFxuXFx0XFx0XFxuXFx0LypcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0XFx0NS4yLiBTaWduLVVwIFRhcmdldCBFbGVtZW50IFN0eWxlc1xcblxcdFxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXHRcXHRcXG4jYXBwVGl0bGV7XFxuXFx0Zm9udC1zaXplOiAyZW07XFxuXFx0Y29sb3I6IHZhcigtLWNsci1zZWNvbmRhcnkpO1xcblxcdFxcbn1cXG5cXG5mb3JtID4gaW5wdXQsIGZvcm0gPiBsYWJlbHtcXG5cXHRhbGlnbi1zZWxmOiBjZW50ZXI7XFxuXFx0bWluLXdpZHRoOiA2MCU7XFxuXFx0bWF4LXdpZHRoOiA4MCU7XFxufVxcblxcbmZvcm0gPmxhYmVse1xcblxcdGZvbnQtc2l6ZTogMS41ZW07XFxuXFx0Y29sb3I6dmFyKC0tY2xyLXByaW1hcnkpO1xcbn1cXG5cXG5pbnB1dFt0eXBlPWJ1dHRvbl0sICNkZW1vQnV0dG9ue1xcblxcdG1hcmdpbjogMC4zZW07XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRmb250LXNpemU6IDEuMmVtO1xcblxcdHBhZGRpbmc6IDAuM2VtIDNlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAxZW07XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdGNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWFjY2VudCk7XFxuXFx0dHJhbnNpdGlvbjogMC41cztcXG59XFxuXFxuaW5wdXRbdHlwZT1idXR0b25dOmhvdmVyLCAjZGVtb0J1dHRvbjpob3ZlcntcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYWNjZW50LWxpZ2h0KTtcXG59XFxuXFxuaW5wdXRbdHlwZT10ZXh0XXtcXG5cXHRtYXJnaW46IDAuNWVtO1xcblxcdHBhZGRpbmc6IDAuNWVtIDFlbTtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdGJhY2tncm91bmQ6IHZhcigtLWNsci1zZWNvbmRhcnktb3BhY2l0eS1kYXJrKTtcXG5cXHRib3JkZXItcmFkaXVzOiAxZW07XFxufVxcblxcbiNkZW1vQnV0dG9ue1xcblxcdHBhZGRpbmc6IDAuM2VtIDJlbTtcXG59XFxuXFxuLypcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0Ni4gTmF2aWdhdGlvbiBTZWN0aW9uIFN0eWxlc1xcblxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXHRcXG5cXHQvKlxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHRcXHQ2LjEuIE5hdmlnYXRpb24gU2VjdGlvbiBHbG9iYWwgU3R5bGVzXFxuXFx0XFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiNuYXZTZWN0aW9ue1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcblxcdGZvbnQtc2l6ZTogMmVtO1xcblxcdHBvc2l0aW9uOiBmaXhlZDtcXG5cXHR0b3A6IDA7XFxuXFx0d2lkdGg6IDEwMHZ3O1xcblxcdGNvbG9yOiB2YXIoLS1jbHItc2Vjb25kYXJ5KTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeS1vcGFjaXR5LWxpZ2h0KTtcXG59XFxuXFxuXFx0LypcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHRcXHQ2LjIuIE5hdmlnYXRpb24gU2VjdGlvbiBUYXJnZXQgRWxlbWVudCBTdHlsZXNcXG5cXHRcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4jbmF2U2VjdGlvbiA+aDF7XFxuXFx0bWFyZ2luLWxlZnQ6IDAuMmVtO1xcblxcdGZvbnQtc2l6ZTogMmVtO1xcblxcdHRyYW5zaXRpb246IDAuNXM7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG4jbmF2U2VjdGlvbiA+aDJ7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDo1MCU7XFxuXFx0bGVmdDo1MCU7XFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcblxcbi8qXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0Ny4gTmF2aWdhdGlvbiBNZW51IFNlY3Rpb24gU3R5bGVzXFxuXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuXFx0LypcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0XFx0Ny4xLiBOYXZpZ2F0aW9uIE1lbnUgR2xvYmFsIFN0eWxlc1xcblxcdFxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4jbmF2TWVudVNlY3Rpb24+KntcXG5cXHRtYXJnaW4tdG9wOiAxZW07XFxufVxcblxcbiNuYXZNZW51U2VjdGlvbntcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0dG9wOiAyZW07XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXHRmb250LXNpemU6IDJlbTsgIFxcblxcdHdpZHRoOiAyNSU7XFxuXFx0Y29sb3I6IHZhcigtLWNsci1zZWNvbmRhcnkpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSwgMCk7XFxuXFx0dHJhbnNpdGlvbjogMC41cztcXG59XFxuXFxuI2RhdGVTZWxlY3RvcntcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNwcm9qZWN0U2VsZWN0b3J7XFxuXFx0Zm9udC1zaXplOiAwLjVlbTtcXG59XFxuXFxuI3Byb2plY3RTZWxlY3Rvcj51bHtcXG5cXHRtYXJnaW46IDFlbTtcXG5cXHRsaXN0LXN0eWxlLXR5cGU6IGRpc2M7XFxufVxcblxcbiNwcm9qZWN0U2VsZWN0b3I+dWw+c2VjdGlvbj4qe1xcblxcdGZsZXgtZ3JvdzogMTtcXG5cXHR0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG5cXG4jcHJvamVjdFNlbGVjdG9yPnVsPnNlY3Rpb24+Kjpob3ZlcntcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItc2Vjb25kYXJ5LW9wYWNpdHktbGlnaHQpO1xcbn1cXG5cXG5cXHQvKlxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdFxcdDcuMi4gTmF2aWdhdGlvbiBNZW51IFRhcmdldCBFbGVtZW50IFN0eWxlc1xcblxcdFxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiNkZWZhdWx0U2VsZWN0b3IgPiBoMntcXG5cXHRtYXJnaW46IDAuNWVtO1xcbn1cXG5cXG4jZGF0ZVNlbGVjdG9yID4gcHtcXG5cXHRmb250LXNpemU6IDAuNzVlbTsgIFxcbn1cXG5cXG4jZGF0ZVNlbGVjdG9yPmlucHV0e1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdG1hcmdpbjogMWVtO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3Byb2plY3RTZWxlY3Rvcj5oMntcXG5cXHRmb250LXNpemU6IDEuNzVlbTtcXG59XFxuXFxuI3Byb2plY3RTZWxlY3Rvcj51bD5saXtcXG5cXHRtYXJnaW46IDAuNWVtO1xcblxcbn1cXG5cXG4jcHJvamVjdFNlbGVjdG9yPnVsPnNlY3Rpb257XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdGhlaWdodDogMmVtO1xcbn1cXG5cXG4jcHJvamVjdFNlbGVjdG9yPnVsPnNlY3Rpb24+LmVkaXR7XFxuXFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG5cXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcblxcdGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbn1cXG5cXG4jcHJvamVjdFNlbGVjdG9yPnVsPnNlY3Rpb24+LmRlbGV0ZXtcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcblxcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuXFx0YmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxufVxcblxcbiNwcm9qZWN0U2VsZWN0b3I+dWw+LmFkZFByb2plY3R7XFxuXFx0cGFkZGluZzogMC42ZW07XFxuXFx0Zm9udC1zaXplOiAxLjJlbTtcXG5cXHRtYXJnaW4tdG9wOiAwLjVlbTtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcblxcdGNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWFjY2VudCk7XFxuXFx0dHJhbnNpdGlvbjogMC41cztcXG59XFxuXFxuI3Byb2plY3RTZWxlY3Rvcj51bD4uYWRkUHJvamVjdDpob3ZlcntcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYWNjZW50LWxpZ2h0KTtcXG59XFxuXFxuLypcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHQ3LjMuIE5hdmlnYXRpb24gRWRpdCBTZWN0aW9uIEdsb2JhbCBTdHlsZXNcXG5cXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4jZWRpdFByb2plY3RDb250YWluZXJ7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRib3JkZXI6IDAuMmVtIGluc2V0IHZhcigtLWNsci1hY2NlbnQpO1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNlZGl0UHJvamVjdENvbnRhaW5lcj4qe1xcblxcdGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuI2VkaXRQcm9qZWN0Q29udGFpbmVyPi5kb25lLWNhbmNlbFNlY3Rpb24+KntcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDJlbTtcXG59XFxuXFxuXFx0LypcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0Ny40LiBOYXZpZ2F0aW9uIEVkaXQgU2VjdGlvbiBUYXJnZXQgRWxlbWVudCBTdHlsZXNcXG5cXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiNlZGl0UHJvamVjdENvbnRhaW5lcntcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGJvcmRlcjogMC4yZW0gaW5zZXQgdmFyKC0tY2xyLWFjY2VudCk7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2VkaXRQcm9qZWN0Q29udGFpbmVyPi5kb25lLWNhbmNlbFNlY3Rpb257XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG5cXHR0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG5cXG4jZWRpdFByb2plY3RDb250YWluZXI+LmVkaXRUYXNrU2VsZWN0PmlucHV0e1xcblxcdHdpZHRoOiA4MCU7XFxufVxcblxcbiNlZGl0UHJvamVjdENvbnRhaW5lcj4uZG9uZS1jYW5jZWxTZWN0aW9uPio6aG92ZXJ7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXNlY29uZGFyeS1vcGFjaXR5LWxpZ2h0KTtcXG59XFxuXFxuLypcXHQ9PT09PT09PT09PT09PT09PT09PT1cXG5cXHQ4LiBNYWluIFNlY3Rpb24gU3R5ZXNcXG5cXHQ9PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG5cXHQvKlxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHRcXHQ4LjEuIE1haW4gU2VjdGlvbiBHbG9iYWwgU3R5bGVzXFxuXFx0XFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiNtYWluU2VjdGlvbj4qe1xcblxcdG1pbi13aWR0aDogODAlO1xcbn1cXG5cXG4jbWFpblNlY3Rpb24sIC5pdGVtcywgLnRhc2tze1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbiNtYWluU2VjdGlvbntcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0bWFyZ2luLXRvcDogM2VtO1xcblxcdHBhZGRpbmctYm90dG9tOiAyZW07XFxuXFx0Z2FwOiAwLjVlbSAwZW07XFxuXFx0Zm9udC1zaXplOiAxLjVlbTtcXG5cXHRjb2xvcjogdmFyKC0tY2xyLXNlY29uZGFyeSk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXByaW1hcnktb3BhY2l0eS1kYXJrKTtcXG59XFxuXFxuLml0ZW1ze1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxufVxcblxcbi50YXNrc3tcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbn1cXG5cXG4uaXRlbXMgPiAqe1xcblxcdGdyaWQtY29sdW1uOiAxIC8gc3BhbiAzO1xcbn1cXG5cXG4uaXRlbXN7XFxuXFx0Y29sb3I6IHZhcigtLWNsci1zZWNvbmRhcnkpO1xcblxcdHBsYWNlLXNlbGY6IGNlbnRlcjtcXG5cXHRnYXA6IDAuNWVtIDBlbTtcXG5cXHRtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS1jbHItc2Vjb25kYXJ5LW9wYWNpdHktbGlnaHQpO1xcbn1cXG5cXG4udGFza3M+KntcXG5cXHRwbGFjZS1zZWxmOiBjZW50ZXI7XFxuXFx0cGFkZGluZzogMC4yZW07XFxufVxcblxcbi50YXNrcz5zZWN0aW9uPip7XFxuXFx0aGVpZ2h0OiAyZW07XFxuXFx0d2lkdGg6IDJlbTtcXG5cXHRmbGV4LWdyb3c6IDE7XFxuXFx0dHJhbnNpdGlvbjogMC41cztcXG59XFxuXFxuLnRhc2tzPnNlY3Rpb24+Kjpob3ZlcntcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItc2Vjb25kYXJ5LW9wYWNpdHktbGlnaHQpO1xcbn1cXG5cXG5cXHQvKlxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdFxcdDguMi4gTWFpbiBTZWN0aW9uIFRhcmdldCBFbGVtZW50IFN0eWxlc1xcblxcdFxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiNtYWluU2VjdGlvbiA+IGgye1xcblxcdGZvbnQtc2l6ZTogMS41ZW07XFxuXFx0cGFkZGluZzogMC41ZW07XFxufVxcblxcbi5pdGVtcz5oMntcXG5cXHRmb250LXNpemU6IDEuNWVtO1xcblxcdHBhZGRpbmctdG9wOiAwLjJlbTtcXG59XFxuXFxuLnRhc2tzPmxhYmVse1xcblxcdGNvbG9yOiB2YXIoLS1jbHItc2Vjb25kYXJ5KTtcXG5cXHRwbGFjZS1zZWxmOiBjZW50ZXI7XFxuXFx0Zm9udC1zaXplOiAxZW07XFxuXFx0d2lkdGg6IDEwMCU7XFxufVxcblxcbi50YXNrcz5pbnB1dHtcXG5cXHRoZWlnaHQ6IDJlbTtcXG5cXHR3aWR0aDogMmVtO1xcbn1cXG5cXG4udGFza3M+c2VjdGlvbntcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHR3aWR0aDoxMDAlO1xcbn1cXG5cXG4uZWRpdHtcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1pbWctZWRpdCk7XFxufVxcblxcbi5kZWxldGV7XFxuXFx0YmFja2dyb3VuZC1pbWFnZTogdmFyKC0taW1nLXRyYXNoKTtcXG59XFxuXFxuLmFkZFRhc2t7XFxuXFx0cGFkZGluZzogMC42ZW07XFxuXFx0bWFyZ2luLWJvdHRvbTogMC41ZW07XFxuXFx0Zm9udC1zaXplOiAwLjhlbTtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRncmlkLWNvbHVtbjogMjtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcblxcdGNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWFjY2VudCk7XFxuXFx0dHJhbnNpdGlvbjogMC41cztcXG59XFxuXFxuLmFkZFRhc2s6aG92ZXJ7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWFjY2VudC1saWdodCk7XFxufVxcblxcblxcdC8qXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0XFx0OC4zLiBNYWluIEVkaXQgU2VjdGlvbiBHbG9iYWwgU3R5bGVzXFxuXFx0XFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuI2VkaXRUYXNrPip7XFxuXFx0cGxhY2Utc2VsZjogY2VudGVyO1xcbn1cXG5cXG4jZWRpdFRhc2s+c2VjdGlvbj4qe1xcblxcdGhlaWdodDogYXV0bztcXG5cXHR3aWR0aDogOTAlO1xcblxcdHRyYW5zaXRpb246IDAuNXM7XFxufVxcblxcbiNlZGl0VGFzaz4uZG9uZS1jYW5jZWxTZWN0aW9uPio6aG92ZXJ7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXNlY29uZGFyeS1vcGFjaXR5LWxpZ2h0KTtcXG59XFxuXFxuI2VkaXRUYXNrPi5kb25lLWNhbmNlbFNlY3Rpb24+KntcXG5cXHR3aWR0aDogYXV0bztcXG5cXHRoZWlnaHQ6IGF1dG87XFxuXFx0ZmxleC1ncm93OiAxO1xcbn1cXG5cXG5cXHQvKlxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0XFx0OC40LiBNYWluIEVkaXQgU2VjdGlvbiBUYXJnZXQgRWxlbWVudCBTdHlsZXNcXG5cXHRcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiNlZGl0VGFza0NvbnRhaW5lcntcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGdyaWQtY29sdW1uOiBzcGFuIDQ7XFxufVxcblxcbiNlZGl0VGFza3tcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdG1hcmdpbjogYXV0bztcXG5cXHR3aWR0aDogODAlO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwLjJlbSBpbnNldCB2YXIoLS1jbHItYWNjZW50KTtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcblxcdGNvbHVtbi1nYXA6IDAuNWVtO1xcbn1cXG5cXG4jZWRpdFRhc2s+c2VjdGlvbntcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jZWRpdFRhc2s+c2VjdGlvbj5sYWJlbHtcXG5cXHRjb2xvcjogdmFyKC0tY2xyLXNlY29uZGFyeSk7XFxuXFx0cGxhY2Utc2VsZjogY2VudGVyO1xcblxcdGZvbnQtc2l6ZTogMWVtO1xcblxcdHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jZWRpdFRhc2s+c2VjdGlvbj50ZXh0YXJlYXtcXG5cXHRyZXNpemU6IHZlcnRpY2FsO1xcbn1cXG5cXG4jZWRpdFRhc2s+LmRvbmUtY2FuY2VsU2VjdGlvbntcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4uZG9uZXtcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1pbWctZG9uZSk7XFxufVxcblxcbi5jYW5jZWx7XFxuXFx0YmFja2dyb3VuZC1pbWFnZTogdmFyKC0taW1nLWNhbmNlbCk7XFxufVxcblxcbi8qXFx0PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHQqLiBGb290ZXIgU3R5bGUgU2VjdGlvblxcblxcdD09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuI2Zvb3RlclNlY3Rpb257XFxuXFx0cG9zaXRpb246IGZpeGVkO1xcblxcdGxlZnQ6IDA7XFxuXFx0Ym90dG9tOiAwO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1zZWNvbmRhcnkpO1xcblxcdGNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4vKlxcdD09PT09PT09PT09PT09PT09PT09PT1cXG5cXHQqLiBNZWRpYSBRdWVyeSBTZWN0aW9uXFxuXFx0PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzUwcHgpIHtcXG5cXG5cXHQvKlxcdD09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHRcXHQqLjEuIEdsb2JhbCBNZWRpYSBRdWVyaWVzXFxuXFx0XFx0PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcblxcdGJvZHkge1xcblxcdFxcdGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gKyBcIik7XFxuXFx0fVxcblxcblxcdC8qXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0XFx0Ki4yLiBwYWdlR3JpZENvbnRhaW5lciBNZWRpYSBRdWVyaWVzXFxuXFx0XFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuXFx0I3BhZ2VHcmlkQ29udGFpbmVye1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcblxcdFxcdFxcXCJoZWFkZXIgaGVhZGVyIGhlYWRlciBoZWFkZXJcXFwiXFxuXFx0XFx0XFxcInNpZGViYXIgbWFpbiBtYWluIG1haW5cXFwiXFxuXFx0XFx0XFxcImZvb3RlciBmb290ZXIgZm9vdGVyIGZvb3RlclxcXCI7XFxuXFx0fVxcblxcblxcblxcdC8qXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdFxcdCouMy4gTmF2aWdhdGlvbiBTZWN0aW9uIE1lZGlhIFF1ZXJpZXNcXG5cXHRcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuXFx0I21haW5TZWN0aW9ue1xcblxcdFxcdG1hcmdpbjogM2VtIDFlbSAwZW07XFxuXFx0fVxcblxcblxcdCNtYWluU2VjdGlvbj4qe1xcblxcdFxcdG1pbi13aWR0aDogNzUlO1xcblxcdH1cXG5cXG5cXHQjbmF2U2VjdGlvbj5oMXtcXG5cXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xcblxcdH1cXG5cXG5cXHQvKlxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdFxcdCouNC4gTmF2aWdhdGlvbiBNZW51IFNlY3Rpb24gTWVkaWEgUXVlcmllc1xcblxcdFxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcblxcdCNuYXZNZW51U2VjdGlvbntcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcXG5cXHR9XFxuXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FxQ0M7O0FBRUQ7O2FBRWE7O0FBSWI7O21CQUVtQjs7Q0FFbEI7O2dDQUUrQjs7QUFFaEM7O0VBRUU7OzBDQUV3Qzs7Q0FFekMsOEJBQThCO0NBQzlCLGlEQUFpRDtDQUNqRCwrQ0FBK0M7Q0FDL0MsZ0RBQWdEOztDQUVoRCw2QkFBNkI7Q0FDN0IsaURBQWlEO0NBQ2pELDhDQUE4QztDQUM5QywrQ0FBK0M7O0NBRS9DLDJCQUEyQjtDQUMzQixrQ0FBa0M7O0VBRWpDOzt5Q0FFdUM7O0NBRXhDLGlDQUFpQzs7Q0FFakM7O2lDQUVnQzs7Q0FFaEMsbURBQWdEO0NBQ2hELGtEQUEwQztDQUMxQyxrREFBMEM7Q0FDMUMsb0RBQThDO0FBQy9DOztDQUVDO0VBQ0MsNEJBQTRCO0VBQzVCLDBCQUEwQjtDQUMzQjs7Q0FFQTs7NkJBRTRCO0FBQzdCOzs7OztDQUtDOztBQUVEOzs7Ozs7Ozs7Ozs7O0NBYUMsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1QsZUFBZTtDQUNmLGFBQWE7Q0FDYix3QkFBd0I7QUFDekI7QUFDQSxnREFBZ0Q7QUFDaEQ7O0NBRUMsY0FBYztBQUNmOztBQUVBO0NBQ0MsY0FBYztDQUNkLGlCQUFpQjtDQUNqQiw4QkFBOEI7Q0FDOUIsa0JBQWtCO0NBQ2xCLHlEQUFzRTtDQUN0RSw0QkFBNEI7Q0FDNUIsMEJBQTBCO0FBQzNCO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTs7Q0FFQyxXQUFXO0NBQ1gsYUFBYTtBQUNkO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsaUJBQWlCO0FBQ2xCOztBQUVBOzs4QkFFOEI7O0NBRTdCOzt3Q0FFdUM7O0FBRXhDO0NBQ0MsYUFBYTtDQUNiLHNDQUFzQztHQUNwQyx3QkFBd0I7R0FDeEI7OztpQ0FHOEI7QUFDakM7O0NBRUM7O2dEQUUrQzs7QUFFaEQ7Q0FDQyxpQkFBaUI7QUFDbEI7QUFDQTtDQUNDLGtCQUFrQjtBQUNuQjtBQUNBO0NBQ0MsZUFBZTtBQUNoQjtBQUNBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUVBOztvQkFFb0I7O0NBRW5COzs4QkFFNkI7O0FBRTlCO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0Qix1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQyxhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0Msc0JBQXNCO0NBQ3RCLG1CQUFtQjtDQUNuQiw2QkFBNkI7Q0FDN0IsY0FBYztDQUNkLGNBQWM7Q0FDZCxzQkFBc0I7Q0FDdEIsZ0RBQWdEO0NBQ2hELG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixnQkFBZ0I7Q0FDaEIsY0FBYztDQUNkLGNBQWM7Q0FDZCxrREFBa0Q7QUFDbkQ7O0NBRUM7O3NDQUVxQzs7QUFFdEM7Q0FDQyxjQUFjO0NBQ2QsYUFBYTtDQUNiLDJCQUEyQjtBQUM1Qjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixjQUFjO0NBQ2QsY0FBYztBQUNmOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLHdCQUF3QjtBQUN6Qjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixZQUFZO0NBQ1osZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixrQkFBa0I7Q0FDbEIsa0JBQWtCO0NBQ2xCLHFCQUFxQjtDQUNyQix5QkFBeUI7Q0FDekIsbUNBQW1DO0NBQ25DLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLHlDQUF5QztBQUMxQzs7QUFFQTtDQUNDLGFBQWE7Q0FDYixrQkFBa0I7Q0FDbEIsWUFBWTtDQUNaLHFCQUFxQjtDQUNyQiw2Q0FBNkM7Q0FDN0Msa0JBQWtCO0FBQ25COztBQUVBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUVBOztvQkFFb0I7OztDQUduQjs7OEJBRTZCOztBQUU5QjtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0MsYUFBYTtBQUNkOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLHNCQUFzQjtDQUN0QixtQkFBbUI7Q0FDbkIsNkJBQTZCO0NBQzdCLGNBQWM7Q0FDZCxjQUFjO0NBQ2Qsc0JBQXNCO0NBQ3RCLGdEQUFnRDtDQUNoRCxtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osZ0JBQWdCO0NBQ2hCLGNBQWM7Q0FDZCxjQUFjO0NBQ2Qsa0RBQWtEO0FBQ25EOztDQUVDOztzQ0FFcUM7O0FBRXRDO0NBQ0MsY0FBYztDQUNkLDJCQUEyQjs7QUFFNUI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsY0FBYztDQUNkLGNBQWM7QUFDZjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQix3QkFBd0I7QUFDekI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsWUFBWTtDQUNaLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCLGtCQUFrQjtDQUNsQixxQkFBcUI7Q0FDckIseUJBQXlCO0NBQ3pCLG1DQUFtQztDQUNuQyxnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyx5Q0FBeUM7QUFDMUM7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isa0JBQWtCO0NBQ2xCLFlBQVk7Q0FDWixxQkFBcUI7Q0FDckIsNkNBQTZDO0NBQzdDLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQjs7QUFFQTs7K0JBRStCOztDQUU5Qjs7eUNBRXdDOztBQUV6QztDQUNDLGFBQWE7Q0FDYiwyQkFBMkI7Q0FDM0IsY0FBYztDQUNkLGVBQWU7Q0FDZixNQUFNO0NBQ04sWUFBWTtDQUNaLDJCQUEyQjtDQUMzQixrREFBa0Q7QUFDbkQ7O0NBRUM7O2lEQUVnRDs7QUFFakQ7Q0FDQyxrQkFBa0I7Q0FDbEIsY0FBYztDQUNkLGdCQUFnQjtDQUNoQixlQUFlO0FBQ2hCOzs7QUFHQTtDQUNDLGtCQUFrQjtDQUNsQixPQUFPO0NBQ1AsUUFBUTtDQUNSLGdDQUFnQztBQUNqQzs7O0FBR0E7O29DQUVvQzs7Q0FFbkM7O3NDQUVxQztBQUN0QztDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsUUFBUTtDQUNSLGFBQWE7Q0FDYixjQUFjO0NBQ2QsVUFBVTtDQUNWLDJCQUEyQjtDQUMzQixvQ0FBb0M7Q0FDcEMsOEJBQThCO0NBQzlCLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gscUJBQXFCO0FBQ3RCOztBQUVBO0NBQ0MsWUFBWTtDQUNaLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLG9EQUFvRDtBQUNyRDs7Q0FFQzs7OENBRTZDOztBQUU5QztDQUNDLGFBQWE7QUFDZDs7QUFFQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGNBQWM7Q0FDZCxXQUFXO0NBQ1gsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsYUFBYTs7QUFFZDs7QUFFQTtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsV0FBVztBQUNaOztBQUVBO0NBQ0MseURBQWlEO0NBQ2pELDRCQUE0QjtDQUM1QiwwQkFBMEI7QUFDM0I7O0FBRUE7Q0FDQyx5REFBc0Q7Q0FDdEQsNEJBQTRCO0NBQzVCLDBCQUEwQjtBQUMzQjs7QUFFQTtDQUNDLGNBQWM7Q0FDZCxnQkFBZ0I7Q0FDaEIsaUJBQWlCO0NBQ2pCLHFCQUFxQjtDQUNyQixZQUFZO0NBQ1osb0JBQW9CO0NBQ3BCLHlCQUF5QjtDQUN6QixtQ0FBbUM7Q0FDbkMsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MseUNBQXlDO0FBQzFDOztBQUVBOzs2Q0FFNkM7O0FBRTdDO0NBQ0MsYUFBYTtDQUNiLHFDQUFxQztDQUNyQyxzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsV0FBVztBQUNaOztDQUVDOztxREFFb0Q7O0FBRXJEO0NBQ0MsYUFBYTtDQUNiLHFDQUFxQztDQUNyQyxzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsNkJBQTZCO0NBQzdCLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLFVBQVU7QUFDWDs7QUFFQTtDQUNDLG9EQUFvRDtBQUNyRDs7QUFFQTs7d0JBRXdCOztDQUV2Qjs7bUNBRWtDOztBQUVuQztDQUNDLGNBQWM7QUFDZjs7QUFFQTtDQUNDLGFBQWE7QUFDZDs7QUFFQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsZUFBZTtDQUNmLG1CQUFtQjtDQUNuQixjQUFjO0NBQ2QsZ0JBQWdCO0NBQ2hCLDJCQUEyQjtDQUMzQixpREFBaUQ7QUFDbEQ7O0FBRUE7Q0FDQyxxQ0FBcUM7QUFDdEM7O0FBRUE7Q0FDQyxxQ0FBcUM7QUFDdEM7O0FBRUE7Q0FDQyx1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQywyQkFBMkI7Q0FDM0Isa0JBQWtCO0NBQ2xCLGNBQWM7Q0FDZCxvQkFBb0I7Q0FDcEIsOENBQThDO0FBQy9DOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLGNBQWM7QUFDZjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxVQUFVO0NBQ1YsWUFBWTtDQUNaLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLG9EQUFvRDtBQUNyRDs7Q0FFQzs7MkNBRTBDOztBQUUzQztDQUNDLGdCQUFnQjtDQUNoQixjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsMkJBQTJCO0NBQzNCLGtCQUFrQjtDQUNsQixjQUFjO0NBQ2QsV0FBVztBQUNaOztBQUVBO0NBQ0MsV0FBVztDQUNYLFVBQVU7QUFDWDs7QUFFQTtDQUNDLGFBQWE7Q0FDYixZQUFZO0NBQ1osVUFBVTtBQUNYOztBQUVBO0NBQ0MsaUNBQWlDO0FBQ2xDOztBQUVBO0NBQ0Msa0NBQWtDO0FBQ25DOztBQUVBO0NBQ0MsY0FBYztDQUNkLG9CQUFvQjtDQUNwQixnQkFBZ0I7Q0FDaEIsdUJBQXVCO0NBQ3ZCLGNBQWM7Q0FDZCxxQkFBcUI7Q0FDckIsWUFBWTtDQUNaLG9CQUFvQjtDQUNwQix5QkFBeUI7Q0FDekIsbUNBQW1DO0NBQ25DLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLHlDQUF5QztBQUMxQzs7Q0FFQzs7d0NBRXVDOztBQUV4QztDQUNDLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixVQUFVO0NBQ1YsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0Msb0RBQW9EO0FBQ3JEOztBQUVBO0NBQ0MsV0FBVztDQUNYLFlBQVk7Q0FDWixZQUFZO0FBQ2I7O0NBRUM7O2dEQUUrQzs7QUFFaEQ7Q0FDQyxXQUFXO0NBQ1gsVUFBVTtDQUNWLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixZQUFZO0NBQ1osVUFBVTtDQUNWLFVBQVU7Q0FDVixxQ0FBcUM7Q0FDckMscUNBQXFDO0NBQ3JDLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsWUFBWTtDQUNaLFdBQVc7QUFDWjs7QUFFQTtDQUNDLDJCQUEyQjtDQUMzQixrQkFBa0I7Q0FDbEIsY0FBYztDQUNkLFdBQVc7QUFDWjs7QUFFQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGlDQUFpQztBQUNsQzs7QUFFQTtDQUNDLG1DQUFtQztBQUNwQzs7QUFFQTs7MEJBRTBCOztBQUUxQjtDQUNDLGVBQWU7Q0FDZixPQUFPO0NBQ1AsU0FBUztDQUNULFdBQVc7Q0FDWCxzQ0FBc0M7Q0FDdEMseUJBQXlCO0NBQ3pCLGtCQUFrQjtBQUNuQjs7QUFFQTs7eUJBRXlCOztBQUV6Qjs7Q0FFQzs7NkJBRTRCOztDQUU1QjtFQUNDLHlEQUErRDtDQUNoRTs7Q0FFQTs7d0NBRXVDOztDQUV2QztFQUNDOzs7K0JBRzZCO0NBQzlCOzs7Q0FHQTs7eUNBRXdDOztDQUV4QztFQUNDLG1CQUFtQjtDQUNwQjs7Q0FFQTtFQUNDLGNBQWM7Q0FDZjs7Q0FFQTtFQUNDLHlCQUF5QjtDQUMxQjs7Q0FFQTs7OENBRTZDOztDQUU3QztFQUNDLDBCQUEwQjtDQUMzQjs7QUFFRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBUYWJsZSBvZiBDb250ZW50c1xcblxcdDEuIEltcG9ydHNcXG5cXHQyLiBHbG9iYWwgU3R5bGVzXFxuXFx0XFx0Mi4xLiBHbG9iYWwgU3R5bGVzIFZhcmlhYmxlc1xcblxcdFxcdFxcdDIuMS4xLiBHbG9iYWwgU3R5bGVzIFZhcmlhYmxlcy1Db2xvclxcblxcdFxcdFxcdDIuMS4yLiBHbG9iYWwgU3R5bGVzIFZhcmlhYmxlcy1Gb250XFxuXFx0XFx0XFx0Mi4xLjMuIEdsb2JhbCBTdHlsZXMgSW1hZ2VzXFxuXFx0XFx0Mi4yLiBHbG9iYWwgU3R5bGVzIEdsb2JhbFxcblxcdDMuIHBhZ2VHcmlkQ29udGFpbmVyIFN0eWxlc1xcblxcdFxcdDMuMS4gcGFnZUdyaWRDb250YWluZXIgR2xvYmFsIFN0eWxlc1xcblxcdFxcdDMuMi4gcGFnZUdyaWRDb250YWluZXIgVGFyZ2V0IEVsZW1lbnQgU3R5bGVzXFxuXFx0NC4gU2lnbi1pbiBTdHlsZXNcXG5cXHRcXHQ0LjEuIFNpZ24taW4gR2xvYmFsIFN0eWxlc1xcblxcdFxcdDQuMi4gU2lnbi1pbiBUYXJnZXQgRWxlbWVudCBTdHlsZXNcXG5cXHQ1LiBTaWduLVVwIFN0eWxlc1xcblxcdFxcdDUuMS4gU2lnbi1VcCBHbG9iYWwgU3R5bGVzXFxuXFx0XFx0NS4yLiBTaWduLVVwIFRhcmdldCBFbGVtZW50IFN0eWxlc1xcblxcdDYuIE5hdmlnYXRpb24gU2VjdGlvbiBTdHlsZXNcXG5cXHRcXHQ2LjEuIE5hdmlnYXRpb24gU2VjdGlvbiBHbG9iYWwgU3R5bGVzXFxuXFx0XFx0Ni4yLiBOYXZpZ2F0aW9uIFNlY3Rpb24gVGFyZ2V0IEVsZW1lbnQgU3R5bGVzXFxuXFx0Ny4gTmF2aWdhdGlvbiBNZW51IFNlY3Rpb24gU3R5bGVzXFxuXFx0XFx0Ny4xLiBOYXZpZ2F0aW9uIE1lbnUgR2xvYmFsIFN0eWxlc1xcblxcdFxcdDcuMi4gTmF2aWdhdGlvbiBNZW51IFRhcmdldCBFbGVtZW50IFN0eWxlc1xcblxcdFxcdDcuMy4gTmF2aWdhdGlvbiBFZGl0IFNlY3Rpb24gR2xvYmFsIFN0eWxlc1xcblxcdFxcdDcuNC4gTmF2aWdhdGlvbiBFZGl0IFNlY3Rpb24gVGFyZ2V0IEVsZW1lbnQgU3R5bGVzXFxuXFx0OC4gTWFpbiBTZWN0aW9uIFN0eWVzXFxuXFx0XFx0OC4xLiBNYWluIFNlY3Rpb24gR2xvYmFsIFN0eWxlc1xcblxcdFxcdDguMi4gTWFpbiBTZWN0aW9uIFRhcmdldCBFbGVtZW50IFN0eWxlc1xcblxcdFxcdDguMy4gTWFpbiBFZGl0IFNlY3Rpb24gR2xvYmFsIFN0eWxlc1xcblxcdFxcdDguNC4gTWFpbiBFZGl0IFNlY3Rpb24gVGFyZ2V0IEVsZW1lbnQgU3R5bGVzXFxuXFx0Ki4gRm9vdGVyIFN0eWxlIFNlY3Rpb25cXG5cXHQqLiBNZWRpYSBRdWVyeSBTZWN0aW9uXFxuXFx0XFx0Ki4xLiBHbG9iYWwgTWVkaWEgUXVlcmllc1xcblxcdFxcdCouMi4gcGFnZUdyaWRDb250YWluZXIgTWVkaWEgUXVlcmllc1xcblxcdFxcdCouMy4gTmF2aWdhdGlvbiBTZWN0aW9uIE1lZGlhIFF1ZXJpZXNcXG5cXHRcXHQqLjQuIE5hdmlnYXRpb24gTWVudSBTZWN0aW9uIE1lZGlhIFF1ZXJpZXNcXG5cXG4qL1xcblxcbi8qXFx0PT09PT09PT09PVxcblxcdDEuIEltcG9ydHNcXG5cXHQ9PT09PT09PT09ICovXFxuXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCcpO1xcblxcbi8qXFx0PT09PT09PT09PT09PT09PVxcblxcdDIuIEdsb2JhbCBTdHlsZXNcXG5cXHQ9PT09PT09PT09PT09PT09ICovXFxuXFxuXFx0LypcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0XFx0Mi4xLiBHbG9iYWwgU3R5bGVzIFZhcmlhYmxlc1xcblxcdFxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG46cm9vdHtcXG5cXG5cXHRcXHQvKlxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdFxcdFxcdDIuMS4xLiBHbG9iYWwgU3R5bGVzIFZhcmlhYmxlcy1Db2xvclxcblxcdFxcdCBcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG5cXHQtLWNsci1wcmltYXJ5OnJnYigyNTUsMjU1LDI1NSk7XFxuXFx0LS1jbHItcHJpbWFyeS1vcGFjaXR5LWxpZ2h0OnJnYigyNTUsMjU1LDI1NSwgMC42KTtcXG5cXHQtLWNsci1wcmltYXJ5LW9wYWNpdHktbWlkOnJnYigyNTUsMjU1LDI1NSwgMC44KTtcXG5cXHQtLWNsci1wcmltYXJ5LW9wYWNpdHktZGFyazpyZ2IoMjU1LDI1NSwyNTUsIDAuOSk7XFxuXFxuXFx0LS1jbHItc2Vjb25kYXJ5OnJnYigxNCwgOSwgOSk7XFxuXFx0LS1jbHItc2Vjb25kYXJ5LW9wYWNpdHktbGlnaHQ6cmdiKDE0LCA5LCA5LCAwLjI4KTtcXG5cXHQtLWNsci1zZWNvbmRhcnktb3BhY2l0eS1taWQ6cmdiKDE0LCA5LCA5LCAwLjQpO1xcblxcdC0tY2xyLXNlY29uZGFyeS1vcGFjaXR5LWRhcms6cmdiKDE0LCA5LCA5LCAwLjUpO1xcblxcblxcdC0tY2xyLWFjY2VudDpyZ2IoMTc0LDMxLDY2KTtcXG5cXHQtLWNsci1hY2NlbnQtbGlnaHQ6cmdiKDIyNCw2MCwxMDEpO1xcblxcdFxcdFxcdFxcblxcdFxcdC8qXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHRcXHRcXHQyLjEuMi4gR2xvYmFsIFN0eWxlcyBWYXJpYWJsZXMtRm9udFxcblxcdFxcdCBcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcblxcdC0tZmYtcHJpbWFyeTonUm9ib3RvJywgc2Fucy1zZXJpZjtcXG5cXG5cXHQvKlxcdFxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdFxcdFxcdDIuMS4zLiBHbG9iYWwgU3R5bGVzIEltYWdlc1xcblxcdFxcdCBcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG5cXHQtLWltZy10cmFzaDp1cmwoJy4vaW1hZ2VzL2ljb25zOC10cmFzaC1jYW4uc3ZnJyk7XFxuXFx0LS1pbWctZWRpdDp1cmwoJy4vaW1hZ2VzL2ljb25zOC1lZGl0LnN2ZycpO1xcblxcdC0taW1nLWRvbmU6dXJsKCcuL2ltYWdlcy9pY29uczgtZG9uZS5zdmcnKTtcXG5cXHQtLWltZy1jYW5jZWw6dXJsKCcuL2ltYWdlcy9pY29uczgtY2FuY2VsLnN2ZycpO1xcbn1cXG5cXG5cXHQuZWRpdCwuZGVsZXRlLC5kb25lLC5jYW5jZWx7XFxuXFx0XFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG5cXHRcXHRiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG5cXHR9XFxuXFxuXFx0LypcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0XFx0Mi4yLiBHbG9iYWwgU3R5bGVzIEdsb2JhbFxcblxcdFxcdD09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKiBcXG5cXHRDU1MgU3R5bGluZyBSZXNldCBmcm9tXFxuXFx0aHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgXFx0djIuMCB8IDIwMTEwMTI2XFxuICAgXFx0TGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcblxcdG1pbi1oZWlnaHQ6IDEwMHZoO1xcblxcdGZvbnQtZmFtaWx5OiB2YXIoLS1mZi1wcmltYXJ5KTtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltYWdlcy9Ub0RvQXBwQmFja2dyb3VuZC1jcm9wcGVkLW1vYmlsZS5qcGcnKTtcXG5cXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcblxcdGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlOyBcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbi8qXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0My4gcGFnZUdyaWRDb250YWluZXIgU3R5bGVzXFxuXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuXFx0LypcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHRcXHQzLjEuIHBhZ2VHcmlkQ29udGFpbmVyIEdsb2JhbCBTdHlsZXNcXG5cXHRcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4jcGFnZUdyaWRDb250YWluZXJ7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpIDtcXG4gIFxcdGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXG4gIFxcdGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICBcXFwiaGVhZGVyIGhlYWRlciBoZWFkZXIgaGVhZGVyXFxcIlxcbiAgICBcXFwibWFpbiBtYWluIG1haW4gbWFpblxcXCJcXG4gICAgXFxcImZvb3RlciBmb290ZXIgZm9vdGVyIGZvb3RlclxcXCI7XFxufVxcblxcblxcdC8qXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHRcXHQzLjIuIHBhZ2VHcmlkQ29udGFpbmVyIFRhcmdldCBFbGVtZW50IFN0eWxlc1xcblxcdFxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuI25hdlNlY3Rpb257XFxuXFx0Z3JpZC1hcmVhOiBoZWFkZXI7XFxufVxcbiNuYXZNZW51U2VjdGlvbntcXG5cXHRncmlkLWFyZWE6IHNpZGViYXI7XFxufVxcbiNtYWluU2VjdGlvbntcXG5cXHRncmlkLWFyZWE6IG1haW47XFxufVxcbiNmb290ZXJTZWN0aW9ue1xcblxcdGdyaWQtYXJlYTogZm9vdGVyO1xcbn1cXG5cXG4vKlxcdD09PT09PT09PT09PT09PT09XFxuXFx0NC4gU2lnbi1pbiBTdHlsZXNcXG5cXHQ9PT09PT09PT09PT09PT09PSAqL1xcblxcblxcdC8qXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHRcXHQ0LjEuIFNpZ24taW4gR2xvYmFsIFN0eWxlc1xcblxcdFxcdD09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuZm9ybXtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNzaWduSW4tQ29udGFpbmVyLUlubmVyLCAjc2lnbkluLUNvbnRhaW5lci1PdXRlcntcXG5cXHRkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jc2lnbkluLUNvbnRhaW5lci1PdXRlcntcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jc2lnbkluLUNvbnRhaW5lci1Jbm5lcntcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuXFx0bWluLXdpZHRoOiAzNSU7XFxuXFx0bWF4LXdpZHRoOiA4MCU7XFxuXFx0bWFyZ2luOiA4LjVlbSAzZW0gMTNlbTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeS1vcGFjaXR5LW1pZCk7XFxuXFx0Ym9yZGVyLXJhZGl1czogMjNweDtcXG59XFxuXFxuI3NpZ25Jbi1Gb3JtLUNvbnRhaW5lcntcXG5cXHRtYXJnaW46MCAxZW07XFxuXFx0cGFkZGluZzogMS41ZW0gMDtcXG5cXHRtaW4td2lkdGg6IDYwJTtcXG5cXHRtYXgtd2lkdGg6IDgwJTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItc2Vjb25kYXJ5LW9wYWNpdHktbWlkKTtcXG59XFxuXFxuXFx0LypcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0XFx0NC4yLiBTaWduLWluIFRhcmdldCBFbGVtZW50IFN0eWxlc1xcblxcdFxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4jYXBwVGl0bGV7XFxuXFx0Zm9udC1zaXplOiAyZW07XFxuXFx0bWFyZ2luOiAwLjVlbTtcXG5cXHRjb2xvcjogdmFyKC0tY2xyLXNlY29uZGFyeSk7XFxufVxcblxcbmZvcm0gPiBpbnB1dCwgZm9ybSA+IGxhYmVse1xcblxcdGFsaWduLXNlbGY6IGNlbnRlcjtcXG5cXHRtaW4td2lkdGg6IDYwJTtcXG5cXHRtYXgtd2lkdGg6IDgwJTtcXG59XFxuXFxuZm9ybSA+bGFiZWx7XFxuXFx0Zm9udC1zaXplOiAxLjVlbTtcXG5cXHRjb2xvcjp2YXIoLS1jbHItcHJpbWFyeSk7XFxufVxcblxcbmlucHV0W3R5cGU9YnV0dG9uXSwgI2RlbW9CdXR0b257XFxuXFx0bWFyZ2luOiAwLjNlbTtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdGZvbnQtc2l6ZTogMS4yZW07XFxuXFx0cGFkZGluZzogMC4zZW0gM2VtO1xcblxcdGJvcmRlci1yYWRpdXM6IDFlbTtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuXFx0Y29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYWNjZW50KTtcXG5cXHR0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG5cXG5pbnB1dFt0eXBlPWJ1dHRvbl06aG92ZXIsICNkZW1vQnV0dG9uOmhvdmVye1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1hY2NlbnQtbGlnaHQpO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXXtcXG5cXHRtYXJnaW46IDAuNWVtO1xcblxcdHBhZGRpbmc6IDAuNWVtIDFlbTtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdGJhY2tncm91bmQ6IHZhcigtLWNsci1zZWNvbmRhcnktb3BhY2l0eS1kYXJrKTtcXG5cXHRib3JkZXItcmFkaXVzOiAxZW07XFxufVxcblxcbiNkZW1vQnV0dG9ue1xcblxcdHBhZGRpbmc6IDAuM2VtIDJlbTtcXG59XFxuXFxuLypcXHQ9PT09PT09PT09PT09PT09PVxcblxcdDUuIFNpZ24tVXAgU3R5bGVzXFxuXFx0PT09PT09PT09PT09PT09PT0gKi9cXG5cXG5cXG5cXHQvKlxcdD09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0XFx0NS4xLiBTaWduLVVwIEdsb2JhbCBTdHlsZXNcXG5cXHRcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbmZvcm17XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jc2lnblVwLUNvbnRhaW5lci1Jbm5lciwgI3NpZ25VcC1Db250YWluZXItT3V0ZXJ7XFxuXFx0ZGlzcGxheTogZmxleDtcXG59XFxuXFxuI3NpZ25VcC1Db250YWluZXItT3V0ZXJ7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI3NpZ25VcC1Db250YWluZXItSW5uZXJ7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcblxcdG1pbi13aWR0aDogMzUlO1xcblxcdG1heC13aWR0aDogODAlO1xcblxcdG1hcmdpbjogOC41ZW0gM2VtIDEzZW07XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXByaW1hcnktb3BhY2l0eS1taWQpO1xcblxcdGJvcmRlci1yYWRpdXM6IDIzcHg7XFxufVxcblxcbiNzaWduVXAtRm9ybS1Db250YWluZXJ7XFxuXFx0bWFyZ2luOjAgMWVtO1xcblxcdHBhZGRpbmc6IDEuNWVtIDA7XFxuXFx0bWluLXdpZHRoOiA2MCU7XFxuXFx0bWF4LXdpZHRoOiA4MCU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXNlY29uZGFyeS1vcGFjaXR5LW1pZCk7XFxufVxcblxcdFxcdFxcblxcdC8qXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdFxcdDUuMi4gU2lnbi1VcCBUYXJnZXQgRWxlbWVudCBTdHlsZXNcXG5cXHRcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFx0XFx0XFxuI2FwcFRpdGxle1xcblxcdGZvbnQtc2l6ZTogMmVtO1xcblxcdGNvbG9yOiB2YXIoLS1jbHItc2Vjb25kYXJ5KTtcXG5cXHRcXG59XFxuXFxuZm9ybSA+IGlucHV0LCBmb3JtID4gbGFiZWx7XFxuXFx0YWxpZ24tc2VsZjogY2VudGVyO1xcblxcdG1pbi13aWR0aDogNjAlO1xcblxcdG1heC13aWR0aDogODAlO1xcbn1cXG5cXG5mb3JtID5sYWJlbHtcXG5cXHRmb250LXNpemU6IDEuNWVtO1xcblxcdGNvbG9yOnZhcigtLWNsci1wcmltYXJ5KTtcXG59XFxuXFxuaW5wdXRbdHlwZT1idXR0b25dLCAjZGVtb0J1dHRvbntcXG5cXHRtYXJnaW46IDAuM2VtO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0Zm9udC1zaXplOiAxLjJlbTtcXG5cXHRwYWRkaW5nOiAwLjNlbSAzZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogMWVtO1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRjb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1hY2NlbnQpO1xcblxcdHRyYW5zaXRpb246IDAuNXM7XFxufVxcblxcbmlucHV0W3R5cGU9YnV0dG9uXTpob3ZlciwgI2RlbW9CdXR0b246aG92ZXJ7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWFjY2VudC1saWdodCk7XFxufVxcblxcbmlucHV0W3R5cGU9dGV4dF17XFxuXFx0bWFyZ2luOiAwLjVlbTtcXG5cXHRwYWRkaW5nOiAwLjVlbSAxZW07XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS1jbHItc2Vjb25kYXJ5LW9wYWNpdHktZGFyayk7XFxuXFx0Ym9yZGVyLXJhZGl1czogMWVtO1xcbn1cXG5cXG4jZGVtb0J1dHRvbntcXG5cXHRwYWRkaW5nOiAwLjNlbSAyZW07XFxufVxcblxcbi8qXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdDYuIE5hdmlnYXRpb24gU2VjdGlvbiBTdHlsZXNcXG5cXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFx0XFxuXFx0LypcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0XFx0Ni4xLiBOYXZpZ2F0aW9uIFNlY3Rpb24gR2xvYmFsIFN0eWxlc1xcblxcdFxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4jbmF2U2VjdGlvbntcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG5cXHRmb250LXNpemU6IDJlbTtcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0dG9wOiAwO1xcblxcdHdpZHRoOiAxMDB2dztcXG5cXHRjb2xvcjogdmFyKC0tY2xyLXNlY29uZGFyeSk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXByaW1hcnktb3BhY2l0eS1saWdodCk7XFxufVxcblxcblxcdC8qXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0XFx0Ni4yLiBOYXZpZ2F0aW9uIFNlY3Rpb24gVGFyZ2V0IEVsZW1lbnQgU3R5bGVzXFxuXFx0XFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuI25hdlNlY3Rpb24gPmgxe1xcblxcdG1hcmdpbi1sZWZ0OiAwLjJlbTtcXG5cXHRmb250LXNpemU6IDJlbTtcXG5cXHR0cmFuc2l0aW9uOiAwLjVzO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuI25hdlNlY3Rpb24gPmgye1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6NTAlO1xcblxcdGxlZnQ6NTAlO1xcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5cXG5cXG4vKlxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdDcuIE5hdmlnYXRpb24gTWVudSBTZWN0aW9uIFN0eWxlc1xcblxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcblxcdC8qXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdFxcdDcuMS4gTmF2aWdhdGlvbiBNZW51IEdsb2JhbCBTdHlsZXNcXG5cXHRcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuI25hdk1lbnVTZWN0aW9uPip7XFxuXFx0bWFyZ2luLXRvcDogMWVtO1xcbn1cXG5cXG4jbmF2TWVudVNlY3Rpb257XFxuXFx0cG9zaXRpb246IGZpeGVkO1xcblxcdHRvcDogMmVtO1xcblxcdGhlaWdodDogMTAwdmg7XFxuXFx0Zm9udC1zaXplOiAyZW07ICBcXG5cXHR3aWR0aDogMjUlO1xcblxcdGNvbG9yOiB2YXIoLS1jbHItc2Vjb25kYXJ5KTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIDApO1xcblxcdHRyYW5zaXRpb246IDAuNXM7XFxufVxcblxcbiNkYXRlU2VsZWN0b3J7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jcHJvamVjdFNlbGVjdG9ye1xcblxcdGZvbnQtc2l6ZTogMC41ZW07XFxufVxcblxcbiNwcm9qZWN0U2VsZWN0b3I+dWx7XFxuXFx0bWFyZ2luOiAxZW07XFxuXFx0bGlzdC1zdHlsZS10eXBlOiBkaXNjO1xcbn1cXG5cXG4jcHJvamVjdFNlbGVjdG9yPnVsPnNlY3Rpb24+KntcXG5cXHRmbGV4LWdyb3c6IDE7XFxuXFx0dHJhbnNpdGlvbjogMC41cztcXG59XFxuXFxuI3Byb2plY3RTZWxlY3Rvcj51bD5zZWN0aW9uPio6aG92ZXJ7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXNlY29uZGFyeS1vcGFjaXR5LWxpZ2h0KTtcXG59XFxuXFxuXFx0LypcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHRcXHQ3LjIuIE5hdmlnYXRpb24gTWVudSBUYXJnZXQgRWxlbWVudCBTdHlsZXNcXG5cXHRcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4jZGVmYXVsdFNlbGVjdG9yID4gaDJ7XFxuXFx0bWFyZ2luOiAwLjVlbTtcXG59XFxuXFxuI2RhdGVTZWxlY3RvciA+IHB7XFxuXFx0Zm9udC1zaXplOiAwLjc1ZW07ICBcXG59XFxuXFxuI2RhdGVTZWxlY3Rvcj5pbnB1dHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG5cXHRtYXJnaW46IDFlbTtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNwcm9qZWN0U2VsZWN0b3I+aDJ7XFxuXFx0Zm9udC1zaXplOiAxLjc1ZW07XFxufVxcblxcbiNwcm9qZWN0U2VsZWN0b3I+dWw+bGl7XFxuXFx0bWFyZ2luOiAwLjVlbTtcXG5cXG59XFxuXFxuI3Byb2plY3RTZWxlY3Rvcj51bD5zZWN0aW9ue1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXHRoZWlnaHQ6IDJlbTtcXG59XFxuXFxuI3Byb2plY3RTZWxlY3Rvcj51bD5zZWN0aW9uPi5lZGl0e1xcblxcdGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWFnZXMvaWNvbnM4LWVkaXQuc3ZnJyk7XFxuXFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG59XFxuXFxuI3Byb2plY3RTZWxlY3Rvcj51bD5zZWN0aW9uPi5kZWxldGV7XFxuXFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltYWdlcy9pY29uczgtdHJhc2gtY2FuLnN2ZycpO1xcblxcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuXFx0YmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxufVxcblxcbiNwcm9qZWN0U2VsZWN0b3I+dWw+LmFkZFByb2plY3R7XFxuXFx0cGFkZGluZzogMC42ZW07XFxuXFx0Zm9udC1zaXplOiAxLjJlbTtcXG5cXHRtYXJnaW4tdG9wOiAwLjVlbTtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcblxcdGNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWFjY2VudCk7XFxuXFx0dHJhbnNpdGlvbjogMC41cztcXG59XFxuXFxuI3Byb2plY3RTZWxlY3Rvcj51bD4uYWRkUHJvamVjdDpob3ZlcntcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYWNjZW50LWxpZ2h0KTtcXG59XFxuXFxuLypcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHQ3LjMuIE5hdmlnYXRpb24gRWRpdCBTZWN0aW9uIEdsb2JhbCBTdHlsZXNcXG5cXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4jZWRpdFByb2plY3RDb250YWluZXJ7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRib3JkZXI6IDAuMmVtIGluc2V0IHZhcigtLWNsci1hY2NlbnQpO1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNlZGl0UHJvamVjdENvbnRhaW5lcj4qe1xcblxcdGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuI2VkaXRQcm9qZWN0Q29udGFpbmVyPi5kb25lLWNhbmNlbFNlY3Rpb24+KntcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDJlbTtcXG59XFxuXFxuXFx0LypcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0Ny40LiBOYXZpZ2F0aW9uIEVkaXQgU2VjdGlvbiBUYXJnZXQgRWxlbWVudCBTdHlsZXNcXG5cXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiNlZGl0UHJvamVjdENvbnRhaW5lcntcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGJvcmRlcjogMC4yZW0gaW5zZXQgdmFyKC0tY2xyLWFjY2VudCk7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2VkaXRQcm9qZWN0Q29udGFpbmVyPi5kb25lLWNhbmNlbFNlY3Rpb257XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG5cXHR0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG5cXG4jZWRpdFByb2plY3RDb250YWluZXI+LmVkaXRUYXNrU2VsZWN0PmlucHV0e1xcblxcdHdpZHRoOiA4MCU7XFxufVxcblxcbiNlZGl0UHJvamVjdENvbnRhaW5lcj4uZG9uZS1jYW5jZWxTZWN0aW9uPio6aG92ZXJ7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXNlY29uZGFyeS1vcGFjaXR5LWxpZ2h0KTtcXG59XFxuXFxuLypcXHQ9PT09PT09PT09PT09PT09PT09PT1cXG5cXHQ4LiBNYWluIFNlY3Rpb24gU3R5ZXNcXG5cXHQ9PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG5cXHQvKlxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHRcXHQ4LjEuIE1haW4gU2VjdGlvbiBHbG9iYWwgU3R5bGVzXFxuXFx0XFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiNtYWluU2VjdGlvbj4qe1xcblxcdG1pbi13aWR0aDogODAlO1xcbn1cXG5cXG4jbWFpblNlY3Rpb24sIC5pdGVtcywgLnRhc2tze1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbiNtYWluU2VjdGlvbntcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0bWFyZ2luLXRvcDogM2VtO1xcblxcdHBhZGRpbmctYm90dG9tOiAyZW07XFxuXFx0Z2FwOiAwLjVlbSAwZW07XFxuXFx0Zm9udC1zaXplOiAxLjVlbTtcXG5cXHRjb2xvcjogdmFyKC0tY2xyLXNlY29uZGFyeSk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXByaW1hcnktb3BhY2l0eS1kYXJrKTtcXG59XFxuXFxuLml0ZW1ze1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxufVxcblxcbi50YXNrc3tcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbn1cXG5cXG4uaXRlbXMgPiAqe1xcblxcdGdyaWQtY29sdW1uOiAxIC8gc3BhbiAzO1xcbn1cXG5cXG4uaXRlbXN7XFxuXFx0Y29sb3I6IHZhcigtLWNsci1zZWNvbmRhcnkpO1xcblxcdHBsYWNlLXNlbGY6IGNlbnRlcjtcXG5cXHRnYXA6IDAuNWVtIDBlbTtcXG5cXHRtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS1jbHItc2Vjb25kYXJ5LW9wYWNpdHktbGlnaHQpO1xcbn1cXG5cXG4udGFza3M+KntcXG5cXHRwbGFjZS1zZWxmOiBjZW50ZXI7XFxuXFx0cGFkZGluZzogMC4yZW07XFxufVxcblxcbi50YXNrcz5zZWN0aW9uPip7XFxuXFx0aGVpZ2h0OiAyZW07XFxuXFx0d2lkdGg6IDJlbTtcXG5cXHRmbGV4LWdyb3c6IDE7XFxuXFx0dHJhbnNpdGlvbjogMC41cztcXG59XFxuXFxuLnRhc2tzPnNlY3Rpb24+Kjpob3ZlcntcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItc2Vjb25kYXJ5LW9wYWNpdHktbGlnaHQpO1xcbn1cXG5cXG5cXHQvKlxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdFxcdDguMi4gTWFpbiBTZWN0aW9uIFRhcmdldCBFbGVtZW50IFN0eWxlc1xcblxcdFxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiNtYWluU2VjdGlvbiA+IGgye1xcblxcdGZvbnQtc2l6ZTogMS41ZW07XFxuXFx0cGFkZGluZzogMC41ZW07XFxufVxcblxcbi5pdGVtcz5oMntcXG5cXHRmb250LXNpemU6IDEuNWVtO1xcblxcdHBhZGRpbmctdG9wOiAwLjJlbTtcXG59XFxuXFxuLnRhc2tzPmxhYmVse1xcblxcdGNvbG9yOiB2YXIoLS1jbHItc2Vjb25kYXJ5KTtcXG5cXHRwbGFjZS1zZWxmOiBjZW50ZXI7XFxuXFx0Zm9udC1zaXplOiAxZW07XFxuXFx0d2lkdGg6IDEwMCU7XFxufVxcblxcbi50YXNrcz5pbnB1dHtcXG5cXHRoZWlnaHQ6IDJlbTtcXG5cXHR3aWR0aDogMmVtO1xcbn1cXG5cXG4udGFza3M+c2VjdGlvbntcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHR3aWR0aDoxMDAlO1xcbn1cXG5cXG4uZWRpdHtcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1pbWctZWRpdCk7XFxufVxcblxcbi5kZWxldGV7XFxuXFx0YmFja2dyb3VuZC1pbWFnZTogdmFyKC0taW1nLXRyYXNoKTtcXG59XFxuXFxuLmFkZFRhc2t7XFxuXFx0cGFkZGluZzogMC42ZW07XFxuXFx0bWFyZ2luLWJvdHRvbTogMC41ZW07XFxuXFx0Zm9udC1zaXplOiAwLjhlbTtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRncmlkLWNvbHVtbjogMjtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcblxcdGNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWFjY2VudCk7XFxuXFx0dHJhbnNpdGlvbjogMC41cztcXG59XFxuXFxuLmFkZFRhc2s6aG92ZXJ7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWFjY2VudC1saWdodCk7XFxufVxcblxcblxcdC8qXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0XFx0OC4zLiBNYWluIEVkaXQgU2VjdGlvbiBHbG9iYWwgU3R5bGVzXFxuXFx0XFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuI2VkaXRUYXNrPip7XFxuXFx0cGxhY2Utc2VsZjogY2VudGVyO1xcbn1cXG5cXG4jZWRpdFRhc2s+c2VjdGlvbj4qe1xcblxcdGhlaWdodDogYXV0bztcXG5cXHR3aWR0aDogOTAlO1xcblxcdHRyYW5zaXRpb246IDAuNXM7XFxufVxcblxcbiNlZGl0VGFzaz4uZG9uZS1jYW5jZWxTZWN0aW9uPio6aG92ZXJ7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXNlY29uZGFyeS1vcGFjaXR5LWxpZ2h0KTtcXG59XFxuXFxuI2VkaXRUYXNrPi5kb25lLWNhbmNlbFNlY3Rpb24+KntcXG5cXHR3aWR0aDogYXV0bztcXG5cXHRoZWlnaHQ6IGF1dG87XFxuXFx0ZmxleC1ncm93OiAxO1xcbn1cXG5cXG5cXHQvKlxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0XFx0OC40LiBNYWluIEVkaXQgU2VjdGlvbiBUYXJnZXQgRWxlbWVudCBTdHlsZXNcXG5cXHRcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiNlZGl0VGFza0NvbnRhaW5lcntcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGdyaWQtY29sdW1uOiBzcGFuIDQ7XFxufVxcblxcbiNlZGl0VGFza3tcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdG1hcmdpbjogYXV0bztcXG5cXHR3aWR0aDogODAlO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwLjJlbSBpbnNldCB2YXIoLS1jbHItYWNjZW50KTtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcblxcdGNvbHVtbi1nYXA6IDAuNWVtO1xcbn1cXG5cXG4jZWRpdFRhc2s+c2VjdGlvbntcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jZWRpdFRhc2s+c2VjdGlvbj5sYWJlbHtcXG5cXHRjb2xvcjogdmFyKC0tY2xyLXNlY29uZGFyeSk7XFxuXFx0cGxhY2Utc2VsZjogY2VudGVyO1xcblxcdGZvbnQtc2l6ZTogMWVtO1xcblxcdHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jZWRpdFRhc2s+c2VjdGlvbj50ZXh0YXJlYXtcXG5cXHRyZXNpemU6IHZlcnRpY2FsO1xcbn1cXG5cXG4jZWRpdFRhc2s+LmRvbmUtY2FuY2VsU2VjdGlvbntcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4uZG9uZXtcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1pbWctZG9uZSk7XFxufVxcblxcbi5jYW5jZWx7XFxuXFx0YmFja2dyb3VuZC1pbWFnZTogdmFyKC0taW1nLWNhbmNlbCk7XFxufVxcblxcbi8qXFx0PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHQqLiBGb290ZXIgU3R5bGUgU2VjdGlvblxcblxcdD09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuI2Zvb3RlclNlY3Rpb257XFxuXFx0cG9zaXRpb246IGZpeGVkO1xcblxcdGxlZnQ6IDA7XFxuXFx0Ym90dG9tOiAwO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1zZWNvbmRhcnkpO1xcblxcdGNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4vKlxcdD09PT09PT09PT09PT09PT09PT09PT1cXG5cXHQqLiBNZWRpYSBRdWVyeSBTZWN0aW9uXFxuXFx0PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzUwcHgpIHtcXG5cXG5cXHQvKlxcdD09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHRcXHQqLjEuIEdsb2JhbCBNZWRpYSBRdWVyaWVzXFxuXFx0XFx0PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcblxcdGJvZHkge1xcblxcdFxcdGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWFnZXMvVG9Eb0FwcEJhY2tncm91bmQtY3JvcHBlZC5qcGcnKTtcXG5cXHR9XFxuXFxuXFx0LypcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHRcXHQqLjIuIHBhZ2VHcmlkQ29udGFpbmVyIE1lZGlhIFF1ZXJpZXNcXG5cXHRcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG5cXHQjcGFnZUdyaWRDb250YWluZXJ7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuXFx0XFx0XFxcImhlYWRlciBoZWFkZXIgaGVhZGVyIGhlYWRlclxcXCJcXG5cXHRcXHRcXFwic2lkZWJhciBtYWluIG1haW4gbWFpblxcXCJcXG5cXHRcXHRcXFwiZm9vdGVyIGZvb3RlciBmb290ZXIgZm9vdGVyXFxcIjtcXG5cXHR9XFxuXFxuXFxuXFx0LypcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0XFx0Ki4zLiBOYXZpZ2F0aW9uIFNlY3Rpb24gTWVkaWEgUXVlcmllc1xcblxcdFxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG5cXHQjbWFpblNlY3Rpb257XFxuXFx0XFx0bWFyZ2luOiAzZW0gMWVtIDBlbTtcXG5cXHR9XFxuXFxuXFx0I21haW5TZWN0aW9uPip7XFxuXFx0XFx0bWluLXdpZHRoOiA3NSU7XFxuXFx0fVxcblxcblxcdCNuYXZTZWN0aW9uPmgxe1xcblxcdFxcdHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XFxuXFx0fVxcblxcblxcdC8qXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0XFx0Ki40LiBOYXZpZ2F0aW9uIE1lbnUgU2VjdGlvbiBNZWRpYSBRdWVyaWVzXFxuXFx0XFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuXFx0I25hdk1lbnVTZWN0aW9ue1xcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xcblxcdH1cXG5cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGdsb2JhbGpzIH0gZnJvbSAnLi4vZ2xvYmFsJztcblxuXG5leHBvcnQgY29uc3QgbmF2U2VjdGlvbkNyZWF0aW9uID0gKCgpID0+IHtcblxuICAgIC8vIFNpZ24gaW4gT2JqZWN0IExpc3RcbiAgICBjb25zdCBuYXZPYmplY3RMaXN0ID0ge1xuXG5cbiAgICAgICAgbmF2U2VjdGlvbjoge1xuICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgIGlkOiAnbmF2U2VjdGlvbicsXG4gICAgICAgIH0sXG5cbiAgICAgICAgbmF2U2VjdGlvbk9wdGlvbnM6IHtcbiAgICAgICAgICAgIGl0ZW0xOiB7XG4gICAgICAgICAgICAgICAgdGFnOiAnaDEnLFxuICAgICAgICAgICAgICAgIGh0bWxTdHJpbmc6ICcrJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpdGVtMjoge1xuICAgICAgICAgICAgICAgIHRhZzogJ2gyJyxcbiAgICAgICAgICAgICAgICBodG1sU3RyaW5nOiAnQ2hlY2tpc3QnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICBuYXZNZW51U2VjdGlvbjoge1xuICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgIGlkOiAnbmF2TWVudVNlY3Rpb24nLFxuICAgICAgICB9LFxuXG4gICAgICAgIGRlZmF1bHRTZWxlY3Rvcjoge1xuICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgIGlkOiAnZGVmYXVsdFNlbGVjdG9yJyxcbiAgICAgICAgfSxcblxuICAgICAgICBob21lVGl0bGU6IHtcbiAgICAgICAgICAgIHRhZzogJ2gyJyxcbiAgICAgICAgICAgIGh0bWxTdHJpbmc6ICdIb21lJyxcbiAgICAgICAgfSxcblxuICAgICAgICBwcm9qZWN0U2VsZWN0b3I6IHtcbiAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICBpZDogJ3Byb2plY3RTZWxlY3RvcicsXG4gICAgICAgIH0sXG5cbiAgICAgICAgcHJvamVjdHNUaXRsZToge1xuICAgICAgICAgICAgdGFnOiAnaDInLFxuICAgICAgICAgICAgaHRtbFN0cmluZzogJ1Byb2plY3RzJyxcbiAgICAgICAgfSxcblxuICAgICAgICBwcm9qZWN0TGlzdDoge1xuICAgICAgICAgICAgdGFnOiAndWwnLFxuICAgICAgICB9LFxuXG4gICAgICAgIHByb2plY3RJbmZvOiB7XG4gICAgICAgICAgICBpdGVtOiB7XG4gICAgICAgICAgICAgICAgdGFnOiAnbGknLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICBzZWN0aW9uOiB7XG4gICAgICAgICAgICB0YWc6ICdzZWN0aW9uJyxcbiAgICAgICAgfSxcblxuICAgICAgICBlZGl0OiB7XG4gICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgaWQ6ICdlZGl0UHJvaicsXG4gICAgICAgICAgICBjbGFzc0lkOiAnZWRpdCcsXG4gICAgICAgIH0sXG5cbiAgICAgICAgZGVsZXRlOiB7XG4gICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgaWQ6ICdkZWxldGVQcm9qJyxcbiAgICAgICAgICAgIGNsYXNzSWQ6ICdkZWxldGUnLFxuICAgICAgICB9LFxuXG4gICAgICAgIGJ1dHRvbjoge1xuICAgICAgICAgICAgdGFnOiAnYnV0dG9uJyxcbiAgICAgICAgICAgIGNsYXNzSWQ6ICdhZGRQcm9qZWN0JyxcbiAgICAgICAgICAgIGh0bWxTdHJpbmc6ICdBZGQgUHJvamVjdCcsXG4gICAgICAgIH0sXG5cbiAgICB9O1xuXG4gICAgLy8gRnVjdGlvbiBMaXN0XG5cbiAgICAvLyBSZXR1cm4gTmF2IFNlY3Rpb24gQ29udGVudHMgYXMgbGlzdFxuICAgIGNvbnN0IE5hdlNlY3Rpb25Db250ZW50TGlzdCA9ICgpID0+IHtcbiAgICAgICAgbGV0IGNvbnRlbnRMaXN0ID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBPYmplY3Qua2V5cyhuYXZPYmplY3RMaXN0Lm5hdlNlY3Rpb25PcHRpb25zKS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSBnbG9iYWxqcy5uZXdFbGVtZW50KG5hdk9iamVjdExpc3QubmF2U2VjdGlvbk9wdGlvbnNbT2JqZWN0LmtleXMobmF2T2JqZWN0TGlzdC5uYXZTZWN0aW9uT3B0aW9ucylbaV1dKTtcbiAgICAgICAgICAgIGNvbnRlbnRMaXN0LnB1c2goZWxlbWVudCk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBjb250ZW50TGlzdDtcbiAgICB9O1xuXG4gICAgLy8gUmV0dXJucyBOYXYgRWxlbWVudCBTZWN0aW9uXG4gICAgY29uc3QgbmF2RWxlbWVudFNlY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIGxldCBjb250ZW50TGlzdCA9IE5hdlNlY3Rpb25Db250ZW50TGlzdCgpLFxuICAgICAgICAgICAgZWxlbWVudCA9IGdsb2JhbGpzLm5ld0VsZW1lbnQobmF2T2JqZWN0TGlzdC5uYXZTZWN0aW9uKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRlbnRMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNvbnRlbnRMaXN0W2ldKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9O1xuXG4gICAgLy8gUmV0dXJucyBkZWZhdWx0U2VsZWN0b3IgU2VjdGlvblxuICAgIGNvbnN0IGRlZmF1bHRTZWxlY3RvclNlY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIGxldCBlbGVtZW50ID0gZ2xvYmFsanMubmV3RWxlbWVudChuYXZPYmplY3RMaXN0LmRlZmF1bHRTZWxlY3RvciksXG4gICAgICAgICAgICBpdGVtID0gZ2xvYmFsanMubmV3RWxlbWVudChuYXZPYmplY3RMaXN0LmhvbWVUaXRsZSk7XG5cbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChpdGVtKTtcblxuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9O1xuXG4gICAgLy8gRWRpdC9kZWxldGUgU2VjdGlvblxuICAgIGNvbnN0IGVkaXRfRGVsZXRlU2VjdGlvbiA9ICgpID0+IHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBnbG9iYWxqcy5uZXdFbGVtZW50KG5hdk9iamVjdExpc3Quc2VjdGlvbiksXG4gICAgICAgICAgICBlZGl0ID0gZ2xvYmFsanMubmV3RWxlbWVudChuYXZPYmplY3RMaXN0LmVkaXQpLFxuICAgICAgICAgICAgZGVMZXRlID0gZ2xvYmFsanMubmV3RWxlbWVudChuYXZPYmplY3RMaXN0LmRlbGV0ZSk7XG5cbiAgICAgICAgZWxlbWVudC5hcHBlbmQoZWRpdCwgZGVMZXRlKTtcblxuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9O1xuXG4gICAgLy8gUmV0dXJucyBQcm9qZWN0IExpc3QgU2VjdGlvbiBlbGVtZW50c1xuICAgIGNvbnN0IHByb2plY3RVTFNlY3Rpb24gPSAobGlzdCkgPT4ge1xuICAgICAgICBsZXQgY29udGFpbmVyVUxFbGVtZW50ID0gZ2xvYmFsanMubmV3RWxlbWVudChuYXZPYmplY3RMaXN0LnByb2plY3RMaXN0KSxcbiAgICAgICAgICAgIGJ1dHRvbiA9IGdsb2JhbGpzLm5ld0VsZW1lbnQobmF2T2JqZWN0TGlzdC5idXR0b24pO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5wcm9qZWN0VGl0bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IGdsb2JhbGpzLm5ld0VsZW1lbnQobmF2T2JqZWN0TGlzdC5wcm9qZWN0SW5mby5pdGVtKSxcbiAgICAgICAgICAgICAgICBlZGl0X2RlbGV0ZSA9IGVkaXRfRGVsZXRlU2VjdGlvbigpO1xuICAgICAgICAgICAgaXRlbS5pbm5lckhUTUwgPSBsaXN0LnByb2plY3RUaXRsZXNbaV07XG4gICAgICAgICAgICBjb250YWluZXJVTEVsZW1lbnQuYXBwZW5kKGl0ZW0sIGVkaXRfZGVsZXRlKVxuXG4gICAgICAgIH07XG5cbiAgICAgICAgY29udGFpbmVyVUxFbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbilcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lclVMRWxlbWVudDtcbiAgICB9O1xuXG4gICAgLy8gUmV0dXJucyBwcm9qZWN0U2VsZWN0b3IgU2VjdGlvblxuICAgIGNvbnN0IHByb2plY3RTZWxlY3RvclNlY3Rpb24gPSAoaXRlbSkgPT4ge1xuICAgICAgICBsZXQgZWxlbWVudCA9IGdsb2JhbGpzLm5ld0VsZW1lbnQobmF2T2JqZWN0TGlzdC5wcm9qZWN0U2VsZWN0b3IpLFxuICAgICAgICAgICAgcHJvamVjdFRpdGxlID0gZ2xvYmFsanMubmV3RWxlbWVudChuYXZPYmplY3RMaXN0LnByb2plY3RzVGl0bGUpLFxuICAgICAgICAgICAgcHJvamVjdENvbnRlbnRMaXN0ID0gcHJvamVjdFVMU2VjdGlvbihpdGVtKTtcblxuICAgICAgICBlbGVtZW50LmFwcGVuZChwcm9qZWN0VGl0bGUsIHByb2plY3RDb250ZW50TGlzdCk7XG5cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfTtcblxuXG4gICAgLy8gUmV0dXJucyBuYXZNZW51U2VjdGlvbiBTZWN0aW9uXG4gICAgY29uc3QgbmF2TWVudVNlY3Rpb25TZWN0aW9uID0gKGl0ZW0pID0+IHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBnbG9iYWxqcy5uZXdFbGVtZW50KG5hdk9iamVjdExpc3QubmF2TWVudVNlY3Rpb24pLFxuICAgICAgICAgICAgZGVmYXVsdFNlY3Rpb24gPSBkZWZhdWx0U2VsZWN0b3JTZWN0aW9uKCksXG4gICAgICAgICAgICBwcm9qZWN0U2VjdGlvbiA9IHByb2plY3RTZWxlY3RvclNlY3Rpb24oaXRlbSk7XG5cbiAgICAgICAgZWxlbWVudC5hcHBlbmQoZGVmYXVsdFNlY3Rpb24sIHByb2plY3RTZWN0aW9uKTtcblxuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9O1xuXG5cblxuICAgIC8vIFNpZ24gSW4gc2VjdGlvbiBDcmVhdGlvblxuICAgIGNvbnN0IGNyZWF0ZVNlY3Rpb24gPSAoaW5mbykgPT4ge1xuICAgICAgICBsZXQgZWxlbWVudCA9IGdsb2JhbGpzLnBhZ2VHcmlkQ29ubnRhaW5lcigpO1xuICAgICAgICBlbGVtZW50LmFwcGVuZChuYXZFbGVtZW50U2VjdGlvbigpLG5hdk1lbnVTZWN0aW9uU2VjdGlvbihpbmZvKSlcblxuICAgICAgICBnbG9iYWxqcy5yZW5kZXIuYm9keUFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIH07XG5cbiAgICByZXR1cm4geyBjcmVhdGVTZWN0aW9uOiBjcmVhdGVTZWN0aW9uIH07XG59KSgpOyIsImV4cG9ydCBjb25zdCBnbG9iYWxqcyA9ICgoKSA9PiB7XG4gICAgLy8gQ2FjaGUgRG9tXG4gICAgY29uc3QgY2FjaGVEb20gPSAoKCkgPT4ge1xuICAgICAgICBsZXQgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylcbiAgICAgICAgcmV0dXJuIHsgYm9keTogYm9keX07XG4gICAgfSkoKTtcblxuXG4gICAgLy8gRnVuY3Rpb24gTGlzdFxuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSAoaXRlbSkgPT4ge1xuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXRlbS50YWcpO1xuICAgICAgICBpZiAoaXRlbS5odG1sU3RyaW5nKSB7IGVsZW1lbnQuaW5uZXJIVE1MID0gaXRlbS5odG1sU3RyaW5nOyB9O1xuICAgICAgICBpZiAoaXRlbS5jbGFzc0lkKSB7IGVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsIGl0ZW0uY2xhc3NJZCl9O1xuICAgICAgICBpZiAoaXRlbS5pZCkgeyBlbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBpdGVtLmlkKX07XG4gICAgICAgIGlmIChpdGVtLmZvcikgeyBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZm9yJywgaXRlbS5mb3IpfTtcbiAgICAgICAgaWYgKGl0ZW0udHlwZSkgeyBlbGVtZW50LnNldEF0dHJpYnV0ZSgndHlwZScsIGl0ZW0udHlwZSl9O1xuICAgICAgICBpZiAoaXRlbS5uYW1lKSB7IGVsZW1lbnQuc2V0QXR0cmlidXRlKCduYW1lJywgaXRlbS5uYW1lKX07XG4gICAgICAgIGlmIChpdGVtLnZhbHVlKSB7IGVsZW1lbnQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGl0ZW0udmFsdWUpfTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfTtcblxuICAgIGNvbnN0IHBhZ2VHcmlkQ29ubnRhaW5lciA9ICgpID0+IHtcbiAgICAgICAgbGV0IHBhZ2VHcmlkQ29udGFpbmVyID0ge1xuICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgIGlkOiAncGFnZUdyaWRDb250YWluZXInLFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGdsb2JhbGpzLm5ld0VsZW1lbnQocGFnZUdyaWRDb250YWluZXIpXG4gICAgfVxuXG4gICAgLy8gUmVuZGVyIHRvIERPTVxuICAgIGNvbnN0IHJlbmRlciA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGJvZHlBcHBlbmRDaGlsZCA9IChlbGVtZW50KSA9PntcbiAgICAgICAgICAgIGNhY2hlRG9tLmJvZHlbMF0uYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgcmVtb3ZlUHJldiA9ICgpID0+IHtcbiAgICAgICAgICAgIGNhY2hlRG9tLmJvZHlbMF0ubGFzdEVsZW1lbnRDaGlsZC5yZW1vdmUoKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCByZW1vdmVFbGVtZW50ID0gKGVsZW1lbnQpID0+e1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4ge2JvZHlBcHBlbmRDaGlsZDogYm9keUFwcGVuZENoaWxkLCByZW1vdmVQcmV2OnJlbW92ZVByZXYsIHJlbW92ZUVsZW1lbnQ6cmVtb3ZlRWxlbWVudH07XG4gICAgfSkoKTtcblxuXG4gICAgcmV0dXJuIHtuZXdFbGVtZW50Om5ld0VsZW1lbnQsIHBhZ2VHcmlkQ29ubnRhaW5lcjpwYWdlR3JpZENvbm50YWluZXIgLHJlbmRlcjpyZW5kZXJ9XG5cbn0pKCkiLCJpbXBvcnQgeyBnbG9iYWxqcyB9IGZyb20gJy4uL2dsb2JhbCc7XG5cblxuZXhwb3J0IGNvbnN0IHNpZ25JblNlY3Rpb25DcmVhdGlvbiA9ICgoKSA9PiB7XG5cbiAgICAvL1NpZ24gaW4gT2JqZWN0IExpc3RcbiAgICBjb25zdCBTaWduSW5PYmplY3RMaXN0ID0ge1xuXG4gICAgICAgIHNpZ25JbkNvbnRhaW5lck91dGVyOiB7XG4gICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgaWQ6ICdzaWduSW4tQ29udGFpbmVyLU91dGVyJyxcbiAgICAgICAgfSxcblxuICAgICAgICBzaWduSW5Db250YWluZXJJbm5lcjoge1xuICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgIGlkOiAnc2lnbkluLUNvbnRhaW5lci1Jbm5lcicsXG4gICAgICAgIH0sXG5cbiAgICAgICAgYXBwVGl0bGU6IHtcbiAgICAgICAgICAgIHRhZzogJ2gyJyxcbiAgICAgICAgICAgIGlkOiAnYXBwVGl0bGUnLFxuICAgICAgICAgICAgaHRtbFN0cmluZzogJ1dlbGNvbWUgdG8gQ2hlY2tpc3QnLFxuICAgICAgICB9LFxuXG4gICAgICAgIHNpZ25JbkZvcm1Db250YWluZXI6IHtcbiAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICBpZDogJ3NpZ25Jbi1Gb3JtLUNvbnRhaW5lcicsXG4gICAgICAgIH0sXG5cbiAgICAgICAgc2lnbmluRm9ybToge1xuICAgICAgICAgICAgdGFnOiAnZm9ybScsXG4gICAgICAgICAgICBpZDogJ3VzZXJJbmZvJyxcbiAgICAgICAgfSxcblxuICAgICAgICB1c2VySW5mbzoge1xuICAgICAgICAgICAgdXNlcm5hbWVMYWJlbDoge1xuICAgICAgICAgICAgICAgIHRhZzogJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICBmb3I6ICd1c2VyTmFtZScsXG4gICAgICAgICAgICAgICAgaHRtbFN0cmluZzogJ1VzZXJuYW1lJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1c2VybmFtZUlucHV0OiB7XG4gICAgICAgICAgICAgICAgdGFnOiAnaW5wdXQnLFxuICAgICAgICAgICAgICAgIGlkOiAndXNlck5hbWUnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICBuYW1lOiAndXNlck5hbWUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhc3N3b3JkTGFiZWw6IHtcbiAgICAgICAgICAgICAgICB0YWc6ICdsYWJlbCcsXG4gICAgICAgICAgICAgICAgZm9yOiAncGFzc3dvcmQnLFxuICAgICAgICAgICAgICAgIGh0bWxTdHJpbmc6ICdQYXNzd29yZCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGFzc3dvcmRJbnB1dDoge1xuICAgICAgICAgICAgICAgIHRhZzogJ2lucHV0JyxcbiAgICAgICAgICAgICAgICBpZDogJ3Bhc3N3b3JkJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAncGFzc3dvcmQnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdwYXNzd29yZCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2lnbmluQnV0dG9uOiB7XG4gICAgICAgICAgICAgICAgdGFnOiAnaW5wdXQnLFxuICAgICAgICAgICAgICAgIGlkOiAnc2lnbkluQnV0dG9uJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ1NpZ24gSW4nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNpZ251cEJ1dHRvbjoge1xuICAgICAgICAgICAgICAgIHRhZzogJ2lucHV0JyxcbiAgICAgICAgICAgICAgICBpZDogJ3NpZ25VcEJ1dHRvbicsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICdTaWduIFVwJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG5cbiAgICAgICAgZGVtb0J1dHRvbjoge1xuICAgICAgICAgICAgdGFnOiAnYnV0dG9uJyxcbiAgICAgICAgICAgIGlkOiAnZGVtb0J1dHRvbicsXG4gICAgICAgICAgICBodG1sU3RyaW5nOiAnRGVtbycsXG4gICAgICAgIH0sXG5cbiAgICB9O1xuXG4gICAgLy9GdWN0aW9uIExpc3RcblxuICAgIC8vUmV0dXJuIEZvcm0gRWxlbWVudCBDb250ZW50cyBhcyBsaXN0XG4gICAgY29uc3QgZm9ybUVsZW1lbnRDb250ZW50TGlzdCA9ICgpID0+IHtcbiAgICAgICAgbGV0IGNvbnRlbnRMaXN0ID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBPYmplY3Qua2V5cyhTaWduSW5PYmplY3RMaXN0LnVzZXJJbmZvKS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSBnbG9iYWxqcy5uZXdFbGVtZW50KFNpZ25Jbk9iamVjdExpc3QudXNlckluZm9bT2JqZWN0LmtleXMoU2lnbkluT2JqZWN0TGlzdC51c2VySW5mbylbaV1dKTtcbiAgICAgICAgICAgIGNvbnRlbnRMaXN0LnB1c2goZWxlbWVudCk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBjb250ZW50TGlzdDtcbiAgICB9O1xuXG4gICAgLy9SZXR1cm5zIEZvcm0gRWxlbWVudCBTZWN0aW9uXG4gICAgY29uc3QgZm9ybUVsZW1lbnRTZWN0aW9uID0gKCkgPT4ge1xuICAgICAgICBsZXQgY29udGVudExpc3QgPSBmb3JtRWxlbWVudENvbnRlbnRMaXN0KCksXG4gICAgICAgICAgICBlbGVtZW50ID0gZ2xvYmFsanMubmV3RWxlbWVudChTaWduSW5PYmplY3RMaXN0LnNpZ25pbkZvcm0pO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29udGVudExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udGVudExpc3RbaV0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH07XG5cbiAgICAvL1JldHVybnMgU2lnbiBJbiBGb3JtIENvbnRhaW5lciBTZWN0aW9uXG4gICAgY29uc3Qgc2lnbkluRm9ybUNvbnRhaW5lclNlY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIGxldCBlbGVtZW50ID0gZ2xvYmFsanMubmV3RWxlbWVudChTaWduSW5PYmplY3RMaXN0LnNpZ25JbkZvcm1Db250YWluZXIpO1xuXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZm9ybUVsZW1lbnRTZWN0aW9uKCkpO1xuXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH07XG5cbiAgICAvL1JldHVybnMgU2lnbiBJbiBDb250YWluZXIgSW5uZXIgU2VjdGlvblxuICAgIGNvbnN0IHNpZ25JbkNvbnRhaW5lcklubmVyU2VjdGlvbiA9ICgpID0+IHtcbiAgICAgICAgbGV0IGNvbnRhaW5lckVsZW1lbnQgPSBnbG9iYWxqcy5uZXdFbGVtZW50KFNpZ25Jbk9iamVjdExpc3Quc2lnbkluQ29udGFpbmVySW5uZXIpLFxuICAgICAgICAgICAgaDJFbGVtZW50ID0gZ2xvYmFsanMubmV3RWxlbWVudChTaWduSW5PYmplY3RMaXN0LmFwcFRpdGxlKSxcbiAgICAgICAgICAgIGJ1dHRvbkVsZW1lbnQgPSBnbG9iYWxqcy5uZXdFbGVtZW50KFNpZ25Jbk9iamVjdExpc3QuZGVtb0J1dHRvbiksXG4gICAgICAgICAgICBzaWduSW5Gb3JtQ29udGFpbmVyID0gc2lnbkluRm9ybUNvbnRhaW5lclNlY3Rpb24oKSxcbiAgICAgICAgICAgIGVsZW1lbnRMaXN0ID0gW2gyRWxlbWVudCwgc2lnbkluRm9ybUNvbnRhaW5lciwgYnV0dG9uRWxlbWVudF07XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50TGlzdFtpXSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lckVsZW1lbnQ7XG4gICAgfTtcblxuICAgIC8vUmV0dXJucyBTaWduIEluIENvbnRhaW5lciBPdXRlciBTZWN0aW9uXG4gICAgY29uc3Qgc2lnbkluQ29udGFpbmVyT3V0ZXJTZWN0aW9uID0gKCkgPT4ge1xuICAgICAgICBsZXQgZWxlbWVudCA9IGdsb2JhbGpzLm5ld0VsZW1lbnQoU2lnbkluT2JqZWN0TGlzdC5zaWduSW5Db250YWluZXJPdXRlciksXG4gICAgICAgICAgICBzaWduSW5Db250YWluZXJJbm5lciA9IHNpZ25JbkNvbnRhaW5lcklubmVyU2VjdGlvbigpO1xuXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoc2lnbkluQ29udGFpbmVySW5uZXIpO1xuXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH07XG5cbiAgICAvLyBTaWduIEluIHNlY3Rpb24gQ3JlYXRpb25cbiAgICBjb25zdCBjcmVhdGVTZWN0aW9uID0gKCkgPT4ge1xuICAgICAgICBsZXQgZWxlbWVudCA9IHNpZ25JbkNvbnRhaW5lck91dGVyU2VjdGlvbigpO1xuXG4gICAgICAgIGdsb2JhbGpzLnJlbmRlci5ib2R5QXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgfTtcblxuXG4gICAgcmV0dXJuIHsgY3JlYXRlU2VjdGlvbjogY3JlYXRlU2VjdGlvbiB9O1xufSkoKTsiLCJcbiAgXG4vLyB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJBbmRyZXdcIiwgSlNPTi5zdHJpbmdpZnkoQW5kcmV3KSk7XG5cbi8vIGxldCBuZXdPYmplY3QgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJBbmRyZXdcIik7XG4vLyBjb25zb2xlLmxvZyhKU09OLnBhcnNlKG5ld09iamVjdCkpO1xuXG5cbi8vIGxldCBpbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJJbmZvJylcblxuLy8gY29uc29sZS5sb2coaW5mby5lbGVtZW50c1sndXNlck5hbWUnXS52YWx1ZSlcblxuXG5cbi8vIGxldCB0ZXN0ID0gKCkgPT4ge1xuLy8gICAgIGlmKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShpbmZvLmVsZW1lbnRzWyd1c2VyTmFtZSddLnZhbHVlKSA9PSBudWxsKXtcbi8vICAgICAgICAgY29uc29sZS5sb2coJ1RoaXMgaXMgbm90IGEgdXNlcm5hbWUnKVxuLy8gICAgIH1lbHNle1xuLy8gICAgICAgICBjb25zb2xlLmxvZygnVGhpcyBNYXRjaGVzJylcbi8vICAgICAgICAgY29uc29sZS5sb2cod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGluZm8uZWxlbWVudHNbJ3VzZXJOYW1lJ10udmFsdWUpKVxuLy8gICAgICAgICBsZXQgdGVzdDIgPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShpbmZvLmVsZW1lbnRzWyd1c2VyTmFtZSddLnZhbHVlKSlcbi8vICAgICAgICAgY29uc29sZS5sb2codGVzdDIucGFzc3dvcmQpXG4vLyAgICAgfVxuLy8gfVxuXG5cbi8vIGxldCB0ZXN0MiA9ICh4KSA9PiB7XG4vLyAgICAgaWYod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGluZm8uZWxlbWVudHNbJ3VzZXJOYW1lJ10udmFsdWUpID09IG51bGwpe1xuLy8gICAgICAgICBjb25zb2xlLmxvZygnVGhpcyBpcyBub3QgYSB1c2VybmFtZScpXG4vLyAgICAgfWVsc2V7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCdUaGlzIE1hdGNoZXMnKVxuLy8gICAgICAgICBjb25zb2xlLmxvZyh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oaW5mby5lbGVtZW50c1sndXNlck5hbWUnXS52YWx1ZSkpXG4vLyAgICAgfVxuLy8gfVxuXG4vLyB0ZXN0KClcblxuLy8gd2luZG93LmxvY2FsU3RvcmFnZS5jbGVhcigpXG5cblxuXG4vLyBUaGlzIFNpZ24gaW4gbW9kdWxlIGhhcyB0byBoYW5kbGU6XG4vLyAgICAgIC12ZXJpZmljYXRpb25cbi8vICAgICAgLVNpZ24taW4gdXNpbmcgZGF0YSBmcm9tIExvY2FsIFN0b3JhZ2Ugb3IgdXNlIERlZmF1bHRzIGZyb20gRGVtb1xuLy8gICAgICAtU2lnbi11cCBwYWdlIGNyZWF0aW9uL2Rpc3BsYXkgd2hlbiBuZWVkZWRcbi8vICAgICAgLWFkZGluZyBjcmVhdGVkIFNpZ24taW4gdG8gc3RvcmFnZSAoTW9zdCBsaWtlbHkgdXNpbmcgYSBmdWN0aW9uIGluIHRoZSB1c2VyU3RvcmFnZSBNb2R1bGUpXG4vLyAgICAgIC1EZW1vIEJ1dHR0b24gbmVlZHMgdG8gcnVuIGEgZnVuY3Rpb24gZnJvbSBNYWluIFNlY3Rpb24gbW9kdWxlIHVzaW5nIHRoZSBEZW1vIHVzZXIgZGF0YVxuXG5pbXBvcnQgeyBnbG9iYWxqcyB9IGZyb20gJy4uL2dsb2JhbCc7XG5pbXBvcnQgeyB1c2VyU3RvcmFnZSB9IGZyb20gJy4uL3VzZXJTdG9yYWdlJztcbmltcG9ydCB7IHNpZ25VcFNlY3Rpb25DcmVhdGlvbiB9IGZyb20gJy4uL3NpZ25VcFNlY3Rpb25GaWxlcy9zaWduVXBTZWN0aW9uQ3JlYXRpb24uanMnO1xuaW1wb3J0IHsgc2lnblVwU2VjdGlvbkZ1bmN0aW9uIH0gZnJvbSAnLi4vc2lnblVwU2VjdGlvbkZpbGVzL3NpZ25VcFNlY3Rpb25GdW5jdGlvbic7XG5cbmV4cG9ydCBjb25zdCBzaWduSW5TZWN0aW9uRnVuY3Rpb24gPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNhY2hlRG9tID0gKCgpID0+IHtcbiAgICAgICAgbGV0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpXG4gICAgICAgIHJldHVybiB7IGJvZHk6IGJvZHl9O1xuICAgIH0pKCk7XG4gICAgXG5cblxuICAgIFxuICAgIGNvbnN0IHNpZ25JbkZ1bmN0aW9uID0gKCkgPT4ge1xuICAgICAgICAvLyBDYWNoZSBEb20gTGlzdFxuICAgICAgICBsZXQgaW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VySW5mbycpLFxuICAgICAgICAgICAgc2lnbkluQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZ25JbkJ1dHRvbicpLFxuICAgICAgICAgICAgc2lnblVwQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZ25VcEJ1dHRvbicpLFxuICAgICAgICAgICAgZGVtb0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZW1vQnV0dG9uJyksXG4gICAgICAgICAgICBzaWduSW5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lnbkluLUNvbnRhaW5lci1PdXRlcicpOztcblxuXG4gICAgICAgIC8vRnVuY3Rpb24gTGlzdFxuICAgICAgICBjb25zdCB1c2VyVmFsaWRhdGlvbiA9ICggdXNlclRvVmFsaWRhdGUgKSA9PntcbiAgICAgICAgICAgIGlmICh1c2VyU3RvcmFnZS51c2Vycy51c2VyTGlzdC5pbmNsdWRlcyh1c2VyVG9WYWxpZGF0ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHBhc3N3b3JkVmFsaWRhdGlvbiA9ICggdXNlciwgcGFzc3dvcmRUb1ZhbGlkYXRlICkgPT57XG4gICAgICAgICAgICBpZiAodXNlclN0b3JhZ2UudXNlcnNbdXNlcl0ucGFzc3dvcmQgPT0gcGFzc3dvcmRUb1ZhbGlkYXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBzaWduSW5WYWxpZGF0aW9uID0gKCkgPT57XG4gICAgICAgICAgICBpZih1c2VyVmFsaWRhdGlvbihpbmZvLmVsZW1lbnRzWyd1c2VyTmFtZSddLnZhbHVlKSl7XG5cbiAgICAgICAgICAgICAgICBpZihwYXNzd29yZFZhbGlkYXRpb24oaW5mby5lbGVtZW50c1sndXNlck5hbWUnXS52YWx1ZSwgaW5mby5lbGVtZW50c1sncGFzc3dvcmQnXS52YWx1ZSkpe1xuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBhbGVydCgnUGFzc3dvcmQgZG9lcyBub3QgbWF0Y2gnKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ1VzZXIgSUQgZG9lcyBub3QgbWF0Y2gnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICAvL0V2ZW50IEJpbmRzXG4gICAgICAgIHNpZ25JbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNpZ25JblZhbGlkYXRpb24pXG4gICAgICAgIHNpZ25VcEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGdsb2JhbGpzLnJlbmRlci5yZW1vdmVFbGVtZW50KHNpZ25JbkNvbnRhaW5lcik7XG4gICAgICAgICAgICBzaWduVXBTZWN0aW9uQ3JlYXRpb24uY3JlYXRlU2VjdGlvbigpO1xuICAgICAgICAgICAgc2lnblVwU2VjdGlvbkZ1bmN0aW9uLnNpZ25VcEZ1bmN0aW9uKClcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgfTtcblxuICAgIFxuXG5cblxuICAgIHJldHVybntzaWduSW5GdW5jdGlvbjpzaWduSW5GdW5jdGlvbn1cblxuXG59KSgpXG4iLCJpbXBvcnQgeyBnbG9iYWxqcyB9IGZyb20gJy4uL2dsb2JhbCc7XG5cblxuZXhwb3J0IGNvbnN0IHNpZ25VcFNlY3Rpb25DcmVhdGlvbiA9ICgoKSA9PiB7XG5cbiAgICAvL1NpZ24gaW4gT2JqZWN0IExpc3RcbiAgICBjb25zdCBTaWduVXBPYmplY3RMaXN0ID0ge1xuXG4gICAgICAgIHNpZ25VcENvbnRhaW5lck91dGVyOiB7XG4gICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgaWQ6ICdzaWduVXAtQ29udGFpbmVyLU91dGVyJyxcbiAgICAgICAgfSxcblxuICAgICAgICBzaWduVXBDb250YWluZXJJbm5lcjoge1xuICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgIGlkOiAnc2lnblVwLUNvbnRhaW5lci1Jbm5lcicsXG4gICAgICAgIH0sXG5cbiAgICAgICAgYXBwVGl0bGU6IHtcbiAgICAgICAgICAgIHRhZzogJ2gyJyxcbiAgICAgICAgICAgIGlkOiAnYXBwVGl0bGUnLFxuICAgICAgICAgICAgaHRtbFN0cmluZzogJ0xvZy1JbiBDcmVhdGlvbicsXG4gICAgICAgIH0sXG5cbiAgICAgICAgc2lnblVwRm9ybUNvbnRhaW5lcjoge1xuICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgIGlkOiAnc2lnblVwLUZvcm0tQ29udGFpbmVyJyxcbiAgICAgICAgfSxcblxuICAgICAgICBzaWduVXBGb3JtOiB7XG4gICAgICAgICAgICB0YWc6ICdmb3JtJyxcbiAgICAgICAgICAgIGlkOid1c2VyQ3JlYXRlSW5mbycsXG4gICAgICAgIH0sXG5cbiAgICAgICAgdXNlckluZm86IHtcbiAgICAgICAgICAgIHVzZXJuYW1lTGFiZWw6IHtcbiAgICAgICAgICAgICAgICB0YWc6ICdsYWJlbCcsXG4gICAgICAgICAgICAgICAgZm9yOiAndXNlck5hbWUnLFxuICAgICAgICAgICAgICAgIGh0bWxTdHJpbmc6ICdDcmVhdGUgVXNlcm5hbWUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVzZXJSZXF1aXJlOiB7XG4gICAgICAgICAgICAgICAgdGFnOiAnaDInLFxuICAgICAgICAgICAgICAgIGlkOiAndXNlclJlcXVpcmUnLFxuICAgICAgICAgICAgICAgIGh0bWxTdHJpbmc6J1JlcXVpcmVtZW50czonLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVzZXJSZXF1aXJlbWVudHM6IHtcbiAgICAgICAgICAgICAgICB0YWc6ICdoMicsXG4gICAgICAgICAgICAgICAgaWQ6ICd1c2VyUmVxdWlyZW1lbnRzJyxcbiAgICAgICAgICAgICAgICBodG1sU3RyaW5nOidhdCBsZWFzdCBzaXggY2hhcmFjdGVycyBsb25nLCBvbmUgbnVtYmVyLCBvbmUgbG93ZXJjYXNlIGFuZCBvbmUgdXBwZXJjYXNlIGxldHRlcicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdXNlcm5hbWVJbnB1dDoge1xuICAgICAgICAgICAgICAgIHRhZzogJ2lucHV0JyxcbiAgICAgICAgICAgICAgICBpZDogJ2NyZWF0ZVVzZXJOYW1lJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3VzZXJOYW1lJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXNzd29yZExhYmVsOiB7XG4gICAgICAgICAgICAgICAgdGFnOiAnbGFiZWwnLFxuICAgICAgICAgICAgICAgIGZvcjogJ3Bhc3N3b3JkJyxcbiAgICAgICAgICAgICAgICBodG1sU3RyaW5nOiAnQ3JlYXRlIFBhc3N3b3JkJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXNzd29yZFJlcXVpcmU6IHtcbiAgICAgICAgICAgICAgICB0YWc6ICdoMicsXG4gICAgICAgICAgICAgICAgaWQ6ICdwd1JlcXVpcmUnLFxuICAgICAgICAgICAgICAgIGh0bWxTdHJpbmc6J1JlcXVpcmVtZW50czonLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhc3N3b3JkUmVxdWlyZW1lbnRzOiB7XG4gICAgICAgICAgICAgICAgdGFnOiAnaDInLFxuICAgICAgICAgICAgICAgIGlkOiAncHdkUmVxdWlyZW1lbnRzJyxcbiAgICAgICAgICAgICAgICBodG1sU3RyaW5nOidhdCBsZWFzdCBzaXggY2hhcmFjdGVycyBsb25nIGluY2x1ZGluZyB1bmRlcnNjb3JlLCAgb25lIG51bWJlciwgb25lIGxvd2VyY2FzZSBhbmQgb25lIHVwcGVyY2FzZSBsZXR0ZXInLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhc3N3b3JkSW5wdXQ6IHtcbiAgICAgICAgICAgICAgICB0YWc6ICdpbnB1dCcsXG4gICAgICAgICAgICAgICAgaWQ6ICdwYXNzd2NyZWF0ZVBhc3N3b3JkJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3Bhc3N3b3JkJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNyZWF0ZUJ1dHRvbjoge1xuICAgICAgICAgICAgICAgIHRhZzogJ2lucHV0JyxcbiAgICAgICAgICAgICAgICBpZDonc2lnblVwQ3JlYXRlJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ0NyZWF0ZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uOiB7XG4gICAgICAgICAgICAgICAgdGFnOiAnaW5wdXQnLFxuICAgICAgICAgICAgICAgIGlkOidzaWduVXBDYW5jZWwnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdidXR0b24nLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnQ2FuY2VsJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfTtcbiAgICBcbiAgICAvL0Z1Y3Rpb24gTGlzdFxuXG4gICAgLy9SZXR1cm4gRm9ybSBFbGVtZW50IENvbnRlbnRzIGFzIGxpc3RcbiAgICBjb25zdCBmb3JtRWxlbWVudENvbnRlbnRMaXN0ID0gKCkgPT4ge1xuICAgICAgICBsZXQgY29udGVudExpc3QgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE9iamVjdC5rZXlzKFNpZ25VcE9iamVjdExpc3QudXNlckluZm8pLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9IGdsb2JhbGpzLm5ld0VsZW1lbnQoU2lnblVwT2JqZWN0TGlzdC51c2VySW5mb1tPYmplY3Qua2V5cyhTaWduVXBPYmplY3RMaXN0LnVzZXJJbmZvKVtpXV0pO1xuICAgICAgICAgICAgY29udGVudExpc3QucHVzaChlbGVtZW50KTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnRMaXN0O1xuICAgIH07XG4gICAgICBcbiAgICAvL1JldHVybnMgRm9ybSBFbGVtZW50IFNlY3Rpb25cbiAgICBjb25zdCBmb3JtRWxlbWVudFNlY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIGxldCBjb250ZW50TGlzdCA9IGZvcm1FbGVtZW50Q29udGVudExpc3QoKSxcbiAgICAgICAgICAgIGVsZW1lbnQgPSBnbG9iYWxqcy5uZXdFbGVtZW50KFNpZ25VcE9iamVjdExpc3Quc2lnblVwRm9ybSk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250ZW50TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChjb250ZW50TGlzdFtpXSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfTtcblxuICAgIC8vUmV0dXJucyBTaWduIEluIEZvcm0gQ29udGFpbmVyIFNlY3Rpb25cbiAgICBjb25zdCBzaWduVXBGb3JtQ29udGFpbmVyU2VjdGlvbiA9ICgpID0+IHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBnbG9iYWxqcy5uZXdFbGVtZW50KFNpZ25VcE9iamVjdExpc3Quc2lnblVwRm9ybUNvbnRhaW5lcik7XG5cbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChmb3JtRWxlbWVudFNlY3Rpb24oKSk7XG5cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfTtcblxuICAgIC8vUmV0dXJucyBTaWduIEluIENvbnRhaW5lciBJbm5lciBTZWN0aW9uXG4gICAgY29uc3Qgc2lnblVwQ29udGFpbmVySW5uZXJTZWN0aW9uID0gKCkgPT4ge1xuICAgICAgICBsZXQgY29udGFpbmVyRWxlbWVudCA9IGdsb2JhbGpzLm5ld0VsZW1lbnQoU2lnblVwT2JqZWN0TGlzdC5zaWduVXBDb250YWluZXJJbm5lciksXG4gICAgICAgICAgICBoMkVsZW1lbnQgPSBnbG9iYWxqcy5uZXdFbGVtZW50KFNpZ25VcE9iamVjdExpc3QuYXBwVGl0bGUpLFxuICAgICAgICAgICAgc2lnbkluRm9ybUNvbnRhaW5lciA9IHNpZ25VcEZvcm1Db250YWluZXJTZWN0aW9uKCksXG4gICAgICAgICAgICBlbGVtZW50TGlzdCA9IFtoMkVsZW1lbnQsIHNpZ25JbkZvcm1Db250YWluZXJdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudExpc3RbaV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lckVsZW1lbnQ7XG4gICAgfTtcblxuICAgIC8vUmV0dXJucyBTaWduIEluIENvbnRhaW5lciBPdXRlciBTZWN0aW9uXG4gICAgY29uc3Qgc2lnblVwQ29udGFpbmVyT3V0ZXJTZWN0aW9uID0gKCkgPT4ge1xuICAgICAgICBsZXQgZWxlbWVudCA9IGdsb2JhbGpzLm5ld0VsZW1lbnQoU2lnblVwT2JqZWN0TGlzdC5zaWduVXBDb250YWluZXJPdXRlciksXG4gICAgICAgIHNpZ25VcENvbnRhaW5lcklubmVyID0gc2lnblVwQ29udGFpbmVySW5uZXJTZWN0aW9uKCk7XG5cbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChzaWduVXBDb250YWluZXJJbm5lcik7XG5cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfTtcblxuICAgIC8vIFNpZ24gSW4gc2VjdGlvbiBDcmVhdGlvblxuICAgIGNvbnN0IGNyZWF0ZVNlY3Rpb24gPSAoKSA9PntcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBzaWduVXBDb250YWluZXJPdXRlclNlY3Rpb24oKTtcblxuICAgICAgICBnbG9iYWxqcy5yZW5kZXIuYm9keUFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIH07XG5cblxuICAgIHJldHVybntjcmVhdGVTZWN0aW9uOmNyZWF0ZVNlY3Rpb259O1xufSkoKTsiLCJjb25zdCBBbmRyZXcgPSB7XG4gICAgcGFzc3dvcmQgOiBcIkFuZHJld1wiLFxuICB9XG4gIFxuLy8gd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiQW5kcmV3XCIsIEpTT04uc3RyaW5naWZ5KEFuZHJldykpO1xuXG5sZXQgbmV3T2JqZWN0ID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiQW5kcmV3XCIpO1xuLy8gY29uc29sZS5sb2coSlNPTi5wYXJzZShuZXdPYmplY3QpKTtcblxuXG5sZXQgaW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VySW5mbycpXG5cbi8vIGNvbnNvbGUubG9nKGluZm8uZWxlbWVudHNbJ3VzZXJOYW1lJ10udmFsdWUpXG5cblxuXG4vLyBsZXQgdGVzdCA9ICgpID0+IHtcbi8vICAgICBpZih3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oaW5mby5lbGVtZW50c1sndXNlck5hbWUnXS52YWx1ZSkgPT0gbnVsbCl7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCdUaGlzIGlzIG5vdCBhIHVzZXJuYW1lJylcbi8vICAgICB9ZWxzZXtcbi8vICAgICAgICAgY29uc29sZS5sb2coJ1RoaXMgTWF0Y2hlcycpXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShpbmZvLmVsZW1lbnRzWyd1c2VyTmFtZSddLnZhbHVlKSlcbi8vICAgICAgICAgbGV0IHRlc3QyID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oaW5mby5lbGVtZW50c1sndXNlck5hbWUnXS52YWx1ZSkpXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKHRlc3QyLnBhc3N3b3JkKVxuLy8gICAgIH1cbi8vIH1cblxuXG4vLyBsZXQgdGVzdDIgPSAoeCkgPT4ge1xuLy8gICAgIGlmKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShpbmZvLmVsZW1lbnRzWyd1c2VyTmFtZSddLnZhbHVlKSA9PSBudWxsKXtcbi8vICAgICAgICAgY29uc29sZS5sb2coJ1RoaXMgaXMgbm90IGEgdXNlcm5hbWUnKVxuLy8gICAgIH1lbHNle1xuLy8gICAgICAgICBjb25zb2xlLmxvZygnVGhpcyBNYXRjaGVzJylcbi8vICAgICAgICAgY29uc29sZS5sb2cod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGluZm8uZWxlbWVudHNbJ3VzZXJOYW1lJ10udmFsdWUpKVxuLy8gICAgIH1cbi8vIH1cblxuLy8gdGVzdCgpXG5cbi8vIHdpbmRvdy5sb2NhbFN0b3JhZ2UuY2xlYXIoKVxuXG5cblxuLy8gVGhpcyBTaWduIGluIG1vZHVsZSBoYXMgdG8gaGFuZGxlOlxuLy8gICAgICAtdmVyaWZpY2F0aW9uXG4vLyAgICAgIC1TaWduLWluIHVzaW5nIGRhdGEgZnJvbSBMb2NhbCBTdG9yYWdlIG9yIHVzZSBEZWZhdWx0cyBmcm9tIERlbW9cbi8vICAgICAgLVNpZ24tdXAgcGFnZSBjcmVhdGlvbi9kaXNwbGF5IHdoZW4gbmVlZGVkXG4vLyAgICAgIC1hZGRpbmcgY3JlYXRlZCBTaWduLWluIHRvIHN0b3JhZ2UgKE1vc3QgbGlrZWx5IHVzaW5nIGEgZnVjdGlvbiBpbiB0aGUgdXNlclN0b3JhZ2UgTW9kdWxlKVxuLy8gICAgICAtRGVtbyBCdXR0dG9uIG5lZWRzIHRvIHJ1biBhIGZ1bmN0aW9uIGZyb20gTWFpbiBTZWN0aW9uIG1vZHVsZSB1c2luZyB0aGUgRGVtbyB1c2VyIGRhdGFcblxuaW1wb3J0IHsgZ2xvYmFsanMgfSBmcm9tICcuLi9nbG9iYWwnO1xuaW1wb3J0IHsgdXNlclN0b3JhZ2UgfSBmcm9tICcuLi91c2VyU3RvcmFnZSc7XG5pbXBvcnQgeyBzaWduSW5TZWN0aW9uQ3JlYXRpb24gfSBmcm9tICcuLi9zaWduSW5TZWN0aW9uRmlsZXMvc2lnbkluU2VjdGlvbkNyZWF0aW9uJztcbmltcG9ydCB7IHNpZ25JblNlY3Rpb25GdW5jdGlvbiB9IGZyb20gJy4uL3NpZ25JblNlY3Rpb25GaWxlcy9zaWduSW5TZWN0aW9uRnVuY3Rpb24nO1xuXG5leHBvcnQgY29uc3Qgc2lnblVwU2VjdGlvbkZ1bmN0aW9uID0gKCgpID0+IHtcbiAgICBjb25zdCBjYWNoZURvbSA9ICgoKSA9PiB7XG4gICAgICAgIGxldCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVxuICAgICAgICByZXR1cm4geyBib2R5OiBib2R5IH07XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IHNpZ25VcEZ1bmN0aW9uID0gKCkgPT4ge1xuICAgICAgICAvLyBDYWNoZSBEb20gTGlzdFxuICAgICAgICBsZXQgaW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyQ3JlYXRlSW5mbycpLFxuICAgICAgICAgICAgc2lnblVwQ3JlYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZ25VcENyZWF0ZScpLFxuICAgICAgICAgICAgc2lnblVwQ2FuY2VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZ25VcENhbmNlbCcpLFxuICAgICAgICAgICAgc2lnblVwQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZ25VcC1Db250YWluZXItT3V0ZXInKTs7XG5cblxuICAgICAgICAvL0Z1bmN0aW9uIExpc3RcbiAgICAgICAgY29uc3QgdXNlckNyZWF0ZVZhbGlkYXRpb24gPSAoIHVzZXJUb1ZhbGlkYXRlICkgPT57XG4gICAgICAgICAgICBpZiAodXNlclN0b3JhZ2UuY2hlY2tVc2VybmFtZSh1c2VyVG9WYWxpZGF0ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHBhc3N3b3JkQ3JlYXRlVmFsaWRhdGlvbiA9ICggcGFzc3dvcmRUb1ZhbGlkYXRlICkgPT57XG4gICAgICAgICAgICBpZiAodXNlclN0b3JhZ2UuY2hlY2tQYXNzd29yZChwYXNzd29yZFRvVmFsaWRhdGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBzaWduVXBWYWxpZGF0aW9uID0gKCkgPT57XG4gICAgICAgICAgICBpZih1c2VyQ3JlYXRlVmFsaWRhdGlvbihpbmZvLmVsZW1lbnRzWyd1c2VyTmFtZSddLnZhbHVlKSl7XG5cbiAgICAgICAgICAgICAgICBpZihwYXNzd29yZENyZWF0ZVZhbGlkYXRpb24oaW5mby5lbGVtZW50c1sncGFzc3dvcmQnXS52YWx1ZSkpe1xuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBhbGVydCgnUGFzc3dvcmQgZG9lcyBub3QgbWVldCByZXF1aXJlbWVudHMnKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ1VzZXIgSUQgZG9lcyBub3QgbWVldCByZXF1aXJlbWVudHMnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICAvL0V2ZW50IEJpbmRzXG4gICAgICAgIHNpZ25VcENyZWF0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNpZ25VcFZhbGlkYXRpb24pXG4gICAgICAgIHNpZ25VcENhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGdsb2JhbGpzLnJlbmRlci5yZW1vdmVFbGVtZW50KHNpZ25VcENvbnRhaW5lcik7XG4gICAgICAgICAgICBzaWduSW5TZWN0aW9uQ3JlYXRpb24uY3JlYXRlU2VjdGlvbigpO1xuICAgICAgICAgICAgc2lnbkluU2VjdGlvbkZ1bmN0aW9uLnNpZ25JbkZ1bmN0aW9uKCk7XG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgIH07XG5cbiAgICByZXR1cm57c2lnblVwRnVuY3Rpb246c2lnblVwRnVuY3Rpb259XG59KSgpXG4iLCJleHBvcnQgY29uc3QgdXNlclN0b3JhZ2UgPSAoKCkgPT57XG5cbiAgICBjb25zdCB1c2VycyA9IHtcbiAgICAgICAgdXNlckxpc3Q6WydBbmRyZXcnXSxcblxuICAgICAgICBBbmRyZXc6e1xuICAgICAgICAgICAgdXNlcklEOidBbmRyZXcnLFxuICAgICAgICAgICAgcGFzc3dvcmQgOiBcIkFuZHJld1wiLFxuICAgICAgICAgICAgdXNlclN0b3JhZ2VJbmZvOiAnZGVtbydcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBkZW1vID0ge1xuICAgICAgICBwYXNzd29yZCA6IFwiRGVtb1wiLFxuICAgICAgICBwcm9qZWN0VGl0bGVzIDogWydIb21lIENob3JlcycsICdXb3JrJywgJ0Zvb2QgUHJlcCddLFxuXG4gICAgICAgIGl0ZW0wOntcbiAgICAgICAgICAgIHRhc2tMaXN0OlsnTGF1bmRyeScsICdWYWN1dW0nLCAnRGlzaGVzJ10sXG4gICAgICAgICAgICB0YXNrczp7XG4gICAgICAgICAgICAgICAgdGFzazA6e1xuICAgICAgICAgICAgICAgICAgICBkdWVEYXRlOicxMS8yNi8yMicsXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRhc2sxOntcbiAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZTonMTEvMjYvMjInLFxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0YXNrMjp7XG4gICAgICAgICAgICAgICAgICAgIGR1ZURhdGU6JzExLzI2LzIyJyxcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgaXRlbTE6e1xuICAgICAgICAgICAgdGFza0xpc3Q6WydDaGVjayBFLW1haWwnLCAnVXBkYXRlIFByb2plY3QnLCAnVGVhbSBNZWV0aW5nJ10sXG4gICAgICAgICAgICB0YXNrczp7XG4gICAgICAgICAgICAgICAgdGFzazA6e1xuICAgICAgICAgICAgICAgICAgICBkdWVEYXRlOicxMS8yNi8yMicsXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRhc2sxOntcbiAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZTonMTEvMjYvMjInLFxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogZmFsc2UsXG5cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRhc2syOntcbiAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZTonMTEvMjYvMjInLFxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBpdGVtMjp7XG4gICAgICAgICAgICB0YXNrTGlzdDpbJ1RoYXcgTWVhdCcsICdDdXQgVmVnZXRhYmxlcycsICdDb29rIFJpY2UnXSxcbiAgICAgICAgICAgIHRhc2tzOntcbiAgICAgICAgICAgICAgICB0YXNrMDp7XG4gICAgICAgICAgICAgICAgICAgIGR1ZURhdGU6JzExLzI2LzIyJyxcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGFzazE6e1xuICAgICAgICAgICAgICAgICAgICBkdWVEYXRlOicxMS8yNi8yMicsXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRhc2syOntcbiAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZTonMTEvMjYvMjInLFxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCBcbiAgICB9XG5cbiAgICAvLyBGdW5jdGlvbiBMaXN0XG5cblxuICAgIGNvbnN0IGNoZWNrVXNlcm5hbWUgPSAoc3RyKSA9PiB7XG4gICAgICAgIC8vIGF0IGxlYXN0IG9uZSBudW1iZXIsIG9uZSBsb3dlcmNhc2UgYW5kIG9uZSB1cHBlcmNhc2UgbGV0dGVyXG4gICAgICAgIC8vIGF0IGxlYXN0IHNpeCBjaGFyYWN0ZXJzXG4gICAgICAgIHZhciByZSA9IC8oPz0uKlxcZCkoPz0uKlthLXpdKSg/PS4qW0EtWl0pLns2LH0vO1xuICAgICAgICByZXR1cm4gcmUudGVzdChzdHIpO1xuICAgIH1cblxuICAgIGNvbnN0IGNoZWNrUGFzc3dvcmQgPSAoc3RyKSA9PiB7XG4gICAgICAgIC8vIGF0IGxlYXN0IG9uZSBudW1iZXIsIG9uZSBsb3dlcmNhc2UgYW5kIG9uZSB1cHBlcmNhc2UgbGV0dGVyXG4gICAgICAgIC8vIGF0IGxlYXN0IHNpeCBjaGFyYWN0ZXJzIHRoYXQgYXJlIGxldHRlcnMsIG51bWJlcnMgb3IgdGhlIHVuZGVyc2NvcmVcbiAgICAgICAgdmFyIHJlID0gL14oPz0uKlxcZCkoPz0uKlthLXpdKSg/PS4qW0EtWl0pXFx3ezYsfSQvO1xuICAgICAgICByZXR1cm4gcmUudGVzdChzdHIpO1xuICAgIH1cbiAgICAgIHJldHVybiB7ZGVtbzpkZW1vLCB1c2Vyczp1c2VycywgY2hlY2tVc2VybmFtZTpjaGVja1VzZXJuYW1lLGNoZWNrUGFzc3dvcmQ6Y2hlY2tQYXNzd29yZH1cbn0pKCkiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIi8vIFRoaXMgaXMganVzdCBhIHBsYWNlIEhvbGRlclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyB1c2VyU3RvcmFnZSB9IGZyb20gJy4vdXNlclN0b3JhZ2UnO1xuXG5pbXBvcnQgeyBzaWduSW5TZWN0aW9uQ3JlYXRpb24gfSBmcm9tICcuL3NpZ25JblNlY3Rpb25GaWxlcy9zaWduSW5TZWN0aW9uQ3JlYXRpb24nO1xuaW1wb3J0IHsgc2lnbkluU2VjdGlvbkZ1bmN0aW9uIH0gZnJvbSAnLi9zaWduSW5TZWN0aW9uRmlsZXMvc2lnbkluU2VjdGlvbkZ1bmN0aW9uJztcblxuaW1wb3J0IHsgc2lnblVwU2VjdGlvbkZ1bmN0aW9uIH0gZnJvbSAnLi9zaWduVXBTZWN0aW9uRmlsZXMvc2lnblVwU2VjdGlvbkZ1bmN0aW9uJztcbmltcG9ydCB7IHNpZ25VcFNlY3Rpb25DcmVhdGlvbiB9IGZyb20gJy4vc2lnblVwU2VjdGlvbkZpbGVzL3NpZ25VcFNlY3Rpb25DcmVhdGlvbic7XG5cbmltcG9ydCB7IG5hdlNlY3Rpb25DcmVhdGlvbiB9IGZyb20gJy4vTmF2U2VjdGlvbkZpbGVzL25hdlNlY3Rpb25DcmVhdGlvbic7XG5cblxuXG5pbXBvcnQgeyBnbG9iYWxqcyB9IGZyb20gJy4vZ2xvYmFsJztcbi8vIGNvbnNvbGUubG9nKCdOb3cgdGltZSBmb3IgdGhlIEpTJylcblxuLy8gc2lnbkluU2VjdGlvbkNyZWF0aW9uLmNyZWF0ZVNlY3Rpb24oKTtcblxuLy8gc2lnbkluU2VjdGlvbkZ1bmN0aW9uLnNpZ25JbkZ1bmN0aW9uKCk7XG5cbi8vIHNpZ25VcFNlY3Rpb25DcmVhdGlvbi5jcmVhdGVTZWN0aW9uKCk7XG4vLyBzaWduVXBTZWN0aW9uRnVuY3Rpb24uc2lnblVwRnVuY3Rpb24oKTtcbmNvbnN0IEFuZHJldyA9IHVzZXJTdG9yYWdlLmRlbW9cbm5hdlNlY3Rpb25DcmVhdGlvbi5jcmVhdGVTZWN0aW9uKEFuZHJldyk7XG53aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJBbmRyZXdcIiwgSlNPTi5zdHJpbmdpZnkoQW5kcmV3KSk7XG5cbi8vIGxldCBuZXdPYmplY3QgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJBbmRyZXdcIik7XG4vLyBjb25zb2xlLmxvZyhKU09OLnBhcnNlKG5ld09iamVjdCkpO1xuXG4vLyBsZXQgaW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VySW5mbycpXG5cbi8vIGxldCB0ZXN0ID0gKCkgPT4ge1xuLy8gICAgIGlmKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShpbmZvLmVsZW1lbnRzWyd1c2VyTmFtZSddLnZhbHVlKSA9PSBudWxsKXtcbi8vICAgICAgICAgY29uc29sZS5sb2coJ1RoaXMgaXMgbm90IGEgdXNlcm5hbWUnKVxuLy8gICAgIH1lbHNle1xuLy8gICAgICAgICBjb25zb2xlLmxvZygnVGhpcyBNYXRjaGVzJylcbi8vICAgICAgICAgbGV0IHRlc3QyID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oaW5mby5lbGVtZW50c1sndXNlck5hbWUnXS52YWx1ZSkpXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKHRlc3QyLnByb2plY3RUaXRsZXMpXG4vLyAgICAgfVxuLy8gfVxuXG4vLyBsZXQgdGVzdDIgPSAoeCkgPT4ge1xuLy8gICAgIGlmKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShpbmZvLmVsZW1lbnRzWyd1c2VyTmFtZSddLnZhbHVlKSA9PSBudWxsKXtcbi8vICAgICAgICAgY29uc29sZS5sb2coJ1RoaXMgaXMgbm90IGEgdXNlcm5hbWUnKVxuLy8gICAgIH1lbHNle1xuLy8gICAgICAgICBjb25zb2xlLmxvZygnVGhpcyBNYXRjaGVzJylcbi8vICAgICAgICAgY29uc29sZS5sb2cod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGluZm8uZWxlbWVudHNbJ3VzZXJOYW1lJ10udmFsdWUpKVxuLy8gICAgIH1cbi8vIH1cblxuLy8gdGVzdCgpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=