import React from 'react'
import type { NextPage } from 'next'

const Component: NextPage = () => {
    return (
        <div className="contentBody">
            <div>
                <iframe
                    className="iFrame"
                    src="https://www.youtube.com/embed/4i7nXiC80v0?controls=1"
                    title="Create a new SSI account & Mint an NFT Domain Name with $ZIL"
                    frameBorder="0"
                    allowFullScreen
                ></iframe>

                <iframe
                    className="iFrame"
                    src="https://www.youtube.com/embed/-87iQbhdhGs?"
                    title="Activate NFT Social Recovery"
                    frameBorder="0"
                    allow="accelerometer; controls; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>

                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/nicBm8EpTMA?controls"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    )
}

export default Component
