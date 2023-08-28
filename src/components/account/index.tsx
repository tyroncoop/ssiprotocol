import React from 'react'
import SwipeableViews from 'react-swipeable-views'
import styles from './styles.module.scss' // Asumiendo que tienes estilos SCSS

const account = () => {
    return (
        <div className={styles.container}>
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
