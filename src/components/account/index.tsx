import React, { useState } from 'react'
import styles from './styles.module.scss' // Asumiendo que tienes estilos SCSS
import Image from 'next/image'
import DEFIxWALLET from '../../images/iconos/ssi_ICOh_defixwallet_100px.svg'
import { useTranslation } from 'react-i18next'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const account = () => {
    const { t } = useTranslation()
    const [activeSlide, setActiveSlide] = useState(0) // Track the active slide index

    // Function to handle slide change
    const handleChangeSlide = (index) => {
        setActiveSlide(index)
    }
    const handleNextSlide = () => {
        setActiveSlide(activeSlide + 1)
    }

    return (
        <div className={styles.container}>
            <Image className={styles.img} src={DEFIxWALLET} alt="DEFIxWALLET" />

            {/* Carousel indicator/pagination */}
            <Carousel
                showThumbs={false}
                selectedItem={activeSlide}
                onChange={handleChangeSlide}
                emulateTouch={true}
            >
                {/* Slide 1 */}
                <div className={styles.wrapper}>
                    <div className={styles.card}>
                        <div className="h_titleContent">Trading</div>
                        <div className="h_txtContent">
                            {t('defixwallet_1')}
                            <br />
                            <br />
                            {t('defixwallet_2')}
                            <br />
                            <br />
                            {t('defixwallet_3')}
                            <br />
                            <br />
                            {t('defixwallet_4')}
                            <br />
                            <br />
                            <div
                                className={styles.button}
                                onClick={() =>
                                    window.open(
                                        'https://tyron.network/tyrondex'
                                    )
                                }
                            >
                                {t('Go to TyronDEX')}
                                &#8594;
                            </div>
                        </div>
                    </div>
                    <div
                        onClick={() => handleNextSlide()}
                        className={`${styles.card} ${styles.cardNext}`}
                    >
                        <div className={styles.arrow}>&rarr;</div>
                    </div>
                </div>

                {/* Slide 2 */}
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
                    <div
                        onClick={() => handleNextSlide()}
                        className={`${styles.card} ${styles.cardNext}`}
                    >
                        <div className={styles.arrow}>&rarr;</div>
                    </div>
                </div>

                {/* Slide 3 */}
                <div className={styles.wrapper}>
                    <div className={styles.card}>
                        <div className="h_titleContent">Soulbound tokens</div>
                        <div className="h_txtContent">
                            {t('index_wallets6')}
                            <br />
                            <br />
                            {t('index_wallets7')}
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}

export default account
