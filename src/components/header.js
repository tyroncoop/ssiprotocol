import React, { useState, useEffect } from 'react'
import logo from '../images/tyron_logo.png'
import Menu from './Menu'
import Image from 'next/image'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import LogoTYRON from '../images/tyron_logo.svg'
import styles from './styles.module.scss'
function Header() {
    const { t } = useTranslation()
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
                        <div className={styles.title}>
                            {t('Tyron Self-Sovereign Identity Protocol')}
                        </div>
                        <div className={styles.subtitle}>
                            {t(
                                'Decentralised networks of sovereign identities'
                            )}
                        </div>
                    </div>
                </div>
                {/* <nav>
                    <a className={styles.launch} onClick={handleOnClick}>
                        Launch dApp &#8594; */}
                {/* <Image
                            height={30}
                            width={90}
                            src={LogoTYRON}
                            alt="logo"
                        /> */}
                {/* </a>
                </nav> */}
                {/*<nav>
                    <ul>
                         <li><Link to="/about">About</Link></li>
                    <li><Link to="/wallets">DID<span style={{ textTransform: 'lowercase'}}>x</span>Wallet</Link></li>
                    <li><Link to="/contact">Contact</Link></li> 
                    </ul>
                </nav>*/}
            </div>
        </>
    )
}

export default Header
