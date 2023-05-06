"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _bs = require("react-icons/bs");
var _io = require("react-icons/io");
var _ri = require("react-icons/ri");
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Navbar = function Navbar() {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "fifth-div"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "icons"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/"
  }, /*#__PURE__*/_react.default.createElement(_ri.RiHomeSmile2Fill, {
    style: {
      fontSize: "32px",
      color: "#199589"
    }
  })), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/chat"
  }, /*#__PURE__*/_react.default.createElement(_bs.BsChatRightText, {
    style: {
      fontSize: "28px",
      color: "#199589"
    }
  })), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/help"
  }, /*#__PURE__*/_react.default.createElement(_io.IoMdHelpCircleOutline, {
    style: {
      fontSize: "34px",
      color: "#199589"
    }
  })))));
};
var _default = Navbar;
exports.default = _default;