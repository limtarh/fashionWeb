import React, { useState } from "react";

require('dotenv').config()
const mysql = require('mysql2')


function Outfit(){
    return(
        <>
            <Top></Top>
            <Bottom></Bottom>
            <Shoes></Shoes>
        </>

    )
}

function Top(){
    const [weather,setWeather] = useState("hot");
    const i = weather == "hot"?"/images/summerT.jpeg":"/images/blackT.jpeg";

    function toggleWeather(){
        setWeather(weather => (weather === "hot" ? "cold" : "hot"));
    }
    
    return(
        <>
            <h2>Top</h2>
            <button type="button" onClick={toggleWeather}>Toggle</button>
            <img src={i}/>
        </>
    )
}

function Bottom(){
    const [weather,setWeather] = useState("hot");
    const i = weather == "hot"?"/images/summerShorts.jpeg":"/images/sweatPants.jpeg";

    function toggleWeather(){
        setWeather(weather => (weather === "hot" ? "cold" : "hot"));
    }
    
    return(
        <>
            <h2>Bottom</h2>
            <button type="button" onClick={toggleWeather}>Toggle</button>
            <img src={i}/>
        </>
    )
}

function Shoes(){
    const [weather,setWeather] = useState("hot");
    const i = weather == "hot"?"/images/nikeSlides.webp":"/images/toroBravo4s.jpeg";

    function toggleWeather(){
        setWeather(weather => (weather === "hot" ? "cold" : "hot"));
    }
    
    return(
        <>
            <h2>Shoes</h2>
            <button type="button" onClick={toggleWeather}>Toggle</button>
            <img src={i}/>
        </>
    )
}

function Suggest(){
    const connection = mysql.createConnection(process.env.DATABASE_URL)
    console.log('Connected to PlanetScale!')
    connection.end()
    return(
        <>
            <h1>Suggestions</h1>
            <Outfit></Outfit>

        </>

    )
}

export default Suggest;