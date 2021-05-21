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

/***/ "./src/server/config/index.js":
/*!************************************!*\
  !*** ./src/server/config/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_0__);\n\nconst envFound = dotenv__WEBPACK_IMPORTED_MODULE_0___default().config();\n\nif (!envFound) {\n  throw new Error(\"Couldn't find .env!\");\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  mysql: {\n    host: process.env.DB_HOST,\n    user: process.env.DB_USER,\n    password: process.env.DB_PASS,\n    database: process.env.DB_SCHEMA\n  },\n  port: parseInt(process.env.PORT)\n});\n\n//# sourceURL=webpack://fullstack_starter/./src/server/config/index.js?");

/***/ }),

/***/ "./src/server/db/models/index.js":
/*!***************************************!*\
  !*** ./src/server/db/models/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql */ \"mysql\");\n/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ \"./src/server/config/index.js\");\n\n\nconst Connection = mysql__WEBPACK_IMPORTED_MODULE_0___default().createPool(_config__WEBPACK_IMPORTED_MODULE_1__.default.mysql);\n\nconst Query = (query, values) => {\n  return new Promise((resolve, reject) => {\n    Connection.query(query, values, (err, results) => {\n      if (err) reject(err);\n      resolve(results);\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Query);\n\n//# sourceURL=webpack://fullstack_starter/./src/server/db/models/index.js?");

/***/ }),

/***/ "./src/server/db/queries/get.js":
/*!**************************************!*\
  !*** ./src/server/db/queries/get.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAll\": () => (/* binding */ getAll),\n/* harmony export */   \"getOne\": () => (/* binding */ getOne),\n/* harmony export */   \"getSalesReport\": () => (/* binding */ getSalesReport)\n/* harmony export */ });\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models */ \"./src/server/db/models/index.js\");\n\n\nconst getAll = async table => {\n  return (0,_models__WEBPACK_IMPORTED_MODULE_0__.default)(\"SELECT * FROM \" + table);\n};\n\nconst getOne = async (table, id) => {\n  const idCol = table.slice(0, table.length - 1);\n  return (0,_models__WEBPACK_IMPORTED_MODULE_0__.default)(`SELECT * FROM ${table} WHERE ${idCol}ID = ?`, [id]);\n};\n\nconst getSalesReport = async () => {\n  return (0,_models__WEBPACK_IMPORTED_MODULE_0__.default)(\"SELECT p.ProductID, p.Name, p.Price, SUM(s.Quantity) as Quantity, SUM(s.Quantity * s.PricePerUnit) as Gross FROM sales as s INNER JOIN products as p ON s.ProductID = p.ProductID GROUP BY p.ProductID ORDER BY Gross DESC;\");\n};\n\n\n\n//# sourceURL=webpack://fullstack_starter/./src/server/db/queries/get.js?");

/***/ }),

/***/ "./src/server/routes/employeesRoutes.js":
/*!**********************************************!*\
  !*** ./src/server/routes/employeesRoutes.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _db_queries_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../db/queries/get */ \"./src/server/db/queries/get.js\");\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.get(\"/:id?\", async (req, res, next) => {\n  try {\n    const {\n      id\n    } = req.params;\n    let data;\n\n    if (id) {\n      [data] = await (0,_db_queries_get__WEBPACK_IMPORTED_MODULE_1__.getOne)(\"employees\", id);\n    } else {\n      data = await (0,_db_queries_get__WEBPACK_IMPORTED_MODULE_1__.getAll)(\"employees\");\n    }\n\n    res.status(200).json(data || {\n      msg: \"No data available\"\n    });\n  } catch (error) {\n    next(error);\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://fullstack_starter/./src/server/routes/employeesRoutes.js?");

/***/ }),

