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
___CSS_LOADER_EXPORT___.push([module.id, "/* Table of Contents\n\t1. Imports\n\t2. Global Styles\n\t\t2.1. Global Styles Variables\n\t\t\t2.1.1. Global Styles Variables-Color\n\t\t\t2.1.2. Global Styles Variables-Font\n\t\t\t2.1.3. Global Styles Images\n\t\t2.2. Global Styles Global\n\t3. pageGridContainer Styles\n\t\t3.1. pageGridContainer Global Styles\n\t\t3.2. pageGridContainer Target Element Styles\n\t4. Sign-in Styles\n\t\t4.1. Sign-in Global Styles\n\t\t4.2. Sign-in Target Element Styles\n\t5. Sign-Up Styles\n\t\t5.1. Sign-Up Global Styles\n\t\t5.2. Sign-Up Target Element Styles\n\t6. Navigation Section Styles\n\t\t6.1. Navigation Section Global Styles\n\t\t6.2. Navigation Section Target Element Styles\n\t7. Navigation Menu Section Styles\n\t\t7.1. Navigation Menu Global Styles\n\t\t7.2. Navigation Menu Target Element Styles\n\t\t7.3. Navigation Edit Section Global Styles\n\t\t7.4. Navigation Edit Section Target Element Styles\n\t8. Main Section Styes\n\t\t8.1. Main Section Global Styles\n\t\t8.2. Main Section Target Element Styles\n\t\t8.3. Main Edit Section Global Styles\n\t\t8.4. Main Edit Section Target Element Styles\n\t*. Footer Style Section\n\t*. Media Query Section\n\t\t*.1. Global Media Queries\n\t\t*.2. pageGridContainer Media Queries\n\t\t*.3. Navigation Section Media Queries\n\t\t*.4. Navigation Menu Section Media Queries\n\n*/\n\n/*\t==========\n\t1. Imports\n\t========== */\n\n/*\t================\n\t2. Global Styles\n\t================ */\n\n\t/*\t============================\n\t\t2.1. Global Styles Variables\n\t\t============================ */\n\n:root{\n\n\t\t/*\t====================================\n\t\t\t2.1.1. Global Styles Variables-Color\n\t\t \t==================================== */\n\n\t--clr-primary:rgb(255,255,255);\n\t--clr-primary-opacity-light:rgb(255,255,255, 0.6);\n\t--clr-primary-opacity-mid:rgb(255,255,255, 0.8);\n\t--clr-primary-opacity-dark:rgb(255,255,255, 0.9);\n\n\t--clr-secondary:rgb(14, 9, 9);\n\t--clr-secondary-opacity-light:rgb(14, 9, 9, 0.28);\n\t--clr-secondary-opacity-mid:rgb(14, 9, 9, 0.4);\n\t--clr-secondary-opacity-dark:rgb(14, 9, 9, 0.5);\n\n\t--clr-accent:rgb(174,31,66);\n\t--clr-accent-light:rgb(224,60,101);\n\t\t\t\n\t\t/*\t===================================\n\t\t\t2.1.2. Global Styles Variables-Font\n\t\t \t=================================== */\n\n\t--ff-primary:'Roboto', sans-serif;\n\n\t/*\t\t===========================\n\t\t\t2.1.3. Global Styles Images\n\t\t \t=========================== */\n\n\t--img-trash:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n\t--img-edit:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n\t--img-done:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n\t--img-cancel:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n}\n\n\t.edit,.delete,.done,.cancel{\n\t\tbackground-repeat: no-repeat;\n\t\tbackground-size: 100% 100%;\n\t}\n\n\t/*\t=========================\n\t\t2.2. Global Styles Global\n\t\t========================= */\n/* \n\tCSS Styling Reset from\n\thttp://meyerweb.com/eric/tools/css/reset/ \n   \tv2.0 | 20110126\n   \tLicense: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\n\nbody {\n\tline-height: 1;\n\tmin-height: 100vh;\n\tfont-family: var(--ff-primary);\n\ttext-align: center;\n\tbackground-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n\tbackground-repeat: no-repeat;\n\tbackground-size: 100% 100%; \n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/*\t===========================\n\t3. pageGridContainer Styles\n\t=========================== */\n\n\t/*\t====================================\n\t\t3.1. pageGridContainer Global Styles\n\t\t==================================== */\n\n#pageGridContainer{\n\tdisplay: grid;\n\tgrid-template-columns: repeat(4, 1fr) ;\n  \tgrid-template-rows: auto;\n  \tgrid-template-areas: \n    \"header header header header\"\n    \"main main main main\"\n    \"footer footer footer footer\";\n}\n\n\t/*\t============================================\n\t\t3.2. pageGridContainer Target Element Styles\n\t\t============================================ */\n\n#navSection{\n\tgrid-area: header;\n}\n#navMenuSection{\n\tgrid-area: sidebar;\n}\n#mainSection{\n\tgrid-area: main;\n}\n#footerSection{\n\tgrid-area: footer;\n}\n\n/*\t=================\n\t4. Sign-in Styles\n\t================= */\n\n\t/*\t==========================\n\t\t4.1. Sign-in Global Styles\n\t\t========================== */\n\nform{\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n}\n\n#signIn-Container-Inner, #signIn-Container-Outer{\n\tdisplay: flex;\n}\n\n#signIn-Container-Outer{\n\theight: 100vh;\n\tjustify-content: center;\n}\n\n#signIn-Container-Inner{\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: space-evenly;\n\tmin-width: 35%;\n\tmax-width: 80%;\n\tmargin: 8.5em 3em 13em;\n\tbackground-color: var(--clr-primary-opacity-mid);\n\tborder-radius: 23px;\n}\n\n#signIn-Form-Container{\n\tmargin:0 1em;\n\tpadding: 1.5em 0;\n\tmin-width: 60%;\n\tmax-width: 80%;\n\tbackground-color: var(--clr-secondary-opacity-mid);\n}\n\n\t/*\t==================================\n\t\t4.2. Sign-in Target Element Styles\n\t\t================================== */\n\n#appTitle{\n\tfont-size: 2em;\n\tmargin: 0.5em;\n\tcolor: var(--clr-secondary);\n}\n\nform > input, form > label{\n\talign-self: center;\n\tmin-width: 60%;\n\tmax-width: 80%;\n}\n\nform >label{\n\tfont-size: 1.5em;\n\tcolor:var(--clr-primary);\n}\n\ninput[type=button], #demoButton{\n\tmargin: 0.3em;\n\tborder: none;\n\tcursor: pointer;\n\tfont-size: 1.2em;\n\tpadding: 0.3em 3em;\n\tborder-radius: 1em;\n\ttext-decoration: none;\n\tcolor: var(--clr-primary);\n\tbackground-color: var(--clr-accent);\n\ttransition: 0.5s;\n}\n\ninput[type=button]:hover, #demoButton:hover{\n\tbackground-color: var(--clr-accent-light);\n}\n\ninput[type=text], input[type=password]{\n\tmargin: 0.5em;\n\tpadding: 0.5em 1em;\n\tborder: none;\n\ttext-decoration: none;\n\tbackground: var(--clr-secondary-opacity-dark);\n\tborder-radius: 1em;\n}\n\n#demoButton{\n\tpadding: 0.3em 2em;\n}\n\n/*\t=================\n\t5. Sign-Up Styles\n\t================= */\n\n\n\t/*\t==========================\n\t\t5.1. Sign-Up Global Styles\n\t\t========================== */\n\nform{\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n}\n\n#signUp-Container-Inner, #signUp-Container-Outer{\n\tdisplay: flex;\n}\n\n#signUp-Container-Outer{\n\theight: 100vh;\n\tjustify-content: center;\n}\n\n#signUp-Container-Inner{\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: space-evenly;\n\tmin-width: 35%;\n\tmax-width: 80%;\n\tmargin: 8.5em 3em 13em;\n\tbackground-color: var(--clr-primary-opacity-mid);\n\tborder-radius: 23px;\n}\n\n#signUp-Form-Container{\n\tmargin:0 1em;\n\tpadding: 1.5em 0;\n\tmin-width: 60%;\n\tmax-width: 80%;\n\tbackground-color: var(--clr-secondary-opacity-mid);\n}\n\t\t\n\t/*\t==================================\n\t\t5.2. Sign-Up Target Element Styles\n\t\t================================== */\n\t\t\n#appTitle{\n\tfont-size: 2em;\n\tcolor: var(--clr-secondary);\n\t\n}\n\nform > input, form > label{\n\talign-self: center;\n\tmin-width: 60%;\n\tmax-width: 80%;\n}\n\nform >label{\n\tfont-size: 1.5em;\n\tcolor:var(--clr-primary);\n}\n\ninput[type=button], #demoButton{\n\tmargin: 0.3em;\n\tborder: none;\n\tcursor: pointer;\n\tfont-size: 1.2em;\n\tpadding: 0.3em 3em;\n\tborder-radius: 1em;\n\ttext-decoration: none;\n\tcolor: var(--clr-primary);\n\tbackground-color: var(--clr-accent);\n\ttransition: 0.5s;\n}\n\ninput[type=button]:hover, #demoButton:hover{\n\tbackground-color: var(--clr-accent-light);\n}\n\ninput[type=text]{\n\tmargin: 0.5em;\n\tpadding: 0.5em 1em;\n\tborder: none;\n\ttext-decoration: none;\n\tbackground: var(--clr-secondary-opacity-dark);\n\tborder-radius: 1em;\n}\n\n#demoButton{\n\tpadding: 0.3em 2em;\n}\n\n/*\t============================\n\t6. Navigation Section Styles\n\t============================ */\n\t\n\t/*\t=====================================\n\t\t6.1. Navigation Section Global Styles\n\t\t===================================== */\n\n#navSection{\n\tdisplay: flex;\n\tjustify-content: flex-start;\n\tfont-size: 2em;\n\tposition: fixed;\n\ttop: 0;\n\twidth: 100vw;\n\tcolor: var(--clr-secondary);\n\tbackground-color: var(--clr-primary-opacity-light);\n}\n\n\t/*\t=============================================\n\t\t6.2. Navigation Section Target Element Styles\n\t\t============================================= */\n\n#navSection >h1{\n\tmargin-left: 0.2em;\n\tfont-size: 2em;\n\ttransition: 0.5s;\n\tcursor: pointer;\n\tuser-select: none;\n}\n\n\n#navSection >h2{\n\tposition: absolute;\n\ttop:50%;\n\tleft:50%;\n\ttransform: translate(-50%, -50%);\n}\n\n\n/*\t=================================\n\t7. Navigation Menu Section Styles\n\t================================= */\n\n\t/*\t==================================\n\t\t7.1. Navigation Menu Global Styles\n\t\t================================== */\n#navMenuSection>*{\n\tmargin-top: 1em;\n}\n\n.navMenuSectionHide{\n\ttransform: translate(-100%, 0);\n}\n\n#navMenuSection{\n\tposition: fixed;\n\ttop: 2em;\n\theight: 100vh;\n\tfont-size: 2em;  \n\twidth: 25%;\n\tcolor: var(--clr-secondary);\n\tbackground-color: var(--clr-primary);\n\ttransition: 0.5s;\n}\n\n.navSectionIndicatorActive{\n\ttransform: rotate(135deg);\n}\n\n\n#dateSelector{\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n#projectSelector{\n\tfont-size: 0.5em;\n}\n\n#projectSelector>ul{\n\tmargin: 1em;\n\tlist-style-type: disc;\n}\n\n#projectSelector>ul>section>*{\n\tflex-grow: 1;\n\ttransition: 0.5s;\n}\n\n#projectSelector>ul>section>*:hover{\n\tbackground-color: var(--clr-secondary-opacity-light);\n}\n\n\t/*\t==========================================\n\t\t7.2. Navigation Menu Target Element Styles\n\t\t========================================== */\n\n#defaultSelector > h2{\n\tmargin: 0.5em;\n}\n\n#dateSelector > p{\n\tfont-size: 0.75em;  \n}\n\n#dateSelector>input{\n\tdisplay: block;\n\tmargin: 1em;\n\ttext-align: center;\n}\n\n#projectSelector>h2{\n\tfont-size: 1.75em;\n}\n\n#projectSelector>ul>li{\n\tmargin: 0.5em;\n\n}\n\n#projectSelector>ul>section{\n\tdisplay: flex;\n\tflex-direction: row;\n\theight: 2em;\n}\n\n#projectSelector>ul>section>.edit{\n\tbackground-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n\tbackground-repeat: no-repeat;\n\tbackground-size: 100% 100%;\n}\n\n#projectSelector>ul>section>.delete{\n\tbackground-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n\tbackground-repeat: no-repeat;\n\tbackground-size: 100% 100%;\n}\n\n#projectSelector>ul>.addProject{\n\tpadding: 0.6em;\n\tfont-size: 1.2em;\n\tmargin-top: 0.5em;\n\ttext-decoration: none;\n\tborder: none;\n\tborder-radius: 0.5em;\n\tcolor: var(--clr-primary);\n\tbackground-color: var(--clr-accent);\n\ttransition: 0.5s;\n}\n\n#projectSelector>ul>.addProject:hover{\n\tbackground-color: var(--clr-accent-light);\n}\n\n/*\t==========================================\n\t7.3. Navigation Edit Section Global Styles\n\t========================================== */\n\n#editProjectContainer{\n\tdisplay: flex;\n\tborder: 0.2em inset var(--clr-accent);\n\tflex-direction: column;\n}\n\n#editProjectContainer>*{\n\tflex-grow: 1;\n}\n\n#editProjectContainer>.done-cancelSection>*{\n\twidth: 100%;\n\theight: 2em;\n}\n\n\t/*\t==============================================\n\t7.4. Navigation Edit Section Target Element Styles\n\t================================================== */\n\n#editProjectContainer{\n\tdisplay: flex;\n\tborder: 0.2em inset var(--clr-accent);\n\tflex-direction: column;\n}\n\n#editProjectContainer>.done-cancelSection{\n\tdisplay: flex;\n\tjustify-content: space-evenly;\n\ttransition: 0.5s;\n}\n\n#editProjectContainer>.editTaskSelect>input{\n\twidth: 80%;\n}\n\n#editProjectContainer>.done-cancelSection>*:hover{\n\tbackground-color: var(--clr-secondary-opacity-light);\n}\n\n/*\t=====================\n\t8. Main Section Styes\n\t===================== */\n\n\t/*\t===============================\n\t\t8.1. Main Section Global Styles\n\t\t=============================== */\n\n#mainSection>*{\n\tmin-width: 80%;\n}\n\n#mainSection, .items, .tasks{\n\tdisplay: grid;\n}\n\n#mainSection{\n\tdisplay: flex;\n\tflex-direction: column;\n\tmargin-top: 3em;\n\tpadding-bottom: 2em;\n\tgap: 0.5em 0em;\n\tfont-size: 1.5em;\n\tcolor: var(--clr-secondary);\n\tbackground-color: var(--clr-primary-opacity-dark);\n}\n\n.items{\n\tgrid-template-columns: repeat(3, 1fr);\n}\n\n.tasks{\n\tgrid-template-columns: repeat(4, 1fr);\n}\n\n.items > *{\n\tgrid-column: 1 / span 3;\n}\n\n.items{\n\tcolor: var(--clr-secondary);\n\tplace-self: center;\n\tgap: 0.5em 0em;\n\tmargin-bottom: 0.5em;\n\tbackground: var(--clr-secondary-opacity-light);\n}\n\n.tasks>*{\n\tplace-self: center;\n\tpadding: 0.2em;\n}\n\n.tasks>section>*{\n\theight: 2em;\n\twidth: 2em;\n\tflex-grow: 1;\n\ttransition: 0.5s;\n}\n\n.tasks>section>*:hover{\n\tbackground-color: var(--clr-secondary-opacity-light);\n}\n\n\t/*\t=======================================\n\t\t8.2. Main Section Target Element Styles\n\t\t======================================= */\n\n#mainSection > h2{\n\tfont-size: 1.5em;\n\tpadding: 0.5em;\n}\n\n.items>h2{\n\tfont-size: 1.5em;\n\tpadding-top: 0.2em;\n}\n\n.tasks>label{\n\tcolor: var(--clr-secondary);\n\tplace-self: center;\n\tfont-size: 1em;\n\twidth: 100%;\n}\n\n.tasks>input{\n\theight: 2em;\n\twidth: 2em;\n}\n\n.tasks>section{\n\tdisplay: flex;\n\theight: 100%;\n\twidth:100%;\n}\n\n.edit{\n\tbackground-image: var(--img-edit);\n}\n\n.delete{\n\tbackground-image: var(--img-trash);\n}\n\n.addTask{\n\tpadding: 0.6em;\n\tmargin-bottom: 0.5em;\n\tfont-size: 0.8em;\n\tjustify-content: center;\n\tgrid-column: 2;\n\ttext-decoration: none;\n\tborder: none;\n\tborder-radius: 0.5em;\n\tcolor: var(--clr-primary);\n\tbackground-color: var(--clr-accent);\n\ttransition: 0.5s;\n}\n\n.addTask:hover{\n\tbackground-color: var(--clr-accent-light);\n}\n\n\t/*\t====================================\n\t\t8.3. Main Edit Section Global Styles\n\t\t==================================== */\n\n#editTask>*{\n\tplace-self: center;\n}\n\n#editTask>section>*{\n\theight: auto;\n\twidth: 90%;\n\ttransition: 0.5s;\n}\n\n#editTask>.done-cancelSection>*:hover{\n\tbackground-color: var(--clr-secondary-opacity-light);\n}\n\n#editTask>.done-cancelSection>*{\n\twidth: auto;\n\theight: auto;\n\tflex-grow: 1;\n}\n\n\t/*\t============================================\n\t\t8.4. Main Edit Section Target Element Styles\n\t\t============================================ */\n\n#editTaskContainer{\n\twidth: 100%;\n\tpadding: 0;\n\tgrid-column: span 4;\n}\n\n#editTask{\n\tdisplay: grid;\n\tmargin: auto;\n\twidth: 80%;\n\tpadding: 0;\n\tborder: 0.2em inset var(--clr-accent);\n\tgrid-template-columns: repeat(3, 1fr);\n\tcolumn-gap: 0.5em;\n}\n\n#editTask>section{\n\tdisplay: flex;\n\tflex-direction: column;\n\theight: 100%;\n\twidth: 100%;\n}\n\n#editTask>section>label{\n\tcolor: var(--clr-secondary);\n\tplace-self: center;\n\tfont-size: 1em;\n\twidth: 100%;\n}\n\n#editTask>section>textarea{\n\tresize: vertical;\n}\n\n#editTask>.done-cancelSection{\n\tflex-direction: row;\n}\n\n.done{\n\tbackground-image: var(--img-done);\n}\n\n.cancel{\n\tbackground-image: var(--img-cancel);\n}\n\n/*\t=======================\n\t*. Footer Style Section\n\t======================= */\n\n#footerSection{\n\tposition: fixed;\n\tleft: 0;\n\tbottom: 0;\n\twidth: 100%;\n\tbackground-color: var(--clr-secondary);\n\tcolor: var(--clr-primary);\n\ttext-align: center;\n}\n\n/*\t======================\n\t*. Media Query Section\n\t====================== */\n\n@media only screen and (min-width: 750px) {\n\n\t/*\t=========================\n\t\t*.1. Global Media Queries\n\t\t========================= */\n\n\tbody {\n\t\tbackground-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n\t}\n\n\t/*\t====================================\n\t\t*.2. pageGridContainer Media Queries\n\t\t==================================== */\n\n\t#pageGridContainer{\n\t\tgrid-template-areas: \n\t\t\"header header header header\"\n\t\t\"sidebar main main main\"\n\t\t\"footer footer footer footer\";\n\t}\n\n\n\t/*\t=====================================\n\t\t*.3. Navigation Section Media Queries\n\t\t===================================== */\n\n\t#mainSection{\n\t\tmargin: 3em 1em 0em;\n\t}\n\n\t#mainSection>*{\n\t\tmin-width: 75%;\n\t}\n\n\t#navSection>h1{\n\t\ttransform: rotate(135deg);\n\t}\n\n\t/*\t==========================================\n\t\t*.4. Navigation Menu Section Media Queries\n\t\t========================================== */\n\n\t#navMenuSection{\n\t\ttransform: translate(0, 0);\n\t}\n\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* Table of Contents\n\t1. Imports\n\t2. Global Styles\n\t\t2.1. Global Styles Variables\n\t\t\t2.1.1. Global Styles Variables-Color\n\t\t\t2.1.2. Global Styles Variables-Font\n\t\t\t2.1.3. Global Styles Images\n\t\t2.2. Global Styles Global\n\t3. pageGridContainer Styles\n\t\t3.1. pageGridContainer Global Styles\n\t\t3.2. pageGridContainer Target Element Styles\n\t4. Sign-in Styles\n\t\t4.1. Sign-in Global Styles\n\t\t4.2. Sign-in Target Element Styles\n\t5. Sign-Up Styles\n\t\t5.1. Sign-Up Global Styles\n\t\t5.2. Sign-Up Target Element Styles\n\t6. Navigation Section Styles\n\t\t6.1. Navigation Section Global Styles\n\t\t6.2. Navigation Section Target Element Styles\n\t7. Navigation Menu Section Styles\n\t\t7.1. Navigation Menu Global Styles\n\t\t7.2. Navigation Menu Target Element Styles\n\t\t7.3. Navigation Edit Section Global Styles\n\t\t7.4. Navigation Edit Section Target Element Styles\n\t8. Main Section Styes\n\t\t8.1. Main Section Global Styles\n\t\t8.2. Main Section Target Element Styles\n\t\t8.3. Main Edit Section Global Styles\n\t\t8.4. Main Edit Section Target Element Styles\n\t*. Footer Style Section\n\t*. Media Query Section\n\t\t*.1. Global Media Queries\n\t\t*.2. pageGridContainer Media Queries\n\t\t*.3. Navigation Section Media Queries\n\t\t*.4. Navigation Menu Section Media Queries\n\n*/\n\n/*\t==========\n\t1. Imports\n\t========== */\n\n@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\n\n/*\t================\n\t2. Global Styles\n\t================ */\n\n\t/*\t============================\n\t\t2.1. Global Styles Variables\n\t\t============================ */\n\n:root{\n\n\t\t/*\t====================================\n\t\t\t2.1.1. Global Styles Variables-Color\n\t\t \t==================================== */\n\n\t--clr-primary:rgb(255,255,255);\n\t--clr-primary-opacity-light:rgb(255,255,255, 0.6);\n\t--clr-primary-opacity-mid:rgb(255,255,255, 0.8);\n\t--clr-primary-opacity-dark:rgb(255,255,255, 0.9);\n\n\t--clr-secondary:rgb(14, 9, 9);\n\t--clr-secondary-opacity-light:rgb(14, 9, 9, 0.28);\n\t--clr-secondary-opacity-mid:rgb(14, 9, 9, 0.4);\n\t--clr-secondary-opacity-dark:rgb(14, 9, 9, 0.5);\n\n\t--clr-accent:rgb(174,31,66);\n\t--clr-accent-light:rgb(224,60,101);\n\t\t\t\n\t\t/*\t===================================\n\t\t\t2.1.2. Global Styles Variables-Font\n\t\t \t=================================== */\n\n\t--ff-primary:'Roboto', sans-serif;\n\n\t/*\t\t===========================\n\t\t\t2.1.3. Global Styles Images\n\t\t \t=========================== */\n\n\t--img-trash:url('./images/icons8-trash-can.svg');\n\t--img-edit:url('./images/icons8-edit.svg');\n\t--img-done:url('./images/icons8-done.svg');\n\t--img-cancel:url('./images/icons8-cancel.svg');\n}\n\n\t.edit,.delete,.done,.cancel{\n\t\tbackground-repeat: no-repeat;\n\t\tbackground-size: 100% 100%;\n\t}\n\n\t/*\t=========================\n\t\t2.2. Global Styles Global\n\t\t========================= */\n/* \n\tCSS Styling Reset from\n\thttp://meyerweb.com/eric/tools/css/reset/ \n   \tv2.0 | 20110126\n   \tLicense: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\n\nbody {\n\tline-height: 1;\n\tmin-height: 100vh;\n\tfont-family: var(--ff-primary);\n\ttext-align: center;\n\tbackground-image: url('./images/ToDoAppBackground-cropped-mobile.jpg');\n\tbackground-repeat: no-repeat;\n\tbackground-size: 100% 100%; \n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/*\t===========================\n\t3. pageGridContainer Styles\n\t=========================== */\n\n\t/*\t====================================\n\t\t3.1. pageGridContainer Global Styles\n\t\t==================================== */\n\n#pageGridContainer{\n\tdisplay: grid;\n\tgrid-template-columns: repeat(4, 1fr) ;\n  \tgrid-template-rows: auto;\n  \tgrid-template-areas: \n    \"header header header header\"\n    \"main main main main\"\n    \"footer footer footer footer\";\n}\n\n\t/*\t============================================\n\t\t3.2. pageGridContainer Target Element Styles\n\t\t============================================ */\n\n#navSection{\n\tgrid-area: header;\n}\n#navMenuSection{\n\tgrid-area: sidebar;\n}\n#mainSection{\n\tgrid-area: main;\n}\n#footerSection{\n\tgrid-area: footer;\n}\n\n/*\t=================\n\t4. Sign-in Styles\n\t================= */\n\n\t/*\t==========================\n\t\t4.1. Sign-in Global Styles\n\t\t========================== */\n\nform{\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n}\n\n#signIn-Container-Inner, #signIn-Container-Outer{\n\tdisplay: flex;\n}\n\n#signIn-Container-Outer{\n\theight: 100vh;\n\tjustify-content: center;\n}\n\n#signIn-Container-Inner{\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: space-evenly;\n\tmin-width: 35%;\n\tmax-width: 80%;\n\tmargin: 8.5em 3em 13em;\n\tbackground-color: var(--clr-primary-opacity-mid);\n\tborder-radius: 23px;\n}\n\n#signIn-Form-Container{\n\tmargin:0 1em;\n\tpadding: 1.5em 0;\n\tmin-width: 60%;\n\tmax-width: 80%;\n\tbackground-color: var(--clr-secondary-opacity-mid);\n}\n\n\t/*\t==================================\n\t\t4.2. Sign-in Target Element Styles\n\t\t================================== */\n\n#appTitle{\n\tfont-size: 2em;\n\tmargin: 0.5em;\n\tcolor: var(--clr-secondary);\n}\n\nform > input, form > label{\n\talign-self: center;\n\tmin-width: 60%;\n\tmax-width: 80%;\n}\n\nform >label{\n\tfont-size: 1.5em;\n\tcolor:var(--clr-primary);\n}\n\ninput[type=button], #demoButton{\n\tmargin: 0.3em;\n\tborder: none;\n\tcursor: pointer;\n\tfont-size: 1.2em;\n\tpadding: 0.3em 3em;\n\tborder-radius: 1em;\n\ttext-decoration: none;\n\tcolor: var(--clr-primary);\n\tbackground-color: var(--clr-accent);\n\ttransition: 0.5s;\n}\n\ninput[type=button]:hover, #demoButton:hover{\n\tbackground-color: var(--clr-accent-light);\n}\n\ninput[type=text], input[type=password]{\n\tmargin: 0.5em;\n\tpadding: 0.5em 1em;\n\tborder: none;\n\ttext-decoration: none;\n\tbackground: var(--clr-secondary-opacity-dark);\n\tborder-radius: 1em;\n}\n\n#demoButton{\n\tpadding: 0.3em 2em;\n}\n\n/*\t=================\n\t5. Sign-Up Styles\n\t================= */\n\n\n\t/*\t==========================\n\t\t5.1. Sign-Up Global Styles\n\t\t========================== */\n\nform{\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n}\n\n#signUp-Container-Inner, #signUp-Container-Outer{\n\tdisplay: flex;\n}\n\n#signUp-Container-Outer{\n\theight: 100vh;\n\tjustify-content: center;\n}\n\n#signUp-Container-Inner{\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: space-evenly;\n\tmin-width: 35%;\n\tmax-width: 80%;\n\tmargin: 8.5em 3em 13em;\n\tbackground-color: var(--clr-primary-opacity-mid);\n\tborder-radius: 23px;\n}\n\n#signUp-Form-Container{\n\tmargin:0 1em;\n\tpadding: 1.5em 0;\n\tmin-width: 60%;\n\tmax-width: 80%;\n\tbackground-color: var(--clr-secondary-opacity-mid);\n}\n\t\t\n\t/*\t==================================\n\t\t5.2. Sign-Up Target Element Styles\n\t\t================================== */\n\t\t\n#appTitle{\n\tfont-size: 2em;\n\tcolor: var(--clr-secondary);\n\t\n}\n\nform > input, form > label{\n\talign-self: center;\n\tmin-width: 60%;\n\tmax-width: 80%;\n}\n\nform >label{\n\tfont-size: 1.5em;\n\tcolor:var(--clr-primary);\n}\n\ninput[type=button], #demoButton{\n\tmargin: 0.3em;\n\tborder: none;\n\tcursor: pointer;\n\tfont-size: 1.2em;\n\tpadding: 0.3em 3em;\n\tborder-radius: 1em;\n\ttext-decoration: none;\n\tcolor: var(--clr-primary);\n\tbackground-color: var(--clr-accent);\n\ttransition: 0.5s;\n}\n\ninput[type=button]:hover, #demoButton:hover{\n\tbackground-color: var(--clr-accent-light);\n}\n\ninput[type=text]{\n\tmargin: 0.5em;\n\tpadding: 0.5em 1em;\n\tborder: none;\n\ttext-decoration: none;\n\tbackground: var(--clr-secondary-opacity-dark);\n\tborder-radius: 1em;\n}\n\n#demoButton{\n\tpadding: 0.3em 2em;\n}\n\n/*\t============================\n\t6. Navigation Section Styles\n\t============================ */\n\t\n\t/*\t=====================================\n\t\t6.1. Navigation Section Global Styles\n\t\t===================================== */\n\n#navSection{\n\tdisplay: flex;\n\tjustify-content: flex-start;\n\tfont-size: 2em;\n\tposition: fixed;\n\ttop: 0;\n\twidth: 100vw;\n\tcolor: var(--clr-secondary);\n\tbackground-color: var(--clr-primary-opacity-light);\n}\n\n\t/*\t=============================================\n\t\t6.2. Navigation Section Target Element Styles\n\t\t============================================= */\n\n#navSection >h1{\n\tmargin-left: 0.2em;\n\tfont-size: 2em;\n\ttransition: 0.5s;\n\tcursor: pointer;\n\tuser-select: none;\n}\n\n\n#navSection >h2{\n\tposition: absolute;\n\ttop:50%;\n\tleft:50%;\n\ttransform: translate(-50%, -50%);\n}\n\n\n/*\t=================================\n\t7. Navigation Menu Section Styles\n\t================================= */\n\n\t/*\t==================================\n\t\t7.1. Navigation Menu Global Styles\n\t\t================================== */\n#navMenuSection>*{\n\tmargin-top: 1em;\n}\n\n.navMenuSectionHide{\n\ttransform: translate(-100%, 0);\n}\n\n#navMenuSection{\n\tposition: fixed;\n\ttop: 2em;\n\theight: 100vh;\n\tfont-size: 2em;  \n\twidth: 25%;\n\tcolor: var(--clr-secondary);\n\tbackground-color: var(--clr-primary);\n\ttransition: 0.5s;\n}\n\n.navSectionIndicatorActive{\n\ttransform: rotate(135deg);\n}\n\n\n#dateSelector{\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n#projectSelector{\n\tfont-size: 0.5em;\n}\n\n#projectSelector>ul{\n\tmargin: 1em;\n\tlist-style-type: disc;\n}\n\n#projectSelector>ul>section>*{\n\tflex-grow: 1;\n\ttransition: 0.5s;\n}\n\n#projectSelector>ul>section>*:hover{\n\tbackground-color: var(--clr-secondary-opacity-light);\n}\n\n\t/*\t==========================================\n\t\t7.2. Navigation Menu Target Element Styles\n\t\t========================================== */\n\n#defaultSelector > h2{\n\tmargin: 0.5em;\n}\n\n#dateSelector > p{\n\tfont-size: 0.75em;  \n}\n\n#dateSelector>input{\n\tdisplay: block;\n\tmargin: 1em;\n\ttext-align: center;\n}\n\n#projectSelector>h2{\n\tfont-size: 1.75em;\n}\n\n#projectSelector>ul>li{\n\tmargin: 0.5em;\n\n}\n\n#projectSelector>ul>section{\n\tdisplay: flex;\n\tflex-direction: row;\n\theight: 2em;\n}\n\n#projectSelector>ul>section>.edit{\n\tbackground-image: url('./images/icons8-edit.svg');\n\tbackground-repeat: no-repeat;\n\tbackground-size: 100% 100%;\n}\n\n#projectSelector>ul>section>.delete{\n\tbackground-image: url('./images/icons8-trash-can.svg');\n\tbackground-repeat: no-repeat;\n\tbackground-size: 100% 100%;\n}\n\n#projectSelector>ul>.addProject{\n\tpadding: 0.6em;\n\tfont-size: 1.2em;\n\tmargin-top: 0.5em;\n\ttext-decoration: none;\n\tborder: none;\n\tborder-radius: 0.5em;\n\tcolor: var(--clr-primary);\n\tbackground-color: var(--clr-accent);\n\ttransition: 0.5s;\n}\n\n#projectSelector>ul>.addProject:hover{\n\tbackground-color: var(--clr-accent-light);\n}\n\n/*\t==========================================\n\t7.3. Navigation Edit Section Global Styles\n\t========================================== */\n\n#editProjectContainer{\n\tdisplay: flex;\n\tborder: 0.2em inset var(--clr-accent);\n\tflex-direction: column;\n}\n\n#editProjectContainer>*{\n\tflex-grow: 1;\n}\n\n#editProjectContainer>.done-cancelSection>*{\n\twidth: 100%;\n\theight: 2em;\n}\n\n\t/*\t==============================================\n\t7.4. Navigation Edit Section Target Element Styles\n\t================================================== */\n\n#editProjectContainer{\n\tdisplay: flex;\n\tborder: 0.2em inset var(--clr-accent);\n\tflex-direction: column;\n}\n\n#editProjectContainer>.done-cancelSection{\n\tdisplay: flex;\n\tjustify-content: space-evenly;\n\ttransition: 0.5s;\n}\n\n#editProjectContainer>.editTaskSelect>input{\n\twidth: 80%;\n}\n\n#editProjectContainer>.done-cancelSection>*:hover{\n\tbackground-color: var(--clr-secondary-opacity-light);\n}\n\n/*\t=====================\n\t8. Main Section Styes\n\t===================== */\n\n\t/*\t===============================\n\t\t8.1. Main Section Global Styles\n\t\t=============================== */\n\n#mainSection>*{\n\tmin-width: 80%;\n}\n\n#mainSection, .items, .tasks{\n\tdisplay: grid;\n}\n\n#mainSection{\n\tdisplay: flex;\n\tflex-direction: column;\n\tmargin-top: 3em;\n\tpadding-bottom: 2em;\n\tgap: 0.5em 0em;\n\tfont-size: 1.5em;\n\tcolor: var(--clr-secondary);\n\tbackground-color: var(--clr-primary-opacity-dark);\n}\n\n.items{\n\tgrid-template-columns: repeat(3, 1fr);\n}\n\n.tasks{\n\tgrid-template-columns: repeat(4, 1fr);\n}\n\n.items > *{\n\tgrid-column: 1 / span 3;\n}\n\n.items{\n\tcolor: var(--clr-secondary);\n\tplace-self: center;\n\tgap: 0.5em 0em;\n\tmargin-bottom: 0.5em;\n\tbackground: var(--clr-secondary-opacity-light);\n}\n\n.tasks>*{\n\tplace-self: center;\n\tpadding: 0.2em;\n}\n\n.tasks>section>*{\n\theight: 2em;\n\twidth: 2em;\n\tflex-grow: 1;\n\ttransition: 0.5s;\n}\n\n.tasks>section>*:hover{\n\tbackground-color: var(--clr-secondary-opacity-light);\n}\n\n\t/*\t=======================================\n\t\t8.2. Main Section Target Element Styles\n\t\t======================================= */\n\n#mainSection > h2{\n\tfont-size: 1.5em;\n\tpadding: 0.5em;\n}\n\n.items>h2{\n\tfont-size: 1.5em;\n\tpadding-top: 0.2em;\n}\n\n.tasks>label{\n\tcolor: var(--clr-secondary);\n\tplace-self: center;\n\tfont-size: 1em;\n\twidth: 100%;\n}\n\n.tasks>input{\n\theight: 2em;\n\twidth: 2em;\n}\n\n.tasks>section{\n\tdisplay: flex;\n\theight: 100%;\n\twidth:100%;\n}\n\n.edit{\n\tbackground-image: var(--img-edit);\n}\n\n.delete{\n\tbackground-image: var(--img-trash);\n}\n\n.addTask{\n\tpadding: 0.6em;\n\tmargin-bottom: 0.5em;\n\tfont-size: 0.8em;\n\tjustify-content: center;\n\tgrid-column: 2;\n\ttext-decoration: none;\n\tborder: none;\n\tborder-radius: 0.5em;\n\tcolor: var(--clr-primary);\n\tbackground-color: var(--clr-accent);\n\ttransition: 0.5s;\n}\n\n.addTask:hover{\n\tbackground-color: var(--clr-accent-light);\n}\n\n\t/*\t====================================\n\t\t8.3. Main Edit Section Global Styles\n\t\t==================================== */\n\n#editTask>*{\n\tplace-self: center;\n}\n\n#editTask>section>*{\n\theight: auto;\n\twidth: 90%;\n\ttransition: 0.5s;\n}\n\n#editTask>.done-cancelSection>*:hover{\n\tbackground-color: var(--clr-secondary-opacity-light);\n}\n\n#editTask>.done-cancelSection>*{\n\twidth: auto;\n\theight: auto;\n\tflex-grow: 1;\n}\n\n\t/*\t============================================\n\t\t8.4. Main Edit Section Target Element Styles\n\t\t============================================ */\n\n#editTaskContainer{\n\twidth: 100%;\n\tpadding: 0;\n\tgrid-column: span 4;\n}\n\n#editTask{\n\tdisplay: grid;\n\tmargin: auto;\n\twidth: 80%;\n\tpadding: 0;\n\tborder: 0.2em inset var(--clr-accent);\n\tgrid-template-columns: repeat(3, 1fr);\n\tcolumn-gap: 0.5em;\n}\n\n#editTask>section{\n\tdisplay: flex;\n\tflex-direction: column;\n\theight: 100%;\n\twidth: 100%;\n}\n\n#editTask>section>label{\n\tcolor: var(--clr-secondary);\n\tplace-self: center;\n\tfont-size: 1em;\n\twidth: 100%;\n}\n\n#editTask>section>textarea{\n\tresize: vertical;\n}\n\n#editTask>.done-cancelSection{\n\tflex-direction: row;\n}\n\n.done{\n\tbackground-image: var(--img-done);\n}\n\n.cancel{\n\tbackground-image: var(--img-cancel);\n}\n\n/*\t=======================\n\t*. Footer Style Section\n\t======================= */\n\n#footerSection{\n\tposition: fixed;\n\tleft: 0;\n\tbottom: 0;\n\twidth: 100%;\n\tbackground-color: var(--clr-secondary);\n\tcolor: var(--clr-primary);\n\ttext-align: center;\n}\n\n/*\t======================\n\t*. Media Query Section\n\t====================== */\n\n@media only screen and (min-width: 750px) {\n\n\t/*\t=========================\n\t\t*.1. Global Media Queries\n\t\t========================= */\n\n\tbody {\n\t\tbackground-image: url('./images/ToDoAppBackground-cropped.jpg');\n\t}\n\n\t/*\t====================================\n\t\t*.2. pageGridContainer Media Queries\n\t\t==================================== */\n\n\t#pageGridContainer{\n\t\tgrid-template-areas: \n\t\t\"header header header header\"\n\t\t\"sidebar main main main\"\n\t\t\"footer footer footer footer\";\n\t}\n\n\n\t/*\t=====================================\n\t\t*.3. Navigation Section Media Queries\n\t\t===================================== */\n\n\t#mainSection{\n\t\tmargin: 3em 1em 0em;\n\t}\n\n\t#mainSection>*{\n\t\tmin-width: 75%;\n\t}\n\n\t#navSection>h1{\n\t\ttransform: rotate(135deg);\n\t}\n\n\t/*\t==========================================\n\t\t*.4. Navigation Menu Section Media Queries\n\t\t========================================== */\n\n\t#navMenuSection{\n\t\ttransform: translate(0, 0);\n\t}\n\n}"],"sourceRoot":""}]);
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
            classId: 'navMenuSectionHide',
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
        }
        return contentList;
    };

    // Returns Nav Element Section
    const navElementSection = () => {
        let contentList = NavSectionContentList(),
            element = _global__WEBPACK_IMPORTED_MODULE_0__.globaljs.newElement(navObjectList.navSection);

        for (let i = 0; i < contentList.length; i++) {
            element.appendChild(contentList[i]);
        }

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
    const edit_DeleteSection = (projectNumber) => {
        let element = _global__WEBPACK_IMPORTED_MODULE_0__.globaljs.newElement(navObjectList.section),
            edit = _global__WEBPACK_IMPORTED_MODULE_0__.globaljs.newElement(navObjectList.edit),
            deLete = _global__WEBPACK_IMPORTED_MODULE_0__.globaljs.newElement(navObjectList.delete);

            edit.id = `editProj${projectNumber}`
            deLete.id = `deleteProj${projectNumber}`

        element.append(edit, deLete);

        return element;
    };

    // Returns Project List Section elements
    const projectULSection = (list) => {
        let containerULElement = _global__WEBPACK_IMPORTED_MODULE_0__.globaljs.newElement(navObjectList.projectList),
            button = _global__WEBPACK_IMPORTED_MODULE_0__.globaljs.newElement(navObjectList.button);

        for (let i = 0; i < list.projectTitles.length; i++) {
            let item = _global__WEBPACK_IMPORTED_MODULE_0__.globaljs.newElement(navObjectList.projectInfo.item),
                edit_delete = edit_DeleteSection(i);
            item.innerHTML = list.projectTitles[i];
            containerULElement.append(item, edit_delete)

        }

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

    return { createSection };
})();

