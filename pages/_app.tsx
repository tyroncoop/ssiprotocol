import '../src/styles/css/main.css';
import '../src/styles/css/noscript.css';

import React from 'react'

function App({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
        </>
    )
}

export default App
