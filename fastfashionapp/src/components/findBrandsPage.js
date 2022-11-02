import React from "react";
import Navigation from "./navigation";

export default function FindBrands(props) {
    const brands = props.brands;

    const brandList = brands.map((brand) => {
        return(
            <button className="brand" type="button" id="viewBrand">
                <div className="brand-image">
                    <img src={brand.img} alt={brand.alt}></img>
                </div>
            </button>
        )
    })

    return(
        <div className="find-brands">
            <Navigation />
            <h1>Sustainable Brands</h1>
            <div className="brands-container">
                {brandList}
            </div>
        </div>
    )
}