/***/ }),

/***/ "./src/NavSectionFiles/navSectionFunction.js":
/*!***************************************************!*\
  !*** ./src/NavSectionFiles/navSectionFunction.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "navSectionFunction": () => (/* binding */ navSectionFunction)
/* harmony export */ });
const navSectionFunction = (() => {

    const navFunction = () => {
        // Cache Dom List
        let navSection = document.getElementById('navSection'),
            navSectionH1 = navSection.getElementsByTagName('h1'),
            navMenuSection = document.getElementById('navMenuSection')
            
            // editButton = document.querySelectorAll(`[id^='editProj']`),
            // matches = editButton[0].id.match(/\d+/);
            // console.log(editButton[0].id)
            // console.log(matches[0])



        //Function List
        const iconRotate = () =>{
            navSectionH1[0].classList.toggle('navSectionIndicatorActive')

            navMenuSection.classList.toggle('navMenuSectionHide')
        }


        //Event Binds
        navSectionH1[0].addEventListener('click', iconRotate)
        
    };

    return { navFunction};

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
        if (item.htmlString) { element.innerHTML = item.htmlString; }
        if (item.classId) { element.setAttribute('class', item.classId)}
        if (item.id) { element.setAttribute('id', item.id)}
        if (item.for) { element.setAttribute('for', item.for)}
        if (item.type) { element.setAttribute('type', item.type)}
        if (item.name) { element.setAttribute('name', item.name)}
        if (item.value) { element.setAttribute('value', item.value)}
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

/***/ "./src/mainSectionFiles/mainSectionCreation.js":
/*!*****************************************************!*\
  !*** ./src/mainSectionFiles/mainSectionCreation.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mainSectionCreation": () => (/* binding */ mainSectionCreation)
/* harmony export */ });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global */ "./src/global.js");
/* harmony import */ var _userStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../userStorage */ "./src/userStorage.js");



const mainSectionCreation = (() => {

    // Sign in Object List
    const mainObjectList = {

        mainSection: {
            tag: 'div',
            id: 'mainSection',
        },

        mainSectionH2: {
            tag: 'h2',
            htmlString: 'All Tasks',
        },

        taskItem: {
            tag: 'div',
            id: '',
            classId: 'items',
        },

        taskItemH2: {
            tag: 'h2',
            htmlString: '',
        },

        tasksSection: {
            tag: 'div',
            classId: 'tasks',
        },

        taskDefaultItems: {
            item0: {
                tag: 'h1',
                htmlString: 'Complete',
            },
            item1: {
                tag: 'h2',
                htmlString: 'Tasks',
            },
            item2: {
                tag: 'h2',
                htmlString: 'Due Date',
            },
            item3: {
                tag: 'h2',
                htmlString: 'Edit',
            },
        },

        items: {
            item0: {
                tag: 'input',
                classId: '',
                type: 'checkbox',
                id: '',
                name: '',
            },
            item1: {
                tag: 'label',
                classId: '',
                for: '',
                htmlString: '',
            },
            item2: {
                tag: 'p',
                classId: '',
                htmlString: '',
            }
        },

        section: {
            tag: 'section',
            classId: '',
        },

        edit: {
            tag: 'div',
            id: 'edit',
            classId: 'edit',
        },

        delete: {
            tag: 'div',
            id: 'delete',
            classId: 'delete',
        },

        addTaskBtton: {
            tag: 'button',
            classId: 'addTask',
            htmlString: 'Add Task',
        },

        footerSection: {
            tag: 'div',
            id: 'footerSection',
        },

        footerContent: {
            tag: 'h2',
            htmlString: 'Made by Andrew Humphries',
        },

    };

    // Fuction List

    // Input Element
    const inputElementCreation = (taskNumber) => {
        let element = _global__WEBPACK_IMPORTED_MODULE_0__.globaljs.newElement(mainObjectList.items.item0)

        element.setAttribute('class', `task${taskNumber}`)
        element.setAttribute('id', `task${taskNumber}`)
        element.setAttribute('name', `task${taskNumber}`)

        return element
    }

    // Label Element
    const labelElementCreation = (taskNumber, htmlString) => {
        let element = _global__WEBPACK_IMPORTED_MODULE_0__.globaljs.newElement(mainObjectList.items.item1)

        element.setAttribute('class', `task${taskNumber}`)
        element.setAttribute('for', `task${taskNumber}`)
        element.innerHTML = htmlString;

        return element
    }

    // Date Element
    const dateElementCreation = (taskNumber, htmlString) => {
        let element = _global__WEBPACK_IMPORTED_MODULE_0__.globaljs.newElement(mainObjectList.items.item2)

        element.setAttribute('class', `task${taskNumber}`)
        element.innerHTML = htmlString;

        return element
    }

    // Edit/delete Section
    const edit_DeleteSection = (className) => {
        let element = _global__WEBPACK_IMPORTED_MODULE_0__.globaljs.newElement(mainObjectList.section),
            edit = _global__WEBPACK_IMPORTED_MODULE_0__.globaljs.newElement(mainObjectList.edit),
            deLete = _global__WEBPACK_IMPORTED_MODULE_0__.globaljs.newElement(mainObjectList.delete);

        element.setAttribute('class', `task${className}`)
        element.append(edit, deLete);

        return element;
    };

    // Default Task Creation
    const taskElementCreation = (taskNumber, taskDueDate, taskName, taskComplete = false) => {
        let elementList = [],
            input = inputElementCreation(taskNumber),
            label = labelElementCreation(taskNumber, taskName),
            pTag = dateElementCreation(taskNumber, taskDueDate),
            section = edit_DeleteSection(taskNumber)

        label.checked = taskComplete
        elementList.push(input, label, pTag, section)
        return elementList
    }

    // Tasks Section Default Creation
    const tasksDefaultSection = (taskName, userData = _userStorage__WEBPACK_IMPORTED_MODULE_1__.userStorage.demo) => {
        let element = _global__WEBPACK_IMPORTED_MODULE_0__.globaljs.newElement(mainObjectList.tasksSection),
            tasks = taskElementObjectList(taskName, userData)

        for (let i = 0; i < Object.keys(mainObjectList.taskDefaultItems).length; i++) {
            let defaultItem = _global__WEBPACK_IMPORTED_MODULE_0__.globaljs.newElement(mainObjectList.taskDefaultItems[`item${i}`]);

            element.appendChild(defaultItem)
        }

        for (let i = 0; i < Object.keys(tasks).length; i++) {
            let task = tasks[`task${i}`]

            for (let x = 0; x < task.length; x++) {
                element.appendChild(task[x]);
                
            }
        }

        return element
    }

    // Item Section Creation
    const itemSectionCreation = (itemID, h2Title, userData = _userStorage__WEBPACK_IMPORTED_MODULE_1__.userStorage.demo) => {
        let element = _global__WEBPACK_IMPORTED_MODULE_0__.globaljs.newElement(mainObjectList.taskItem),
            taskH2 = _global__WEBPACK_IMPORTED_MODULE_0__.globaljs.newElement(mainObjectList.taskItemH2),
            tasks = tasksDefaultSection(h2Title, userData),
            addTask = _global__WEBPACK_IMPORTED_MODULE_0__.globaljs.newElement(mainObjectList.addTaskBtton)

        taskH2.innerHTML = h2Title
        element.id = `item${itemID}`

        element.append(taskH2, tasks, addTask)

        return element
    }

    // Footer Section
    const footerSection = () => {
        let element = _global__WEBPACK_IMPORTED_MODULE_0__.globaljs.newElement(mainObjectList.footerSection),
            content = _global__WEBPACK_IMPORTED_MODULE_0__.globaljs.newElement(mainObjectList.footerContent)

        element.appendChild(content)

        return element
    }


    // Task Element List 

    const taskElementObjectList = (itemName, userData = _userStorage__WEBPACK_IMPORTED_MODULE_1__.userStorage.demo) => {
        let taskObjectList = {},
            taskNumber = userData.projectTitles.indexOf(itemName)

        for (let i = 0; i < userData[`item${taskNumber}`].taskList.length; i++) {
            let dueDate = userData[`item${taskNumber}`].tasks[`task${i}`].dueDate,
                taskName = userData[`item${taskNumber}`].taskList[i],
                taskComplete = userData[`item${taskNumber}`].tasks[`task${i}`].complete

            taskObjectList[`task${i}`] = taskElementCreation(i, dueDate, taskName, taskComplete);
        }
        return taskObjectList
    }

    // Item Section Element List
    const itemSectionElementList = (userData = _userStorage__WEBPACK_IMPORTED_MODULE_1__.userStorage.demo) => {
        let itemListObject = {}

        for (let i = 0; i < userData.projectTitles.length; i++) {
            let itemName = userData.projectTitles[i]

            itemListObject[`item${i}`] = itemSectionCreation(i, itemName, userData);

        }

        return itemListObject
    }



    // Main Section Creation
    const createSection = (userData = _userStorage__WEBPACK_IMPORTED_MODULE_1__.userStorage.demo) => {
        let element = _global__WEBPACK_IMPORTED_MODULE_0__.globaljs.newElement(mainObjectList.mainSection),
            sectionH2 = _global__WEBPACK_IMPORTED_MODULE_0__.globaljs.newElement(mainObjectList.mainSectionH2),
            items = itemSectionElementList(userData),
            footer = footerSection()

        element.appendChild(sectionH2)

        for (let i = 0; i < Object.keys(items).length; i++) {
            element.appendChild(items[`item${i}`])
        }

        element.appendChild(footer)

        return element
    }

    return { createSection};

})();

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
        }
        return contentList;
    };

    //Returns Form Element Section
    const formElementSection = () => {
        let contentList = formElementContentList(),
            element = _global__WEBPACK_IMPORTED_MODULE_0__.globaljs.newElement(SignInObjectList.signinForm);

        for (let i = 0; i < contentList.length; i++) {
            element.appendChild(contentList[i]);
        }

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
        }

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


    return { createSection};
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

    const signInFunction = () => {
        // Cache Dom List
        let info = document.getElementById('userInfo'),
            signInButton = document.getElementById('signInButton'),
            signUpButton = document.getElementById('signUpButton'),
            signInContainer = document.getElementById('signIn-Container-Outer');

        //Function List
        const userValidation = (userToValidate) => {
            if (_userStorage__WEBPACK_IMPORTED_MODULE_1__.userStorage.users.userList.includes(userToValidate)) {
                return true
            } else {
                return false
            }
        };

        const passwordValidation = (user, passwordToValidate) => {
            if (_userStorage__WEBPACK_IMPORTED_MODULE_1__.userStorage.users[user].password == passwordToValidate) {
                return true
            } else {
                return false
            }
        };

        const signInValidation = () => {
            if (userValidation(info.elements['userName'].value)) {

                if (passwordValidation(info.elements['userName'].value, info.elements['password'].value)) {
                } else {
                    alert('Password does not match');
                }

            } else {
                alert('User ID does not match');
            }
        };

        //Event Binds
        signInButton.addEventListener('click', signInValidation)
        signUpButton.addEventListener('click', function () {
            _global__WEBPACK_IMPORTED_MODULE_0__.globaljs.render.removeElement(signInContainer);
            _signUpSectionFiles_signUpSectionCreation_js__WEBPACK_IMPORTED_MODULE_2__.signUpSectionCreation.createSection();
            _signUpSectionFiles_signUpSectionFunction__WEBPACK_IMPORTED_MODULE_3__.signUpSectionFunction.signUpFunction()
        });

    };

    return { signInFunction };

})();


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
        }
        return contentList;
    };
      
    //Returns Form Element Section
    const formElementSection = () => {
        let contentList = formElementContentList(),
            element = _global__WEBPACK_IMPORTED_MODULE_0__.globaljs.newElement(SignUpObjectList.signUpForm);

        for (let i = 0; i < contentList.length; i++) {
            element.appendChild(contentList[i]);
        }

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


    return{createSection};
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

    return{signUpFunction}
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
            password : 'Andrew',
            userStorageInfo: 'demo'
        }
    };

    const demo = {
        user: 'Andrew',
        projectTitles: ['Home Chores', 'Work', 'Food Prep'],

        item0: {
            taskList: ['Laundry', 'Vacuum', 'Dishes'],
            tasks: {
                task0: {
                    dueDate: '11/26/22',
                    complete: false,
                },
                task1: {
                    dueDate: '11/26/22',
                    complete: false,
                },
                task2: {
                    dueDate: '11/26/22',
                    complete: false,
                }
            }
        },
        item1: {
            taskList: ['Check E-mail', 'Update Project', 'Team Meeting'],
            tasks: {
                task0: {
                    dueDate: '11/26/22',
                    complete: false,
                },
                task1: {
                    dueDate: '11/26/22',
                    complete: false,

                },
                task2: {
                    dueDate: '11/26/22',
                    complete: false,
                }
            }
        },
        item2: {
            taskList: ['Thaw Meat', 'Cut Vegetables', 'Cook Rice'],
            tasks: {
                task0: {
                    dueDate: '11/26/22',
                    complete: false,
                },
                task1: {
                    dueDate: '11/26/22',
                    complete: false,
                },
                task2: {
                    dueDate: '11/26/22',
                    complete: false,
                }
            }
        },
    }

    const example = {
        user: 'example',
        projectTitles : ['Project Example'],

        item0:{
            taskList:['task Example'],
            tasks:{
                task0:{
                    dueDate:'11/26/22',
                    complete: false,
                },
            }
        },
    }


    const defaultUserList = {
        userList:['example'],

        example:{
            userID:'example',
            password : 'example',
            userStorageInfo: 'example'
        }
    };

    // Collect Project Names Function Store in New Object
    const createDefaultProjectStorage = (user, projectArray) => {
        let  defaultObject = {
            user: user,
            projectTitles: projectArray
        }
        return defaultObject
    }

    // Collect Item Names Store in Object Created by Project Function
    const itemStorageCreation = (object) => {
        for (let i = 0; i < object.projectTitles.length; i++) {
            object[`item${i}`] = {}
        }
        return object
    }

    // Collect Task List and Store in Object Created by Project Function
    // Collects Task List based on Item Number
    const taskArrayStorageCreation = (object, itemNumber) => {
        let taskRetrieval = document.getElementById(`item${itemNumber}`).querySelectorAll(`label`),
            taskArray = []
        
        for (let i = 0; i < taskRetrieval.length; i++) {
            taskArray.push(taskRetrieval[0].innerHTML)
        }

        object[`item${itemNumber}`].taskList = taskArray

        return object
    }

    // Collect Task Data and Store in Object Created by Project Function
    const taskDataCollection = (object, itemNumber) => {
        let itemElement = document.getElementById(`item${itemNumber}`).querySelectorAll(`p`),
            dueDate = itemElement.querySelectorAll(`p`),
            taskStatus = itemElement.querySelectorAll(`input`),
            item = object[`item${itemNumber}`]
        
        for (let i = 0; i < item.taskList.length; i++) {
            item.tasks[`task${i}`].dueDate = dueDate[i].innerHTML
            item.tasks[`task${i}`].complete = taskStatus[i].checked
        }


        return object
    }

    // Collect Project Title Names
    const projectCollection = () => {
        let projectRetrieval = document.getElementById('projectSelector').querySelectorAll(`li`),
        projectArray = []
        
        for (let i = 0; i < projectRetrieval.length; i++) {
            projectArray.push(projectRetrieval[i].innerHTML)
        }

        return projectArray
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
    return { demo, users,example ,checkUsername, checkPassword }
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
/* harmony import */ var _NavSectionFiles_navSectionFunction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NavSectionFiles/navSectionFunction */ "./src/NavSectionFiles/navSectionFunction.js");
/* harmony import */ var _mainSectionFiles_mainSectionCreation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mainSectionFiles/mainSectionCreation */ "./src/mainSectionFiles/mainSectionCreation.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./global */ "./src/global.js");















