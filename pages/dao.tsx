import React from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import dao1 from '../src/images/dao_1.png'
import dao2 from '../src/images/dao_2.png'

const Component: NextPage = () => {
    return (
        <div className="contentBody">
            <div className="aboutTxt">
                <div style={{ fontWeight: 'bold', fontSize: '50px' }}>DAO</div>
                <div className="center">
                    <Image width={200} height={200} src={dao1} alt="dao-1" />
                </div>
                <br />
                La administración del proyecto es llevada a cabo por la Tyron
                Coop, una organización autónoma descentralizada (DAO), compuesta
                por les co-fundadores y desarrolladores del Protocolo de
                Identidades Autosoberanas.
                <br />
                <br />
                La Coop es un grupo multidisciplinario que se encarga de
                trabajar en las diversas áreas necesarias para llevar adelante
                el protocolo sobre la red descentralizada de identidades
                autosoberanas: la Red TYRON.
                <br />
                <br />
                Las especializaciones de les integrantes de la Coop abarcan:
                <br />
                <br />
                - Programación e ingeniería en blockchain
                <br />
                - Antropología
                <br />
                - Pedagogía
                <br />
                - Geología
                <br />
                - Psicología
                <br />
                - Diseño Gráfico
                <br />
                - Análisis técnico del mercado, entre otros conocimientos
                <br />
                <br />
                El principio de la Coop es el de la tecnología relacional, por
                lo que el acceso a formar parte de la organización es libre, con
                el objetivo de que se sumen personas que quieran colaborar con
                el proposito de crear un sistema inclusivo, equitativo y en pos
                del desarrollo y del Buen Vivir.
                <br />
                <br />
                Esta DAO tiene dos entidades legales:
                <br />
                <br />-{' '}
                <a href="http://tyron.network/tyronmapu/tree">Tyron Mapu</a>:
                una Compañía de Interés Comunitario (*CIC, Community Interest
                Company*) que está registrada en el Reino Unido y su labor es
                ofrecer servicios de información.
                <br />
                - Tyron Pungtas: una empresa privada registrada en Singapur. Su
                actividad principal es el desarrollo de portales web.
                <br />
                <br />
                Estas entidades legales que conforman a la Coop ayudan a
                conservar la postura relacional para que el protocolo de la Red
                TYRON no se pueda corromper y prevalezca la cooperación en red
                en el abordaje de las problemáticas sociales, medioambiantales y
                educativas existentes. Dichas problemáticas se abordarán a
                través de los tres ejes de Tyron Mapu y Tyron Pungtas dará su
                apoyo para desarrollar el Protocolo de Identidades Autosoberanas
                por medio de la Coop.
                <br />
                <br />
                <br />
                <div style={{ fontWeight: 'bold', fontSize: '30px' }}>
                    Tyron Mapu
                </div>
                <div className="center">
                    <Image width={200} height={200} src={dao2} alt="dao-2" />
                </div>
                <br />
                Tyron Mapu, además de ser una Compañía de Interés Comunitario,
                es una identidad descentralizada dentro de la Red TYRON, cuyo
                objetivo principal es ofrecer servicios de información que
                permitan revincular la tecnología y su utilidad con proyectos
                comunitarios para el cuidado de la naturaleza y en pos del bien
                común.
                <br />
                <br />
                Como Compañía de Interés Comunitario, el 65% de las ganancias
                obtenidas deben reinvertirse en la comunidad, y Tyron Mapu lo
                hará a través de tres ejes de acción con sus respectivas
                identidades descentralizadas:
                <br />
                <br />- Injusticias sociales: <b>inequality.did</b>
                <br />- Educación tecnológica: <b>technology.did</b>
                <br />- Revinculación y remediación del medioambiente:{' '}
                <b>ecocide.did</b>
                <br />
                <br />
                Para conocer más sobre Tyron Mapu y sus ejes de acción visitá{' '}
                <a href="https://www.notion.so/a35290cb04f546ec8c0e669ef0f7e258">
                    Tyron Mapu CIC
                </a>
                .<br />
                <br />
                <br />
                <div style={{ fontWeight: 'bold', fontSize: '30px' }}>
                    Tyron Pungtas
                </div>
                <br />
                Es una empresa privada limitada por acciones, incorporada en la
                República de Singapur bajo la Ley de Compañías, Capítulo 50.
                <br />
                <br />
                Su actividad principal es el desarrollo de portales web, en el
                desarrollo de software y aplicaciones descentralizadas de código
                abierto, como la DIDxWallet (una billetera Web3 de contratos
                inteligentes), y otras aplicaciones para facilitarte la gestión
                digital y el control sobre tus datos.
                <br />
                <br />
                Esta empresa se creó con el objetivo de poder realizar diversas
                transacciones dentro del marco legal correspondiente y
                encargarse de la contabilidad y finanzas de la Coop, por ejemplo
                la venta de tokens TYRON, en pos del desarrollo de la Red TYRON.
                <br />
                <br />
            </div>
        </div>
    )
}

export default Component
