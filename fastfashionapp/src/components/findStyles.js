import React from "react";
import Footer from "./footer";
import Navigation from "./navigation";
import {useNavigate} from 'react-router-dom';


export default function FindStyles(props) {
    const styles = props.styles;
    const navigate = useNavigate();

    function callNavigate(link) {
        navigate(link);
    }
    
    // returns a card displaying a type of genre of clothing
    function GenreCard(props){
        const genre = props.genre;
        return (
            <button type="button" className="style-button" onClick={handleClick}>
                <div className="style-selection">
                    <img key={genre.style} src={genre.img} alt={genre.alt}></img>
                </div>
            </button>
        )
        // when the card is clicked, navigate to the page for that specific style
        function handleClick() {
            let link = "/style/" + genre.style;
            callNavigate(link);
        }
    }

    // creating a list of all the cards needed for that specific genre of clothing 
    let GenreList = styles.map((genre) => {
        return (
            <GenreCard className="style-card" key={genre.style} genre={genre}/>
        ); 
    });
    
    // returns the page
    return (
        <div className="find-styles">
            <Navigation />
            <div className="find-styles-page">
            <h1 className="px-5 find-styles-header">What style are you looking for?</h1>
            <div className="style-container">
                 {GenreList}
            </div>
            <Footer />
            </div>
        </div>
    );
}