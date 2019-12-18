import React from 'react';
import withBaseRoute from 'Utils/withBaseRoute';
import Fotos from 'Components/Fotos';

const FotosRoute = () => {
    return (
        <section className="section">
            <div className="container">
                <h1 className="title">Foto's</h1>
                <hr />
                <Fotos />
            </div>
        </section>
    );
};

export default withBaseRoute(FotosRoute);
