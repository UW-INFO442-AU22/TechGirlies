import React from "react";
import { useState } from "react";
import Footer from "./footer";
import Navigation from "./navigation";

export function LeavePage(props){
    const leaveBrowser = props.leaveBrowser;
    const setLeaveBrowser = props.setLeaveBrowser
    const brandUrl = props.brandUrl;

    const handleButtonClick = () => {
        setLeaveBrowser(false);
    };
    return(
        <div className={`leave-browser ${leaveBrowser ? " show-popup" : ""}`}>
            <p>Are You Sure You Want To Leave This Page?</p>
            <div className="leave-container">
                <button className="leave-button one" type="button"><a href={brandUrl} onClick={handleButtonClick} target="_blank">Yes!</a></button>
                <button className="leave-button two" type="button" onClick={handleButtonClick}>No!</button>
            </div>
        </div>
    )
}

export default function FindBrands(props) {
    const setLeaveBrowser = props.setLeaveBrowser;
    const leaveBrowser = props.leaveBrowser;
    const brands = props.brands;
    const [searchInput, setSearchInput] = useState("");
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

    return(
        <div className="find-brands">
            <Navigation />
            <h1>Sustainable Brands</h1>
            <div className="search-bar">
                <input type="text" placeholder="Brand Name" onChange={handleChange} value={searchInput}/>
            </div>
            <LeavePage leaveBrowser={leaveBrowser} setLeaveBrowser={setLeaveBrowser} brandUrl={brandUrl} />
            <div className="brands-container ">
                {brandList}
            </div>
            <Footer />
        </div>
    )
}