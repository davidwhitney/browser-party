var lib =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/public/client.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/browserparty/Attendee.ts":
/*!**************************************!*\
  !*** ./src/browserparty/Attendee.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Attendee = /** @class */ (function () {\n    function Attendee(name, x, y) {\n        this.name = name;\n        this.x = x;\n        this.y = y;\n        // this.location = { x, y };\n    }\n    return Attendee;\n}());\nexports.Attendee = Attendee;\n\n\n//# sourceURL=webpack://lib/./src/browserparty/Attendee.ts?");

/***/ }),

/***/ "./src/public/LocationServerConnection.ts":
/*!************************************************!*\
  !*** ./src/public/LocationServerConnection.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar LocationServerConnection = /** @class */ (function () {\n    function LocationServerConnection(websocketServer) {\n        this.serverUrl = websocketServer;\n        this.ws = new WebSocket(this.serverUrl);\n        this.ws.onopen = function () {\n            console.log(\"Web socket connected.\");\n        };\n        this.ws.onmessage = function (evt) {\n            var unpacked = JSON.parse(evt.data);\n        };\n        this.ws.onclose = function () {\n            console.log(\"Closed connection\");\n        };\n    }\n    LocationServerConnection.prototype.sendMessage = function () {\n        var payload = {\n        //name: nameTextbox.value,\n        // message: messageTextbox.value\n        };\n        this.ws.send(JSON.stringify(payload));\n    };\n    return LocationServerConnection;\n}());\nexports.LocationServerConnection = LocationServerConnection;\n\n\n//# sourceURL=webpack://lib/./src/public/LocationServerConnection.ts?");

/***/ }),

/***/ "./src/public/client.ts":
/*!******************************!*\
  !*** ./src/public/client.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Attendee_1 = __webpack_require__(/*! ../browserparty/Attendee */ \"./src/browserparty/Attendee.ts\");\nvar LocationServerConnection_1 = __webpack_require__(/*! ./LocationServerConnection */ \"./src/public/LocationServerConnection.ts\");\nvar world = document.getElementById(\"world\");\nvar me = new Attendee_1.Attendee(\"username\", 50, 50);\nvar connection = new LocationServerConnection_1.LocationServerConnection(\"wss://\" + window.location.host);\nvar Controls = /** @class */ (function () {\n    function Controls(targetOfControl) {\n    }\n    Controls.prototype.processInput = function (keyPressed) {\n        var key = keyPressed.key.toLowerCase();\n        var movement = toMove(key);\n        //this.game.world.move(movement);\n    };\n    Controls.prototype.connect = function () {\n        var _this = this;\n        window.addEventListener(\"keypress\", function (args) {\n            _this.processInput(args);\n        }, false);\n    };\n    return Controls;\n}());\nexports.Controls = Controls;\nvar toMove = function (key) {\n    switch (key) {\n        case \"w\": return { deltaX: 0, deltaY: -1 };\n        case \"a\": return { deltaX: -1, deltaY: 0 };\n        case \"s\": return { deltaX: 0, deltaY: 1 };\n        case \"d\": return { deltaX: 1, deltaY: 0 };\n        default: return { deltaX: 0, deltaY: 0 };\n    }\n};\n\n\n//# sourceURL=webpack://lib/./src/public/client.ts?");

/***/ })

/******/ });