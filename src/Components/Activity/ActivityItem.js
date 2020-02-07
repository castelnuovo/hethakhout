import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ActivityFoto from './ActivityFoto';
import ActivityOption from './ActivityOption';

const ActivityItem = ({ id, title, category, description, heros, options }) => {
    return (
        <>
            <div className="level">
                <div className="level-left">
                    <h1 className="level-item title">{title}</h1>
                    <h2 className="level-item subtitle">{category}</h2>
                </div>
                <div className="level-right">
                    <div className="level-item">
                        <Link
                            to={`/boeking/${id}`}
                            className="button is-large is-link"
                        >
                            Boeken
                        </Link>
                    </div>
                </div>
            </div>
            <hr />
            {heros.length !== 0 && (
                <div className="box">
                    <div className="columns is-hidden-mobile is-multiline">
                        {heros.map(hero => (
                            <ActivityFoto
                                key={hero.directus_files_id.data.full_url}
                                {...hero.directus_files_id.data}
                            />
                        ))}
                    </div>
                    <div className="columns is-hidden-tablet">
                        <ActivityFoto
                            key={heros[0].directus_files_id.data.full_url}
                            {...heros[0].directus_files_id.data}
                        />
                    </div>
                </div>
            )}
            <div className="box">
                <div
                    className="content is-large"
                    dangerouslySetInnerHTML={{ __html: description }}
                ></div>
            </div>
            {options.length !== 0 && (
                <>
                    <div className="box">
                        <h1 className="title">Opties</h1>
                        <p className="is-size-4">
                            Om uw bezoek nog memorabler te maken kunt u ook
                            kiezen voor heerlijke extra's.
                        </p>
                        <br />
                        <div className="columns is-multiline">
                            {options.map(option => (
                                <ActivityOption key={option} option={option} />
                            ))}
                        </div>
                    </div>
                </>
            )}
            {heros.length !== 0 && (
                <div className="box is-hidden-tablet">
                    <div className="columns is-multiline">
                        {heros.map(hero => (
                            <ActivityFoto
                                key={hero.directus_files_id.data.full_url}
                                {...hero.directus_files_id.data}
                            />
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

ActivityItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default ActivityItem;
