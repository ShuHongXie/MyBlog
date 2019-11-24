exports.ids = ["33cf"];
exports.modules = {

/***/ "/Z+G":
/***/ (function(module, exports) {



/***/ }),

/***/ "5M6V":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("95Bc");

// EXTERNAL MODULE: ./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("lvNx");

// EXTERNAL MODULE: ./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("EjGv");

// EXTERNAL MODULE: ./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("A6+v");

// EXTERNAL MODULE: ./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("XEGp");

// EXTERNAL MODULE: ./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("SxE1");

// EXTERNAL MODULE: ./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("xzqr");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./redux/action/common.ts
var common = __webpack_require__("jbz7");

// EXTERNAL MODULE: ./static/compscss/header.scss
var header = __webpack_require__("Rk4p");

// EXTERNAL MODULE: ./static/scss/common.scss
var scss_common = __webpack_require__("/Z+G");

// CONCATENATED MODULE: ./components/header.tsx








var _dec, _class;






var // 头部组件
header_Header = (_dec = Object(external_react_redux_["connect"])(function (state) {
  return {
    sidebarStatus: state.SidebarStatus
  };
}, {
  handleComp: common["a" /* handleComp */]
}), _dec(_class =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(Header, _Component);

  function Header(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Header);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Header).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "search", function (idx, e) {
      if (!idx) {
        if (e.preventDefault) {
          e.preventDefault();
        }

        _this.props.handleComp({
          search: true,
          black: true
        });
      }
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleNav", function () {
      _this.setState({
        showNav: !_this.state.showNav
      });
    });

    _this.state = {
      showNav: false,
      inTop: true,
      navList: [{
        title: 'Search ',
        icon: 'iconsousuo2',
        url: ''
      }, {
        title: 'About ',
        icon: '',
        url: '/about'
      }, {
        title: 'Archives ',
        icon: '',
        url: '/archives/1'
      }, {
        title: 'Tag ',
        icon: '',
        url: '/tag'
      }, {
        title: 'Categories ',
        icon: '',
        url: '/categories'
      }]
    };
    return _this;
  }

  Object(createClass["a" /* default */])(Header, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          navList = _this$state.navList,
          showNav = _this$state.showNav,
          inTop = _this$state.inTop;
      return external_react_default.a.createElement("header", {
        id: "header",
        className: inTop ? 'cf top' : 'cf no_top'
      }, external_react_default.a.createElement("a", {
        className: "header_title",
        href: "/"
      }, "\u8C22\u5C0F\u8C22\u306EBlog"), external_react_default.a.createElement("div", {
        className: showNav ? 'nav show' : 'nav noshow'
      }, navList.map(function (item, index) {
        return external_react_default.a.createElement("a", {
          href: item.url,
          key: item.title,
          onClick: function onClick(e) {
            return _this2.search(index, e);
          }
        }, external_react_default.a.createElement("i", {
          className: "iconfont ".concat(item.icon)
        }), external_react_default.a.createElement("span", null, item.title));
      })), external_react_default.a.createElement("i", {
        "data-current": "1",
        onClick: this.handleNav,
        className: "iconfont iconlist list_icon"
      }));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      var _this = this;

      document.body.addEventListener('click', function (ev) {
        if (!ev.target.dataset.current) {
          _this.setState({
            showNav: false
          });
        }
      }, true); // 监测滚动条

      window.addEventListener("scroll", function () {
        var scrollH = document.documentElement.scrollTop || document.body.scrollTop;
        var navNode = document.querySelector('#header');
        var sidebarStatus = _this3.props.sidebarStatus;

        if (scrollH > 0) {
          _this3.setState({
            inTop: false
          });

          if (sidebarStatus && document.body.clientWidth > 768) {
            navNode.style.maxWidth = 'calc( 100% - 300px )'; // navNode.style.width = w - 300 + 'px';
          } else {
            navNode.style.width = '100%';
          }
        } else {
          navNode.style.width = '100%';
          navNode.style.maxWidth = '100%';

          _this3.setState({
            inTop: true
          });
        }
      });
    }
  }]);

  return Header;
}(external_react_["Component"])) || _class);
/* harmony default export */ var components_header = (header_Header);
// EXTERNAL MODULE: ./static/compscss/footer.scss
var footer = __webpack_require__("ESiY");

// CONCATENATED MODULE: ./components/footer.tsx








var footer_Footer =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(Footer, _Component);

  function Footer(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Footer);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Footer).call(this, props));
    _this.state = {
      hanlde: false
    };
    return _this;
  }

  Object(createClass["a" /* default */])(Footer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          pvCount = _this$props.pvCount,
          uvCount = _this$props.uvCount;
      return external_react_default.a.createElement("footer", null, external_react_default.a.createElement("div", null, "\xA92019 By \u8C22\u5C0F\u8C22"), external_react_default.a.createElement("div", null, external_react_default.a.createElement("i", {
        className: "iconfont iconSeedling"
      }), external_react_default.a.createElement("span", null, pvCount), " |", external_react_default.a.createElement("i", {
        className: "iconfont iconEnergy"
      }), external_react_default.a.createElement("span", null, uvCount)));
    }
  }]);

  return Footer;
}(external_react_["Component"]);

