import React from "react";
import Footer from "./footer";
import Navigation from "./navigation";

// ImpactCard function creates in individual instance of a impact in the correct format
function ImpactCard(props) {
    return (
        <div className="impact">
            <img src={props.img} alt={props.alt} />
            <em><h3>{props.title}</h3></em>
            <p>{props.description}</p>
        </div>
    )
}

// WhyCard function creates in individual instance of a reason in the correct format
function WhyCard(props){
    // conditional statmenet necessary for variation in styling depending on the props.title
    if (props.title === "Sustainable Fashion Supports Safer Working Conditions"){
        return(
            <div className="reason">
                <div>
                    <em><h3>{props.title}</h3></em>
                    <p>{props.description}</p>
                </div>
                <img src={props.img} alt={props.alt} />
            </div>
        )
    } else { // default styling
        return(
            <div className="reason">
                <img src={props.img} alt={props.alt} />
                <div>
                    <em><h3>{props.title}</h3></em>
                    <p>{props.description}</p>
                </div>
            </div>
        )
    }
}

export default function HomePage(props) {
    const impacts = props.impacts;
    const whySustainable = props.whySustainable;

    // impactList is created by mapping through the impacts file and returning an impactCard for every object in the file
    const impactList = impacts.map((impact) => {
        return <ImpactCard key={impact.title} img={impact.img} title={impact.title} description={impact.description} />
    })

    // whySustainableList is created by mapping through the whySustainable file and returning a WhyCard for every object in the file
    const whySustainableList = whySustainable.map((reason) => { 
        return <WhyCard key={reason.title} img={reason.img} title={reason.title} description={reason.description} />
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
                <h2>Impacts of Fast Fashion</h2>
                <div className="impact-container">
                    {impactList}
                </div>
            </div>
            <div className="reasons">
                <h2>Why Should I Shop Sustainably?</h2>
                <div className="reason-container">
                    {whySustainableList}
                </div>
            </div>
            <div className="video-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/iq0--DfC2Xk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <Footer />
        </div>
    )
}