import React from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUser,
    faPlusSquare,
    faCheck
} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const BookingSteps = ({ state, options, requestState }) => {
    const classesState0 = classNames('steps-segment', {
        'is-active': state === 0,
        'has-gaps': state === 0
    });

    const classesState1 = classNames('steps-segment', {
        'is-active': state === 0,
        'has-gaps': state === 0
    });

    const classesState2 = classNames('steps-segment', 'is-unselectable', {
        'is-active': state === 0,
        'has-gaps': state === 0
    });

    return (
        <ul className="level-item steps is-medium is-centered has-content-centered is-horizontal">
            <li className={classesState0} onClick={() => requestState(0)}>
                <span className="steps-marker">
                    <span className="icon">
                        <FontAwesomeIcon icon={faUser} />
                    </span>
                </span>
                <div className="steps-content">
                    <p className="heading">Contact Informatie</p>
                </div>
            </li>
            {options.length !== 0 && (
                <li className={classesState1} onClick={() => requestState(1)}>
                    <span className="steps-marker">
                        <span className="icon">
                            <FontAwesomeIcon icon={faPlusSquare} />
                        </span>
                    </span>
                    <div className="steps-content">
                        <p className="heading">Extra's</p>
                    </div>
                </li>
            )}
            <li className={classesState2}>
                <span className="steps-marker">
                    <span className="icon">
                        <FontAwesomeIcon icon={faCheck} />
                    </span>
                </span>
                <div className="steps-content">
                    <p className="heading">Bevestiging</p>
                </div>
            </li>
        </ul>
    );
};

BookingSteps.propTypes = {
    state: PropTypes.number.isRequired,
    options: PropTypes.number.isRequired,
    requestState: PropTypes.func.isRequired
};

export default BookingSteps;
