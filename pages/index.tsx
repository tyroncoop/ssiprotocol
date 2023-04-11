import React from 'react'
import type { NextPage } from 'next'
import { Header, Footer } from '../src/components'
import Image from 'next/image'
import xWall from '../src/images/iconos/ssi_icon_60px_xWallets.svg'
import NFT from '../src/images/iconos/ssi_icon_60px_NFT.svg'
import RecSoc from '../src/images/iconos/ssi_icon_60px_RecSoc.svg'
import SocTree from '../src/images/iconos/ssi_icon_60px_SocTree.svg'
import Commun from '../src/images/iconos/ssi_icon_60px_CommunGen.svg'
import DIDx from '../src/images/iconos/H_DIDx.svg'
import ZILx from '../src/images/iconos/ssi_icon_60px_ZILx.svg'
import SBT from '../src/images/iconos/ssi_icon_60px_SBT.svg'
import DomName from '../src/images/iconos/ssi_icon_60px_DomName.svg'
import Tydra from '../src/images/iconos/ssi_icon_60px_Tydra.svg'
import Lssi from '../src/images/iconos/ssi_icon_60px_Lssi.svg'
import gZil from '../src/images/iconos/ssi_icon_60px_gZILDomName.svg'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

const Component: NextPage = () => {
    const { t } = useTranslation()
    return (
        <>
            <div className="h_header">
                <Header />
            </div>
            <div className="h_headWrapper">
                <a href="#xwalletlink">
                    <div>
                        <Image
                            className="h_headIco"
                            src={xWall}
                            alt="menu-ico"
                        />
                    </div>
                </a>
                <a href="#nftlink">
                    <div>
                        <Image className="h_headIco" src={NFT} alt="menu-ico" />
                    </div>
                </a>
                <a href="#recsoclink">
                    <div>
                        <Image
                            className="h_headIco"
                            src={RecSoc}
                            alt="menu-ico"
                        />
                    </div>
                </a>
                <a href="#soctreelink">
                    <div>
                        <Image
                            className="h_headIco"
                            src={SocTree}
                            alt="menu-ico"
                        />
                    </div>
                </a>
                <a href="#communlink">
                    <div>
                        <Image
                            className="h_headIco"
                            src={Commun}
                            alt="menu-ico"
                        />
                    </div>
                </a>
            </div>

            <div id="xwalletlink">
                <br />
                <br />
                <br />
            </div>
            <div
                id="#xwallets"
                className="aboutTxt"
                style={{ marginTop: '10rem' }}
            >
                <div style={{ display: 'flex' }}>
                    <Image
                        className="h_imgContent"
                        src={DIDx}
                        alt="content-ico"
                    />
                    <div style={{ width: '80%' }}>
                        <div className="h_titleContent">DIDxWALLET</div>
                        <div className="h_txtContent">
                            {t('index_wallets1')}
                            <br />
                            {t('index_wallets2')}
                            <br />
                            {t('index_wallets3')}
                        </div>
                    </div>
                </div>
                <br />
                <div style={{ display: 'flex' }}>
                    <Image
                        className="h_imgContent"
                        src={ZILx}
                        alt="content-ico"
                    />
                    <div style={{ width: '80%' }}>
                        <div className="h_titleContent">
                            ZIL STAKING xWALLET
                        </div>
                        <div className="h_txtContent">
                            {t('index_wallets4')}
                            <br />
                            {t('index_wallets5')}
                        </div>
                    </div>
                </div>
                <br />
                <div style={{ display: 'flex' }}>
                    <Image
                        className="h_imgContent"
                        src={SBT}
                        alt="content-ico"
                    />
                    <div style={{ width: '80%' }}>
                        <div className="h_titleContent">SBTxWALLET</div>
                        <div className="h_txtContent">
                            {t('index_wallets6')}
                            <br />
                            {t('index_wallets7')}
                        </div>
                    </div>
                </div>
            </div>
            <div id="recsoclink">
                <br />
                <br />
                <br />
            </div>
            <div
                id="#socrec"
                className="aboutTxt"
                style={{ marginTop: '2rem' }}
            >
                <div style={{ display: 'flex' }}>
                    <div style={{ width: '80%' }}>
                        <div className="h_titleContent">
                            {t('SOCIAL RECOVERY')}
                        </div>
                        <div className="h_txtContent">
                            {t('index_recsoc1')}
                            <br />
                            {t('index_recsoc2')}
                            <br />
                            {t('index_recsoc3')}
                        </div>
                    </div>
                    <Image
                        className="h_imgContentRight"
                        src={RecSoc}
                        alt="content-ico"
                    />
                </div>
                <br />
            </div>
            <div id="nftlink">
                <br />
                <br />
                <br />
            </div>
            <div id="#nft" className="aboutTxt" style={{ marginTop: '2rem' }}>
                <div style={{ display: 'flex' }}>
                    <Image
                        className="h_imgContent"
                        src={DomName}
                        alt="content-ico"
                    />
                    <div style={{ width: '80%' }}>
                        <div id="nftlink" className="h_titleContent">
                            {t('NFT DOMAIN NAME')}
                        </div>
                        <div className="h_txtContent">
                            {t('index_nft1')}
                            <br />
                            {t('index_nft2')}
                            <br />
                            {t('index_nft3')}
                        </div>
                    </div>
                </div>
                <br />
                <div style={{ display: 'flex' }}>
                    <Image
                        className="h_imgContent"
                        src={Tydra}
                        alt="content-ico"
                    />
                    <div style={{ width: '80%' }}>
                        <div className="h_titleContent">TYDRAS</div>
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
                </div>
                <br />
                <div style={{ display: 'flex' }}>
                    <Image
                        className="h_imgContent"
                        src={Lssi}
                        alt="content-ico"
                    />
                    <div style={{ width: '80%' }}>
                        <div className="h_titleContent">LEXICA.SSI</div>
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
                </div>
            </div>
            <div id="soctreelink">
                <br />
                <br />
                <br />
            </div>
            <div
                id="#socialtree"
                className="aboutTxt"
                style={{ marginTop: '2rem' }}
            >
                <div style={{ display: 'flex' }}>
                    <div style={{ width: '80%' }}>
                        <div className="h_titleContent">{t('SOCIAL TREE')}</div>
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
                        className="h_imgContentRight"
                        src={SocTree}
                        alt="content-ico"
                    />
                </div>
                <br />
            </div>
            <div id="communlink">
                <br />
                <br />
                <br />
            </div>
            <div
                id="#community"
                className="aboutTxt"
                style={{ marginTop: '2rem', marginBottom: '100px' }}
            >
                <div style={{ display: 'flex' }}>
                    <Image
                        className="h_imgContent"
                        src={Commun}
                        alt="content-ico"
                    />
                    <div className="h_titleContent">COMMUNITY.SSI</div>
                    <div className="h_txtContent">
                        {t('index_community1')}
                        <br />
                        {t('index_community1')}
                        <br />{' '}
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
        </>
    )
}

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common'])),
    },
})

export default Component
