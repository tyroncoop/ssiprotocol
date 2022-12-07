import React from 'react';
import styles from './styles.module.scss';
import Logo from '../../images/logo.png';
import Image from 'next/image';
import { useRouter } from 'next/router';

function Menu() {
    const Router = useRouter()
    const handleOnClick = () => {
        window.open("https://tyron.network")
    };

    const isActive = (id: string) => {
        const path = Router.asPath
        if (path.includes(id)) {
            return true
        } else {
            return false
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapperLeft}>
                <div onClick={() => Router.push('/')} className={styles.logo}>
                    <Image width={50} src={Logo} alt="logo" />
                </div>
                <div onClick={() => Router.push('/about')} className={isActive('about') ? styles.txtMenuActive : styles.txtMenu}>ABOUT</div>
                <div onClick={() => Router.push('/tyronzil')} className={isActive('tyronzil') ? styles.txtMenuActive : styles.txtMenu}>tyronZIL</div>
                <div onClick={() => Router.push('/tutorials')} className={isActive('tutorials') ? styles.txtMenuActive : styles.txtMenu}>TUTORIALS</div>
                <div onClick={() => Router.push('/whitepaper')} className={isActive('whitepaper') ? styles.txtMenuActive : styles.txtMenu}>WHITEPAPER</div>
                <div onClick={() => Router.push('/dao')} className={isActive('dao') ? styles.txtMenuActive : styles.txtMenu}>DAO</div>
            </div>
            <button className={styles.button} onClick={handleOnClick}>
                tyron.network
            </button>
        </div>
    );
}
export default Menu;