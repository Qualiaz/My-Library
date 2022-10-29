/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Courgette&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  -moz-user-select: -moz-none;\n  -khtml-user-select: none;\n  -webkit-user-select: none;\n  user-select: none;\n}\n\nhtml {\n  font-size: 62.5%;\n}\n\n.main__card-box {\n  font-family: \"Courgette\", cursive;\n  color: #e5d8cf;\n  font-size: 1.6rem;\n}\n.main__card-box > button {\n  font-family: inherit;\n  color: inherit;\n  font-size: inherit;\n}\n.main__card-box--delete {\n  color: #ee3030;\n}\n.main__card-box--delete:hover {\n  color: #361500;\n}\n\n.header__form-btn {\n  border: none;\n  background: none;\n  cursor: pointer;\n}\n.header__form-btn > svg {\n  box-shadow: 0px 0px 4px 2px #d65400;\n  border-radius: 3px;\n}\n.header__form-btn > svg:hover {\n  box-shadow: 0px 0px 3px 1px #ffffff;\n}\n\n.header__form-status {\n  border: none;\n  background: #d65400;\n  border-radius: 10px;\n  height: 28px;\n  min-width: 130px;\n  padding: 5px;\n  text-align: center;\n  color: #e5d8cf;\n  font-family: \"Courgette\", cursive;\n  font-size: 1.8rem;\n  border: 1px solid rgb(114, 50, 8);\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  background: none;\n  box-shadow: inset 0px 0px 1px 2px #d65400;\n}\n.header__form-status:hover {\n  box-shadow: inset 0px 0px 5px 3px #e2b292;\n}\n\n.main__card-box > button {\n  background: none;\n  border: none;\n  width: 100%;\n  cursor: pointer;\n}\n.main__card-box--status:hover {\n  box-shadow: inset 0px 0px 1px 2px #e2b292;\n  cursor: pointer;\n}\n.main__card-box--delete:hover {\n  background-color: #ee3030;\n  box-shadow: inset 0px 0px 1px 2px #361500;\n  cursor: pointer;\n}\n\n.main__card {\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 12px;\n  background: linear-gradient(90deg, #d65400 0%, rgb(224, 89, 8) 50%, #d65400 100%);\n  padding: 10px;\n  border-radius: 15px;\n  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);\n}\n.main__card-box {\n  display: flex;\n  justify-content: center;\n  background-color: #361500;\n  padding: 8px;\n  width: 220px;\n  border-radius: 15px;\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.7);\n}\n.main__card-box > span {\n  display: inline-block;\n  text-align: center;\n}\n.main__card-box > span:focus {\n  outline: 1px solid #ff6b0d;\n  border-radius: 2px;\n}\n\n.header__form--hide {\n  display: none;\n}\n.header__form-el > input[type=text] {\n  border: none;\n  background: #d65400;\n  border-radius: 10px;\n  height: 28px;\n  min-width: 130px;\n  padding: 5px;\n  text-align: center;\n  color: #e5d8cf;\n  font-family: \"Courgette\", cursive;\n  font-size: 1.8rem;\n  border: 1px solid rgb(114, 50, 8);\n}\n.header__form-el > input[type=text]:focus {\n  outline: none;\n  outline: 2px solid #e2b292;\n}\n.header__form-el > input[type=text]::placeholder {\n  opacity: 0.7;\n  color: inherit;\n  font-family: inherit;\n}\n\nbody {\n  background-color: #ff6b0d;\n  background: linear-gradient(90deg, #ff6b0d 0%, rgb(255, 88, 13) 50%, #ff6b0d 100%);\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 80vw;\n  height: 100vh;\n  margin: 0 auto;\n}\n\n.header__container {\n  display: flex;\n  justify-content: center;\n  gap: 3rem;\n  margin: 3rem;\n  padding: 2rem;\n  width: clamp(1000px, 50%, 1060px);\n  min-width: 520px;\n}\n.header__logo {\n  font-size: 2.4rem;\n  font-family: \"Courgette\", cursive;\n  color: #ffffff;\n}\n.header__logo > h1 {\n  text-align: center;\n  min-width: 242px;\n}\n.header__form {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2rem;\n  margin-left: 10px;\n}\n.header__form-el > input[type=text] {\n  width: 100px;\n}\n\n@media only screen and (max-width: 977px) {\n  .header__container {\n    flex-direction: column;\n    flex-wrap: wrap;\n    width: clamp(0px, 50vw, 1060px);\n  }\n\n  .header__form {\n    flex-direction: column;\n    align-items: center;\n  }\n  .header__form-el > input[type=text], .header__form-status {\n    width: 300px;\n  }\n}\n.main__container {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: stretch;\n  gap: 30px;\n}\n\n@media only screen and (max-width: 977px) {\n  .main__container {\n    justify-content: center;\n  }\n}\n@media only screen and (max-width: 899px) {\n  .main__container {\n    justify-content: center;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/base/_reset.scss","webpack://./src/styles/main.scss","webpack://./src/styles/base/_typography.scss","webpack://./src/styles/abstracts/_variables.scss","webpack://./src/styles/components/_buttons.scss","webpack://./src/styles/abstracts/_mixins.scss","webpack://./src/styles/components/_cards.scss","webpack://./src/styles/components/_forms.scss","webpack://./src/styles/layout/_general.scss","webpack://./src/styles/layout/_header.scss","webpack://./src/styles/layout/_main.scss"],"names":[],"mappings":"AAAA;;;EAGE,SAAA;EACA,UAAA;EACA,sBAAA;EAEA,2BAAA;EACA,wBAAA;EACA,yBAAA;EACA,iBAAA;ACCF;;ADEA;EACE,gBAAA;ACCF;;ACZE;EACE,iCCaW;EDZX,cCES;EDDT,iBAAA;ADeJ;ACbI;EACE,oBAAA;EACA,cAAA;EACA,kBAAA;ADeN;ACZI;EACE,cCFS;AFgBf;ACZM;EACE,cCZqB;AF0B7B;;AG/BA;EAGE,YAAA;EACA,gBAAA;EACA,eAAA;AHgCF;AG9BE;EACE,mCAAA;EACA,kBAAA;AHgCJ;AG9BI;EACE,mCAAA;AHgCN;;AG3BA;ECjBE,YAAA;EACA,mBFGwB;EEFxB,mBAAA;EACA,YAAA;EACA,gBAAA;EACA,YAAA;EACA,kBAAA;EACA,cFDW;EEEX,iCFQa;EEPb,iBAAA;EACA,iCAAA;EDUA,eAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,gBAAA;EACA,yCAAA;AHuCF;AGrCE;EACE,yCAAA;AHuCJ;;AGhCE;EACE,gBAAA;EACA,YAAA;EACA,WAAA;EACA,eAAA;AHmCJ;AGhCE;EACE,yCAAA;EACA,eAAA;AHkCJ;AGhCE;EACE,yBDpCW;ECqCX,yCAAA;EACA,eAAA;AHkCJ;;AKjFA;EAEE,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,SAAA;EAEA,iFAAA;EAOA,aAAA;EAEA,mBAAA;EACA,0CAAA;AL2EF;AKzEE;EACE,aAAA;EACA,uBAAA;EAEA,yBHrByB;EGuBzB,YAAA;EACA,YAAA;EAEA,mBAAA;EACA,0CAAA;ALwEJ;AKtEI;EACE,qBAAA;EACA,kBAAA;ALwEN;AKtEM;EACE,0BAAA;EACA,kBAAA;ALwER;;AMhHE;EACE,aAAA;ANmHJ;AM/GI;EFLF,YAAA;EACA,mBFGwB;EEFxB,mBAAA;EACA,YAAA;EACA,gBAAA;EACA,YAAA;EACA,kBAAA;EACA,cFDW;EEEX,iCFQa;EEPb,iBAAA;EACA,iCAAA;AJuHF;AMzHM;EACE,aAAA;EAEA,0BAAA;AN0HR;AMvHM;EACE,YAAA;EACA,cAAA;EACA,oBAAA;ANyHR;;AO3IA;EACE,yBLGc;EKDd,kFAAA;AP6IF;;AOrIA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EAEA,WAAA;EACA,aAAA;EACA,cAAA;APuIF;;AQxJE;EACE,aAAA;EACA,uBAAA;EACA,SAAA;EACA,YAAA;EACA,aAAA;EACA,iCAAA;EACA,gBAAA;AR2JJ;AQxJE;EACE,iBAAA;EACA,iCNIW;EMHX,cNXI;AFqKR;AQxJI;EACE,kBAAA;EACA,gBAAA;AR0JN;AQtJE;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,SAAA;EACA,iBAAA;ARwJJ;AQtJI;EACE,YAAA;ARwJN;;AQjJA;EACE;IACE,sBAAA;IACA,eAAA;IACA,+BAAA;ERoJF;;EQjJA;IACE,sBAAA;IACA,mBAAA;ERoJF;EQnJE;IAEE,YAAA;ERoJJ;AACF;AStMA;EAEE,WAAA;EACA,aAAA;EACA,eAAA;EACA,wBAAA;EACA,SAAA;ATuMF;;ASlMA;EACE;IACE,uBAAA;ETqMF;AACF;ASlMA;EACE;IACE,uBAAA;EToMF;AACF","sourcesContent":["*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n\n  -moz-user-select: -moz-none;\n  -khtml-user-select: none;\n  -webkit-user-select: none;\n  user-select: none;\n}\n\nhtml {\n  font-size: 62.5%;\n}\n","@import url(\"https://fonts.googleapis.com/css2?family=Courgette&display=swap\");\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  -moz-user-select: -moz-none;\n  -khtml-user-select: none;\n  -webkit-user-select: none;\n  user-select: none;\n}\n\nhtml {\n  font-size: 62.5%;\n}\n\n.main__card-box {\n  font-family: \"Courgette\", cursive;\n  color: #e5d8cf;\n  font-size: 1.6rem;\n}\n.main__card-box > button {\n  font-family: inherit;\n  color: inherit;\n  font-size: inherit;\n}\n.main__card-box--delete {\n  color: #ee3030;\n}\n.main__card-box--delete:hover {\n  color: #361500;\n}\n\n.header__form-btn {\n  border: none;\n  background: none;\n  cursor: pointer;\n}\n.header__form-btn > svg {\n  box-shadow: 0px 0px 4px 2px #d65400;\n  border-radius: 3px;\n}\n.header__form-btn > svg:hover {\n  box-shadow: 0px 0px 3px 1px #ffffff;\n}\n\n.header__form-status {\n  border: none;\n  background: #d65400;\n  border-radius: 10px;\n  height: 28px;\n  min-width: 130px;\n  padding: 5px;\n  text-align: center;\n  color: #e5d8cf;\n  font-family: \"Courgette\", cursive;\n  font-size: 1.8rem;\n  border: 1px solid rgb(114, 50, 8);\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  background: none;\n  box-shadow: inset 0px 0px 1px 2px #d65400;\n}\n.header__form-status:hover {\n  box-shadow: inset 0px 0px 5px 3px #e2b292;\n}\n\n.main__card-box > button {\n  background: none;\n  border: none;\n  width: 100%;\n  cursor: pointer;\n}\n.main__card-box--status:hover {\n  box-shadow: inset 0px 0px 1px 2px #e2b292;\n  cursor: pointer;\n}\n.main__card-box--delete:hover {\n  background-color: #ee3030;\n  box-shadow: inset 0px 0px 1px 2px #361500;\n  cursor: pointer;\n}\n\n.main__card {\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 12px;\n  background: linear-gradient(90deg, #d65400 0%, rgb(224, 89, 8) 50%, #d65400 100%);\n  padding: 10px;\n  border-radius: 15px;\n  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);\n}\n.main__card-box {\n  display: flex;\n  justify-content: center;\n  background-color: #361500;\n  padding: 8px;\n  width: 220px;\n  border-radius: 15px;\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.7);\n}\n.main__card-box > span {\n  display: inline-block;\n  text-align: center;\n}\n.main__card-box > span:focus {\n  outline: 1px solid #ff6b0d;\n  border-radius: 2px;\n}\n\n.header__form--hide {\n  display: none;\n}\n.header__form-el > input[type=text] {\n  border: none;\n  background: #d65400;\n  border-radius: 10px;\n  height: 28px;\n  min-width: 130px;\n  padding: 5px;\n  text-align: center;\n  color: #e5d8cf;\n  font-family: \"Courgette\", cursive;\n  font-size: 1.8rem;\n  border: 1px solid rgb(114, 50, 8);\n}\n.header__form-el > input[type=text]:focus {\n  outline: none;\n  outline: 2px solid #e2b292;\n}\n.header__form-el > input[type=text]::placeholder {\n  opacity: 0.7;\n  color: inherit;\n  font-family: inherit;\n}\n\nbody {\n  background-color: #ff6b0d;\n  background: linear-gradient(90deg, #ff6b0d 0%, rgb(255, 88, 13) 50%, #ff6b0d 100%);\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 80vw;\n  height: 100vh;\n  margin: 0 auto;\n}\n\n.header__container {\n  display: flex;\n  justify-content: center;\n  gap: 3rem;\n  margin: 3rem;\n  padding: 2rem;\n  width: clamp(1000px, 50%, 1060px);\n  min-width: 520px;\n}\n.header__logo {\n  font-size: 2.4rem;\n  font-family: \"Courgette\", cursive;\n  color: #ffffff;\n}\n.header__logo > h1 {\n  text-align: center;\n  min-width: 242px;\n}\n.header__form {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2rem;\n  margin-left: 10px;\n}\n.header__form-el > input[type=text] {\n  width: 100px;\n}\n\n@media only screen and (max-width: 977px) {\n  .header__container {\n    flex-direction: column;\n    flex-wrap: wrap;\n    width: clamp(0px, 50vw, 1060px);\n  }\n\n  .header__form {\n    flex-direction: column;\n    align-items: center;\n  }\n  .header__form-el > input[type=text], .header__form-status {\n    width: 300px;\n  }\n}\n.main__container {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: stretch;\n  gap: 30px;\n}\n\n@media only screen and (max-width: 977px) {\n  .main__container {\n    justify-content: center;\n  }\n}\n@media only screen and (max-width: 899px) {\n  .main__container {\n    justify-content: center;\n  }\n}","@import url(\"https://fonts.googleapis.com/css2?family=Courgette&display=swap\");\n\n.main__card {\n  &-box {\n    font-family: $primary-font;\n    color: $text-color;\n    font-size: 1.6rem;\n\n    & > button {\n      font-family: inherit;\n      color: inherit;\n      font-size: inherit;\n    }\n\n    &--delete {\n      color: $delete-color;\n\n      &:hover {\n        color: $on-primary-container-color;\n      }\n    }\n  }\n}\n","////////******** COLORS ********////////\n\n// PRIMARY COLORS\n$white: #ffffff;\n$primary-color: #ff6b0d;\n$primary-container-color: #d65400;\n$on-primary-container-color: #361500;\n$text-color: #e5d8cf;\n\n// SECONDARY COLORS\n$focus-color: #e2b292;\n\n// DELETE COLORS\n$delete-color: #ee3030;\n\n////////******** FONTS ********////////\n\n$primary-font: \"Courgette\", cursive;\n","// HEADER FORM BUTTONS //\n.header__form-btn {\n  // min-width: 50px;\n  // height: 50px;\n  border: none;\n  background: none;\n  cursor: pointer;\n\n  & > svg {\n    box-shadow: 0px 0px 4px 2px $primary-container-color;\n    border-radius: 3px;\n\n    &:hover {\n      box-shadow: 0px 0px 3px 1px $white;\n    }\n  }\n}\n\n.header__form-status {\n  @include form-boxes;\n\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  background: none;\n  box-shadow: inset 0px 0px 1px 2px $primary-container-color;\n\n  &:hover {\n    box-shadow: inset 0px 0px 5px 3px $focus-color;\n  }\n}\n\n// MAIN CARD BUTTONS //\n\n.main__card-box {\n  & > button {\n    background: none;\n    border: none;\n    width: 100%;\n    cursor: pointer;\n  }\n\n  &--status:hover {\n    box-shadow: inset 0px 0px 1px 2px $focus-color;\n    cursor: pointer;\n  }\n  &--delete:hover {\n    background-color: $delete-color;\n    box-shadow: inset 0px 0px 1px 2px $on-primary-container-color;\n    cursor: pointer;\n  }\n}\n","@mixin form-boxes {\n  border: none;\n  background: $primary-container-color;\n  border-radius: 10px;\n  height: 28px;\n  min-width: 130px;\n  padding: 5px;\n  text-align: center;\n  color: $text-color;\n  font-family: $primary-font;\n  font-size: 1.8rem;\n  border: 1px solid rgb(114, 50, 8);\n}\n","// #mainCard {\n//   display: none;\n// }\n\n.main__card {\n  // display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 12px;\n\n  background: linear-gradient(\n    90deg,\n    $primary-container-color 0%,\n    rgba(224, 89, 8, 1) 50%,\n    $primary-container-color 100%\n  );\n\n  padding: 10px;\n\n  border-radius: 15px;\n  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);\n\n  &-box {\n    display: flex;\n    justify-content: center;\n\n    background-color: $on-primary-container-color;\n\n    padding: 8px;\n    width: 220px;\n\n    border-radius: 15px;\n    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.7);\n\n    & > span {\n      display: inline-block;\n      text-align: center;\n\n      &:focus {\n        outline: 1px solid $primary-color;\n        border-radius: 2px;\n      }\n    }\n  }\n}\n",".header__form {\n  &--hide {\n    display: none;\n  }\n\n  &-el {\n    & > input[type=\"text\"] {\n      @include form-boxes;\n\n      &:focus {\n        outline: none;\n\n        outline: 2px solid $focus-color;\n      }\n\n      &::placeholder {\n        opacity: 0.7;\n        color: inherit;\n        font-family: inherit;\n      }\n    }\n  }\n}\n","body {\n  background-color: $primary-color;\n\n  background: linear-gradient(\n    90deg,\n    $primary-color 0%,\n    rgb(255, 88, 13) 50%,\n    $primary-color 100%\n  );\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  width: 80vw;\n  height: 100vh;\n  margin: 0 auto;\n}\n",".header {\n  &__container {\n    display: flex;\n    justify-content: center;\n    gap: 3rem;\n    margin: 3rem;\n    padding: 2rem;\n    width: clamp(1000px, 50%, 1060px);\n    min-width: (520px);\n  }\n\n  &__logo {\n    font-size: 2.4rem;\n    font-family: $primary-font;\n    color: $white;\n\n    & > h1 {\n      text-align: center;\n      min-width: 242px;\n    }\n  }\n\n  &__form {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 2rem;\n    margin-left: 10px;\n\n    &-el > input[type=\"text\"] {\n      width: 100px;\n    }\n  }\n}\n\n// PHONE\n\n@media only screen and (max-width: 977px) {\n  .header__container {\n    flex-direction: column;\n    flex-wrap: wrap;\n    width: clamp(00px, 50vw, 1060px);\n  }\n\n  .header__form {\n    flex-direction: column;\n    align-items: center;\n    &-el > input[type=\"text\"],\n    &-status {\n      width: 300px;\n    }\n  }\n}\n",".main__container {\n  // width: clamp(340px, 60vw, 1080px);\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: stretch;\n  gap: 30px;\n}\n\n// TABLET / PHONE\n\n@media only screen and (max-width: 977px) {\n  .main__container {\n    justify-content: center;\n  }\n}\n\n@media only screen and (max-width: 899px) {\n  .main__container {\n    justify-content: center;\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");




