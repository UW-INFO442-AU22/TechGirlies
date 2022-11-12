import React from "react";
import Footer from "./footer";
import Navigation from "./navigation";
import {useNavigate} from 'react-router-dom';

export default function FindStyles(props) {
    
    const genres = props.genres;
    const navigate = useNavigate();

    function callNavigate(link) {
        navigate(link)
    }
    
    function GenreCard(props){
        
        function handleClick() {
            
            console.log("calling handleClick to: " + props.name)
            let link = "/style/" + props.name;
            console.log(link);
            callNavigate(link)
        }

        console.log("create card");
        let url = "url(" + props.img + ")";
        let cardStyle = {
            backgroundImage: url,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            flexDirection: 'row',
            marginLeft: '20px',
            marginTop: '1rem',
            width: '300px',
            height: '400px',
            display: 'inline-block',
            borderRadius: "10px", 
            filter: 'brightness(70%)'
        }
        return(
            <div className="card" id={props.name} style={cardStyle} onClick={handleClick}>
                <div className="card-body align-self-end">
                    <h5 className="card-title">{props.name}</h5>
                </div>
            </div>
        )
    }

    

    let GenreList = genres.map((genre) => {
        console.log("creating list"); 
        return (
            <GenreCard className="genre-card" name={genre.name} key={genre.name} img={genre.img}/>
        ); 
    });

    
    return (
        <div className="findStyles">
            <Navigation/>
            <h1 className="px-4">What style are you looking for?</h1>
            <div className="genre-container">
                 {GenreList}
            </div>
            <Footer />
        </div>
    );

//     return(
//         <div className="find-styles">
//             {/* <Navigation />
//             <h1>What style are you looking for? </h1>
//             <div className="genre-container">
//                 {GenreList}
//             </div>
//             <Footer /> */}
//         </div>
//     )
}

// export default FindStyles(props) {
//     return (
//         <div className="ahhh">
//             <p>find styles</p>
//         </div>
//     );
//}