module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"0340": 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../../" + ({}[chunkId]||chunkId) + "." + {"33cf":"1581f16e12fd9237fa68","0e99":"97d4b649a4e45bd8e544","79d6":"2917a347d4dfd2a8a22e","7bb1":"9e25ea6a4a0b28d8fb6f","c4b7":"d910e3477368876689c2"}[chunkId] + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
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

/***/ "/LEF":
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__("tJvc");

var setPrototypeOf = __webpack_require__("w7yo");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "/MDk":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "/T1H":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "0Ryd":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/regenerator/index.js
var regenerator = __webpack_require__("zdv8");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/objectSpread.js
var objectSpread = __webpack_require__("sHjt");

// EXTERNAL MODULE: ./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("arjh");

// EXTERNAL MODULE: ./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("95Bc");

// EXTERNAL MODULE: ./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("lvNx");

// EXTERNAL MODULE: ./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("EjGv");

// EXTERNAL MODULE: ./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("A6+v");

// EXTERNAL MODULE: ./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("SxE1");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/_next@8.1.0@next/app.js
var app = __webpack_require__("BE65");
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./config/base.ts
var base = __webpack_require__("mitQ");

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "redux-saga"
var external_redux_saga_ = __webpack_require__("1fKG");
var external_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_redux_saga_);

// CONCATENATED MODULE: ./redux/config.ts


var middlewares = [];
var sagaMiddleware = external_redux_saga_default()();
middlewares.push(sagaMiddleware);
/* global __DEV__  */
// middlewares.push(logger);

var createStoreWithMiddleware = external_redux_["applyMiddleware"].apply(void 0, middlewares)(external_redux_["createStore"]);
/**
 * 
 * @param {*} reducers 
 * @param {*} rootSaga 
 * @param {*} [initialState] 初始store值 可选
 */

var config_configureStore = function configureStore(reducers, rootSaga, initialState) {
  var rootReducer = Object(external_redux_["combineReducers"])(reducers);
  var store = createStoreWithMiddleware(rootReducer, initialState);
  sagaMiddleware.run(rootSaga);

  store.close = function () {
    return store.dispatch(external_redux_saga_["END"]);
  };

  return store;
};

/* harmony default export */ var config = (config_configureStore);
// EXTERNAL MODULE: ./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/core-js/object/assign.js
var object_assign = __webpack_require__("0Ryd");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// EXTERNAL MODULE: ./redux/actionTypes.ts
var actionTypes = __webpack_require__("vBi9");

// CONCATENATED MODULE: ./redux/reducers/common.ts


var handle = {
  search: false,
  // 控制搜索框
  black: false // 控制黑色背景

};

var common_HandleComp = function HandleComp() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : handle;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actionTypes["f" /* HANDLE_COMP */]:
      return assign_default()({}, state, action.data);

    case actionTypes["g" /* HANDLE_COMP_SUCCESS */]:
      return assign_default()({}, state, action.data);

    default:
      return state;
  }
};

var common_SidebarStatus = function SidebarStatus() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actionTypes["l" /* SAVE_SIDEBAR_STATUS */]:
      return action.data;

    case actionTypes["m" /* SAVE_SIDEBAR_STATUS_SUCCESS */]:
      return action.data;

    default:
      return state;
  }
};


// EXTERNAL MODULE: ./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/core-js/date/now.js
var now = __webpack_require__("TafM");
var now_default = /*#__PURE__*/__webpack_require__.n(now);

// CONCATENATED MODULE: ./redux/reducers/article.ts



var article = {
  isFetching: false,
  code: 0,
  msg: null,
  data: '',
  dateTime: null
};

var article_GetArticle = function GetArticle() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : article;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actionTypes["a" /* GET_ARTICLE_DETAIL */]:
      return Object(objectSpread["a" /* default */])({}, state, {
        isFetching: true
      });

    case actionTypes["b" /* GET_ARTICLE_DETAIL_SUCCESS */]:
      return Object(objectSpread["a" /* default */])({}, state, {
        msg: '成功',
        data: action.data,
        isFetching: false,
        dateTime: now_default()()
      });

    default:
      return state;
  }
};


// CONCATENATED MODULE: ./redux/reducers/searchlist.ts



var searchList = {
  isFetching: false,
  code: 0,
  msg: null,
  data: null,
  dateTime: null
};

