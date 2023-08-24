import React from "react";
import SecondImage from "./SecondImage";
import Expertise from "./Expertise";

export default function Skills() {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-black mt-16">
            <SecondImage />
            <h1 className="font-mono text-purple-700 text-4xl font-extrabold mt-8">
                My Skills
            </h1>
            <h3 className="font-mono text-white text-2xl font-extrabold border-b-4 border-purple-800 mt-4">
                Exploring the Tech Landscape
            </h3>
            <Expertise />   
        </div>
    );
}
