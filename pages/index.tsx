import React, { useState } from 'react'
import type { NextPage } from 'next'
import { Header, Footer } from '../src/components'
import Image from 'next/image'
import xWall from '../src/images/iconos/ssi_icon_60px_xWallets.svg'
import NFT from '../src/images/iconos/ssi_icon_60px_NFT.svg'
import RecSoc from '../src/images/iconos/ssi_icon_60px_RecSoc.svg'
import SocTree from '../src/images/iconos/ssi_icon_60px_SocTree.svg'
import Commun from '../src/images/iconos/ssi_icon_60px_balanza.svg'
import DIDx from '../src/images/iconos/ssi_icon_60px_DIDx.svg'
import ZILx from '../src/images/iconos/ssi_icon_60px_ZILx.svg'
import SBT from '../src/images/iconos/ssi_icon_60px_SBT.svg'
import DomName from '../src/images/iconos/ssi_icon_60px_DomName.svg'
import Tydra from '../src/images/iconos/ssi_icon_60px_Tydra.svg'
import Lssi from '../src/images/iconos/ssi_icon_60px_Lssi.svg'
import gZil from '../src/images/iconos/ssi_icon_60px_gZILDomName.svg'
import app_didx from '../src/images/didxwallet.png'
import app_RecSoc from '../src/images/socialrecovery.png'
import app_SocTree from '../src/images/socialtree.png'
import KvmeFelen from '../src/images/ejemplo_kf.jpg'
import screenshoot_app from '../src/images/screenshoot-app.gif'
import tw from '../src/images/socialmedia/soc_twitter_light.svg'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { text } from 'stream/consumers'

