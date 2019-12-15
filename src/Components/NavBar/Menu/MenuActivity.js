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
                return activity.category;
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

                                console.log(`Name: ${link.title}, URL: ${url}`);

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
