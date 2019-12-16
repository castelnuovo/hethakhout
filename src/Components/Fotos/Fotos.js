import React from 'react';
import useLocalStorage from 'Utils/useLocalStorage';
import Loader from 'Components/Loader';
import Foto from './Foto';

// TODO: pull fotos from local storage

const Fotos = () => {
    const [data] = useLocalStorage('fotoData');

    if (!data) {
        return <Loader />;
    }

    return (
        <div class="columns is-multiline">
            <Foto
                url="https://unsplash.it/300/200/?random&pic=1"
                description="Description 1"
            />
            <Foto
                url="https://unsplash.it/300/200/?random&pic=2"
                description="Description 2"
            />
            <Foto
                url="https://unsplash.it/300/200/?random&pic=3"
                description="Description 3"
            />
            <Foto
                url="https://unsplash.it/300/200/?random&pic=4"
                description="Description 4"
            />
            <Foto
                url="https://unsplash.it/300/200/?random&pic=5"
                description="Description 5"
            />
            <Foto
                url="https://unsplash.it/300/200/?random&pic=6"
                description="Description 6"
            />
        </div>
    );
};

export default Fotos;
