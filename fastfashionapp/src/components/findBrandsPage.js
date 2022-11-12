import React from "react";
import { useState } from "react";
import Footer from "./footer";
import Navigation from "./navigation";

export default function FindBrands(props) {
    const brands = props.brands;
    const [searchInput, setSearchInput] = useState("");
    
    function BrandButton(props){
        const brand = props.brandData;
        return(
            <button className="individualBrand" type="button" id="viewBrand">
                <div className="brand-image">
                    <img src={brand.img} alt={brand.alt}></img>
                </div>
            </button>
        )
    }

    const handleChange = (event) => {
        event.preventDefault();
        setSearchInput(event.target.value);
    }

    let brandList = brands.map((brand) => {
        return <BrandButton brandData={brand} key={brand.brand} />
    });
    
    if(searchInput.length > 0) {
        brandList = brandList.filter((card) => card.key.toLowerCase().includes(searchInput.toLowerCase()));
    }

    return(
        <div className="find-brands">
            <Navigation />
            <h1>Sustainable Brands</h1>
            <div className="search-bar">
                <input type="text" placeholder="Brand Name" onChange={handleChange} value={searchInput}/>
            </div>
            <div className="brands-container">
                {brandList}
            </div>
            <Footer />
        </div>
    )
}