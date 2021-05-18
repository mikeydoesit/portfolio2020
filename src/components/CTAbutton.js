import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faPlay } from '@fortawesome/free-solid-svg-icons';

export default class CTAbutton extends Component{
    constructor(props){
        super(props);
        this.state = {
            playButton: null
        }
    }

    componentDidMount(){
        if(this.props.icon == 'faPlay') {
            this.setState({
                playButton: true
            })
        }
    }

    render() {
        return (
            <div id="ctaButton">
                <div id="iconWrapper">
                <FontAwesomeIcon icon={this.state.playButton ? faPlay : faDownload} size="xs"/>
                </div>
                <span>{this.props.label}</span>
            </div>
        )
    }
}