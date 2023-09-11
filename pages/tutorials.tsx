import React from 'react'
import type { NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Component: NextPage = () => {
    const { t } = useTranslation()
    return (
        <div className="contentBody">
            <div className="t_tutorialRow">
                <div className="t_tutorialWrapper">
                    <div className="t_tutorialTitle">{t('tutorial_1')}</div>
                    <iframe
                        className="iFrame"
                        src="https://www.youtube.com/embed/4i7nXiC80v0?controls=1"
                        title="TUTORIAL: New DIDxWALLET & NFT Domain Name"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="t_tutorialWrapper">
                    <div className="t_tutorialTitle">{t('tutorial_2')}</div>
                    <iframe
                        className="iFrame"
                        src="https://www.youtube.com/embed/-87iQbhdhGs?controls=1"
                        title="TUTORIAL: Activate NFT Social Recovery"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
            <div className="t_tutorialRow">
                <div className="t_tutorialWrapper">
                    <div className="t_tutorialTitle">{t('tutorial_3')}</div>
                    <iframe
                        className="iFrame"
                        src="https://www.youtube.com/embed/sYfYY3q5m9M?controls=1"
                        title="TUTORIAL: Tydra of Tyron NFT"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
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
