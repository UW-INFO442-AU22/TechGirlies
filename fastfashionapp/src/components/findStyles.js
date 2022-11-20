import React, { useState } from "react";
import Footer from "./footer";
import Navigation from "./navigation";
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function FindStyles(props) {
    const styles = props.styles;
    const setSelectedStyle = props.setSelectedStyle;
    const navigate = useNavigate();

    function callNavigate(link) {
        navigate(link);
    }
    
    function GenreCard(props){
        const genre = props.genre;
        return (
            <button type="button" className="style-button" onClick={handleClick}>
                <div className="style-selection">
                    <img src={genre.img} alt={genre.alt}></img>
                </div>
            </button>
        )
        function handleClick() {
            let link = "/style/" + genre.style;
            callNavigate(link);
        }
    }

    let GenreList = styles.map((genre) => {
        return (
            <GenreCard className="style-card" key={genre.style} genre={genre}/>
        ); 
    });
    
    return (
        <div className="find-styles">
            <Navigation />
            <h1>What style are you looking for?</h1>
            <div className="style-container">
                 {GenreList}
            </div>
            <Footer />
        </div>
    );
}