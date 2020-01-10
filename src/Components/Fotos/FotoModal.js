import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import useClickOutside from 'Utils/useClickOutside';
import useData from 'Utils/useData';

const Foto = ({ id }) => {
    const data = useData('fotoData', 'GET', id);
    const full_url = data.foto.data.full_url;
    const clickRef = useRef();

    useClickOutside(clickRef, () => handleClick());

    const history = useHistory();
    const handleClick = () => {
        history.push('/fotos');
    };

    return (
        <div className="modal is-active">
            <div className="modal-background"></div>
            <div className="modal-content">
                <p ref={clickRef} className="image">
                    <img src={full_url} alt={data.description} />
                </p>
            </div>
            <button
                className="modal-close is-large"
                aria-label="close"
                onClick={() => handleClick()}
            ></button>
        </div>
    );
};

export default Foto;
