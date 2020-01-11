import React from 'react';
import { useParams } from 'react-router';
import withBaseRoute from 'Utils/withBaseRoute';
import Fotos from 'Components/Fotos';
import FotoModal from 'Components/Fotos/FotoModal';

const FotosRoute = () => {
    const { id } = useParams();

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

export default withBaseRoute(FotosRoute);
