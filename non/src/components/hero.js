import React from "react"
import gridphoto from "./Group77.png"

function Hero(){
    return (
        <section className="theHero">
            <img src ={gridphoto} alt="" className="grid" />
            <h1 className="heroHeader">Online Experiences</h1>
            <p className="heroText">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}

export default Hero;