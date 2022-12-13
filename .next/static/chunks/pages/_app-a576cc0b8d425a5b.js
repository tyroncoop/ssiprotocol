;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [888],
    {
        6840: function (e, t, r) {
            ;(window.__NEXT_P = window.__NEXT_P || []).push([
                '/_app',
                function () {
                    return r(3847)
                },
            ])
        },
        9749: function (e, t, r) {
            'use strict'
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.default = void 0)
            var n = r(6495).Z,
                i = r(2648).Z,
                a = r(1598).Z,
                s = r(7273).Z,
                o = a(r(7294)),
                l = i(r(3121)),
                c = r(2675),
                d = r(139),
                u = r(8730)
            r(7238)
            var f = i(r(9824))
            let h = {
                deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                path: '/_next/image',
                loader: 'default',
                dangerouslyAllowSVG: !1,
                unoptimized: !1,
            }
            function g(e) {
                return void 0 !== e.default
            }
            function p(e) {
                return 'number' == typeof e || void 0 === e
                    ? e
                    : 'string' == typeof e && /^[0-9]+$/.test(e)
                    ? parseInt(e, 10)
                    : NaN
            }
            function m(e, t, r, i, a) {
                if (!e || e['data-loaded-src'] === t) return
                e['data-loaded-src'] = t
                let s = 'decode' in e ? e.decode() : Promise.resolve()
                s.catch(() => {}).then(() => {
                    if (e.parentNode) {
                        if (null == r ? void 0 : r.current) {
                            let t = new Event('load')
                            Object.defineProperty(t, 'target', {
                                writable: !1,
                                value: e,
                            })
                            let a = !1,
                                s = !1
                            r.current(
                                n({}, t, {
                                    nativeEvent: t,
                                    currentTarget: e,
                                    target: e,
                                    isDefaultPrevented: () => a,
                                    isPropagationStopped: () => s,
                                    persist() {},
                                    preventDefault() {
                                        ;(a = !0), t.preventDefault()
                                    },
                                    stopPropagation() {
                                        ;(s = !0), t.stopPropagation()
                                    },
                                })
                            )
                        }
                        ;(null == i ? void 0 : i.current) && i.current(e)
                    }
                })
            }
            let v = o.forwardRef((e, t) => {
                    var {
                            imgAttributes: r,
                            heightInt: i,
                            widthInt: a,
                            qualityInt: l,
                            className: c,
                            imgStyle: d,
                            blurStyle: u,
                            isLazy: f,
                            fill: h,
                            placeholder: g,
                            loading: p,
                            srcString: v,
                            config: w,
                            unoptimized: b,
                            loader: x,
                            onLoadRef: j,
                            onLoadingCompleteRef: y,
                            onLoad: _,
                            onError: A,
                        } = e,
                        E = s(e, [
                            'imgAttributes',
                            'heightInt',
                            'widthInt',
                            'qualityInt',
                            'className',
                            'imgStyle',
                            'blurStyle',
                            'isLazy',
                            'fill',
                            'placeholder',
                            'loading',
                            'srcString',
                            'config',
                            'unoptimized',
                            'loader',
                            'onLoadRef',
                            'onLoadingCompleteRef',
                            'onLoad',
                            'onError',
                        ])
                    return (
                        (p = f ? 'lazy' : p),
                        o.default.createElement(
                            o.default.Fragment,
                            null,
                            o.default.createElement(
                                'img',
                                Object.assign({}, E, r, {
                                    width: a,
                                    height: i,
                                    decoding: 'async',
                                    'data-nimg': h ? 'fill' : '1',
                                    className: c,
                                    loading: p,
                                    style: n({}, d, u),
                                    ref: o.useCallback(
                                        (e) => {
                                            t &&
                                                ('function' == typeof t
                                                    ? t(e)
                                                    : 'object' == typeof t &&
                                                      (t.current = e)),
                                                e &&
                                                    (A && (e.src = e.src),
                                                    e.complete &&
                                                        m(e, v, j, y, b))
                                        },
                                        [v, j, y, A, b, t]
                                    ),
                                    onLoad(e) {
                                        let t = e.currentTarget
                                        m(t, v, j, y, b)
                                    },
                                    onError(e) {
                                        let { style: t } = e.currentTarget
                                        'transparent' === t.color &&
                                            (t.color = ''),
                                            'blur' === g &&
                                                t.backgroundImage &&
                                                ((t.backgroundSize = ''),
                                                (t.backgroundPosition = ''),
                                                (t.backgroundRepeat = ''),
                                                (t.backgroundImage = '')),
                                            A && A(e)
                                    },
                                })
                            )
                        )
                    )
                }),
                w = o.forwardRef((e, t) => {
                    let r, i
                    var a,
                        {
                            src: m,
                            sizes: w,
                            unoptimized: b = !1,
                            priority: x = !1,
                            loading: j,
                            className: y,
                            quality: _,
                            width: A,
                            height: E,
                            fill: k,
                            style: N,
                            onLoad: P,
                            onLoadingComplete: M,
                            placeholder: S = 'empty',
                            blurDataURL: C,
                            layout: z,
                            objectFit: R,
                            objectPosition: I,
                            lazyBoundary: O,
                            lazyRoot: L,
                        } = e,
                        T = s(e, [
                            'src',
                            'sizes',
                            'unoptimized',
                            'priority',
                            'loading',
                            'className',
                            'quality',
                            'width',
                            'height',
                            'fill',
                            'style',
                            'onLoad',
                            'onLoadingComplete',
                            'placeholder',
                            'blurDataURL',
                            'layout',
                            'objectFit',
                            'objectPosition',
                            'lazyBoundary',
                            'lazyRoot',
                        ])
                    let D = o.useContext(u.ImageConfigContext),
                        B = o.useMemo(() => {
                            let e = h || D || d.imageConfigDefault,
                                t = [...e.deviceSizes, ...e.imageSizes].sort(
                                    (e, t) => e - t
                                ),
                                r = e.deviceSizes.sort((e, t) => e - t)
                            return n({}, e, { allSizes: t, deviceSizes: r })
                        }, [D]),
                        Z = T,
                        H = Z.loader || f.default
                    if ((delete Z.loader, '__next_img_default' in H)) {
                        if ('custom' === B.loader)
                            throw Error(
                                'Image with src "'.concat(
                                    m,
                                    '" is missing "loader" prop.'
                                ) +
                                    '\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
                            )
                    } else {
                        let F = H
                        H = (e) => {
                            let { config: t } = e,
                                r = s(e, ['config'])
                            return F(r)
                        }
                    }
                    if (z) {
                        'fill' === z && (k = !0)
                        let V = {
                            intrinsic: { maxWidth: '100%', height: 'auto' },
                            responsive: { width: '100%', height: 'auto' },
                        }[z]
                        V && (N = n({}, N, V))
                        let G = { responsive: '100vw', fill: '100vw' }[z]
                        G && !w && (w = G)
                    }
                    let U = '',
                        W = p(A),
                        X = p(E)
                    if (
                        'object' == typeof (a = m) &&
                        (g(a) || void 0 !== a.src)
                    ) {
                        let q = g(m) ? m.default : m
                        if (!q.src)
                            throw Error(
                                'An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received '.concat(
                                    JSON.stringify(q)
                                )
                            )
                        if (!q.height || !q.width)
                            throw Error(
                                'An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received '.concat(
                                    JSON.stringify(q)
                                )
                            )
                        if (
                            ((r = q.blurWidth),
                            (i = q.blurHeight),
                            (C = C || q.blurDataURL),
                            (U = q.src),
                            !k)
                        ) {
                            if (W || X) {
                                if (W && !X) {
                                    let J = W / q.width
                                    X = Math.round(q.height * J)
                                } else if (!W && X) {
                                    let Y = X / q.height
                                    W = Math.round(q.width * Y)
                                }
                            } else (W = q.width), (X = q.height)
                        }
                    }
                    let K = !x && ('lazy' === j || void 0 === j)
                    ;((m = 'string' == typeof m ? m : U).startsWith('data:') ||
                        m.startsWith('blob:')) &&
                        ((b = !0), (K = !1)),
                        B.unoptimized && (b = !0)
                    let Q = p(_),
                        $ = Object.assign(
                            k
                                ? {
                                      position: 'absolute',
                                      height: '100%',
                                      width: '100%',
                                      left: 0,
                                      top: 0,
                                      right: 0,
                                      bottom: 0,
                                      objectFit: R,
                                      objectPosition: I,
                                  }
                                : {},
                            { color: 'transparent' },
                            N
                        ),
                        ee =
                            'blur' === S && C
                                ? {
                                      backgroundSize: $.objectFit || 'cover',
                                      backgroundPosition:
                                          $.objectPosition || '50% 50%',
                                      backgroundRepeat: 'no-repeat',
                                      backgroundImage:
                                          'url("data:image/svg+xml;charset=utf-8,'.concat(
                                              c.getImageBlurSvg({
                                                  widthInt: W,
                                                  heightInt: X,
                                                  blurWidth: r,
                                                  blurHeight: i,
                                                  blurDataURL: C,
                                              }),
                                              '")'
                                          ),
                                  }
                                : {},
                        et = (function (e) {
                            let {
                                config: t,
                                src: r,
                                unoptimized: n,
                                width: i,
                                quality: a,
                                sizes: s,
                                loader: o,
                            } = e
                            if (n)
                                return { src: r, srcSet: void 0, sizes: void 0 }
                            let { widths: l, kind: c } = (function (e, t, r) {
                                    let { deviceSizes: n, allSizes: i } = e
                                    if (r) {
                                        let a = /(^|\s)(1?\d?\d)vw/g,
                                            s = []
                                        for (let o; (o = a.exec(r)); o)
                                            s.push(parseInt(o[2]))
                                        if (s.length) {
                                            let l = 0.01 * Math.min(...s)
                                            return {
                                                widths: i.filter(
                                                    (e) => e >= n[0] * l
                                                ),
                                                kind: 'w',
                                            }
                                        }
                                        return { widths: i, kind: 'w' }
                                    }
                                    if ('number' != typeof t)
                                        return { widths: n, kind: 'w' }
                                    let c = [
                                        ...new Set(
                                            [t, 2 * t].map(
                                                (e) =>
                                                    i.find((t) => t >= e) ||
                                                    i[i.length - 1]
                                            )
                                        ),
                                    ]
                                    return { widths: c, kind: 'x' }
                                })(t, i, s),
                                d = l.length - 1
                            return {
                                sizes: s || 'w' !== c ? s : '100vw',
                                srcSet: l
                                    .map((e, n) =>
                                        ''
                                            .concat(
                                                o({
                                                    config: t,
                                                    src: r,
                                                    quality: a,
                                                    width: e,
                                                }),
                                                ' '
                                            )
                                            .concat('w' === c ? e : n + 1)
                                            .concat(c)
                                    )
                                    .join(', '),
                                src: o({
                                    config: t,
                                    src: r,
                                    quality: a,
                                    width: l[d],
                                }),
                            }
                        })({
                            config: B,
                            src: m,
                            unoptimized: b,
                            width: W,
                            quality: Q,
                            sizes: w,
                            loader: H,
                        }),
                        er = m,
                        en = {
                            imageSrcSet: et.srcSet,
                            imageSizes: et.sizes,
                            crossOrigin: Z.crossOrigin,
                        },
                        ei = o.useRef(P)
                    o.useEffect(() => {
                        ei.current = P
                    }, [P])
                    let ea = o.useRef(M)
                    o.useEffect(() => {
                        ea.current = M
                    }, [M])
                    let es = n(
                        {
                            isLazy: K,
                            imgAttributes: et,
                            heightInt: X,
                            widthInt: W,
                            qualityInt: Q,
                            className: y,
                            imgStyle: $,
                            blurStyle: ee,
                            loading: j,
                            config: B,
                            fill: k,
                            unoptimized: b,
                            placeholder: S,
                            loader: H,
                            srcString: er,
                            onLoadRef: ei,
                            onLoadingCompleteRef: ea,
                        },
                        Z
                    )
                    return o.default.createElement(
                        o.default.Fragment,
                        null,
                        o.default.createElement(
                            v,
                            Object.assign({}, es, { ref: t })
                        ),
                        x
                            ? o.default.createElement(
                                  l.default,
                                  null,
                                  o.default.createElement(
                                      'link',
                                      Object.assign(
                                          {
                                              key:
                                                  '__nimg-' +
                                                  et.src +
                                                  et.srcSet +
                                                  et.sizes,
                                              rel: 'preload',
                                              as: 'image',
                                              href: et.srcSet ? void 0 : et.src,
                                          },
                                          en
                                      )
                                  )
                              )
                            : null
                    )
                })
            ;(t.default = w),
                ('function' == typeof t.default ||
                    ('object' == typeof t.default && null !== t.default)) &&
                    void 0 === t.default.__esModule &&
                    (Object.defineProperty(t.default, '__esModule', {
                        value: !0,
                    }),
                    Object.assign(t.default, t),
                    (e.exports = t.default))
        },
        2675: function (e, t) {
            'use strict'
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.getImageBlurSvg = function (e) {
                    let {
                            widthInt: t,
                            heightInt: r,
                            blurWidth: n,
                            blurHeight: i,
                            blurDataURL: a,
                        } = e,
                        s = n || t,
                        o = i || r,
                        l = a.startsWith('data:image/jpeg')
                            ? "%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%"
                            : ''
                    return s && o
                        ? "%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 "
                              .concat(s, ' ')
                              .concat(
                                  o,
                                  "'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"
                              )
                              .concat(n && i ? '1' : '20', "'/%3E")
                              .concat(
                                  l,
                                  "%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='"
                              )
                              .concat(a, "'/%3E%3C/svg%3E")
                        : "%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(
                              a,
                              "'/%3E%3C/svg%3E"
                          )
                })
        },
        9824: function (e, t) {
            'use strict'
            function r(e) {
                let { config: t, src: r, width: n, quality: i } = e
                return r.endsWith('.svg') && !t.dangerouslyAllowSVG
                    ? r
                    : ''
                          .concat(t.path, '?url=')
                          .concat(encodeURIComponent(r), '&w=')
                          .concat(n, '&q=')
                          .concat(i || 75)
            }
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.default = void 0),
                (r.__next_img_default = !0),
                (t.default = r)
        },
        3847: function (e, t, r) {
            'use strict'
            r.r(t)
            var n = r(5893)
            r(2787), r(7134), r(7294)
            var i = r(9008),
                a = r.n(i),
                s = r(5236),
                o = r(4841)
            t.default = function (e) {
                let { Component: t, pageProps: r } = e
                return (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(a(), {
                            children: (0, n.jsx)('title', {
                                children: 'SSI Protocol',
                            }),
                        }),
                        (0, n.jsx)('div', { id: 'bg' }),
                        (0, n.jsxs)('div', {
                            id: 'wrapper',
                            children: [
                                (0, n.jsx)(o.Z, {}),
                                (0, n.jsx)(t, { ...r }),
                                (0, n.jsx)(s.$, {}),
                            ],
                        }),
                    ],
                })
            }
        },
        4841: function (e, t, r) {
            'use strict'
            r.d(t, {
                Z: function () {
                    return d
                },
            })
            var n = r(5893)
            r(7294)
            var i = r(6226),
                a = r.n(i),
                s = {
                    src: '/_next/static/media/logo.ecda6b03.png',
                    height: 300,
                    width: 300,
                    blurDataURL:
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABBklEQVR42mM4fuIKAxCr9vRM2pOamv4jJTXzZ0trz4H9B89rMYDAzVsPVPt6618F+vP/NzeX/G9kwPA/0Jfhf2d72ftLl65rM8ydu3BPUZbA/+oylZ+1VcH/q8q9/7fVW/wszWH4P3HipGMMNdVVPxgYGP7nZ7v+72m1/D93euj/6HCr/wwMDP9ysrP+MhQUFIAV1FQE/3d3Evnf3e7139dTG6yguLj4L8OkSZP2MTAwgAR+MjCw/p86Ieo/A6PgL5DYvHnzTjBcunRJo7S09C1IwFSf4X9FPsM/ELuiouzT8+fP9RiuX78Owpo9PT2HMjMzfqekpP6ZMGHCsXv37ukyMDAwAAAhL33xKKDL2AAAAABJRU5ErkJggg==',
                    blurWidth: 8,
                    blurHeight: 8,
                },
                o = r(5675),
                l = r.n(o),
                c = r(1163),
                d = function () {
                    let e = (0, c.useRouter)(),
                        t = () => {
                            window.open('https://tyron.network')
                        },
                        r = (t) => {
                            let r = e.asPath
                            return !!r.includes(t)
                        }
                    return (0, n.jsxs)('div', {
                        className: a().wrapper,
                        children: [
                            (0, n.jsxs)('div', {
                                className: a().wrapperLeft,
                                children: [
                                    (0, n.jsx)('div', {
                                        onClick: () => e.push('/'),
                                        className: a().logo,
                                        children: (0, n.jsx)(l(), {
                                            width: 50,
                                            height: 50,
                                            src: s,
                                            alt: 'logo',
                                        }),
                                    }),
                                    (0, n.jsx)('div', {
                                        onClick: () => e.push('/about'),
                                        className: r('about')
                                            ? a().txtMenuActive
                                            : a().txtMenu,
                                        children: 'ABOUT',
                                    }),
                                    (0, n.jsx)('div', {
                                        onClick: () => e.push('/tyronzil'),
                                        className: r('tyronzil')
                                            ? a().txtMenuActive
                                            : a().txtMenu,
                                        children: 'tyronZIL',
                                    }),
                                    (0, n.jsx)('div', {
                                        onClick: () => e.push('/tutorials'),
                                        className: r('tutorials')
                                            ? a().txtMenuActive
                                            : a().txtMenu,
                                        children: 'TUTORIALS',
                                    }),
                                    (0, n.jsx)('div', {
                                        onClick: () =>
                                            window.open(
                                                'https://ssiprotocol.notion.site/TYRON-whitepaper-5ca16fc254b343fb90cfeb725cbfa2c3'
                                            ),
                                        className: r('whitepaper')
                                            ? a().txtMenuActive
                                            : a().txtMenu,
                                        children: 'WHITEPAPER',
                                    }),
                                    (0, n.jsx)('div', {
                                        onClick: () => e.push('/dao'),
                                        className: r('dao')
                                            ? a().txtMenuActive
                                            : a().txtMenu,
                                        children: 'DAO',
                                    }),
                                ],
                            }),
                            (0, n.jsx)('button', {
                                className: a().button,
                                onClick: t,
                                children: 'tyron.network',
                            }),
                        ],
                    })
                }
        },
        5236: function (e, t, r) {
            'use strict'
            r.d(t, {
                $: function () {
                    return s
                },
                h: function () {
                    return a
                },
            })
            var n = r(5893),
                i = r(7294)
            r(4841), r(5675)
            var a = function () {
                    let [e, t] = (0, i.useState)('first-load'),
                        [r, a] = (0, i.useState)('first-load'),
                        [s, o] = (0, i.useState)('first-load')
                    return (
                        (0, i.useEffect)(() => {
                            setTimeout(() => {
                                t('header'), a('content'), o('inner')
                            }, 10)
                        }, []),
                        (0, n.jsx)(n.Fragment, {
                            children: (0, n.jsxs)('div', {
                                id: e,
                                children: [
                                    (0, n.jsx)('div', {}),
                                    (0, n.jsx)('div', {
                                        className: r,
                                        children: (0, n.jsxs)('div', {
                                            className: s,
                                            children: [
                                                (0, n.jsx)('h1', {
                                                    children:
                                                        'Self-Sovereign Identity Protocol',
                                                }),
                                                (0, n.jsx)('p', {
                                                    children:
                                                        'Own your data. Empower your world.',
                                                }),
                                            ],
                                        }),
                                    }),
                                    (0, n.jsx)('nav', {}),
                                    (0, n.jsx)('nav', {
                                        children: (0, n.jsx)('ul', {}),
                                    }),
                                ],
                            }),
                        })
                    )
                },
                s = function () {
                    return (0, n.jsxs)('footer', {
                        id: 'footer',
                        children: [
                            (0, n.jsx)('p', {
                                children: (0, n.jsx)('a', {
                                    className: 'icon brands fa-telegram',
                                    href: 'https://t.me/ssiprotocol',
                                    rel: 'noreferrer',
                                    target: '_blank',
                                    children: (0, n.jsx)('span', {
                                        className: 'label',
                                        children: 'Telegram',
                                    }),
                                }),
                            }),
                            (0, n.jsx)('p', {
                                children: (0, n.jsx)('a', {
                                    className: 'icon brands fa-discord',
                                    href: 'https://discord.gg/NPbd92HJ7e',
                                    rel: 'noreferrer',
                                    target: '_blank',
                                    children: (0, n.jsx)('span', {
                                        className: 'label',
                                        children: 'Discord',
                                    }),
                                }),
                            }),
                            (0, n.jsx)('p', {
                                children: (0, n.jsx)('a', {
                                    className: 'icon brands fa-twitter',
                                    href: 'https://twitter.com/ssiprotocol',
                                    rel: 'noreferrer',
                                    target: '_blank',
                                    children: (0, n.jsx)('span', {
                                        className: 'label',
                                        children: 'Twitter',
                                    }),
                                }),
                            }),
                            (0, n.jsx)('p', {
                                children: (0, n.jsx)('a', {
                                    className: 'icon brands fa-instagram',
                                    href: 'https://www.instagram.com/ssiprotocol/',
                                    rel: 'noreferrer',
                                    target: '_blank',
                                    children: (0, n.jsx)('span', {
                                        className: 'label',
                                        children: 'Instagram',
                                    }),
                                }),
                            }),
                            (0, n.jsx)('p', {
                                children: (0, n.jsx)('a', {
                                    className: 'icon brands fa-github',
                                    href: 'https://github.com/pungtas',
                                    rel: 'noreferrer',
                                    target: '_blank',
                                    children: (0, n.jsx)('span', {
                                        className: 'label',
                                        children: 'GitHub',
                                    }),
                                }),
                            }),
                        ],
                    })
                }
        },
        6226: function (e) {
            e.exports = {
                wrapper: 'styles_wrapper__0_T1a',
                wrapperLeft: 'styles_wrapperLeft__oLmXB',
                button: 'styles_button__6qy5a',
                logo: 'styles_logo__WuZDy',
                txtMenu: 'styles_txtMenu__pslPj',
                txtMenuActive: 'styles_txtMenuActive__dkBXa',
            }
        },
        2787: function () {},
        7134: function () {},
        9008: function (e, t, r) {
            e.exports = r(3121)
        },
        5675: function (e, t, r) {
            e.exports = r(9749)
        },
        1163: function (e, t, r) {
            e.exports = r(880)
        },
    },
    function (e) {
        var t = function (t) {
            return e((e.s = t))
        }
        e.O(0, [774, 179], function () {
            return t(6840), t(880)
        }),
            (_N_E = e.O())
    },
])