const Component: NextPage = () => {
    const { t } = useTranslation()
    const [nftSection, setNftSection] = useState(1)

    const nftSectionRender = () => {
        if (nftSection === 3) {
            return (
                <div className="nftSectionDesc">
                    <div
                        style={{ marginTop: '-20px' }}
                        id="nftlink"
                        className="h_titleContent2"
                    >
                        LEXICA.SSI
                    </div>
                    <div className="nftSectionDescTitleHighlight" />
                    <div className="h_txtContent">
                        {t('index_lexica1')}
                        <a href="http://lexica.art/">lexica.art</a>
                        {t('index_lexica2')}
                        <br />
                        {t('index_lexica3')}
                        <br />
                        {t('index_lexica4')}
                    </div>
                </div>
            )
        } else if (nftSection === 2) {
            return (
                <div className="nftSectionDesc">
                    <div
                        style={{ marginTop: '-20px' }}
                        id="nftlink"
                        className="h_titleContent2"
                    >
                        TYDRAS
                    </div>
                    <div className="nftSectionDescTitleHighlight" />
                    <div className="h_txtContent">
                        {t('index_tot1')} {t('index_tot2')}
                        <br />
                        {t('index_tot3')}
                        <br />
                        {t('index_tot4')}
                        <br />
                        {t('index_tot5')}
                        <a href="https://www.tyron.io/origin/">
                            {t('index_tot6')}
                        </a>
                        , {t('index_tot7')}
                    </div>
                </div>
            )
        } else {
            return (
                <div className="nftSectionDesc">
                    <div
                        style={{ marginTop: '-20px' }}
                        id="nftlink"
                        className="h_titleContent2"
                    >
                        {t('NFT DOMAIN NAME')}
                    </div>
                    <div className="nftSectionDescTitleHighlight" />
                    <div className="h_txtContent">
                        {t('index_nft1')}
                        <br />
                        {t('index_nft2')}
                        <br />
                        {t('index_nft3')}
                    </div>
                </div>
            )
        }
    }

    return (
        <>
            <div className="h_header">
                <Header />
            </div>
            <div className="h_headWrapper">
                <a className="link_iconos" href="#xwalletlink">
                    <div className="link_iconos">
                        <Image
                            className="h_headIco"
                            src={xWall}
                            alt="menu-ico"
                        />
                    </div>
                </a>
                <a className="link_iconos" href="#nftlink">
                    <div>
                        <Image className="h_headIco" src={NFT} alt="menu-ico" />
                    </div>
                </a>
                <a className="link_iconos" href="#recsoclink">
                    <div>
                        <Image
                            className="h_headIco"
                            src={RecSoc}
                            alt="menu-ico"
                        />
                    </div>
                </a>
                <a className="link_iconos" href="#soctreelink">
                    <div>
                        <Image
                            className="h_headIco"
                            src={SocTree}
                            alt="menu-ico"
                        />
                    </div>
                </a>
                <a className="link_iconos" href="#communlink">
                    <div>
                        <Image
                            className="h_headIco"
                            src={Commun}
                            alt="menu-ico"
                        />
                    </div>
                </a>
            </div>
            <br />
            <br />

            <div style={{ display: 'flex', width: '65%' }}>
                <div className="h_txtContent_kf">
                    <span id="italicas">Kvme Felen</span>{' '}
                    {t('index_kvmefelen1')}{' '}
                    <span id="italicas">Buen Vivir</span>
                    {t('index_kvmefelen2')}
                    <br />
                    {t('index_kvmefelen3')}
                    <span id="italicas">ixokomfijmogen</span>{' '}
                    {t('index_kvmefelen4')}
                    <br />
                    {t('index_kvmefelen5')}
                    <span id="italicas">Kvme Felen</span>
                    {t('index_kvmefelen6')}
                    <br />
                    <br />
                    <Image className="indexImg" src={KvmeFelen} alt="paisaje" />
                </div>
            </div>

            <div className="indice_majin" id="xwalletlink"></div>

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
                                                href="#didxlink"
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
            </table>
            <div className="indice_majin2" id="didxlink"></div>

            <div className="aboutTxt" style={{ marginTop: '10rem' }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Image
                        className="h_imgContent_DIDx"
                        src={DIDx}
                        alt="content-ico"
                    />
                    <div style={{ width: '50%' }}>
                        <div className="h_titleContent">DIDxWALLET</div>
                        <div className="h_txtContent">
                            {t('index_wallets1')}
                            <br />
                            {t('index_wallets2')}
                            <br />
                            {t('index_wallets3')}
                            <br />
                            <br />
                            <br />
                            <br />
                        </div>
                    </div>
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
                </div>
                {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Image
                        className="homePageImg"
                        src={app_didx}
                        alt="img-didx"
                    />
                </div> */}

                <div className="indice_majin" id="zilxlink"></div>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
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
                </div>
            </div>
            <div className="indice_majin2" id="recsoclink"></div>
            <br />
            <br />
            <br />

            <div className="aboutTxt" style={{ marginTop: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ width: '50%' }}>
                        <div className="h_titleContent_majin2">
                            {t('SOCIAL RECOVERY')}
                        </div>
                        <br />
                        <div className="h_txtContent">
                            {t('index_recsoc1')}
                            <br />
                            {t('index_recsoc2')}
                            <br />
                            {t('index_recsoc3')}
                        </div>
                    </div>
                    <Image
                        className="h_imgContentRight_RecSoc"
                        src={RecSoc}
                        alt="content-ico"
                    />
                </div>
                <br />
                <br />
                <br />
                <br />
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
                </div>
                {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Image
                        className="homePageImg"
                        src={app_RecSoc}
                        alt="img-RecSoc"
                    />
                </div> */}
                <div className="indice_majin" id="nftlink"></div>
                <br />

                <div
                    style={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <div style={{ width: '90%' }}>
                        <div className="nftWrapperSectionHead">
                            <div>
                                <Image
                                    className="h_imgContent_majin2"
                                    src={NFT}
                                    alt="content-ico"
                                />
                            </div>
                            <div
                                style={{ marginLeft: '3rem' }}
                                className="h_titleContent_majinWhite"
                            >
                                {t('index_nfts')}
                            </div>
                        </div>
                        <div className="nftWrapperSectionIco">
                            <div
                                onMouseOver={() => setNftSection(1)}
                                className="nftSectionIco"
                            >
                                <a
                                    className="link_iconos nftSectionIco"
                                    // href="#domnamelink"
                                    title="NFTs"
                                >
                                    <div>
                                        <Image
                                            className="h_headIco_indice"
                                            src={DomName}
                                            alt="menu-ico"
                                        />
                                    </div>
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
                                    <div>
                                        <Image
                                            className="h_headIco_indice"
                                            src={Tydra}
                                            alt="menu-ico"
                                        />
                                    </div>
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
                                    <div style={{ marginTop: '10px' }}>
                                        <Image
                                            className="h_headIco_indice"
                                            src={Lssi}
                                            alt="menu-ico"
                                        />
                                    </div>
                                </a>
                                <div className="nftSectionIcoBarWrapper">
                                    <div className="nftSectionIcoBar2" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="nftSectionDescWrapper">
                        {nftSectionRender()}
                    </div>
                </div>
                <div className="indice_majin" id="domnamelink"></div>
            </div>

            <div className="indice_majin" id="soctreelink"></div>
            <div className="aboutTxt">
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
                <br />
                <br />
                <br />
                <br />
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
                </div>
                {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Image
                        className="homePageImg"
                        src={app_SocTree}
                        alt="img-SocialTree"
                    />
                </div> */}
            </div>
            <div className="indice_majin2" id="communlink"></div>
            <br />
            <br />

            <div
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
            </div>
            <br />
            <br />
            <br />
            <div
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
            </div>
        </>
    )
}

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common'])),
    },
})

export default Component
