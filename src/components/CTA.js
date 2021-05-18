import React, { Component } from 'react';
import CTAbutton from './CTAbutton.js';

export default class CTA extends Component{
    constructor() {
        super();
    }
    render() {
        return (
        <div id="cta-container">
            <div id="cta">
                <div id="cta-inner">
                    <h1>Michael Obeng</h1>
                    <p>Full Stack Developer based in London</p>
                    <CTAbutton label="View CV" icon="faPlay"/>
                </div>
            </div>
        </div>
        )
        
    }
}