var searchlist_SearchList = function SearchList() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : searchList;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actionTypes["c" /* GET_SEARCHLIST */]:
      return Object(objectSpread["a" /* default */])({}, state, {
        isFetching: true
      });

    case actionTypes["e" /* GET_SEARCHLIST_SUCCESS */]:
      return Object(objectSpread["a" /* default */])({}, state, {
        msg: '成功',
        data: action.data,
        isFetching: false,
        dateTime: now_default()()
      });

    case actionTypes["d" /* GET_SEARCHLIST_FAIL */]:
      return Object(objectSpread["a" /* default */])({}, state, {
        msg: '失败',
        data: null,
        isFetching: false,
        dateTime: now_default()()
      });

    default:
      return state;
  }
};


// CONCATENATED MODULE: ./redux/reducers/author.ts



var author = {
  isFetching: false,
  code: 0,
  msg: null,
  data: false,
  dateTime: null
};

var author_Author = function Author() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : author;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actionTypes["j" /* SAVE_AUTHOR */]:
      return Object(objectSpread["a" /* default */])({}, state, {
        isFetching: true
      });

    case actionTypes["k" /* SAVE_AUTHOR_SUCCESS */]:
      return Object(objectSpread["a" /* default */])({}, state, {
        msg: '成功',
        data: action.data,
        isFetching: false,
        dateTime: now_default()()
      });

    default:
      return state;
  }
};


// CONCATENATED MODULE: ./redux/reducers/message.ts



var messageStatus = {
  isFetching: false,
  code: 0,
  msg: null,
  data: null,
  dateTime: null
};

var message_MessageStatus = function MessageStatus() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : messageStatus;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actionTypes["h" /* HANDLE_MESSAGE */]:
      return Object(objectSpread["a" /* default */])({}, state, {
        isFetching: true
      });

    case actionTypes["i" /* HANDLE_MESSAGE_SUCCESS */]:
      return Object(objectSpread["a" /* default */])({}, state, {
        msg: '成功',
        data: action.data,
        isFetching: false,
        dateTime: now_default()()
      });

    default:
      return state;
  }
};


// CONCATENATED MODULE: ./redux/reducers/index.ts





/* harmony default export */ var redux_reducers = ({
  HandleComp: common_HandleComp,
  SidebarStatus: common_SidebarStatus,
  GetArticle: article_GetArticle,
  SearchList: searchlist_SearchList,
  Author: author_Author,
  MessageStatus: message_MessageStatus
});
// EXTERNAL MODULE: ./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__("xhta");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// CONCATENATED MODULE: ./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (is_array_default()(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}
// EXTERNAL MODULE: ./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/core-js/array/from.js
var from = __webpack_require__("Bxut");
var from_default = /*#__PURE__*/__webpack_require__.n(from);

// EXTERNAL MODULE: ./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/core-js/is-iterable.js
var is_iterable = __webpack_require__("Xq6O");
var is_iterable_default = /*#__PURE__*/__webpack_require__.n(is_iterable);

// CONCATENATED MODULE: ./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/iterableToArray.js


function _iterableToArray(iter) {
  if (is_iterable_default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return from_default()(iter);
}
// CONCATENATED MODULE: ./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/toConsumableArray.js



function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__("RmXt");

// CONCATENATED MODULE: ./redux/saga/common.ts


var _marked =
/*#__PURE__*/
regenerator_default.a.mark(handleComp),
    _marked2 =
/*#__PURE__*/
regenerator_default.a.mark(sidebarStatus);




function handleComp(_ref) {
  var data;
  return regenerator_default.a.wrap(function handleComp$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          data = _ref.data;
          _context.next = 3;
          return Object(effects_["put"])({
            type: actionTypes["g" /* HANDLE_COMP_SUCCESS */]
          });

        case 3:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

function sidebarStatus(_ref2) {
  var data;
  return regenerator_default.a.wrap(function sidebarStatus$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          data = _ref2.data;
          _context2.next = 3;
          return Object(effects_["put"])({
            type: actionTypes["m" /* SAVE_SIDEBAR_STATUS_SUCCESS */],
            data: data
          });

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}

/* harmony default export */ var common = ([Object(effects_["takeLatest"])(actionTypes["f" /* HANDLE_COMP */], handleComp), Object(effects_["takeLatest"])(actionTypes["l" /* SAVE_SIDEBAR_STATUS */], sidebarStatus)]);
// CONCATENATED MODULE: ./redux/saga/article.ts


var article_marked =
/*#__PURE__*/
regenerator_default.a.mark(getArticle);




function getArticle(_ref) {
  var data;
  return regenerator_default.a.wrap(function getArticle$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          data = _ref.data;
          _context.next = 3;
          return Object(effects_["put"])({
            type: actionTypes["b" /* GET_ARTICLE_DETAIL_SUCCESS */],
            data: data
          });

        case 3:
        case "end":
          return _context.stop();
      }
    }
  }, article_marked);
}

/* harmony default export */ var saga_article = ([Object(effects_["takeLatest"])(actionTypes["a" /* GET_ARTICLE_DETAIL */], getArticle)]);
// EXTERNAL MODULE: ./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/core-js/json/stringify.js
var stringify = __webpack_require__("E5AR");
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external_isomorphic_unfetch_ = __webpack_require__("0bYB");
var external_isomorphic_unfetch_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_unfetch_);

