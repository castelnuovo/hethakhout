import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useData from 'Utils/useData';
import BookingSteps from './BookingSteps';
import BookingContent from './BookingContent';
import BookingInfo from './BookingInfo';
import BookingButtons from './BookingButtons';

const Booking = ({ id }) => {
    const [state, setState] = useState(0);
    const [data, setData] = useState({});
    const { register, errors, triggerValidation, getValues } = useForm({
        mode: 'onBlur'
    });
    const { title, category, options } = useData(
        'activityData',
        'GET',
        'id',
        parseInt(id)
    );

    const requestState = async state => {
        if (state < 0 || state > 2) {
            return;
        }

        if (state === 1) {
            if (!(await triggerValidation())) {
                return;
            }

            setData(getValues());
        }

        if (state === 2) {
            onSubmit();

            return;
        }

        setState(state);
    };

    const setActiveOptions = activeOptions => {
        console.log('container', activeOptions);
        setData({ ...data, activeOptions });
    };

    const onSubmit = async () => {
        const url = 'https://enasazi9la05.x.pipedream.net';

        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(() => {
                setState(2);
            })
            .catch(error => {
                console.error('Error: ' + error);
            });
    };

    return (
        <form className="form">
            <BookingSteps
                state={state}
                options={options}
                requestState={requestState}
            />

            <BookingInfo title={title} category={category} />

            <BookingContent
                title={title}
                state={state}
                errors={errors}
                options={options}
                register={register}
                category={category}
                requestState={requestState}
                setActiveOptions={setActiveOptions}
            />

            <BookingButtons state={state} requestState={requestState} />
        </form>
    );
};

export default Booking;
