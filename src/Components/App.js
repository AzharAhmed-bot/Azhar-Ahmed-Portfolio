import React, { useState, useEffect } from "react";
import Navbar from "./NavBar";
import Intro from "./Intro";
import Image from "./image";
import Skills from "./Skills";
import Contacts from "./Contacts";
import { Route,Routes } from "react-router-dom";
function App() {
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="bg-black h-screen">
    
      
      {isLoading ? (
        <div className="container  flex justify-center items-center h-full">
          <div className="square">
            <span style={{ "--i": 0 }}></span>
            <span style={{ "--i": 1 }}></span>
            <span style={{ "--i": 2 }}></span>
            <span style={{ "--i": 3 }}></span>
          </div>
          <div className="square">
            <span style={{ "--i": 0 }}></span>
            <span style={{ "--i": 1 }}></span>
            <span style={{ "--i": 2 }}></span>
            <span style={{ "--i": 3 }}></span>
          </div>
          <div className="square">
            <span style={{ "--i": 0 }}></span>
            <span style={{ "--i": 1 }}></span>
            <span style={{ "--i": 2 }}></span>
            <span style={{ "--i": 3 }}></span>
          </div>
        </div>
      ) : (
        <>
        <Navbar/>
        
        <Routes>
          <Route path="/" element={<Intro/>}/>
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/contact" element={<Contacts/>}/>
        </Routes>
            
    

          

        </>
      )}
      
      </div>
  );
}

export default App;