// CONCATENATED MODULE: ./redux/saga/searchlist.ts



var searchlist_marked =
/*#__PURE__*/
regenerator_default.a.mark(getSearchList);






function getSearchList(data) {
  var res, json;
  return regenerator_default.a.wrap(function getSearchList$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return external_isomorphic_unfetch_default()("".concat(Object(base["c" /* getDomain */])(), "/search"), {
            method: 'POST',
            body: stringify_default()({
              key: data.data.key,
              pageNum: data.data.pageNum
            }),
            credentials: 'same-origin',
            headers: new Headers({
              'Content-Type': 'application/json'
            })
          });

        case 3:
          res = _context.sent;
          _context.next = 6;
          return res.json();

        case 6:
          json = _context.sent;

          if (!(json.retCode === 200)) {
            _context.next = 12;
            break;
          }

          _context.next = 10;
          return Object(effects_["put"])({
            type: actionTypes["e" /* GET_SEARCHLIST_SUCCESS */],
            data: json.data
          });

        case 10:
          _context.next = 14;
          break;

        case 12:
          _context.next = 14;
          return Object(effects_["put"])({
            type: actionTypes["d" /* GET_SEARCHLIST_FAIL */],
            data: json.message
          });

        case 14:
          _context.next = 20;
          break;

        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](0);
          _context.next = 20;
          return Object(effects_["put"])({
            type: actionTypes["d" /* GET_SEARCHLIST_FAIL */],
            data: _context.t0.message
          });

        case 20:
        case "end":
          return _context.stop();
      }
    }
  }, searchlist_marked, null, [[0, 16]]);
}

/* harmony default export */ var searchlist = ([Object(effects_["takeLatest"])(actionTypes["c" /* GET_SEARCHLIST */], getSearchList)]);
// CONCATENATED MODULE: ./redux/saga/author.ts


var author_marked =
/*#__PURE__*/
regenerator_default.a.mark(saveAuthor);




function saveAuthor(_ref) {
  var data;
  return regenerator_default.a.wrap(function saveAuthor$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          data = _ref.data;
          _context.next = 3;
          return Object(effects_["put"])({
            type: actionTypes["k" /* SAVE_AUTHOR_SUCCESS */],
            data: data
          });

        case 3:
        case "end":
          return _context.stop();
      }
    }
  }, author_marked);
}

/* harmony default export */ var saga_author = ([Object(effects_["takeLatest"])(actionTypes["j" /* SAVE_AUTHOR */], saveAuthor)]);
// CONCATENATED MODULE: ./redux/saga/message.ts




var message_marked =
/*#__PURE__*/
regenerator_default.a.mark(handleMessage);




function handleMessage(_ref) {
  var data, finalData;
  return regenerator_default.a.wrap(function handleMessage$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          data = _ref.data;
          _context.next = 3;
          return Object(effects_["put"])({
            type: actionTypes["i" /* HANDLE_MESSAGE_SUCCESS */],
            data: data
          });

        case 3:
          _context.next = 5;
          return Object(effects_["delay"])(3000);

        case 5:
          finalData = JSON.parse(stringify_default()(assign_default()(data, {
            status: false
          })));
          _context.next = 8;
          return Object(effects_["put"])({
            type: actionTypes["i" /* HANDLE_MESSAGE_SUCCESS */],
            data: finalData
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, message_marked);
}

/* harmony default export */ var message = ([Object(effects_["takeLatest"])(actionTypes["h" /* HANDLE_MESSAGE */], handleMessage)]);
// CONCATENATED MODULE: ./redux/saga/index.ts



var saga_marked =
/*#__PURE__*/
regenerator_default.a.mark(saga_rootSaga);






 // import loanListDetail from './loanListDetail';
// import loanCard from './loanCard';

function saga_rootSaga() {
  return regenerator_default.a.wrap(function rootSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(effects_["all"])([].concat(_toConsumableArray(common), _toConsumableArray(saga_article), _toConsumableArray(searchlist), _toConsumableArray(saga_author), _toConsumableArray(message)));

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, saga_marked);
}
// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__("/T1H");
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);

// CONCATENATED MODULE: ./pages/_app.js

















var LayoutComponent = dynamic_default()(function () {
  return __webpack_require__.e(/* import() */ "33cf").then(__webpack_require__.bind(null, "5M6V"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/("5M6V")];
    },
    modules: ["../components/layout"]
  }
});
var _app_store = config(redux_reducers, saga_rootSaga);

