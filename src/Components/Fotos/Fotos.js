import React from 'react';
import useData from 'Utils/useData';
import Loader from 'Components/Loader';
import Foto from './Foto';

const Fotos = () => {
    const data = useData('fotoData', 'ALL');

    return (
        <div className="columns is-multiline">
            {!data && <Loader />}
            {data && data.map(foto => <Foto key={foto.id} data={foto} />)}
        </div>
    );
};

export default Fotos;
