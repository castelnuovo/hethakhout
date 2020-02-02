import React from 'react';
import useLocalStorage from 'Utils/useLocalStorage';
import Loader from 'Components/Loader';

import MenuMega from './MenuMega';
import MenuColumn from './MenuColumn';
import MenuLink from './MenuLink';

const MenuActivity = () => {
    const data = useLocalStorage('activityData');

    if (!data) {
        return (
            <MenuMega title="Activiteiten">
                <Loader simple={true} />
            </MenuMega>
        );
    }

    const categories = [
        ...new Set(
            data
                .map(activity => {
                    return activity.category !== 'Overig'
                        ? activity.category
                        : null;
                })
                .filter(category => {
                    return category !== null;
                })
        )
    ];

    return (
        <MenuMega title="Activiteiten">
            {categories.map(category => {
                return (
                    <MenuColumn key={category} title={category}>
                        {data
                            .filter(activity => {
                                return activity.category === category;
                            })
                            .map(link => {
                                const url = `/activiteiten/${category.toLowerCase()}/${link.title
                                    .toLowerCase()
                                    .replace(/ /g, '-')}`;

                                return (
                                    <MenuLink key={url} to={url}>
                                        {link.title}
                                    </MenuLink>
                                );
                            })}
                    </MenuColumn>
                );
            })}
        </MenuMega>
    );
};

export default MenuActivity;
