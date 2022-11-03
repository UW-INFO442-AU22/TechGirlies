import React from "react";
import Navigation from "./navigation";
import { Link } from 'react-router-dom';

export default function SavedBrands(props) {
    const savedBrands = props.savedBrands

    
    const savedBrandsList = savedBrands.map((brand) => {
        return(
            <button className="brand" type="button" id="viewBrand">
                <div className="brand-image">
                <Link to="/find-brands"><img src={brand.img} alt={brand.alt}></img></Link>
                </div>
            </button>
        )
    })

    return(
        <div className="saved-brands">
            <Navigation />
            <h1>Saved sustainable brands</h1>
            {savedBrandsList}
        </div>
    )
}