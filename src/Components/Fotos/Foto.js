import React from 'react';
import { useHistory } from 'react-router-dom';

const Foto = ({ data }) => {
    const thumbnail_url = data.foto.data.thumbnails[4].url;
    const history = useHistory();
    const handleClick = () => {
        history.push(`/fotos/${data.id}`);
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
                            <img src={thumbnail_url} alt={data.description} />
                        </figure>
                    </div>
                    <footer className="card-footer">
                        <p className="card-footer-item">{data.description}</p>
                    </footer>
                </div>
            </div>
        </>
    );
};

export default Foto;
