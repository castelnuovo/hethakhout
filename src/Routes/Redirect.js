import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useData from 'Utils/useData';

const RedirectRoute = ({ match }) => {
    const data = useData(
        'redirectData',
        'GET_BY',
        match.params.src,
        'redirect_from'
    );
    const history = useHistory();

    useEffect(() => {
        if (data) {
            window.open(data.redirect_to);
        }

        history.goBack();
    }, [data, history]);

    return (
        <>
            <h1>Redirecting...</h1>
        </>
    );
};

export default RedirectRoute;
