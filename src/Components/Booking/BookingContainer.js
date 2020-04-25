import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import MailJS from 'mailjs-sdk';
import Loader from 'Components/Loader';
import useData from 'Utils/useData';
import MailJSConfig from 'Config/MailJS';
import BookingSteps from './BookingSteps';
import BookingInfo from './BookingInfo';
import BookingContent from './BookingContent';
import BookingButtons from './BookingButtons';
import PropTypes from 'prop-types';

const BookingContainer = ({ id }) => {
    const [state, setState] = useState(0);
    const [formData, setFormData] = useState({});
    const [activeOptions, setActiveOptions] = useState(null);
    const { register, errors, triggerValidation, getValues } = useForm({
        mode: 'onBlur',
    });
    const data = useData('activityData', 'GET', 'id', parseInt(id));

    const requestState = async (newState) => {
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
        const userData =
            Object.entries(formData).length !== 0
                ? { ...formData, activeOptions } // Activity with options
                : getValues(); // Activity without options

        const submitData = {
            category: data.category,
            title: data.title,
            ...userData,
        };

        console.log(submitData);

        MailJS.send(MailJSConfig.access_token, submitData).then(
            (response) => {
                setState(2);
            },
            (error) => {
                console.error('Error: ' + JSON.stringify(error));
            }
        );
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

BookingContainer.propTypes = {
    id: PropTypes.string.isRequired,
};

export default BookingContainer;
