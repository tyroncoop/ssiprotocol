import React from 'react'
import type { NextPage } from 'next'
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
                <div className="title1">{t('tyronZil1')}</div>
                <br />
                <div className="content1">
                    {t('tyronZil2a')}{' '}
                    <a href="https://www.ssiprotocol.com/">
                        Self-Sovereign Identity Protocol
                    </a>
                    . {t('tyronZil2b')}{' '}
                    <a href="https://w3c.github.io/did-spec-registries/">
                        W3C DID Specification Registries
                    </a>
                    , {t('tyronZil2c')}{' '}
                    <a href="https://www.zilliqa.com/">Zilliqa</a> {' '}
                    {t('tyronZil2d')}{' '}
                    <a href="https://www.zilhive.org/">ZILHive</a>
                    {t('tyronZil2e')}
                </div>
                <br />
                <button
                    className="btnLink"
                    onClick={() => window.open('https://tyronzil.com')}
                >
                    tyronzil.com
                </button>
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
