import type { NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { HomePage } from '../src/components'

const Home: NextPage = () => {
    return (
        <HomePage>
            <div />
        </HomePage>
    )
}

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common'])),
    },
})

export default Home
