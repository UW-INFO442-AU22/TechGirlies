import React from "react";
import { useState } from "react";
import Footer from "./footer";
import Navigation from "./navigation";

// LeavePage function returns a pop-up asking user is they want to leave the page
// conditional styling is implemented in order to complete the functionality of the popup
export function LeavePage(props){
    const leaveBrowser = props.leaveBrowser;
    const setLeaveBrowser = props.setLeaveBrowser
    const brandUrl = props.brandUrl;

    // handleButtonClick is used in both button popups in ensure that the popup closes in two cases
    // case one: if the user clicks "no" on the popup, the popup is disabled
    // case two: if the user clicks "yes" on the page and explores on a new widnow, but returns to the web app, the users interactions will be simplified becaue the popup will already be closed for that specific link
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

    // searchInput state varaible is used in order to make the search bar functional
    const [searchInput, setSearchInput] = useState("");
    // brandUrl state variable is used in order to link the correct button with external website
    const [brandUrl, setBrandUrl] = useState("");
    
    // BrandButton function creates an individaul brand card with the correct format
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

    // handleChange manages the user input in the search bar
    // this searchInput is then used later to filter the number of times the BrandButton method is called
    const handleChange = (event) => {
        event.preventDefault();
        setSearchInput(event.target.value);
    }

    // by default, the brandsList is created by mapping throuhg the brands object and calling the BrandButton on every brand that is present in the file
    let brandList = brands.map((brand) => {
        return <BrandButton brandData={brand} key={brand.brand} />
    });
    
    // based on the altered searchInput state varaible that is dependent on the user input, the brandList is filtered
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