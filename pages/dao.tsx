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
        <div className="contentBody">
            <div className="aboutTxt">
                <div style={{ fontWeight: 'bold', fontSize: '50px' }}>DAO</div>
                <br />
                <div className="dao_flexContent">
                    <div className="dao_flexContentTxt">
                        {t(
                            'The coordination of the projects is the job of the'
                        )}
                         <a href="https://tyron.network/tyron">Tyron DAO</a>,{' '}
                        {t('a Decentralized Autonomous Organisation (DAO).')}
                        <br />
                        <br />
                        {t(
                            "On the TYRON Network, the DAO has a self-sovereign identity. You can access the organisation's DID Social Tree at"
                        )}
                         <a href="https://tyron.network/tyron.did">tyron.did</a>
                        .{' '}
                        {t(
                            'To find out about the Tyron Coop Minority Reports with the development info and other valuable information, such as the Gather Virtual Office 🔥.'
                        )}
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
                    {t(
                        'The DAO has a multidisciplinary team dubbed Tyron Coop. With contributors from independent projects working in various support areas to the decentralized network of self-sovereign identities: the'
                    )}{' '}
                    <a href="https://tyron.network">TYRON Network</a>.<br />
                    <br />
                    {t('The areas cover')}
                    <br />
                    &#183; {t('Engineering & software development')}
                    <br />
                    &#183; {t('Pedagogy & anthropology')}
                    <br />
                    &#183; {t('Design & technical analysis')}
                    <br />
                    <br />
                    {t(
                        'The principle of the Coop is to work holistically with independent projects and to encourage self-sovereignty in all developers.'
                    )}
                </div>
                <br />
                <div style={{ width: '60%' }}>
                    {t('The Tyron DAO has two legal entities:')}
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
                            'a Community Interest Company (CIC) registered in the UK, and that provides information services. By law, it must reinvest 65% of profits into the community.'
                        )}
                        <br />
                        {t('+info: tyronmapu.ssi')}
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
                            'a private company registered in Singapore, whose main activity is the development of web portals.'
                        )}
                    </div>
                </div>
                <br />
                <br />
                <div className="dao_flexContent">
                    <div className="dao_flexContentTxt">
                        {t(
                            'These legal entities support the DAO in maintaining a relational approach to technology. So that the protocol of the TYRON Network, the Self-Sovereign Identity Protocol, cannot be corrupted and to maintain a network of cooperation to address socio-economic and environmental issues. Tyron Mapu CIC will address these issues in three areas: social injustices, DeFi education, and remediation of the environment.'
                        )}
                    </div>
                    <div>
                        <Image
                            width={200}
                            height={200}
                            src={legalEntities}
                            alt="legal-entities"
                        />
                    </div>
                </div>
                <br />
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
