import "./homepage.css";
import disneylogo from "./disneylogo.png";
import loki from "./loki.jpg";
import googlelogo from "./googlelogo.png";
import {useEffect, useState} from "react";
import Provider from "../Provider/provider";
import Movie from "../Movie/movie";
import {MenuItems} from "./menu"
import Menu from "../Menu/menu";
import Popup from "../StaticPopUp/popup";


export default function Homepage(){

    //Add EventListener
    function ScrollEventHandler(){
        var trending =  document.querySelector(".trending-movies");
        trending.addEventListener("wheel",(event)=>{
        event.preventDefault();
        trending.scrollLeft += event.deltaY;
        });


        var provider = document.querySelector(".app-list");
        provider.addEventListener("wheel",(event)=>{
            event.preventDefault();
            provider.scrollLeft += event.deltaY;
        });
    }

    let [display,setDisplay] = useState(1);
    let [serviceProvider,setServiceProvider] = useState([]);
    let [trendingMovies, setTrendingMovies] = useState([]);
    let [latestMovies, setLatestMovies] = useState([]);


    function hidePopUp(){
        setDisplay(!display);
    }
    
    //Fetching Data From API
    async function LoadAppList(){
        var data = await fetch("https://dummy-api-dep-06.herokuapp.com/api/movies/providers");
        data =  await data.json();
        setServiceProvider(data.results);
    }  

    async function LoadTrendingMovies(){
        var data = await fetch("https://dummy-api-dep-06.herokuapp.com/api/movies/trending");
        data = await data.json();
        setTrendingMovies(data.results);
    }

    async function LoadLatestMovies(){
        var data = await fetch("https://dummy-api-dep-06.herokuapp.com/api/movies/latest?offset=1",{method:"POST"});
        data = await data.json();
        console.log(data);
    }
    
    useEffect(()=>{
        LoadAppList();
        LoadTrendingMovies();
        LoadLatestMovies();
        ScrollEventHandler();
    },[]);

    const [active,setActive] = useState("Home");

    return(
        <>
        <div className="homepage-main">
        <div className={display?"home-container":"home-container displayNone"}>
        <nav>
            <div className="menu1">
                <div><img className="glogo" src={googlelogo} /></div>
                {MenuItems.map(val=> <Menu data={[val,active,setActive]} />)}
            </div>
            <div className="menu2">
            </div>
        </nav>
        <div className="head-box">
            <div className="head-box1">
                <div>
                    <img src={disneylogo} className="wlogo" />
                    <h1>Loki: Thunder God</h1>
                    <h3>Popular| God of Mischeif is Back After Avenger's Endgame </h3>
                </div>
            </div>
            <div className="head-box2">
                <img className="banner" src={loki} alt="logo" />
            </div>
        </div>
        <div className="section">
        <h2>Favorite Apps</h2>
        <div className="app-list">
            {serviceProvider.map(val => <Provider data={val}/>)}
        </div>
    	</div>

    	<div className="break">
    	</div>
    	
        <div className="section">
        <h2>Trending Movies</h2>
        <div className="trending-movies">
            {trendingMovies.map(val => <Movie display={display} setDisplay={setDisplay} data={val} />)}
        </div>
    	</div>
        <div className="break">
    	</div>
        <div className="section">
        <h2>Lates Movies</h2>
        <div className="latest-movies">
            {latestMovies.map(val=><Movie data={val}/>)}
        </div>
        </div>
    </div>
    {/* <div className={display?"PopupShow displayPopUp":"PopupShow"} onClick={hidePopUp}>
        <Popup/>
    </div> */}
    </div>
    </>
    );
}