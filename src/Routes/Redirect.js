import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Redirects from 'Config/Redirects';

const RedirectRoute = ({ match }) => {
    const [redirecting, setRedirecting] = useState(false);
    const src = Redirects[match.params.src];

    useEffect(() => {
        if (src) {
            window.open(src);
        }

        setRedirecting(true);
    }, [src]);

    return (
        <>
            {redirecting && <Redirect to="/" />}
            <h1>Redirecting...</h1>
        </>
    );
};

export default RedirectRoute;
