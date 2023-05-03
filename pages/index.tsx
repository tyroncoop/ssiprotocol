import React from 'react'
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

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { text } from 'stream/consumers'

const Component: NextPage = () => {
    const { t } = useTranslation()
    return (
        <>
            <div className="h_header">
                <Header />
            </div>
            <div className="h_headWrapper">
                <a className= "link_iconos" href="#xwalletlink">
                    <div className='link_iconos'>
                        <Image
                            className="h_headIco"
                            src={xWall}
                            alt="menu-ico"
                        />
                    </div>
                </a>
                <a className='link_iconos' href="#nftlink">
                    <div>
                        <Image className="h_headIco" src={NFT} alt="menu-ico" />
                    </div>
                </a>
                <a className='link_iconos' href="#recsoclink">
                    <div>
                        <Image
                            className="h_headIco"
                            src={RecSoc}
                            alt="menu-ico"
                        />
                    </div>
                </a>
                <a className='link_iconos' href="#soctreelink" >
                    <div>
                        <Image
                            className="h_headIco"
                            src={SocTree}
                            alt="menu-ico"
                        />
                    </div>
                </a>
                <a className='link_iconos' href="#communlink">
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
        
            <div style={{ display: 'flex' , width: '65%' }}>
        
            <div className="h_txtContent_kf">
             <span id='italicas'>Kvme Felen</span> {t('index_kvmefelen1')} <span id='italicas'>Buen Vivir</span>
                {t('index_kvmefelen2')}
                <br />
                {t('index_kvmefelen3')}<span id='italicas'>ixokomfijmogen</span> {t('index_kvmefelen4')}
                <br />
                {t('index_kvmefelen5')}<span id='italicas'>Kvme Felen</span>{t('index_kvmefelen6')}
                <br />
                <br />
                <Image
                className="indexImg"
                src={KvmeFelen}
                alt="paisaje"
                        />
                </div>                
                </div>
            

            <div className='indice_majin' id="xwalletlink">
            </div>
            
            <table>
                <tr>
                    <th><Image
                        className="h_imgContent_majin"
                        src={xWall}
                        alt="content-ico"
                    /></th>
                    <th>
                        <div className="h_titleContent_majin">xWALLETS
                        </div>
                        <table>
                        <tr className='majin2'>
                            <th><a className='link_iconos' href="#didxlink" title='DIDxWALLET'>
                    <div><Image className="h_headIco_indice" src={DIDx} alt="menu-ico" /></div>
                    </a></th>
                            <th><a className='link_iconos' href="#zilxlink" title='ZILxWALLET'>
                    <div><Image className="h_headIco_indice" src={ZILx} alt="menu-ico" /></div>
                    </a> </th>
                            <th><a className='link_iconos' href="#sbtxlink"title='SBTxWALLET'>
                    <div><Image className="h_headIco_indice" src={SBT} alt="menu-ico" /></div>
                    </a></th>
                            </tr>
                            </table> </th>
                </tr>
            </table>
            <div className='indice_majin2' id="didxlink">
            </div>
        
            <div
                className="aboutTxt"
                style={{ marginTop: '10rem' }}
            >
                <div style={{ display: 'flex' }}>
                    <Image
                        className="h_imgContent_DIDx"
                        src={DIDx}
                        alt="content-ico"
                    />
                    <div style={{ width: '70%'}}>
                        <div className="h_titleContent">DIDxWALLET
                        </div>
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
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Image
                            className="homePageImg"
                            src={app_didx}
                            alt="img-didx"
                        />
                    </div>
                   

        <div className='indice_majin' id="zilxlink">
            </div>

                <div style={{ display: 'flex' }}>
                    <Image
                        className="h_imgContent_DIDx"
                        src={ZILx}
                        alt="content-ico"
                    />
                    <div style={{ width: '50%' }}>
                        <div className="h_titleContent">ZIL STAKING xWALLET</div>
                        <br />
                        <div className="h_txtContent">
                            {t('index_wallets4')}
                            <br />
                            {t('index_wallets5')}
                        </div>
                    </div>
                </div>
                <br />

            <div className='indice_majin' id="sbtxlink">
            </div>
                <div style={{ display: 'flex' }}>
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
            <div className='indice_majin2' id="recsoclink">
            </div>
            <br />
            <br />
            <br />

            <div
                className="aboutTxt"
                style={{ marginTop: '2rem' }}
            >
                <div style={{ display: 'flex' }}>
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
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Image
                            className="homePageImg"
                            src={app_RecSoc}
                            alt="img-RecSoc"
                        />
                    </div>
                <div className='indice_majin' id="nftlink">
            </div>
            <br />

            
            <table>
                <tr>
                    <th><Image
                        className="h_imgContent_majin"
                        src={NFT}
                        alt="content-ico"
                    /></th>
                    <th>
                        <div className="h_titleContent_majin">{t('index_nfts')}
                        </div>
                        <table>
                        <tr className='majin2'>
                            <th><a className='link_iconos' href="#domnamelink" title='NFTs'>
                    <div><Image className="h_headIco_indice" src={DomName} alt="menu-ico" /></div>
                    </a></th>
                            <th><a className='link_iconos' href="#tydraslink" title='TYDRAS'>
                    <div><Image className="h_headIco_indice" src={Tydra} alt="menu-ico" /></div>
                    </a> </th>
                            <th><a className='link_iconos' href="#lexlink"title='LEXICA.SSI'>
                    <div><Image className="h_headIco_indice" src={Lssi} alt="menu-ico" /></div>
                    </a></th>
                            </tr>
                            </table> </th>
                </tr>
            </table>
            <div className='indice_majin' id="domnamelink">
            </div>

            </div>
           
            <div className="aboutTxt" style={{ marginTop: '2rem' }}>
                <div style={{ display: 'flex' }}>
                    <Image
                        className="h_imgContent_DIDx"
                        src={DomName}
                        alt="content-ico"
                    />
                    <div style={{ width: '60%' }}>
                        <div id="nftlink" className="h_titleContent">
                            {t('NFT DOMAIN NAME')}
                        </div>
                        <br />

                        <div className="h_txtContent">
                            {t('index_nft1')}
                            <br />
                            {t('index_nft2')}
                            <br />
                            {t('index_nft3')}
                        </div>
                    </div>
                </div>
                
                <div className='indice_majin' id="tydraslink">
            </div>

                <div style={{ display: 'flex' }}>
                    <Image
                        className="h_imgContent_DIDx"
                        src={Tydra}
                        alt="content-ico"
                    />
                    <div style={{ width: '60%' }}>
                        <div className="h_titleContent">TYDRAS</div>
                        <br />

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
            
                <div className='indice_majin2' id="lexlink">
            </div>
            <br />
            <br />
            <br />


                <div style={{ display: 'flex' }}>
                    <Image
                        className="h_imgContent_DIDx"
                        src={Lssi}
                        alt="content-ico"
                    />
                    <div style={{ width: '70%' }}>
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
            <div className='indice_majin' id="soctreelink">
            </div>
            <div
                className="aboutTxt"
                style={{ marginTop: '2rem' }}
            >
                <div style={{ display: 'flex' }}>
                    <div style={{ width: '60%' }}>
                        <div className="h_titleContent_majin2">{t('SOCIAL TREE')}</div>
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
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Image
                            className="homePageImg"
                            src={app_SocTree}
                            alt="img-SocialTree"
                        />
                    </div>
            </div>
            <div className='indice_majin2' id="communlink">
            </div>
            <br />
            <br />

            <div
                className="aboutTxt"
                style={{ marginTop: '2rem', marginBottom: '100px' }}
            >
                <div style={{ display: 'flex' }}>
                    <Image
                        className="h_imgContent_DIDx"
                        src={Commun}
                        alt="content-ico"
                    />
                    <div style={{ width: '65%' }}>
                    <div className="h_titleContent_majin2">COMMUNITY.SSI</div>
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
                
                    <div className='contacto' style={{ width: '80%' }}>
                    
                    <div className="h_titleContent">{t('index_contacto')}</div>
                    <div className="h_txtContent">
                        <ul>
                            <br />
                            <li className='contacto_2'>
                                <i></i>
                                <p><strong>Email:  </strong> <a href=""></a><span className='contacto_3'>team@ssiprotocol.com</span></p>
                                
                            </li>
                            <li className='contacto_2'>
                                <i></i>
                                <p><strong>{t('index_web')}:  </strong><a href="www.ssiprotocol.com"><span className='contacto_3'>www.ssiprotocol.com</span></a></p>
                                
                            </li>
                            <li className='contacto_2'>
                                <i></i>
                                <p><strong>Blog:  </strong> <a href="https://www.tyron.io/"><span className='contacto_3'>www.tyron.io</span></a></p>
                                
                            </li>
                            <li className='contacto_2'>
                                <i></i>
                                <p><strong>Github:  </strong> <span className='contacto_3'><a className='contacto_4' href="https://github.com/tyroncoop">www.github.com/tyroncoop</a></span></p>
                                
                            </li>
                            <li className='contacto_2'>
                            <i></i>
                            <p><strong>LinkedIn:  </strong><a href="https://www.linkedin.com/company/tyronssi/"><span className='contacto_3'>www.linkedin.com/company/tyronssi/</span></a></p>
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
