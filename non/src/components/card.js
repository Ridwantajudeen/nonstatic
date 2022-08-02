import React from "react";

 import swimmer from "./image12.png"
 import star from "./Star1.png"
 import wedding from "./wedding.png"
 import mountain from "./mountain.png"
import Details from "./carddetails";


function Card(){
    
    return (
         <div  className="card">
         <section>   
        < Details
          img = {swimmer}
           imgstar = {star}
           rating = "5.0"
          reviewcount = "(6) •"
          country= "USA"
          title = "Life Lessons with Katie Zaferes"
          price =" $136"
          user = "person"
          openspot = {0}
          location = "Online"
          />
        
           < Details
          img = {wedding}
           imgstar = {star}
           rating = "5.2"
          reviewcount = "(30) •"
          country= "USA"
          title = "Learn Wedding Photography"
          price =" $125"
          user = "person"
          openspot = {20}
          location = "Online"
          />
          
           < Details
          img = {mountain}
           imgstar = {star}
           rating = "4.3"
          reviewcount = "(8) •"
          country= "Norway"
          title = "Group Mountain Biking"
          price =" $50"
          user = "person"
          openspot = {5}
          location = "Offline"
          />
          </section>
        
         </div>
        
    )
}
export default Card;