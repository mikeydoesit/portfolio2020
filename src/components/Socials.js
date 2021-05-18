import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export default class Socials extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="socialIcon">
                <FontAwesomeIcon icon={this.props.icon} size="xs" color="white" />
            </div>
        )
    }
}