import React from 'react';
import BookingContact from './BookingContact';
import BookingOptions from './BookingOptions';
import BookingSuccess from './BookingSuccess';

const BookingContent = ({
    state,
    data,
    errors,
    register,
    activeOptions,
    setActiveOptions
}) => {
    switch (state) {
        case 0:
            return <BookingContact register={register} errors={errors} />;

        case 1:
            return (
                <BookingOptions
                    options={data.options}
                    activeOptions={activeOptions}
                    setActiveOptions={setActiveOptions}
                />
            );

        case 2:
            return (
                <BookingSuccess title={data.title} category={data.category} />
            );

        default:
            return <h1>Bel Luca Castelnuovo</h1>;
    }
};

export default BookingContent;
