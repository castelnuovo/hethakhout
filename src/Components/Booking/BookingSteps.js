import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUser,
    faPlusSquare,
    faCheck
} from '@fortawesome/free-solid-svg-icons';

const BookingSteps = ({ state, options, requestState }) => {
    return (
        <ul className="steps is-medium is-centered has-content-centered is-horizontal">
            <li
                className={`steps-segment ${state === 0 &&
                    'is-active has-gaps'}`}
                onClick={() => requestState(0)}
            >
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
                <li
                    className={`steps-segment ${state === 1 &&
                        'is-active has-gaps'}`}
                    onClick={() => requestState(1)}
                >
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
            <li
                className={`steps-segment ${state === 2 &&
                    'is-active has-gaps'}`}
                onClick={() => requestState(2)}
            >
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

export default BookingSteps;
