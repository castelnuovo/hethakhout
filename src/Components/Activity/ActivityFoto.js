import React, { useState, useRef } from 'react';
import useClickOutside from 'Utils/useClickOutside';
import PropTypes from 'prop-types';

const ActivityFoto = ({ full_url, thumbnails }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const clickRef = useRef();

    useClickOutside(clickRef, () => modalOpen && setModalOpen(false));

    return (
        <>
            <div
                className="column is-one-third"
                onClick={() => setModalOpen(true)}
            >
                <figure className="image">
                    <img
                        src={thumbnails[4]?.url}
                        alt="Activity Foto || Het Hak Hout"
                    />
                </figure>
            </div>
            {modalOpen && (
                <div className="modal is-active">
                    <div className="modal-background"></div>
                    <div ref={clickRef} className="modal-content">
                        <p className="image">
                            <img
                                src={full_url}
                                alt="Activity Foto || Het Hak Hout"
                            />
                        </p>
                    </div>
                    <button
                        className="modal-close is-large"
                        aria-label="close"
                    ></button>
                </div>
            )}
        </>
    );
};

ActivityFoto.propTypes = {
    full_url: PropTypes.string.isRequired,
    thumbnails: PropTypes.array.isRequired,
};

export default ActivityFoto;
