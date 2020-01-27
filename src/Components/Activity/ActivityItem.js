import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ActivityFoto from './ActivityFoto';
import ActivityOption from './ActivityOption';

const ActivityFotoData = [
    {
        foto: {
            data: {
                full_url:
                    'https://loremflickr.com/cache/resized/65535_49116919046_5cefebd2fb_c_512_512_nofilter.jpg',
                thumbnails: [
                    {
                        url: 'https://loremflickr.com/256/256/nature,animal'
                    },
                    {
                        url: 'https://loremflickr.com/256/256/nature,animal'
                    },
                    {
                        url: 'https://loremflickr.com/256/256/nature,animal'
                    },
                    {
                        url: 'https://loremflickr.com/256/256/nature,animal'
                    },
                    {
                        url:
                            'https://loremflickr.com/cache/resized/65535_49259004152_528c115109_256_256_nofilter.jpg'
                    }
                ]
            }
        }
    },
    {
        foto: {
            data: {
                full_url:
                    'https://loremflickr.com/cache/resized/65535_49116919046_5cefebd2fb_c_512_512_nofilter.jpg',
                thumbnails: [
                    {
                        url: 'https://loremflickr.com/256/256/nature,animal'
                    },
                    {
                        url: 'https://loremflickr.com/256/256/nature,animal'
                    },
                    {
                        url: 'https://loremflickr.com/256/256/nature,animal'
                    },
                    {
                        url: 'https://loremflickr.com/256/256/nature,animal'
                    },
                    {
                        url:
                            'https://loremflickr.com/cache/resized/65535_49259004152_528c115109_256_256_nofilter.jpg'
                    }
                ]
            }
        }
    },
    {
        foto: {
            data: {
                full_url:
                    'https://loremflickr.com/cache/resized/65535_49116919046_5cefebd2fb_c_512_512_nofilter.jpg',
                thumbnails: [
                    {
                        url: 'https://loremflickr.com/256/256/nature,animal'
                    },
                    {
                        url: 'https://loremflickr.com/256/256/nature,animal'
                    },
                    {
                        url: 'https://loremflickr.com/256/256/nature,animal'
                    },
                    {
                        url: 'https://loremflickr.com/256/256/nature,animal'
                    },
                    {
                        url:
                            'https://loremflickr.com/cache/resized/65535_49259004152_528c115109_256_256_nofilter.jpg'
                    }
                ]
            }
        }
    }
];

const OptionsData = [
    {
        title: 'Lunch',
        image:
            'https://loremflickr.com/cache/resized/3767_11818424965_d28b86161e_h_1280_960_nofilter.jpg',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero incidunt quia fuga atque vero exercitationem. Quibusdam enim beatae et consequuntur magni est quae consectetur at totam fugiat, in officia dolorum.'
    },
    {
        title: 'Avondeten',
        image:
            'https://loremflickr.com/cache/resized/65535_48769261421_dc0835810b_h_1280_960_nofilter.jpg',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero incidunt quia fuga atque vero exercitationem. Quibusdam enim beatae et consequuntur magni est quae consectetur at totam fugiat, in officia dolorum.'
    }
];

const ActivityItem = ({ id, title, category, description }) => {
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
                            to={`/booking/${id}`}
                            className="button is-large is-link"
                        >
                            Boeken
                        </Link>
                    </div>
                </div>
            </div>
            <hr />
            <div className="box">
                <div className="columns">
                    {ActivityFotoData.map(data => (
                        <ActivityFoto {...data} />
                    ))}
                </div>
            </div>
            <div className="box">
                <div
                    className="content is-large"
                    dangerouslySetInnerHTML={{ __html: description }}
                ></div>
            </div>
            <div className="box">
                <h1 className="title">Opties</h1>
                <p className="is-size-4">
                    Om uw bezoek nog memorabler te maken kunt u ook kiezen voor
                    heerlijke extra's.
                </p>
                <br />
                <div className="columns">
                    {OptionsData.map(data => (
                        <ActivityOption {...data} />
                    ))}
                </div>
            </div>
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
