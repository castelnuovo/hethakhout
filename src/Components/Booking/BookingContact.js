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
                    required: 'Name is required',
                    minLength: {
                        value: 4,
                        message: 'Minimum length is 4'
                    },
                    maxLength: {
                        value: 64,
                        message: 'Maximum length is 64'
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
                    required: 'Email is required',
                    pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Email must be valid'
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
                    required: 'Phone is required',
                    minLength: {
                        value: 8,
                        message: 'Minimum length is 8'
                    },
                    maxLength: {
                        value: 15,
                        message: 'Maximum length is 15'
                    }
                }}
                error={errors.phone}
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
