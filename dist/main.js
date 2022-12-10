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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createContact() {\n  const main = document.createElement(\"main\");\n\n  const contact = document.createElement(\"section\");\n  contact.classList.add(\"contact\");\n  main.appendChild(contact);\n\n  const titleDiv = document.createElement(\"div\");\n  titleDiv.classList.add(\"contact-title\");\n  contact.appendChild(titleDiv);\n\n  const title = document.createElement(\"h2\");\n  title.textContent = \"Contact\";\n  titleDiv.appendChild(title);\n\n  const contactContainer = document.createElement(\"div\");\n  contactContainer.classList.add(\"contact-container\");\n  contact.appendChild(contactContainer);\n\n  const textDiv = document.createElement(\"div\");\n  textDiv.classList.add(\"contact-text\");\n\n  const company = document.createElement(\"h3\");\n  company.textContent = \"Food-Place\";\n  textDiv.appendChild(company);\n\n  for (let i = 0; i < 6; i++) {\n    const para = document.createElement(\"p\");\n\n    switch (i) {\n      case 0:\n        para.textContent = \"Lagos, Nigeria\";\n        break;\n      case 1:\n        para.textContent = \"Festac, Amuwo-Odofin\";\n        break;\n      case 2:\n        para.textContent = \"+2341011001\";\n        break;\n      case 3:\n        para.textContent = \"food-place@eatwell.com\";\n        break;\n      case 4:\n        para.textContent = \"Mon-Fri: 8am - 9pm\";\n        break;\n      case 5:\n        para.textContent = \"Sat-Sun: 11am - 5pm\";\n        break;\n      default:\n        console.log(`Sorry, not available`);\n    }\n    textDiv.appendChild(para);\n  }\n  contactContainer.appendChild(textDiv);\n\n  const location = document.createElement(\"div\");\n  location.classList.add(\"map\");\n  contactContainer.appendChild(location);\n\n  const frame = document.createElement(\"iframe\");\n  frame.src =\n    \"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63433.61676621738!2d3.2789757500000003!3d6.445240599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b889b055dd011%3A0x61d4e55d9e59232!2sAmuwo%20Odofin%2C%20Lagos!5e0!3m2!1sen!2sng!4v1670512659736!5m2!1sen!2sng\";\n  frame.height = \"450\";\n  frame.allowFullscreen = \"\";\n  frame.loading = \"lazy\";\n  location.appendChild(frame);\n\n  return main;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContact);\n\n\n//# sourceURL=webpack://c/./src/contact.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createFooter() {\n  const footer = document.createElement(\"footer\");\n\n  const para = document.createElement(\"p\");\n  para.textContent = \"made by \";\n  footer.appendChild(para);\n\n  const link = document.createElement(\"a\");\n  link.textContent = \"Sophrone\";\n  link.href = \"https://github.com/sophrone\";\n  link.target = \"_blank\";\n  para.appendChild(link);\n\n  return footer;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createFooter);\n\n\n//# sourceURL=webpack://c/./src/footer.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHeader() {\n  const header = document.createElement(\"header\");\n\n  const container = document.createElement(\"div\");\n  container.classList.add(\"header-container\");\n  header.appendChild(container);\n\n  const title = document.createElement(\"h1\");\n  container.appendChild(title);\n\n  const logo = document.createElement(\"img\");\n  logo.id = \"logo\";\n  logo.src = \"./assets/images/good-food.png\";\n  logo.alt = \"food\";\n  title.appendChild(logo);\n\n  const nav = document.createElement(\"nav\");\n  nav.classList.add(\"tabs\");\n\n  for (let i = 1; i <= 3; i++) {\n    let tab = document.createElement(\"div\");\n    tab.classList.add(\"tab\");\n\n    let input = document.createElement(\"input\");\n    input.type = \"radio\";\n    input.name = \"tabgroup\";\n    input.id = `tab-${i}`;\n    if (i == 1) input.checked = true;\n\n    let label = document.createElement(\"label\");\n    label.htmlFor = `tab-${i}`;\n    if (i == 1) label.textContent = \"Home\";\n    if (i == 2) label.textContent = \"Menu\";\n    if (i == 3) label.textContent = \"Contact\";\n\n    tab.appendChild(input);\n    tab.appendChild(label);\n    nav.appendChild(tab);\n  }\n\n  container.appendChild(nav);\n\n  return header;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHeader);\n\n\n//# sourceURL=webpack://c/./src/header.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHome() {\n  const main = document.createElement(\"main\");\n\n  const section = document.createElement(\"section\");\n  section.classList.add(\"home\");\n  main.appendChild(section);\n\n  const headline = document.createElement(\"h2\");\n  headline.textContent = \"The TASTE is the difference!\";\n  section.appendChild(headline);\n\n  const textContainer = document.createElement(\"div\");\n  textContainer.classList.add(\"home-text\");\n  section.appendChild(textContainer);\n\n  const firstPara = document.createElement(\"p\");\n  firstPara.textContent = `Come experience the best we have to offer. Your taste buds will thank you for it`;\n  textContainer.appendChild(firstPara);\n\n  const secondPara = document.createElement(\"p\");\n  secondPara.textContent = `Let us treat you well. Come with your friends and family. This is the experience of a lifetime. One bite is all it takes and you'll testify!`;\n  textContainer.appendChild(secondPara);\n\n  const thirdPara = document.createElement(\"p\");\n  thirdPara.textContent = `What are you waiting for? Come on down, come on all! We have all you could ever desire!`;\n  textContainer.appendChild(thirdPara);\n\n  const sidebar = document.createElement(\"div\");\n  sidebar.classList.add(\"left-sidebar\");\n  sidebar.classList.add(\"sidebar\");\n  main.appendChild(sidebar);\n\n  const tableFood = document.createElement(\"img\");\n  tableFood.src = \"./assets/images/table-food.jpeg\";\n  sidebar.appendChild(tableFood);\n\n  return main;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHome);\n\n\n//# sourceURL=webpack://c/./src/home.js?");

/***/ }),