//***************************************************//
//***************************************************//
//*****              Selectors                  *****//

// HEADER / FORM SELECTIONS
const headerContainer = document.getElementById("headerContainer");

const formEl = document.getElementsByClassName("header__form-el");

const formBook = document.getElementById("formBook");
const formAuthor = document.getElementById("formAuthor");
const formPages = document.getElementById("formPages");
const formBtnStatus = document.getElementById("formBtnStatus");
const btnAddBook = document.getElementById("btnAddBook");

// MAIN SELECTIONS
const mainContainer = document.getElementById("mainContainer");
const mainCard = document.getElementById("mainCard");

const cardBook = document.querySelector(".main__card--book");
const cardAuthor = document.querySelector(".main__card--author");
const cardPages = document.querySelector(".main__card--pages");
const cardStatus = document.querySelector(".main__card--status");

const cardDelete = document.querySelector(".main__card--delete");
// console.log(CardBook.innerText);

//***************************************************//
//***************************************************//
//*****               Cards                     *****//

let cards = [];
mainCard.style.display = "none";

// CONSTRUCTOR
function Card(book, author, pages, status, id) {
  this.book = book;
  this.author = author;
  this.pages = pages;
  this.status = status;
  this.id = id;
}

Card.prototype.changeStatus = function (card, i) {
  card.addEventListener("click", () => {
    if ((card.innerText && cards[i].status) === "Read") {
      cards[i].status = "Not Read";
      card.innerText = "Not Read";
    } else {
      cards[i].status = "Read";
      card.innerText = "Read";
    }
  });
};

