import React from 'react';
import Profile_Picture from 'Assets/images/francisca_laporte.jpg';

const AboutMe = () => {
    return (
        <section className="section">
            <div className="container">
                <div className="columns">
                    <div className="column is-one-third">
                        <figure className="image">
                            <img
                                className="is-rounded"
                                src={Profile_Picture}
                                alt="Francisca Laporte || Het Hak Hout"
                            />
                        </figure>
                    </div>
                    <div className="column is-two-thirds">
                        <h1 className="title">Francisca Laporte</h1>
                        <p className="subtitle">
                            Hippe slogan of zo? (misschien iets met
                            shinrin-yoku)
                        </p>
                        <div className="content">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Repellat omnis quidem debitis, tenetur atque
                            iusto exercitationem, libero ab aperiam porro
                            inventore nihil corrupti, ullam alias harum
                            excepturi neque sit eos?
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