/***/ "./src/horizontal-rule.js":
/*!********************************!*\
  !*** ./src/horizontal-rule.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHR() {\n  return document.createElement(\"hr\");\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHR);\n\n\n//# sourceURL=webpack://c/./src/horizontal-rule.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n/* harmony import */ var _horizontal_rule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./horizontal-rule */ \"./src/horizontal-rule.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\n\n\nconst mainContent = document.querySelector(\"#content\");\n\nmainContent.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\nmainContent.appendChild((0,_horizontal_rule__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\nmainContent.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\nmainContent.appendChild((0,_horizontal_rule__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\nmainContent.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n\nconst navigationTabs = document.querySelectorAll(\".tabs\");\n\nnavigationTabs.forEach((tab) =>\n  tab.addEventListener(\"click\", (event) => {\n    if (\n      event.target.htmlFor === \"tab-1\" &&\n      !document.querySelector(\"section\").classList.contains(\"home\")\n    ) {\n      document.querySelector(\"main\").remove();\n      document.querySelector(\"hr\").after((0,_home__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\n    } else if (\n      event.target.htmlFor === \"tab-2\" &&\n      !document.querySelector(\"section\").classList.contains(\"menu\")\n    ) {\n      document.querySelector(\"main\").remove();\n      document.querySelector(\"hr\").after((0,_menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\n    } else if (\n      event.target.htmlFor === \"tab-3\" &&\n      !document.querySelector(\"section\").classList.contains(\"contact\")\n    ) {\n      document.querySelector(\"main\").remove();\n      document.querySelector(\"hr\").after((0,_contact__WEBPACK_IMPORTED_MODULE_5__[\"default\"])());\n    }\n  })\n);\n\n\n//# sourceURL=webpack://c/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createMenu() {\n  const main = document.createElement(\"main\");\n\n  const menu = document.createElement(\"section\");\n  menu.classList.add(\"menu\");\n  main.appendChild(menu);\n\n  const titleDiv = document.createElement(\"div\");\n  titleDiv.classList.add(\"menu-title\");\n  menu.appendChild(titleDiv);\n\n  const title = document.createElement(\"h2\");\n  title.textContent = \"Menu\";\n  titleDiv.appendChild(title);\n\n  const textDiv = document.createElement(\"div\");\n  textDiv.classList.add(\"menu-text\");\n\n  for (let i = 1; i <= 5; i++) {\n    const row = document.createElement(\"div\");\n    row.classList.add(\"menu-row\");\n\n    const course = document.createElement(\"h4\");\n    row.appendChild(course);\n\n    const firstProp = document.createElement(\"p\");\n    const secondProp = document.createElement(\"p\");\n    row.appendChild(firstProp);\n    row.appendChild(secondProp);\n\n    if (i == 1) {\n      course.textContent = \"Appetizer\";\n      firstProp.textContent = \"Fruit Salad\";\n      secondProp.textContent = \"Chicken Strips\";\n    } else if (i == 2) {\n      course.textContent = \"First Course\";\n      firstProp.textContent = \"Catfish Peppersoup\";\n      secondProp.textContent = \"Goat Meat Peppersoup\";\n    } else if (i == 3) {\n      course.textContent = \"Main Course\";\n      firstProp.textContent = \"Jollof Rice with Fried Plantain\";\n      secondProp.textContent = \"Egusi Soup with goat meat and fufu\";\n    } else if (i == 4) {\n      course.textContent = \"Dessert\";\n      firstProp.textContent = \"Chocolate Ice Cream\";\n      secondProp.textContent = \"Malted Cheese Ice Cream\";\n    } else if (i == 5) {\n      course.textContent = \"Wine\";\n      firstProp.textContent = \"White: Chardonnay\";\n      secondProp.textContent = \"Red: Pinot Noir\";\n    }\n    textDiv.appendChild(row);\n    menu.appendChild(textDiv);\n  }\n  return main;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu);\n\n\n//# sourceURL=webpack://c/./src/menu.js?");

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