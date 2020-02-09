import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const BookingSuccess = ({ title, category }) => {
    const activityURL = `/activiteit/${category.toLowerCase()}/${title
        .toLowerCase()
        .replace(/ /g, '-')}`;

    return (
        <>
            <div className="is-relative">
                <StyledContainer>
                    <span className="icon is-large has-text-primary">
                        <FontAwesomeIcon icon={faCheckCircle} size="3x" />
                    </span>
                </StyledContainer>
            </div>

            <div className="has-text-centered">
                <h1 className="title">Boeking Bevestigd</h1>
                <hr />
                <p className="is-size-3">
                    Wij zullen spoedig contact met u opnemen om een datum te
                    prikken.
                </p>
            </div>

            <br />

            <div className="buttons has-addons is-centered">
                <Link as="button" to={activityURL} className="button is-large">
                    De Activiteit
                </Link>
                <Link as="button" to="/" className="button is-large">
                    Naar Home
                </Link>
            </div>
        </>
    );
};

export default BookingSuccess;
