import React from 'react'
import SwipeableViews from 'react-swipeable-views'
import styles from './styles.module.scss' // Asumiendo que tienes estilos SCSS
import Image from 'next/image'
import DEFIxWALLET from '../../images/iconos/ssi_ICOh_defixwallet_100px.svg'
import { useTranslation } from 'react-i18next'

const account = () => {
    const { t } = useTranslation()
    return (
        <div className={styles.container}>
            <Image className={styles.img} src={DEFIxWALLET} alt="DEFIxWALLET" />
            <SwipeableViews enableMouseEvents>
                <div className={styles.wrapper}>
                    <div className={styles.card}>
                        <div className="h_titleContent">Staking</div>
                        <div className="h_txtContent">
                            {t('index_wallets4')}
                            <br />
                            <br />
                            {t('index_wallets5')}
                        </div>
                    </div>
                    <div className={`${styles.card} ${styles.cardNext}`} />
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.card}>
                        <div className="h_titleContent">Soulbound tokens</div>
                        <br />
                        <div className="h_txtContent">
                            {t('index_wallets6')}
                            <br />
                            <br />
                            {t('index_wallets7')}
                        </div>
                    </div>
                    <div className={`${styles.card} ${styles.cardNext}`} />
                </div>
                {/* <div className={styles.wrapper}>
                    <div className={styles.card}>Card 3</div>
                </div> */}
            </SwipeableViews>
        </div>
    )
}

export default account
