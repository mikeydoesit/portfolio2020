import React, { Component } from 'react';
import CTAbutton from './CTAbutton.js';

export default class CTA extends Component{
    constructor() {
        super();
    }
    render() {
        return (
        <div id="cta">
            <h1>Michael Obeng</h1>
            <p>Full Stack Developer based in London</p>
            <CTAbutton />
        </div>
        )
        
    }
}