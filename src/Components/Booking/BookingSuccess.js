import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const BookingSuccess = () => {
    return (
        <section className="section">
            <StyledContainer className="container">
                <span className="icon is-large has-text-primary">
                    <i className="fas fa-9x fa-check-circle"></i>
                </span>
            </StyledContainer>
        </section>
    );
};

export default BookingSuccess;
