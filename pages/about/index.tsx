import React from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import placeholder from '../../src/images/placeholder.webp'

const Component: NextPage = () => {
    const { t } = useTranslation()
    return (
        <div
            className="contentBody"
            style={{ justifyContent: 'center', display: 'flex', zIndex: 1 }}
        >
            <div className="contentCenter">
                <div className="title1">{t('About')}</div>
                <br />
                <div className="content1">
                    {t(
                        'Tyron originates from a critical and conscious view of the damage that some technologies (their human utility) cause to nature. The founder of the SSI Protocol graduated in petroleum engineering, and during his professional career, he learned about the effects of this extractive industry. His experience allowed him to understand that behind the exploitation of natural resources lies a logic of domination and commodification of nature for the economic benefit of a few people.'
                    )}
                    <br />
                    <br />
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Image
                            className="aboutImg"
                            src={placeholder}
                            alt="img-about"
                        />
                    </div>
                    <br />
                    <br />
                    {t(
                        "TYRON, a decentralized network of Self-sovereign identities, was created in these circumstances. The word tyron derives from the Greek turannos, meaning 'sovereign'. Thus, the purpose of the TYRON Network is to give you sovereignty over your data. Sovereignty to empower the world and improve our security, with no need to exploit nature to do so, by using new Web3 technologies."
                    )}
                    <br />
                    <br />
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Image
                            className="aboutImg"
                            src={placeholder}
                            alt="img-about"
                        />
                    </div>
                    <br />
                    <br />
                    {t(
                        'The TYRON Network enables people to manage their digital identities, proving who they are without intermediaries. This functionality gets achieved by anchoring Decentralized Identifiers (DIDs) on blockchain platforms as a shared root of trust. With these technologies, we can have legitimacy as users without handing over the control of our data to a centralized authority or third parties. With TYRON, you can become the owner of your identity and financial assets.'
                    )}
                    <br />
                    <br />
                    {t(
                        'The administration of the project is carried out by the Tyron Coop, a decentralized autonomous organization (DAO).'
                    )}
                </div>
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
