import React from 'react';
// import image1 from "../../../Assets/img/projects/blackJack"

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
                        <h3>BlackJack</h3>
                        <a href="https://gazjosef.github.io/blackjack-game/" className="btn-dark">
                            <i className="fab fa-github"></i> Github
                        </a>
                    </div>
                </div>

                <div className="gallery">
                    <a target="_blank" href="img_forest.jpg">
                        <img src={require("../../../Assets/img/img_mountains.jpg").default} alt="Forest" width="600" height="400" />
                    </a>
                    <div className="desc">
                        <h3>OddsFinder</h3>
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
                    <h3>Retro Arcade</h3>
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
                        <h3>Tipping Comp</h3>
                        <a href="gazjosef.github.io/tipping-app/" className="btn-dark">
                            <i className="fab fa-github"></i> Github
                        </a>
                    </div>
                </div>

                <div className="gallery">
                    <a target="_blank" href="img_mountains.jpg">
                        <img src={require("../../../Assets/img/img_snow.jpg").default} alt="Mountains" width="600" height="400" />
                    </a>
                    <div className="desc">
                        <h3>Weather App</h3>
                        <a href="gazjosef.github.io/weather-app/" className="btn-dark">
                            <i className="fab fa-github"></i> Github
                        </a>
                    </div>
                </div>
            </div>        
        </section>
    )
}
