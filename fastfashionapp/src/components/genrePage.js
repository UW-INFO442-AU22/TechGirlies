import React from "react";
import Footer from "./footer";
import Navigation from "./navigation";
import {useParams} from 'react-router-dom';

export default function GenrePage(props) {
    let urlParams = useParams();
    let genreType = urlParams.genreType; 

    let genre =  props.genres.filter((genre) => {
        return genre.name === genreType;
    });

    genre = genre[0];
    if(!genre) {
        return (
            <h1>Genre not specified</h1>
        );
    }

   
    function BrandRow(props) {
        console.log(props.name);
        return (
            <div className="row" key={props.name}>
                <h2>{props.name}</h2>
            </div>
        );
    }

    let BrandsList = genre.brands.map((brand) => {
       
        return (
            <BrandRow className="brand-row" name={brand} />
        ); 
    });
    let imgSrc ="/img/"+genre.name.toLowerCase()+ ".png";

    return (
        <div className="indv-genre-info" key={genre.name}>
            <Navigation/>
            <h1 className="px-4">{genre.name}</h1>
            <div className="container">
                <div className="col col-4">
                    <img src={imgSrc} alt={genre.name}/>
                </div>
                <div className="col-6">
                    {BrandsList}
                </div>
            </div>
            <Footer />
          
        </div>);
    }


