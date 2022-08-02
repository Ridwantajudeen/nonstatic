import React from "react";

function Details(props){
    let badgeText
    if (props.openspot === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    return(
        <div  className="card">
            {badgeText &&<div className="cardbadge">{badgeText}</div>}
        <img src={props.img} className="swim" alt="" />
        <div className="cardStat">
        <img src={props.imgstar} alt='' className="star" />
        <span>{props.rating}</span>
        <span className="gray">{props.reviewcount} </span>
                <span className="gray"> { props.country}</span>
            </div>
            
            
            <p>{props.title}</p>
            
            <p><span className="bold">{props.price}</span> / {props.user}</p>
            </div>
       

    
    )
}

export default Details;