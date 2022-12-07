import React from "react";
import logo from '../images/tyron_logo.png';
import { Link } from "react-router-dom";
import SSIBrowser from "./SSIBrowser";
import Image from 'next/image'

function Header() {
    return(
        <>
        <SSIBrowser />
        <div id="header">
            <Image src={logo} width="200" alt="tyron_logo"/>
            <div className="content">
                <div className="inner">
                    <h1>Self-Sovereign Identity Protocol</h1>
                    <p>Own your data. Empower your world.</p>
                </div>
            </div>
            <nav>
                <ul>
                    <li>
                        <a
                            href="https://ssiprotocol.notion.site/ssiprotocol/TYRON-Whitepaper-5ca16fc254b343fb90cfeb725cbfa2c3"
                            rel="noreferrer" target="_blank"
                        >
                            whitepaper
                        </a>
                    </li>
                </ul>
            </nav>
            <nav>
                <ul>
                    {/* <li><Link to="/about">About</Link></li>
                    <li><Link to="/wallets">DID<span style={{ textTransform: 'lowercase'}}>x</span>Wallet</Link></li>
                    <li><Link to="/contact">Contact</Link></li> */}
                </ul>
            </nav>
        </div>
        </>
    )
}

export default Header;
