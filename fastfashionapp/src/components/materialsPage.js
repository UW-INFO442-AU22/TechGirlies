import React from "react";
import Footer from "./footer";
import Navigation from "./navigation";

export default function Materials(props) {
    function ChecklistItems(item) {
        return (
            <div className="col checklist-item">
                <img className="checklist-diagram" alt="" src={item.img_source}/>
                <h3>{item.title}</h3>
                <h5>{item.description}</h5>
            </div>
        )
    }
    
    const materials = props.materials.map((item) => {
        return ChecklistItems(item);
    })

    return(
        <div className="what-materials">
            <Navigation/>
            <div classname="reasons">
                <h2>How Do I Make my Wardrobe More Sustainable?</h2>
                <div classname="reason-container">
                    <div classname="reason">
                        <img src="img/checklist_page.jpg" alt="woman holding clothes"/>
                        <div>
                            <em>
                                <h3>What Materials Should I Use?</h3>
                            </em>
                        </div>
                    </div>
                </div>
                <div classname="container checklist-start">
                    {materials}
                </div>
            </div>
            <Footer />
        </div>
       
    )
}