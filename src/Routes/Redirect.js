import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router';
import useData from 'Utils/useData';
import Loader from 'Components/Loader';

const Redirect = () => {
    const { src } = useParams();
    const history = useHistory();
    const data = useData('redirectData', 'GET', 'redirect_from', src);

    useEffect(() => {
        if (!data) {
            history.goBack();
        }

        window.location.replace(data.redirect_to);
    }, [data, history]);

    return (
        <section className="section">
            <div className="container">
                <Loader title="Redirecting..." />
            </div>
        </section>
    );
};

export default Redirect;
