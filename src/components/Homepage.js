import React, { Component } from "react";
import Header from "./Header";
import CTA from './CTA';

export default class Homepage extends Component{
    constructor(){
        super();
    }
    render() {
        return (
            <div id="homepage">
                <Header />
                <CTA />
            </div>
        )
    }
}