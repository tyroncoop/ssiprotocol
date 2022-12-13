import React, { useState, useEffect } from 'react'
import logo from '../images/tyron_logo.png'
import Menu from './Menu'
import Image from 'next/image'

function Header() {
    const [headerClassName, setHeaderClassName] = useState('first-load')
    const [contentClassName, setContentClassName] = useState('first-load')
    const [innerClassName, setInnerClassName] = useState('first-load')

    useEffect(() => {
        setTimeout(() => {
            setHeaderClassName('header')
            setContentClassName('content')
            setInnerClassName('inner')
        }, 10)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <div id={headerClassName}>
                {/* {headerClassName !== 'first-load' && 
                    <Image src={logo} width="200" alt="tyron_logo"/>
            } */}
                <div />
                <div className={contentClassName}>
                    <div className={innerClassName}>
                        <h1>Self-Sovereign Identity Protocol</h1>
                        <p>Own your data. Empower your world.</p>
                    </div>
                </div>
                <nav>
                    {/* <ul>
                    <li>
                        <a
                            href="https://ssiprotocol.notion.site/ssiprotocol/TYRON-Whitepaper-5ca16fc254b343fb90cfeb725cbfa2c3"
                            rel="noreferrer" target="_blank"
                        >
                            whitepaper
                        </a>
                    </li>
                </ul> */}
                </nav>
                <nav>
                    <ul>
                        {/* <li><Link to="/about">About</Link></li>
                    <li><Link to="/wallets">DID<span style={{ textTransform: 'lowercase'}}>x</span>Wallet</Link></li>
                    <li><Link to="/contact">Contact</Link></li> */}
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Header
