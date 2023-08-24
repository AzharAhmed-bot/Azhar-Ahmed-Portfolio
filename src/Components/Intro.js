import React, { useEffect, useState } from "react";
import Image from "./image";
const headerText = "I am a Junior Full Stack Developer";

export default function Intro() {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= headerText.length) {
        setTypedText(headerText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <Image />
        <h2 className="text-purple-800">Hello, my name is</h2>
        <h1 className="font-mono text-white text-4xl text-extrabold">
          <span className="border-b-4 border-purple-800 font-extrabold">
            Azhar
          </span>{" "}
          Ahmed Sheikh Takoy
        </h1>
        <h2 className="text-white p-3 text-3xl font-serif text-extrabold border-b-4 border-purple-800">
          {typedText}
        </h2>
        <h2 className="text-white p-3 text-3xl font-serif text-extrabold">
        I am a dedicated and enthusiastic individual with a strong passion for Artificial Intelligence. My journey in this field has been marked by continuous learning, creativity, and a drive to push boundaries.
        </h2>
      </div>
    </div>
  );
}
