import useLocalStorage from 'Utils/useLocalStorage';

const useAPI = () => {
    useLocalStorage(
        'blogData',
        'articles?fields=id,created_on,title,content,hero.data,summary&sort=-created_on'
    );

    useLocalStorage(
        'activityData',
        'activities?fields=id,title,description,category,options,heros.directus_files_id.data'
    );

    useLocalStorage(
        'optionsData',
        'activityoptions?fields=hero.data,title,description'
    );

    useLocalStorage(
        'fotoData',
        'fotos?fields=id,foto.data,title,description,created_on'
    );

    useLocalStorage(
        'redirectData',
        'redirects?fields=id,redirect_from,redirect_to'
    );
};

export default useAPI;
