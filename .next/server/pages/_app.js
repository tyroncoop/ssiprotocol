;(() => {
    var exports = {}
    exports.id = 888
    exports.ids = [888]
    exports.modules = {
        /***/ 14: /***/ (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__
        ) => {
            'use strict'
            // ESM COMPAT FLAG
            __webpack_require__.r(__webpack_exports__)

            // EXPORTS
            __webpack_require__.d(__webpack_exports__, {
                default: () => /* binding */ _app,
            })

            // EXTERNAL MODULE: external "react/jsx-runtime"
            var jsx_runtime_ = __webpack_require__(997)
            // EXTERNAL MODULE: ./src/styles/css/main.css
            var main = __webpack_require__(233)
            // EXTERNAL MODULE: ./src/styles/css/noscript.css
            var noscript = __webpack_require__(642)
            // EXTERNAL MODULE: external "react"
            var external_react_ = __webpack_require__(689) // CONCATENATED MODULE: external "next/head"
            const head_namespaceObject = require('next/head')
            var head_default =
                /*#__PURE__*/ __webpack_require__.n(head_namespaceObject)
            // EXTERNAL MODULE: ./src/components/index.js + 3 modules
            var components = __webpack_require__(236)
            // EXTERNAL MODULE: ./src/components/Menu/index.tsx + 1 modules
            var Menu = __webpack_require__(841) // CONCATENATED MODULE: ./pages/_app.tsx
            function App({ Component, pageProps }) {
                return /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
                    jsx_runtime_.Fragment,
                    {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(head_default(), {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(
                                    'title',
                                    {
                                        children: 'SSI Protocol',
                                    }
                                ),
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx('div', {
                                id: 'bg',
                            }),
                            /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
                                id: 'wrapper',
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(
                                        Menu /* default */.Z,
                                        {}
                                    ),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                                        ...pageProps,
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(
                                        components /* Footer */.$,
                                        {}
                                    ),
                                ],
                            }),
                        ],
                    }
                )
            }
            /* harmony default export */ const _app = App

            /***/
        },

        /***/ 233: /***/ () => {
            /***/
        },

        /***/ 642: /***/ () => {
            /***/
        },

        /***/ 918: /***/ (module) => {
            'use strict'
            module.exports = require('next/dist/shared/lib/amp-context.js')

            /***/
        },

        /***/ 732: /***/ (module) => {
            'use strict'
            module.exports = require('next/dist/shared/lib/amp-mode.js')

            /***/
        },

        /***/ 796: /***/ (module) => {
            'use strict'
            module.exports = require('next/dist/shared/lib/head-manager-context.js')

            /***/
        },

        /***/ 486: /***/ (module) => {
            'use strict'
            module.exports = require('next/dist/shared/lib/image-blur-svg.js')

            /***/
        },

        /***/ 744: /***/ (module) => {
            'use strict'
            module.exports = require('next/dist/shared/lib/image-config-context.js')

            /***/
        },

        /***/ 843: /***/ (module) => {
            'use strict'
            module.exports = require('next/dist/shared/lib/image-config.js')

            /***/
        },

        /***/ 552: /***/ (module) => {
            'use strict'
            module.exports = require('next/dist/shared/lib/image-loader')

            /***/
        },

        /***/ 470: /***/ (module) => {
            'use strict'
            module.exports = require('next/dist/shared/lib/side-effect.js')

            /***/
        },

        /***/ 618: /***/ (module) => {
            'use strict'
            module.exports = require('next/dist/shared/lib/utils/warn-once.js')

            /***/
        },

        /***/ 853: /***/ (module) => {
            'use strict'
            module.exports = require('next/router')

            /***/
        },

        /***/ 689: /***/ (module) => {
            'use strict'
            module.exports = require('react')

            /***/
        },

        /***/ 997: /***/ (module) => {
            'use strict'
            module.exports = require('react/jsx-runtime')

            /***/
        },
    }
    // load runtime
    var __webpack_require__ = require('../webpack-runtime.js')
    __webpack_require__.C(exports)
    var __webpack_exec__ = (moduleId) =>
        __webpack_require__((__webpack_require__.s = moduleId))
    var __webpack_exports__ = __webpack_require__.X(0, [121, 675, 236], () =>
        __webpack_exec__(14)
    )
    module.exports = __webpack_exports__
})()
