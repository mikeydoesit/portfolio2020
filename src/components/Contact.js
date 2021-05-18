import { faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import React, { Component } from 'react';
import ContactSVG from './svgs/ContactSVG';
import Socials from './Socials';

export default class Contact extends Component {
    constructor(){
        super();
    }

    render() {
        return (
            <div id="contact">
                <div id="left">
                    <div id="socialCTA">
                        <h1>Let's Build Your<br />Next Web App.</h1>
                        <div id="socials">
                            <Socials icon={faTwitter} />
                            <Socials icon={faLinkedinIn} />
                        </div>
                    </div>
                </div>
                <div id="right">
                    <div id="contactForm">
                        <h1>Contact Me</h1>
                        <form>
                            <div className="formItem">
                                <label htmlFor="name">Full Name</label>
                                <input type="text" id="name" />
                            </div>
                            <div className="formItem">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" />
                            </div>
                            <div className="formItem">
                                <label htmlFor="phone">Phone</label>
                                <input type="tel" id="phone"/>
                            </div>
                            <div className="formItem">
                                <label htmlFor="message">Comment</label>
                                <textarea id="message" rows="4" ></textarea>
                            </div>
                            <div id="submit" className="formItem">
                                <input type="submit" value="Send Message" />
                            </div>
                        </form>
                    </div>
                    <ContactSVG />
                </div>
                
            </div>
        )
    }
}