Card.prototype.deleteCard = function (cardDelBtn, card) {
  cardDelBtn.addEventListener("click", () => {
    card.remove();
    cards.pop();
  });
};

// Render Cards
function renderCards() {
  for (let i = cards.length - 1; i < cards.length; i++) {
    cardBook.innerText = cards[i].book;
    cardAuthor.innerText = cards[i].author;
    cardPages.innerText = cards[i].pages;
    cardStatus.innerText = cards[i].status;

    const newCardDisplay = mainCard.cloneNode(true);
    newCardDisplay.setAttribute("id", cards[i].id);
    newCardDisplay.style.display = "flex";
    mainContainer.appendChild(newCardDisplay);

    Card.prototype.changeStatus(newCardDisplay.childNodes[7], i);
    Card.prototype.deleteCard(newCardDisplay.childNodes[9], newCardDisplay);
    console.log(cards);
  }
}

//***************************************************//
//***************************************************//
//*****           Form Event Listeners          *****//

formBtnStatus.addEventListener("click", (e) => {
  e.preventDefault();

  if (formBtnStatus.innerText === "Not Read") formBtnStatus.innerText = "Read";
  else formBtnStatus.innerText = "Not Read";
});

btnAddBook.addEventListener("click", (e) => {
  e.preventDefault();

  // show(and toggle) form
  for (let el of formEl) {
    el.classList.toggle("header__form--hide");
  }

  // submit form
  if (formEl[0].classList.contains("header__form--hide")) {
    if (formBook.value.length >= 1 && formAuthor.value.length >= 1) {
      const card = new Card(
        formBook.value,
        formAuthor.value,
        formPages.value,
        formBtnStatus.innerText,
        `mainCard-${cards.length + 1}`
      );
      cards.push(card);
      renderCards();

      // restart form values
      formBook.value = "";
      formAuthor.value = "";
      formPages.value = "";
      formBtnStatus.innerText = "Read";
    }
  }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YsdUhBQXVIO0FBQ3ZIO0FBQ0Esb0VBQW9FLGNBQWMsZUFBZSwyQkFBMkIsZ0NBQWdDLDZCQUE2Qiw4QkFBOEIsc0JBQXNCLEdBQUcsVUFBVSxxQkFBcUIsR0FBRyxxQkFBcUIsd0NBQXdDLG1CQUFtQixzQkFBc0IsR0FBRyw0QkFBNEIseUJBQXlCLG1CQUFtQix1QkFBdUIsR0FBRywyQkFBMkIsbUJBQW1CLEdBQUcsaUNBQWlDLG1CQUFtQixHQUFHLHVCQUF1QixpQkFBaUIscUJBQXFCLG9CQUFvQixHQUFHLDJCQUEyQix3Q0FBd0MsdUJBQXVCLEdBQUcsaUNBQWlDLHdDQUF3QyxHQUFHLDBCQUEwQixpQkFBaUIsd0JBQXdCLHdCQUF3QixpQkFBaUIscUJBQXFCLGlCQUFpQix1QkFBdUIsbUJBQW1CLHdDQUF3QyxzQkFBc0Isc0NBQXNDLG9CQUFvQixrQkFBa0IsNEJBQTRCLHdCQUF3Qix1QkFBdUIscUJBQXFCLDhDQUE4QyxHQUFHLDhCQUE4Qiw4Q0FBOEMsR0FBRyw4QkFBOEIscUJBQXFCLGlCQUFpQixnQkFBZ0Isb0JBQW9CLEdBQUcsaUNBQWlDLDhDQUE4QyxvQkFBb0IsR0FBRyxpQ0FBaUMsOEJBQThCLDhDQUE4QyxvQkFBb0IsR0FBRyxpQkFBaUIsMkJBQTJCLDRCQUE0Qix3QkFBd0IsY0FBYyxzRkFBc0Ysa0JBQWtCLHdCQUF3QiwrQ0FBK0MsR0FBRyxtQkFBbUIsa0JBQWtCLDRCQUE0Qiw4QkFBOEIsaUJBQWlCLGlCQUFpQix3QkFBd0IsK0NBQStDLEdBQUcsMEJBQTBCLDBCQUEwQix1QkFBdUIsR0FBRyxnQ0FBZ0MsK0JBQStCLHVCQUF1QixHQUFHLHlCQUF5QixrQkFBa0IsR0FBRyx1Q0FBdUMsaUJBQWlCLHdCQUF3Qix3QkFBd0IsaUJBQWlCLHFCQUFxQixpQkFBaUIsdUJBQXVCLG1CQUFtQix3Q0FBd0Msc0JBQXNCLHNDQUFzQyxHQUFHLDZDQUE2QyxrQkFBa0IsK0JBQStCLEdBQUcsb0RBQW9ELGlCQUFpQixtQkFBbUIseUJBQXlCLEdBQUcsVUFBVSw4QkFBOEIsdUZBQXVGLEdBQUcsZ0JBQWdCLGtCQUFrQiwyQkFBMkIsd0JBQXdCLGdCQUFnQixrQkFBa0IsbUJBQW1CLEdBQUcsd0JBQXdCLGtCQUFrQiw0QkFBNEIsY0FBYyxpQkFBaUIsa0JBQWtCLHNDQUFzQyxxQkFBcUIsR0FBRyxpQkFBaUIsc0JBQXNCLHdDQUF3QyxtQkFBbUIsR0FBRyxzQkFBc0IsdUJBQXVCLHFCQUFxQixHQUFHLGlCQUFpQixrQkFBa0IsNEJBQTRCLHdCQUF3QixjQUFjLHNCQUFzQixHQUFHLHVDQUF1QyxpQkFBaUIsR0FBRywrQ0FBK0Msd0JBQXdCLDZCQUE2QixzQkFBc0Isc0NBQXNDLEtBQUsscUJBQXFCLDZCQUE2QiwwQkFBMEIsS0FBSywrREFBK0QsbUJBQW1CLEtBQUssR0FBRyxvQkFBb0IsZ0JBQWdCLGtCQUFrQixvQkFBb0IsNkJBQTZCLGNBQWMsR0FBRywrQ0FBK0Msc0JBQXNCLDhCQUE4QixLQUFLLEdBQUcsNkNBQTZDLHNCQUFzQiw4QkFBOEIsS0FBSyxHQUFHLE9BQU8sNmlCQUE2aUIsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFFBQVEsTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFlBQVksWUFBWSxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxZQUFZLFlBQVksVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsYUFBYSxZQUFZLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxZQUFZLFlBQVksVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxtREFBbUQsY0FBYyxlQUFlLDJCQUEyQixrQ0FBa0MsNkJBQTZCLDhCQUE4QixzQkFBc0IsR0FBRyxVQUFVLHFCQUFxQixHQUFHLHNGQUFzRiw0QkFBNEIsY0FBYyxlQUFlLDJCQUEyQixnQ0FBZ0MsNkJBQTZCLDhCQUE4QixzQkFBc0IsR0FBRyxVQUFVLHFCQUFxQixHQUFHLHFCQUFxQix3Q0FBd0MsbUJBQW1CLHNCQUFzQixHQUFHLDRCQUE0Qix5QkFBeUIsbUJBQW1CLHVCQUF1QixHQUFHLDJCQUEyQixtQkFBbUIsR0FBRyxpQ0FBaUMsbUJBQW1CLEdBQUcsdUJBQXVCLGlCQUFpQixxQkFBcUIsb0JBQW9CLEdBQUcsMkJBQTJCLHdDQUF3Qyx1QkFBdUIsR0FBRyxpQ0FBaUMsd0NBQXdDLEdBQUcsMEJBQTBCLGlCQUFpQix3QkFBd0Isd0JBQXdCLGlCQUFpQixxQkFBcUIsaUJBQWlCLHVCQUF1QixtQkFBbUIsd0NBQXdDLHNCQUFzQixzQ0FBc0Msb0JBQW9CLGtCQUFrQiw0QkFBNEIsd0JBQXdCLHVCQUF1QixxQkFBcUIsOENBQThDLEdBQUcsOEJBQThCLDhDQUE4QyxHQUFHLDhCQUE4QixxQkFBcUIsaUJBQWlCLGdCQUFnQixvQkFBb0IsR0FBRyxpQ0FBaUMsOENBQThDLG9CQUFvQixHQUFHLGlDQUFpQyw4QkFBOEIsOENBQThDLG9CQUFvQixHQUFHLGlCQUFpQiwyQkFBMkIsNEJBQTRCLHdCQUF3QixjQUFjLHNGQUFzRixrQkFBa0Isd0JBQXdCLCtDQUErQyxHQUFHLG1CQUFtQixrQkFBa0IsNEJBQTRCLDhCQUE4QixpQkFBaUIsaUJBQWlCLHdCQUF3QiwrQ0FBK0MsR0FBRywwQkFBMEIsMEJBQTBCLHVCQUF1QixHQUFHLGdDQUFnQywrQkFBK0IsdUJBQXVCLEdBQUcseUJBQXlCLGtCQUFrQixHQUFHLHVDQUF1QyxpQkFBaUIsd0JBQXdCLHdCQUF3QixpQkFBaUIscUJBQXFCLGlCQUFpQix1QkFBdUIsbUJBQW1CLHdDQUF3QyxzQkFBc0Isc0NBQXNDLEdBQUcsNkNBQTZDLGtCQUFrQiwrQkFBK0IsR0FBRyxvREFBb0QsaUJBQWlCLG1CQUFtQix5QkFBeUIsR0FBRyxVQUFVLDhCQUE4Qix1RkFBdUYsR0FBRyxnQkFBZ0Isa0JBQWtCLDJCQUEyQix3QkFBd0IsZ0JBQWdCLGtCQUFrQixtQkFBbUIsR0FBRyx3QkFBd0Isa0JBQWtCLDRCQUE0QixjQUFjLGlCQUFpQixrQkFBa0Isc0NBQXNDLHFCQUFxQixHQUFHLGlCQUFpQixzQkFBc0Isd0NBQXdDLG1CQUFtQixHQUFHLHNCQUFzQix1QkFBdUIscUJBQXFCLEdBQUcsaUJBQWlCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLGNBQWMsc0JBQXNCLEdBQUcsdUNBQXVDLGlCQUFpQixHQUFHLCtDQUErQyx3QkFBd0IsNkJBQTZCLHNCQUFzQixzQ0FBc0MsS0FBSyxxQkFBcUIsNkJBQTZCLDBCQUEwQixLQUFLLCtEQUErRCxtQkFBbUIsS0FBSyxHQUFHLG9CQUFvQixnQkFBZ0Isa0JBQWtCLG9CQUFvQiw2QkFBNkIsY0FBYyxHQUFHLCtDQUErQyxzQkFBc0IsOEJBQThCLEtBQUssR0FBRyw2Q0FBNkMsc0JBQXNCLDhCQUE4QixLQUFLLEdBQUcsb0ZBQW9GLGlCQUFpQixXQUFXLGlDQUFpQyx5QkFBeUIsd0JBQXdCLG9CQUFvQiw2QkFBNkIsdUJBQXVCLDJCQUEyQixPQUFPLG1CQUFtQiw2QkFBNkIsbUJBQW1CLDZDQUE2QyxTQUFTLE9BQU8sS0FBSyxHQUFHLG9GQUFvRiwwQkFBMEIsb0NBQW9DLHVDQUF1Qyx1QkFBdUIsK0NBQStDLDZDQUE2QyxxRkFBcUYsbURBQW1ELHVCQUF1QixvQkFBb0IsaUJBQWlCLHFCQUFxQixvQkFBb0IsZUFBZSwyREFBMkQseUJBQXlCLGlCQUFpQiwyQ0FBMkMsT0FBTyxLQUFLLEdBQUcsMEJBQTBCLHdCQUF3QixzQkFBc0Isa0JBQWtCLDRCQUE0Qix3QkFBd0IsdUJBQXVCLHFCQUFxQiwrREFBK0QsZUFBZSxxREFBcUQsS0FBSyxHQUFHLGdEQUFnRCxnQkFBZ0IsdUJBQXVCLG1CQUFtQixrQkFBa0Isc0JBQXNCLEtBQUssdUJBQXVCLHFEQUFxRCxzQkFBc0IsS0FBSyxxQkFBcUIsc0NBQXNDLG9FQUFvRSxzQkFBc0IsS0FBSyxHQUFHLHdCQUF3QixpQkFBaUIseUNBQXlDLHdCQUF3QixpQkFBaUIscUJBQXFCLGlCQUFpQix1QkFBdUIsdUJBQXVCLCtCQUErQixzQkFBc0Isc0NBQXNDLEdBQUcsbUJBQW1CLHFCQUFxQixNQUFNLGlCQUFpQixxQkFBcUIsMkJBQTJCLDRCQUE0Qix3QkFBd0IsY0FBYyx1SkFBdUosb0JBQW9CLDBCQUEwQiwrQ0FBK0MsYUFBYSxvQkFBb0IsOEJBQThCLHNEQUFzRCxxQkFBcUIsbUJBQW1CLDRCQUE0QixpREFBaUQsa0JBQWtCLDhCQUE4QiwyQkFBMkIsbUJBQW1CLDRDQUE0Qyw2QkFBNkIsU0FBUyxPQUFPLEtBQUssR0FBRyxvQkFBb0IsYUFBYSxvQkFBb0IsS0FBSyxZQUFZLGdDQUFnQyw0QkFBNEIsbUJBQW1CLHdCQUF3Qiw0Q0FBNEMsU0FBUywwQkFBMEIsdUJBQXVCLHlCQUF5QiwrQkFBK0IsU0FBUyxPQUFPLEtBQUssR0FBRyxXQUFXLHFDQUFxQyxnSUFBZ0ksR0FBRyxnQkFBZ0Isa0JBQWtCLDJCQUEyQix3QkFBd0Isa0JBQWtCLGtCQUFrQixtQkFBbUIsR0FBRyxjQUFjLGtCQUFrQixvQkFBb0IsOEJBQThCLGdCQUFnQixtQkFBbUIsb0JBQW9CLHdDQUF3Qyx5QkFBeUIsS0FBSyxlQUFlLHdCQUF3QixpQ0FBaUMsb0JBQW9CLGdCQUFnQiwyQkFBMkIseUJBQXlCLE9BQU8sS0FBSyxlQUFlLG9CQUFvQiw4QkFBOEIsMEJBQTBCLGdCQUFnQix3QkFBd0IscUNBQXFDLHFCQUFxQixPQUFPLEtBQUssR0FBRywyREFBMkQsd0JBQXdCLDZCQUE2QixzQkFBc0IsdUNBQXVDLEtBQUsscUJBQXFCLDZCQUE2QiwwQkFBMEIsa0RBQWtELHFCQUFxQixPQUFPLEtBQUssR0FBRyx1QkFBdUIseUNBQXlDLGdCQUFnQixrQkFBa0Isb0JBQW9CLDZCQUE2QixjQUFjLEdBQUcsb0VBQW9FLHNCQUFzQiw4QkFBOEIsS0FBSyxHQUFHLCtDQUErQyxzQkFBc0IsOEJBQThCLEtBQUssR0FBRyxxQkFBcUI7QUFDOXBnQjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1IxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQWlKO0FBQ2pKO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsMkhBQU87Ozs7QUFJMkY7QUFDbkgsT0FBTyxpRUFBZSwySEFBTyxJQUFJLGtJQUFjLEdBQUcsa0lBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7VUNmQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmE7O0FBRWU7O0FBRTVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0EsaUNBQWlDLGtCQUFrQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixpQkFBaUI7QUFDckM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xpYnJhcnkvLi9zcmMvc3R5bGVzL21haW4uc2NzcyIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzPzY5YzciLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2xpYnJhcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2xpYnJhcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xpYnJhcnkvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbGlicmFyeS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbGlicmFyeS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2xpYnJhcnkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vc3JjL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNvdXJnZXR0ZSZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC1tb3otdXNlci1zZWxlY3Q6IC1tb3otbm9uZTtcXG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuaHRtbCB7XFxuICBmb250LXNpemU6IDYyLjUlO1xcbn1cXG5cXG4ubWFpbl9fY2FyZC1ib3gge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJDb3VyZ2V0dGVcXFwiLCBjdXJzaXZlO1xcbiAgY29sb3I6ICNlNWQ4Y2Y7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG59XFxuLm1haW5fX2NhcmQtYm94ID4gYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxufVxcbi5tYWluX19jYXJkLWJveC0tZGVsZXRlIHtcXG4gIGNvbG9yOiAjZWUzMDMwO1xcbn1cXG4ubWFpbl9fY2FyZC1ib3gtLWRlbGV0ZTpob3ZlciB7XFxuICBjb2xvcjogIzM2MTUwMDtcXG59XFxuXFxuLmhlYWRlcl9fZm9ybS1idG4ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmhlYWRlcl9fZm9ybS1idG4gPiBzdmcge1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggMnB4ICNkNjU0MDA7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcbi5oZWFkZXJfX2Zvcm0tYnRuID4gc3ZnOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IDFweCAjZmZmZmZmO1xcbn1cXG5cXG4uaGVhZGVyX19mb3JtLXN0YXR1cyB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiAjZDY1NDAwO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGhlaWdodDogMjhweDtcXG4gIG1pbi13aWR0aDogMTMwcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogI2U1ZDhjZjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ291cmdldHRlXFxcIiwgY3Vyc2l2ZTtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDExNCwgNTAsIDgpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDFweCAycHggI2Q2NTQwMDtcXG59XFxuLmhlYWRlcl9fZm9ybS1zdGF0dXM6aG92ZXIge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCA1cHggM3B4ICNlMmIyOTI7XFxufVxcblxcbi5tYWluX19jYXJkLWJveCA+IGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5tYWluX19jYXJkLWJveC0tc3RhdHVzOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMXB4IDJweCAjZTJiMjkyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubWFpbl9fY2FyZC1ib3gtLWRlbGV0ZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWUzMDMwO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAxcHggMnB4ICMzNjE1MDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tYWluX19jYXJkIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEycHg7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNjU0MDAgMCUsIHJnYigyMjQsIDg5LCA4KSA1MCUsICNkNjU0MDAgMTAwJSk7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC43KTtcXG59XFxuLm1haW5fX2NhcmQtYm94IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNjE1MDA7XFxuICBwYWRkaW5nOiA4cHg7XFxuICB3aWR0aDogMjIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjcpO1xcbn1cXG4ubWFpbl9fY2FyZC1ib3ggPiBzcGFuIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLm1haW5fX2NhcmQtYm94ID4gc3Bhbjpmb2N1cyB7XFxuICBvdXRsaW5lOiAxcHggc29saWQgI2ZmNmIwZDtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG59XFxuXFxuLmhlYWRlcl9fZm9ybS0taGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uaGVhZGVyX19mb3JtLWVsID4gaW5wdXRbdHlwZT10ZXh0XSB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiAjZDY1NDAwO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGhlaWdodDogMjhweDtcXG4gIG1pbi13aWR0aDogMTMwcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogI2U1ZDhjZjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ291cmdldHRlXFxcIiwgY3Vyc2l2ZTtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDExNCwgNTAsIDgpO1xcbn1cXG4uaGVhZGVyX19mb3JtLWVsID4gaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgb3V0bGluZTogMnB4IHNvbGlkICNlMmIyOTI7XFxufVxcbi5oZWFkZXJfX2Zvcm0tZWwgPiBpbnB1dFt0eXBlPXRleHRdOjpwbGFjZWhvbGRlciB7XFxuICBvcGFjaXR5OiAwLjc7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjZiMGQ7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNmZjZiMGQgMCUsIHJnYigyNTUsIDg4LCAxMykgNTAlLCAjZmY2YjBkIDEwMCUpO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA4MHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4uaGVhZGVyX19jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAzcmVtO1xcbiAgbWFyZ2luOiAzcmVtO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIHdpZHRoOiBjbGFtcCgxMDAwcHgsIDUwJSwgMTA2MHB4KTtcXG4gIG1pbi13aWR0aDogNTIwcHg7XFxufVxcbi5oZWFkZXJfX2xvZ28ge1xcbiAgZm9udC1zaXplOiAyLjRyZW07XFxuICBmb250LWZhbWlseTogXFxcIkNvdXJnZXR0ZVxcXCIsIGN1cnNpdmU7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuLmhlYWRlcl9fbG9nbyA+IGgxIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1pbi13aWR0aDogMjQycHg7XFxufVxcbi5oZWFkZXJfX2Zvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMnJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG4uaGVhZGVyX19mb3JtLWVsID4gaW5wdXRbdHlwZT10ZXh0XSB7XFxuICB3aWR0aDogMTAwcHg7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTc3cHgpIHtcXG4gIC5oZWFkZXJfX2NvbnRhaW5lciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgd2lkdGg6IGNsYW1wKDBweCwgNTB2dywgMTA2MHB4KTtcXG4gIH1cXG5cXG4gIC5oZWFkZXJfX2Zvcm0ge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbiAgLmhlYWRlcl9fZm9ybS1lbCA+IGlucHV0W3R5cGU9dGV4dF0sIC5oZWFkZXJfX2Zvcm0tc3RhdHVzIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgfVxcbn1cXG4ubWFpbl9fY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcXG4gIGdhcDogMzBweDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NzdweCkge1xcbiAgLm1haW5fX2NvbnRhaW5lciB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg5OXB4KSB7XFxuICAubWFpbl9fY29udGFpbmVyIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvYmFzZS9fcmVzZXQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9tYWluLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvYmFzZS9fdHlwb2dyYXBoeS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2Fic3RyYWN0cy9fdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvY29tcG9uZW50cy9fYnV0dG9ucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2Fic3RyYWN0cy9fbWl4aW5zLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvY29tcG9uZW50cy9fY2FyZHMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9jb21wb25lbnRzL19mb3Jtcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2xheW91dC9fZ2VuZXJhbC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2xheW91dC9faGVhZGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbGF5b3V0L19tYWluLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztFQUdFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFFQSwyQkFBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QUNaRTtFQUNFLGlDQ2FXO0VEWlgsY0NFUztFRERULGlCQUFBO0FEZUo7QUNiSTtFQUNFLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FEZU47QUNaSTtFQUNFLGNDRlM7QUZnQmY7QUNaTTtFQUNFLGNDWnFCO0FGMEI3Qjs7QUcvQkE7RUFHRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FIZ0NGO0FHOUJFO0VBQ0UsbUNBQUE7RUFDQSxrQkFBQTtBSGdDSjtBRzlCSTtFQUNFLG1DQUFBO0FIZ0NOOztBRzNCQTtFQ2pCRSxZQUFBO0VBQ0EsbUJGR3dCO0VFRnhCLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0ZEVztFRUVYLGlDRlFhO0VFUGIsaUJBQUE7RUFDQSxpQ0FBQTtFRFVBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5Q0FBQTtBSHVDRjtBR3JDRTtFQUNFLHlDQUFBO0FIdUNKOztBR2hDRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FIbUNKO0FHaENFO0VBQ0UseUNBQUE7RUFDQSxlQUFBO0FIa0NKO0FHaENFO0VBQ0UseUJEcENXO0VDcUNYLHlDQUFBO0VBQ0EsZUFBQTtBSGtDSjs7QUtqRkE7RUFFRSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBRUEsaUZBQUE7RUFPQSxhQUFBO0VBRUEsbUJBQUE7RUFDQSwwQ0FBQTtBTDJFRjtBS3pFRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUVBLHlCSHJCeUI7RUd1QnpCLFlBQUE7RUFDQSxZQUFBO0VBRUEsbUJBQUE7RUFDQSwwQ0FBQTtBTHdFSjtBS3RFSTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7QUx3RU47QUt0RU07RUFDRSwwQkFBQTtFQUNBLGtCQUFBO0FMd0VSOztBTWhIRTtFQUNFLGFBQUE7QU5tSEo7QU0vR0k7RUZMRixZQUFBO0VBQ0EsbUJGR3dCO0VFRnhCLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0ZEVztFRUVYLGlDRlFhO0VFUGIsaUJBQUE7RUFDQSxpQ0FBQTtBSnVIRjtBTXpITTtFQUNFLGFBQUE7RUFFQSwwQkFBQTtBTjBIUjtBTXZITTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QU55SFI7O0FPM0lBO0VBQ0UseUJMR2M7RUtEZCxrRkFBQTtBUDZJRjs7QU9ySUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBUHVJRjs7QVF4SkU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0FSMkpKO0FReEpFO0VBQ0UsaUJBQUE7RUFDQSxpQ05JVztFTUhYLGNOWEk7QUZxS1I7QVF4Skk7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FSMEpOO0FRdEpFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QVJ3Sko7QVF0Skk7RUFDRSxZQUFBO0FSd0pOOztBUWpKQTtFQUNFO0lBQ0Usc0JBQUE7SUFDQSxlQUFBO0lBQ0EsK0JBQUE7RVJvSkY7O0VRakpBO0lBQ0Usc0JBQUE7SUFDQSxtQkFBQTtFUm9KRjtFUW5KRTtJQUVFLFlBQUE7RVJvSko7QUFDRjtBU3RNQTtFQUVFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsU0FBQTtBVHVNRjs7QVNsTUE7RUFDRTtJQUNFLHVCQUFBO0VUcU1GO0FBQ0Y7QVNsTUE7RUFDRTtJQUNFLHVCQUFBO0VUb01GO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFxuICAtbW96LXVzZXItc2VsZWN0OiAtbW96LW5vbmU7XFxuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1zaXplOiA2Mi41JTtcXG59XFxuXCIsXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Db3VyZ2V0dGUmZGlzcGxheT1zd2FwXFxcIik7XFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAtbW96LXVzZXItc2VsZWN0OiAtbW96LW5vbmU7XFxuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1zaXplOiA2Mi41JTtcXG59XFxuXFxuLm1haW5fX2NhcmQtYm94IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ291cmdldHRlXFxcIiwgY3Vyc2l2ZTtcXG4gIGNvbG9yOiAjZTVkOGNmO1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxufVxcbi5tYWluX19jYXJkLWJveCA+IGJ1dHRvbiB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbn1cXG4ubWFpbl9fY2FyZC1ib3gtLWRlbGV0ZSB7XFxuICBjb2xvcjogI2VlMzAzMDtcXG59XFxuLm1haW5fX2NhcmQtYm94LS1kZWxldGU6aG92ZXIge1xcbiAgY29sb3I6ICMzNjE1MDA7XFxufVxcblxcbi5oZWFkZXJfX2Zvcm0tYnRuIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5oZWFkZXJfX2Zvcm0tYnRuID4gc3ZnIHtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IDJweCAjZDY1NDAwO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG4uaGVhZGVyX19mb3JtLWJ0biA+IHN2Zzpob3ZlciB7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAxcHggI2ZmZmZmZjtcXG59XFxuXFxuLmhlYWRlcl9fZm9ybS1zdGF0dXMge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogI2Q2NTQwMDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBoZWlnaHQ6IDI4cHg7XFxuICBtaW4td2lkdGg6IDEzMHB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICNlNWQ4Y2Y7XFxuICBmb250LWZhbWlseTogXFxcIkNvdXJnZXR0ZVxcXCIsIGN1cnNpdmU7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMTQsIDUwLCA4KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAxcHggMnB4ICNkNjU0MDA7XFxufVxcbi5oZWFkZXJfX2Zvcm0tc3RhdHVzOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggNXB4IDNweCAjZTJiMjkyO1xcbn1cXG5cXG4ubWFpbl9fY2FyZC1ib3ggPiBidXR0b24ge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubWFpbl9fY2FyZC1ib3gtLXN0YXR1czpob3ZlciB7XFxuICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDFweCAycHggI2UyYjI5MjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm1haW5fX2NhcmQtYm94LS1kZWxldGU6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlMzAzMDtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMXB4IDJweCAjMzYxNTAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubWFpbl9fY2FyZCB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMnB4O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDY1NDAwIDAlLCByZ2IoMjI0LCA4OSwgOCkgNTAlLCAjZDY1NDAwIDEwMCUpO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNyk7XFxufVxcbi5tYWluX19jYXJkLWJveCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzYxNTAwO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgd2lkdGg6IDIyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC43KTtcXG59XFxuLm1haW5fX2NhcmQtYm94ID4gc3BhbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5tYWluX19jYXJkLWJveCA+IHNwYW46Zm9jdXMge1xcbiAgb3V0bGluZTogMXB4IHNvbGlkICNmZjZiMGQ7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxufVxcblxcbi5oZWFkZXJfX2Zvcm0tLWhpZGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmhlYWRlcl9fZm9ybS1lbCA+IGlucHV0W3R5cGU9dGV4dF0ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogI2Q2NTQwMDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBoZWlnaHQ6IDI4cHg7XFxuICBtaW4td2lkdGg6IDEzMHB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICNlNWQ4Y2Y7XFxuICBmb250LWZhbWlseTogXFxcIkNvdXJnZXR0ZVxcXCIsIGN1cnNpdmU7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMTQsIDUwLCA4KTtcXG59XFxuLmhlYWRlcl9fZm9ybS1lbCA+IGlucHV0W3R5cGU9dGV4dF06Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCAjZTJiMjkyO1xcbn1cXG4uaGVhZGVyX19mb3JtLWVsID4gaW5wdXRbdHlwZT10ZXh0XTo6cGxhY2Vob2xkZXIge1xcbiAgb3BhY2l0eTogMC43O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2YjBkO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZmY2YjBkIDAlLCByZ2IoMjU1LCA4OCwgMTMpIDUwJSwgI2ZmNmIwZCAxMDAlKTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogODB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLmhlYWRlcl9fY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogM3JlbTtcXG4gIG1hcmdpbjogM3JlbTtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICB3aWR0aDogY2xhbXAoMTAwMHB4LCA1MCUsIDEwNjBweCk7XFxuICBtaW4td2lkdGg6IDUyMHB4O1xcbn1cXG4uaGVhZGVyX19sb2dvIHtcXG4gIGZvbnQtc2l6ZTogMi40cmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJDb3VyZ2V0dGVcXFwiLCBjdXJzaXZlO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcbi5oZWFkZXJfX2xvZ28gPiBoMSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtaW4td2lkdGg6IDI0MnB4O1xcbn1cXG4uaGVhZGVyX19mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDJyZW07XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuLmhlYWRlcl9fZm9ybS1lbCA+IGlucHV0W3R5cGU9dGV4dF0ge1xcbiAgd2lkdGg6IDEwMHB4O1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk3N3B4KSB7XFxuICAuaGVhZGVyX19jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIHdpZHRoOiBjbGFtcCgwcHgsIDUwdncsIDEwNjBweCk7XFxuICB9XFxuXFxuICAuaGVhZGVyX19mb3JtIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG4gIC5oZWFkZXJfX2Zvcm0tZWwgPiBpbnB1dFt0eXBlPXRleHRdLCAuaGVhZGVyX19mb3JtLXN0YXR1cyB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gIH1cXG59XFxuLm1haW5fX2NvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XFxuICBnYXA6IDMwcHg7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTc3cHgpIHtcXG4gIC5tYWluX19jb250YWluZXIge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4OTlweCkge1xcbiAgLm1haW5fX2NvbnRhaW5lciB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcbn1cIixcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNvdXJnZXR0ZSZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG4ubWFpbl9fY2FyZCB7XFxuICAmLWJveCB7XFxuICAgIGZvbnQtZmFtaWx5OiAkcHJpbWFyeS1mb250O1xcbiAgICBjb2xvcjogJHRleHQtY29sb3I7XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcblxcbiAgICAmID4gYnV0dG9uIHtcXG4gICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgICBmb250LXNpemU6IGluaGVyaXQ7XFxuICAgIH1cXG5cXG4gICAgJi0tZGVsZXRlIHtcXG4gICAgICBjb2xvcjogJGRlbGV0ZS1jb2xvcjtcXG5cXG4gICAgICAmOmhvdmVyIHtcXG4gICAgICAgIGNvbG9yOiAkb24tcHJpbWFyeS1jb250YWluZXItY29sb3I7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblwiLFwiLy8vLy8vLy8qKioqKioqKiBDT0xPUlMgKioqKioqKiovLy8vLy8vL1xcblxcbi8vIFBSSU1BUlkgQ09MT1JTXFxuJHdoaXRlOiAjZmZmZmZmO1xcbiRwcmltYXJ5LWNvbG9yOiAjZmY2YjBkO1xcbiRwcmltYXJ5LWNvbnRhaW5lci1jb2xvcjogI2Q2NTQwMDtcXG4kb24tcHJpbWFyeS1jb250YWluZXItY29sb3I6ICMzNjE1MDA7XFxuJHRleHQtY29sb3I6ICNlNWQ4Y2Y7XFxuXFxuLy8gU0VDT05EQVJZIENPTE9SU1xcbiRmb2N1cy1jb2xvcjogI2UyYjI5MjtcXG5cXG4vLyBERUxFVEUgQ09MT1JTXFxuJGRlbGV0ZS1jb2xvcjogI2VlMzAzMDtcXG5cXG4vLy8vLy8vLyoqKioqKioqIEZPTlRTICoqKioqKioqLy8vLy8vLy9cXG5cXG4kcHJpbWFyeS1mb250OiBcXFwiQ291cmdldHRlXFxcIiwgY3Vyc2l2ZTtcXG5cIixcIi8vIEhFQURFUiBGT1JNIEJVVFRPTlMgLy9cXG4uaGVhZGVyX19mb3JtLWJ0biB7XFxuICAvLyBtaW4td2lkdGg6IDUwcHg7XFxuICAvLyBoZWlnaHQ6IDUwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgJiA+IHN2ZyB7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IDJweCAkcHJpbWFyeS1jb250YWluZXItY29sb3I7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggMXB4ICR3aGl0ZTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4uaGVhZGVyX19mb3JtLXN0YXR1cyB7XFxuICBAaW5jbHVkZSBmb3JtLWJveGVzO1xcblxcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDFweCAycHggJHByaW1hcnktY29udGFpbmVyLWNvbG9yO1xcblxcbiAgJjpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggNXB4IDNweCAkZm9jdXMtY29sb3I7XFxuICB9XFxufVxcblxcbi8vIE1BSU4gQ0FSRCBCVVRUT05TIC8vXFxuXFxuLm1haW5fX2NhcmQtYm94IHtcXG4gICYgPiBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuXFxuICAmLS1zdGF0dXM6aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDFweCAycHggJGZvY3VzLWNvbG9yO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuICAmLS1kZWxldGU6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGVsZXRlLWNvbG9yO1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDFweCAycHggJG9uLXByaW1hcnktY29udGFpbmVyLWNvbG9yO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxufVxcblwiLFwiQG1peGluIGZvcm0tYm94ZXMge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogJHByaW1hcnktY29udGFpbmVyLWNvbG9yO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGhlaWdodDogMjhweDtcXG4gIG1pbi13aWR0aDogMTMwcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogJHRleHQtY29sb3I7XFxuICBmb250LWZhbWlseTogJHByaW1hcnktZm9udDtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDExNCwgNTAsIDgpO1xcbn1cXG5cIixcIi8vICNtYWluQ2FyZCB7XFxuLy8gICBkaXNwbGF5OiBub25lO1xcbi8vIH1cXG5cXG4ubWFpbl9fY2FyZCB7XFxuICAvLyBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTJweDtcXG5cXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgOTBkZWcsXFxuICAgICRwcmltYXJ5LWNvbnRhaW5lci1jb2xvciAwJSxcXG4gICAgcmdiYSgyMjQsIDg5LCA4LCAxKSA1MCUsXFxuICAgICRwcmltYXJ5LWNvbnRhaW5lci1jb2xvciAxMDAlXFxuICApO1xcblxcbiAgcGFkZGluZzogMTBweDtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNyk7XFxuXFxuICAmLWJveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb24tcHJpbWFyeS1jb250YWluZXItY29sb3I7XFxuXFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgd2lkdGg6IDIyMHB4O1xcblxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNyk7XFxuXFxuICAgICYgPiBzcGFuIHtcXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgICAgICY6Zm9jdXMge1xcbiAgICAgICAgb3V0bGluZTogMXB4IHNvbGlkICRwcmltYXJ5LWNvbG9yO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cIixcIi5oZWFkZXJfX2Zvcm0ge1xcbiAgJi0taGlkZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAmLWVsIHtcXG4gICAgJiA+IGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICAgICAgQGluY2x1ZGUgZm9ybS1ib3hlcztcXG5cXG4gICAgICAmOmZvY3VzIHtcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XFxuXFxuICAgICAgICBvdXRsaW5lOiAycHggc29saWQgJGZvY3VzLWNvbG9yO1xcbiAgICAgIH1cXG5cXG4gICAgICAmOjpwbGFjZWhvbGRlciB7XFxuICAgICAgICBvcGFjaXR5OiAwLjc7XFxuICAgICAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cIixcImJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XFxuXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIDkwZGVnLFxcbiAgICAkcHJpbWFyeS1jb2xvciAwJSxcXG4gICAgcmdiKDI1NSwgODgsIDEzKSA1MCUsXFxuICAgICRwcmltYXJ5LWNvbG9yIDEwMCVcXG4gICk7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgd2lkdGg6IDgwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblwiLFwiLmhlYWRlciB7XFxuICAmX19jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAzcmVtO1xcbiAgICBtYXJnaW46IDNyZW07XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIHdpZHRoOiBjbGFtcCgxMDAwcHgsIDUwJSwgMTA2MHB4KTtcXG4gICAgbWluLXdpZHRoOiAoNTIwcHgpO1xcbiAgfVxcblxcbiAgJl9fbG9nbyB7XFxuICAgIGZvbnQtc2l6ZTogMi40cmVtO1xcbiAgICBmb250LWZhbWlseTogJHByaW1hcnktZm9udDtcXG4gICAgY29sb3I6ICR3aGl0ZTtcXG5cXG4gICAgJiA+IGgxIHtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgbWluLXdpZHRoOiAyNDJweDtcXG4gICAgfVxcbiAgfVxcblxcbiAgJl9fZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDJyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcblxcbiAgICAmLWVsID4gaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gICAgICB3aWR0aDogMTAwcHg7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLy8gUEhPTkVcXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk3N3B4KSB7XFxuICAuaGVhZGVyX19jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIHdpZHRoOiBjbGFtcCgwMHB4LCA1MHZ3LCAxMDYwcHgpO1xcbiAgfVxcblxcbiAgLmhlYWRlcl9fZm9ybSB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICYtZWwgPiBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0sXFxuICAgICYtc3RhdHVzIHtcXG4gICAgICB3aWR0aDogMzAwcHg7XFxuICAgIH1cXG4gIH1cXG59XFxuXCIsXCIubWFpbl9fY29udGFpbmVyIHtcXG4gIC8vIHdpZHRoOiBjbGFtcCgzNDBweCwgNjB2dywgMTA4MHB4KTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcXG4gIGdhcDogMzBweDtcXG59XFxuXFxuLy8gVEFCTEVUIC8gUEhPTkVcXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk3N3B4KSB7XFxuICAubWFpbl9fY29udGFpbmVyIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODk5cHgpIHtcXG4gIC5tYWluX19jb250YWluZXIge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFwiLi9zdHlsZXMvbWFpbi5zY3NzXCI7XG5cbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqLy9cbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqLy9cbi8vKioqKiogICAgICAgICAgICAgIFNlbGVjdG9ycyAgICAgICAgICAgICAgICAgICoqKioqLy9cblxuLy8gSEVBREVSIC8gRk9STSBTRUxFQ1RJT05TXG5jb25zdCBoZWFkZXJDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlckNvbnRhaW5lclwiKTtcblxuY29uc3QgZm9ybUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImhlYWRlcl9fZm9ybS1lbFwiKTtcblxuY29uc3QgZm9ybUJvb2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm1Cb29rXCIpO1xuY29uc3QgZm9ybUF1dGhvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybUF1dGhvclwiKTtcbmNvbnN0IGZvcm1QYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybVBhZ2VzXCIpO1xuY29uc3QgZm9ybUJ0blN0YXR1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybUJ0blN0YXR1c1wiKTtcbmNvbnN0IGJ0bkFkZEJvb2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bkFkZEJvb2tcIik7XG5cbi8vIE1BSU4gU0VMRUNUSU9OU1xuY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbkNvbnRhaW5lclwiKTtcbmNvbnN0IG1haW5DYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluQ2FyZFwiKTtcblxuY29uc3QgY2FyZEJvb2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5fX2NhcmQtLWJvb2tcIik7XG5jb25zdCBjYXJkQXV0aG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluX19jYXJkLS1hdXRob3JcIik7XG5jb25zdCBjYXJkUGFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5fX2NhcmQtLXBhZ2VzXCIpO1xuY29uc3QgY2FyZFN0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbl9fY2FyZC0tc3RhdHVzXCIpO1xuXG5jb25zdCBjYXJkRGVsZXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluX19jYXJkLS1kZWxldGVcIik7XG4vLyBjb25zb2xlLmxvZyhDYXJkQm9vay5pbm5lclRleHQpO1xuXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi8vXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi8vXG4vLyoqKioqICAgICAgICAgICAgICAgQ2FyZHMgICAgICAgICAgICAgICAgICAgICAqKioqKi8vXG5cbmxldCBjYXJkcyA9IFtdO1xubWFpbkNhcmQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4vLyBDT05TVFJVQ1RPUlxuZnVuY3Rpb24gQ2FyZChib29rLCBhdXRob3IsIHBhZ2VzLCBzdGF0dXMsIGlkKSB7XG4gIHRoaXMuYm9vayA9IGJvb2s7XG4gIHRoaXMuYXV0aG9yID0gYXV0aG9yO1xuICB0aGlzLnBhZ2VzID0gcGFnZXM7XG4gIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICB0aGlzLmlkID0gaWQ7XG59XG5cbkNhcmQucHJvdG90eXBlLmNoYW5nZVN0YXR1cyA9IGZ1bmN0aW9uIChjYXJkLCBpKSB7XG4gIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAoKGNhcmQuaW5uZXJUZXh0ICYmIGNhcmRzW2ldLnN0YXR1cykgPT09IFwiUmVhZFwiKSB7XG4gICAgICBjYXJkc1tpXS5zdGF0dXMgPSBcIk5vdCBSZWFkXCI7XG4gICAgICBjYXJkLmlubmVyVGV4dCA9IFwiTm90IFJlYWRcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FyZHNbaV0uc3RhdHVzID0gXCJSZWFkXCI7XG4gICAgICBjYXJkLmlubmVyVGV4dCA9IFwiUmVhZFwiO1xuICAgIH1cbiAgfSk7XG59O1xuXG5DYXJkLnByb3RvdHlwZS5kZWxldGVDYXJkID0gZnVuY3Rpb24gKGNhcmREZWxCdG4sIGNhcmQpIHtcbiAgY2FyZERlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNhcmQucmVtb3ZlKCk7XG4gICAgY2FyZHMucG9wKCk7XG4gIH0pO1xufTtcblxuLy8gUmVuZGVyIENhcmRzXG5mdW5jdGlvbiByZW5kZXJDYXJkcygpIHtcbiAgZm9yIChsZXQgaSA9IGNhcmRzLmxlbmd0aCAtIDE7IGkgPCBjYXJkcy5sZW5ndGg7IGkrKykge1xuICAgIGNhcmRCb29rLmlubmVyVGV4dCA9IGNhcmRzW2ldLmJvb2s7XG4gICAgY2FyZEF1dGhvci5pbm5lclRleHQgPSBjYXJkc1tpXS5hdXRob3I7XG4gICAgY2FyZFBhZ2VzLmlubmVyVGV4dCA9IGNhcmRzW2ldLnBhZ2VzO1xuICAgIGNhcmRTdGF0dXMuaW5uZXJUZXh0ID0gY2FyZHNbaV0uc3RhdHVzO1xuXG4gICAgY29uc3QgbmV3Q2FyZERpc3BsYXkgPSBtYWluQ2FyZC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgbmV3Q2FyZERpc3BsYXkuc2V0QXR0cmlidXRlKFwiaWRcIiwgY2FyZHNbaV0uaWQpO1xuICAgIG5ld0NhcmREaXNwbGF5LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0NhcmREaXNwbGF5KTtcblxuICAgIENhcmQucHJvdG90eXBlLmNoYW5nZVN0YXR1cyhuZXdDYXJkRGlzcGxheS5jaGlsZE5vZGVzWzddLCBpKTtcbiAgICBDYXJkLnByb3RvdHlwZS5kZWxldGVDYXJkKG5ld0NhcmREaXNwbGF5LmNoaWxkTm9kZXNbOV0sIG5ld0NhcmREaXNwbGF5KTtcbiAgICBjb25zb2xlLmxvZyhjYXJkcyk7XG4gIH1cbn1cblxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovL1xuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovL1xuLy8qKioqKiAgICAgICAgICAgRm9ybSBFdmVudCBMaXN0ZW5lcnMgICAgICAgICAgKioqKiovL1xuXG5mb3JtQnRuU3RhdHVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgaWYgKGZvcm1CdG5TdGF0dXMuaW5uZXJUZXh0ID09PSBcIk5vdCBSZWFkXCIpIGZvcm1CdG5TdGF0dXMuaW5uZXJUZXh0ID0gXCJSZWFkXCI7XG4gIGVsc2UgZm9ybUJ0blN0YXR1cy5pbm5lclRleHQgPSBcIk5vdCBSZWFkXCI7XG59KTtcblxuYnRuQWRkQm9vay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIC8vIHNob3coYW5kIHRvZ2dsZSkgZm9ybVxuICBmb3IgKGxldCBlbCBvZiBmb3JtRWwpIHtcbiAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKFwiaGVhZGVyX19mb3JtLS1oaWRlXCIpO1xuICB9XG5cbiAgLy8gc3VibWl0IGZvcm1cbiAgaWYgKGZvcm1FbFswXS5jbGFzc0xpc3QuY29udGFpbnMoXCJoZWFkZXJfX2Zvcm0tLWhpZGVcIikpIHtcbiAgICBpZiAoZm9ybUJvb2sudmFsdWUubGVuZ3RoID49IDEgJiYgZm9ybUF1dGhvci52YWx1ZS5sZW5ndGggPj0gMSkge1xuICAgICAgY29uc3QgY2FyZCA9IG5ldyBDYXJkKFxuICAgICAgICBmb3JtQm9vay52YWx1ZSxcbiAgICAgICAgZm9ybUF1dGhvci52YWx1ZSxcbiAgICAgICAgZm9ybVBhZ2VzLnZhbHVlLFxuICAgICAgICBmb3JtQnRuU3RhdHVzLmlubmVyVGV4dCxcbiAgICAgICAgYG1haW5DYXJkLSR7Y2FyZHMubGVuZ3RoICsgMX1gXG4gICAgICApO1xuICAgICAgY2FyZHMucHVzaChjYXJkKTtcbiAgICAgIHJlbmRlckNhcmRzKCk7XG5cbiAgICAgIC8vIHJlc3RhcnQgZm9ybSB2YWx1ZXNcbiAgICAgIGZvcm1Cb29rLnZhbHVlID0gXCJcIjtcbiAgICAgIGZvcm1BdXRob3IudmFsdWUgPSBcIlwiO1xuICAgICAgZm9ybVBhZ2VzLnZhbHVlID0gXCJcIjtcbiAgICAgIGZvcm1CdG5TdGF0dXMuaW5uZXJUZXh0ID0gXCJSZWFkXCI7XG4gICAgfVxuICB9XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==