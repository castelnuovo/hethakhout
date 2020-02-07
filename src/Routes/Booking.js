import React from 'react';
import { useParams } from 'react-router';
import withBaseRoute from 'Utils/withBaseRoute';
import BookingContainer from 'Components/Booking';

const Booking = () => {
    const { id } = useParams();

    return (
        <section className="section">
            <div className="container">
                <BookingContainer id={id} />
            </div>
        </section>
    );
};

export default withBaseRoute(Booking);
