import useLocalStorage from 'Utils/useLocalStorage';

const useAPI = () => {
    const root_url = '/cms';

    useLocalStorage(
        'blogData',
        `${root_url}/articles?fields=id,created_on,title,content,hero.data,summary&sort=-created_on`
    );

    useLocalStorage(
        'activityData',
        `${root_url}/activities?fields=id,title,description,category,options,heros.directus_files_id.data`
    );

    useLocalStorage(
        'optionsData',
        `${root_url}/activityoptions?fields=hero.data,title,description`
    );

    useLocalStorage(
        'fotoData',
        `${root_url}/fotos?fields=id,foto.data,description,created_on`
    );

    useLocalStorage(
        'redirectData',
        `${root_url}/redirects?fields=id,redirect_from,redirect_to`
    );
};

export default useAPI;
