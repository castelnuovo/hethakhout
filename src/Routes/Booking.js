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
                        id="1"
                        title="Lange route"
                        description="beschrijving"
                    />
                    <BookingItem
                        id="2"
                        title="Korte route"
                        description="beschrijving"
                    />
                </BookingCategory>
                <BookingCategory title="Shinrin-Yoku">
                    <BookingItem id="3" title="test1" description="test2" />
                </BookingCategory>
                <BookingCategory title="Lezingen">
                    <BookingItem
                        id="4"
                        title="Lezing 1"
                        description="beschrijving"
                    />
                </BookingCategory>
                <BookingCategory title="Vogels">
                    <BookingItem
                        id="5"
                        title="Vogelaarshut huren"
                        description="beschrijving"
                    />
                </BookingCategory>
                <BookingCategory title="Jeugd-activiteiten">
                    <BookingItem
                        id="6"
                        title="Voetballen"
                        description="beschrijving"
                    />
                    <BookingItem
                        id="7"
                        title="Schieten"
                        description="beschrijving"
                    />
                    <BookingItem
                        id="8"
                        title="Zwemmen"
                        description="beschrijving"
                    />
                </BookingCategory>
            </header>
        </section>
    );
};

export default withBaseRoute(Booking);
