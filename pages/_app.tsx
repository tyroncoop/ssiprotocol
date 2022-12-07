import '../src/styles/css/main.css';
import '../src/styles/css/noscript.css';

import React from 'react'
import Head from 'next/head';

function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>SSI Protocol</title>
            </Head>
            <div id="bg"></div>
            <div id="wrapper">
                <Component {...pageProps} />
            </div>
        </>
    )
}

export default App
