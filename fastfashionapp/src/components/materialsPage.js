import React from "react";
import Footer from "./footer";
import Navigation from "./navigation";

export default function Materials(props) {
    function ChecklistItems(item) {
        return (
            <div className="col checklist-item">
                <img className="materials-diagram" alt="" src={item.img_source}/>
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
            <div className="reasons px-2">
                <h1 className="px-2">How Do I Make my Wardrobe More Sustainable?</h1>
                {/* <div className="reason-container">
                    <div className="reason">
                        <img src="img/checklist_page.jpg" alt="woman holding clothes"/>
                        <div>
                            <em>
                                <h3>What Materials Should I Use?</h3>
                            </em>
                        </div>
                    </div>
                </div> */}
                
            </div>
            <br/>
            <div className="container checklist-start">
                    {materials}
                </div>
            <Footer />
        </div>
       
    )
}