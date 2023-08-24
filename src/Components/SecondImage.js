import React from "react";
import Logo from "/home/azhar/azhar-ahmed-portfolio/src/azhar.jpg";

export default function SecondImage(){
    return(
        <div className="flex items-center justify-center">
         <img src={Logo} alt="Profile" className="w-40 h-40 rounded-full border-4 border-purple-800 shadow-xl"></img>
        </div>
    )
}