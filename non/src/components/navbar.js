import React from "react"
import logo from "./airbnb.png"

function Navbar(){
    return(
        <div >
            <nav>
            <img src={logo} alt='' className="theNav" />
            </nav>
        </div>
    )
}

export default Navbar;