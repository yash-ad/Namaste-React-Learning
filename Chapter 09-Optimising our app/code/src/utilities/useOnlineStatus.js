import {useState, useEffect } from "react";

const useOnlineStatus = ()=>{
const[onlineStatus,setOnlineStatus]= useState(true);

//Lets add an useEffect hook it renders after the component and it will be render only at once intial render.
useEffect(()=>{
    //Lets add an eventlistener when the user an offline status there will be  `false` value.
    window.addEventListener("offline",()=>{
setOnlineStatus(false);
    })

    //Likewise,When the user an online status there will be `true` value.
    window.addEventListener("online",()=>{
        setOnlineStatus(true);
    })
},[])



    return onlineStatus;
}

export default useOnlineStatus;