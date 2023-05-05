"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _MainPage = _interopRequireDefault(require("./MainPage"));
var _HelpPage = _interopRequireDefault(require("./HelpPage"));
var _ChatPage = _interopRequireDefault(require("./ChatPage"));
var _style = require("./style");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var HomePage = function HomePage(props) {
  var closeApp = props.closeApp;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("style", null, _style.styles), /*#__PURE__*/_react.default.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "homepage"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Routes, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/",
    element: /*#__PURE__*/_react.default.createElement(_MainPage.default, {
      closeApp: closeApp
    })
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/chat",
    element: /*#__PURE__*/_react.default.createElement(_ChatPage.default, {
      closeApp: closeApp
    })
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/help",
    element: /*#__PURE__*/_react.default.createElement(_HelpPage.default, {
      closeApp: closeApp
    })
  })))));
};
var _default = HomePage;
exports.default = _default;