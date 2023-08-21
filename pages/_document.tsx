import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta
                        name="Tyron SSI Protocol"
                        content="Tyron Self Sovereign Identity Protocol"
                    />
                    <link rel="icon" href="/favicon.ico" />
                    <meta name="title" content="Tyron SSI Protocol" />
                    <meta
                        name="description"
                        content="Tyron Self Sovereign Identity Protocol"
                    />
                    <meta property="og:image" content="/ssi_protocol.svg" />
                    <meta property="og:title" content="Tyron SSI Protocol" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
