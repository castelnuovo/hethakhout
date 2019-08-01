import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

// Import required icons
import { faWalking } from '@fortawesome/free-solid-svg-icons';
library.add(faWalking);

const Icon = ({ type, icon, options }) => {
    return (
        <span className="icon">
            <FontAwesomeIcon icon={[type, icon]} {...options} />
        </span>
    );
};

// REQUIRED PROPS: type (string), icon (string)
// OPTIONAL PROPS: options (object)

export default Icon;
