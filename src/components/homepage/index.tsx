import React, { useState } from 'react'
import type { NextPage } from 'next'
import { Header, Footer, Account } from '../'
import Image from 'next/image'
import xWall from '../../images/iconos/ssi_icon_60px_xWallets.svg'
import ssiAccount from '../../images/iconos/ssi_icon_ssi-acc.svg'
import NFT from '../../images/iconos/ssi_icon_60px_NFT.svg'
import RecSoc from '../../images/iconos/ssi_icon_60px_RecSoc.svg'
import SocTree from '../../images/iconos/ssi_icon_60px_SocTree.svg'
import Commun from '../../images/iconos/ssi_icon_60px_balanza.svg'
import DIDx from '../../images/iconos/ssi_icon_didx.svg'
import DEFIx from '../../images/iconos/ssi_icon_defix.svg'
import DIDxImg from '../../images/iconos/ssi_ICO_didxwallet_100px.svg'

import ZILx from '../../images/iconos/ssi_icon_60px_ZILx.svg'
import SBT from '../../images/iconos/ssi_icon_60px_SBT.svg'
import DomName from '../../images/iconos/ssi_icon_60px_DomName.svg'
import Tydra from '../../images/iconos/ssi_icon_60px_Tydra.svg'
import Lssi from '../../images/iconos/ssi_icon_60px_Lssi.svg'
import gZil from '../../images/iconos/ssi_icon_60px_gZILDomName.svg'
import app_didx from '../../images/didxwallet.png'
import app_RecSoc from '../../images/socialrecovery.png'
import app_SocTree from '../../images/socialtree.png'
import KvmeFelen from '../../images/kvmeFelen.png'
import imgSocialRecovery from '../../images/test.gif'
import imgSocTree from '../../images/test.gif'

import screenshoot_app from '../../images/screenshoot-app.gif'
import tw from '../../images/socialmedia/soc_twitter_light.svg'

import { useTranslation } from 'next-i18next'
import styles from './styles.module.scss'

