import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Socials = () => {
    return (
        <div id="socials">
            <FontAwesomeIcon icon={faTwitter} color="white" />
            <FontAwesomeIcon icon={faLinkedinIn} color="white" />
        </div>
    )
}

export default Socials