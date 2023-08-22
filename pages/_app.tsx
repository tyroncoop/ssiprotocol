import '../src/styles/css/main.css'
import '../src/styles/css/noscript.css'

import React from 'react'
import Head from 'next/head'
import { Footer } from '../src/components'
import Menu from '../src/components/Menu'
import { appWithTranslation } from 'next-i18next'

function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Tyron SSI Protocol</title>
            </Head>
            <div id="bg"></div>
            <div id="wrapper">
                <Menu />
                <Component {...pageProps} />
                <div style={{ width: '100%', marginTop: '111px' }}>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default appWithTranslation(App)
