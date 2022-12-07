import '../src/styles/css/main.css';
import '../src/styles/css/noscript.css';

import React from 'react'
import Head from 'next/head';
import { Footer } from '../src/components';
import Menu from '../src/components/Menu';

function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>SSI Protocol</title>
            </Head>
            <div id="bg"></div>
            <div id="wrapper">
                <Menu />
                <Component {...pageProps} />
                <Footer />
            </div>
        </>
    )
}

export default App
