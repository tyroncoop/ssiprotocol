import React from 'react'
import type { NextPage } from 'next'
import { Header, Footer } from '../src/components'
import Image from 'next/image'
import xWall from '../src/images/H_xWallets.svg'
import NFT from '../src/images/H_NFT.svg'
import RecSoc from '../src/images/H_RecSoc.svg'
import SocTree from '../src/images/H_SocTree.svg'
import Commun from '../src/images/H_Commun.svg'
import DIDx from '../src/images/H_DIDx.svg'
import ZILx from '../src/images/H_ZILx.svg'
import SBT from '../src/images/H_SBT.svg'
import DomName from '../src/images/H_DomName.svg'
import Tydra from '../src/images/H_Tydra.svg'
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
                <div className="h_headIco">
                    <Image src={xWall} alt="menu-ico" />
                </div>
                <div className="h_headIco">
                    <Image src={NFT} alt="menu-ico" />
                </div>
                <div className="h_headIco">
                    <Image src={RecSoc} alt="menu-ico" />
                </div>
                <div className="h_headIco">
                    <Image src={SocTree} alt="menu-ico" />
                </div>
                <div className="h_headIco">
                    <Image src={Commun} alt="menu-ico" />
                </div>
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
                        <div style={{ fontWeight: 'bold', fontSize: '25px' }}>
                            DIDxWALLET
                        </div>
                        {t(
                            'Your decentralized identity on the TYRON Network includes a non-custodied Web3 digital wallet that acts as the main head of your identity.'
                        )}
                        <br />
                        {t(
                            'You can make withdrawals and deposits in a 100% decentralized way, with all ZIL cryptocurrencies and ZRC2 tokens (including stable currencies such as the Singapore dollar XSGD and the Tether dollar USDT).'
                        )}
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
                        <div style={{ fontWeight: 'bold', fontSize: '25px' }}>
                            ZIL STAKING xWALLET
                        </div>
                        {t(
                            'Delegate your ZILs to the Zillion staking dApp, while maintaining the security features of the TYRON Network.'
                        )}
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
                        <div style={{ fontWeight: 'bold', fontSize: '25px' }}>
                            SOULBOUND xWALLET
                        </div>
                        {t(
                            'The SBTxWallet is a solution to avoid giving out personal data over and over again on private servers.'
                        )}
                        <br />
                        {t(
                            'With this xWallet, you will be able to acquire and store Soulbound Tokens, increasing the security of your data and access to different sites.'
                        )}
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <div
                id="#socrec"
                className="aboutTxt"
                style={{ marginTop: '2rem' }}
            >
                <div style={{ display: 'flex' }}>
                    <div style={{ width: '80%' }}>
                        <div style={{ fontWeight: 'bold', fontSize: '25px' }}>
                            {t('SOCIAL RECOVERY')}
                        </div>
                        {t(
                            'Social Recovery is a feature of your self-sovereign identity that allows you to update your private key address through Guardians, so that you do not run the risk of losing access to your account.'
                        )}
                    </div>
                    <Image
                        className="h_imgContentRight"
                        src={RecSoc}
                        alt="content-ico"
                    />
                </div>
                <br />
            </div>
            <br />
            <br />
            <br />
            <div id="#nft" className="aboutTxt" style={{ marginTop: '2rem' }}>
                <div style={{ display: 'flex' }}>
                    <Image
                        className="h_imgContent"
                        src={DomName}
                        alt="content-ico"
                    />
                    <div style={{ width: '80%' }}>
                        <div style={{ fontWeight: 'bold', fontSize: '25px' }}>
                            {t('NFT DOMAIN NAME')}
                        </div>
                        {t(
                            'Assign to your identity the Domain Name(s) you want, according to the use you are going to give it.'
                        )}
                        <br />
                        {t(
                            'The NFT Domain Name works as an alias that will allow you to make transactions easily.'
                        )}
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
                        <div style={{ fontWeight: 'bold', fontSize: '25px' }}>
                            TYDRAS
                        </div>
                        {t(
                            "Tydras are NFTs that represent an analogy of how relational technology, advanced in Tyron's"
                        )}{' '}
                        <a href="https://www.tyron.io/origin/">{t('origin')}</a>
                        ,{' '}
                        {t(
                            'is possible with Web3 and blockchain using these NFTs for recognition and access to communities and the future metaverse.'
                        )}
                        <br />
                        {t(
                            'Get them in your DIDxWallet and enjoy their benefits!'
                        )}
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <div
                id="#socialtree"
                className="aboutTxt"
                style={{ marginTop: '2rem' }}
            >
                <div style={{ display: 'flex' }}>
                    <div style={{ width: '80%' }}>
                        <div style={{ fontWeight: 'bold', fontSize: '25px' }}>
                            {t('SOCIAL TREE')}
                        </div>
                        {t(
                            'In your social tree, you can share website addresses that are important to you, such as your projects, social networks, websites or whatever you want!'
                        )}
                        <br />
                        {t(
                            'Also, as part of your DIDxWallet, your social tree has a direct access to receive donations or tips from your fans directly in your self-sovereign identity.'
                        )}
                        <br />
                        {t("Get to know TYRON's social tree")}{' '}
                        <a href="www.tyron.network/ssiprotocol">
                            www.tyron.network/ssiprotocol
                        </a>
                    </div>
                    <Image
                        className="h_imgContentRight"
                        src={SocTree}
                        alt="content-ico"
                    />
                </div>
                <br />
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
                    <Image
                        className="h_imgContent"
                        src={Commun}
                        alt="content-ico"
                    />
                    <div style={{ width: '80%' }}>
                        <div style={{ fontWeight: 'bold', fontSize: '25px' }}>
                            COMMUNITY.SSI
                        </div>
                        {t(
                            'COMMUNITY_1'
                        )}
                        <br />
                        <br />
                        <div style={{ fontWeight: 'bold', fontSize: '25px' }}>
                            {t('TYRON Token')}
                        </div>
                        {t(
                            'TYRON is a fungible token to be used in exchange for joining the TYRON Governing & Profit-Sharing Community and accessing other products and services on the TYRON Network, such as NFT Domain Names. It is also possible to transmute TYRON into Self-Sovereign Identity Dollars ($SI), a stablecoin utilized to buy NFT Domain Names and participate in DeFi applications on the TYRON Network.'
                        )}
                        <br />
                        <br />
                        <div style={{ fontWeight: 'bold', fontSize: '25px' }}>
                            {t('Self-Sovereign Identity Dollar')}
                        </div>
                        {t(
                            'The Self-Sovereign Identity Dollar ($SI) is a decentralized stablecoin equivalent to one US dollar.'
                        )}{' '}
                        {t(
                            'On the Zilliqa platform, this parity is as follows'
                        )}
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
