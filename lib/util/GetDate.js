"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDate = getDate;
function getDate() {
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var today = new Date();
  var month = months[today.getMonth()];
  var year = today.getFullYear();
  var formattedDate = "".concat(month, ", ").concat(year);
  return formattedDate;
}