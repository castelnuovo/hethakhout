import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import useClickOutside from 'Utils/useClickOutside';
import useData from 'Utils/useData';

const Foto = ({ id }) => {
    const data = useData('fotoData', 'GET', 'id', parseInt(id));
    const full_url = data?.foto?.data?.full_url;
    const clickRef = useRef();

    useClickOutside(clickRef, () => handleClick());

    const history = useHistory();
    const handleClick = () => {
        history.push('/impressie');
    };

    return (
        <div className="modal is-active">
            <div className="modal-background"></div>
            <div ref={clickRef} className="modal-content">
                <p className="image">
                    <img src={full_url} alt={data.description} />
                </p>
                {data.description && (
                    <p className="subtitle has-text-white">
                        {data.description}
                    </p>
                )}
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
