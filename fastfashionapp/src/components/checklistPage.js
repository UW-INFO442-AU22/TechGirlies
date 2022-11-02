import React from "react";
import Navigation from "./navigation";

export default function Checklist(props) {
    const checklist = props.rules.map((item) => {
       return ChecklistItems(item);
    }); 

    return(
        <div className="checklist">
            <Navigation />
            
            <h1 className="px-5">Are Your Clothes Sustainable?</h1>
            <br/><br/>
            <div className="container checklist-start">
                {checklist}
            </div>
        </div>
    )
}

export function ChecklistItems(item) {
    return (
        <div className="col checklist-item">
            <img className="checklist-diagram" alt="" src={item.img_source}/>
            <br/>
            <h3>{item.title}</h3>
            <h5>{item.description}</h5>
            <br></br>
        </div>
    );
}