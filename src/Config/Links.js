// type should be assumed link unless otherwise specified
// icon should be assumed null ...
// icon should be able to be printend with all types
// dropdown should be able to render nested links (only 1 levek)

const Links = [
    {
        title: 'Home',
        to: '/'
    },
    {
        title: 'Rondleidingen',
        to: '/rondleidingen'
    },
    {
        title: "Foto's",
        to: '/fotos'
    },
    {
        title: 'Dropdown',
        to: '/dropdown',
        type: 'dropdown',
        links: [
            {
                title: 'dropdown 1',
                to: '/dropdown/1'
            },
            {
                title: 'dropdown 2',
                to: '/dropdown/2'
            },
            {
                title: 'dropdown 3',
                to: '/dropdown/3'
            }
        ]
    },
    {
        title: 'Boek een Wandeling',
        icon: {
            type: 'fas',
            id: 'walking'
        },
        to: '/wandeling',
        type: 'button'
    }
];

export default Links;
