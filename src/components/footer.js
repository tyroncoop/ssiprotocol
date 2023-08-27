import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Selector from './Selector'

function Footer() {
    const Router = useRouter()
    const [lang, setLang] = useState('en')

    const changeLang = (val) => {
        window.localStorage.setItem('language', val)
        Router.push({}, Router.asPath, { locale: val })
    }

    useEffect(() => {
        const lang_ = window.localStorage.getItem('language')
        if (lang_) {
            setLang(lang_)
        }
    }, [])

    const langDropdown = [
        {
            value: 'en',
            label: `🇬🇧 English`,
        },
        {
            value: 'es',
            label: '🇪🇸 Spanish',
        },
    ]

    return (
        <>
            <div className="languageWrapper">
                {/* <div
                onClick={() => {
                    window.open('http://tyron.network/tyronmapu', '_self')
                }}
            >
                tyronmapu.ssi
            </div> */}
                <Selector
                    option={langDropdown}
                    onChange={changeLang}
                    placeholder={
                        langDropdown.filter((val_) => val_.value === lang)[0]
                            ?.label
                    }
                    menuPlacement="top"
                    searchable={false}
                    type="language"
                />
            </div>
            <footer id="footer">
                <p>
                    <a
                        className="icon brands fa-telegram"
                        href="https://t.me/ssiprotocol"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <span className="label">Telegram</span>
                    </a>
                </p>
                <p>
                    <a
                        className="icon brands fa-twitter"
                        href="https://twitter.com/ssiprotocol"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <span className="label">Twitter</span>
                    </a>
                </p>
                <p>
                    <a
                        className="icon brands fa-instagram"
                        href="https://www.instagram.com/ssiprotocol"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <span className="label">Instagram</span>
                    </a>
                </p>
                <p>
                    <a
                        className="icon brands fa-github"
                        href="https://github.com/tyroncoop"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <span className="label">GitHub</span>
                    </a>
                </p>
            </footer>
        </>
    )
}

export default Footer
