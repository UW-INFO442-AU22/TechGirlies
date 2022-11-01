import React from "react";
import Navigation from "./navigation";

export default function Checklist() {
    return(
        <div className="checklist">
            <Navigation />
            
            <h1>Are Your Clothes Sustainable?</h1>
           
            <div className="container checklist-start">
                
            </div>
        </div>
    )
}

export function ChecklistItems(item) {
    return (
        <div className="col">
            <img className="checklist-diagram" alt="" src={item.img_source}/>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <br></br>
        </div>
    );
}