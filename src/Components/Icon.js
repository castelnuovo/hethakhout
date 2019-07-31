import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
