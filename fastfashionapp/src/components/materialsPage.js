import React from "react";
import Footer from "./footer";
import Navigation from "./navigation";

export default function Materials(props) {
    // ChecklistItems function forms individual checklist item with proper formatting
    function ChecklistItems(item) {
        return (
            <div className="col checklist-item">
                <img className="materials-diagram" alt="" src={item.img_source}/>
                <h3>{item.title}</h3>
                <h5>{item.description}</h5>
            </div>
        )
    }

    // materials variable represents the list version of each item in the props.materials object
    // for each item in props.material, helper method ChecklistItems is called and then the formatted item is returned
    const materials = props.materials.map((item) => {
        return ChecklistItems(item);
    })

    return(
        <div className="what-materials">
            <Navigation/>
            <div className="reasons px-2">
                <h1 className="px-2">How Do I Make my Wardrobe More Sustainable?</h1>           
            </div>
            <div className="container checklist-start">
                {materials}
            </div>
            <Footer />
        </div>
       
    )
}