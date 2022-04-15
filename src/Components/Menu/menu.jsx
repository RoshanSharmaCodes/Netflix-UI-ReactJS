import { useState } from "react";

export default function Menu(data){
    var name = data.data[0].name;
    var active = data.data[1];
    var setActive = data.data[2];
    function changeColor(){
        setActive(name);
    }
    return(
        <>
          <div className={active==name?"menu-item active":"menu-item"} onClick={changeColor}>{name}</div>
        </>
    );
}