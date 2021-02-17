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
                    <div className="desc">Add a description of the image here</div>
                    </div>

                    <div className="gallery">
                    <a target="_blank" href="img_forest.jpg">
                        <img src={require("../../../Assets/img/img_mountains.jpg").default} alt="Forest" width="600" height="400" />
                    </a>
                    <div className="desc">Add a description of the image here</div>
                    </div>

                    <div className="gallery">
                    <a target="_blank" href="img_lights.jpg">
                        <img src={require("../../../Assets/img/img_nature.jpg").default} alt="Northern Lights" width="600" height="400" />
                    </a>
                    <div className="desc">Add a description of the image here</div>
                    </div>

                    <div className="gallery">
                    <a target="_blank" href="img_mountains.jpg">
                        <img src={require("../../../Assets/img/img_snow.jpg").default} alt="Mountains" width="600" height="400" />
                    </a>
                    <div className="desc">Add a description of the image here</div>
                    </div>
                <div className="projects">
                    <div className="item">
                        {/* <a href="https://gazjosef.github.io/blackjack-game/">
                            <img src="img/projects/blackJack.jpg" alt="Project" />
                        </a> */}
                        <a
                            href="https://gazjosef.github.io/blackjack-game/"
                            className="btn-light"
                        >
                            <i className="fas fa-eye"></i> BlackJack
                        </a>
                        <a href="https://github.com/gazjosef/blackjack-game" className="btn-dark">
                            <i className="fab fa-github"></i> Github
                        </a>
                    </div>

                    <div className="item">
                        {/* <a href="https://gazjosef.github.io/weather-app/">
                            <img src="img/projects/weather-ts.jpg" alt="Project" />
                        </a> */}
                        <a
                            href="https://gazjosef.github.io/weather-app/"
                            className="btn-light"
                        >
                            <i className="fas fa-eye"></i> Odds Tracker
                        </a>
                        <a href="https://github.com/gazjosef/weather-app" className="btn-dark">
                            <i className="fab fa-github"></i> Github
                        </a>
                    </div>

                    <div className="item">
                        {/* <a href="https://gazjosef.github.io/weather-app/">
                            <img src="img/projects/weather-ts.jpg" alt="Project" />
                        </a> */}
                        <a
                            href="https://gazjosef.github.io/weather-app/"
                            className="btn-light"
                        >
                            <i className="fas fa-eye"></i> Retro Arcade
                        </a>
                        <a href="https://github.com/gazjosef/weather-app" className="btn-dark">
                            <i className="fab fa-github"></i> Github
                        </a>
                    </div>

                    <div className="item">
                        {/* <a href="https://gazjosef.github.io/tipping-app/">
                            <img src="img/projects/tippingApp.jpg" alt="Project" />
                        </a> */}
                        <a href="https://gazjosef.github.io/tipping-app/" className="btn-light">
                            <i className="fas fa-eye"></i> Tipping App
                        </a>
                        <a href="https://github.com/gazjosef/tipping-app" className="btn-dark">
                            <i className="fab fa-github"></i> Github
                        </a>
                    </div>                    

                    <div className="item">
                        {/* <a href="https://gazjosef.github.io/weather-app/">
                            <img src="img/projects/weather-ts.jpg" alt="Project" />
                        </a> */}
                        <a
                            href="https://gazjosef.github.io/weather-app/"
                            className="btn-light"
                        >
                            <i className="fas fa-eye"></i> Weather App
                        </a>
                        <a href="https://github.com/gazjosef/weather-app" className="btn-dark">
                            <i className="fab fa-github"></i> Github
                        </a>
                    </div>
                </div>
            </div>        
        </section>
    )
}
