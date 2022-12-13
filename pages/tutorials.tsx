import React from 'react'
import type { NextPage } from 'next'

const Component: NextPage = () => {
    return (
        <div className="contentBody">
            <div>
                <iframe
                    className="iFrame"
                    src="https://www.youtube.com/embed/x0i9iqittQo"
                    title="How to create your SSI and mint an NFT Domain Name?"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                <iframe
                    className="iFrame"
                    src="https://www.youtube.com/embed/8wCApLyQsF8"
                    title="¿Cómo crear tu billetera de staking de Zilliqa?"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div>
                <iframe
                    className="iFrame"
                    src="https://www.youtube.com/embed/C0MNhv5HhGs"
                    title="How to create your ZILxWallet ($ZIL staking wallet)?"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    )
}

export default Component
