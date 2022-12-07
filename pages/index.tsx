import React from 'react'
import type { NextPage } from 'next'
import { Header, Footer } from "../src/components";

const Component: NextPage = () => {
    return (
            <>
                <div id="bg"></div>
                <div id="wrapper">
                    <Header />
                    <Footer />
                </div>
            </>
    )
}

export default Component
