import React, { Component } from 'react';
import Homepage from './components/Homepage';
import './App.scss';
import Projects from './components/Projects.js';

export default class App extends Component{
    constructor() {
        super();
    }

    render() {
        return (
            <div id="app">
                <Homepage />
                <Projects />
            </div>
        );
    }
}