import React from 'react';
// import image1 from "../../../Assets/img/projects/blackJack"

// import { Gallery } from "../../Layout/Gallery/Gallery"

export const Work = () => {
    return (
        <section className="section-work">
            {/* <Gallery /> */}
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                    My Work
                </h2>
            </div>
            <div className="row">
                <h3 className="heading-tertiary u-margin-bottom-small">Check out some of my projects...</h3>
                <div className="gallery">
                    <a target="_blank" href="img_5terre.jpg">
                        <img src={require("../../../Assets/img/img_lights.jpg").default} alt="Cinque Terre" width="600" height="400" />
                    </a>
                    <div className="desc">
                        <h3>Project #</h3>
                        <a href="https://github.com/gazjosef/blackjack-game" className="btn-dark">
                            <i className="fab fa-github"></i> Github
                        </a>
                    </div>
                </div>

                <div className="gallery">
                    <a target="_blank" href="img_forest.jpg">
                        <img src={require("../../../Assets/img/img_mountains.jpg").default} alt="Forest" width="600" height="400" />
                    </a>
                    <div className="desc">
                        <h3>Project #</h3>
                        <a href="https://github.com/gazjosef/blackjack-game" className="btn-dark">
                            <i className="fab fa-github"></i> Github
                        </a>
                    </div>
                </div>

                <div className="gallery">
                    <a target="_blank" href="img_lights.jpg">
                        <img src={require("../../../Assets/img/img_nature.jpg").default} alt="Northern Lights" width="600" height="400" />
                    </a>
                <div className="desc">
                    <h3>Project #</h3>
                    <a href="https://github.com/gazjosef/blackjack-game" className="btn-dark">
                        <i className="fab fa-github"></i> Github
                    </a>
                    </div>
                </div>

                <div className="gallery">
                    <a target="_blank" href="img_mountains.jpg">
                        <img src={require("../../../Assets/img/img_snow.jpg").default} alt="Mountains" width="600" height="400" />
                    </a>
                    <div className="desc">
                        <h3>Project #</h3>
                        <a href="https://github.com/gazjosef/blackjack-game" className="btn-dark">
                            <i className="fab fa-github"></i> Github
                        </a>
                    </div>
                </div>

                <div className="gallery">
                    <a target="_blank" href="img_mountains.jpg">
                        <img src={require("../../../Assets/img/img_snow.jpg").default} alt="Mountains" width="600" height="400" />
                    </a>
                    <div className="desc">
                        <h3>Project #</h3>
                        <a href="https://github.com/gazjosef/blackjack-game" className="btn-dark">
                            <i className="fab fa-github"></i> Github
                        </a>
                    </div>
                </div>
            </div>        
        </section>
    )
}
