import React from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import dao1 from '../src/images/dao_1.png'
import dao2 from '../src/images/dao_2.png'
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
                        <a href="https://tyron.network/tyron">Tyron DAO</a>,{' '}
                        {t('dao2')}
                        <br />
                        <br />
                        {t('dao3')} 
                        <a href="https://tyron.network/tyron.did">tyron.did</a>.{' '}
                        {t('dao4')}
                    </div>
                    <div>
                        <Image
                            className="dao_titleImg"
                            src={dao1}
                            alt="dao-1"
                        />
                    </div>
                </div>
                <br />
                <div className="dao_wrapperTyronSsi">
                    <a
                        className="dao_tyronSsiTitle"
                        href="https://tyron.network/tyron"
                    >
                        tyron.ssi
                    </a>
                    <br />
                    <div>
                        <Image
                            src={tyronSsi}
                            className="dao_tyronSsi"
                            alt="tyron-ssi"
                        />
                    </div>
                </div>
                <br />
                <br />
                <div style={{ width: '60%' }}>
                    {t('dao5 {{colon}} the', { colon: ':' })}{' '}
                    <a href="https://tyron.network">TYRON Network</a>.<br />
                    <br />
                    {t('dao6')}
                    <br />
                    &#183; {t('dao7')}
                    <br />
                    &#183; {t('dao8')}
                    <br />
                    &#183; {t('dao9')}
                    <br />
                    <br />
                    {t('dao10')}
                </div>
                {/* <br />
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