/* harmony default export */ var components_footer = (footer_Footer);
// EXTERNAL MODULE: ./redux/action/article.ts
var article = __webpack_require__("Xg5F");

// EXTERNAL MODULE: ./static/compscss/nav.scss
var nav = __webpack_require__("GZnU");

// CONCATENATED MODULE: ./components/nav.tsx






var nav_dec, nav_class;






var nav_Nav = (nav_dec = Object(external_react_redux_["connect"])(function (state) {
  return {
    info: state.GetArticle.data && state.GetArticle.data.info ? state.GetArticle.data.info : '',
    category: state.GetArticle.data.category || []
  };
}, {
  getArticle: article["a" /* getArticle */],
  handleComp: common["a" /* handleComp */]
}), nav_dec(nav_class =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(Nav, _Component);

  function Nav(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Nav);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Nav).call(this, props));
    _this.state = {
      hanlde: false
    };
    return _this;
  }

  Object(createClass["a" /* default */])(Nav, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          info = _this$props.info,
          category = _this$props.category;
      return external_react_default.a.createElement("nav", {
        id: "banner"
      }, !info.content ? external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("h1", null, "\u8C22\u5C0F\u8C22\u306EBlog"), external_react_default.a.createElement("h3", null, "My dream is to be a music producer."), external_react_default.a.createElement("div", {
        className: "link_box"
      }, external_react_default.a.createElement("a", {
        href: "https://github.com/ShuHongXie"
      }, external_react_default.a.createElement("i", {
        className: "iconfont icontwitter"
      })), external_react_default.a.createElement("a", {
        href: "https://github.com/ShuHongXie"
      }, external_react_default.a.createElement("i", {
        className: "iconfont icongithub"
      })), external_react_default.a.createElement("a", {
        onClick: function onClick() {
          return _this2.props.handleComp({
            search: true,
            black: true
          });
        },
        href: "javascript:;"
      }, external_react_default.a.createElement("i", {
        className: "iconfont iconsearch"
      })))) : external_react_default.a.createElement("div", {
        className: "article_box"
      }, external_react_default.a.createElement("h1", null, info.title), external_react_default.a.createElement("div", null, external_react_default.a.createElement("span", {
        className: "time"
      }, info.create_time), " | ", category.map(function (item, index) {
        return external_react_default.a.createElement("a", {
          key: item.id,
          href: "/categories/".concat(item.name, "/1"),
          className: "category"
        }, item.name);
      })), external_react_default.a.createElement("div", null, external_react_default.a.createElement("span", null, "Word count: ", info.content.length), " | ", external_react_default.a.createElement("span", null, "Reading time: ", Math.floor(info.content.length / 700), " min"))));
    }
  }]);

  return Nav;
}(external_react_["Component"])) || nav_class);
/* harmony default export */ var components_nav = (nav_Nav);
// EXTERNAL MODULE: ./redux/actionTypes.ts
var actionTypes = __webpack_require__("vBi9");

// CONCATENATED MODULE: ./redux/action/author.ts

var author_saveAuthor = function saveAuthor(data) {
  return {
    type: actionTypes["j" /* SAVE_AUTHOR */],
    data: data
  };
};
// EXTERNAL MODULE: external "react-transition-group"
var external_react_transition_group_ = __webpack_require__("CSOn");

// EXTERNAL MODULE: ./util/common.ts
var util_common = __webpack_require__("TJKq");

// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__("/T1H");
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);

// EXTERNAL MODULE: ./static/scss/transition.scss
var transition = __webpack_require__("kB6e");

// EXTERNAL MODULE: ./static/compscss/layout.scss
var layout = __webpack_require__("CmYH");

// CONCATENATED MODULE: ./components/layout.tsx








var layout_dec, layout_class;









 // import { initMouseClick } from '@/util/click'


var Search = dynamic_default()(function () {
  return __webpack_require__.e(/* import() */ "0e99").then(__webpack_require__.bind(null, "nm5v"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/("nm5v")];
    },
    modules: ["./search"]
  }
});
var Black = dynamic_default()(function () {
  return __webpack_require__.e(/* import() */ "c4b7").then(__webpack_require__.bind(null, "LfW2"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/("LfW2")];
    },
    modules: ["./Black"]
  }
});
var Sidebar = dynamic_default()(function () {
  return __webpack_require__.e(/* import() */ "79d6").then(__webpack_require__.bind(null, "6N9Q"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/("6N9Q")];
    },
    modules: ["./Sidebar"]
  }
});
var Message = dynamic_default()(function () {
  return __webpack_require__.e(/* import() */ "7bb1").then(__webpack_require__.bind(null, "giDD"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/("giDD")];
    },
    modules: ["./Message"]
  }
});