// console.log('Now time for the JS')

// signInSectionCreation.createSection();

// signInSectionFunction.signInFunction();

// signUpSectionCreation.createSection();
// signUpSectionFunction.signUpFunction();

// navSectionCreation.createSection(Andrew);
// window.localStorage.setItem('Andrew', JSON.stringify(Andrew));

const Andrew = _userStorage__WEBPACK_IMPORTED_MODULE_1__.userStorage.demo

_NavSectionFiles_navSectionCreation__WEBPACK_IMPORTED_MODULE_6__.navSectionCreation.createSection(Andrew);
_NavSectionFiles_navSectionFunction__WEBPACK_IMPORTED_MODULE_7__.navSectionFunction.navFunction();
_mainSectionFiles_mainSectionCreation__WEBPACK_IMPORTED_MODULE_8__.mainSectionCreation.createSection(Andrew)

let pageGridContainer = document.getElementById('pageGridContainer')
pageGridContainer.appendChild(_mainSectionFiles_mainSectionCreation__WEBPACK_IMPORTED_MODULE_8__.mainSectionCreation.createSection(Andrew))
let taskRetrieval = document.getElementById('item0').querySelectorAll(`[class^='task']`)

// console.log(taskRetrieval)

let taskRetrieval1 = document.getElementById('projectSelector').querySelectorAll(`li`)

