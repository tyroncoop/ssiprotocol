import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import Logo from '../../images/ssi_ssiprotocol_iso_2000px.png'
import LogoTYRON from '../../images/ssi_$Tipo_Chrome_1920x640px_trans.png'
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

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapperLeftDesktop}>
                <div onClick={() => Router.push('/')} className={styles.logo}>
                    <Image width={100} height={100} src={Logo} alt="logo" />
                </div>
                <div
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
                    tyronZIL
                </div>
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
                <div
                    onClick={() => Router.push('/dao')}
                    className={
                        isActive('dao') ? styles.txtMenuActive : styles.txtMenu
                    }
                >
                    DAO
                </div>
            </div>
            <div className={styles.wrapperLeftMobile}>
                <div onClick={() => Router.push('/')} className={styles.logo}>
                    <Image width={90} height={90} src={Logo} alt="logo" />
                </div>
                {showMenu && (
                    <>
                        <div
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
                            tyronZIL
                        </div>
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
                        <div
                            onClick={() => Router.push('/dao')}
                            className={
                                isActive('dao')
                                    ? styles.txtMenuActive
                                    : styles.txtMenu
                            }
                        >
                            DAO
                        </div>
                        <button
                            className={styles.button}
                            onClick={handleOnClick}
                        >
                            tyron.network
                        </button>
                    </>
                )}
            </div>
            <div className={styles.btnDesktop}>
                <button className={styles.button} onClick={handleOnClick}> 
                <Image height={50} width={150} src={LogoTYRON} alt="logo" /></button>
            </div>
            <div
                onClick={() => setShowMenu(!showMenu)}
                className={styles.burger}
            >
                <Image width={30} src={burgerIco} alt="burger-ico" />
            </div>
        </div>
    )
}
export default Menu
