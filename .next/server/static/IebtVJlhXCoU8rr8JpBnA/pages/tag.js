module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "0iUn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dG+3");


/***/ }),

/***/ "AT/M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "HTvq":
/***/ (function(module, exports) {



/***/ }),

/***/ "MI3g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("XVgq");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("Z7t5");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(assertThisInitialized["a" /* default */])(self);
}

/***/ }),

/***/ "O40h":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("eVuF");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TJKq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return handleSidebar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return initCopyBtn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return initSnowflake; });
// 根据页面自动展开或者关闭侧边栏效果
var handleSidebar = function handleSidebar(document, sidebarStatus, func) {
  var w = document.body.clientWidth;
  var headerClass = document.querySelector('#header').classList[1];
  var navNode = document.querySelector('#header');

  if (!sidebarStatus) {
    document.body.style.paddingLeft = '300px';

    if (headerClass === 'no_top') {
      navNode.style.width = w - 300 + 'px';
    }
  } else {
    document.body.style.paddingLeft = '0';
    navNode.style.width = '100%';
  }

  typeof func === 'function' && func ? func() : null;
}; // 初始化创建复制按钮

var initCopyBtn = function initCopyBtn(document) {
  var pre = document.querySelectorAll('pre');

  for (var i = 0; i < pre.length; i++) {
    var copyElDiv = document.createElement("div");
    var copyElIcon = document.createElement("i");
    var copyElSpan = document.createElement("span");
    var copyTextNode = document.createTextNode("Copy Success");
    copyElDiv.setAttribute("class", "copy_box");
    copyElDiv.appendChild(copyElIcon);
    copyElSpan.appendChild(copyTextNode);
    copyElDiv.appendChild(copyElSpan);
    pre[i].appendChild(copyElDiv);
  }

  var _loop = function _loop(_i) {
    pre[_i].onclick = function (e) {
      if (e.target.nodeName === "I") {
        pre[_i].lastChild.lastChild.style.opacity = "1";
        var range = document.createRange();
        range.selectNode(pre[_i].firstElementChild); //移除剪切板中内容

        window.getSelection().removeAllRanges(); //添加新的内容到剪切板

        window.getSelection().addRange(range);
        document.execCommand("copy");
        window.getSelection().removeAllRanges();
        setTimeout(function () {
          pre[_i].lastChild.lastChild.style.opacity = "0";
        }, 1000);
      }
    };
  };

  for (var _i = 0; _i < pre.length; _i++) {
    _loop(_i);
  }
}; // 初始化雪花

var initSnowflake = function initSnowflake() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d"); //canvas dimensions

  var W = window.innerWidth;
  var H = window.innerHeight;
  canvas.width = W;
  canvas.height = H; //snowflake particles

  var mp = 25; //max particles

  var particles = [];

  for (var i = 0; i < mp; i++) {
    particles.push({
      x: Math.random() * W,
      //x-coordinate
      y: Math.random() * H,
      //y-coordinate
      r: Math.random() * 4 + 1,
      //radius
      d: Math.random() * mp //density

    });
  } //Lets draw the flakes


  function draw() {
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
    ctx.beginPath();

    for (var _i2 = 0; _i2 < mp; _i2++) {
      var p = particles[_i2];
      ctx.moveTo(p.x, p.y);
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
    }

    ctx.fill();
    update();
  } //Function to move the snowflakes
  //angle will be an ongoing incremental flag. Sin and Cos functions will be applied to it to create vertical and horizontal movements of the flakes


  var angle = 0;

  function update() {
    angle += 0.01;

    for (var _i3 = 0; _i3 < mp; _i3++) {
      var p = particles[_i3]; //Updating X and Y coordinates
      //We will add 1 to the cos function to prevent negative values which will lead flakes to move upwards
      //Every particle has its own density which can be used to make the downward movement different for each flake
      //Lets make it more random by adding in the radius

      p.y += Math.cos(angle + p.d) + 1 + p.r / 2;
      p.x += Math.sin(angle) * 2; //Sending flakes back from the top when it exits
      //Lets make it a bit more organic and let flakes enter from the left and right also.

      if (p.x > W + 5 || p.x < -5 || p.y > H) {
        if (_i3 % 3 > 0) //66.67% of the flakes
          {
            particles[_i3] = {
              x: Math.random() * W,
              y: -10,
              r: p.r,
              d: p.d
            };
          } else {
          //If the flake is exitting from the right
          if (Math.sin(angle) > 0) {
            //Enter from the left
            particles[_i3] = {
              x: -5,
              y: Math.random() * H,
              r: p.r,
              d: p.d
            };
          } else {
            //Enter from the right
            particles[_i3] = {
              x: W + 5,
              y: Math.random() * H,
              r: p.r,
              d: p.d
            };
          }
        }
      }
    }
  } //animation loop


  setInterval(draw, 33);
};

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Tit0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/create.js
var create = __webpack_require__("SqZg");
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js
var set_prototype_of = __webpack_require__("TRZx");
var set_prototype_of_default = /*#__PURE__*/__webpack_require__.n(set_prototype_of);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js

