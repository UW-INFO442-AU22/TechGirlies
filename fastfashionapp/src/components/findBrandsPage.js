import React from "react";
import { useState } from "react";
import Footer from "./footer";
import Navigation from "./navigation";

export default function FindBrands(props) {
    const brands = props.brands;
    const [searchInput, setSearchInput] = useState("");
    const [leaveBrowser, setLeaveBrowser] = useState(false);
    const [brandUrl, setBrandUrl] = useState("");
    
    function BrandButton(props){
        const brand = props.brandData;
        const handleBrandClick = () => {
            setLeaveBrowser(true);
            setBrandUrl(brand.url);
        }
        return(
            <button className="individualBrand" type="button" id="viewBrand" onClick={handleBrandClick}>
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
    

    const handleClose = () => {
        setLeaveBrowser(false);
    }
    return(
        <div className="find-brands">
            <Navigation />
            <h1>Sustainable Brands</h1>
            <div className="search-bar">
                <input type="text" placeholder="Brand Name" onChange={handleChange} value={searchInput}/>
            </div>
            <div className={`leave-browser ${leaveBrowser ? " show-popup" : ""}`}>
                <p>Are You Sure You Want To Leave This Page?</p>
                <div className="leave-container">
                    <button className="leave-button one" type="button"><a href={brandUrl} target="_blank">Yes!</a></button>
                    <button className="leave-button two" type="button" onClick={handleClose}>No!</button>
                </div>
            </div>
            <div className="brands-container ">
                {brandList}
            </div>
            <Footer />
        </div>
    )
}