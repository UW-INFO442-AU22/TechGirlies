import React from "react";
import Navigation from "./navigation";

export default function HomePage() {
    return(
        <div className="home">
            <Navigation />
            <div className="container">
                <div className="row">
                    <div className="col-5 align-middle">
                        <h1>Find Sustainable Brands Made to Last</h1>
                        <h3 className="lead">Browse our website to find sustainable brands and to learn more about  the environmental effects of the fast fashion industry.</h3>
                    </div>
                    <div className="col-6">
                        <img src="./img/home_page_pic.png" alt="two cartoon people putting sustainable clothes on a hanger"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}