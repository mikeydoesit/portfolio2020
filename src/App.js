import React, { Component } from 'react';
import Homepage from './components/Homepage';
import './App.scss';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

export default class App extends Component{
    constructor() {
        super();
    }

    render() {
        return (
            <div id="app">
                <Homepage />
                <Projects />
                <About />
                <Contact />
            </div>
        );
    }
}