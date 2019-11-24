exports.ids = ["79d6"];
exports.modules = {

/***/ "6N9Q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("jfH8");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("95Bc");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("lvNx");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("EjGv");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("A6+v");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("XEGp");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("SxE1");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("xzqr");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var markdown_navbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("u2le");
/* harmony import */ var markdown_navbar__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(markdown_navbar__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _redux_action_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("jbz7");
/* harmony import */ var _config_base__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("mitQ");
/* harmony import */ var _static_compscss_sidebar_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("Gkvz");
/* harmony import */ var _static_compscss_sidebar_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_static_compscss_sidebar_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _static_compscss_markdown_nav_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("ktxb");
/* harmony import */ var _static_compscss_markdown_nav_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_static_compscss_markdown_nav_scss__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _scissors__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("GVKV");









var _dec, _class;









var Sidebar = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(function (state) {
  return {
    sidebarStatus: state.SidebarStatus,
    articleInfo: state.GetArticle
  };
}, {
  saveSidebarStatus: _redux_action_common__WEBPACK_IMPORTED_MODULE_11__[/* saveSidebarStatus */ "b"]
}), _dec(_class =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Sidebar, _Component);

  function Sidebar(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, Sidebar);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Sidebar).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "toggle", function () {
      _this.setState({
        toggleStatus: !_this.state.toggleStatus
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "scorollPercent", function () {
      _this.setState({
        writePercent: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()((document.documentElement.scrollTop / (document.body.scrollHeight - _this.client().height) * 100).toFixed(2))
      });
    });

    _this.state = {
      toggleStatus: false,
      toggleText: 'Toggle article',
      writePercent: 0,
      localHref: '',
      scissorsStyle: {
        // 剪刀组件的样式
        backgroundColor: '#fae8f6!important'
      }
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Sidebar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          sidebarStatus = _this$props.sidebarStatus,
          data = _this$props.data,
          articleInfo = _this$props.articleInfo;
      var _this$state = this.state,
          scissorsStyle = _this$state.scissorsStyle,
          toggleStatus = _this$state.toggleStatus,
          toggleText = _this$state.toggleText,
          writePercent = _this$state.writePercent,
          localHref = _this$state.localHref;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "sidebar cf ".concat(sidebarStatus ? 'open' : 'close')
      }, localHref.indexOf("/article/") != -1 ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "toggle_box"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "btn",
        onClick: this.toggle
      }, toggleText), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_scissors__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"], {
        styles: scissorsStyle
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "user ".concat(toggleStatus ? 'show' : 'hide', " ")
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: data && data.avatar ? "".concat(Object(_config_base__WEBPACK_IMPORTED_MODULE_12__[/* getDomain */ "c"])()).concat(data.avatar) : '',
        alt: "avator"
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", null, data && data.name), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", null, data && data.title), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: data && data.follow,
        className: "follow"
      }, "Follow Me"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_scissors__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"], {
        styles: scissorsStyle
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "item"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "/archives/1"
      }, "Articles", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", null, data.articleCount)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "/tag"
      }, "Tags", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", null, data.tagCount)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "/categories"
      }, "Categories", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", null, data.categoryCount))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_scissors__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"], {
        styles: scissorsStyle
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "links"
      }, "Links"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "other_links cf"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: data && data.follow
      }, "ShuHongXie"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "catalog ".concat(toggleStatus ? 'hide' : 'show')
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", null, "Catalog"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "progress"
      }, "You've read ", writePercent, "%", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(markdown_navbar__WEBPACK_IMPORTED_MODULE_10___default.a, {
        className: "article-menu",
        source: articleInfo.data && articleInfo.data.info.content || '',
        headingTopOffset: 0
      }))) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "user"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: data && data.avatar ? "".concat(Object(_config_base__WEBPACK_IMPORTED_MODULE_12__[/* getDomain */ "c"])()).concat(data.avatar) : '',
        alt: "avator"
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", null, data && data.name), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", null, data && data.title), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: data && data.follow,
        className: "follow"
      }, "Follow Me"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_scissors__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"], {
        styles: scissorsStyle
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "item"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "/archives/1"
      }, "Articles", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", null, data.articleCount)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "/tag"
      }, "Tags", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", null, data.tagCount)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "/categories"
      }, "Categories", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", null, data.categoryCount))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_scissors__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"], {
        styles: scissorsStyle
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "links"
      }, "Links"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "other_links cf"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: data && data.follow
      }, "ShuHongXie"))));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.setState({
        localHref: window.location.href
      });
      document.addEventListener('scroll', function () {
        _this2.scorollPercent();
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('scroll', this.scorollPercent);
    }
  }, {
    key: "client",
    value: function client() {
      if (window.innerHeight !== undefined) {
        return {
          "width": window.innerWidth,
          "height": window.innerHeight
        };
      } else if (document.compatMode === "CSS1Compat") {
        return {
          "width": document.documentElement.clientWidth,
          "height": document.documentElement.clientHeight
        };
      } else {
        return {
          "width": document.body.clientWidth,
          "height": document.body.clientHeight
        };
      }
    }
  }]);

  return Sidebar;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"])) || _class);
/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "7ZfQ":
/***/ (function(module, exports) {



/***/ }),

/***/ "GVKV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("95Bc");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("lvNx");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("EjGv");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("A6+v");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("SxE1");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _static_compscss_scissors_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("7ZfQ");
/* harmony import */ var _static_compscss_scissors_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_static_compscss_scissors_scss__WEBPACK_IMPORTED_MODULE_6__);





// 剪刀样式组件



var Scissors =
/*#__PURE__*/
function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Scissors, _PureComponent);

  function Scissors(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Scissors);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Scissors).call(this, props));
    _this.state = {};
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Scissors, [{
    key: "render",
    value: function render() {
      var styles = this.props.styles;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "scissors"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: styles ? "iconfont iconhuojian not_white" : "iconfont iconhuojian"
      }));
    }
  }]);

  return Scissors;
}(react__WEBPACK_IMPORTED_MODULE_5__["PureComponent"]);

/* harmony default export */ __webpack_exports__["a"] = (Scissors);

/***/ }),

/***/ "Gkvz":
/***/ (function(module, exports) {



/***/ }),

/***/ "jfH8":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("wa65");

/***/ }),

/***/ "ktxb":
/***/ (function(module, exports) {



/***/ })

};;