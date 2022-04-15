import { useLocation} from "react-router-dom";
import "./popupcss.less";

export default function Popup(){
    const data = useLocation();
    return(
        <>
        <div className="open-popup">
            <div className="popup">
            <div className="popup-img">
        	    <img className="banner-img" src={data.state.image} alt="poster"/>
            </div>
            <div className="popup-info">
        	    <h1>{data.state.name}</h1>
        	    <p>
                {data.state.desc.slice(0,300)}<span class="rest">...Read More</span>
        	    </p>
                <h3>Vote: {data.state.vote}</h3>
            </div>
            </div>
        </div>
        </>
    );
}
