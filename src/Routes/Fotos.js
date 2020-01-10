import React from 'react';
import PropTypes from 'prop-types';
import withBaseRoute from 'Utils/withBaseRoute';
import Fotos from 'Components/Fotos';
import FotoModal from 'Components/Fotos/FotoModal';

const FotosRoute = ({ match }) => {
    const id = match.params.id;

    return (
        <section className="section">
            <div className="container">
                <h1 className="title">Foto's</h1>
                <hr />
                <Fotos />
                {id && <FotoModal id={id} />}
            </div>
        </section>
    );
};

FotosRoute.propTypes = {
    match: PropTypes.object.isRequired
};

export default withBaseRoute(FotosRoute);
