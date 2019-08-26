import React from 'react';
import PropTypes from 'prop-types';
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

Icon.propTypes = {
    type: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    options: PropTypes.object
};

export default Icon;
