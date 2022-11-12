import React from "react";
import Footer from "./footer";
import Navigation from "./navigation";
import {useParams, Link} from 'react-router-dom';

export default function GenrePage(props) {
    const selectedStyle = props.selectedStyle;
    let urlParams = useParams();
    let genreType = urlParams.genreType; 

    let style =  props.genres.filter((genre) => {
        return genre.name === genreType;
    });

    style = style[0];
    if(!style) {
        return (
            <h1>Genre not specified</h1>
        );
    }

    const recOneImgList = selectedStyle.recOneImgs.map((image) => {
        return (
            <img src={image} className="suggestion-img"/>
        )
    })
    const recTwoImgList = selectedStyle.recTwoImgs.map((image) => {
        return (
            <img src={image} className="suggestion-img" />
        )
    })

    return(
        <div>
            <Navigation />
            <div className="indv-genre-info" key={selectedStyle.style}>
                <div className="genre-header">
                    <h1>These brands have {selectedStyle.style} clothing:</h1>
                    <Link to="/find-styles" type="button" id="back-button">
                        <img src="/img/backArrow.png" className="genre-img" alt="back arrow serving as a button"/>
                    </Link>
                </div>
                <div className="genre-container">
                    <div className="style-image">
                    <img src={selectedStyle.img} />
                    </div>
                    <div className="recs-container">
                        <div className="rec">
                            <h2>{selectedStyle.recOne}</h2>
                            <div className="rec-imgs">
                                {recOneImgList}
                            </div>
                        </div>
                        <div className="rec">
                            <h2>{selectedStyle.recOne}</h2>
                            <div className="rec-imgs">
                                {recTwoImgList}
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <Footer />
        </div>
    )

   
    // function BrandRow(props) {
    //     console.log(props.name);
    //     return (
    //         <div className="row" key={props.name}>
    //             <h2>{props.name}</h2>
    //         </div>
    //     );
    // }

    // let BrandsList = genre.brands.map((brand) => {
       
    //     return (
    //         <BrandRow className="brand-row" name={brand} />
    //     ); 
    // });
    // let imgSrc ="/img/"+genre.name.toLowerCase()+ ".png";

    // return (
    //     <div className="indv-genre-info" key={genre.name}>
    //         <Navigation/>
    //         <h1 className="px-4">{genre.name}</h1>
    //         <div className="container">
    //             <div className="col col-4">
    //                 <img src={imgSrc} alt={genre.name}/>
    //             </div>
    //             <div className="col-6">
    //                 {BrandsList}
    //             </div>
    //         </div>
    //         <Footer />
          
    //     </div>);
}


