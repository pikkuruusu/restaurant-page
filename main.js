/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_loadPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/loadPage */ \"./src/modules/loadPage.js\");\n/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/home */ \"./src/modules/home.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/contact */ \"./src/modules/contact.js\");\n\n\n\n\n\n(0,_modules_loadPage__WEBPACK_IMPORTED_MODULE_0__.default)();\n\nconst main = document.querySelector('main');\n\nconst navButtons = document.querySelectorAll('.nav-btn')\nnavButtons.forEach(button => button.addEventListener('click', function(e) {\n    e.target.classList.toggle('active');\n    main.innerHTML = '';\n    switch(e.target.id) {\n        case 'home-btn':\n            activateTab('home-btn')\n            ;(0,_modules_home__WEBPACK_IMPORTED_MODULE_1__.default)().forEach(element => {\n                main.appendChild(element);\n            });\n            break;\n        case 'menu-btn':\n            activateTab('menu-btn')\n            ;(0,_modules_menu__WEBPACK_IMPORTED_MODULE_2__.default)().forEach(element => {\n                main.appendChild(element);\n            });\n            break;\n        case 'contact-btn':\n            activateTab('contact-btn')\n            ;(0,_modules_contact__WEBPACK_IMPORTED_MODULE_3__.default)().forEach(element => {\n                main.appendChild(element);\n            });\n            break;\n    };\n}))\n\nfunction activateTab(id) {\n    navButtons.forEach(button => {\n        if(button.id === id && !button.classList.contains('active')) {\n            button.classList.add('active');\n        } else if (button.id != id && button.classList.contains('active')) {\n            button.classList.remove('active');\n        };\n    });\n};\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadContact() {\n    let contentElements = [];\n\n    const h2 = document.createElement('h2');\n    h2.textContent = 'Contact';\n    contentElements.push(h2);\n\n    const paragraphOne = document.createElement('p');\n    paragraphOne.textContent = 'Phone home'\n    contentElements.push(paragraphOne);\n\n    const paragraphTwo = document.createElement('p');\n    paragraphTwo.textContent = 'Do it.'\n    contentElements.push(paragraphTwo);\n\n    return contentElements;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\n\n//# sourceURL=webpack://restaurant-page/./src/modules/contact.js?");

/***/ }),

/***/ "./src/modules/header.js":
/*!*******************************!*\
  !*** ./src/modules/header.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav */ \"./src/modules/nav.js\");\n\n\nfunction loadHeader() {\n    const header = document.createElement('header');\n\n    const h1 = document.createElement('h1');\n    h1.textContent = 'Some restaurant nkjxd j dcj  jec k ej cd je cedncjencje ckjecj';\n\n    header.appendChild(h1);\n    header.appendChild((0,_nav__WEBPACK_IMPORTED_MODULE_0__.default)());\n\n    return header;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHeader);\n\n//# sourceURL=webpack://restaurant-page/./src/modules/header.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadHome() {\n    let contentElements = [];\n\n    const h2 = document.createElement('h2');\n    h2.textContent = 'Home';\n    contentElements.push(h2);\n\n    const paragraphOne = document.createElement('p');\n    paragraphOne.textContent = 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. \\\n    Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. \\\n    Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. \\\n    Mauris placerat eleifend leo.'\n    contentElements.push(paragraphOne);\n\n    const paragraphTwo = document.createElement('p');\n    paragraphTwo.textContent = 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. \\\n    Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. \\\n    Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. \\\n    Mauris placerat eleifend leo.'\n    contentElements.push(paragraphTwo);\n\n    return contentElements;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://restaurant-page/./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/loadPage.js":
/*!*********************************!*\
  !*** ./src/modules/loadPage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/modules/header.js\");\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main */ \"./src/modules/main.js\");\n\n\n\nfunction loadPage() {\n    const contentContainer = document.getElementById('content');\n    \n    contentContainer.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_0__.default)());\n    //Activate first tab\n    document.querySelector('#home-btn').classList.add('active');\n    \n    contentContainer.appendChild((0,_main__WEBPACK_IMPORTED_MODULE_1__.default)());\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);\n\n//# sourceURL=webpack://restaurant-page/./src/modules/loadPage.js?");

/***/ }),

/***/ "./src/modules/main.js":
/*!*****************************!*\
  !*** ./src/modules/main.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/modules/home.js\");\n\n\nfunction loadMain() {\n    const main = document.createElement('main');\n    \n    (0,_home__WEBPACK_IMPORTED_MODULE_0__.default)().forEach(element => {\n        main.appendChild(element);\n    });\n\n    return main;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMain);\n\n//# sourceURL=webpack://restaurant-page/./src/modules/main.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadMenu() {\n    let contentElements = [];\n\n    const h2 = document.createElement('h2');\n    h2.textContent = 'Menu';\n    contentElements.push(h2);\n\n    const paragraphOne = document.createElement('p');\n    paragraphOne.textContent = 'Foods'\n    contentElements.push(paragraphOne);\n\n    const paragraphTwo = document.createElement('p');\n    paragraphTwo.textContent = 'More foods'\n    contentElements.push(paragraphTwo);\n\n    return contentElements;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://restaurant-page/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/nav.js":
/*!****************************!*\
  !*** ./src/modules/nav.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadNav() {\n    const nav = document.createElement('nav');\n    \n    const ul = document.createElement('ul');\n\n    const homeBtn = document.createElement('li');\n    homeBtn.id = 'home-btn';\n    homeBtn.classList.add('nav-btn');\n    homeBtn.textContent = 'Home';\n    ul.appendChild(homeBtn);\n\n    const menuBtn = document.createElement('li');\n    menuBtn.id = 'menu-btn';\n    menuBtn.classList.add('nav-btn');\n    menuBtn.textContent = 'Menu'\n    ul.appendChild(menuBtn);\n\n    const contactBtn = document.createElement('li');\n    contactBtn.id = 'contact-btn';\n    contactBtn.classList.add('nav-btn');\n    contactBtn.textContent = 'Contact';\n    ul.appendChild(contactBtn);\n\n    nav.appendChild(ul);\n\n    return nav;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadNav);\n\n//# sourceURL=webpack://restaurant-page/./src/modules/nav.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;