var _app_MyApp =
/*#__PURE__*/
function (_App) {
  Object(inherits["a" /* default */])(MyApp, _App);

  function MyApp() {
    Object(classCallCheck["a" /* default */])(this, MyApp);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(MyApp).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(MyApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          data = _this$props.data;
      return external_react_default.a.createElement(app["Container"], null, external_react_default.a.createElement(external_react_redux_["Provider"], {
        store: _app_store
      }, pageProps.statusCode ? external_react_default.a.createElement(Component, pageProps) : external_react_default.a.createElement(LayoutComponent, {
        data: data
      }, external_react_default.a.createElement(Component, pageProps))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(asyncToGenerator["a" /* default */])(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(_ref) {
        var Component, router, ctx, pageProps, res, visitCount;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, router = _ref.router, ctx = _ref.ctx;
                pageProps = {};

                if (!Component.getInitialProps) {
                  _context.next = 6;
                  break;
                }

                _context.next = 5;
                return Component.getInitialProps(ctx);

              case 5:
                pageProps = _context.sent;

              case 6:
                _context.next = 8;
                return fetch("".concat(Object(base["c" /* getDomain */])(), "/common"));

              case 8:
                _context.next = 10;
                return _context.sent.json();

              case 10:
                res = _context.sent;
                _context.next = 13;
                return fetch("".concat(Object(base["c" /* getDomain */])(), "/visitCount"));

              case 13:
                _context.next = 15;
                return _context.sent.json();

              case 15:
                visitCount = _context.sent;
                return _context.abrupt("return", {
                  pageProps: pageProps,
                  data: Object(objectSpread["a" /* default */])({}, res.data, res.data.info, {
                    visitCount: visitCount.data.count || 0,
                    uvCount: visitCount.data.uvCount || 0,
                    intro: "",
                    avatar: res.data.info.avatar
                  })
                });

              case 17:
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

  return MyApp;
}(app_default.a);

/* harmony default export */ var _app = __webpack_exports__["default"] = (_app_MyApp);

/***/ }),

/***/ "1fKG":
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5OCQ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("Ex/Z");

var _promise = _interopRequireDefault(__webpack_require__("RqZN"));

var _assign = _interopRequireDefault(__webpack_require__("0Ryd"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("MsaW"));

var _createClass2 = _interopRequireDefault(__webpack_require__("eEey"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("hgIY"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("s6jW"));

var _inherits2 = _interopRequireDefault(__webpack_require__("/LEF"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importStar(__webpack_require__("cDcd"));

var prop_types_1 = __importDefault(__webpack_require__("rf6O"));

var utils_1 = __webpack_require__("p8BD");

var router_1 = __webpack_require__("4Q3z");

var App =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(App, _react_1$Component);

  function App() {
    (0, _classCallCheck2.default)(this, App);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(App).apply(this, arguments));
  }

  (0, _createClass2.default)(App, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        router: router_1.makePublicRouterInstance(this.props.router)
      };
    } // Kept here for backwards compatibility.
    // When someone ended App they could call `super.componentDidCatch`. This is now deprecated.

  }, {
    key: "componentDidCatch",
    value: function componentDidCatch(err) {
      throw err;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          router = _this$props.router,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      var url = createUrl(router);
      return react_1.default.createElement(Container, null, react_1.default.createElement(Component, (0, _assign.default)({}, pageProps, {
        url: url
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function (_ref) {
      var Component = _ref.Component,
          router = _ref.router,
          ctx = _ref.ctx;

      try {
        return _promise.default.resolve(utils_1.loadGetInitialProps(Component, ctx)).then(function (pageProps) {
          return {
            pageProps: pageProps
          };
        });
      } catch (e) {
        return _promise.default.reject(e);
      }
    }
  }]);
  return App;
}(react_1.Component);

App.childContextTypes = {
  router: prop_types_1.default.object
};
exports.default = App;

var Container =
/*#__PURE__*/
function (_react_1$Component2) {
  (0, _inherits2.default)(Container, _react_1$Component2);

  function Container() {
    (0, _classCallCheck2.default)(this, Container);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Container).apply(this, arguments));
  }

  (0, _createClass2.default)(Container, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.scrollToHash();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.scrollToHash();
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash() {
      var hash = window.location.hash;
      hash = hash ? hash.substring(1) : false;
      if (!hash) return;
      var el = document.getElementById(hash);
      if (!el) return; // If we call scrollIntoView() in here without a setTimeout
      // it won't scroll properly.

      setTimeout(function () {
        return el.scrollIntoView();
      }, 0);
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);
  return Container;
}(react_1.Component);

exports.Container = Container;
var warnUrl = utils_1.execOnce(function () {
  if (false) {}
});

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var pathname = router.pathname,
      asPath = router.asPath,
      query = router.query;
  return {
    get query() {
      warnUrl();
      return query;
    },

    get pathname() {
      warnUrl();
      return pathname;
    },

    get asPath() {
      warnUrl();
      return asPath;
    },

    back: function back() {
      warnUrl();
      router.back();
    },
    push: function push(url, as) {
      warnUrl();
      return router.push(url, as);
    },
    pushTo: function pushTo(href, as) {
      warnUrl();
      var pushRoute = as ? href : null;
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: function replace(url, as) {
      warnUrl();
      return router.replace(url, as);
    },
    replaceTo: function replaceTo(href, as) {
      warnUrl();
      var replaceRoute = as ? href : null;
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

exports.createUrl = createUrl;

/***/ }),

/***/ "7avG":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "95Bc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "A6+v":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("s6X1");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("BOvV");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "BE65":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("5OCQ")


/***/ }),

/***/ "BOvV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "Bxut":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("r7XW");

/***/ }),

/***/ "CSOn":
/***/ (function(module, exports) {

module.exports = require("react-transition-group");

/***/ }),

/***/ "DR9k":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "E5AR":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "EjGv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("/MDk");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("Q50Z");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/typeof.js



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
// EXTERNAL MODULE: ./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("XEGp");

// CONCATENATED MODULE: ./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(assertThisInitialized["a" /* default */])(self);
}

/***/ }),

/***/ "Ex/Z":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "Kjtv":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/is-iterable");

/***/ }),