var layout_Layout = (layout_dec = Object(external_react_redux_["connect"])(function (state) {
  return {
    showSearch: state.HandleComp.search,
    showBlack: state.HandleComp.black,
    sidebarStatus: state.SidebarStatus,
    messageInfo: state.MessageStatus.data && state.MessageStatus.data.info,
    messageStatus: state.MessageStatus.data && state.MessageStatus.data.status,
    messageType: state.MessageStatus.data && state.MessageStatus.data.type
  };
}, {
  saveSidebarStatus: common["b" /* saveSidebarStatus */],
  saveAuthor: author_saveAuthor
}), layout_dec(layout_class =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(Layout, _Component);

  function Layout(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Layout);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Layout).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handle", function (name) {
      return name;
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleSidebar", function () {
      var _this$props = _this.props,
          sidebarStatus = _this$props.sidebarStatus,
          saveSidebarStatus = _this$props.saveSidebarStatus;
      Object(util_common["a" /* handleSidebar */])(document, sidebarStatus, function () {
        if (!sidebarStatus) {
          saveSidebarStatus(true);
        } else {
          saveSidebarStatus(false);
          var navNode = document.querySelector('#header');
          navNode.style.maxWidth = '100%';
        }
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "toTop", function () {
      var scrollH = document.documentElement.scrollTop || document.body.scrollTop;
      var timer = setInterval(function () {
        scrollH -= 16;

        if (scrollH > 0) {
          window.scrollTo(0, scrollH);
        } else {
          window.scrollTo(0, 0);
          clearInterval(timer);
        }
      }, 10);
    });

    _this.state = {
      tran: false,
      showSidebar: true
    };
    return _this;
  }

  Object(createClass["a" /* default */])(Layout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (document.body.clientWidth < 768) {
        this.setState({
          showSidebar: false
        });
      }

      var _this$props2 = this.props,
          data = _this$props2.data,
          saveAuthor = _this$props2.saveAuthor;
      saveAuthor({
        name: data.name
      });
      this.setState({
        tran: true
      }); // 初始化雪花

      Object(util_common["c" /* initSnowflake */])(); // 初始化鼠标点击
      // initMouseClick();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          showSearch = _this$props3.showSearch,
          showBlack = _this$props3.showBlack,
          children = _this$props3.children,
          data = _this$props3.data,
          sidebarStatus = _this$props3.sidebarStatus,
          messageInfo = _this$props3.messageInfo,
          messageType = _this$props3.messageType,
          messageStatus = _this$props3.messageStatus;
      var _this$state = this.state,
          tran = _this$state.tran,
          showSidebar = _this$state.showSidebar;
      return external_react_default.a.createElement("div", {
        className: "layout"
      }, external_react_default.a.createElement(components_header, null), external_react_default.a.createElement(components_nav, {
        isPageArticle: showSidebar
      }), showSidebar ? external_react_default.a.createElement(Sidebar, {
        data: data
      }) : null, external_react_default.a.createElement(external_react_transition_group_["CSSTransition"], {
        in: showSearch,
        classNames: "search",
        timeout: 200
      }, external_react_default.a.createElement(Search, null)), external_react_default.a.createElement(external_react_transition_group_["CSSTransition"], {
        in: showBlack,
        classNames: "fade",
        timeout: 200
      }, external_react_default.a.createElement(Black, null)), external_react_default.a.createElement(external_react_transition_group_["CSSTransition"], {
        in: tran,
        classNames: "cont",
        timeout: 500
      }, external_react_default.a.createElement("div", {
        className: "container"
      }, children)), external_react_default.a.createElement(Message, {
        info: messageInfo,
        type: messageType,
        status: messageStatus
      }), external_react_default.a.createElement("canvas", {
        id: "canvas"
      }), external_react_default.a.createElement("i", {
        onClick: this.handleSidebar,
        className: sidebarStatus ? 'iconfont iconright show_sidebar_icon open' : 'iconfont iconright show_sidebar_icon'
      }), external_react_default.a.createElement("i", {
        onClick: this.toTop,
        className: "iconfont icontop to_top"
      }), external_react_default.a.createElement(components_footer, {
        pvCount: data && data.visitCount,
        uvCount: data && data.uvCount
      }));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // 卸载异步操作设置状态
      this.setState = function () {
        return;
      };
    }
  }]);

  return Layout;
}(external_react_["Component"])) || layout_class);
/* harmony default export */ var components_layout = __webpack_exports__["default"] = (layout_Layout);

/***/ }),

/***/ "CmYH":
/***/ (function(module, exports) {



/***/ }),

/***/ "ESiY":
/***/ (function(module, exports) {



/***/ }),

/***/ "GZnU":
/***/ (function(module, exports) {



/***/ }),

/***/ "Rk4p":
/***/ (function(module, exports) {



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

/***/ "kB6e":
/***/ (function(module, exports) {



/***/ })

};;