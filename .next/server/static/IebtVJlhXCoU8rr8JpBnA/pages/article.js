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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

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

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gEqT");


/***/ }),

/***/ "7LLb":
/***/ (function(module, exports) {



/***/ }),

/***/ "9Oib":
/***/ (function(module, exports) {

module.exports = require("highlight.js");

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

/***/ "AZC8":
/***/ (function(module, exports) {



/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "GsNt":
/***/ (function(module, exports) {

module.exports = require("gitalk");

/***/ }),

/***/ "HWFp":
/***/ (function(module, exports) {

module.exports = require("marked");

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

/***/ "OEda":
/***/ (function(module, exports) {



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

/***/ "UX9d":
/***/ (function(module, exports) {



/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "Xg5F":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getArticle; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vBi9");

var getArticle = function getArticle(data) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[/* GET_ARTICLE_DETAIL */ "a"],
    data: data
  };
};

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

/***/ "ajf4":
/***/ (function(module, exports) {

module.exports = require("viewerjs");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cu1A":
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "gEqT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/regenerator/index.js
var regenerator = __webpack_require__("ln6h");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("O40h");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("0iUn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("sLSF");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("MI3g");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("a7VT");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("Tit0");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./config/base.ts
var base = __webpack_require__("mitQ");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "marked"
var external_marked_ = __webpack_require__("HWFp");
var external_marked_default = /*#__PURE__*/__webpack_require__.n(external_marked_);

// EXTERNAL MODULE: external "highlight.js"
var external_highlight_js_ = __webpack_require__("9Oib");
var external_highlight_js_default = /*#__PURE__*/__webpack_require__.n(external_highlight_js_);

// EXTERNAL MODULE: external "viewerjs"
var external_viewerjs_ = __webpack_require__("ajf4");
var external_viewerjs_default = /*#__PURE__*/__webpack_require__.n(external_viewerjs_);

// EXTERNAL MODULE: external "gitalk"
var external_gitalk_ = __webpack_require__("GsNt");
var external_gitalk_default = /*#__PURE__*/__webpack_require__.n(external_gitalk_);

// EXTERNAL MODULE: ./redux/action/article.ts
var article = __webpack_require__("Xg5F");

// EXTERNAL MODULE: ./redux/actionTypes.ts
var actionTypes = __webpack_require__("vBi9");

// CONCATENATED MODULE: ./redux/action/message.ts

var message_handleMessage = function handleMessage(data) {
  return {
    type: actionTypes["h" /* HANDLE_MESSAGE */],
    data: data
  };
};
// EXTERNAL MODULE: ./redux/action/common.ts
var common = __webpack_require__("jbz7");

// EXTERNAL MODULE: ./util/common.ts
var util_common = __webpack_require__("TJKq");

// EXTERNAL MODULE: ./static/compscss/gitalk.scss
var compscss_gitalk = __webpack_require__("OEda");

// EXTERNAL MODULE: ./static/scss/article.scss
var scss_article = __webpack_require__("q/hR");

// EXTERNAL MODULE: ./static/compscss/highlight.scss
var compscss_highlight = __webpack_require__("AZC8");

// EXTERNAL MODULE: ./static/compscss/articlerender.scss
var articlerender = __webpack_require__("UX9d");

// EXTERNAL MODULE: ./static/compscss/markdown-nav.scss
var markdown_nav = __webpack_require__("ktxb");

// EXTERNAL MODULE: ./static/compscss/viewer.min.scss
var viewer_min = __webpack_require__("7LLb");

// CONCATENATED MODULE: ./pages/article.tsx








var _dec, _class;




















external_highlight_js_default.a.configure({
  tabReplace: '  ',
  classPrefix: 'hljs-',
  languages: ['CSS', 'HTML, XML', 'JavaScript', 'PHP', 'Python', 'Stylus', 'TypeScript', 'Markdown']
});
external_marked_default.a.setOptions({
  highlight: function highlight(code) {
    return external_highlight_js_default.a.highlightAuto(code).value;
  },
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  smartLists: true,
  xhtml: true,
  smartypants: false,
  sanitize: true
});
var article_Article = (_dec = Object(external_react_redux_["connect"])(function (state) {
  return {
    sidebarStatus: state.SidebarStatus,
    author: state.Author.data.name,
    info: state.GetArticle.data && state.GetArticle.data.info ? state.GetArticle.data.info : ''
  };
}, {
  saveSidebarStatus: common["b" /* saveSidebarStatus */],
  getArticle: article["a" /* getArticle */],
  handleMessage: message_handleMessage
}), _dec(_class =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(Article, _Component);

  function Article(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Article);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Article).call(this, props));
    _this.state = {
      docContent: "",
      randomState: new Date().getTime(),
      accessToken: "",
      messageInfo: "",
      messageStatus: false,
      messageType: ""
    };
    return _this;
  }

  Object(createClass["a" /* default */])(Article, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          data = _this$props.data,
          author = _this$props.author,
          link = _this$props.link,
          info = _this$props.info;
      console.log(link);
      return external_react_default.a.createElement("div", {
        id: "article"
      }, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("title", null, info.title, " | \u8C22\u5C0F\u8C22\u306EBlog")), external_react_default.a.createElement("div", {
        id: "article_cont",
        className: "cont md_box",
        dangerouslySetInnerHTML: {
          __html: external_marked_default()(data.info.content.replace('/more', ''))
        }
      }), external_react_default.a.createElement("div", {
        className: "cont copyright_box"
      }, external_react_default.a.createElement("p", null, external_react_default.a.createElement("span", null, "Author: "), external_react_default.a.createElement("a", {
        href: "mailto:undefined"
      }, author)), external_react_default.a.createElement("p", null, external_react_default.a.createElement("span", null, "Link: "), external_react_default.a.createElement("a", {
        href: "".concat(Object(base["d" /* getLocalIp */])(), "/article/").concat(link)
      }, "http://xiesmallxie.cn/article/".concat(link))), external_react_default.a.createElement("p", null, external_react_default.a.createElement("span", null, "Copyright Notice: "), external_react_default.a.createElement("span", null, "All articles in this blog are licensed under ", external_react_default.a.createElement("a", {
        href: "https://creativecommons.org/licenses/by-nc-sa/4.0/"
      }, "CC BY-NC-SA 4.0"), " unless stating additionally."))), external_react_default.a.createElement("div", {
        className: "cont brothers_box"
      }, data && data.brothers && data.brothers.map(function (item, idx) {
        return item && item.link ? external_react_default.a.createElement("a", {
          key: idx,
          href: "/article/" + item.link
        }, item && item.title || '') : external_react_default.a.createElement("div", {
          key: idx
        });
      })), external_react_default.a.createElement("div", {
        id: "gitalk-container",
        className: "cont"
      }));
    } // github登录

    /*
    githubOauth = () => {
      const { link } = this.props;
      console.log(link)
      location.href = `https://github.com/login/oauth/authorize?client_id=${ clientId }&redirect_uri=${ getLocalIp() }/article/${ encodeURIComponent(link) }`
    }
    */

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props2 = this.props,
          data = _this$props2.data,
          getArticle = _this$props2.getArticle,
          saveSidebarStatus = _this$props2.saveSidebarStatus;
      console.log(location.pathname);
      Object(util_common["a" /* handleSidebar */])(document, false, function () {
        saveSidebarStatus(true);
      });
      getArticle(data); // 初始化图片查看器

      new external_viewerjs_default.a(document.getElementById('article_cont'), {
        toolbar: false,
        navbar: false
      }); // 初始化评论区

      var gitalk = new external_gitalk_default.a({
        clientID: base["a" /* clientID */],
        clientSecret: base["b" /* clientSecret */],
        repo: 'MyBlog',
        owner: 'ShuHongXie',
        admin: ['ShuHongXie'],
        id: decodeURI(location.pathname),
        // Ensure uniqueness and length less than 50
        distractionFreeMode: false // Facebook-like distraction free mode

      }); // 创建copy按钮

      Object(util_common["b" /* initCopyBtn */])(document);
      gitalk.render('gitalk-container');
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // 卸载异步操作设置状态
      this.setState = function () {
        return;
      };
    } // 获取accessToken

    /* 
    getAccessToken = async () => {
      const res = await(await fetch(`${ getDomain() }/github/accessToken`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          client_id: clientId,
          client_secret: clientSecret,
          code: this.getQueryString("code"),
        })
      })).json();
      if(res.data.access_token){
        this.setState({
          accessToken: res.data.access_token 
        }, () => {
          localStorage.setItem('accessToken', res.data.access_token );
        })
      } else {
        this.props.handleMessage({ status: true, type: 'error', info: res.data.error_description });
      }
    }
     getQueryString(name)  {
      let reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
      let r = window.location.search.substr(1).match(reg);
      if(r!=null)return  unescape(r[2]); return null;
    }
    */

  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(asyncToGenerator["a" /* default */])(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(context) {
        var link, res, json;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                link = context.query.link;
                console.log(">>>>>>>> ".concat(link, " >>>>>>>>>>>"));
                _context.next = 4;
                return fetch("".concat(Object(base["c" /* getDomain */])(), "/article/").concat(encodeURIComponent(link)));

              case 4:
                res = _context.sent;
                _context.next = 7;
                return res.json();

              case 7:
                json = _context.sent;
                return _context.abrupt("return", {
                  data: json.data,
                  link: link
                });

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Article;
}(external_react_["Component"])) || _class);
/* harmony default export */ var pages_article = __webpack_exports__["default"] = (article_Article);

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

/***/ "ktxb":
/***/ (function(module, exports) {



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

/***/ "q/hR":
/***/ (function(module, exports) {



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