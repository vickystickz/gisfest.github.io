
import React from "react";
import './style.css';


const HomePage = () =>{
    return(
            <div className="home-container">
                <header>
                    <div className="hero-content">
                        <div>
                            <img src="/assets/logo_colored.png"></img>
                        </div>
                        <div className="hero-info">
                            <h1>Long. X - Lat. Y, | November, 2022.</h1>
                            <h1>Lagos, Nigeria.</h1>
                        </div>
                    </div>
                </header>

                {/*<main>
                    <div>
                    <h1>LEARN.</h1>
                    <h1>NETWORK</h1>
                    <h1>CHAT.</h1>
                    </div>
                    <div>
                        <p>GISfest is a conference bringing together geospatial professionals and enthusiasts to discuss geospatial technologies and it applications in numerous industries.
                        GISfest is a conference bringing together geospatial professionals and enthusiasts to discuss geospatial technologies and it applications in numerous industries
                        GISfest is a conference bringing together geospatial professionals and enthusiasts to discuss geospatial technologies and it applications in numerous industries</p>
                    </div>
                </main>
                <section>
                <div>
                <h3>Subscribe for event updates</h3>
                <p>Join our mailing list to receive news and updates for GISFest events</p>
                    <div>
                        <input placeholder="Enter your email address..."></input>
                        <button>Subscribe</button>
                    </div>
                    <span>Subscribed! We'll be in touch! Spread the word</span>
                </div>
                </section>*/}
            </div>
    )
}

export default HomePage;