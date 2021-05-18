import React, { Component } from 'react';
import ProjectsSVG from './svgs/ProjectsSVG';
import ProjectsMondrian from './ProjectsMondrian';

export default class Projects extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div id="works">
                <div id="projects-container">
                    <ProjectsSVG />
                    <ProjectsMondrian />
                </div>
            </div>
        )
    }
}