const Component: NextPage = () => {
    const { t } = useTranslation()
    const [nftSection, setNftSection] = useState(1)

    const nftSectionRender = () => {
        if (nftSection === 3) {
            return (
                <div>
                    <div className="h_titleContent2">lexica.ssi</div>
                    {/* <div className="nftSectionDescTitleHighlight" /> */}
                    <div className="h_txtContent">
                        {t('index_lexica1')}
                        <a href="http://lexica.art/">lexica.art</a>
                        {t('index_lexica2')}
                        <br />
                        <br />
                        {t('index_lexica3')}
                        <br />
                        <br />
                        {t('index_lexica4')}
                    </div>
                </div>
            )
        } else if (nftSection === 2) {
            return (
                <div>
                    <div className="h_titleContent2">TYDRAS</div>
                    {/* <div className="nftSectionDescTitleHighlight" /> */}
                    <div className="h_txtContent">
                        {t('index_tot1')} {t('index_tot2')}
                        <br />
                        <br />
                        {t('index_tot3')}
                        <br />
                        {t('index_tot4')}
                        <br />
                        <br />
                        {t('index_tot5')}
                        <a href="https://www.tyron.io/origin/">
                            {t('index_tot6')}
                        </a>
                        {t('index_tot7')}
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <div className="h_titleContent2">
                        {t('NFT DOMAIN NAME')}
                    </div>
                    {/* <div className="nftSectionDescTitleHighlight" /> */}
                    <div className="h_txtContent">
                        {t('index_nft1')} {t('index_nft2')}
                        <br />
                        <br />
                        {t('index_nft3')}
                    </div>
                </div>
            )
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className="h_header">
                <Header />
            </div>
            <div className={styles.headWrapper}>
                <a className="link_iconos" href="#account">
                    <div className="link_iconos">
                        <Image
                            className="h_headIco"
                            src={xWall}
                            alt="ssi-account-ico"
                        />
                    </div>
                </a>
                <a className="link_iconos" href="#socialrecovery">
                    <Image
                        className="h_headIco"
                        src={RecSoc}
                        alt="social-recovery-ico"
                    />
                </a>
                <a className="link_iconos" href="#nfts">
                    <Image className="h_headIco" src={NFT} alt="nfts-ico" />
                </a>
                <a className="link_iconos" href="#socialtree">
                    <Image
                        className="h_headIco"
                        src={SocTree}
                        alt="social-tree-ico"
                    />
                </a>
                {/* <a className="link_iconos" href="#communlink">
                    <Image
                            className="h_headIco"
                            src={Commun}
                            alt="menu-ico"
                        />
                </a> */}
            </div>

            {/* @dev: introduction */}
            <div className={styles.kvmeFelen}>
                <div className="h_txtContent_kf">
                    <span id="italicas">Kvme Felen</span>{' '}
                    {t('index_kvmefelen1')}{' '}
                    <span id="italicas">Buen Vivir</span>
                    {t('index_kvmefelen2')}
                    <br />
                    <br />
                    {t('index_kvmefelen3')}
                    <span id="italicas">ixokomfijmogen</span>{' '}
                    {t('index_kvmefelen4')}
                    <br />
                    <br />
                    {t('index_kvmefelen5')}
                    <span id="italicas">Kvme Felen</span>
                    {t('index_kvmefelen6')}
                </div>
                <Image
                    className={styles.indexImg}
                    src={KvmeFelen}
                    alt="Kvme Felen"
                />
            </div>

            {/* @dev: SSI account */}
            <table id="account" className={styles.section}>
                <thead className="noStyleThead">
                    <tr className="h_imgContent_majin_wrapper">
                        <th>
                            <Image
                                className={styles.imgIcon}
                                src={ssiAccount}
                                alt="account-ico"
                            />
                        </th>
                        <th className="h_imgContent_majin_wrapper2">
                            <div className={styles.title}>
                                Tyron SSI Account
                            </div>
                            <table>
                                <thead className="noStyleThead">
                                    <tr className="majin2">
                                        <th>
                                            <a
                                                className="link_iconos"
                                                href="#didxwallet"
                                                title="DIDxWALLET"
                                            >
                                                <Image
                                                    className={
                                                        styles.h_headIco_indice2
                                                    }
                                                    src={DIDx}
                                                    alt="didx-ico"
                                                />
                                            </a>
                                        </th>
                                        <th>
                                            <a
                                                className="link_iconos"
                                                href="#defixwallet"
                                                title="DEFIxWALLET"
                                            >
                                                <Image
                                                    className={
                                                        styles.h_headIco_indice2
                                                    }
                                                    src={DEFIx}
                                                    alt="defix-ico"
                                                />
                                            </a>
                                        </th>
                                    </tr>
                                </thead>
                            </table>
                        </th>
                    </tr>
                </thead>
            </table>
            {/* 
            <table>
                <thead className="noStyleThead">
                    <tr className="h_imgContent_majin_wrapper">
                        <th>
                            <Image
                                className="h_imgContent_majin"
                                src={xWall}
                                alt="content-ico"
                            />
                        </th>
                        <th className="h_imgContent_majin_wrapper2">
                            <div className="h_titleContent_majin">xWALLETS</div>
                            <table>
                                <thead className="noStyleThead">
                                    <tr className="majin2">
                                        <th>
                                            <a
                                                className="link_iconos"
                                                href="#didxwallet"
                                                title="DIDxWALLET"
                                            >
                                                <div>
                                                    <Image
                                                        className="h_headIco_indice2"
                                                        src={DIDx}
                                                        alt="menu-ico"
                                                    />
                                                </div>
                                            </a>
                                        </th>
                                        <th>
                                            <a
                                                className="link_iconos"
                                                href="#zilxlink"
                                                title="ZILxWALLET"
                                            >
                                                <div>
                                                    <Image
                                                        className="h_headIco_indice2"
                                                        src={ZILx}
                                                        alt="menu-ico"
                                                    />
                                                </div>
                                            </a>{' '}
                                        </th>
                                        <th>
                                            <a
                                                className="link_iconos"
                                                href="#sbtxlink"
                                                title="SBTxWALLET"
                                            >
                                                <div>
                                                    <Image
                                                        className="h_headIco_indice2"
                                                        src={SBT}
                                                        alt="menu-ico"
                                                    />
                                                </div>
                                            </a>
                                        </th>
                                    </tr>
                                </thead>
                            </table>{' '}
                        </th>
                    </tr>
                </thead>
            </table> */}
            {/* @dev: DIDxWALLET */}
            <div id="didxwallet" />
            <div className="aboutTxt" style={{ marginTop: '111px' }}>
                <div className={styles.wrapperSection}>
                    <Image
                        className="h_imgContent_DIDx"
                        src={DIDxImg}
                        alt="didxwallet-ico"
                    />
                    <div style={{ width: '100%' }}>
                        <div className="h_titleContent">
                            Decentralised Identifier Wallet
                        </div>
                        <div className="h_txtContent">
                            {t('index_wallets1')}
                            <br />
                            <br />
                            {t('index_wallets2')}
                            <br />
                            <br />
                            {t('index_wallets3')}
                        </div>
                    </div>
                </div>
                {/* <div className={styles.imgScreenCapWrapper}>
                    <Image
                        className={styles.imgScreenCap}
                        src={screenshoot_app}
                        alt="img-screencap"
                    />
                    <Image
                        className={styles.imgScreenCap}
                        src={screenshoot_app}
                        alt="img-screencap"
                    />
                </div> */}
                {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Image
                        className="homePageImg"
                        src={app_didx}
                        alt="img-didx"
                    />
                </div> */}
                {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Image
                        className="h_imgContent_DIDx"
                        src={ZILx}
                        alt="content-ico"
                    />
                    <div style={{ width: '50%' }}>
                        <div className="h_titleContent">
                            ZIL STAKING xWALLET
                        </div>
                        <br />
                        <div className="h_txtContent">
                            {t('index_wallets4')}
                            <br />
                            {t('index_wallets5')}
                        </div>
                    </div>
                </div>
                <br />
                <div className="indice_majin" id="sbtxlink"></div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Image
                        className="h_imgContent_DIDx"
                        src={SBT}
                        alt="content-ico"
                    />
                    <div style={{ width: '50%' }}>
                        <div className="h_titleContent">SBTxWALLET</div>
                        <br />
                        <div className="h_txtContent">
                            {t('index_wallets6')}
                            <br />
                            {t('index_wallets7')}
                        </div>
                    </div>
                </div> */}
            </div>

            {/* @dev: DEFIxWALLET */}
            <div id="defixwallet" />
            <Account />

            {/* @dev: social recovery */}
            <div id="socialrecovery" className={styles.subsection}>
                <div className={styles.img}>
                    <Image
                        className={styles.imgIcon}
                        src={RecSoc}
                        alt="content-ico"
                    />
                    <Image
                        className={styles.imgScreenCap}
                        src={imgSocialRecovery}
                        alt="img-soc-rec"
                    />
                </div>
                <div className={styles.subtitle}>{t('SOCIAL RECOVERY')}</div>
                <div className={styles.txtContent}>
                    {t('index_recsoc1')}
                    <br />
                    <br />
                    {t('index_recsoc2')}
                    <br />
                    <br />
                    {t('index_recsoc3')}
                </div>
                <div></div>
            </div>
            {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Image
                        className="homePageImg"
                        src={app_RecSoc}
                        alt="img-RecSoc"
                    />
                </div> */}
            {/* <div className="indice_majin" id="nftlink"></div> */}

            {/* @dev: NFTs */}
            <div id="nfts" className={styles.section}>
                <div className="wrapperSectionHead">
                    <Image
                        className="h_imgContent_majin2"
                        src={NFT}
                        alt="content-ico"
                        height="50"
                        width="50"
                    />
                    <div className="h_titleContent_majinWhite">
                        {t('index_nfts')}
                    </div>
                </div>
                <div className={styles.wrapperSection}>
                    <div
                        onMouseOver={() => setNftSection(1)}
                        className="nftSectionIco"
                    >
                        <a
                            className="link_iconos nftSectionIco"
                            // href="#domnamelink"
                            title="NFTs"
                        >
                            <Image
                                className="h_headIco_indice"
                                src={DomName}
                                alt="menu-ico"
                            />
                        </a>
                        <div className="nftSectionIcoBarWrapper">
                            <div className="nftSectionIcoBar" />
                        </div>
                    </div>
                    <div
                        onMouseOver={() => setNftSection(2)}
                        className="nftSectionIco"
                    >
                        <a
                            className="link_iconos nftSectionIco"
                            // href="#tydraslink"
                            title="TYDRAS"
                        >
                            <Image
                                className="h_headIco_indice"
                                src={Tydra}
                                alt="menu-ico"
                            />
                        </a>
                        <div className="nftSectionIcoBarWrapper">
                            <div className="nftSectionIcoBar" />
                        </div>
                    </div>
                    <div
                        onMouseOver={() => setNftSection(3)}
                        className="nftSectionIco"
                    >
                        <a
                            className="link_iconos"
                            // href="#lexlink"
                            title="LEXICA.SSI"
                        >
                            <Image
                                className="h_headIco_indice"
                                src={Lssi}
                                alt="menu-ico"
                            />
                        </a>
                        <div className="nftSectionIcoBarWrapper">
                            <div className="nftSectionIcoBar2" />
                        </div>
                    </div>
                </div>
                <div className={styles.sectionDesc}>{nftSectionRender()}</div>
            </div>
            {/* <div className="indice_majin" id="domnamelink"></div> */}

            {/* @dev: social tree */}
            <div id="socialtree" className={styles.subsection}>
                <div className={styles.img}>
                    <Image
                        className={styles.imgIcon}
                        src={SocTree}
                        alt="soctree-ico"
                    />
                    <Image
                        className={styles.imgScreenCap}
                        src={imgSocTree}
                        alt="img-soc-tree"
                    />
                </div>
                <div className={styles.subtitle}>{t('SOCIAL TREE')}</div>
                <div className={styles.txtContent}>
                    {t('index_tree1')}
                    <br />
                    <br />
                    {t('index_tree2')}
                    <br />
                    <br />
                    {t('index_tree3')}{' '}
                    <a href="https://www.tyron.network/ssiprotocol">
                        tyron.network/ssiprotocol
                    </a>
                </div>
                <div></div>
            </div>
            {/* <div className="aboutTxt">
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ width: '60%' }}>
                        <div className="h_titleContent_majin2">
                            {t('SOCIAL TREE')}
                        </div>
                        <br />

                        <div className="h_txtContent">
                            {t('index_tree1')}
                            <br />
                            {t('index_tree2')}
                            <br />
                            {t('index_tree3')}{' '}
                            <a href="www.tyron.network/ssiprotocol">
                                www.tyron.network/ssiprotocol
                            </a>
                        </div>
                    </div>
                    <Image
                        className="h_imgContentRight_RecSoc"
                        src={SocTree}
                        alt="content-ico"
                    />
                </div>
                <div className="imgScreenCapWrapper">
                    <Image
                        className="imgScreenCap"
                        src={screenshoot_app}
                        alt="img-screencap"
                    />
                    <Image
                        className="imgScreenCap"
                        src={screenshoot_app}
                        alt="img-screencap"
                    />
                </div> */}
            {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Image
                        className="homePageImg"
                        src={app_SocTree}
                        alt="img-SocialTree"
                    />
                </div> */}
            {/* </div> */}
            {/* <div className="indice_majin2" id="communlink"></div> */}
            {/* <div
                className="aboutTxt"
                style={{ marginTop: '2rem', marginBottom: '100px' }}
            >
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Image
                        className="h_imgContent_DIDx"
                        src={Commun}
                        alt="content-ico"
                    />
                    <div style={{ width: '65%' }}>
                        <div className="h_titleContent_majin2">
                            COMMUNITY.SSI
                        </div>
                        <br />
                        <div className="h_txtContent">
                            {t('index_community1')}
                            <br />
                            {t('index_community1')}
                            <br />{' '}
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <div
                id="#community"
                className="aboutTxt"
                style={{ marginTop: '2rem', marginBottom: '100px' }}
            >
                <div style={{ display: 'flex' }}>
                    <div className="contacto" style={{ width: '80%' }}>
                        <div className="h_titleContent">
                            {t('index_contacto')}
                        </div>
                        <div className="h_txtContent">
                            <ul>
                                <br />
                                <li className="contacto_2">
                                    <p>
                                        <strong>Email: </strong> <a href=""></a>
                                        <span className="contacto_3">
                                            team@ssiprotocol.com
                                        </span>
                                    </p>
                                </li>
                                <li className="contacto_2">
                                    <p>
                                        <strong>{t('index_web')}: </strong>
                                        <a href="www.ssiprotocol.com">
                                            <span className="contacto_3">
                                                www.ssiprotocol.com
                                            </span>
                                        </a>
                                    </p>
                                </li>
                                <li className="contacto_2">
                                    <p>
                                        <strong>Blog: </strong>{' '}
                                        <a href="https://www.tyron.io/">
                                            <span className="contacto_3">
                                                www.tyron.io
                                            </span>
                                        </a>
                                    </p>
                                </li>
                                <li className="contacto_2">
                                    <p>
                                        <strong>Github: </strong>{' '}
                                        <span className="contacto_3">
                                            <a
                                                className="contacto_4"
                                                href="https://github.com/tyroncoop"
                                            >
                                                www.github.com/tyroncoop
                                            </a>
                                        </span>
                                    </p>
                                </li>
                                <li className="contacto_2">
                                    <p>
                                        <strong>LinkedIn: </strong>
                                        <a href="https://www.linkedin.com/company/tyronssi/">
                                            <span className="contacto_3">
                                                www.linkedin.com/company/tyronssi/
                                            </span>
                                        </a>
                                    </p>
                                </li>
                            </ul>
                            <br />
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Component
