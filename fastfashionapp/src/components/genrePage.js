import React, { useState } from "react";
import Footer from "./footer";
import Navigation from "./navigation";
import {useParams, Link} from 'react-router-dom';
import { LeavePage } from "./findBrandsPage.js";

export default function GenrePage(props) {

    // page variables and state for url parameter
    const setLeaveBrowser = props.setLeaveBrowser;
    const leaveBrowser = props.leaveBrowser;
    const [url, setUrl] = useState("");
    let urlParams = useParams();

    // selecting the parameter for the url, specified as "genreType"
    let genreType = urlParams.genreType; 


    // filtering through the JSON file for the styleName that matches the genre
    let style =  props.styles.filter((genre) => {
        return genre.style === genreType;
    });

    // selecting the first item from the list (dealing with duplicates or multiples)
    style = style[0];
    if(!style) {
        return (
            // if the style does not exist, return an empty error div
            <h1>Genre not specified</h1>
        );
    }

    // navigate to the page by clicking on the image for the first reccommendation
    const recOneImgList = style.recOneImgs.map((image) => {
        const handleClick = () => {
            setUrl(image.url);
            setLeaveBrowser(true);
        }

        return (
            <img type="button" onClick={handleClick} src={image.img} className="suggestion-img" alt={image.alt}/>
        )
    });

    // navigate to the page by clicking on the image for the second reccommendation
    const recTwoImgList = style.recTwoImgs.map((image) => {
        const handleClick = () => {
            setUrl(style.recTwoUrl);
            setLeaveBrowser(true);
        }
        
        return (
            <img type="button" onClick={handleClick} src={image.img} className="suggestion-img" alt={image.alt} />
        )
    });

    // return the page 
    return(
        <div>
            <Navigation />
            <div className="indv-genre-info" key={style.style}>
                <div className="genre-header">
                    <h1>These brands have {style.style} clothing:</h1>
                    <Link to="/find-styles" type="button" id="back-button">
                        <img src="/img/backArrow.png" className="genre-img" alt="back arrow serving as a button"/>
                    </Link>
                </div>
                <div className="genre-container">
                    <div className="style-image">
                    <img src={style.img} alt={style.style}/>
                    </div>
                    <div className="recs-container">
                        <div className="rec">
                            <h2>{style.recOne}</h2>
                            <div className="rec-imgs">
                                {recOneImgList}
                            </div>
                        </div>
                        <div className="rec">
                            <h2>{style.recTwo}</h2>
                            <div className="rec-imgs">
                                {recTwoImgList}
                            </div>
                        </div>
                    </div>
                    <LeavePage leaveBrowser={leaveBrowser} setLeaveBrowser={setLeaveBrowser} brandUrl={url} />
                </div>
                
            </div>
            <Footer />
        </div>
    )
}


