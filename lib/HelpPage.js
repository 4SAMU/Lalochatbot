"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _io = require("react-icons/io");
var _reactRouterDom = require("react-router-dom");
var _Navbar = _interopRequireDefault(require("./Navbar"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var HelpPage = function HelpPage(props) {
  var closeApp = props.closeApp;
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    selected = _useState2[0],
    setSelected = _useState2[1];
  function toggle(i) {
    if (selected === i) {
      setSelected(null);
    } else {
      setSelected(i);
    }
  }
  var data = [{
    question: "How Is Lamu?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,  molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum  numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium  optio, eaque rerum! Provident imilique accusantium nemo autem. Veritatis  obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam  nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid."
  }, {
    question: "What Is Lalo?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,  molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum  numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium  optio, eaque rerum! Provident imilique accusantium nemo autem. Veritatis  obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam  nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid."
  }, {
    question: "Why should I use Lalo?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,  molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum  numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium  optio, eaque rerum! Provident imilique accusantium nemo autem. Veritatis  obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam  nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid."
  }, {
    question: "Now I have Lalo then?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,  molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum  numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium  optio, eaque rerum! Provident imilique accusantium nemo autem. Veritatis  obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam  nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid."
  }];
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "chat-div1"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/"
  }, /*#__PURE__*/_react.default.createElement(_io.IoIosArrowBack, {
    style: {
      color: "#fff",
      fontSize: "35px"
    }
  })), /*#__PURE__*/_react.default.createElement("p", {
    style: {
      fontSize: "20px"
    }
  }, "Frequently Asked Questions"), /*#__PURE__*/_react.default.createElement(_io.IoMdClose, {
    style: {
      color: "#fff",
      fontSize: "35px",
      cursor: "pointer"
    },
    onClick: closeApp
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "accordion-div"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "accordion"
  }, data.map(function (item, i) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "item",
      key: i
    }, " ", /*#__PURE__*/_react.default.createElement("div", {
      className: "title",
      onClick: function onClick() {
        return toggle(i);
      }
    }, /*#__PURE__*/_react.default.createElement("h2", null, item.question), /*#__PURE__*/_react.default.createElement("span", null, selected === i ? "-" : "+")), /*#__PURE__*/_react.default.createElement("div", {
      className: selected === i ? "content show" : "content"
    }, item.answer));
  }))), /*#__PURE__*/_react.default.createElement(_Navbar.default, null));
};
var _default = HelpPage;
exports.default = _default;