"use strict";

var init = function init() {
  alert(hello("Bob", "Tom"));
};

function hello() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.reduce(function (accu, curr) {
    return "Hello Hello ".concat(accu, " ").concat(curr);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  init();
});
//# sourceMappingURL=main.js.map