function _setPrototypeOf(o, p) {
  _setPrototypeOf = set_prototype_of_default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = create_default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "a7VT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Bhuq");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TRZx");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cu1A":
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "dG+3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ln6h");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("O40h");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Tit0");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("0bYB");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _config_base__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("mitQ");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _redux_action_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("jbz7");
/* harmony import */ var _util_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("TJKq");
/* harmony import */ var _static_scss_tag_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("HTvq");
/* harmony import */ var _static_scss_tag_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_static_scss_tag_scss__WEBPACK_IMPORTED_MODULE_14__);








var _dec, _class;









var Tags = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(function (state) {
  return {
    sidebarStatus: state.SidebarStatus
  };
}, {
  saveSidebarStatus: _redux_action_common__WEBPACK_IMPORTED_MODULE_12__[/* saveSidebarStatus */ "b"]
}), _dec(_class =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Tags, _Component);

  function Tags(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Tags);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Tags).call(this, props));
    _this.state = {};
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Tags, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var saveSidebarStatus = this.props.saveSidebarStatus;
      Object(_util_common__WEBPACK_IMPORTED_MODULE_13__[/* handleSidebar */ "a"])(document, true, function () {
        saveSidebarStatus(false);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var list = this.props.list;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "tag"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_10___default.a, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("title", null, "Tag | \u8C22\u5C0F\u8C22\u306EBlog")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "cont"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "title"
      }, "Tag - ", list.length), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, list.map(function (item, idx) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          href: "/tag/".concat(item.name, "/1"),
          key: idx
        }, item.name);
      }))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res, json;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch("".concat(Object(_config_base__WEBPACK_IMPORTED_MODULE_9__[/* getDomain */ "c"])(), "/blog/tags"));

              case 2:
                res = _context.sent;
                _context.next = 5;
                return res.json();

              case 5:
                json = _context.sent;
                return _context.abrupt("return", {
                  list: json.data.list
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Tags;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"])) || _class);
/* harmony default export */ __webpack_exports__["default"] = (Tags);

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "jbz7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return handleComp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return saveSidebarStatus; });
/* unused harmony export handleMessage */
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vBi9");

var handleComp = function handleComp(data) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[/* HANDLE_COMP */ "f"],
    data: data
  };
};
var saveSidebarStatus = function saveSidebarStatus(data) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[/* SAVE_SIDEBAR_STATUS */ "l"],
    data: data
  };
};
var handleMessage = function handleMessage(data) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[/* HANDLE_MESSAGE */ "h"],
    data: data
  };
};

/***/ }),

/***/ "ln6h":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cu1A");


/***/ }),

/***/ "mitQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getDomain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getLocalIp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return clientID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return clientSecret; });
var dev = "production" !== 'production';
var getDomain = function getDomain() {
  return dev ? 'http://127.0.0.1:7001' : 'http://120.25.245.87:7001';
};
var getLocalIp = function getLocalIp() {
  return dev ? 'http://127.0.0.1:3000' : 'http://120.25.245.87:3000';
};
var clientID = function () {
  return dev ? 'f07bea6150a039aacefb' : '02eea76367fd18e94932';
}();
var clientSecret = function () {
  return dev ? 'ca03caf4a6d49d32475807aed74e98f37f126d71' : 'd10100dd6c28ca41a6582a15a8b64f790daeebf1';
}(); // http://www.xiesmallxie.cn:1996

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "sLSF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "vBi9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return HANDLE_COMP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return HANDLE_COMP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return SAVE_SIDEBAR_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return SAVE_SIDEBAR_STATUS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_ARTICLE_DETAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_ARTICLE_DETAIL_SUCCESS; });
/* unused harmony export GET_ARTICLE_DETAIL_FAIL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GET_SEARCHLIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return GET_SEARCHLIST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GET_SEARCHLIST_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return SAVE_AUTHOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return SAVE_AUTHOR_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return HANDLE_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return HANDLE_MESSAGE_SUCCESS; });
//  控制所有公用组件
var HANDLE_COMP = 'HANDLE_COMP';
var HANDLE_COMP_SUCCESS = 'HANDLE_COMP_SUCCESS'; // 控制侧边栏

var SAVE_SIDEBAR_STATUS = 'SAVE_SIDEBAR_STATUS';
var SAVE_SIDEBAR_STATUS_SUCCESS = 'SAVE_SIDEBAR_STATUS_SUCCESS'; // 文章详情

var GET_ARTICLE_DETAIL = 'GET_ARTICLE_DETAIL';
var GET_ARTICLE_DETAIL_SUCCESS = 'GET_ARTICLE_DETAIL_SUCCESS';
var GET_ARTICLE_DETAIL_FAIL = 'GET_ARTICLE_DETAIL_FAIL'; // 搜索结果

var GET_SEARCHLIST = 'GET_SEARCHLIST';
var GET_SEARCHLIST_SUCCESS = 'GET_SEARCHLIST_SUCCESS';
var GET_SEARCHLIST_FAIL = 'GET_SEARCHLIST_FAIL'; // 保存个人状态

var SAVE_AUTHOR = 'SAVE_AUTHOR';
var SAVE_AUTHOR_SUCCESS = 'SAVE_AUTHOR_SUCCESS'; // 控制message组件

var HANDLE_MESSAGE = 'HANDLE_MESSAGE';
var HANDLE_MESSAGE_SUCCESS = 'HANDLE_MESSAGE_SUCCESS';

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });