import React, { Component } from "react";
import Logo from './Logo';
import Socials from './Socials'

class Header extends Component{
    constructor() {
        super();
    }

    render() {
        return (
            <div id="header">
                <Logo />
                <nav id="nav">
                    <span className="headerLink">Works</span>
                    <span className="headerDivider"></span>
                    <span className="headerLink">About</span>
                    <span className="headerDivider"></span>
                    <span className="headerLink">Contact</span>
                </nav>
                <Socials />
            </div>
        )
    }
}

export default Header