import React from "react";
import Navigation from "./navigation";

function ImpactCard(props) {
    
}

export default function HomePage() {
    return(
        <div className="home">
            <Navigation />
            <div className="beginning-container">
                {/* <div className="row"> */}
                    <div className="beginning-text">
                        {/* <div className="center-with-image"> */}
                        <h1>Find Sustainable Brands Made to Last</h1>
                        <h3 className="lead">Browse our website to find sustainable brands and to learn more about  the environmental effects of the fast fashion industry.</h3>
                        {/* </div> */}
                    </div>
                    <div className="beginning-img">
                        <img src="./img/home_page_pic.png" alt="two cartoon people putting sustainable clothes on a hanger"></img>
                    </div>
                {/* </div> */}
            </div>
            <div className="impacts">
                <h1>Impacts of Fast Fashion</h1>
            </div>
        </div>
    )
}