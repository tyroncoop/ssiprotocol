import React from 'react'
import SwipeableViews from 'react-swipeable-views'
import styles from './styles.module.scss' // Asumiendo que tienes estilos SCSS
import Image from 'next/image'
import DEFIxWALLET from '../../images/iconos/ssi_ICOh_defixwallet_100px.svg'

const account = () => {
    return (
        <div className={styles.container}>
            <Image className={styles.img} src={DEFIxWALLET} alt="DEFIxWALLET" />
            <SwipeableViews enableMouseEvents>
                <div className={styles.wrapper}>
                    <div className={styles.card}>Card 1</div>
                    <div className={`${styles.card} ${styles.cardNext}`}></div>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.card}>Card 2</div>
                    <div className={`${styles.card} ${styles.cardNext}`}></div>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.card}>Card 3</div>
                </div>
            </SwipeableViews>
        </div>
    )
}

export default account
