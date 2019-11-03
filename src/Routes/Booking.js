import React from 'react';
import withBaseRoute from 'Utils/withBaseRoute';

import BookingCategory from 'Components/Booking/BookingCategory';
import BookingItem from 'Components/Booking/BookingItem';

const Booking = () => {
    return (
        <section className="section">
            <header className="container">
                <BookingCategory title="Wandelingen">
                    <BookingItem
                        title="Lange route"
                        description="beschrijving"
                    />
                    <BookingItem
                        title="Korte route"
                        description="beschrijving"
                    />
                </BookingCategory>
                <BookingCategory title="Shinrin-Yoku">
                    <BookingItem title="test1" description="test2" />
                </BookingCategory>
                <BookingCategory title="Lezingen">
                    <BookingItem title="Lezing 1" description="beschrijving" />
                </BookingCategory>
                <BookingCategory title="Vogels">
                    <BookingItem
                        title="Vogelaarshut huren"
                        description="beschrijving"
                    />
                </BookingCategory>
                <BookingCategory title="Jeugd-activiteiten">
                    <BookingItem
                        title="Voetballen"
                        description="beschrijving"
                    />
                    <BookingItem title="Schieten" description="beschrijving" />
                    <BookingItem title="Zwemmen" description="beschrijving" />
                </BookingCategory>
            </header>
        </section>
    );
};

export default withBaseRoute(Booking);
