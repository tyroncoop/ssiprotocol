import React from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const Component: NextPage = () => {
    const Router = useRouter()
    return (
            <div>
                <div className='aboutWrapperBtn'>
                    <div onClick={() => Router.push('/about/castellano')} className='btnYellow'>About en Español</div>
                </div>
                <div className='aboutTxt'>
                    <div className='aboutTxtTitle'>About</div>
                    El Protocolo de Identidades Autosoberanas desarrolla aplicaciones descentralizadas y otros programas de código abierto para impulsar la Red TYRON y proporcionar igualdad de oportunidades financieras a todes sus usuaries.

                    Una identidad digital en la Red TYRON está compuesta por contratos inteligentes, que son propiedad del usuarie, y conforman una identidad autosoberana *(o SSI: self-sovereign identity*); o sea, es una cuenta de usuarie diseñada con tecnologías descentralizadas, para darte un total control sobre tus datos y finanzas. Incluye una [billetera digital](https://www.notion.so/f4c6ecd8c367476f8db15f33784c24d3) y una identidad descentralizada, y tiene un Nombre de Usuarie *NFT* (Non-Fungible Token o en castellano: ****token no fungible) que la identifica en la Red TYRON. De este modo, el nombre *NFT* permite las funcionalidades de Recuperación Social **y Credenciales Verificables, lo que mejora la seguridad y experiencia en línea.

                    En concreto, una *SSI* está formada por contratos inteligentes con la capacidad de ejecutar transacciones de forma independiente y gestionar tus datos (incluidos los activos financieros), demostrando quién tiene la propiedad de la cuenta, sin necesidad de terceros, de un registro centralizado o de empresas intermediarias. Y es todo de código abierto, lo que significa que el software está disponible para tu lectura, entendimiento e iteración para ampliar y complejizar las funcionalidades de tu *SSI*.

                    La Red TYRON pretende ser totalmente descentralizada, animando a todo el mundo a alzar su voz. Por ello, el protocolo incluye una aplicación descentralizada de gobierno y reparto de ganancias: la TYRON Community DApp.

                    <aside>
                    ❓ La palabra *tyron* deriva del griego *turannos*, que significa 'soberano'. El propósito del Protocolo de Identidades Autosoberanas es dar a las personas soberanía sobre sus datos. Soberanía para empoderar nuestro mundo y mejorar nuestra seguridad en línea.

                    </aside>
                </div>
            </div>
    )
}

export default Component