/***/ "MsaW":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "Q50Z":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "Q9bg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "R2Q7":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "RmXt":
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "RqZN":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "SxE1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/core-js/object/create.js
var create = __webpack_require__("tJvc");
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// EXTERNAL MODULE: ./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/core-js/object/set-prototype-of.js
var set_prototype_of = __webpack_require__("BOvV");
var set_prototype_of_default = /*#__PURE__*/__webpack_require__.n(set_prototype_of);

// CONCATENATED MODULE: ./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js

function _setPrototypeOf(o, p) {
  _setPrototypeOf = set_prototype_of_default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/inherits.js
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

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "TafM":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("y6vh");

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XEGp":
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

/***/ "Xq6O":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Kjtv");

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "arjh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("RqZN");
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

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cu1A":
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "dYDJ":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("/MDk");

var _Symbol = __webpack_require__("Q50Z");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "eEey":
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__("Q9bg");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hEnD":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "hgIY":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("dYDJ");

var assertThisInitialized = __webpack_require__("DR9k");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "lvNx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Q9bg");
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

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "r7XW":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "s6X1":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "s6jW":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__("s6X1");

var _Object$setPrototypeOf = __webpack_require__("BOvV");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "sHjt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7avG");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("hEnD");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("vAB4");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("xzqr");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "tJvc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "u2le":
/***/ (function(module, exports) {

module.exports = require("markdown-navbar");

/***/ }),

/***/ "vAB4":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

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

/***/ "w7yo":
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__("BOvV");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "wa65":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "xhta":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("R2Q7");

/***/ }),

/***/ "xzqr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Q9bg");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "y6vh":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/date/now");

/***/ }),

/***/ "zdv8":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cu1A");


/***/ })

/******/ });