console.log(taskRetrieval1[0].innerHTML)


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sU0FBUyxPQUFPLFFBQVEsTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLE1BQU0sUUFBUSxNQUFNLFVBQVUsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFFBQVEsT0FBTyxRQUFRLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxRQUFRLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFFBQVEsS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFFBQVEsTUFBTSxRQUFRLE9BQU8sT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxRQUFRLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sUUFBUSxNQUFNLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sUUFBUSxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxNQUFNLFFBQVEsTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxNQUFNLFFBQVEsT0FBTyxRQUFRLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sUUFBUSxNQUFNLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFFBQVEsTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFFBQVEsTUFBTSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUss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aUdBQWdDO0FBQ2hDLCtGQUE4QjtBQUM5QixvR0FBaUM7O0FBRWpDO0FBQ0EsOEJBQThCLG9HQUFpQztBQUMvRDs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvTmF2U2VjdGlvbkZpbGVzL25hdlNlY3Rpb25DcmVhdGlvbi5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9OYXZTZWN0aW9uRmlsZXMvbmF2U2VjdGlvbkZ1bmN0aW9uLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9tYWluU2VjdGlvbkZpbGVzL21haW5TZWN0aW9uQ3JlYXRpb24uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc2lnbkluU2VjdGlvbkZpbGVzL3NpZ25JblNlY3Rpb25DcmVhdGlvbi5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zaWduSW5TZWN0aW9uRmlsZXMvc2lnbkluU2VjdGlvbkZ1bmN0aW9uLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3NpZ25VcFNlY3Rpb25GaWxlcy9zaWduVXBTZWN0aW9uQ3JlYXRpb24uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc2lnblVwU2VjdGlvbkZpbGVzL3NpZ25VcFNlY3Rpb25GdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy91c2VyU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2ljb25zOC10cmFzaC1jYW4uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvaWNvbnM4LWVkaXQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvaWNvbnM4LWRvbmUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvaWNvbnM4LWNhbmNlbC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9Ub0RvQXBwQmFja2dyb3VuZC1jcm9wcGVkLW1vYmlsZS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9Ub0RvQXBwQmFja2dyb3VuZC1jcm9wcGVkLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIFRhYmxlIG9mIENvbnRlbnRzXFxuXFx0MS4gSW1wb3J0c1xcblxcdDIuIEdsb2JhbCBTdHlsZXNcXG5cXHRcXHQyLjEuIEdsb2JhbCBTdHlsZXMgVmFyaWFibGVzXFxuXFx0XFx0XFx0Mi4xLjEuIEdsb2JhbCBTdHlsZXMgVmFyaWFibGVzLUNvbG9yXFxuXFx0XFx0XFx0Mi4xLjIuIEdsb2JhbCBTdHlsZXMgVmFyaWFibGVzLUZvbnRcXG5cXHRcXHRcXHQyLjEuMy4gR2xvYmFsIFN0eWxlcyBJbWFnZXNcXG5cXHRcXHQyLjIuIEdsb2JhbCBTdHlsZXMgR2xvYmFsXFxuXFx0My4gcGFnZUdyaWRDb250YWluZXIgU3R5bGVzXFxuXFx0XFx0My4xLiBwYWdlR3JpZENvbnRhaW5lciBHbG9iYWwgU3R5bGVzXFxuXFx0XFx0My4yLiBwYWdlR3JpZENvbnRhaW5lciBUYXJnZXQgRWxlbWVudCBTdHlsZXNcXG5cXHQ0LiBTaWduLWluIFN0eWxlc1xcblxcdFxcdDQuMS4gU2lnbi1pbiBHbG9iYWwgU3R5bGVzXFxuXFx0XFx0NC4yLiBTaWduLWluIFRhcmdldCBFbGVtZW50IFN0eWxlc1xcblxcdDUuIFNpZ24tVXAgU3R5bGVzXFxuXFx0XFx0NS4xLiBTaWduLVVwIEdsb2JhbCBTdHlsZXNcXG5cXHRcXHQ1LjIuIFNpZ24tVXAgVGFyZ2V0IEVsZW1lbnQgU3R5bGVzXFxuXFx0Ni4gTmF2aWdhdGlvbiBTZWN0aW9uIFN0eWxlc1xcblxcdFxcdDYuMS4gTmF2aWdhdGlvbiBTZWN0aW9uIEdsb2JhbCBTdHlsZXNcXG5cXHRcXHQ2LjIuIE5hdmlnYXRpb24gU2VjdGlvbiBUYXJnZXQgRWxlbWVudCBTdHlsZXNcXG5cXHQ3LiBOYXZpZ2F0aW9uIE1lbnUgU2VjdGlvbiBTdHlsZXNcXG5cXHRcXHQ3LjEuIE5hdmlnYXRpb24gTWVudSBHbG9iYWwgU3R5bGVzXFxuXFx0XFx0Ny4yLiBOYXZpZ2F0aW9uIE1lbnUgVGFyZ2V0IEVsZW1lbnQgU3R5bGVzXFxuXFx0XFx0Ny4zLiBOYXZpZ2F0aW9uIEVkaXQgU2VjdGlvbiBHbG9iYWwgU3R5bGVzXFxuXFx0XFx0Ny40LiBOYXZpZ2F0aW9uIEVkaXQgU2VjdGlvbiBUYXJnZXQgRWxlbWVudCBTdHlsZXNcXG5cXHQ4LiBNYWluIFNlY3Rpb24gU3R5ZXNcXG5cXHRcXHQ4LjEuIE1haW4gU2VjdGlvbiBHbG9iYWwgU3R5bGVzXFxuXFx0XFx0OC4yLiBNYWluIFNlY3Rpb24gVGFyZ2V0IEVsZW1lbnQgU3R5bGVzXFxuXFx0XFx0OC4zLiBNYWluIEVkaXQgU2VjdGlvbiBHbG9iYWwgU3R5bGVzXFxuXFx0XFx0OC40LiBNYWluIEVkaXQgU2VjdGlvbiBUYXJnZXQgRWxlbWVudCBTdHlsZXNcXG5cXHQqLiBGb290ZXIgU3R5bGUgU2VjdGlvblxcblxcdCouIE1lZGlhIFF1ZXJ5IFNlY3Rpb25cXG5cXHRcXHQqLjEuIEdsb2JhbCBNZWRpYSBRdWVyaWVzXFxuXFx0XFx0Ki4yLiBwYWdlR3JpZENvbnRhaW5lciBNZWRpYSBRdWVyaWVzXFxuXFx0XFx0Ki4zLiBOYXZpZ2F0aW9uIFNlY3Rpb24gTWVkaWEgUXVlcmllc1xcblxcdFxcdCouNC4gTmF2aWdhdGlvbiBNZW51IFNlY3Rpb24gTWVkaWEgUXVlcmllc1xcblxcbiovXFxuXFxuLypcXHQ9PT09PT09PT09XFxuXFx0MS4gSW1wb3J0c1xcblxcdD09PT09PT09PT0gKi9cXG5cXG4vKlxcdD09PT09PT09PT09PT09PT1cXG5cXHQyLiBHbG9iYWwgU3R5bGVzXFxuXFx0PT09PT09PT09PT09PT09PSAqL1xcblxcblxcdC8qXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdFxcdDIuMS4gR2xvYmFsIFN0eWxlcyBWYXJpYWJsZXNcXG5cXHRcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuOnJvb3R7XFxuXFxuXFx0XFx0LypcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHRcXHRcXHQyLjEuMS4gR2xvYmFsIFN0eWxlcyBWYXJpYWJsZXMtQ29sb3JcXG5cXHRcXHQgXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuXFx0LS1jbHItcHJpbWFyeTpyZ2IoMjU1LDI1NSwyNTUpO1xcblxcdC0tY2xyLXByaW1hcnktb3BhY2l0eS1saWdodDpyZ2IoMjU1LDI1NSwyNTUsIDAuNik7XFxuXFx0LS1jbHItcHJpbWFyeS1vcGFjaXR5LW1pZDpyZ2IoMjU1LDI1NSwyNTUsIDAuOCk7XFxuXFx0LS1jbHItcHJpbWFyeS1vcGFjaXR5LWRhcms6cmdiKDI1NSwyNTUsMjU1LCAwLjkpO1xcblxcblxcdC0tY2xyLXNlY29uZGFyeTpyZ2IoMTQsIDksIDkpO1xcblxcdC0tY2xyLXNlY29uZGFyeS1vcGFjaXR5LWxpZ2h0OnJnYigxNCwgOSwgOSwgMC4yOCk7XFxuXFx0LS1jbHItc2Vjb25kYXJ5LW9wYWNpdHktbWlkOnJnYigxNCwgOSwgOSwgMC40KTtcXG5cXHQtLWNsci1zZWNvbmRhcnktb3BhY2l0eS1kYXJrOnJnYigxNCwgOSwgOSwgMC41KTtcXG5cXG5cXHQtLWNsci1hY2NlbnQ6cmdiKDE3NCwzMSw2Nik7XFxuXFx0LS1jbHItYWNjZW50LWxpZ2h0OnJnYigyMjQsNjAsMTAxKTtcXG5cXHRcXHRcXHRcXG5cXHRcXHQvKlxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0XFx0XFx0Mi4xLjIuIEdsb2JhbCBTdHlsZXMgVmFyaWFibGVzLUZvbnRcXG5cXHRcXHQgXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG5cXHQtLWZmLXByaW1hcnk6J1JvYm90bycsIHNhbnMtc2VyaWY7XFxuXFxuXFx0LypcXHRcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHRcXHRcXHQyLjEuMy4gR2xvYmFsIFN0eWxlcyBJbWFnZXNcXG5cXHRcXHQgXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuXFx0LS1pbWctdHJhc2g6dXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG5cXHQtLWltZy1lZGl0OnVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuXFx0LS1pbWctZG9uZTp1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcblxcdC0taW1nLWNhbmNlbDp1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbn1cXG5cXG5cXHQuZWRpdCwuZGVsZXRlLC5kb25lLC5jYW5jZWx7XFxuXFx0XFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG5cXHRcXHRiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG5cXHR9XFxuXFxuXFx0LypcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0XFx0Mi4yLiBHbG9iYWwgU3R5bGVzIEdsb2JhbFxcblxcdFxcdD09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKiBcXG5cXHRDU1MgU3R5bGluZyBSZXNldCBmcm9tXFxuXFx0aHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgXFx0djIuMCB8IDIwMTEwMTI2XFxuICAgXFx0TGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcblxcdG1pbi1oZWlnaHQ6IDEwMHZoO1xcblxcdGZvbnQtZmFtaWx5OiB2YXIoLS1mZi1wcmltYXJ5KTtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKTtcXG5cXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcblxcdGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlOyBcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbi8qXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0My4gcGFnZUdyaWRDb250YWluZXIgU3R5bGVzXFxuXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuXFx0LypcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHRcXHQzLjEuIHBhZ2VHcmlkQ29udGFpbmVyIEdsb2JhbCBTdHlsZXNcXG5cXHRcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4jcGFnZUdyaWRDb250YWluZXJ7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpIDtcXG4gIFxcdGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXG4gIFxcdGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICBcXFwiaGVhZGVyIGhlYWRlciBoZWFkZXIgaGVhZGVyXFxcIlxcbiAgICBcXFwibWFpbiBtYWluIG1haW4gbWFpblxcXCJcXG4gICAgXFxcImZvb3RlciBmb290ZXIgZm9vdGVyIGZvb3RlclxcXCI7XFxufVxcblxcblxcdC8qXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHRcXHQzLjIuIHBhZ2VHcmlkQ29udGFpbmVyIFRhcmdldCBFbGVtZW50IFN0eWxlc1xcblxcdFxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuI25hdlNlY3Rpb257XFxuXFx0Z3JpZC1hcmVhOiBoZWFkZXI7XFxufVxcbiNuYXZNZW51U2VjdGlvbntcXG5cXHRncmlkLWFyZWE6IHNpZGViYXI7XFxufVxcbiNtYWluU2VjdGlvbntcXG5cXHRncmlkLWFyZWE6IG1haW47XFxufVxcbiNmb290ZXJTZWN0aW9ue1xcblxcdGdyaWQtYXJlYTogZm9vdGVyO1xcbn1cXG5cXG4vKlxcdD09PT09PT09PT09PT09PT09XFxuXFx0NC4gU2lnbi1pbiBTdHlsZXNcXG5cXHQ9PT09PT09PT09PT09PT09PSAqL1xcblxcblxcdC8qXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHRcXHQ0LjEuIFNpZ24taW4gR2xvYmFsIFN0eWxlc1xcblxcdFxcdD09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuZm9ybXtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNzaWduSW4tQ29udGFpbmVyLUlubmVyLCAjc2lnbkluLUNvbnRhaW5lci1PdXRlcntcXG5cXHRkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jc2lnbkluLUNvbnRhaW5lci1PdXRlcntcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jc2lnbkluLUNvbnRhaW5lci1Jbm5lcntcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuXFx0bWluLXdpZHRoOiAzNSU7XFxuXFx0bWF4LXdpZHRoOiA4MCU7XFxuXFx0bWFyZ2luOiA4LjVlbSAzZW0gMTNlbTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeS1vcGFjaXR5LW1pZCk7XFxuXFx0Ym9yZGVyLXJhZGl1czogMjNweDtcXG59XFxuXFxuI3NpZ25Jbi1Gb3JtLUNvbnRhaW5lcntcXG5cXHRtYXJnaW46MCAxZW07XFxuXFx0cGFkZGluZzogMS41ZW0gMDtcXG5cXHRtaW4td2lkdGg6IDYwJTtcXG5cXHRtYXgtd2lkdGg6IDgwJTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItc2Vjb25kYXJ5LW9wYWNpdHktbWlkKTtcXG59XFxuXFxuXFx0LypcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0XFx0NC4yLiBTaWduLWluIFRhcmdldCBFbGVtZW50IFN0eWxlc1xcblxcdFxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4jYXBwVGl0bGV7XFxuXFx0Zm9udC1zaXplOiAyZW07XFxuXFx0bWFyZ2luOiAwLjVlbTtcXG5cXHRjb2xvcjogdmFyKC0tY2xyLXNlY29uZGFyeSk7XFxufVxcblxcbmZvcm0gPiBpbnB1dCwgZm9ybSA+IGxhYmVse1xcblxcdGFsaWduLXNlbGY6IGNlbnRlcjtcXG5cXHRtaW4td2lkdGg6IDYwJTtcXG5cXHRtYXgtd2lkdGg6IDgwJTtcXG59XFxuXFxuZm9ybSA+bGFiZWx7XFxuXFx0Zm9udC1zaXplOiAxLjVlbTtcXG5cXHRjb2xvcjp2YXIoLS1jbHItcHJpbWFyeSk7XFxufVxcblxcbmlucHV0W3R5cGU9YnV0dG9uXSwgI2RlbW9CdXR0b257XFxuXFx0bWFyZ2luOiAwLjNlbTtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdGZvbnQtc2l6ZTogMS4yZW07XFxuXFx0cGFkZGluZzogMC4zZW0gM2VtO1xcblxcdGJvcmRlci1yYWRpdXM6IDFlbTtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuXFx0Y29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYWNjZW50KTtcXG5cXHR0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG5cXG5pbnB1dFt0eXBlPWJ1dHRvbl06aG92ZXIsICNkZW1vQnV0dG9uOmhvdmVye1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1hY2NlbnQtbGlnaHQpO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXXtcXG5cXHRtYXJnaW46IDAuNWVtO1xcblxcdHBhZGRpbmc6IDAuNWVtIDFlbTtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdGJhY2tncm91bmQ6IHZhcigtLWNsci1zZWNvbmRhcnktb3BhY2l0eS1kYXJrKTtcXG5cXHRib3JkZXItcmFkaXVzOiAxZW07XFxufVxcblxcbiNkZW1vQnV0dG9ue1xcblxcdHBhZGRpbmc6IDAuM2VtIDJlbTtcXG59XFxuXFxuLypcXHQ9PT09PT09PT09PT09PT09PVxcblxcdDUuIFNpZ24tVXAgU3R5bGVzXFxuXFx0PT09PT09PT09PT09PT09PT0gKi9cXG5cXG5cXG5cXHQvKlxcdD09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0XFx0NS4xLiBTaWduLVVwIEdsb2JhbCBTdHlsZXNcXG5cXHRcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbmZvcm17XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jc2lnblVwLUNvbnRhaW5lci1Jbm5lciwgI3NpZ25VcC1Db250YWluZXItT3V0ZXJ7XFxuXFx0ZGlzcGxheTogZmxleDtcXG59XFxuXFxuI3NpZ25VcC1Db250YWluZXItT3V0ZXJ7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI3NpZ25VcC1Db250YWluZXItSW5uZXJ7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcblxcdG1pbi13aWR0aDogMzUlO1xcblxcdG1heC13aWR0aDogODAlO1xcblxcdG1hcmdpbjogOC41ZW0gM2VtIDEzZW07XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXByaW1hcnktb3BhY2l0eS1taWQpO1xcblxcdGJvcmRlci1yYWRpdXM6IDIzcHg7XFxufVxcblxcbiNzaWduVXAtRm9ybS1Db250YWluZXJ7XFxuXFx0bWFyZ2luOjAgMWVtO1xcblxcdHBhZGRpbmc6IDEuNWVtIDA7XFxuXFx0bWluLXdpZHRoOiA2MCU7XFxuXFx0bWF4LXdpZHRoOiA4MCU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXNlY29uZGFyeS1vcGFjaXR5LW1pZCk7XFxufVxcblxcdFxcdFxcblxcdC8qXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdFxcdDUuMi4gU2lnbi1VcCBUYXJnZXQgRWxlbWVudCBTdHlsZXNcXG5cXHRcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFx0XFx0XFxuI2FwcFRpdGxle1xcblxcdGZvbnQtc2l6ZTogMmVtO1xcblxcdGNvbG9yOiB2YXIoLS1jbHItc2Vjb25kYXJ5KTtcXG5cXHRcXG59XFxuXFxuZm9ybSA+IGlucHV0LCBmb3JtID4gbGFiZWx7XFxuXFx0YWxpZ24tc2VsZjogY2VudGVyO1xcblxcdG1pbi13aWR0aDogNjAlO1xcblxcdG1heC13aWR0aDogODAlO1xcbn1cXG5cXG5mb3JtID5sYWJlbHtcXG5cXHRmb250LXNpemU6IDEuNWVtO1xcblxcdGNvbG9yOnZhcigtLWNsci1wcmltYXJ5KTtcXG59XFxuXFxuaW5wdXRbdHlwZT1idXR0b25dLCAjZGVtb0J1dHRvbntcXG5cXHRtYXJnaW46IDAuM2VtO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0Zm9udC1zaXplOiAxLjJlbTtcXG5cXHRwYWRkaW5nOiAwLjNlbSAzZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogMWVtO1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRjb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1hY2NlbnQpO1xcblxcdHRyYW5zaXRpb246IDAuNXM7XFxufVxcblxcbmlucHV0W3R5cGU9YnV0dG9uXTpob3ZlciwgI2RlbW9CdXR0b246aG92ZXJ7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWFjY2VudC1saWdodCk7XFxufVxcblxcbmlucHV0W3R5cGU9dGV4dF17XFxuXFx0bWFyZ2luOiAwLjVlbTtcXG5cXHRwYWRkaW5nOiAwLjVlbSAxZW07XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS1jbHItc2Vjb25kYXJ5LW9wYWNpdHktZGFyayk7XFxuXFx0Ym9yZGVyLXJhZGl1czogMWVtO1xcbn1cXG5cXG4jZGVtb0J1dHRvbntcXG5cXHRwYWRkaW5nOiAwLjNlbSAyZW07XFxufVxcblxcbi8qXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdDYuIE5hdmlnYXRpb24gU2VjdGlvbiBTdHlsZXNcXG5cXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFx0XFxuXFx0LypcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0XFx0Ni4xLiBOYXZpZ2F0aW9uIFNlY3Rpb24gR2xvYmFsIFN0eWxlc1xcblxcdFxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4jbmF2U2VjdGlvbntcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG5cXHRmb250LXNpemU6IDJlbTtcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0dG9wOiAwO1xcblxcdHdpZHRoOiAxMDB2dztcXG5cXHRjb2xvcjogdmFyKC0tY2xyLXNlY29uZGFyeSk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXByaW1hcnktb3BhY2l0eS1saWdodCk7XFxufVxcblxcblxcdC8qXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0XFx0Ni4yLiBOYXZpZ2F0aW9uIFNlY3Rpb24gVGFyZ2V0IEVsZW1lbnQgU3R5bGVzXFxuXFx0XFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuI25hdlNlY3Rpb24gPmgxe1xcblxcdG1hcmdpbi1sZWZ0OiAwLjJlbTtcXG5cXHRmb250LXNpemU6IDJlbTtcXG5cXHR0cmFuc2l0aW9uOiAwLjVzO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHR1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuXFxuI25hdlNlY3Rpb24gPmgye1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6NTAlO1xcblxcdGxlZnQ6NTAlO1xcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5cXG5cXG4vKlxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdDcuIE5hdmlnYXRpb24gTWVudSBTZWN0aW9uIFN0eWxlc1xcblxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcblxcdC8qXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdFxcdDcuMS4gTmF2aWdhdGlvbiBNZW51IEdsb2JhbCBTdHlsZXNcXG5cXHRcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuI25hdk1lbnVTZWN0aW9uPip7XFxuXFx0bWFyZ2luLXRvcDogMWVtO1xcbn1cXG5cXG4ubmF2TWVudVNlY3Rpb25IaWRle1xcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLCAwKTtcXG59XFxuXFxuI25hdk1lbnVTZWN0aW9ue1xcblxcdHBvc2l0aW9uOiBmaXhlZDtcXG5cXHR0b3A6IDJlbTtcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcblxcdGZvbnQtc2l6ZTogMmVtOyAgXFxuXFx0d2lkdGg6IDI1JTtcXG5cXHRjb2xvcjogdmFyKC0tY2xyLXNlY29uZGFyeSk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xcblxcdHRyYW5zaXRpb246IDAuNXM7XFxufVxcblxcbi5uYXZTZWN0aW9uSW5kaWNhdG9yQWN0aXZle1xcblxcdHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XFxufVxcblxcblxcbiNkYXRlU2VsZWN0b3J7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jcHJvamVjdFNlbGVjdG9ye1xcblxcdGZvbnQtc2l6ZTogMC41ZW07XFxufVxcblxcbiNwcm9qZWN0U2VsZWN0b3I+dWx7XFxuXFx0bWFyZ2luOiAxZW07XFxuXFx0bGlzdC1zdHlsZS10eXBlOiBkaXNjO1xcbn1cXG5cXG4jcHJvamVjdFNlbGVjdG9yPnVsPnNlY3Rpb24+KntcXG5cXHRmbGV4LWdyb3c6IDE7XFxuXFx0dHJhbnNpdGlvbjogMC41cztcXG59XFxuXFxuI3Byb2plY3RTZWxlY3Rvcj51bD5zZWN0aW9uPio6aG92ZXJ7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXNlY29uZGFyeS1vcGFjaXR5LWxpZ2h0KTtcXG59XFxuXFxuXFx0LypcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHRcXHQ3LjIuIE5hdmlnYXRpb24gTWVudSBUYXJnZXQgRWxlbWVudCBTdHlsZXNcXG5cXHRcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4jZGVmYXVsdFNlbGVjdG9yID4gaDJ7XFxuXFx0bWFyZ2luOiAwLjVlbTtcXG59XFxuXFxuI2RhdGVTZWxlY3RvciA+IHB7XFxuXFx0Zm9udC1zaXplOiAwLjc1ZW07ICBcXG59XFxuXFxuI2RhdGVTZWxlY3Rvcj5pbnB1dHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG5cXHRtYXJnaW46IDFlbTtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNwcm9qZWN0U2VsZWN0b3I+aDJ7XFxuXFx0Zm9udC1zaXplOiAxLjc1ZW07XFxufVxcblxcbiNwcm9qZWN0U2VsZWN0b3I+dWw+bGl7XFxuXFx0bWFyZ2luOiAwLjVlbTtcXG5cXG59XFxuXFxuI3Byb2plY3RTZWxlY3Rvcj51bD5zZWN0aW9ue1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXHRoZWlnaHQ6IDJlbTtcXG59XFxuXFxuI3Byb2plY3RTZWxlY3Rvcj51bD5zZWN0aW9uPi5lZGl0e1xcblxcdGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuXFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG59XFxuXFxuI3Byb2plY3RTZWxlY3Rvcj51bD5zZWN0aW9uPi5kZWxldGV7XFxuXFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG5cXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcblxcdGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbn1cXG5cXG4jcHJvamVjdFNlbGVjdG9yPnVsPi5hZGRQcm9qZWN0e1xcblxcdHBhZGRpbmc6IDAuNmVtO1xcblxcdGZvbnQtc2l6ZTogMS4yZW07XFxuXFx0bWFyZ2luLXRvcDogMC41ZW07XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRib3JkZXItcmFkaXVzOiAwLjVlbTtcXG5cXHRjb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1hY2NlbnQpO1xcblxcdHRyYW5zaXRpb246IDAuNXM7XFxufVxcblxcbiNwcm9qZWN0U2VsZWN0b3I+dWw+LmFkZFByb2plY3Q6aG92ZXJ7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWFjY2VudC1saWdodCk7XFxufVxcblxcbi8qXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0Ny4zLiBOYXZpZ2F0aW9uIEVkaXQgU2VjdGlvbiBHbG9iYWwgU3R5bGVzXFxuXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuI2VkaXRQcm9qZWN0Q29udGFpbmVye1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Ym9yZGVyOiAwLjJlbSBpbnNldCB2YXIoLS1jbHItYWNjZW50KTtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jZWRpdFByb2plY3RDb250YWluZXI+KntcXG5cXHRmbGV4LWdyb3c6IDE7XFxufVxcblxcbiNlZGl0UHJvamVjdENvbnRhaW5lcj4uZG9uZS1jYW5jZWxTZWN0aW9uPip7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiAyZW07XFxufVxcblxcblxcdC8qXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdDcuNC4gTmF2aWdhdGlvbiBFZGl0IFNlY3Rpb24gVGFyZ2V0IEVsZW1lbnQgU3R5bGVzXFxuXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4jZWRpdFByb2plY3RDb250YWluZXJ7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRib3JkZXI6IDAuMmVtIGluc2V0IHZhcigtLWNsci1hY2NlbnQpO1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNlZGl0UHJvamVjdENvbnRhaW5lcj4uZG9uZS1jYW5jZWxTZWN0aW9ue1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuXFx0dHJhbnNpdGlvbjogMC41cztcXG59XFxuXFxuI2VkaXRQcm9qZWN0Q29udGFpbmVyPi5lZGl0VGFza1NlbGVjdD5pbnB1dHtcXG5cXHR3aWR0aDogODAlO1xcbn1cXG5cXG4jZWRpdFByb2plY3RDb250YWluZXI+LmRvbmUtY2FuY2VsU2VjdGlvbj4qOmhvdmVye1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1zZWNvbmRhcnktb3BhY2l0eS1saWdodCk7XFxufVxcblxcbi8qXFx0PT09PT09PT09PT09PT09PT09PT09XFxuXFx0OC4gTWFpbiBTZWN0aW9uIFN0eWVzXFxuXFx0PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuXFx0LypcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0XFx0OC4xLiBNYWluIFNlY3Rpb24gR2xvYmFsIFN0eWxlc1xcblxcdFxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4jbWFpblNlY3Rpb24+KntcXG5cXHRtaW4td2lkdGg6IDgwJTtcXG59XFxuXFxuI21haW5TZWN0aW9uLCAuaXRlbXMsIC50YXNrc3tcXG5cXHRkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4jbWFpblNlY3Rpb257XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdG1hcmdpbi10b3A6IDNlbTtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMmVtO1xcblxcdGdhcDogMC41ZW0gMGVtO1xcblxcdGZvbnQtc2l6ZTogMS41ZW07XFxuXFx0Y29sb3I6IHZhcigtLWNsci1zZWNvbmRhcnkpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1wcmltYXJ5LW9wYWNpdHktZGFyayk7XFxufVxcblxcbi5pdGVtc3tcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbn1cXG5cXG4udGFza3N7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG59XFxuXFxuLml0ZW1zID4gKntcXG5cXHRncmlkLWNvbHVtbjogMSAvIHNwYW4gMztcXG59XFxuXFxuLml0ZW1ze1xcblxcdGNvbG9yOiB2YXIoLS1jbHItc2Vjb25kYXJ5KTtcXG5cXHRwbGFjZS1zZWxmOiBjZW50ZXI7XFxuXFx0Z2FwOiAwLjVlbSAwZW07XFxuXFx0bWFyZ2luLWJvdHRvbTogMC41ZW07XFxuXFx0YmFja2dyb3VuZDogdmFyKC0tY2xyLXNlY29uZGFyeS1vcGFjaXR5LWxpZ2h0KTtcXG59XFxuXFxuLnRhc2tzPip7XFxuXFx0cGxhY2Utc2VsZjogY2VudGVyO1xcblxcdHBhZGRpbmc6IDAuMmVtO1xcbn1cXG5cXG4udGFza3M+c2VjdGlvbj4qe1xcblxcdGhlaWdodDogMmVtO1xcblxcdHdpZHRoOiAyZW07XFxuXFx0ZmxleC1ncm93OiAxO1xcblxcdHRyYW5zaXRpb246IDAuNXM7XFxufVxcblxcbi50YXNrcz5zZWN0aW9uPio6aG92ZXJ7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXNlY29uZGFyeS1vcGFjaXR5LWxpZ2h0KTtcXG59XFxuXFxuXFx0LypcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHRcXHQ4LjIuIE1haW4gU2VjdGlvbiBUYXJnZXQgRWxlbWVudCBTdHlsZXNcXG5cXHRcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4jbWFpblNlY3Rpb24gPiBoMntcXG5cXHRmb250LXNpemU6IDEuNWVtO1xcblxcdHBhZGRpbmc6IDAuNWVtO1xcbn1cXG5cXG4uaXRlbXM+aDJ7XFxuXFx0Zm9udC1zaXplOiAxLjVlbTtcXG5cXHRwYWRkaW5nLXRvcDogMC4yZW07XFxufVxcblxcbi50YXNrcz5sYWJlbHtcXG5cXHRjb2xvcjogdmFyKC0tY2xyLXNlY29uZGFyeSk7XFxuXFx0cGxhY2Utc2VsZjogY2VudGVyO1xcblxcdGZvbnQtc2l6ZTogMWVtO1xcblxcdHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udGFza3M+aW5wdXR7XFxuXFx0aGVpZ2h0OiAyZW07XFxuXFx0d2lkdGg6IDJlbTtcXG59XFxuXFxuLnRhc2tzPnNlY3Rpb257XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0d2lkdGg6MTAwJTtcXG59XFxuXFxuLmVkaXR7XFxuXFx0YmFja2dyb3VuZC1pbWFnZTogdmFyKC0taW1nLWVkaXQpO1xcbn1cXG5cXG4uZGVsZXRle1xcblxcdGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLWltZy10cmFzaCk7XFxufVxcblxcbi5hZGRUYXNre1xcblxcdHBhZGRpbmc6IDAuNmVtO1xcblxcdG1hcmdpbi1ib3R0b206IDAuNWVtO1xcblxcdGZvbnQtc2l6ZTogMC44ZW07XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0Z3JpZC1jb2x1bW46IDI7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRib3JkZXItcmFkaXVzOiAwLjVlbTtcXG5cXHRjb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1hY2NlbnQpO1xcblxcdHRyYW5zaXRpb246IDAuNXM7XFxufVxcblxcbi5hZGRUYXNrOmhvdmVye1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1hY2NlbnQtbGlnaHQpO1xcbn1cXG5cXG5cXHQvKlxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdFxcdDguMy4gTWFpbiBFZGl0IFNlY3Rpb24gR2xvYmFsIFN0eWxlc1xcblxcdFxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiNlZGl0VGFzaz4qe1xcblxcdHBsYWNlLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuI2VkaXRUYXNrPnNlY3Rpb24+KntcXG5cXHRoZWlnaHQ6IGF1dG87XFxuXFx0d2lkdGg6IDkwJTtcXG5cXHR0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG5cXG4jZWRpdFRhc2s+LmRvbmUtY2FuY2VsU2VjdGlvbj4qOmhvdmVye1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1zZWNvbmRhcnktb3BhY2l0eS1saWdodCk7XFxufVxcblxcbiNlZGl0VGFzaz4uZG9uZS1jYW5jZWxTZWN0aW9uPip7XFxuXFx0d2lkdGg6IGF1dG87XFxuXFx0aGVpZ2h0OiBhdXRvO1xcblxcdGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuXFx0LypcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdFxcdDguNC4gTWFpbiBFZGl0IFNlY3Rpb24gVGFyZ2V0IEVsZW1lbnQgU3R5bGVzXFxuXFx0XFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4jZWRpdFRhc2tDb250YWluZXJ7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRncmlkLWNvbHVtbjogc3BhbiA0O1xcbn1cXG5cXG4jZWRpdFRhc2t7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRtYXJnaW46IGF1dG87XFxuXFx0d2lkdGg6IDgwJTtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMC4yZW0gaW5zZXQgdmFyKC0tY2xyLWFjY2VudCk7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG5cXHRjb2x1bW4tZ2FwOiAwLjVlbTtcXG59XFxuXFxuI2VkaXRUYXNrPnNlY3Rpb257XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHR3aWR0aDogMTAwJTtcXG59XFxuXFxuI2VkaXRUYXNrPnNlY3Rpb24+bGFiZWx7XFxuXFx0Y29sb3I6IHZhcigtLWNsci1zZWNvbmRhcnkpO1xcblxcdHBsYWNlLXNlbGY6IGNlbnRlcjtcXG5cXHRmb250LXNpemU6IDFlbTtcXG5cXHR3aWR0aDogMTAwJTtcXG59XFxuXFxuI2VkaXRUYXNrPnNlY3Rpb24+dGV4dGFyZWF7XFxuXFx0cmVzaXplOiB2ZXJ0aWNhbDtcXG59XFxuXFxuI2VkaXRUYXNrPi5kb25lLWNhbmNlbFNlY3Rpb257XFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLmRvbmV7XFxuXFx0YmFja2dyb3VuZC1pbWFnZTogdmFyKC0taW1nLWRvbmUpO1xcbn1cXG5cXG4uY2FuY2Vse1xcblxcdGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLWltZy1jYW5jZWwpO1xcbn1cXG5cXG4vKlxcdD09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0Ki4gRm9vdGVyIFN0eWxlIFNlY3Rpb25cXG5cXHQ9PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiNmb290ZXJTZWN0aW9ue1xcblxcdHBvc2l0aW9uOiBmaXhlZDtcXG5cXHRsZWZ0OiAwO1xcblxcdGJvdHRvbTogMDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItc2Vjb25kYXJ5KTtcXG5cXHRjb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLypcXHQ9PT09PT09PT09PT09PT09PT09PT09XFxuXFx0Ki4gTWVkaWEgUXVlcnkgU2VjdGlvblxcblxcdD09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc1MHB4KSB7XFxuXFxuXFx0LypcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0XFx0Ki4xLiBHbG9iYWwgTWVkaWEgUXVlcmllc1xcblxcdFxcdD09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG5cXHRib2R5IHtcXG5cXHRcXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fICsgXCIpO1xcblxcdH1cXG5cXG5cXHQvKlxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdFxcdCouMi4gcGFnZUdyaWRDb250YWluZXIgTWVkaWEgUXVlcmllc1xcblxcdFxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcblxcdCNwYWdlR3JpZENvbnRhaW5lcntcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG5cXHRcXHRcXFwiaGVhZGVyIGhlYWRlciBoZWFkZXIgaGVhZGVyXFxcIlxcblxcdFxcdFxcXCJzaWRlYmFyIG1haW4gbWFpbiBtYWluXFxcIlxcblxcdFxcdFxcXCJmb290ZXIgZm9vdGVyIGZvb3RlciBmb290ZXJcXFwiO1xcblxcdH1cXG5cXG5cXG5cXHQvKlxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHRcXHQqLjMuIE5hdmlnYXRpb24gU2VjdGlvbiBNZWRpYSBRdWVyaWVzXFxuXFx0XFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcblxcdCNtYWluU2VjdGlvbntcXG5cXHRcXHRtYXJnaW46IDNlbSAxZW0gMGVtO1xcblxcdH1cXG5cXG5cXHQjbWFpblNlY3Rpb24+KntcXG5cXHRcXHRtaW4td2lkdGg6IDc1JTtcXG5cXHR9XFxuXFxuXFx0I25hdlNlY3Rpb24+aDF7XFxuXFx0XFx0dHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcXG5cXHR9XFxuXFxuXFx0LypcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHRcXHQqLjQuIE5hdmlnYXRpb24gTWVudSBTZWN0aW9uIE1lZGlhIFF1ZXJpZXNcXG5cXHRcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG5cXHQjbmF2TWVudVNlY3Rpb257XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XFxuXFx0fVxcblxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBcUNDOztBQUVEOzthQUVhOztBQUliOzttQkFFbUI7O0NBRWxCOztnQ0FFK0I7O0FBRWhDOztFQUVFOzswQ0FFd0M7O0NBRXpDLDhCQUE4QjtDQUM5QixpREFBaUQ7Q0FDakQsK0NBQStDO0NBQy9DLGdEQUFnRDs7Q0FFaEQsNkJBQTZCO0NBQzdCLGlEQUFpRDtDQUNqRCw4Q0FBOEM7Q0FDOUMsK0NBQStDOztDQUUvQywyQkFBMkI7Q0FDM0Isa0NBQWtD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Q0FDQyxhQUFhO0NBQ2IsWUFBWTtDQUNaLFVBQVU7Q0FDVixVQUFVO0NBQ1YscUNBQXFDO0NBQ3JDLHFDQUFxQztDQUNyQyxpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLFlBQVk7Q0FDWixXQUFXO0FBQ1o7O0FBRUE7Q0FDQywyQkFBMkI7Q0FDM0Isa0JBQWtCO0NBQ2xCLGNBQWM7Q0FDZCxXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxpQ0FBaUM7QUFDbEM7O0FBRUE7Q0FDQyxtQ0FBbUM7QUFDcEM7O0FBRUE7OzBCQUUwQjs7QUFFMUI7Q0FDQyxlQUFlO0NBQ2YsT0FBTztDQUNQLFNBQVM7Q0FDVCxXQUFXO0NBQ1gsc0NBQXNDO0NBQ3RDLHlCQUF5QjtDQUN6QixrQkFBa0I7QUFDbkI7O0FBRUE7O3lCQUV5Qjs7QUFFekI7O0NBRUM7OzZCQUU0Qjs7Q0FFNUI7RUFDQyx5REFBK0Q7Q0FDaEU7O0NBRUE7O3dDQUV1Qzs7Q0FFdkM7RUFDQzs7OytCQUc2QjtDQUM5Qjs7O0NBR0E7O3lDQUV3Qzs7Q0FFeEM7RUFDQyxtQkFBbUI7Q0FDcEI7O0NBRUE7RUFDQyxjQUFjO0NBQ2Y7O0NBRUE7RUFDQyx5QkFBeUI7Q0FDMUI7O0NBRUE7OzhDQUU2Qzs7Q0FFN0M7RUFDQywwQkFBMEI7Q0FDM0I7O0FBRURcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogVGFibGUgb2YgQ29udGVudHNcXG5cXHQxLiBJbXBvcnRzXFxuXFx0Mi4gR2xvYmFsIFN0eWxlc1xcblxcdFxcdDIuMS4gR2xvYmFsIFN0eWxlcyBWYXJpYWJsZXNcXG5cXHRcXHRcXHQyLjEuMS4gR2xvYmFsIFN0eWxlcyBWYXJpYWJsZXMtQ29sb3JcXG5cXHRcXHRcXHQyLjEuMi4gR2xvYmFsIFN0eWxlcyBWYXJpYWJsZXMtRm9udFxcblxcdFxcdFxcdDIuMS4zLiBHbG9iYWwgU3R5bGVzIEltYWdlc1xcblxcdFxcdDIuMi4gR2xvYmFsIFN0eWxlcyBHbG9iYWxcXG5cXHQzLiBwYWdlR3JpZENvbnRhaW5lciBTdHlsZXNcXG5cXHRcXHQzLjEuIHBhZ2VHcmlkQ29udGFpbmVyIEdsb2JhbCBTdHlsZXNcXG5cXHRcXHQzLjIuIHBhZ2VHcmlkQ29udGFpbmVyIFRhcmdldCBFbGVtZW50IFN0eWxlc1xcblxcdDQuIFNpZ24taW4gU3R5bGVzXFxuXFx0XFx0NC4xLiBTaWduLWluIEdsb2JhbCBTdHlsZXNcXG5cXHRcXHQ0LjIuIFNpZ24taW4gVGFyZ2V0IEVsZW1lbnQgU3R5bGVzXFxuXFx0NS4gU2lnbi1VcCBTdHlsZXNcXG5cXHRcXHQ1LjEuIFNpZ24tVXAgR2xvYmFsIFN0eWxlc1xcblxcdFxcdDUuMi4gU2lnbi1VcCBUYXJnZXQgRWxlbWVudCBTdHlsZXNcXG5cXHQ2LiBOYXZpZ2F0aW9uIFNlY3Rpb24gU3R5bGVzXFxuXFx0XFx0Ni4xLiBOYXZpZ2F0aW9uIFNlY3Rpb24gR2xvYmFsIFN0eWxlc1xcblxcdFxcdDYuMi4gTmF2aWdhdGlvbiBTZWN0aW9uIFRhcmdldCBFbGVtZW50IFN0eWxlc1xcblxcdDcuIE5hdmlnYXRpb24gTWVudSBTZWN0aW9uIFN0eWxlc1xcblxcdFxcdDcuMS4gTmF2aWdhdGlvbiBNZW51IEdsb2JhbCBTdHlsZXNcXG5cXHRcXHQ3LjIuIE5hdmlnYXRpb24gTWVudSBUYXJnZXQgRWxlbWVudCBTdHlsZXNcXG5cXHRcXHQ3LjMuIE5hdmlnYXRpb24gRWRpdCBTZWN0aW9uIEdsb2JhbCBTdHlsZXNcXG5cXHRcXHQ3LjQuIE5hdmlnYXRpb24gRWRpdCBTZWN0aW9uIFRhcmdldCBFbGVtZW50IFN0eWxlc1xcblxcdDguIE1haW4gU2VjdGlvbiBTdHllc1xcblxcdFxcdDguMS4gTWFpbiBTZWN0aW9uIEdsb2JhbCBTdHlsZXNcXG5cXHRcXHQ4LjIuIE1haW4gU2VjdGlvbiBUYXJnZXQgRWxlbWVudCBTdHlsZXNcXG5cXHRcXHQ4LjMuIE1haW4gRWRpdCBTZWN0aW9uIEdsb2JhbCBTdHlsZXNcXG5cXHRcXHQ4LjQuIE1haW4gRWRpdCBTZWN0aW9uIFRhcmdldCBFbGVtZW50IFN0eWxlc1xcblxcdCouIEZvb3RlciBTdHlsZSBTZWN0aW9uXFxuXFx0Ki4gTWVkaWEgUXVlcnkgU2VjdGlvblxcblxcdFxcdCouMS4gR2xvYmFsIE1lZGlhIFF1ZXJpZXNcXG5cXHRcXHQqLjIuIHBhZ2VHcmlkQ29udGFpbmVyIE1lZGlhIFF1ZXJpZXNcXG5cXHRcXHQqLjMuIE5hdmlnYXRpb24gU2VjdGlvbiBNZWRpYSBRdWVyaWVzXFxuXFx0XFx0Ki40LiBOYXZpZ2F0aW9uIE1lbnUgU2VjdGlvbiBNZWRpYSBRdWVyaWVzXFxuXFxuKi9cXG5cXG4vKlxcdD09PT09PT09PT1cXG5cXHQxLiBJbXBvcnRzXFxuXFx0PT09PT09PT09PSAqL1xcblxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXAnKTtcXG5cXG4vKlxcdD09PT09PT09PT09PT09PT1cXG5cXHQyLiBHbG9iYWwgU3R5bGVzXFxuXFx0PT09PT09PT09PT09PT09PSAqL1xcblxcblxcdC8qXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdFxcdDIuMS4gR2xvYmFsIFN0eWxlcyBWYXJpYWJsZXNcXG5cXHRcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuOnJvb3R7XFxuXFxuXFx0XFx0LypcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHRcXHRcXHQyLjEuMS4gR2xvYmFsIFN0eWxlcyBWYXJpYWJsZXMtQ29sb3JcXG5cXHRcXHQgXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuXFx0LS1jbHItcHJpbWFyeTpyZ2IoMjU1LDI1NSwyNTUpO1xcblxcdC0tY2xyLXByaW1hcnktb3BhY2l0eS1saWdodDpyZ2IoMjU1LDI1NSwyNTUsIDAuNik7XFxuXFx0LS1jbHItcHJpbWFyeS1vcGFjaXR5LW1pZDpyZ2IoMjU1LDI1NSwyNTUsIDAuOCk7XFxuXFx0LS1jbHItcHJpbWFyeS1vcGFjaXR5LWRhcms6cmdiKDI1NSwyNTUsMjU1LCAwLjkpO1xcblxcblxcdC0tY2xyLXNlY29uZGFyeTpyZ2IoMTQsIDksIDkpO1xcblxcdC0tY2xyLXNlY29uZGFyeS1vcGFjaXR5LWxpZ2h0OnJnYigxNCwgOSwgOSwgMC4yOCk7XFxuXFx0LS1jbHItc2Vjb25kYXJ5LW9wYWNpdHktbWlkOnJnYigxNCwgOSwgOSwgMC40KTtcXG5cXHQtLWNsci1zZWNvbmRhcnktb3BhY2l0eS1kYXJrOnJnYigxNCwgOSwgOSwgMC41KTtcXG5cXG5cXHQtLWNsci1hY2NlbnQ6cmdiKDE3NCwzMSw2Nik7XFxuXFx0LS1jbHItYWNjZW50LWxpZ2h0OnJnYigyMjQsNjAsMTAxKTtcXG5cXHRcXHRcXHRcXG5cXHRcXHQvKlxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0XFx0XFx0Mi4xLjIuIEdsb2JhbCBTdHlsZXMgVmFyaWFibGVzLUZvbnRcXG5cXHRcXHQgXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG5cXHQtLWZmLXByaW1hcnk6J1JvYm90bycsIHNhbnMtc2VyaWY7XFxuXFxuXFx0LypcXHRcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHRcXHRcXHQyLjEuMy4gR2xvYmFsIFN0eWxlcyBJbWFnZXNcXG5cXHRcXHQgXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuXFx0LS1pbWctdHJhc2g6dXJsKCcuL2ltYWdlcy9pY29uczgtdHJhc2gtY2FuLnN2ZycpO1xcblxcdC0taW1nLWVkaXQ6dXJsKCcuL2ltYWdlcy9pY29uczgtZWRpdC5zdmcnKTtcXG5cXHQtLWltZy1kb25lOnVybCgnLi9pbWFnZXMvaWNvbnM4LWRvbmUuc3ZnJyk7XFxuXFx0LS1pbWctY2FuY2VsOnVybCgnLi9pbWFnZXMvaWNvbnM4LWNhbmNlbC5zdmcnKTtcXG59XFxuXFxuXFx0LmVkaXQsLmRlbGV0ZSwuZG9uZSwuY2FuY2Vse1xcblxcdFxcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuXFx0XFx0YmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxuXFx0fVxcblxcblxcdC8qXFx0PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdFxcdDIuMi4gR2xvYmFsIFN0eWxlcyBHbG9iYWxcXG5cXHRcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyogXFxuXFx0Q1NTIFN0eWxpbmcgUmVzZXQgZnJvbVxcblxcdGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIFxcdHYyLjAgfCAyMDExMDEyNlxcbiAgIFxcdExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG5cXHRtaW4taGVpZ2h0OiAxMDB2aDtcXG5cXHRmb250LWZhbWlseTogdmFyKC0tZmYtcHJpbWFyeSk7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWFnZXMvVG9Eb0FwcEJhY2tncm91bmQtY3JvcHBlZC1tb2JpbGUuanBnJyk7XFxuXFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTsgXFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG4vKlxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdDMuIHBhZ2VHcmlkQ29udGFpbmVyIFN0eWxlc1xcblxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcblxcdC8qXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0XFx0My4xLiBwYWdlR3JpZENvbnRhaW5lciBHbG9iYWwgU3R5bGVzXFxuXFx0XFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuI3BhZ2VHcmlkQ29udGFpbmVye1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKSA7XFxuICBcXHRncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxuICBcXHRncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAgXFxcImhlYWRlciBoZWFkZXIgaGVhZGVyIGhlYWRlclxcXCJcXG4gICAgXFxcIm1haW4gbWFpbiBtYWluIG1haW5cXFwiXFxuICAgIFxcXCJmb290ZXIgZm9vdGVyIGZvb3RlciBmb290ZXJcXFwiO1xcbn1cXG5cXG5cXHQvKlxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0XFx0My4yLiBwYWdlR3JpZENvbnRhaW5lciBUYXJnZXQgRWxlbWVudCBTdHlsZXNcXG5cXHRcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiNuYXZTZWN0aW9ue1xcblxcdGdyaWQtYXJlYTogaGVhZGVyO1xcbn1cXG4jbmF2TWVudVNlY3Rpb257XFxuXFx0Z3JpZC1hcmVhOiBzaWRlYmFyO1xcbn1cXG4jbWFpblNlY3Rpb257XFxuXFx0Z3JpZC1hcmVhOiBtYWluO1xcbn1cXG4jZm9vdGVyU2VjdGlvbntcXG5cXHRncmlkLWFyZWE6IGZvb3RlcjtcXG59XFxuXFxuLypcXHQ9PT09PT09PT09PT09PT09PVxcblxcdDQuIFNpZ24taW4gU3R5bGVzXFxuXFx0PT09PT09PT09PT09PT09PT0gKi9cXG5cXG5cXHQvKlxcdD09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0XFx0NC4xLiBTaWduLWluIEdsb2JhbCBTdHlsZXNcXG5cXHRcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbmZvcm17XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jc2lnbkluLUNvbnRhaW5lci1Jbm5lciwgI3NpZ25Jbi1Db250YWluZXItT3V0ZXJ7XFxuXFx0ZGlzcGxheTogZmxleDtcXG59XFxuXFxuI3NpZ25Jbi1Db250YWluZXItT3V0ZXJ7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI3NpZ25Jbi1Db250YWluZXItSW5uZXJ7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcblxcdG1pbi13aWR0aDogMzUlO1xcblxcdG1heC13aWR0aDogODAlO1xcblxcdG1hcmdpbjogOC41ZW0gM2VtIDEzZW07XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXByaW1hcnktb3BhY2l0eS1taWQpO1xcblxcdGJvcmRlci1yYWRpdXM6IDIzcHg7XFxufVxcblxcbiNzaWduSW4tRm9ybS1Db250YWluZXJ7XFxuXFx0bWFyZ2luOjAgMWVtO1xcblxcdHBhZGRpbmc6IDEuNWVtIDA7XFxuXFx0bWluLXdpZHRoOiA2MCU7XFxuXFx0bWF4LXdpZHRoOiA4MCU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXNlY29uZGFyeS1vcGFjaXR5LW1pZCk7XFxufVxcblxcblxcdC8qXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdFxcdDQuMi4gU2lnbi1pbiBUYXJnZXQgRWxlbWVudCBTdHlsZXNcXG5cXHRcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuI2FwcFRpdGxle1xcblxcdGZvbnQtc2l6ZTogMmVtO1xcblxcdG1hcmdpbjogMC41ZW07XFxuXFx0Y29sb3I6IHZhcigtLWNsci1zZWNvbmRhcnkpO1xcbn1cXG5cXG5mb3JtID4gaW5wdXQsIGZvcm0gPiBsYWJlbHtcXG5cXHRhbGlnbi1zZWxmOiBjZW50ZXI7XFxuXFx0bWluLXdpZHRoOiA2MCU7XFxuXFx0bWF4LXdpZHRoOiA4MCU7XFxufVxcblxcbmZvcm0gPmxhYmVse1xcblxcdGZvbnQtc2l6ZTogMS41ZW07XFxuXFx0Y29sb3I6dmFyKC0tY2xyLXByaW1hcnkpO1xcbn1cXG5cXG5pbnB1dFt0eXBlPWJ1dHRvbl0sICNkZW1vQnV0dG9ue1xcblxcdG1hcmdpbjogMC4zZW07XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRmb250LXNpemU6IDEuMmVtO1xcblxcdHBhZGRpbmc6IDAuM2VtIDNlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAxZW07XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdGNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWFjY2VudCk7XFxuXFx0dHJhbnNpdGlvbjogMC41cztcXG59XFxuXFxuaW5wdXRbdHlwZT1idXR0b25dOmhvdmVyLCAjZGVtb0J1dHRvbjpob3ZlcntcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYWNjZW50LWxpZ2h0KTtcXG59XFxuXFxuaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1wYXNzd29yZF17XFxuXFx0bWFyZ2luOiAwLjVlbTtcXG5cXHRwYWRkaW5nOiAwLjVlbSAxZW07XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS1jbHItc2Vjb25kYXJ5LW9wYWNpdHktZGFyayk7XFxuXFx0Ym9yZGVyLXJhZGl1czogMWVtO1xcbn1cXG5cXG4jZGVtb0J1dHRvbntcXG5cXHRwYWRkaW5nOiAwLjNlbSAyZW07XFxufVxcblxcbi8qXFx0PT09PT09PT09PT09PT09PT1cXG5cXHQ1LiBTaWduLVVwIFN0eWxlc1xcblxcdD09PT09PT09PT09PT09PT09ICovXFxuXFxuXFxuXFx0LypcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdFxcdDUuMS4gU2lnbi1VcCBHbG9iYWwgU3R5bGVzXFxuXFx0XFx0PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG5mb3Jte1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI3NpZ25VcC1Db250YWluZXItSW5uZXIsICNzaWduVXAtQ29udGFpbmVyLU91dGVye1xcblxcdGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNzaWduVXAtQ29udGFpbmVyLU91dGVye1xcblxcdGhlaWdodDogMTAwdmg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNzaWduVXAtQ29udGFpbmVyLUlubmVye1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG5cXHRtaW4td2lkdGg6IDM1JTtcXG5cXHRtYXgtd2lkdGg6IDgwJTtcXG5cXHRtYXJnaW46IDguNWVtIDNlbSAxM2VtO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1wcmltYXJ5LW9wYWNpdHktbWlkKTtcXG5cXHRib3JkZXItcmFkaXVzOiAyM3B4O1xcbn1cXG5cXG4jc2lnblVwLUZvcm0tQ29udGFpbmVye1xcblxcdG1hcmdpbjowIDFlbTtcXG5cXHRwYWRkaW5nOiAxLjVlbSAwO1xcblxcdG1pbi13aWR0aDogNjAlO1xcblxcdG1heC13aWR0aDogODAlO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1zZWNvbmRhcnktb3BhY2l0eS1taWQpO1xcbn1cXG5cXHRcXHRcXG5cXHQvKlxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHRcXHQ1LjIuIFNpZ24tVXAgVGFyZ2V0IEVsZW1lbnQgU3R5bGVzXFxuXFx0XFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcdFxcdFxcbiNhcHBUaXRsZXtcXG5cXHRmb250LXNpemU6IDJlbTtcXG5cXHRjb2xvcjogdmFyKC0tY2xyLXNlY29uZGFyeSk7XFxuXFx0XFxufVxcblxcbmZvcm0gPiBpbnB1dCwgZm9ybSA+IGxhYmVse1xcblxcdGFsaWduLXNlbGY6IGNlbnRlcjtcXG5cXHRtaW4td2lkdGg6IDYwJTtcXG5cXHRtYXgtd2lkdGg6IDgwJTtcXG59XFxuXFxuZm9ybSA+bGFiZWx7XFxuXFx0Zm9udC1zaXplOiAxLjVlbTtcXG5cXHRjb2xvcjp2YXIoLS1jbHItcHJpbWFyeSk7XFxufVxcblxcbmlucHV0W3R5cGU9YnV0dG9uXSwgI2RlbW9CdXR0b257XFxuXFx0bWFyZ2luOiAwLjNlbTtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdGZvbnQtc2l6ZTogMS4yZW07XFxuXFx0cGFkZGluZzogMC4zZW0gM2VtO1xcblxcdGJvcmRlci1yYWRpdXM6IDFlbTtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuXFx0Y29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYWNjZW50KTtcXG5cXHR0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG5cXG5pbnB1dFt0eXBlPWJ1dHRvbl06aG92ZXIsICNkZW1vQnV0dG9uOmhvdmVye1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1hY2NlbnQtbGlnaHQpO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXRleHRde1xcblxcdG1hcmdpbjogMC41ZW07XFxuXFx0cGFkZGluZzogMC41ZW0gMWVtO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuXFx0YmFja2dyb3VuZDogdmFyKC0tY2xyLXNlY29uZGFyeS1vcGFjaXR5LWRhcmspO1xcblxcdGJvcmRlci1yYWRpdXM6IDFlbTtcXG59XFxuXFxuI2RlbW9CdXR0b257XFxuXFx0cGFkZGluZzogMC4zZW0gMmVtO1xcbn1cXG5cXG4vKlxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHQ2LiBOYXZpZ2F0aW9uIFNlY3Rpb24gU3R5bGVzXFxuXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcdFxcblxcdC8qXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdFxcdDYuMS4gTmF2aWdhdGlvbiBTZWN0aW9uIEdsb2JhbCBTdHlsZXNcXG5cXHRcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuI25hdlNlY3Rpb257XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuXFx0Zm9udC1zaXplOiAyZW07XFxuXFx0cG9zaXRpb246IGZpeGVkO1xcblxcdHRvcDogMDtcXG5cXHR3aWR0aDogMTAwdnc7XFxuXFx0Y29sb3I6IHZhcigtLWNsci1zZWNvbmRhcnkpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1wcmltYXJ5LW9wYWNpdHktbGlnaHQpO1xcbn1cXG5cXG5cXHQvKlxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdFxcdDYuMi4gTmF2aWdhdGlvbiBTZWN0aW9uIFRhcmdldCBFbGVtZW50IFN0eWxlc1xcblxcdFxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiNuYXZTZWN0aW9uID5oMXtcXG5cXHRtYXJnaW4tbGVmdDogMC4yZW07XFxuXFx0Zm9udC1zaXplOiAyZW07XFxuXFx0dHJhbnNpdGlvbjogMC41cztcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcblxcbiNuYXZTZWN0aW9uID5oMntcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOjUwJTtcXG5cXHRsZWZ0OjUwJTtcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXFxuXFxuLypcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHQ3LiBOYXZpZ2F0aW9uIE1lbnUgU2VjdGlvbiBTdHlsZXNcXG5cXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG5cXHQvKlxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHRcXHQ3LjEuIE5hdmlnYXRpb24gTWVudSBHbG9iYWwgU3R5bGVzXFxuXFx0XFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiNuYXZNZW51U2VjdGlvbj4qe1xcblxcdG1hcmdpbi10b3A6IDFlbTtcXG59XFxuXFxuLm5hdk1lbnVTZWN0aW9uSGlkZXtcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSwgMCk7XFxufVxcblxcbiNuYXZNZW51U2VjdGlvbntcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0dG9wOiAyZW07XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXHRmb250LXNpemU6IDJlbTsgIFxcblxcdHdpZHRoOiAyNSU7XFxuXFx0Y29sb3I6IHZhcigtLWNsci1zZWNvbmRhcnkpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXG5cXHR0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG5cXG4ubmF2U2VjdGlvbkluZGljYXRvckFjdGl2ZXtcXG5cXHR0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xcbn1cXG5cXG5cXG4jZGF0ZVNlbGVjdG9ye1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI3Byb2plY3RTZWxlY3RvcntcXG5cXHRmb250LXNpemU6IDAuNWVtO1xcbn1cXG5cXG4jcHJvamVjdFNlbGVjdG9yPnVse1xcblxcdG1hcmdpbjogMWVtO1xcblxcdGxpc3Qtc3R5bGUtdHlwZTogZGlzYztcXG59XFxuXFxuI3Byb2plY3RTZWxlY3Rvcj51bD5zZWN0aW9uPip7XFxuXFx0ZmxleC1ncm93OiAxO1xcblxcdHRyYW5zaXRpb246IDAuNXM7XFxufVxcblxcbiNwcm9qZWN0U2VsZWN0b3I+dWw+c2VjdGlvbj4qOmhvdmVye1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1zZWNvbmRhcnktb3BhY2l0eS1saWdodCk7XFxufVxcblxcblxcdC8qXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0XFx0Ny4yLiBOYXZpZ2F0aW9uIE1lbnUgVGFyZ2V0IEVsZW1lbnQgU3R5bGVzXFxuXFx0XFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuI2RlZmF1bHRTZWxlY3RvciA+IGgye1xcblxcdG1hcmdpbjogMC41ZW07XFxufVxcblxcbiNkYXRlU2VsZWN0b3IgPiBwe1xcblxcdGZvbnQtc2l6ZTogMC43NWVtOyAgXFxufVxcblxcbiNkYXRlU2VsZWN0b3I+aW5wdXR7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0bWFyZ2luOiAxZW07XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jcHJvamVjdFNlbGVjdG9yPmgye1xcblxcdGZvbnQtc2l6ZTogMS43NWVtO1xcbn1cXG5cXG4jcHJvamVjdFNlbGVjdG9yPnVsPmxpe1xcblxcdG1hcmdpbjogMC41ZW07XFxuXFxufVxcblxcbiNwcm9qZWN0U2VsZWN0b3I+dWw+c2VjdGlvbntcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFx0aGVpZ2h0OiAyZW07XFxufVxcblxcbiNwcm9qZWN0U2VsZWN0b3I+dWw+c2VjdGlvbj4uZWRpdHtcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1hZ2VzL2ljb25zOC1lZGl0LnN2ZycpO1xcblxcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuXFx0YmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxufVxcblxcbiNwcm9qZWN0U2VsZWN0b3I+dWw+c2VjdGlvbj4uZGVsZXRle1xcblxcdGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWFnZXMvaWNvbnM4LXRyYXNoLWNhbi5zdmcnKTtcXG5cXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcblxcdGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbn1cXG5cXG4jcHJvamVjdFNlbGVjdG9yPnVsPi5hZGRQcm9qZWN0e1xcblxcdHBhZGRpbmc6IDAuNmVtO1xcblxcdGZvbnQtc2l6ZTogMS4yZW07XFxuXFx0bWFyZ2luLXRvcDogMC41ZW07XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRib3JkZXItcmFkaXVzOiAwLjVlbTtcXG5cXHRjb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1hY2NlbnQpO1xcblxcdHRyYW5zaXRpb246IDAuNXM7XFxufVxcblxcbiNwcm9qZWN0U2VsZWN0b3I+dWw+LmFkZFByb2plY3Q6aG92ZXJ7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWFjY2VudC1saWdodCk7XFxufVxcblxcbi8qXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0Ny4zLiBOYXZpZ2F0aW9uIEVkaXQgU2VjdGlvbiBHbG9iYWwgU3R5bGVzXFxuXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuI2VkaXRQcm9qZWN0Q29udGFpbmVye1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Ym9yZGVyOiAwLjJlbSBpbnNldCB2YXIoLS1jbHItYWNjZW50KTtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jZWRpdFByb2plY3RDb250YWluZXI+KntcXG5cXHRmbGV4LWdyb3c6IDE7XFxufVxcblxcbiNlZGl0UHJvamVjdENvbnRhaW5lcj4uZG9uZS1jYW5jZWxTZWN0aW9uPip7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiAyZW07XFxufVxcblxcblxcdC8qXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdDcuNC4gTmF2aWdhdGlvbiBFZGl0IFNlY3Rpb24gVGFyZ2V0IEVsZW1lbnQgU3R5bGVzXFxuXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4jZWRpdFByb2plY3RDb250YWluZXJ7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRib3JkZXI6IDAuMmVtIGluc2V0IHZhcigtLWNsci1hY2NlbnQpO1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNlZGl0UHJvamVjdENvbnRhaW5lcj4uZG9uZS1jYW5jZWxTZWN0aW9ue1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuXFx0dHJhbnNpdGlvbjogMC41cztcXG59XFxuXFxuI2VkaXRQcm9qZWN0Q29udGFpbmVyPi5lZGl0VGFza1NlbGVjdD5pbnB1dHtcXG5cXHR3aWR0aDogODAlO1xcbn1cXG5cXG4jZWRpdFByb2plY3RDb250YWluZXI+LmRvbmUtY2FuY2VsU2VjdGlvbj4qOmhvdmVye1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1zZWNvbmRhcnktb3BhY2l0eS1saWdodCk7XFxufVxcblxcbi8qXFx0PT09PT09PT09PT09PT09PT09PT09XFxuXFx0OC4gTWFpbiBTZWN0aW9uIFN0eWVzXFxuXFx0PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuXFx0LypcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0XFx0OC4xLiBNYWluIFNlY3Rpb24gR2xvYmFsIFN0eWxlc1xcblxcdFxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4jbWFpblNlY3Rpb24+KntcXG5cXHRtaW4td2lkdGg6IDgwJTtcXG59XFxuXFxuI21haW5TZWN0aW9uLCAuaXRlbXMsIC50YXNrc3tcXG5cXHRkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4jbWFpblNlY3Rpb257XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdG1hcmdpbi10b3A6IDNlbTtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMmVtO1xcblxcdGdhcDogMC41ZW0gMGVtO1xcblxcdGZvbnQtc2l6ZTogMS41ZW07XFxuXFx0Y29sb3I6IHZhcigtLWNsci1zZWNvbmRhcnkpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1wcmltYXJ5LW9wYWNpdHktZGFyayk7XFxufVxcblxcbi5pdGVtc3tcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbn1cXG5cXG4udGFza3N7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG59XFxuXFxuLml0ZW1zID4gKntcXG5cXHRncmlkLWNvbHVtbjogMSAvIHNwYW4gMztcXG59XFxuXFxuLml0ZW1ze1xcblxcdGNvbG9yOiB2YXIoLS1jbHItc2Vjb25kYXJ5KTtcXG5cXHRwbGFjZS1zZWxmOiBjZW50ZXI7XFxuXFx0Z2FwOiAwLjVlbSAwZW07XFxuXFx0bWFyZ2luLWJvdHRvbTogMC41ZW07XFxuXFx0YmFja2dyb3VuZDogdmFyKC0tY2xyLXNlY29uZGFyeS1vcGFjaXR5LWxpZ2h0KTtcXG59XFxuXFxuLnRhc2tzPip7XFxuXFx0cGxhY2Utc2VsZjogY2VudGVyO1xcblxcdHBhZGRpbmc6IDAuMmVtO1xcbn1cXG5cXG4udGFza3M+c2VjdGlvbj4qe1xcblxcdGhlaWdodDogMmVtO1xcblxcdHdpZHRoOiAyZW07XFxuXFx0ZmxleC1ncm93OiAxO1xcblxcdHRyYW5zaXRpb246IDAuNXM7XFxufVxcblxcbi50YXNrcz5zZWN0aW9uPio6aG92ZXJ7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXNlY29uZGFyeS1vcGFjaXR5LWxpZ2h0KTtcXG59XFxuXFxuXFx0LypcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHRcXHQ4LjIuIE1haW4gU2VjdGlvbiBUYXJnZXQgRWxlbWVudCBTdHlsZXNcXG5cXHRcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4jbWFpblNlY3Rpb24gPiBoMntcXG5cXHRmb250LXNpemU6IDEuNWVtO1xcblxcdHBhZGRpbmc6IDAuNWVtO1xcbn1cXG5cXG4uaXRlbXM+aDJ7XFxuXFx0Zm9udC1zaXplOiAxLjVlbTtcXG5cXHRwYWRkaW5nLXRvcDogMC4yZW07XFxufVxcblxcbi50YXNrcz5sYWJlbHtcXG5cXHRjb2xvcjogdmFyKC0tY2xyLXNlY29uZGFyeSk7XFxuXFx0cGxhY2Utc2VsZjogY2VudGVyO1xcblxcdGZvbnQtc2l6ZTogMWVtO1xcblxcdHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udGFza3M+aW5wdXR7XFxuXFx0aGVpZ2h0OiAyZW07XFxuXFx0d2lkdGg6IDJlbTtcXG59XFxuXFxuLnRhc2tzPnNlY3Rpb257XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0d2lkdGg6MTAwJTtcXG59XFxuXFxuLmVkaXR7XFxuXFx0YmFja2dyb3VuZC1pbWFnZTogdmFyKC0taW1nLWVkaXQpO1xcbn1cXG5cXG4uZGVsZXRle1xcblxcdGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLWltZy10cmFzaCk7XFxufVxcblxcbi5hZGRUYXNre1xcblxcdHBhZGRpbmc6IDAuNmVtO1xcblxcdG1hcmdpbi1ib3R0b206IDAuNWVtO1xcblxcdGZvbnQtc2l6ZTogMC44ZW07XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0Z3JpZC1jb2x1bW46IDI7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRib3JkZXItcmFkaXVzOiAwLjVlbTtcXG5cXHRjb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1hY2NlbnQpO1xcblxcdHRyYW5zaXRpb246IDAuNXM7XFxufVxcblxcbi5hZGRUYXNrOmhvdmVye1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1hY2NlbnQtbGlnaHQpO1xcbn1cXG5cXG5cXHQvKlxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdFxcdDguMy4gTWFpbiBFZGl0IFNlY3Rpb24gR2xvYmFsIFN0eWxlc1xcblxcdFxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiNlZGl0VGFzaz4qe1xcblxcdHBsYWNlLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuI2VkaXRUYXNrPnNlY3Rpb24+KntcXG5cXHRoZWlnaHQ6IGF1dG87XFxuXFx0d2lkdGg6IDkwJTtcXG5cXHR0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG5cXG4jZWRpdFRhc2s+LmRvbmUtY2FuY2VsU2VjdGlvbj4qOmhvdmVye1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1zZWNvbmRhcnktb3BhY2l0eS1saWdodCk7XFxufVxcblxcbiNlZGl0VGFzaz4uZG9uZS1jYW5jZWxTZWN0aW9uPip7XFxuXFx0d2lkdGg6IGF1dG87XFxuXFx0aGVpZ2h0OiBhdXRvO1xcblxcdGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuXFx0LypcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdFxcdDguNC4gTWFpbiBFZGl0IFNlY3Rpb24gVGFyZ2V0IEVsZW1lbnQgU3R5bGVzXFxuXFx0XFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4jZWRpdFRhc2tDb250YWluZXJ7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRncmlkLWNvbHVtbjogc3BhbiA0O1xcbn1cXG5cXG4jZWRpdFRhc2t7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRtYXJnaW46IGF1dG87XFxuXFx0d2lkdGg6IDgwJTtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMC4yZW0gaW5zZXQgdmFyKC0tY2xyLWFjY2VudCk7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG5cXHRjb2x1bW4tZ2FwOiAwLjVlbTtcXG59XFxuXFxuI2VkaXRUYXNrPnNlY3Rpb257XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHR3aWR0aDogMTAwJTtcXG59XFxuXFxuI2VkaXRUYXNrPnNlY3Rpb24+bGFiZWx7XFxuXFx0Y29sb3I6IHZhcigtLWNsci1zZWNvbmRhcnkpO1xcblxcdHBsYWNlLXNlbGY6IGNlbnRlcjtcXG5cXHRmb250LXNpemU6IDFlbTtcXG5cXHR3aWR0aDogMTAwJTtcXG59XFxuXFxuI2VkaXRUYXNrPnNlY3Rpb24+dGV4dGFyZWF7XFxuXFx0cmVzaXplOiB2ZXJ0aWNhbDtcXG59XFxuXFxuI2VkaXRUYXNrPi5kb25lLWNhbmNlbFNlY3Rpb257XFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLmRvbmV7XFxuXFx0YmFja2dyb3VuZC1pbWFnZTogdmFyKC0taW1nLWRvbmUpO1xcbn1cXG5cXG4uY2FuY2Vse1xcblxcdGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLWltZy1jYW5jZWwpO1xcbn1cXG5cXG4vKlxcdD09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0Ki4gRm9vdGVyIFN0eWxlIFNlY3Rpb25cXG5cXHQ9PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiNmb290ZXJTZWN0aW9ue1xcblxcdHBvc2l0aW9uOiBmaXhlZDtcXG5cXHRsZWZ0OiAwO1xcblxcdGJvdHRvbTogMDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItc2Vjb25kYXJ5KTtcXG5cXHRjb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLypcXHQ9PT09PT09PT09PT09PT09PT09PT09XFxuXFx0Ki4gTWVkaWEgUXVlcnkgU2VjdGlvblxcblxcdD09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc1MHB4KSB7XFxuXFxuXFx0LypcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0XFx0Ki4xLiBHbG9iYWwgTWVkaWEgUXVlcmllc1xcblxcdFxcdD09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG5cXHRib2R5IHtcXG5cXHRcXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1hZ2VzL1RvRG9BcHBCYWNrZ3JvdW5kLWNyb3BwZWQuanBnJyk7XFxuXFx0fVxcblxcblxcdC8qXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0XFx0Ki4yLiBwYWdlR3JpZENvbnRhaW5lciBNZWRpYSBRdWVyaWVzXFxuXFx0XFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuXFx0I3BhZ2VHcmlkQ29udGFpbmVye1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcblxcdFxcdFxcXCJoZWFkZXIgaGVhZGVyIGhlYWRlciBoZWFkZXJcXFwiXFxuXFx0XFx0XFxcInNpZGViYXIgbWFpbiBtYWluIG1haW5cXFwiXFxuXFx0XFx0XFxcImZvb3RlciBmb290ZXIgZm9vdGVyIGZvb3RlclxcXCI7XFxuXFx0fVxcblxcblxcblxcdC8qXFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdFxcdCouMy4gTmF2aWdhdGlvbiBTZWN0aW9uIE1lZGlhIFF1ZXJpZXNcXG5cXHRcXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuXFx0I21haW5TZWN0aW9ue1xcblxcdFxcdG1hcmdpbjogM2VtIDFlbSAwZW07XFxuXFx0fVxcblxcblxcdCNtYWluU2VjdGlvbj4qe1xcblxcdFxcdG1pbi13aWR0aDogNzUlO1xcblxcdH1cXG5cXG5cXHQjbmF2U2VjdGlvbj5oMXtcXG5cXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xcblxcdH1cXG5cXG5cXHQvKlxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdFxcdCouNC4gTmF2aWdhdGlvbiBNZW51IFNlY3Rpb24gTWVkaWEgUXVlcmllc1xcblxcdFxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcblxcdCNuYXZNZW51U2VjdGlvbntcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcXG5cXHR9XFxuXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBnbG9iYWxqcyB9IGZyb20gJy4uL2dsb2JhbCc7XG5cblxuZXhwb3J0IGNvbnN0IG5hdlNlY3Rpb25DcmVhdGlvbiA9ICgoKSA9PiB7XG5cbiAgICAvLyBTaWduIGluIE9iamVjdCBMaXN0XG4gICAgY29uc3QgbmF2T2JqZWN0TGlzdCA9IHtcblxuXG4gICAgICAgIG5hdlNlY3Rpb246IHtcbiAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICBpZDogJ25hdlNlY3Rpb24nLFxuICAgICAgICB9LFxuXG4gICAgICAgIG5hdlNlY3Rpb25PcHRpb25zOiB7XG4gICAgICAgICAgICBpdGVtMToge1xuICAgICAgICAgICAgICAgIHRhZzogJ2gxJyxcbiAgICAgICAgICAgICAgICBodG1sU3RyaW5nOiAnKycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXRlbTI6IHtcbiAgICAgICAgICAgICAgICB0YWc6ICdoMicsXG4gICAgICAgICAgICAgICAgaHRtbFN0cmluZzogJ0NoZWNraXN0JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG5cbiAgICAgICAgbmF2TWVudVNlY3Rpb246IHtcbiAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICBpZDogJ25hdk1lbnVTZWN0aW9uJyxcbiAgICAgICAgICAgIGNsYXNzSWQ6ICduYXZNZW51U2VjdGlvbkhpZGUnLFxuICAgICAgICB9LFxuXG4gICAgICAgIGRlZmF1bHRTZWxlY3Rvcjoge1xuICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgIGlkOiAnZGVmYXVsdFNlbGVjdG9yJyxcbiAgICAgICAgfSxcblxuICAgICAgICBob21lVGl0bGU6IHtcbiAgICAgICAgICAgIHRhZzogJ2gyJyxcbiAgICAgICAgICAgIGh0bWxTdHJpbmc6ICdIb21lJyxcbiAgICAgICAgfSxcblxuICAgICAgICBwcm9qZWN0U2VsZWN0b3I6IHtcbiAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICBpZDogJ3Byb2plY3RTZWxlY3RvcicsXG4gICAgICAgIH0sXG5cbiAgICAgICAgcHJvamVjdHNUaXRsZToge1xuICAgICAgICAgICAgdGFnOiAnaDInLFxuICAgICAgICAgICAgaHRtbFN0cmluZzogJ1Byb2plY3RzJyxcbiAgICAgICAgfSxcblxuICAgICAgICBwcm9qZWN0TGlzdDoge1xuICAgICAgICAgICAgdGFnOiAndWwnLFxuICAgICAgICB9LFxuXG4gICAgICAgIHByb2plY3RJbmZvOiB7XG4gICAgICAgICAgICBpdGVtOiB7XG4gICAgICAgICAgICAgICAgdGFnOiAnbGknLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICBzZWN0aW9uOiB7XG4gICAgICAgICAgICB0YWc6ICdzZWN0aW9uJyxcbiAgICAgICAgfSxcblxuICAgICAgICBlZGl0OiB7XG4gICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgaWQ6ICdlZGl0UHJvaicsXG4gICAgICAgICAgICBjbGFzc0lkOiAnZWRpdCcsXG4gICAgICAgIH0sXG5cbiAgICAgICAgZGVsZXRlOiB7XG4gICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgaWQ6ICdkZWxldGVQcm9qJyxcbiAgICAgICAgICAgIGNsYXNzSWQ6ICdkZWxldGUnLFxuICAgICAgICB9LFxuXG4gICAgICAgIGJ1dHRvbjoge1xuICAgICAgICAgICAgdGFnOiAnYnV0dG9uJyxcbiAgICAgICAgICAgIGNsYXNzSWQ6ICdhZGRQcm9qZWN0JyxcbiAgICAgICAgICAgIGh0bWxTdHJpbmc6ICdBZGQgUHJvamVjdCcsXG4gICAgICAgIH0sXG5cbiAgICB9O1xuXG4gICAgLy8gRnVjdGlvbiBMaXN0XG5cbiAgICAvLyBSZXR1cm4gTmF2IFNlY3Rpb24gQ29udGVudHMgYXMgbGlzdFxuICAgIGNvbnN0IE5hdlNlY3Rpb25Db250ZW50TGlzdCA9ICgpID0+IHtcbiAgICAgICAgbGV0IGNvbnRlbnRMaXN0ID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBPYmplY3Qua2V5cyhuYXZPYmplY3RMaXN0Lm5hdlNlY3Rpb25PcHRpb25zKS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSBnbG9iYWxqcy5uZXdFbGVtZW50KG5hdk9iamVjdExpc3QubmF2U2VjdGlvbk9wdGlvbnNbT2JqZWN0LmtleXMobmF2T2JqZWN0TGlzdC5uYXZTZWN0aW9uT3B0aW9ucylbaV1dKTtcbiAgICAgICAgICAgIGNvbnRlbnRMaXN0LnB1c2goZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRlbnRMaXN0O1xuICAgIH07XG5cbiAgICAvLyBSZXR1cm5zIE5hdiBFbGVtZW50IFNlY3Rpb25cbiAgICBjb25zdCBuYXZFbGVtZW50U2VjdGlvbiA9ICgpID0+IHtcbiAgICAgICAgbGV0IGNvbnRlbnRMaXN0ID0gTmF2U2VjdGlvbkNvbnRlbnRMaXN0KCksXG4gICAgICAgICAgICBlbGVtZW50ID0gZ2xvYmFsanMubmV3RWxlbWVudChuYXZPYmplY3RMaXN0Lm5hdlNlY3Rpb24pO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29udGVudExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udGVudExpc3RbaV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfTtcblxuICAgIC8vIFJldHVybnMgZGVmYXVsdFNlbGVjdG9yIFNlY3Rpb25cbiAgICBjb25zdCBkZWZhdWx0U2VsZWN0b3JTZWN0aW9uID0gKCkgPT4ge1xuICAgICAgICBsZXQgZWxlbWVudCA9IGdsb2JhbGpzLm5ld0VsZW1lbnQobmF2T2JqZWN0TGlzdC5kZWZhdWx0U2VsZWN0b3IpLFxuICAgICAgICAgICAgaXRlbSA9IGdsb2JhbGpzLm5ld0VsZW1lbnQobmF2T2JqZWN0TGlzdC5ob21lVGl0bGUpO1xuXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaXRlbSk7XG5cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfTtcblxuICAgIC8vIEVkaXQvZGVsZXRlIFNlY3Rpb25cbiAgICBjb25zdCBlZGl0X0RlbGV0ZVNlY3Rpb24gPSAocHJvamVjdE51bWJlcikgPT4ge1xuICAgICAgICBsZXQgZWxlbWVudCA9IGdsb2JhbGpzLm5ld0VsZW1lbnQobmF2T2JqZWN0TGlzdC5zZWN0aW9uKSxcbiAgICAgICAgICAgIGVkaXQgPSBnbG9iYWxqcy5uZXdFbGVtZW50KG5hdk9iamVjdExpc3QuZWRpdCksXG4gICAgICAgICAgICBkZUxldGUgPSBnbG9iYWxqcy5uZXdFbGVtZW50KG5hdk9iamVjdExpc3QuZGVsZXRlKTtcblxuICAgICAgICAgICAgZWRpdC5pZCA9IGBlZGl0UHJvaiR7cHJvamVjdE51bWJlcn1gXG4gICAgICAgICAgICBkZUxldGUuaWQgPSBgZGVsZXRlUHJvaiR7cHJvamVjdE51bWJlcn1gXG5cbiAgICAgICAgZWxlbWVudC5hcHBlbmQoZWRpdCwgZGVMZXRlKTtcblxuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9O1xuXG4gICAgLy8gUmV0dXJucyBQcm9qZWN0IExpc3QgU2VjdGlvbiBlbGVtZW50c1xuICAgIGNvbnN0IHByb2plY3RVTFNlY3Rpb24gPSAobGlzdCkgPT4ge1xuICAgICAgICBsZXQgY29udGFpbmVyVUxFbGVtZW50ID0gZ2xvYmFsanMubmV3RWxlbWVudChuYXZPYmplY3RMaXN0LnByb2plY3RMaXN0KSxcbiAgICAgICAgICAgIGJ1dHRvbiA9IGdsb2JhbGpzLm5ld0VsZW1lbnQobmF2T2JqZWN0TGlzdC5idXR0b24pO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5wcm9qZWN0VGl0bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IGdsb2JhbGpzLm5ld0VsZW1lbnQobmF2T2JqZWN0TGlzdC5wcm9qZWN0SW5mby5pdGVtKSxcbiAgICAgICAgICAgICAgICBlZGl0X2RlbGV0ZSA9IGVkaXRfRGVsZXRlU2VjdGlvbihpKTtcbiAgICAgICAgICAgIGl0ZW0uaW5uZXJIVE1MID0gbGlzdC5wcm9qZWN0VGl0bGVzW2ldO1xuICAgICAgICAgICAgY29udGFpbmVyVUxFbGVtZW50LmFwcGVuZChpdGVtLCBlZGl0X2RlbGV0ZSlcblxuICAgICAgICB9XG5cbiAgICAgICAgY29udGFpbmVyVUxFbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbilcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lclVMRWxlbWVudDtcbiAgICB9O1xuXG4gICAgLy8gUmV0dXJucyBwcm9qZWN0U2VsZWN0b3IgU2VjdGlvblxuICAgIGNvbnN0IHByb2plY3RTZWxlY3RvclNlY3Rpb24gPSAoaXRlbSkgPT4ge1xuICAgICAgICBsZXQgZWxlbWVudCA9IGdsb2JhbGpzLm5ld0VsZW1lbnQobmF2T2JqZWN0TGlzdC5wcm9qZWN0U2VsZWN0b3IpLFxuICAgICAgICAgICAgcHJvamVjdFRpdGxlID0gZ2xvYmFsanMubmV3RWxlbWVudChuYXZPYmplY3RMaXN0LnByb2plY3RzVGl0bGUpLFxuICAgICAgICAgICAgcHJvamVjdENvbnRlbnRMaXN0ID0gcHJvamVjdFVMU2VjdGlvbihpdGVtKTtcblxuICAgICAgICBlbGVtZW50LmFwcGVuZChwcm9qZWN0VGl0bGUsIHByb2plY3RDb250ZW50TGlzdCk7XG5cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfTtcblxuXG4gICAgLy8gUmV0dXJucyBuYXZNZW51U2VjdGlvbiBTZWN0aW9uXG4gICAgY29uc3QgbmF2TWVudVNlY3Rpb25TZWN0aW9uID0gKGl0ZW0pID0+IHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBnbG9iYWxqcy5uZXdFbGVtZW50KG5hdk9iamVjdExpc3QubmF2TWVudVNlY3Rpb24pLFxuICAgICAgICAgICAgZGVmYXVsdFNlY3Rpb24gPSBkZWZhdWx0U2VsZWN0b3JTZWN0aW9uKCksXG4gICAgICAgICAgICBwcm9qZWN0U2VjdGlvbiA9IHByb2plY3RTZWxlY3RvclNlY3Rpb24oaXRlbSk7XG5cbiAgICAgICAgZWxlbWVudC5hcHBlbmQoZGVmYXVsdFNlY3Rpb24sIHByb2plY3RTZWN0aW9uKTtcblxuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9O1xuXG5cblxuICAgIC8vIFNpZ24gSW4gc2VjdGlvbiBDcmVhdGlvblxuICAgIGNvbnN0IGNyZWF0ZVNlY3Rpb24gPSAoaW5mbykgPT4ge1xuICAgICAgICBsZXQgZWxlbWVudCA9IGdsb2JhbGpzLnBhZ2VHcmlkQ29ubnRhaW5lcigpO1xuICAgICAgICBlbGVtZW50LmFwcGVuZChuYXZFbGVtZW50U2VjdGlvbigpLG5hdk1lbnVTZWN0aW9uU2VjdGlvbihpbmZvKSlcblxuICAgICAgICBnbG9iYWxqcy5yZW5kZXIuYm9keUFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIH07XG5cbiAgICByZXR1cm4geyBjcmVhdGVTZWN0aW9uIH07XG59KSgpOyIsImV4cG9ydCBjb25zdCBuYXZTZWN0aW9uRnVuY3Rpb24gPSAoKCkgPT4ge1xuXG4gICAgY29uc3QgbmF2RnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIC8vIENhY2hlIERvbSBMaXN0XG4gICAgICAgIGxldCBuYXZTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdlNlY3Rpb24nKSxcbiAgICAgICAgICAgIG5hdlNlY3Rpb25IMSA9IG5hdlNlY3Rpb24uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2gxJyksXG4gICAgICAgICAgICBuYXZNZW51U2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZNZW51U2VjdGlvbicpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIGVkaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbaWRePSdlZGl0UHJvaiddYCksXG4gICAgICAgICAgICAvLyBtYXRjaGVzID0gZWRpdEJ1dHRvblswXS5pZC5tYXRjaCgvXFxkKy8pO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZWRpdEJ1dHRvblswXS5pZClcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG1hdGNoZXNbMF0pXG5cblxuXG4gICAgICAgIC8vRnVuY3Rpb24gTGlzdFxuICAgICAgICBjb25zdCBpY29uUm90YXRlID0gKCkgPT57XG4gICAgICAgICAgICBuYXZTZWN0aW9uSDFbMF0uY2xhc3NMaXN0LnRvZ2dsZSgnbmF2U2VjdGlvbkluZGljYXRvckFjdGl2ZScpXG5cbiAgICAgICAgICAgIG5hdk1lbnVTZWN0aW9uLmNsYXNzTGlzdC50b2dnbGUoJ25hdk1lbnVTZWN0aW9uSGlkZScpXG4gICAgICAgIH1cblxuXG4gICAgICAgIC8vRXZlbnQgQmluZHNcbiAgICAgICAgbmF2U2VjdGlvbkgxWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaWNvblJvdGF0ZSlcbiAgICAgICAgXG4gICAgfTtcblxuICAgIHJldHVybiB7IG5hdkZ1bmN0aW9ufTtcblxufSkoKTsiLCJleHBvcnQgY29uc3QgZ2xvYmFsanMgPSAoKCkgPT4ge1xuICAgIC8vIENhY2hlIERvbVxuICAgIGNvbnN0IGNhY2hlRG9tID0gKCgpID0+IHtcbiAgICAgICAgbGV0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpXG4gICAgICAgIHJldHVybiB7IGJvZHk6IGJvZHl9O1xuICAgIH0pKCk7XG5cblxuICAgIC8vIEZ1bmN0aW9uIExpc3RcbiAgICBjb25zdCBuZXdFbGVtZW50ID0gKGl0ZW0pID0+IHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0ZW0udGFnKTtcbiAgICAgICAgaWYgKGl0ZW0uaHRtbFN0cmluZykgeyBlbGVtZW50LmlubmVySFRNTCA9IGl0ZW0uaHRtbFN0cmluZzsgfVxuICAgICAgICBpZiAoaXRlbS5jbGFzc0lkKSB7IGVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsIGl0ZW0uY2xhc3NJZCl9XG4gICAgICAgIGlmIChpdGVtLmlkKSB7IGVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsIGl0ZW0uaWQpfVxuICAgICAgICBpZiAoaXRlbS5mb3IpIHsgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGl0ZW0uZm9yKX1cbiAgICAgICAgaWYgKGl0ZW0udHlwZSkgeyBlbGVtZW50LnNldEF0dHJpYnV0ZSgndHlwZScsIGl0ZW0udHlwZSl9XG4gICAgICAgIGlmIChpdGVtLm5hbWUpIHsgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBpdGVtLm5hbWUpfVxuICAgICAgICBpZiAoaXRlbS52YWx1ZSkgeyBlbGVtZW50LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBpdGVtLnZhbHVlKX1cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfTtcblxuICAgIGNvbnN0IHBhZ2VHcmlkQ29ubnRhaW5lciA9ICgpID0+IHtcbiAgICAgICAgbGV0IHBhZ2VHcmlkQ29udGFpbmVyID0ge1xuICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgIGlkOiAncGFnZUdyaWRDb250YWluZXInLFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGdsb2JhbGpzLm5ld0VsZW1lbnQocGFnZUdyaWRDb250YWluZXIpXG4gICAgfVxuXG4gICAgLy8gUmVuZGVyIHRvIERPTVxuICAgIGNvbnN0IHJlbmRlciA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGJvZHlBcHBlbmRDaGlsZCA9IChlbGVtZW50KSA9PntcbiAgICAgICAgICAgIGNhY2hlRG9tLmJvZHlbMF0uYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgcmVtb3ZlUHJldiA9ICgpID0+IHtcbiAgICAgICAgICAgIGNhY2hlRG9tLmJvZHlbMF0ubGFzdEVsZW1lbnRDaGlsZC5yZW1vdmUoKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCByZW1vdmVFbGVtZW50ID0gKGVsZW1lbnQpID0+e1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4ge2JvZHlBcHBlbmRDaGlsZDogYm9keUFwcGVuZENoaWxkLCByZW1vdmVQcmV2OnJlbW92ZVByZXYsIHJlbW92ZUVsZW1lbnQ6cmVtb3ZlRWxlbWVudH07XG4gICAgfSkoKTtcblxuXG4gICAgcmV0dXJuIHtuZXdFbGVtZW50Om5ld0VsZW1lbnQsIHBhZ2VHcmlkQ29ubnRhaW5lcjpwYWdlR3JpZENvbm50YWluZXIgLHJlbmRlcjpyZW5kZXJ9XG5cbn0pKCkiLCJpbXBvcnQgeyBnbG9iYWxqcyB9IGZyb20gJy4uL2dsb2JhbCc7XG5pbXBvcnQgeyB1c2VyU3RvcmFnZSB9IGZyb20gJy4uL3VzZXJTdG9yYWdlJztcblxuZXhwb3J0IGNvbnN0IG1haW5TZWN0aW9uQ3JlYXRpb24gPSAoKCkgPT4ge1xuXG4gICAgLy8gU2lnbiBpbiBPYmplY3QgTGlzdFxuICAgIGNvbnN0IG1haW5PYmplY3RMaXN0ID0ge1xuXG4gICAgICAgIG1haW5TZWN0aW9uOiB7XG4gICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgaWQ6ICdtYWluU2VjdGlvbicsXG4gICAgICAgIH0sXG5cbiAgICAgICAgbWFpblNlY3Rpb25IMjoge1xuICAgICAgICAgICAgdGFnOiAnaDInLFxuICAgICAgICAgICAgaHRtbFN0cmluZzogJ0FsbCBUYXNrcycsXG4gICAgICAgIH0sXG5cbiAgICAgICAgdGFza0l0ZW06IHtcbiAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICBpZDogJycsXG4gICAgICAgICAgICBjbGFzc0lkOiAnaXRlbXMnLFxuICAgICAgICB9LFxuXG4gICAgICAgIHRhc2tJdGVtSDI6IHtcbiAgICAgICAgICAgIHRhZzogJ2gyJyxcbiAgICAgICAgICAgIGh0bWxTdHJpbmc6ICcnLFxuICAgICAgICB9LFxuXG4gICAgICAgIHRhc2tzU2VjdGlvbjoge1xuICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgIGNsYXNzSWQ6ICd0YXNrcycsXG4gICAgICAgIH0sXG5cbiAgICAgICAgdGFza0RlZmF1bHRJdGVtczoge1xuICAgICAgICAgICAgaXRlbTA6IHtcbiAgICAgICAgICAgICAgICB0YWc6ICdoMScsXG4gICAgICAgICAgICAgICAgaHRtbFN0cmluZzogJ0NvbXBsZXRlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpdGVtMToge1xuICAgICAgICAgICAgICAgIHRhZzogJ2gyJyxcbiAgICAgICAgICAgICAgICBodG1sU3RyaW5nOiAnVGFza3MnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGl0ZW0yOiB7XG4gICAgICAgICAgICAgICAgdGFnOiAnaDInLFxuICAgICAgICAgICAgICAgIGh0bWxTdHJpbmc6ICdEdWUgRGF0ZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXRlbTM6IHtcbiAgICAgICAgICAgICAgICB0YWc6ICdoMicsXG4gICAgICAgICAgICAgICAgaHRtbFN0cmluZzogJ0VkaXQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICBpdGVtczoge1xuICAgICAgICAgICAgaXRlbTA6IHtcbiAgICAgICAgICAgICAgICB0YWc6ICdpbnB1dCcsXG4gICAgICAgICAgICAgICAgY2xhc3NJZDogJycsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICAgICAgICAgICAgICBpZDogJycsXG4gICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXRlbTE6IHtcbiAgICAgICAgICAgICAgICB0YWc6ICdsYWJlbCcsXG4gICAgICAgICAgICAgICAgY2xhc3NJZDogJycsXG4gICAgICAgICAgICAgICAgZm9yOiAnJyxcbiAgICAgICAgICAgICAgICBodG1sU3RyaW5nOiAnJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpdGVtMjoge1xuICAgICAgICAgICAgICAgIHRhZzogJ3AnLFxuICAgICAgICAgICAgICAgIGNsYXNzSWQ6ICcnLFxuICAgICAgICAgICAgICAgIGh0bWxTdHJpbmc6ICcnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHNlY3Rpb246IHtcbiAgICAgICAgICAgIHRhZzogJ3NlY3Rpb24nLFxuICAgICAgICAgICAgY2xhc3NJZDogJycsXG4gICAgICAgIH0sXG5cbiAgICAgICAgZWRpdDoge1xuICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgIGlkOiAnZWRpdCcsXG4gICAgICAgICAgICBjbGFzc0lkOiAnZWRpdCcsXG4gICAgICAgIH0sXG5cbiAgICAgICAgZGVsZXRlOiB7XG4gICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgaWQ6ICdkZWxldGUnLFxuICAgICAgICAgICAgY2xhc3NJZDogJ2RlbGV0ZScsXG4gICAgICAgIH0sXG5cbiAgICAgICAgYWRkVGFza0J0dG9uOiB7XG4gICAgICAgICAgICB0YWc6ICdidXR0b24nLFxuICAgICAgICAgICAgY2xhc3NJZDogJ2FkZFRhc2snLFxuICAgICAgICAgICAgaHRtbFN0cmluZzogJ0FkZCBUYXNrJyxcbiAgICAgICAgfSxcblxuICAgICAgICBmb290ZXJTZWN0aW9uOiB7XG4gICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgaWQ6ICdmb290ZXJTZWN0aW9uJyxcbiAgICAgICAgfSxcblxuICAgICAgICBmb290ZXJDb250ZW50OiB7XG4gICAgICAgICAgICB0YWc6ICdoMicsXG4gICAgICAgICAgICBodG1sU3RyaW5nOiAnTWFkZSBieSBBbmRyZXcgSHVtcGhyaWVzJyxcbiAgICAgICAgfSxcblxuICAgIH07XG5cbiAgICAvLyBGdWN0aW9uIExpc3RcblxuICAgIC8vIElucHV0IEVsZW1lbnRcbiAgICBjb25zdCBpbnB1dEVsZW1lbnRDcmVhdGlvbiA9ICh0YXNrTnVtYmVyKSA9PiB7XG4gICAgICAgIGxldCBlbGVtZW50ID0gZ2xvYmFsanMubmV3RWxlbWVudChtYWluT2JqZWN0TGlzdC5pdGVtcy5pdGVtMClcblxuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBgdGFzayR7dGFza051bWJlcn1gKVxuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBgdGFzayR7dGFza051bWJlcn1gKVxuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnbmFtZScsIGB0YXNrJHt0YXNrTnVtYmVyfWApXG5cbiAgICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICB9XG5cbiAgICAvLyBMYWJlbCBFbGVtZW50XG4gICAgY29uc3QgbGFiZWxFbGVtZW50Q3JlYXRpb24gPSAodGFza051bWJlciwgaHRtbFN0cmluZykgPT4ge1xuICAgICAgICBsZXQgZWxlbWVudCA9IGdsb2JhbGpzLm5ld0VsZW1lbnQobWFpbk9iamVjdExpc3QuaXRlbXMuaXRlbTEpXG5cbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYHRhc2ske3Rhc2tOdW1iZXJ9YClcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGB0YXNrJHt0YXNrTnVtYmVyfWApXG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gaHRtbFN0cmluZztcblxuICAgICAgICByZXR1cm4gZWxlbWVudFxuICAgIH1cblxuICAgIC8vIERhdGUgRWxlbWVudFxuICAgIGNvbnN0IGRhdGVFbGVtZW50Q3JlYXRpb24gPSAodGFza051bWJlciwgaHRtbFN0cmluZykgPT4ge1xuICAgICAgICBsZXQgZWxlbWVudCA9IGdsb2JhbGpzLm5ld0VsZW1lbnQobWFpbk9iamVjdExpc3QuaXRlbXMuaXRlbTIpXG5cbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYHRhc2ske3Rhc2tOdW1iZXJ9YClcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBodG1sU3RyaW5nO1xuXG4gICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgfVxuXG4gICAgLy8gRWRpdC9kZWxldGUgU2VjdGlvblxuICAgIGNvbnN0IGVkaXRfRGVsZXRlU2VjdGlvbiA9IChjbGFzc05hbWUpID0+IHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBnbG9iYWxqcy5uZXdFbGVtZW50KG1haW5PYmplY3RMaXN0LnNlY3Rpb24pLFxuICAgICAgICAgICAgZWRpdCA9IGdsb2JhbGpzLm5ld0VsZW1lbnQobWFpbk9iamVjdExpc3QuZWRpdCksXG4gICAgICAgICAgICBkZUxldGUgPSBnbG9iYWxqcy5uZXdFbGVtZW50KG1haW5PYmplY3RMaXN0LmRlbGV0ZSk7XG5cbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYHRhc2ske2NsYXNzTmFtZX1gKVxuICAgICAgICBlbGVtZW50LmFwcGVuZChlZGl0LCBkZUxldGUpO1xuXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH07XG5cbiAgICAvLyBEZWZhdWx0IFRhc2sgQ3JlYXRpb25cbiAgICBjb25zdCB0YXNrRWxlbWVudENyZWF0aW9uID0gKHRhc2tOdW1iZXIsIHRhc2tEdWVEYXRlLCB0YXNrTmFtZSwgdGFza0NvbXBsZXRlID0gZmFsc2UpID0+IHtcbiAgICAgICAgbGV0IGVsZW1lbnRMaXN0ID0gW10sXG4gICAgICAgICAgICBpbnB1dCA9IGlucHV0RWxlbWVudENyZWF0aW9uKHRhc2tOdW1iZXIpLFxuICAgICAgICAgICAgbGFiZWwgPSBsYWJlbEVsZW1lbnRDcmVhdGlvbih0YXNrTnVtYmVyLCB0YXNrTmFtZSksXG4gICAgICAgICAgICBwVGFnID0gZGF0ZUVsZW1lbnRDcmVhdGlvbih0YXNrTnVtYmVyLCB0YXNrRHVlRGF0ZSksXG4gICAgICAgICAgICBzZWN0aW9uID0gZWRpdF9EZWxldGVTZWN0aW9uKHRhc2tOdW1iZXIpXG5cbiAgICAgICAgbGFiZWwuY2hlY2tlZCA9IHRhc2tDb21wbGV0ZVxuICAgICAgICBlbGVtZW50TGlzdC5wdXNoKGlucHV0LCBsYWJlbCwgcFRhZywgc2VjdGlvbilcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRMaXN0XG4gICAgfVxuXG4gICAgLy8gVGFza3MgU2VjdGlvbiBEZWZhdWx0IENyZWF0aW9uXG4gICAgY29uc3QgdGFza3NEZWZhdWx0U2VjdGlvbiA9ICh0YXNrTmFtZSwgdXNlckRhdGEgPSB1c2VyU3RvcmFnZS5kZW1vKSA9PiB7XG4gICAgICAgIGxldCBlbGVtZW50ID0gZ2xvYmFsanMubmV3RWxlbWVudChtYWluT2JqZWN0TGlzdC50YXNrc1NlY3Rpb24pLFxuICAgICAgICAgICAgdGFza3MgPSB0YXNrRWxlbWVudE9iamVjdExpc3QodGFza05hbWUsIHVzZXJEYXRhKVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgT2JqZWN0LmtleXMobWFpbk9iamVjdExpc3QudGFza0RlZmF1bHRJdGVtcykubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBkZWZhdWx0SXRlbSA9IGdsb2JhbGpzLm5ld0VsZW1lbnQobWFpbk9iamVjdExpc3QudGFza0RlZmF1bHRJdGVtc1tgaXRlbSR7aX1gXSk7XG5cbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZGVmYXVsdEl0ZW0pXG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE9iamVjdC5rZXlzKHRhc2tzKS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHRhc2sgPSB0YXNrc1tgdGFzayR7aX1gXVxuXG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRhc2subGVuZ3RoOyB4KyspIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHRhc2tbeF0pO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICB9XG5cbiAgICAvLyBJdGVtIFNlY3Rpb24gQ3JlYXRpb25cbiAgICBjb25zdCBpdGVtU2VjdGlvbkNyZWF0aW9uID0gKGl0ZW1JRCwgaDJUaXRsZSwgdXNlckRhdGEgPSB1c2VyU3RvcmFnZS5kZW1vKSA9PiB7XG4gICAgICAgIGxldCBlbGVtZW50ID0gZ2xvYmFsanMubmV3RWxlbWVudChtYWluT2JqZWN0TGlzdC50YXNrSXRlbSksXG4gICAgICAgICAgICB0YXNrSDIgPSBnbG9iYWxqcy5uZXdFbGVtZW50KG1haW5PYmplY3RMaXN0LnRhc2tJdGVtSDIpLFxuICAgICAgICAgICAgdGFza3MgPSB0YXNrc0RlZmF1bHRTZWN0aW9uKGgyVGl0bGUsIHVzZXJEYXRhKSxcbiAgICAgICAgICAgIGFkZFRhc2sgPSBnbG9iYWxqcy5uZXdFbGVtZW50KG1haW5PYmplY3RMaXN0LmFkZFRhc2tCdHRvbilcblxuICAgICAgICB0YXNrSDIuaW5uZXJIVE1MID0gaDJUaXRsZVxuICAgICAgICBlbGVtZW50LmlkID0gYGl0ZW0ke2l0ZW1JRH1gXG5cbiAgICAgICAgZWxlbWVudC5hcHBlbmQodGFza0gyLCB0YXNrcywgYWRkVGFzaylcblxuICAgICAgICByZXR1cm4gZWxlbWVudFxuICAgIH1cblxuICAgIC8vIEZvb3RlciBTZWN0aW9uXG4gICAgY29uc3QgZm9vdGVyU2VjdGlvbiA9ICgpID0+IHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBnbG9iYWxqcy5uZXdFbGVtZW50KG1haW5PYmplY3RMaXN0LmZvb3RlclNlY3Rpb24pLFxuICAgICAgICAgICAgY29udGVudCA9IGdsb2JhbGpzLm5ld0VsZW1lbnQobWFpbk9iamVjdExpc3QuZm9vdGVyQ29udGVudClcblxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNvbnRlbnQpXG5cbiAgICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICB9XG5cblxuICAgIC8vIFRhc2sgRWxlbWVudCBMaXN0IFxuXG4gICAgY29uc3QgdGFza0VsZW1lbnRPYmplY3RMaXN0ID0gKGl0ZW1OYW1lLCB1c2VyRGF0YSA9IHVzZXJTdG9yYWdlLmRlbW8pID0+IHtcbiAgICAgICAgbGV0IHRhc2tPYmplY3RMaXN0ID0ge30sXG4gICAgICAgICAgICB0YXNrTnVtYmVyID0gdXNlckRhdGEucHJvamVjdFRpdGxlcy5pbmRleE9mKGl0ZW1OYW1lKVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdXNlckRhdGFbYGl0ZW0ke3Rhc2tOdW1iZXJ9YF0udGFza0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBkdWVEYXRlID0gdXNlckRhdGFbYGl0ZW0ke3Rhc2tOdW1iZXJ9YF0udGFza3NbYHRhc2ske2l9YF0uZHVlRGF0ZSxcbiAgICAgICAgICAgICAgICB0YXNrTmFtZSA9IHVzZXJEYXRhW2BpdGVtJHt0YXNrTnVtYmVyfWBdLnRhc2tMaXN0W2ldLFxuICAgICAgICAgICAgICAgIHRhc2tDb21wbGV0ZSA9IHVzZXJEYXRhW2BpdGVtJHt0YXNrTnVtYmVyfWBdLnRhc2tzW2B0YXNrJHtpfWBdLmNvbXBsZXRlXG5cbiAgICAgICAgICAgIHRhc2tPYmplY3RMaXN0W2B0YXNrJHtpfWBdID0gdGFza0VsZW1lbnRDcmVhdGlvbihpLCBkdWVEYXRlLCB0YXNrTmFtZSwgdGFza0NvbXBsZXRlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGFza09iamVjdExpc3RcbiAgICB9XG5cbiAgICAvLyBJdGVtIFNlY3Rpb24gRWxlbWVudCBMaXN0XG4gICAgY29uc3QgaXRlbVNlY3Rpb25FbGVtZW50TGlzdCA9ICh1c2VyRGF0YSA9IHVzZXJTdG9yYWdlLmRlbW8pID0+IHtcbiAgICAgICAgbGV0IGl0ZW1MaXN0T2JqZWN0ID0ge31cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVzZXJEYXRhLnByb2plY3RUaXRsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBpdGVtTmFtZSA9IHVzZXJEYXRhLnByb2plY3RUaXRsZXNbaV1cblxuICAgICAgICAgICAgaXRlbUxpc3RPYmplY3RbYGl0ZW0ke2l9YF0gPSBpdGVtU2VjdGlvbkNyZWF0aW9uKGksIGl0ZW1OYW1lLCB1c2VyRGF0YSk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpdGVtTGlzdE9iamVjdFxuICAgIH1cblxuXG5cbiAgICAvLyBNYWluIFNlY3Rpb24gQ3JlYXRpb25cbiAgICBjb25zdCBjcmVhdGVTZWN0aW9uID0gKHVzZXJEYXRhID0gdXNlclN0b3JhZ2UuZGVtbykgPT4ge1xuICAgICAgICBsZXQgZWxlbWVudCA9IGdsb2JhbGpzLm5ld0VsZW1lbnQobWFpbk9iamVjdExpc3QubWFpblNlY3Rpb24pLFxuICAgICAgICAgICAgc2VjdGlvbkgyID0gZ2xvYmFsanMubmV3RWxlbWVudChtYWluT2JqZWN0TGlzdC5tYWluU2VjdGlvbkgyKSxcbiAgICAgICAgICAgIGl0ZW1zID0gaXRlbVNlY3Rpb25FbGVtZW50TGlzdCh1c2VyRGF0YSksXG4gICAgICAgICAgICBmb290ZXIgPSBmb290ZXJTZWN0aW9uKClcblxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHNlY3Rpb25IMilcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE9iamVjdC5rZXlzKGl0ZW1zKS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChpdGVtc1tgaXRlbSR7aX1gXSlcbiAgICAgICAgfVxuXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKVxuXG4gICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgY3JlYXRlU2VjdGlvbn07XG5cbn0pKCk7IiwiaW1wb3J0IHsgZ2xvYmFsanMgfSBmcm9tICcuLi9nbG9iYWwnO1xuXG5cbmV4cG9ydCBjb25zdCBzaWduSW5TZWN0aW9uQ3JlYXRpb24gPSAoKCkgPT4ge1xuXG4gICAgLy9TaWduIGluIE9iamVjdCBMaXN0XG4gICAgY29uc3QgU2lnbkluT2JqZWN0TGlzdCA9IHtcblxuICAgICAgICBzaWduSW5Db250YWluZXJPdXRlcjoge1xuICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgIGlkOiAnc2lnbkluLUNvbnRhaW5lci1PdXRlcicsXG4gICAgICAgIH0sXG5cbiAgICAgICAgc2lnbkluQ29udGFpbmVySW5uZXI6IHtcbiAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICBpZDogJ3NpZ25Jbi1Db250YWluZXItSW5uZXInLFxuICAgICAgICB9LFxuXG4gICAgICAgIGFwcFRpdGxlOiB7XG4gICAgICAgICAgICB0YWc6ICdoMicsXG4gICAgICAgICAgICBpZDogJ2FwcFRpdGxlJyxcbiAgICAgICAgICAgIGh0bWxTdHJpbmc6ICdXZWxjb21lIHRvIENoZWNraXN0JyxcbiAgICAgICAgfSxcblxuICAgICAgICBzaWduSW5Gb3JtQ29udGFpbmVyOiB7XG4gICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgaWQ6ICdzaWduSW4tRm9ybS1Db250YWluZXInLFxuICAgICAgICB9LFxuXG4gICAgICAgIHNpZ25pbkZvcm06IHtcbiAgICAgICAgICAgIHRhZzogJ2Zvcm0nLFxuICAgICAgICAgICAgaWQ6ICd1c2VySW5mbycsXG4gICAgICAgIH0sXG5cbiAgICAgICAgdXNlckluZm86IHtcbiAgICAgICAgICAgIHVzZXJuYW1lTGFiZWw6IHtcbiAgICAgICAgICAgICAgICB0YWc6ICdsYWJlbCcsXG4gICAgICAgICAgICAgICAgZm9yOiAndXNlck5hbWUnLFxuICAgICAgICAgICAgICAgIGh0bWxTdHJpbmc6ICdVc2VybmFtZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdXNlcm5hbWVJbnB1dDoge1xuICAgICAgICAgICAgICAgIHRhZzogJ2lucHV0JyxcbiAgICAgICAgICAgICAgICBpZDogJ3VzZXJOYW1lJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3VzZXJOYW1lJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXNzd29yZExhYmVsOiB7XG4gICAgICAgICAgICAgICAgdGFnOiAnbGFiZWwnLFxuICAgICAgICAgICAgICAgIGZvcjogJ3Bhc3N3b3JkJyxcbiAgICAgICAgICAgICAgICBodG1sU3RyaW5nOiAnUGFzc3dvcmQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhc3N3b3JkSW5wdXQ6IHtcbiAgICAgICAgICAgICAgICB0YWc6ICdpbnB1dCcsXG4gICAgICAgICAgICAgICAgaWQ6ICdwYXNzd29yZCcsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3Bhc3N3b3JkJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAncGFzc3dvcmQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNpZ25pbkJ1dHRvbjoge1xuICAgICAgICAgICAgICAgIHRhZzogJ2lucHV0JyxcbiAgICAgICAgICAgICAgICBpZDogJ3NpZ25JbkJ1dHRvbicsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICdTaWduIEluJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaWdudXBCdXR0b246IHtcbiAgICAgICAgICAgICAgICB0YWc6ICdpbnB1dCcsXG4gICAgICAgICAgICAgICAgaWQ6ICdzaWduVXBCdXR0b24nLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdidXR0b24nLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnU2lnbiBVcCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuXG4gICAgICAgIGRlbW9CdXR0b246IHtcbiAgICAgICAgICAgIHRhZzogJ2J1dHRvbicsXG4gICAgICAgICAgICBpZDogJ2RlbW9CdXR0b24nLFxuICAgICAgICAgICAgaHRtbFN0cmluZzogJ0RlbW8nLFxuICAgICAgICB9LFxuXG4gICAgfTtcblxuICAgIC8vRnVjdGlvbiBMaXN0XG5cbiAgICAvL1JldHVybiBGb3JtIEVsZW1lbnQgQ29udGVudHMgYXMgbGlzdFxuICAgIGNvbnN0IGZvcm1FbGVtZW50Q29udGVudExpc3QgPSAoKSA9PiB7XG4gICAgICAgIGxldCBjb250ZW50TGlzdCA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgT2JqZWN0LmtleXMoU2lnbkluT2JqZWN0TGlzdC51c2VySW5mbykubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBlbGVtZW50ID0gZ2xvYmFsanMubmV3RWxlbWVudChTaWduSW5PYmplY3RMaXN0LnVzZXJJbmZvW09iamVjdC5rZXlzKFNpZ25Jbk9iamVjdExpc3QudXNlckluZm8pW2ldXSk7XG4gICAgICAgICAgICBjb250ZW50TGlzdC5wdXNoKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250ZW50TGlzdDtcbiAgICB9O1xuXG4gICAgLy9SZXR1cm5zIEZvcm0gRWxlbWVudCBTZWN0aW9uXG4gICAgY29uc3QgZm9ybUVsZW1lbnRTZWN0aW9uID0gKCkgPT4ge1xuICAgICAgICBsZXQgY29udGVudExpc3QgPSBmb3JtRWxlbWVudENvbnRlbnRMaXN0KCksXG4gICAgICAgICAgICBlbGVtZW50ID0gZ2xvYmFsanMubmV3RWxlbWVudChTaWduSW5PYmplY3RMaXN0LnNpZ25pbkZvcm0pO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29udGVudExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udGVudExpc3RbaV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfTtcblxuICAgIC8vUmV0dXJucyBTaWduIEluIEZvcm0gQ29udGFpbmVyIFNlY3Rpb25cbiAgICBjb25zdCBzaWduSW5Gb3JtQ29udGFpbmVyU2VjdGlvbiA9ICgpID0+IHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBnbG9iYWxqcy5uZXdFbGVtZW50KFNpZ25Jbk9iamVjdExpc3Quc2lnbkluRm9ybUNvbnRhaW5lcik7XG5cbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChmb3JtRWxlbWVudFNlY3Rpb24oKSk7XG5cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfTtcblxuICAgIC8vUmV0dXJucyBTaWduIEluIENvbnRhaW5lciBJbm5lciBTZWN0aW9uXG4gICAgY29uc3Qgc2lnbkluQ29udGFpbmVySW5uZXJTZWN0aW9uID0gKCkgPT4ge1xuICAgICAgICBsZXQgY29udGFpbmVyRWxlbWVudCA9IGdsb2JhbGpzLm5ld0VsZW1lbnQoU2lnbkluT2JqZWN0TGlzdC5zaWduSW5Db250YWluZXJJbm5lciksXG4gICAgICAgICAgICBoMkVsZW1lbnQgPSBnbG9iYWxqcy5uZXdFbGVtZW50KFNpZ25Jbk9iamVjdExpc3QuYXBwVGl0bGUpLFxuICAgICAgICAgICAgYnV0dG9uRWxlbWVudCA9IGdsb2JhbGpzLm5ld0VsZW1lbnQoU2lnbkluT2JqZWN0TGlzdC5kZW1vQnV0dG9uKSxcbiAgICAgICAgICAgIHNpZ25JbkZvcm1Db250YWluZXIgPSBzaWduSW5Gb3JtQ29udGFpbmVyU2VjdGlvbigpLFxuICAgICAgICAgICAgZWxlbWVudExpc3QgPSBbaDJFbGVtZW50LCBzaWduSW5Gb3JtQ29udGFpbmVyLCBidXR0b25FbGVtZW50XTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnRMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnRMaXN0W2ldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb250YWluZXJFbGVtZW50O1xuICAgIH07XG5cbiAgICAvL1JldHVybnMgU2lnbiBJbiBDb250YWluZXIgT3V0ZXIgU2VjdGlvblxuICAgIGNvbnN0IHNpZ25JbkNvbnRhaW5lck91dGVyU2VjdGlvbiA9ICgpID0+IHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBnbG9iYWxqcy5uZXdFbGVtZW50KFNpZ25Jbk9iamVjdExpc3Quc2lnbkluQ29udGFpbmVyT3V0ZXIpLFxuICAgICAgICAgICAgc2lnbkluQ29udGFpbmVySW5uZXIgPSBzaWduSW5Db250YWluZXJJbm5lclNlY3Rpb24oKTtcblxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHNpZ25JbkNvbnRhaW5lcklubmVyKTtcblxuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9O1xuXG4gICAgLy8gU2lnbiBJbiBzZWN0aW9uIENyZWF0aW9uXG4gICAgY29uc3QgY3JlYXRlU2VjdGlvbiA9ICgpID0+IHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBzaWduSW5Db250YWluZXJPdXRlclNlY3Rpb24oKTtcblxuICAgICAgICBnbG9iYWxqcy5yZW5kZXIuYm9keUFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIH07XG5cblxuICAgIHJldHVybiB7IGNyZWF0ZVNlY3Rpb259O1xufSkoKTsiLCJcbiAgXG4vLyB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJBbmRyZXdcIiwgSlNPTi5zdHJpbmdpZnkoQW5kcmV3KSk7XG5cbi8vIGxldCBuZXdPYmplY3QgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJBbmRyZXdcIik7XG4vLyBjb25zb2xlLmxvZyhKU09OLnBhcnNlKG5ld09iamVjdCkpO1xuXG5cbi8vIGxldCBpbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJJbmZvJylcblxuLy8gY29uc29sZS5sb2coaW5mby5lbGVtZW50c1sndXNlck5hbWUnXS52YWx1ZSlcblxuXG5cbi8vIGxldCB0ZXN0ID0gKCkgPT4ge1xuLy8gICAgIGlmKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShpbmZvLmVsZW1lbnRzWyd1c2VyTmFtZSddLnZhbHVlKSA9PSBudWxsKXtcbi8vICAgICAgICAgY29uc29sZS5sb2coJ1RoaXMgaXMgbm90IGEgdXNlcm5hbWUnKVxuLy8gICAgIH1lbHNle1xuLy8gICAgICAgICBjb25zb2xlLmxvZygnVGhpcyBNYXRjaGVzJylcbi8vICAgICAgICAgY29uc29sZS5sb2cod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGluZm8uZWxlbWVudHNbJ3VzZXJOYW1lJ10udmFsdWUpKVxuLy8gICAgICAgICBsZXQgdGVzdDIgPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShpbmZvLmVsZW1lbnRzWyd1c2VyTmFtZSddLnZhbHVlKSlcbi8vICAgICAgICAgY29uc29sZS5sb2codGVzdDIucGFzc3dvcmQpXG4vLyAgICAgfVxuLy8gfVxuXG5cbi8vIGxldCB0ZXN0MiA9ICh4KSA9PiB7XG4vLyAgICAgaWYod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGluZm8uZWxlbWVudHNbJ3VzZXJOYW1lJ10udmFsdWUpID09IG51bGwpe1xuLy8gICAgICAgICBjb25zb2xlLmxvZygnVGhpcyBpcyBub3QgYSB1c2VybmFtZScpXG4vLyAgICAgfWVsc2V7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCdUaGlzIE1hdGNoZXMnKVxuLy8gICAgICAgICBjb25zb2xlLmxvZyh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oaW5mby5lbGVtZW50c1sndXNlck5hbWUnXS52YWx1ZSkpXG4vLyAgICAgfVxuLy8gfVxuXG4vLyB0ZXN0KClcblxuLy8gd2luZG93LmxvY2FsU3RvcmFnZS5jbGVhcigpXG5cblxuXG4vLyBUaGlzIFNpZ24gaW4gbW9kdWxlIGhhcyB0byBoYW5kbGU6XG4vLyAgICAgIC12ZXJpZmljYXRpb25cbi8vICAgICAgLVNpZ24taW4gdXNpbmcgZGF0YSBmcm9tIExvY2FsIFN0b3JhZ2Ugb3IgdXNlIERlZmF1bHRzIGZyb20gRGVtb1xuLy8gICAgICAtU2lnbi11cCBwYWdlIGNyZWF0aW9uL2Rpc3BsYXkgd2hlbiBuZWVkZWRcbi8vICAgICAgLWFkZGluZyBjcmVhdGVkIFNpZ24taW4gdG8gc3RvcmFnZSAoTW9zdCBsaWtlbHkgdXNpbmcgYSBmdWN0aW9uIGluIHRoZSB1c2VyU3RvcmFnZSBNb2R1bGUpXG4vLyAgICAgIC1EZW1vIEJ1dHR0b24gbmVlZHMgdG8gcnVuIGEgZnVuY3Rpb24gZnJvbSBNYWluIFNlY3Rpb24gbW9kdWxlIHVzaW5nIHRoZSBEZW1vIHVzZXIgZGF0YVxuXG5pbXBvcnQgeyBnbG9iYWxqcyB9IGZyb20gJy4uL2dsb2JhbCc7XG5pbXBvcnQgeyB1c2VyU3RvcmFnZSB9IGZyb20gJy4uL3VzZXJTdG9yYWdlJztcbmltcG9ydCB7IHNpZ25VcFNlY3Rpb25DcmVhdGlvbiB9IGZyb20gJy4uL3NpZ25VcFNlY3Rpb25GaWxlcy9zaWduVXBTZWN0aW9uQ3JlYXRpb24uanMnO1xuaW1wb3J0IHsgc2lnblVwU2VjdGlvbkZ1bmN0aW9uIH0gZnJvbSAnLi4vc2lnblVwU2VjdGlvbkZpbGVzL3NpZ25VcFNlY3Rpb25GdW5jdGlvbic7XG5cbmV4cG9ydCBjb25zdCBzaWduSW5TZWN0aW9uRnVuY3Rpb24gPSAoKCkgPT4ge1xuXG4gICAgY29uc3Qgc2lnbkluRnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIC8vIENhY2hlIERvbSBMaXN0XG4gICAgICAgIGxldCBpbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJJbmZvJyksXG4gICAgICAgICAgICBzaWduSW5CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lnbkluQnV0dG9uJyksXG4gICAgICAgICAgICBzaWduVXBCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lnblVwQnV0dG9uJyksXG4gICAgICAgICAgICBzaWduSW5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lnbkluLUNvbnRhaW5lci1PdXRlcicpO1xuXG4gICAgICAgIC8vRnVuY3Rpb24gTGlzdFxuICAgICAgICBjb25zdCB1c2VyVmFsaWRhdGlvbiA9ICh1c2VyVG9WYWxpZGF0ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHVzZXJTdG9yYWdlLnVzZXJzLnVzZXJMaXN0LmluY2x1ZGVzKHVzZXJUb1ZhbGlkYXRlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHBhc3N3b3JkVmFsaWRhdGlvbiA9ICh1c2VyLCBwYXNzd29yZFRvVmFsaWRhdGUpID0+IHtcbiAgICAgICAgICAgIGlmICh1c2VyU3RvcmFnZS51c2Vyc1t1c2VyXS5wYXNzd29yZCA9PSBwYXNzd29yZFRvVmFsaWRhdGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBzaWduSW5WYWxpZGF0aW9uID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHVzZXJWYWxpZGF0aW9uKGluZm8uZWxlbWVudHNbJ3VzZXJOYW1lJ10udmFsdWUpKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAocGFzc3dvcmRWYWxpZGF0aW9uKGluZm8uZWxlbWVudHNbJ3VzZXJOYW1lJ10udmFsdWUsIGluZm8uZWxlbWVudHNbJ3Bhc3N3b3JkJ10udmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1Bhc3N3b3JkIGRvZXMgbm90IG1hdGNoJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFsZXJ0KCdVc2VyIElEIGRvZXMgbm90IG1hdGNoJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy9FdmVudCBCaW5kc1xuICAgICAgICBzaWduSW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaWduSW5WYWxpZGF0aW9uKVxuICAgICAgICBzaWduVXBCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBnbG9iYWxqcy5yZW5kZXIucmVtb3ZlRWxlbWVudChzaWduSW5Db250YWluZXIpO1xuICAgICAgICAgICAgc2lnblVwU2VjdGlvbkNyZWF0aW9uLmNyZWF0ZVNlY3Rpb24oKTtcbiAgICAgICAgICAgIHNpZ25VcFNlY3Rpb25GdW5jdGlvbi5zaWduVXBGdW5jdGlvbigpXG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgIHJldHVybiB7IHNpZ25JbkZ1bmN0aW9uIH07XG5cbn0pKCk7XG4iLCJpbXBvcnQgeyBnbG9iYWxqcyB9IGZyb20gJy4uL2dsb2JhbCc7XG5cblxuZXhwb3J0IGNvbnN0IHNpZ25VcFNlY3Rpb25DcmVhdGlvbiA9ICgoKSA9PiB7XG5cbiAgICAvL1NpZ24gaW4gT2JqZWN0IExpc3RcbiAgICBjb25zdCBTaWduVXBPYmplY3RMaXN0ID0ge1xuXG4gICAgICAgIHNpZ25VcENvbnRhaW5lck91dGVyOiB7XG4gICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgaWQ6ICdzaWduVXAtQ29udGFpbmVyLU91dGVyJyxcbiAgICAgICAgfSxcblxuICAgICAgICBzaWduVXBDb250YWluZXJJbm5lcjoge1xuICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgIGlkOiAnc2lnblVwLUNvbnRhaW5lci1Jbm5lcicsXG4gICAgICAgIH0sXG5cbiAgICAgICAgYXBwVGl0bGU6IHtcbiAgICAgICAgICAgIHRhZzogJ2gyJyxcbiAgICAgICAgICAgIGlkOiAnYXBwVGl0bGUnLFxuICAgICAgICAgICAgaHRtbFN0cmluZzogJ0xvZy1JbiBDcmVhdGlvbicsXG4gICAgICAgIH0sXG5cbiAgICAgICAgc2lnblVwRm9ybUNvbnRhaW5lcjoge1xuICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgIGlkOiAnc2lnblVwLUZvcm0tQ29udGFpbmVyJyxcbiAgICAgICAgfSxcblxuICAgICAgICBzaWduVXBGb3JtOiB7XG4gICAgICAgICAgICB0YWc6ICdmb3JtJyxcbiAgICAgICAgICAgIGlkOid1c2VyQ3JlYXRlSW5mbycsXG4gICAgICAgIH0sXG5cbiAgICAgICAgdXNlckluZm86IHtcbiAgICAgICAgICAgIHVzZXJuYW1lTGFiZWw6IHtcbiAgICAgICAgICAgICAgICB0YWc6ICdsYWJlbCcsXG4gICAgICAgICAgICAgICAgZm9yOiAndXNlck5hbWUnLFxuICAgICAgICAgICAgICAgIGh0bWxTdHJpbmc6ICdDcmVhdGUgVXNlcm5hbWUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVzZXJSZXF1aXJlOiB7XG4gICAgICAgICAgICAgICAgdGFnOiAnaDInLFxuICAgICAgICAgICAgICAgIGlkOiAndXNlclJlcXVpcmUnLFxuICAgICAgICAgICAgICAgIGh0bWxTdHJpbmc6J1JlcXVpcmVtZW50czonLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVzZXJSZXF1aXJlbWVudHM6IHtcbiAgICAgICAgICAgICAgICB0YWc6ICdoMicsXG4gICAgICAgICAgICAgICAgaWQ6ICd1c2VyUmVxdWlyZW1lbnRzJyxcbiAgICAgICAgICAgICAgICBodG1sU3RyaW5nOidhdCBsZWFzdCBzaXggY2hhcmFjdGVycyBsb25nLCBvbmUgbnVtYmVyLCBvbmUgbG93ZXJjYXNlIGFuZCBvbmUgdXBwZXJjYXNlIGxldHRlcicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdXNlcm5hbWVJbnB1dDoge1xuICAgICAgICAgICAgICAgIHRhZzogJ2lucHV0JyxcbiAgICAgICAgICAgICAgICBpZDogJ2NyZWF0ZVVzZXJOYW1lJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3VzZXJOYW1lJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXNzd29yZExhYmVsOiB7XG4gICAgICAgICAgICAgICAgdGFnOiAnbGFiZWwnLFxuICAgICAgICAgICAgICAgIGZvcjogJ3Bhc3N3b3JkJyxcbiAgICAgICAgICAgICAgICBodG1sU3RyaW5nOiAnQ3JlYXRlIFBhc3N3b3JkJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXNzd29yZFJlcXVpcmU6IHtcbiAgICAgICAgICAgICAgICB0YWc6ICdoMicsXG4gICAgICAgICAgICAgICAgaWQ6ICdwd1JlcXVpcmUnLFxuICAgICAgICAgICAgICAgIGh0bWxTdHJpbmc6J1JlcXVpcmVtZW50czonLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhc3N3b3JkUmVxdWlyZW1lbnRzOiB7XG4gICAgICAgICAgICAgICAgdGFnOiAnaDInLFxuICAgICAgICAgICAgICAgIGlkOiAncHdkUmVxdWlyZW1lbnRzJyxcbiAgICAgICAgICAgICAgICBodG1sU3RyaW5nOidhdCBsZWFzdCBzaXggY2hhcmFjdGVycyBsb25nIGluY2x1ZGluZyB1bmRlcnNjb3JlLCAgb25lIG51bWJlciwgb25lIGxvd2VyY2FzZSBhbmQgb25lIHVwcGVyY2FzZSBsZXR0ZXInLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhc3N3b3JkSW5wdXQ6IHtcbiAgICAgICAgICAgICAgICB0YWc6ICdpbnB1dCcsXG4gICAgICAgICAgICAgICAgaWQ6ICdwYXNzd2NyZWF0ZVBhc3N3b3JkJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3Bhc3N3b3JkJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNyZWF0ZUJ1dHRvbjoge1xuICAgICAgICAgICAgICAgIHRhZzogJ2lucHV0JyxcbiAgICAgICAgICAgICAgICBpZDonc2lnblVwQ3JlYXRlJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ0NyZWF0ZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uOiB7XG4gICAgICAgICAgICAgICAgdGFnOiAnaW5wdXQnLFxuICAgICAgICAgICAgICAgIGlkOidzaWduVXBDYW5jZWwnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdidXR0b24nLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnQ2FuY2VsJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfTtcbiAgICBcbiAgICAvL0Z1Y3Rpb24gTGlzdFxuXG4gICAgLy9SZXR1cm4gRm9ybSBFbGVtZW50IENvbnRlbnRzIGFzIGxpc3RcbiAgICBjb25zdCBmb3JtRWxlbWVudENvbnRlbnRMaXN0ID0gKCkgPT4ge1xuICAgICAgICBsZXQgY29udGVudExpc3QgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE9iamVjdC5rZXlzKFNpZ25VcE9iamVjdExpc3QudXNlckluZm8pLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9IGdsb2JhbGpzLm5ld0VsZW1lbnQoU2lnblVwT2JqZWN0TGlzdC51c2VySW5mb1tPYmplY3Qua2V5cyhTaWduVXBPYmplY3RMaXN0LnVzZXJJbmZvKVtpXV0pO1xuICAgICAgICAgICAgY29udGVudExpc3QucHVzaChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udGVudExpc3Q7XG4gICAgfTtcbiAgICAgIFxuICAgIC8vUmV0dXJucyBGb3JtIEVsZW1lbnQgU2VjdGlvblxuICAgIGNvbnN0IGZvcm1FbGVtZW50U2VjdGlvbiA9ICgpID0+IHtcbiAgICAgICAgbGV0IGNvbnRlbnRMaXN0ID0gZm9ybUVsZW1lbnRDb250ZW50TGlzdCgpLFxuICAgICAgICAgICAgZWxlbWVudCA9IGdsb2JhbGpzLm5ld0VsZW1lbnQoU2lnblVwT2JqZWN0TGlzdC5zaWduVXBGb3JtKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRlbnRMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNvbnRlbnRMaXN0W2ldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH07XG5cbiAgICAvL1JldHVybnMgU2lnbiBJbiBGb3JtIENvbnRhaW5lciBTZWN0aW9uXG4gICAgY29uc3Qgc2lnblVwRm9ybUNvbnRhaW5lclNlY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIGxldCBlbGVtZW50ID0gZ2xvYmFsanMubmV3RWxlbWVudChTaWduVXBPYmplY3RMaXN0LnNpZ25VcEZvcm1Db250YWluZXIpO1xuXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZm9ybUVsZW1lbnRTZWN0aW9uKCkpO1xuXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH07XG5cbiAgICAvL1JldHVybnMgU2lnbiBJbiBDb250YWluZXIgSW5uZXIgU2VjdGlvblxuICAgIGNvbnN0IHNpZ25VcENvbnRhaW5lcklubmVyU2VjdGlvbiA9ICgpID0+IHtcbiAgICAgICAgbGV0IGNvbnRhaW5lckVsZW1lbnQgPSBnbG9iYWxqcy5uZXdFbGVtZW50KFNpZ25VcE9iamVjdExpc3Quc2lnblVwQ29udGFpbmVySW5uZXIpLFxuICAgICAgICAgICAgaDJFbGVtZW50ID0gZ2xvYmFsanMubmV3RWxlbWVudChTaWduVXBPYmplY3RMaXN0LmFwcFRpdGxlKSxcbiAgICAgICAgICAgIHNpZ25JbkZvcm1Db250YWluZXIgPSBzaWduVXBGb3JtQ29udGFpbmVyU2VjdGlvbigpLFxuICAgICAgICAgICAgZWxlbWVudExpc3QgPSBbaDJFbGVtZW50LCBzaWduSW5Gb3JtQ29udGFpbmVyXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnRMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnRMaXN0W2ldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb250YWluZXJFbGVtZW50O1xuICAgIH07XG5cbiAgICAvL1JldHVybnMgU2lnbiBJbiBDb250YWluZXIgT3V0ZXIgU2VjdGlvblxuICAgIGNvbnN0IHNpZ25VcENvbnRhaW5lck91dGVyU2VjdGlvbiA9ICgpID0+IHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBnbG9iYWxqcy5uZXdFbGVtZW50KFNpZ25VcE9iamVjdExpc3Quc2lnblVwQ29udGFpbmVyT3V0ZXIpLFxuICAgICAgICBzaWduVXBDb250YWluZXJJbm5lciA9IHNpZ25VcENvbnRhaW5lcklubmVyU2VjdGlvbigpO1xuXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoc2lnblVwQ29udGFpbmVySW5uZXIpO1xuXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH07XG5cbiAgICAvLyBTaWduIEluIHNlY3Rpb24gQ3JlYXRpb25cbiAgICBjb25zdCBjcmVhdGVTZWN0aW9uID0gKCkgPT57XG4gICAgICAgIGxldCBlbGVtZW50ID0gc2lnblVwQ29udGFpbmVyT3V0ZXJTZWN0aW9uKCk7XG5cbiAgICAgICAgZ2xvYmFsanMucmVuZGVyLmJvZHlBcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICB9O1xuXG5cbiAgICByZXR1cm57Y3JlYXRlU2VjdGlvbn07XG59KSgpOyIsImNvbnN0IEFuZHJldyA9IHtcbiAgICBwYXNzd29yZCA6IFwiQW5kcmV3XCIsXG4gIH1cbiAgXG4vLyB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJBbmRyZXdcIiwgSlNPTi5zdHJpbmdpZnkoQW5kcmV3KSk7XG5cbmxldCBuZXdPYmplY3QgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJBbmRyZXdcIik7XG4vLyBjb25zb2xlLmxvZyhKU09OLnBhcnNlKG5ld09iamVjdCkpO1xuXG5cbmxldCBpbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJJbmZvJylcblxuLy8gY29uc29sZS5sb2coaW5mby5lbGVtZW50c1sndXNlck5hbWUnXS52YWx1ZSlcblxuXG5cbi8vIGxldCB0ZXN0ID0gKCkgPT4ge1xuLy8gICAgIGlmKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShpbmZvLmVsZW1lbnRzWyd1c2VyTmFtZSddLnZhbHVlKSA9PSBudWxsKXtcbi8vICAgICAgICAgY29uc29sZS5sb2coJ1RoaXMgaXMgbm90IGEgdXNlcm5hbWUnKVxuLy8gICAgIH1lbHNle1xuLy8gICAgICAgICBjb25zb2xlLmxvZygnVGhpcyBNYXRjaGVzJylcbi8vICAgICAgICAgY29uc29sZS5sb2cod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGluZm8uZWxlbWVudHNbJ3VzZXJOYW1lJ10udmFsdWUpKVxuLy8gICAgICAgICBsZXQgdGVzdDIgPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShpbmZvLmVsZW1lbnRzWyd1c2VyTmFtZSddLnZhbHVlKSlcbi8vICAgICAgICAgY29uc29sZS5sb2codGVzdDIucGFzc3dvcmQpXG4vLyAgICAgfVxuLy8gfVxuXG5cbi8vIGxldCB0ZXN0MiA9ICh4KSA9PiB7XG4vLyAgICAgaWYod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGluZm8uZWxlbWVudHNbJ3VzZXJOYW1lJ10udmFsdWUpID09IG51bGwpe1xuLy8gICAgICAgICBjb25zb2xlLmxvZygnVGhpcyBpcyBub3QgYSB1c2VybmFtZScpXG4vLyAgICAgfWVsc2V7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCdUaGlzIE1hdGNoZXMnKVxuLy8gICAgICAgICBjb25zb2xlLmxvZyh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oaW5mby5lbGVtZW50c1sndXNlck5hbWUnXS52YWx1ZSkpXG4vLyAgICAgfVxuLy8gfVxuXG4vLyB0ZXN0KClcblxuLy8gd2luZG93LmxvY2FsU3RvcmFnZS5jbGVhcigpXG5cblxuXG4vLyBUaGlzIFNpZ24gaW4gbW9kdWxlIGhhcyB0byBoYW5kbGU6XG4vLyAgICAgIC12ZXJpZmljYXRpb25cbi8vICAgICAgLVNpZ24taW4gdXNpbmcgZGF0YSBmcm9tIExvY2FsIFN0b3JhZ2Ugb3IgdXNlIERlZmF1bHRzIGZyb20gRGVtb1xuLy8gICAgICAtU2lnbi11cCBwYWdlIGNyZWF0aW9uL2Rpc3BsYXkgd2hlbiBuZWVkZWRcbi8vICAgICAgLWFkZGluZyBjcmVhdGVkIFNpZ24taW4gdG8gc3RvcmFnZSAoTW9zdCBsaWtlbHkgdXNpbmcgYSBmdWN0aW9uIGluIHRoZSB1c2VyU3RvcmFnZSBNb2R1bGUpXG4vLyAgICAgIC1EZW1vIEJ1dHR0b24gbmVlZHMgdG8gcnVuIGEgZnVuY3Rpb24gZnJvbSBNYWluIFNlY3Rpb24gbW9kdWxlIHVzaW5nIHRoZSBEZW1vIHVzZXIgZGF0YVxuXG5pbXBvcnQgeyBnbG9iYWxqcyB9IGZyb20gJy4uL2dsb2JhbCc7XG5pbXBvcnQgeyB1c2VyU3RvcmFnZSB9IGZyb20gJy4uL3VzZXJTdG9yYWdlJztcbmltcG9ydCB7IHNpZ25JblNlY3Rpb25DcmVhdGlvbiB9IGZyb20gJy4uL3NpZ25JblNlY3Rpb25GaWxlcy9zaWduSW5TZWN0aW9uQ3JlYXRpb24nO1xuaW1wb3J0IHsgc2lnbkluU2VjdGlvbkZ1bmN0aW9uIH0gZnJvbSAnLi4vc2lnbkluU2VjdGlvbkZpbGVzL3NpZ25JblNlY3Rpb25GdW5jdGlvbic7XG5cbmV4cG9ydCBjb25zdCBzaWduVXBTZWN0aW9uRnVuY3Rpb24gPSAoKCkgPT4ge1xuXG4gICAgY29uc3Qgc2lnblVwRnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIC8vIENhY2hlIERvbSBMaXN0XG4gICAgICAgIGxldCBpbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJDcmVhdGVJbmZvJyksXG4gICAgICAgICAgICBzaWduVXBDcmVhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lnblVwQ3JlYXRlJyksXG4gICAgICAgICAgICBzaWduVXBDYW5jZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lnblVwQ2FuY2VsJyksXG4gICAgICAgICAgICBzaWduVXBDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lnblVwLUNvbnRhaW5lci1PdXRlcicpOztcblxuXG4gICAgICAgIC8vRnVuY3Rpb24gTGlzdFxuICAgICAgICBjb25zdCB1c2VyQ3JlYXRlVmFsaWRhdGlvbiA9ICggdXNlclRvVmFsaWRhdGUgKSA9PntcbiAgICAgICAgICAgIGlmICh1c2VyU3RvcmFnZS5jaGVja1VzZXJuYW1lKHVzZXJUb1ZhbGlkYXRlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgcGFzc3dvcmRDcmVhdGVWYWxpZGF0aW9uID0gKCBwYXNzd29yZFRvVmFsaWRhdGUgKSA9PntcbiAgICAgICAgICAgIGlmICh1c2VyU3RvcmFnZS5jaGVja1Bhc3N3b3JkKHBhc3N3b3JkVG9WYWxpZGF0ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHNpZ25VcFZhbGlkYXRpb24gPSAoKSA9PntcbiAgICAgICAgICAgIGlmKHVzZXJDcmVhdGVWYWxpZGF0aW9uKGluZm8uZWxlbWVudHNbJ3VzZXJOYW1lJ10udmFsdWUpKXtcblxuICAgICAgICAgICAgICAgIGlmKHBhc3N3b3JkQ3JlYXRlVmFsaWRhdGlvbihpbmZvLmVsZW1lbnRzWydwYXNzd29yZCddLnZhbHVlKSl7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdQYXNzd29yZCBkb2VzIG5vdCBtZWV0IHJlcXVpcmVtZW50cycpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBhbGVydCgnVXNlciBJRCBkb2VzIG5vdCBtZWV0IHJlcXVpcmVtZW50cycpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIC8vRXZlbnQgQmluZHNcbiAgICAgICAgc2lnblVwQ3JlYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2lnblVwVmFsaWRhdGlvbilcbiAgICAgICAgc2lnblVwQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZ2xvYmFsanMucmVuZGVyLnJlbW92ZUVsZW1lbnQoc2lnblVwQ29udGFpbmVyKTtcbiAgICAgICAgICAgIHNpZ25JblNlY3Rpb25DcmVhdGlvbi5jcmVhdGVTZWN0aW9uKCk7XG4gICAgICAgICAgICBzaWduSW5TZWN0aW9uRnVuY3Rpb24uc2lnbkluRnVuY3Rpb24oKTtcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgfTtcblxuICAgIHJldHVybntzaWduVXBGdW5jdGlvbn1cbn0pKClcbiIsImV4cG9ydCBjb25zdCB1c2VyU3RvcmFnZSA9ICgoKSA9PntcblxuICAgIGNvbnN0IHVzZXJzID0ge1xuICAgICAgICB1c2VyTGlzdDpbJ0FuZHJldyddLFxuXG4gICAgICAgIEFuZHJldzp7XG4gICAgICAgICAgICB1c2VySUQ6J0FuZHJldycsXG4gICAgICAgICAgICBwYXNzd29yZCA6ICdBbmRyZXcnLFxuICAgICAgICAgICAgdXNlclN0b3JhZ2VJbmZvOiAnZGVtbydcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBkZW1vID0ge1xuICAgICAgICB1c2VyOiAnQW5kcmV3JyxcbiAgICAgICAgcHJvamVjdFRpdGxlczogWydIb21lIENob3JlcycsICdXb3JrJywgJ0Zvb2QgUHJlcCddLFxuXG4gICAgICAgIGl0ZW0wOiB7XG4gICAgICAgICAgICB0YXNrTGlzdDogWydMYXVuZHJ5JywgJ1ZhY3V1bScsICdEaXNoZXMnXSxcbiAgICAgICAgICAgIHRhc2tzOiB7XG4gICAgICAgICAgICAgICAgdGFzazA6IHtcbiAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZTogJzExLzI2LzIyJyxcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGFzazE6IHtcbiAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZTogJzExLzI2LzIyJyxcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGFzazI6IHtcbiAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZTogJzExLzI2LzIyJyxcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgaXRlbTE6IHtcbiAgICAgICAgICAgIHRhc2tMaXN0OiBbJ0NoZWNrIEUtbWFpbCcsICdVcGRhdGUgUHJvamVjdCcsICdUZWFtIE1lZXRpbmcnXSxcbiAgICAgICAgICAgIHRhc2tzOiB7XG4gICAgICAgICAgICAgICAgdGFzazA6IHtcbiAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZTogJzExLzI2LzIyJyxcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGFzazE6IHtcbiAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZTogJzExLzI2LzIyJyxcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IGZhbHNlLFxuXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0YXNrMjoge1xuICAgICAgICAgICAgICAgICAgICBkdWVEYXRlOiAnMTEvMjYvMjInLFxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBpdGVtMjoge1xuICAgICAgICAgICAgdGFza0xpc3Q6IFsnVGhhdyBNZWF0JywgJ0N1dCBWZWdldGFibGVzJywgJ0Nvb2sgUmljZSddLFxuICAgICAgICAgICAgdGFza3M6IHtcbiAgICAgICAgICAgICAgICB0YXNrMDoge1xuICAgICAgICAgICAgICAgICAgICBkdWVEYXRlOiAnMTEvMjYvMjInLFxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0YXNrMToge1xuICAgICAgICAgICAgICAgICAgICBkdWVEYXRlOiAnMTEvMjYvMjInLFxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0YXNrMjoge1xuICAgICAgICAgICAgICAgICAgICBkdWVEYXRlOiAnMTEvMjYvMjInLFxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH1cblxuICAgIGNvbnN0IGV4YW1wbGUgPSB7XG4gICAgICAgIHVzZXI6ICdleGFtcGxlJyxcbiAgICAgICAgcHJvamVjdFRpdGxlcyA6IFsnUHJvamVjdCBFeGFtcGxlJ10sXG5cbiAgICAgICAgaXRlbTA6e1xuICAgICAgICAgICAgdGFza0xpc3Q6Wyd0YXNrIEV4YW1wbGUnXSxcbiAgICAgICAgICAgIHRhc2tzOntcbiAgICAgICAgICAgICAgICB0YXNrMDp7XG4gICAgICAgICAgICAgICAgICAgIGR1ZURhdGU6JzExLzI2LzIyJyxcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfVxuXG5cbiAgICBjb25zdCBkZWZhdWx0VXNlckxpc3QgPSB7XG4gICAgICAgIHVzZXJMaXN0OlsnZXhhbXBsZSddLFxuXG4gICAgICAgIGV4YW1wbGU6e1xuICAgICAgICAgICAgdXNlcklEOidleGFtcGxlJyxcbiAgICAgICAgICAgIHBhc3N3b3JkIDogJ2V4YW1wbGUnLFxuICAgICAgICAgICAgdXNlclN0b3JhZ2VJbmZvOiAnZXhhbXBsZSdcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBDb2xsZWN0IFByb2plY3QgTmFtZXMgRnVuY3Rpb24gU3RvcmUgaW4gTmV3IE9iamVjdFxuICAgIGNvbnN0IGNyZWF0ZURlZmF1bHRQcm9qZWN0U3RvcmFnZSA9ICh1c2VyLCBwcm9qZWN0QXJyYXkpID0+IHtcbiAgICAgICAgbGV0ICBkZWZhdWx0T2JqZWN0ID0ge1xuICAgICAgICAgICAgdXNlcjogdXNlcixcbiAgICAgICAgICAgIHByb2plY3RUaXRsZXM6IHByb2plY3RBcnJheVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZWZhdWx0T2JqZWN0XG4gICAgfVxuXG4gICAgLy8gQ29sbGVjdCBJdGVtIE5hbWVzIFN0b3JlIGluIE9iamVjdCBDcmVhdGVkIGJ5IFByb2plY3QgRnVuY3Rpb25cbiAgICBjb25zdCBpdGVtU3RvcmFnZUNyZWF0aW9uID0gKG9iamVjdCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iamVjdC5wcm9qZWN0VGl0bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBvYmplY3RbYGl0ZW0ke2l9YF0gPSB7fVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmplY3RcbiAgICB9XG5cbiAgICAvLyBDb2xsZWN0IFRhc2sgTGlzdCBhbmQgU3RvcmUgaW4gT2JqZWN0IENyZWF0ZWQgYnkgUHJvamVjdCBGdW5jdGlvblxuICAgIC8vIENvbGxlY3RzIFRhc2sgTGlzdCBiYXNlZCBvbiBJdGVtIE51bWJlclxuICAgIGNvbnN0IHRhc2tBcnJheVN0b3JhZ2VDcmVhdGlvbiA9IChvYmplY3QsIGl0ZW1OdW1iZXIpID0+IHtcbiAgICAgICAgbGV0IHRhc2tSZXRyaWV2YWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgaXRlbSR7aXRlbU51bWJlcn1gKS5xdWVyeVNlbGVjdG9yQWxsKGBsYWJlbGApLFxuICAgICAgICAgICAgdGFza0FycmF5ID0gW11cbiAgICAgICAgXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza1JldHJpZXZhbC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGFza0FycmF5LnB1c2godGFza1JldHJpZXZhbFswXS5pbm5lckhUTUwpXG4gICAgICAgIH1cblxuICAgICAgICBvYmplY3RbYGl0ZW0ke2l0ZW1OdW1iZXJ9YF0udGFza0xpc3QgPSB0YXNrQXJyYXlcblxuICAgICAgICByZXR1cm4gb2JqZWN0XG4gICAgfVxuXG4gICAgLy8gQ29sbGVjdCBUYXNrIERhdGEgYW5kIFN0b3JlIGluIE9iamVjdCBDcmVhdGVkIGJ5IFByb2plY3QgRnVuY3Rpb25cbiAgICBjb25zdCB0YXNrRGF0YUNvbGxlY3Rpb24gPSAob2JqZWN0LCBpdGVtTnVtYmVyKSA9PiB7XG4gICAgICAgIGxldCBpdGVtRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBpdGVtJHtpdGVtTnVtYmVyfWApLnF1ZXJ5U2VsZWN0b3JBbGwoYHBgKSxcbiAgICAgICAgICAgIGR1ZURhdGUgPSBpdGVtRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKGBwYCksXG4gICAgICAgICAgICB0YXNrU3RhdHVzID0gaXRlbUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChgaW5wdXRgKSxcbiAgICAgICAgICAgIGl0ZW0gPSBvYmplY3RbYGl0ZW0ke2l0ZW1OdW1iZXJ9YF1cbiAgICAgICAgXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbS50YXNrTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaXRlbS50YXNrc1tgdGFzayR7aX1gXS5kdWVEYXRlID0gZHVlRGF0ZVtpXS5pbm5lckhUTUxcbiAgICAgICAgICAgIGl0ZW0udGFza3NbYHRhc2ske2l9YF0uY29tcGxldGUgPSB0YXNrU3RhdHVzW2ldLmNoZWNrZWRcbiAgICAgICAgfVxuXG5cbiAgICAgICAgcmV0dXJuIG9iamVjdFxuICAgIH1cblxuICAgIC8vIENvbGxlY3QgUHJvamVjdCBUaXRsZSBOYW1lc1xuICAgIGNvbnN0IHByb2plY3RDb2xsZWN0aW9uID0gKCkgPT4ge1xuICAgICAgICBsZXQgcHJvamVjdFJldHJpZXZhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0U2VsZWN0b3InKS5xdWVyeVNlbGVjdG9yQWxsKGBsaWApLFxuICAgICAgICBwcm9qZWN0QXJyYXkgPSBbXVxuICAgICAgICBcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0UmV0cmlldmFsLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwcm9qZWN0QXJyYXkucHVzaChwcm9qZWN0UmV0cmlldmFsW2ldLmlubmVySFRNTClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwcm9qZWN0QXJyYXlcbiAgICB9XG5cbiAgICAvLyBGdW5jdGlvbiBMaXN0XG5cblxuICAgIGNvbnN0IGNoZWNrVXNlcm5hbWUgPSAoc3RyKSA9PiB7XG4gICAgICAgIC8vIGF0IGxlYXN0IG9uZSBudW1iZXIsIG9uZSBsb3dlcmNhc2UgYW5kIG9uZSB1cHBlcmNhc2UgbGV0dGVyXG4gICAgICAgIC8vIGF0IGxlYXN0IHNpeCBjaGFyYWN0ZXJzXG4gICAgICAgIHZhciByZSA9IC8oPz0uKlxcZCkoPz0uKlthLXpdKSg/PS4qW0EtWl0pLns2LH0vO1xuICAgICAgICByZXR1cm4gcmUudGVzdChzdHIpO1xuICAgIH1cblxuICAgIGNvbnN0IGNoZWNrUGFzc3dvcmQgPSAoc3RyKSA9PiB7XG4gICAgICAgIC8vIGF0IGxlYXN0IG9uZSBudW1iZXIsIG9uZSBsb3dlcmNhc2UgYW5kIG9uZSB1cHBlcmNhc2UgbGV0dGVyXG4gICAgICAgIC8vIGF0IGxlYXN0IHNpeCBjaGFyYWN0ZXJzIHRoYXQgYXJlIGxldHRlcnMsIG51bWJlcnMgb3IgdGhlIHVuZGVyc2NvcmVcbiAgICAgICAgdmFyIHJlID0gL14oPz0uKlxcZCkoPz0uKlthLXpdKSg/PS4qW0EtWl0pXFx3ezYsfSQvO1xuICAgICAgICByZXR1cm4gcmUudGVzdChzdHIpO1xuICAgIH1cbiAgICByZXR1cm4geyBkZW1vLCB1c2VycyxleGFtcGxlICxjaGVja1VzZXJuYW1lLCBjaGVja1Bhc3N3b3JkIH1cbn0pKCkiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgdXNlclN0b3JhZ2UgfSBmcm9tICcuL3VzZXJTdG9yYWdlJztcblxuaW1wb3J0IHsgc2lnbkluU2VjdGlvbkNyZWF0aW9uIH0gZnJvbSAnLi9zaWduSW5TZWN0aW9uRmlsZXMvc2lnbkluU2VjdGlvbkNyZWF0aW9uJztcbmltcG9ydCB7IHNpZ25JblNlY3Rpb25GdW5jdGlvbiB9IGZyb20gJy4vc2lnbkluU2VjdGlvbkZpbGVzL3NpZ25JblNlY3Rpb25GdW5jdGlvbic7XG5cbmltcG9ydCB7IHNpZ25VcFNlY3Rpb25GdW5jdGlvbiB9IGZyb20gJy4vc2lnblVwU2VjdGlvbkZpbGVzL3NpZ25VcFNlY3Rpb25GdW5jdGlvbic7XG5pbXBvcnQgeyBzaWduVXBTZWN0aW9uQ3JlYXRpb24gfSBmcm9tICcuL3NpZ25VcFNlY3Rpb25GaWxlcy9zaWduVXBTZWN0aW9uQ3JlYXRpb24nO1xuXG5pbXBvcnQgeyBuYXZTZWN0aW9uQ3JlYXRpb24gfSBmcm9tICcuL05hdlNlY3Rpb25GaWxlcy9uYXZTZWN0aW9uQ3JlYXRpb24nO1xuaW1wb3J0IHsgbmF2U2VjdGlvbkZ1bmN0aW9uIH0gZnJvbSAnLi9OYXZTZWN0aW9uRmlsZXMvbmF2U2VjdGlvbkZ1bmN0aW9uJztcblxuaW1wb3J0IHsgbWFpblNlY3Rpb25DcmVhdGlvbiB9IGZyb20gJy4vbWFpblNlY3Rpb25GaWxlcy9tYWluU2VjdGlvbkNyZWF0aW9uJztcblxuaW1wb3J0IHsgZ2xvYmFsanMgfSBmcm9tICcuL2dsb2JhbCc7XG4vLyBjb25zb2xlLmxvZygnTm93IHRpbWUgZm9yIHRoZSBKUycpXG5cbi8vIHNpZ25JblNlY3Rpb25DcmVhdGlvbi5jcmVhdGVTZWN0aW9uKCk7XG5cbi8vIHNpZ25JblNlY3Rpb25GdW5jdGlvbi5zaWduSW5GdW5jdGlvbigpO1xuXG4vLyBzaWduVXBTZWN0aW9uQ3JlYXRpb24uY3JlYXRlU2VjdGlvbigpO1xuLy8gc2lnblVwU2VjdGlvbkZ1bmN0aW9uLnNpZ25VcEZ1bmN0aW9uKCk7XG5cbi8vIG5hdlNlY3Rpb25DcmVhdGlvbi5jcmVhdGVTZWN0aW9uKEFuZHJldyk7XG4vLyB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0FuZHJldycsIEpTT04uc3RyaW5naWZ5KEFuZHJldykpO1xuXG5jb25zdCBBbmRyZXcgPSB1c2VyU3RvcmFnZS5kZW1vXG5cbm5hdlNlY3Rpb25DcmVhdGlvbi5jcmVhdGVTZWN0aW9uKEFuZHJldyk7XG5uYXZTZWN0aW9uRnVuY3Rpb24ubmF2RnVuY3Rpb24oKTtcbm1haW5TZWN0aW9uQ3JlYXRpb24uY3JlYXRlU2VjdGlvbihBbmRyZXcpXG5cbmxldCBwYWdlR3JpZENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlR3JpZENvbnRhaW5lcicpXG5wYWdlR3JpZENvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluU2VjdGlvbkNyZWF0aW9uLmNyZWF0ZVNlY3Rpb24oQW5kcmV3KSlcbmxldCB0YXNrUmV0cmlldmFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW0wJykucXVlcnlTZWxlY3RvckFsbChgW2NsYXNzXj0ndGFzayddYClcblxuLy8gY29uc29sZS5sb2codGFza1JldHJpZXZhbClcblxubGV0IHRhc2tSZXRyaWV2YWwxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RTZWxlY3RvcicpLnF1ZXJ5U2VsZWN0b3JBbGwoYGxpYClcblxuY29uc29sZS5sb2codGFza1JldHJpZXZhbDFbMF0uaW5uZXJIVE1MKVxuXG5cbi8vIGxldCBuZXdPYmplY3QgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJBbmRyZXdcIik7XG4vLyBjb25zb2xlLmxvZyhKU09OLnBhcnNlKG5ld09iamVjdCkpO1xuXG4vLyBsZXQgaW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VySW5mbycpXG5cbi8vIGxldCB0ZXN0ID0gKCkgPT4ge1xuLy8gICAgIGlmKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShpbmZvLmVsZW1lbnRzWyd1c2VyTmFtZSddLnZhbHVlKSA9PSBudWxsKXtcbi8vICAgICAgICAgY29uc29sZS5sb2coJ1RoaXMgaXMgbm90IGEgdXNlcm5hbWUnKVxuLy8gICAgIH1lbHNle1xuLy8gICAgICAgICBjb25zb2xlLmxvZygnVGhpcyBNYXRjaGVzJylcbi8vICAgICAgICAgbGV0IHRlc3QyID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oaW5mby5lbGVtZW50c1sndXNlck5hbWUnXS52YWx1ZSkpXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKHRlc3QyLnByb2plY3RUaXRsZXMpXG4vLyAgICAgfVxuLy8gfVxuXG4vLyBsZXQgdGVzdDIgPSAoeCkgPT4ge1xuLy8gICAgIGlmKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShpbmZvLmVsZW1lbnRzWyd1c2VyTmFtZSddLnZhbHVlKSA9PSBudWxsKXtcbi8vICAgICAgICAgY29uc29sZS5sb2coJ1RoaXMgaXMgbm90IGEgdXNlcm5hbWUnKVxuLy8gICAgIH1lbHNle1xuLy8gICAgICAgICBjb25zb2xlLmxvZygnVGhpcyBNYXRjaGVzJylcbi8vICAgICAgICAgY29uc29sZS5sb2cod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGluZm8uZWxlbWVudHNbJ3VzZXJOYW1lJ10udmFsdWUpKVxuLy8gICAgIH1cbi8vIH1cblxuLy8gdGVzdCgpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=