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
                    {t('about1')}
                    <br />
                    <br />
                    {t('about2')} <span id='italicas'>turannus</span>
                    {t('about3')}
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
                    {t('about4')}
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
                    {t('about5')}
                    <br />
                   
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
