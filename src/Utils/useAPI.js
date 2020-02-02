import useLocalStorage from 'Utils/useFetch';

const useAPI = () => {
    useLocalStorage(
        'blogData',
        'https://hethakhout.nl/cms/articles?fields=id,created_on,title,content,hero.data,summary&sort=-created_on'
    );

    useLocalStorage(
        'activityData',
        'https://hethakhout.nl/cms/activities?fields=id,title,description,category,options,heros.directus_files_id.data'
    );

    useLocalStorage(
        'optionsData',
        'https://hethakhout.nl/cms/activityoptions?fields=hero.data,title,description'
    );

    useLocalStorage(
        'fotoData',
        'https://hethakhout.nl/cms/fotos?fields=id,foto.data,title,description,created_on'
    );

    useLocalStorage(
        'redirectData',
        'https://hethakhout.nl/cms/redirects?fields=id,redirect_from,redirect_to'
    );
};

export default useAPI;
