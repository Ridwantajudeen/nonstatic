import React from "react";
import swimmer from "./image12.png"
import star from "./Star1.png"

function Card(){
    return (
        <div  className="card">
        <img src={swimmer} alt='' className="swim" />
        <div>
        <img src={star} alt='' className="star" />
        <span>5.0</span>
                <span>(6) • </span>
                <span>USA</span>
        </div>
        <p>Life Lessons with Katie Zaferes</p>
            <p>From $136</p>
        </div>

    )
}
export default Card;