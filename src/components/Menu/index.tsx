import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import LogoSSI from '../../images/ssi_protocol_nb.svg'
import IsoLogoSSI from '../../images/ssi_protocol_isoLogo_nB.svg'
import Image from 'next/image'
import { useRouter } from 'next/router'
import burgerIco from '../../images/burger.png'
import { useTranslation } from 'next-i18next'

function Menu() {
    const Router = useRouter()
    const { asPath } = useRouter()
    const { t } = useTranslation()
    const [showMenu, setShowMenu] = useState(false)

    const handleOnClick = () => {
        window.open('https://tyron.network')
    }

    const isActive = (id: string) => {
        const path = Router.asPath
        if (path.includes(id)) {
            return true
        } else {
            return false
        }
    }

    useEffect(() => {
        const language = window.localStorage.getItem('language')
        if (language) {
            Router.push({}, asPath, { locale: language })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const outerClose = () => {
        setShowMenu(false)
    }
    return (
            // <div onClick={outerClose} className={styles.outerWrapper} />
            <div className={styles.wrapper}>
                <div className={styles.wrapperDesktop}>
                    <div
                        onClick={() => Router.push('/')}
                        className={styles.logo}
                    >
                        <Image
                            width={83}
                            height={83}
                            src={LogoSSI}
                            alt="logo"
                        />
                    </div>
                    {/* <div
                    onClick={() => Router.push('/about')}
                    className={
                        isActive('about')
                            ? styles.txtMenuActive
                            : styles.txtMenu
                    }
                >
                    {t('ABOUT')}
                </div>
                <div
                    onClick={() => Router.push('/tyronzil')}
                    className={
                        isActive('tyronzil')
                            ? styles.txtMenuActive
                            : styles.txtMenu
                    }
                    style={{ textTransform: 'none' }}
                >
                    TyronZIL
                </div> */}
                    <div
                        onClick={() => Router.push('/tutorials')}
                        className={
                            isActive('tutorials')
                                ? styles.txtMenuActive
                                : styles.txtMenu
                        }
                    >
                        {t('TUTORIALS')}
                    </div>
                    <div
                        onClick={() =>
                            // Router.push('/whitepaper')
                            window.open(
                                'https://ssiprotocol.notion.site/TYRON-whitepaper-5ca16fc254b343fb90cfeb725cbfa2c3'
                            )
                        }
                        className={
                            isActive('whitepaper')
                                ? styles.txtMenuActive
                                : styles.txtMenu
                        }
                    >
                        WHITEPAPER
                    </div>
                    {/* <div
                    onClick={() => Router.push('/dao')}
                    className={
                        isActive('dao') ? styles.txtMenuActive : styles.txtMenu
                    }
                >
                    DAO
                </div> */}
                </div>
                <div className={styles.wrapperLeftMobile}>
                    <div
                        onClick={() => Router.push('/')}
                        className={styles.logo}
                    >
                        <Image height={74} src={IsoLogoSSI} alt="logo" />
                    </div>
                    {showMenu && (
                        <>
                            {/* <div
                            onClick={() => Router.push('/about')}
                            className={
                                isActive('about')
                                    ? styles.txtMenuActive
                                    : styles.txtMenu
                            }
                        >
                            {t('ABOUT')}
                        </div>
                        <div
                            onClick={() => Router.push('/tyronzil')}
                            className={
                                isActive('tyronzil')
                                    ? styles.txtMenuActive
                                    : styles.txtMenu
                            }
                            style={{ textTransform: 'none' }}
                        >
                            TyronZIL
                        </div> */}
                            <div
                                onClick={() => {
                                    setShowMenu(false)
                                    Router.push('/tutorials')
                                }}
                                className={
                                    isActive('tutorials')
                                        ? styles.txtMenuActive
                                        : styles.txtMenu
                                }
                            >
                                {t('TUTORIALS')}
                            </div>
                            <div
                                onClick={() =>
                                    // Router.push('/whitepaper')
                                    window.open(
                                        'https://ssiprotocol.notion.site/TYRON-whitepaper-5ca16fc254b343fb90cfeb725cbfa2c3'
                                    )
                                }
                                className={
                                    isActive('whitepaper')
                                        ? styles.txtMenuActive
                                        : styles.txtMenu
                                }
                            >
                                WHITEPAPER
                            </div>
                            {/* <div
                            onClick={() => Router.push('/dao')}
                            className={
                                isActive('dao')
                                    ? styles.txtMenuActive
                                    : styles.txtMenu
                            }
                        >
                            DAO
                        </div> */}
                            <button
                                className={styles.button}
                                onClick={handleOnClick}
                            >
                                <span className={styles.buttonText}>
                                    Launch App
                                </span>
                            </button>
                        </>
                    )}
                </div>
                <div className={styles.btnDesktop}>
                    <button className={styles.button} onClick={handleOnClick}>
                        <span className={styles.buttonText}>Launch App</span>
                    </button>
                </div>
                <div
                    onClick={() => setShowMenu(!showMenu)}
                    className={styles.burger}
                >
                    <Image width={22} src={burgerIco} alt="burger-ico" />
                </div>
            </div>
    )
}
export default Menu
