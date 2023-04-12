import React from 'react'
import type { NextPage } from 'next'

const Component: NextPage = () => {
    return (
        <div className="contentBody">
            <div>
            <iframe 
            className="iFrame"
            src="https://www.youtube.com/embed/meS0G54RD1I" 
            title="Create a new SSI account & Mint an NFT Domain Name with $ZIL" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            ></iframe>
                <iframe  
                className="iFrame"
                src="https://www.youtube.com/embed/-87iQbhdhGs" 
                title="Activate NFT Social Recovery" 
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                ></iframe>
            </div>
            
        </div>
    )
}

export default Component
