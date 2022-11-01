import React from "react";
import Navigation from "./navigation";

export default function Checklist() {
    return(
        <div className="checklist">
            <Navigation />
            
            <h1>Are Your Clothes Sustainable?</h1>
           
            <div className="container">
                <div className="row">
                    <div className="col">
                        <img className="checklist-diagram" src="./img/logo.png" alt="logo"/>
                        <h4>RESEARCH BRAND</h4>
                        <p>Is the company is green-certified? See who their suppliers and maufacturers are, and see what the media is saying about it. </p>
                        <br></br>
                    </div>

                    <div className="col">
                        <img className="checklist-diagram" src="./img/logo.png" alt="logo"/>
                        <h4>FABRIC SHEERNESS</h4>
                        <p>If you can hold a garment up to the light and can't see the outline of your hand through the material, it suggests that the garment will be more durable over time.</p>
                        <br></br>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <img className="checklist-diagram" src="./img/logo.png" alt="logo"/>
                        <h4>SEAMS & STITCHES</h4>
                        <p>Tighter, more frequent stitches usually make for a stronger seam. More durable clothing should usually have hardier stitches with no discernible gaps.</p>
                        <br></br>
                    </div>
                    <div className="col">
                        <img className="checklist-diagram" src="./img/logo.png" alt="logo"/>
                        <h4>TAG & MATERIALS</h4>
                        <p>Check the tag to see if the garment is made out of sustainable materials, if it’s locally made, and how to care for it to make it last. </p>
                        <br></br>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <img className="checklist-diagram" src="./img/logo.png" alt="logo"/>
                        <h4>DENIM STIFFNESS</h4>
                        <p>Check to see how stiff a pair of jeans are. High quality denim is usually heavier and a bit stiff at first because of the material's higher thread count.</p>
                        <br></br>
                    </div>

                    <div className="col">
                        <img className="checklist-diagram" src="./img/logo.png" alt="logo"/>
                        <h4>STRETCH TEST</h4>
                        <p>High-quality clothing material usually has good "recovery," which means that the fibers spring back into shape and maintain their form after being stretched.</p>
                        <br></br>
                    </div>
                </div>
            </div>
        </div>
    )
}