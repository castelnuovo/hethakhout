import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const Foto = ({ data }) => {
    const thumbnail_url = data.foto.data.thumbnails[4].url;
    const history = useHistory();
    const handleClick = () => {
        history.push(`/impressie/${data.id}`);
    };

    return (
        <>
            <div
                className="column is-one-third-desktop is-half-tablet"
                onClick={() => handleClick()}
            >
                <div className="card">
                    <div className="card-image">
                        <figure className="image">
                            <img src={thumbnail_url} alt={data.title} />
                        </figure>
                    </div>
                    <footer className="card-footer">
                        <p className="card-footer-item">{data.title}</p>
                    </footer>
                </div>
            </div>
        </>
    );
};

Foto.propTypes = {
    data: PropTypes.object.isRequired
};

export default Foto;
