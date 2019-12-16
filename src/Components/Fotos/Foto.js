import React, { useState } from 'react';

const Foto = ({ data }) => {
    const thumbnail_url = data.foto.data.thumbnails[2].url;
    const full_url = data.foto.data.full_url;
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <div
                className="column is-one-third-desktop is-half-tablet"
                onClick={() => setModalOpen(true)}
            >
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-3by2">
                            <img src={thumbnail_url} alt={data.description} />
                        </figure>
                    </div>
                    <footer className="card-footer">
                        <p className="card-footer-item">{data.description}</p>
                    </footer>
                </div>
            </div>
            {modalOpen && (
                <div className="modal is-active">
                    <div className="modal-background"></div>
                    <div className="modal-content">
                        <p className="image is-4by3">
                            <img src={full_url} alt={data.description} />
                        </p>
                    </div>
                    <button
                        className="modal-close is-large"
                        aria-label="close"
                        onClick={() => setModalOpen(false)}
                    ></button>
                </div>
            )}
        </>
    );
};

export default Foto;
