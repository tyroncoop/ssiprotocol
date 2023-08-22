import React, { useState, useEffect } from 'react'
import logo from '../images/tyron_logo.png'
import Menu from './Menu'
import Image from 'next/image'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import styles from './Menu/styles.module.scss'
import LogoTYRON from '../images/ssi_$Tipo_Chrome_1920x640px_trans.png'

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
    const handleOnClick = () => {
        window.open('https://tyron.network')
    }
    return (
        <>
            <div id={headerClassName}>
                {/* {headerClassName !== 'first-load' && 
                    <Image src={logo} width="200" alt="tyron_logo"/>
            } */}
                <div />
                <div className={contentClassName}>
                    <div className={innerClassName}>
                        <p
                            style={{
                                fontSize: 'x-large',
                                fontWeight: '700',
                                textTransform: 'uppercase',
                            }}
                        >
                            Tyron Self-Sovereign Identity Protocol
                        </p>
                        <p style={{ color: '#ffff32' }}>
                            Decentralised networks of sovereign identities
                        </p>
                    </div>
                </div>
                <nav>
                    <ul>
                        <li>
                            <a onClick={handleOnClick}>
                                <Image
                                    height={50}
                                    width={150}
                                    src={LogoTYRON}
                                    alt="logo"
                                />
                            </a>
                        </li>
                    </ul>
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
