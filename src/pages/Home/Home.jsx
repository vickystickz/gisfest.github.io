
import React from "react";
import EmailSubscription from "../../components/EmailSubscription.jsx/EmailSubscription";
import './home.css';


const HomePage = () =>{
    return(
            <div className="home-container">
                <div className="hero" id="top">
                    <div className="hero-content">
                        <div>
                            <img src="/assets/logo_colored.png" alt="Background"></img>
                        </div>
                        <div className="hero-info">
                            <h2>Long. X - Lat. Y, | November, 2022.</h2>
                            <h2>Lagos, Nigeria.</h2>
                        </div>
                    </div>
                </div>

                <main>
                    <aside>
                        <h1>LEARN.</h1>
                        <h1>NETWORK.</h1>
                        <h1>Discover.</h1>
                    </aside>
                    <div>
                        <p>GISfest is a conference bringing together geospatial professionals and enthusiasts to discuss geospatial technologies and it applications in numerous industries.</p>
                    </div>
                </main>
    
                <EmailSubscription />
            </div>
    )
}

export default HomePage;