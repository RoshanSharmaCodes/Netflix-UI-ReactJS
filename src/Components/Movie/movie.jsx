import { useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Popup from "../StaticPopUp/popup";

export default function Movie(data){
    var setDisplay = data.setDisplay
    var display  = data.display
    const service = data.data;
    const [name, setName] = useState("");
    // var navigate = useNavigate();

    function openPopup(){
        setName(service["original_title"])
        setDisplay(!display);
        // navigate("/Home/Popup",{state:{name:service["original_title"], image:service["poster_path"], vote: service["vote_average"] ,desc:service["overview"]}});
    }
    
        return(
            <>
            <div className="movie" onClick={openPopup} >
                    <img className="movie-img" src={service["poster_path"]} alt="provider-img" />
                    <h3>{service["original_title"]?service["original_title"]:"Unknown"}</h3>
            </div>
            {name==service["original_title"]?<Popup data={service} name={name} setName={setName} display={display} setDisplay={setDisplay} />:<div></div> }
            </>
        );
    
}