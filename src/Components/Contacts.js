import React from "react";
import Video from "/home/azhar/azhar-ahmed-portfolio/src/Untitled video (4).mp4";
import WhatsApp from "/home/azhar/azhar-ahmed-portfolio/src/whatsapp.png";
import Github from "/home/azhar/azhar-ahmed-portfolio/src/github.png";
import Gmail from "/home/azhar/azhar-ahmed-portfolio/src/gmail.png"
export default function Contacts(){

    return (
        <div className="main h-screen relative">
            
      <video className="w-full h-full object-cover absolute top-0 left-0 z-0" src={Video} autoPlay muted loop />
      
      <div className="overlay flex flex-col items-center justify-center z-10">
       <h1 className="font-mono text-white text-2xl font-extrabold border-b-4 border-purple-800 mt-4">Contact Information</h1>
        <h1 className="text-4xl font-bold text-white mb-4">Thanks For Staying Around.Get In touch</h1>
        <div className="icons flex space-x-6">
          <a href="https://wa.me/+254773470576">
            <img className="icon rounded-lg" src={WhatsApp} alt="WhatsApp" />
          </a>
          <a href="https://github.com/AzharAhmed-bot">
            <img className="icon rounded-lg" src={Github} alt="GitHub" />
          </a>
          <a href="azharahmedtakoy4444@gmail.com">
            <img className="icon rounded-lg" src={Gmail} alt="Gmail" />
          </a>
        </div>
      </div>
    </div>
    )
}