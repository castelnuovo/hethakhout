import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = props => {
    return (
        <span className="icon">
            <FontAwesomeIcon
                icon={[props.type, props.icon]}
                {...props.options}
            />
        </span>
    );
};

export default Icon;
