import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import useData from 'Utils/useData';

const StyledHero = styled.section`
    position: relative;
    overflow: hidden;
`;

const StyledHeroBackground = styled.img`
    position: absolute;
    object-fit: cover;
    object-position: center center;
    width: 100%;
    height: 100%;
    opacity: 0.5;
`;

const BlogView = ({ id }) => {
    const data = useData('blogData', 'GET', 'id', parseInt(id));
    const thumbnail_url = data?.hero?.data?.thumbnails[4]?.url;

    return (
        <>
            <Link to="/blog">
                <div className="level">
                    <div className="level-left">
                        <div className="level-item">
                            <span className="icon is-large has-text-dark">
                                <i className="fas fa-2x fa-arrow-left"></i>
                            </span>
                            <h2 className="title">Terug</h2>
                        </div>
                    </div>
                </div>
            </Link>
            <hr />
            {!data && <h1 className="title">Post niet gevonden.</h1>}
            {data && (
                <>
                    <StyledHero className="hero is-primary is-medium">
                        <StyledHeroBackground
                            alt={data.title}
                            src={thumbnail_url}
                        />
                        <div className="hero-body">
                            <div className="container">
                                <h1 className="title">{data.title}</h1>
                                <h2 className="subtitle">
                                    Posted on: {data.created_on}
                                </h2>
                            </div>
                        </div>
                    </StyledHero>
                    <section className="section">
                        <div
                            className="content is-large"
                            dangerouslySetInnerHTML={{ __html: data.content }}
                        ></div>
                    </section>
                </>
            )}
        </>
    );
};

BlogView.propTypes = {
    id: PropTypes.string.isRequired
};

export default BlogView;
