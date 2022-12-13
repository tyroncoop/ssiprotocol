exports.id = 236
exports.ids = [236]
exports.modules = {
    /***/ 21: /***/ (module) => {
        // Exports
        module.exports = {
            wrapper: 'styles_wrapper__0_T1a',
            wrapperLeft: 'styles_wrapperLeft__oLmXB',
            button: 'styles_button__6qy5a',
            logo: 'styles_logo__WuZDy',
            txtMenu: 'styles_txtMenu__pslPj',
            txtMenuActive: 'styles_txtMenuActive__dkBXa',
        }

        /***/
    },

    /***/ 841: /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
    ) => {
        'use strict'

        // EXPORTS
        __webpack_require__.d(__webpack_exports__, {
            Z: () => /* binding */ components_Menu,
        })

        // EXTERNAL MODULE: external "react/jsx-runtime"
        var jsx_runtime_ = __webpack_require__(997)
        // EXTERNAL MODULE: external "react"
        var external_react_ = __webpack_require__(689)
        // EXTERNAL MODULE: ./src/components/Menu/styles.module.scss
        var styles_module = __webpack_require__(21)
        var styles_module_default =
            /*#__PURE__*/ __webpack_require__.n(styles_module) // CONCATENATED MODULE: ./src/images/logo.png
        /* harmony default export */ const logo = {
            src: '/_next/static/media/logo.ecda6b03.png',
            height: 300,
            width: 300,
            blurDataURL:
                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABBklEQVR42mM4fuIKAxCr9vRM2pOamv4jJTXzZ0trz4H9B89rMYDAzVsPVPt6618F+vP/NzeX/G9kwPA/0Jfhf2d72ftLl65rM8ydu3BPUZbA/+oylZ+1VcH/q8q9/7fVW/wszWH4P3HipGMMNdVVPxgYGP7nZ7v+72m1/D93euj/6HCr/wwMDP9ysrP+MhQUFIAV1FQE/3d3Evnf3e7139dTG6yguLj4L8OkSZP2MTAwgAR+MjCw/p86Ieo/A6PgL5DYvHnzTjBcunRJo7S09C1IwFSf4X9FPsM/ELuiouzT8+fP9RiuX78Owpo9PT2HMjMzfqekpP6ZMGHCsXv37ukyMDAwAAAhL33xKKDL2AAAAABJRU5ErkJggg==',
            blurWidth: 8,
            blurHeight: 8,
        }
        // EXTERNAL MODULE: ./node_modules/next/image.js
        var next_image = __webpack_require__(675)
        var image_default = /*#__PURE__*/ __webpack_require__.n(next_image)
        // EXTERNAL MODULE: external "next/router"
        var router_ = __webpack_require__(853) // CONCATENATED MODULE: ./src/components/Menu/index.tsx
        function Menu() {
            const Router = (0, router_.useRouter)()
            const handleOnClick = () => {
                window.open('https://tyron.network')
            }
            const isActive = (id) => {
                const path = Router.asPath
                if (path.includes(id)) {
                    return true
                } else {
                    return false
                }
            }
            return /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
                className: styles_module_default().wrapper,
                children: [
                    /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
                        className: styles_module_default().wrapperLeft,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx('div', {
                                onClick: () => Router.push('/'),
                                className: styles_module_default().logo,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(
                                    image_default(),
                                    {
                                        width: 50,
                                        height: 50,
                                        src: logo,
                                        alt: 'logo',
                                    }
                                ),
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx('div', {
                                onClick: () => Router.push('/about'),
                                className: isActive('about')
                                    ? styles_module_default().txtMenuActive
                                    : styles_module_default().txtMenu,
                                children: 'ABOUT',
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx('div', {
                                onClick: () => Router.push('/tyronzil'),
                                className: isActive('tyronzil')
                                    ? styles_module_default().txtMenuActive
                                    : styles_module_default().txtMenu,
                                children: 'tyronZIL',
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx('div', {
                                onClick: () => Router.push('/tutorials'),
                                className: isActive('tutorials')
                                    ? styles_module_default().txtMenuActive
                                    : styles_module_default().txtMenu,
                                children: 'TUTORIALS',
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx('div', {
                                onClick: () =>
                                    window.open(
                                        'https://ssiprotocol.notion.site/TYRON-whitepaper-5ca16fc254b343fb90cfeb725cbfa2c3'
                                    ),
                                className: isActive('whitepaper')
                                    ? styles_module_default().txtMenuActive
                                    : styles_module_default().txtMenu,
                                children: 'WHITEPAPER',
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx('div', {
                                onClick: () => Router.push('/dao'),
                                className: isActive('dao')
                                    ? styles_module_default().txtMenuActive
                                    : styles_module_default().txtMenu,
                                children: 'DAO',
                            }),
                        ],
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx('button', {
                        className: styles_module_default().button,
                        onClick: handleOnClick,
                        children: 'tyron.network',
                    }),
                ],
            })
        }
        /* harmony default export */ const components_Menu = Menu

        /***/
    },

    /***/ 236: /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
    ) => {
        'use strict'

        // EXPORTS
        __webpack_require__.d(__webpack_exports__, {
            $: () => /* reexport */ footer,
            h: () => /* reexport */ header,
        })

        // EXTERNAL MODULE: external "react/jsx-runtime"
        var jsx_runtime_ = __webpack_require__(997)
        // EXTERNAL MODULE: external "react"
        var external_react_ = __webpack_require__(689) // CONCATENATED MODULE: ./src/images/tyron_logo.png
        /* harmony default export */ const tyron_logo = {
            src: '/_next/static/media/tyron_logo.e4f2b1aa.png',
            height: 1360,
            width: 2000,
            blurDataURL:
                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAqElEQVR42mMIXpajZ789X6y6p9m8sKZyc0v3hK25Tc1mDECwbMIkJoawlQmGwo2ZAcVl8e9qqmL+p6X6/G9qyvi4becKBQYQCNgUK2FcGF+m6+/23z/O/ZtHgMY3XWP7/8G1mQ3Oa5PlGUDANb2ZW9zY/oaRg85/jyD9/9xW1reN26Idfeem2DCYJPkxgxQJSkWJGxtYtRrqW7Qp+8ZKRe3057Rq9JIFAENZOUivAwNMAAAAAElFTkSuQmCC',
            blurWidth: 8,
            blurHeight: 5,
        }
        // EXTERNAL MODULE: ./src/components/Menu/index.tsx + 1 modules
        var Menu = __webpack_require__(841)
        // EXTERNAL MODULE: ./node_modules/next/image.js
        var next_image = __webpack_require__(675) // CONCATENATED MODULE: ./src/components/header.js
        function Header() {
            const [headerClassName, setHeaderClassName] = (0,
            external_react_.useState)('first-load')
            const [contentClassName, setContentClassName] = (0,
            external_react_.useState)('first-load')
            const [innerClassName, setInnerClassName] = (0,
            external_react_.useState)('first-load')
            ;(0, external_react_.useEffect)(() => {
                setTimeout(() => {
                    setHeaderClassName('header')
                    setContentClassName('content')
                    setInnerClassName('inner')
                }, 10)
                // eslint-disable-next-line react-hooks/exhaustive-deps
            }, [])
            return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
                    id: headerClassName,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx('div', {}),
                        /*#__PURE__*/ jsx_runtime_.jsx('div', {
                            className: contentClassName,
                            children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
                                'div',
                                {
                                    className: innerClassName,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx('h1', {
                                            children:
                                                'Self-Sovereign Identity Protocol',
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx('p', {
                                            children:
                                                'Own your data. Empower your world.',
                                        }),
                                    ],
                                }
                            ),
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx('nav', {}),
                        /*#__PURE__*/ jsx_runtime_.jsx('nav', {
                            children: /*#__PURE__*/ jsx_runtime_.jsx('ul', {}),
                        }),
                    ],
                }),
            })
        }
        /* harmony default export */ const header = Header // CONCATENATED MODULE: ./src/components/footer.js

        function Footer() {
            return /*#__PURE__*/ (0, jsx_runtime_.jsxs)('footer', {
                id: 'footer',
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx('p', {
                        children: /*#__PURE__*/ jsx_runtime_.jsx('a', {
                            className: 'icon brands fa-telegram',
                            href: 'https://t.me/ssiprotocol',
                            rel: 'noreferrer',
                            target: '_blank',
                            children: /*#__PURE__*/ jsx_runtime_.jsx('span', {
                                className: 'label',
                                children: 'Telegram',
                            }),
                        }),
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx('p', {
                        children: /*#__PURE__*/ jsx_runtime_.jsx('a', {
                            className: 'icon brands fa-discord',
                            href: 'https://discord.gg/NPbd92HJ7e',
                            rel: 'noreferrer',
                            target: '_blank',
                            children: /*#__PURE__*/ jsx_runtime_.jsx('span', {
                                className: 'label',
                                children: 'Discord',
                            }),
                        }),
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx('p', {
                        children: /*#__PURE__*/ jsx_runtime_.jsx('a', {
                            className: 'icon brands fa-twitter',
                            href: 'https://twitter.com/ssiprotocol',
                            rel: 'noreferrer',
                            target: '_blank',
                            children: /*#__PURE__*/ jsx_runtime_.jsx('span', {
                                className: 'label',
                                children: 'Twitter',
                            }),
                        }),
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx('p', {
                        children: /*#__PURE__*/ jsx_runtime_.jsx('a', {
                            className: 'icon brands fa-instagram',
                            href: 'https://www.instagram.com/ssiprotocol/',
                            rel: 'noreferrer',
                            target: '_blank',
                            children: /*#__PURE__*/ jsx_runtime_.jsx('span', {
                                className: 'label',
                                children: 'Instagram',
                            }),
                        }),
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx('p', {
                        children: /*#__PURE__*/ jsx_runtime_.jsx('a', {
                            className: 'icon brands fa-github',
                            href: 'https://github.com/pungtas',
                            rel: 'noreferrer',
                            target: '_blank',
                            children: /*#__PURE__*/ jsx_runtime_.jsx('span', {
                                className: 'label',
                                children: 'GitHub',
                            }),
                        }),
                    }),
                ],
            })
        }
        /* harmony default export */ const footer = Footer // CONCATENATED MODULE: ./src/components/index.js

        /***/
    },
}
