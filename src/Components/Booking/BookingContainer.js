import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Loader from 'Components/Loader';
import useData from 'Utils/useData';
import EmailJS from 'Config/EmailJS';
import BookingSteps from './BookingSteps';
import BookingInfo from './BookingInfo';
import BookingContent from './BookingContent';
import BookingButtons from './BookingButtons';

const Booking = ({ id }) => {
    const [state, setState] = useState(0);
    const [formData, setFormData] = useState({});
    const [activeOptions, setActiveOptions] = useState(null);
    const { register, errors, triggerValidation, getValues } = useForm({
        mode: 'onBlur'
    });
    const data = useData('activityData', 'GET', 'id', parseInt(id));

    const requestState = async newState => {
        if (state === 2) {
            return;
        }

        switch (newState) {
            case 0:
                break;

            case 1:
                if (!(await triggerValidation())) {
                    return;
                }

                setFormData(getValues());

                if (data.options.length === 0) {
                    requestState(2);
                }

                break;

            case 2:
                onSubmit();

                return;

            default:
                return;
        }

        setState(newState);
    };

    const onSubmit = async () => {
        const url = 'https://hethakhout.nl/mail';
        const userData =
            Object.entries(formData).length !== 0
                ? { ...formData, activeOptions } // Activity with options
                : getValues(); // Activity without options

        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                ...EmailJS,
                template_params: {
                    category: data.category,
                    title: data.title,
                    ...userData
                }
            })
        })
            .then(() => {
                setState(2);
            })
            .catch(error => {
                console.error('Error: ' + error);
            });
    };

    if (!data) {
        return <Loader />;
    }

    return (
        <form className="form">
            <BookingSteps
                state={state}
                options={data.options}
                requestState={requestState}
            />

            <BookingInfo title={data.title} category={data.category} />

            <div className="box">
                {data.options.length === 0 && state === 1 && <Loader />}
                <BookingContent
                    state={state}
                    data={data}
                    errors={errors}
                    register={register}
                    activeOptions={activeOptions}
                    setActiveOptions={setActiveOptions}
                />
            </div>

            <BookingButtons state={state} requestState={requestState} />
        </form>
    );
};

export default Booking;
