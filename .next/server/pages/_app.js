"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 158:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(853);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(152);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "next/script"
const script_namespaceObject = require("next/script");
var script_default = /*#__PURE__*/__webpack_require__.n(script_namespaceObject);
;// CONCATENATED MODULE: ./components/layouts/layout.js





const Navbar = (0,dynamic["default"])(()=>__webpack_require__.e(/* import() */ 617).then(__webpack_require__.bind(__webpack_require__, 617))
, {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(617)
            ]
        ,
        modules: [
            "..\\components\\layouts\\layout.js -> " + "../modules/navbar"
        ]
    }
});
const Footer = (0,dynamic["default"])(()=>__webpack_require__.e(/* import() */ 534).then(__webpack_require__.bind(__webpack_require__, 534))
, {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(534)
            ]
        ,
        modules: [
            "..\\components\\layouts\\layout.js -> " + "../modules/footer"
        ]
    }
});
const Layout = ({ children  })=>{
    const router = (0,router_.useRouter)();
    (0,external_react_.useEffect)(()=>{
        var loadScript = function(src) {
            var tag = document.createElement("script");
            tag.async = false;
            tag.src = src;
            var body = document.getElementsByTagName("body")[0];
            body.appendChild(tag);
        };
        loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenMax.min.js");
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                src: "/Script/3dGlobe.js"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                style: {
                    height: "100%",
                    backgroundColor: "transparent",
                    position: "relative"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {
                    }),
                    children,
                    /*#__PURE__*/ jsx_runtime_.jsx(Footer, {
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const layout = (Layout);

;// CONCATENATED MODULE: ./pages/_app.js






function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 358:
/***/ ((module) => {

module.exports = require("react-bootstrap");

/***/ }),

/***/ 540:
/***/ ((module) => {

module.exports = require("react-bootstrap/Nav");

/***/ }),

/***/ 934:
/***/ ((module) => {

module.exports = require("react-bootstrap/Navbar");

/***/ }),

/***/ 847:
/***/ ((module) => {

module.exports = require("react-icons/ai");

/***/ }),

/***/ 567:
/***/ ((module) => {

module.exports = require("react-icons/bs");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [152], () => (__webpack_exec__(158)));
module.exports = __webpack_exports__;

})();