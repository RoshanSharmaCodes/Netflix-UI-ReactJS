import { useLocation} from "react-router-dom";
import "./popup.css"

export default function Popup(data){
    function openPop(){
        data.setName("");
        data.setDisplay(!data.display);
    }
    console.log(data.data);
    return(
        <>
        <div className={data.name==data.data["original_title"]?"open-popup":"showoff"} onClick={openPop}>
            <div className="popup">
            <div className="popup-img">
        	    <img className="banner-img" src={data.data["poster_path"]} alt="poster"/>
            </div>
            <div className="popup-info">
        	    <h1>{data.data["original_title"]}</h1>
        	    <p>
                { data.data["overview"].slice(0,100)}
                 <span class="rest">...Read More</span>
        	    </p>
                <h3>{data.data["vote_average"]}</h3>
            </div>
            </div>
        </div>
        </>
    );
}
