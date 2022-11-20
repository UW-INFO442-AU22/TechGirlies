import React from "react";
import Footer from "./footer";
import Navigation from "./navigation";

export default function Checklist(props) {
    // ChecklistItems function forms individual checklist item with proper formatting
    function ChecklistItems(item) {
        return (
            <div className="col checklist-item">
                <img className="checklist-diagram" alt="" src={item.img_source}/>
                <h3>{item.title}</h3>
                <h5>{item.description}</h5>
            </div>
        )
    }
    
    // checklist variable represents the CheckList version of each item in the props.rules object
    // for each item in props.rules, helper method ChecklistItems is called and then the formatted item is returned
    const checklist = props.rules.map((item) => {
       return ChecklistItems(item);
    });

    return(
        <div className="checklist">
            <Navigation />
            <h1 className="px-2">Are Your Clothes Sustainable?</h1>
            <div className="container checklist-start">
                {checklist}
            </div>
            <Footer />
        </div>
           
       
    )
}