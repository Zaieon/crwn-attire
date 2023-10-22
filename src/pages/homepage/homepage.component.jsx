import React from "react";
import './homepage.style.scss'
import Directory from "../../components/directory/directory.component";

export const Homepage = (props) => {
    console.log(props)
    return (
        <div className="homepage">
            <Directory />
        </div>
    )
   
    
}