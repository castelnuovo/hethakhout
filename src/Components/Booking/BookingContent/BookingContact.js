import React from 'react';
import BookingContactInput from './BookingContactInput';
import BookingContactText from './BookingContactText';

const BookingContact = ({ register, errors }) => {
    return (
        <>
            <BookingContactInput
                id="name"
                title="Naam van groepsleider*"
                placeholder="volledige naam"
                register={register}
                settings={{
                    required: 'Naam is verplicht',
                    minLength: {
                        value: 4,
                        message: 'Minimum lengte is 4'
                    },
                    maxLength: {
                        value: 64,
                        message: 'Maximum lengte is 64'
                    }
                }}
                error={errors.name}
            />

            <BookingContactInput
                id="email"
                title="Email van groepsleider*"
                placeholder="welkom@hethakhout.nl"
                register={register}
                settings={{
                    required: 'Email is verplicht',
                    pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Email ongeldig'
                    }
                }}
                error={errors.email}
            />

            <BookingContactInput
                id="phone"
                title="Telefoonnummer van groepsleider*"
                placeholder="0612345678"
                register={register}
                settings={{
                    required: 'Telefoonnummer verplicht',
                    minLength: {
                        value: 8,
                        message: 'Minimum lengte is 8'
                    },
                    maxLength: {
                        value: 15,
                        message: 'Maximum lengte is 15'
                    }
                }}
                error={errors.phone}
            />

            <BookingContactInput
                id="participants"
                title="Aantal deelnemers*"
                placeholder="bijvoorbeeld. 4, 5-8, halve klas"
                register={register}
                settings={{
                    required: 'Aantal deelnemers is verplicht'
                }}
                error={errors.participants}
            />

            <BookingContactText
                id="comments"
                title="Opmerkingen"
                placeholder="Eventuele vragen of opmerkingen"
                register={register}
                settings={{}}
                error={errors.comments}
            />
        </>
    );
};

export default BookingContact;
