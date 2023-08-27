import React from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import dao1 from '../src/images/ssi_dao_logo_iso_400px.png'
import daotree from '../src/images/dao_socialtree.png'
import tyronSsi from '../src/images/tyron_ssi.png'
import tyronPungtas from '../src/images/logo.png'
import legalEntities from '../src/images/legal_entities.webp'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

const Component: NextPage = () => {
    const { t } = useTranslation()
    return (
        <div
            className="contentBody"
            style={{ justifyContent: 'center', display: 'flex', zIndex: 1 }}
        >
            <div className="contentCenter">
                <div style={{ fontWeight: 'bold', fontSize: '50px' }}>DAO</div>
                <br />
                <div className="dao_flexContent">
                    <div className="dao_flexContentTxt">
                        {t('dao1')} 
                        <a href="https://tyron.network/tyronmapu">
                            Tyron Mapu CIC
                        </a>
                        , {t('dao2')}{' '}
                        <span id="italicas">
                            Decentralized Autonomous Organization
                        </span>
                        {t('dao3')} 
                        <br />
                        <br />
                        <div className="dao_wrapperTyronSsi">
                            <Image
                                className="dao_titleImg"
                                src={dao1}
                                alt="dao-1"
                            />
                        </div>
                        <br />
                        <br />
                        {t('dao4')}
                        <br />
                        <br />
                        {t('dao5')}
                        <br />
                        {t('dao6')}
                        <br />
                        {t('dao7')}
                        <br />
                        <br />
                        {t('dao8')}
                        <br />
                        {t('dao9')}
                        {t('dao10')} 
                        <a href="https://tyron.network/tyron">Tyron Mapu</a>,{' '}
                        <span id="italicas">Community Interest Company</span>
                        {t('dao11')}
                        <br />
                        <br />
                        {t('dao12')}
                        <br />
                        {t('dao13')}
                        <br />
                        <br />
                        <br />
                        {t('dao14')}
                        <span id="italicas">Kvme Felen.</span>
                        {t('dao15')}
                        <br />
                        <br />
                        {t('dao16')}
                        <br />
                        {t('dao17')}
                        <br />
                        {t('dao18')}
                        <br />
                        <br />
                        {t('dao19')}
                        <br />
                        <br />
                        <br />
                        <br />
                        {t('dao20')}
                        <br />
                        {t('dao21')}
                        <br />
                        {t('dao22')}
                        <br />
                        <br />
                        {t('dao23')}
                        <a href="https://www.tyron.network/tyrondao">
                            tyrondao.ssi
                        </a>
                        {t('dao24')}
                        <br />
                        <br />
                    </div>
                </div>
                <div className="dao_wrapperTyronSsi">
                    <Image
                        src={daotree}
                        className="dao_tyronSsi"
                        alt="daotree-ssi"
                    />
                </div>

                {/* 
                <div className="dao_wrapperTyronSsi">
                    <a
                        className="dao_tyronSsiTitle"
                        href="https://tyron.network/tyron"
                    >
                        tyron.ssi
                    </a>
                    <br />
                    
                </div>
                <br />
                <div style={{ width: '60%' }}>
                    {t('dao11')}
                    <br />
                    <br />
                </div>
                <div className="dao_entities">
                    <div>
                        <Image
                            className="dao_entitiesImg"
                            src={dao2}
                            alt="dao-2"
                        />
                    </div>
                    <div style={{ width: '60%' }}>
                        &#183;{' '}
                        <a href="https://tyron.network/tyronmapu">Tyron Mapu</a>
                        :{' '}
                        {t(
                            'dao12'
                        )}
                        <br />
                        {t('dao13')}
                    </div>
                </div>
                <br />
                <div className="dao_entities">
                    <div>
                        <Image
                            className="dao_entitiesImg"
                            src={tyronPungtas}
                            alt="tyron-pungtas"
                        />
                    </div>
                    <div style={{ width: '60%' }}>
                        &#183; Tyron Pungtas:{' '}
                        {t(
                            'dao14'
                        )}
                    </div>
                </div>
                <br />
                <br />
                <div className="dao_flexContent">
                    <div className="dao_flexContentTxt">
                        {t(
                            'dao15'
                        )}
                    </div>
                    <div>
                        <Image
                            className="dao_legalImg"
                            width={200}
                            height={200}
                            src={legalEntities}
                            alt="legal-entities"
                        />
                    </div>
                </div>
                <br /> */}
            </div>
        </div>
    )
}

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common'])),
    },
})

export default Component
