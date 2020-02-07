import React, { useState } from 'react';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeMute, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import withBaseRoute from 'Utils/withBaseRoute';
import Fotos from 'Components/Fotos';
import FotoModal from 'Components/Fotos/FotoModal';

import BackgroundSnapshot from 'Assets/images/trailer.jpg';
import ImpressieVideoWebM from 'Assets/videos/impressie.webm';
import ImpressieVideoMP4 from 'Assets/videos/impressie.mp4';

const Impressie = () => {
    const { id } = useParams();
    const [muted, setMuted] = useState(true);

    const toggleMuted = () => {
        setMuted(!muted);
    };

    return (
        <section className="section">
            <div className="container">
                <div className="video">
                    <video
                        poster={BackgroundSnapshot}
                        muted={muted}
                        playsInline
                        autoPlay
                        loop
                    >
                        <source src={ImpressieVideoWebM} type="video/webm" />
                        <source src={ImpressieVideoMP4} type="video/mp4" />
                    </video>
                    <div className="buttons is-right is-overlay">
                        <button
                            className="button is-outlined is-medium"
                            onClick={() => toggleMuted()}
                        >
                            <span className="icon is-small">
                                {muted && (
                                    <FontAwesomeIcon icon={faVolumeMute} />
                                )}
                                {!muted && (
                                    <FontAwesomeIcon icon={faVolumeUp} />
                                )}
                            </span>
                        </button>
                    </div>
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
