import React, { Component } from 'react';
import AboutSVG from './svgs/AboutSVG';
import CTAbutton from './CTAbutton';
import DummyText from './DummyText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

export default class About extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }

        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
    }

    handleNext() {
        const count = this.state.count;

        if(count >= 0 && count < 4) {
            this.setState({
                count: count + 1
            })
        };
    }
    handlePrev() {
        const count = this.state.count;

        if(count <= 4 && count > 0) {
            this.setState({
                count: count - 1
            })
        };
        
    }
    render() {
        const count = this.state.count;
        const text = DummyText.map((payload, index) => {
            return(
                <div className={`bioText ${count == index ? 'active' : ''}`} key={index} index={index}>
                    <p>{payload.para1}</p>
                    <p>{payload.para2}</p>
                </div>
            )
        })
        return (
            <div id="about">
                <AboutSVG />
                <div id="bio">
                    <div id="bioLeft">
                        <h1>My<br/>Profile</h1>
                        <CTAbutton label="Download CV" icon="faDownload" />
                    </div>
                    <div id="bioRight">
                        {text}
                        
                    </div>
                </div>
                <div id="nav">
                    <span className="navIcon">
                        <FontAwesomeIcon icon={faAngleLeft} onClick={this.handlePrev} />
                    </span>
                    <span className="navIcon">
                        <FontAwesomeIcon icon={faAngleRight} onClick={this.handleNext} />
                    </span>
                </div>
            </div>
        )
    }
}