/***/ "./src/server/routes/index.js":
/*!************************************!*\
  !*** ./src/server/routes/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _employeesRoutes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employeesRoutes */ \"./src/server/routes/employeesRoutes.js\");\n/* harmony import */ var _productRoutes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./productRoutes */ \"./src/server/routes/productRoutes.js\");\n/* harmony import */ var _salesRoutes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./salesRoutes */ \"./src/server/routes/salesRoutes.js\");\n\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.get(\"/test\", (req, res, next) => {\n  res.json({\n    msg: \"Hello World\"\n  });\n});\nrouter.use(\"/employees\", _employeesRoutes__WEBPACK_IMPORTED_MODULE_1__.default);\nrouter.use(\"/products\", _productRoutes__WEBPACK_IMPORTED_MODULE_2__.default);\nrouter.use(\"/sales\", _salesRoutes__WEBPACK_IMPORTED_MODULE_3__.default);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://fullstack_starter/./src/server/routes/index.js?");

/***/ }),

/***/ "./src/server/routes/productRoutes.js":
/*!********************************************!*\
  !*** ./src/server/routes/productRoutes.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _db_queries_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../db/queries/get */ \"./src/server/db/queries/get.js\");\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.get(\"/:id?\", async (req, res, next) => {\n  try {\n    const {\n      id\n    } = req.params;\n    let data;\n\n    if (id) {\n      [data] = await (0,_db_queries_get__WEBPACK_IMPORTED_MODULE_1__.getOne)(\"products\", id);\n    } else {\n      data = await (0,_db_queries_get__WEBPACK_IMPORTED_MODULE_1__.getAll)(\"products\");\n    }\n\n    res.status(200).json(data || {\n      msg: \"No data available\"\n    });\n  } catch (error) {\n    next(error);\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://fullstack_starter/./src/server/routes/productRoutes.js?");

/***/ }),

/***/ "./src/server/routes/salesRoutes.js":
/*!******************************************!*\
  !*** ./src/server/routes/salesRoutes.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _db_queries_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../db/queries/get */ \"./src/server/db/queries/get.js\");\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.get(\"/report\", async (req, res, next) => {\n  try {\n    let data = await (0,_db_queries_get__WEBPACK_IMPORTED_MODULE_1__.getSalesReport)();\n    res.status(200).json(data || {\n      msg: \"No data available\"\n    });\n  } catch (error) {\n    next(error);\n  }\n});\nrouter.get(\"/:id?\", async (req, res, next) => {\n  try {\n    const {\n      id\n    } = req.params;\n    let data;\n\n    if (id) {\n      [data] = await (0,_db_queries_get__WEBPACK_IMPORTED_MODULE_1__.getOne)(\"sales\", id);\n    } else {\n      data = await (0,_db_queries_get__WEBPACK_IMPORTED_MODULE_1__.getAll)(\"sales\");\n    }\n\n    res.status(200).json(data || {\n      msg: \"No data available\"\n    });\n  } catch (error) {\n    next(error);\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://fullstack_starter/./src/server/routes/salesRoutes.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes */ \"./src/server/routes/index.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ \"./src/server/config/index.js\");\n\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default().json());\napp.use(morgan__WEBPACK_IMPORTED_MODULE_1___default()(\"dev\"));\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default().static(\"public\"));\napp.use(\"/api/v1\", _routes__WEBPACK_IMPORTED_MODULE_2__.default);\napp.use((req, res, next) => {\n  try {\n    res.status(404).json(\"Not Found\");\n  } catch (error) {\n    next(error);\n  }\n});\napp.use((err, req, res, next) => {\n  console.log(err.message);\n  res.status(500).json({\n    error: err.message,\n    msg: \"Something went wrong :(\"\n  });\n});\napp.listen(_config__WEBPACK_IMPORTED_MODULE_3__.default.port, () => console.log(`Server listening on port ${_config__WEBPACK_IMPORTED_MODULE_3__.default.port}...`));\n\n//# sourceURL=webpack://fullstack_starter/./src/server/server.js?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");;

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("morgan");;

/***/ }),

/***/ "mysql":
/*!************************!*\
  !*** external "mysql" ***!
  \************************/
/***/ ((module) => {

module.exports = require("mysql");;

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/server.js");
/******/ 	
/******/ })()
;