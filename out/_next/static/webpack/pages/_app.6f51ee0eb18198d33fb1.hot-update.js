webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: reportWebVitals, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reportWebVitals\", function() { return reportWebVitals; });\n/* harmony import */ var _Users_amitsingh_Desktop_india_for_crypto_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var swiper_swiper_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/swiper.scss */ \"./node_modules/swiper/swiper.scss\");\n/* harmony import */ var swiper_swiper_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_swiper_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var swiper_components_navigation_navigation_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/components/navigation/navigation.scss */ \"./node_modules/swiper/components/navigation/navigation.scss\");\n/* harmony import */ var swiper_components_navigation_navigation_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(swiper_components_navigation_navigation_scss__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\nvar _jsxFileName = \"/Users/amitsingh/Desktop/india-for-crypto/pages/_app.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_amitsingh_Desktop_india_for_crypto_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\nfunction MyApp(_ref) {\n  _s();\n\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var route = window.location.pathname;\n\n    if (route !== '/') {\n      router.push(route);\n    }\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 10\n  }, this);\n}\n\n_s(MyApp, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = MyApp;\nfunction reportWebVitals(_ref2) {\n  var eventCategory = _ref2.eventCategory,\n      eventAction = _ref2.eventAction,\n      eventLabel = _ref2.eventLabel;\n  console.log('eventAction', eventAction);\n\n  if (eventAction) {\n    window.gtag('send', {\n      hitType: 'event',\n      eventCategory: eventCategory,\n      eventAction: eventAction,\n      eventLabel: eventLabel\n    });\n    console.log(window.gtag, 'send', {\n      hitType: 'event',\n      eventCategory: eventCategory,\n      eventAction: eventAction,\n      eventLabel: eventLabel\n    });\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\n\nvar _c;\n\n$RefreshReg$(_c, \"MyApp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9kNTMwIl0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0Iiwicm91dGUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwicHVzaCIsInJlcG9ydFdlYlZpdGFscyIsImV2ZW50Q2F0ZWdvcnkiLCJldmVudEFjdGlvbiIsImV2ZW50TGFiZWwiLCJjb25zb2xlIiwibG9nIiwiZ3RhZyIsImhpdFR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsT0FBeUM7QUFBQTs7QUFBQSxNQUF4QkMsU0FBd0IsUUFBeEJBLFNBQXdCO0FBQUEsTUFBYkMsU0FBYSxRQUFiQSxTQUFhO0FBQ3ZDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsS0FBSyxHQUFHQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLFFBQTlCOztBQUNBLFFBQUlILEtBQUssS0FBSyxHQUFkLEVBQW1CO0FBQ2pCSCxZQUFNLENBQUNPLElBQVAsQ0FBWUosS0FBWjtBQUNEO0FBQ0YsR0FMUSxFQUtOLEVBTE0sQ0FBVDtBQU1BLHNCQUFPLHFFQUFDLFNBQUQsb0JBQWVKLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0Q7O0dBVFFGLEs7VUFDUUkscUQ7OztLQURSSixLO0FBV0YsU0FBU1csZUFBVCxRQUFxRTtBQUFBLE1BQTFDQyxhQUEwQyxTQUExQ0EsYUFBMEM7QUFBQSxNQUEzQkMsV0FBMkIsU0FBM0JBLFdBQTJCO0FBQUEsTUFBZEMsVUFBYyxTQUFkQSxVQUFjO0FBQzFFQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaLEVBQTJCSCxXQUEzQjs7QUFDQSxNQUFJQSxXQUFKLEVBQWlCO0FBQ2ZOLFVBQU0sQ0FBQ1UsSUFBUCxDQUFZLE1BQVosRUFBb0I7QUFDbEJDLGFBQU8sRUFBRSxPQURTO0FBRWxCTixtQkFBYSxFQUFiQSxhQUZrQjtBQUdsQkMsaUJBQVcsRUFBWEEsV0FIa0I7QUFJbEJDLGdCQUFVLEVBQVZBO0FBSmtCLEtBQXBCO0FBTUFDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZVCxNQUFNLENBQUNVLElBQW5CLEVBQXlCLE1BQXpCLEVBQWlDO0FBQy9CQyxhQUFPLEVBQUUsT0FEc0I7QUFFL0JOLG1CQUFhLEVBQWJBLGFBRitCO0FBRy9CQyxpQkFBVyxFQUFYQSxXQUgrQjtBQUkvQkMsZ0JBQVUsRUFBVkE7QUFKK0IsS0FBakM7QUFNRDtBQUNGO0FBRWNkLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgJ3N3aXBlci9zd2lwZXIuc2Nzcyc7XG5pbXBvcnQgJ3N3aXBlci9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5zY3NzJztcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXG4gICAgaWYgKHJvdXRlICE9PSAnLycpIHtcbiAgICAgIHJvdXRlci5wdXNoKHJvdXRlKVxuICAgIH1cbiAgfSwgW10pXG4gIHJldHVybiA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBvcnRXZWJWaXRhbHMoeyBldmVudENhdGVnb3J5LCBldmVudEFjdGlvbiwgZXZlbnRMYWJlbCB9KSB7XG4gIGNvbnNvbGUubG9nKCdldmVudEFjdGlvbicsIGV2ZW50QWN0aW9uKTtcbiAgaWYgKGV2ZW50QWN0aW9uKSB7XG4gICAgd2luZG93Lmd0YWcoJ3NlbmQnLCB7XG4gICAgICBoaXRUeXBlOiAnZXZlbnQnLFxuICAgICAgZXZlbnRDYXRlZ29yeSxcbiAgICAgIGV2ZW50QWN0aW9uLFxuICAgICAgZXZlbnRMYWJlbFxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKHdpbmRvdy5ndGFnLCAnc2VuZCcsIHtcbiAgICAgIGhpdFR5cGU6ICdldmVudCcsXG4gICAgICBldmVudENhdGVnb3J5LFxuICAgICAgZXZlbnRBY3Rpb24sXG4gICAgICBldmVudExhYmVsXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

})