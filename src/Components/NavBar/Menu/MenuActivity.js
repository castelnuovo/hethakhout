import React from 'react';
import useLocalStorage from 'Utils/useLocalStorage';

import MenuMega from './MenuMega';
import MenuColumn from './MenuColumn';
import MenuLink from './MenuLink';

const MenuActivity = () => {
    const [data] = useLocalStorage('activityData');
    const categories = [
        ...new Set(
            data.map(activity => {
                return activity.category; // also return name
            })
        )
    ];

    console.log('data', data);
    console.log('categories', categories);

    // loop trougfh array and then loop trough assoc items inside the catehory

    return (
        <MenuMega title="Activiteiten">
            <MenuColumn title="Wandelingen">
                <MenuLink to="/activiteiten/wandelingen/lang">
                    Lange Route
                </MenuLink>
                <MenuLink to="/activiteiten/wandelingen/kort">
                    Korte Route
                </MenuLink>
            </MenuColumn>
            <MenuColumn title="Jeugd">
                <MenuLink to="/activiteiten/jeugd/voetballen">
                    Voetballen
                </MenuLink>
                <MenuLink to="/activiteiten/jeugd/zwemmen">Zwemmen</MenuLink>
                <MenuLink to="/activiteiten/jeugd/Schieten">Schieten</MenuLink>
            </MenuColumn>
            <MenuColumn title="Lezingen">
                <MenuLink to="/activiteiten/lezingen/episch">
                    Episch Verhaal
                </MenuLink>
            </MenuColumn>
            <MenuColumn title="Vogels">
                <MenuLink to="/activiteiten/vogels/huren">Hutje Huren</MenuLink>
                <MenuLink to="/activiteiten/vogels/kopen">Hutje Kopen</MenuLink>
            </MenuColumn>
        </MenuMega>
    );
};

export default MenuActivity;
