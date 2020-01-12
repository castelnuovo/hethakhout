import React from 'react';
import { useParams } from 'react-router';
import withBaseRoute from 'Utils/withBaseRoute';
import Fotos from 'Components/Fotos';
import FotoModal from 'Components/Fotos/FotoModal';

import BackgroundSnapshot from 'Assets/images/trailer.jpg';
import ImpressieVideoWebM from 'Assets/videos/impressie.webm';
import ImpressieVideoMP4 from 'Assets/videos/impressie.mp4';

const Impressie = () => {
    const { id } = useParams();

    return (
        <section className="section">
            <div className="container">
                <div className="video">
                    <video
                        poster={BackgroundSnapshot}
                        playsInline
                        autoPlay
                        muted
                        loop
                    >
                        <source src={ImpressieVideoWebM} type="video/webm" />
                        <source src={ImpressieVideoMP4} type="video/mp4" />
                    </video>
                </div>
                <br />
                <h1 className="title">Foto's</h1>
                <hr />
                <Fotos />
                {id && <FotoModal id={id} />}
            </div>
        </section>
    );
};

export default withBaseRoute(Impressie);
