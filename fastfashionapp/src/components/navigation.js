import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';

// manually creating a hamburger menu icon
function HamburgerMenu(){
    return(
        <div>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </div>
    )
}

// manually created close icon
export function CloseIcon(){
    return(
        <div className="close-menu">
            <div className="close-one">
                <div className="close-two"></div>
            </div>
        </div>
    )
}

export default function Navigation(props){
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [navbarHide, setNavbarHide] = useState(false);
    
    
    const handleClick = () => {
        setNavbarOpen(!navbarOpen);
    }

    const closeMenu = () => {
        setNavbarOpen(false);
    }

    // necessary to improve responsiveness of navigation open. if nav bar is open and the user scrolls the on the page, navigation bar will be temporarily disabled until user scrolls back up to the top of the page
    const changeValueOnScroll = () => {
        const scrollValue = document.documentElement.scrollTop;
        if(scrollValue > 25){
            setNavbarHide(true);
        } else if(navbarOpen && scrollValue < 15) {
            setNavbarHide(false);
        } else {
            setNavbarHide(false);
        }
    }

    window.addEventListener('scroll', changeValueOnScroll);

    return(
        <header>
            <nav className="nav-bar">
                <div className="nav-logo">
                <img src="/img/logo.png" alt="logo"></img>
                <h1>Conscious</h1>
                </div>
                <button onClick={handleClick} type="button" className="hamburger-menu" alt="hamburger menu button. three horizontal lines stacked on eachother. once clicked to open the navigation options, hamburgermenu transitions to an X indicating to click again to leave navigation">
                    {navbarOpen ? ( // conditional stying to either show a hamburger menu or a close menu depending on whether or not user has opened the navigation menu
                        <CloseIcon />
                        ) : (
                        <HamburgerMenu />
                        )
                    }
                </button>
                {/* conidtional styling for the nav-menu in order to the navigation bar to open only if the user clicks on the menu and activates the styling to show menu, otherwise hidden */}
                <ul className={`nav-menu ${navbarOpen ? " show-menu" : ""} ${navbarHide ? " hide-menu" : ""}`}>
                    <li className="nav-item home"><Link to="/" className="nav-link" onClick={() => closeMenu()}>Home</Link></li>
                    <li className="nav-item find-brands"><Link to="/find-brands" className="nav-link" onClick={() => closeMenu()}>Find Brands</Link></li>
                    <li className="nav-item find-styles"><Link to="/find-styles" className="nav-link" onClick={() => closeMenu()}>Find Styles</Link></li>
                    <li className="nav-item what-materials"><Link to="/what-material" className="nav-link" onClick={() => closeMenu()}>Materials</Link></li>
                    <li className="nav-item checklist"><Link to="/checklist" className="nav-link" onClick={() => closeMenu()}>Checklist</Link></li>
                </ul>
            </nav>
            <h2 className={props.class}>{props.headerText}</h2>
        </header>
    )
}