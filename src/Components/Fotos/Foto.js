import React from 'react';

const Foto = ({ description, url }) => {
    return (
        <div class="column is-one-third-desktop is-half-tablet">
            <div class="card">
                <div class="card-image">
                    <figure class="image is-3by2">
                        <img src={url} alt={description} />
                    </figure>
                </div>
                <footer class="card-footer">
                    <p class="card-footer-item">{description}</p>
                </footer>
            </div>
        </div>
    );
};

export default Foto;
