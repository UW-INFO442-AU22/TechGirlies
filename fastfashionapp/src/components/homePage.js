import React from "react";
import Navigation from "./navigation";

function ImpactCard(props) {
    return (
        <div className="impact">
            <img src={props.img} alt={props.alt} />
            <em><h2>{props.title}</h2></em>
            <p>{props.description}</p>
        </div>
    )
}

export default function HomePage(props) {
    const impacts = props.impacts;

    const impactList = impacts.map((impact) => {
        return <ImpactCard key={impact.title} img={impact.img} title={impact.title} description={impact.description} />
    })

    return(
        <div className="home">
            <Navigation />
            <div className="beginning-container">
                    <div className="beginning-text">
                        <h1>Find Sustainable Brands Made to Last</h1>
                        <h3 className="lead">Browse our website to find sustainable brands and to learn more about  the environmental effects of the fast fashion industry.</h3>
                    </div>
                    <div className="beginning-img">
                        <img src="./img/home_page_pic.png" alt="two cartoon people putting sustainable clothes on a hanger"></img>
                    </div>
            </div>
            <div className="impacts">
                <h1>Impacts of Fast Fashion</h1>
                <div className="impact-container">
                    {impactList}
                </div>
            </div>
        </div>
    )
}