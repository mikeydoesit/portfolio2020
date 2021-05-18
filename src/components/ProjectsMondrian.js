import React, { Component } from 'react';

export default class ProjectsMondrian extends Component{
    constructor() {
        super();
    }

    render() {
        return (
                <div id="projectsMondrian">
                    <div className="tile" id="image1"><div className="image"></div></div>
                    <div className="tile" id="image2"><div className="image"></div></div>
                    <div className="tile" id="image3"><div className="image"></div></div>
                </div>
        )
    }
}