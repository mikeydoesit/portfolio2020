import { faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import React, { Component } from "react";
import Logo from './Logo';
import Socials from './Socials';

class Header extends Component{
    constructor() {
        super();

        this.scrollMachine = this.scrollMachine.bind(this)
    }

    scrollMachine(section) {
        let destinationElement = section.target.innerHTML;
        let sanitizedElement = destinationElement.toLowerCase();
        const pleaseTakeThisElementAnd = document.getElementById(sanitizedElement);

        pleaseTakeThisElementAnd.scrollIntoView({behaviour: 'smooth', block: 'start'});
    }

    render() {
        return (
            <div id="header">
                <Logo />
                <nav id="nav">
                    <span className="headerLink" onClick={this.scrollMachine}>Works</span>
                    <span className="headerDivider"></span>
                    <span className="headerLink" onClick={this.scrollMachine}>About</span>
                    <span className="headerDivider"></span>
                    <span className="headerLink" onClick={this.scrollMachine}>Contact</span>
                </nav>
                <div id="socials">
                    <Socials icon={faTwitter} />
                    <Socials icon={faLinkedinIn} />
                </div>
                
            </div>
        )
    }
}

export default Header