import React from "react";
import Wazat from "/home/azhar/azhar-ahmed-portfolio/src/Wazat.jpg";
import AirVoyage from "/home/azhar/azhar-ahmed-portfolio/src/AirVoyage.jpg";
import Valetroni from "/home/azhar/azhar-ahmed-portfolio/src/Valetroni.jpg";
import Health from "/home/azhar/azhar-ahmed-portfolio/src/Health.jpg";

export default function Projects() {
    const projectData = [
        {
          title: "Wazat Travel Agency",
          description: "Embark on a virtual journey with Wazat Travel Agency! Experience the wonders of Kenya like never before, all while staying in the comfort of your home. Discover exotic destinations, plan your dream vacation, and let the adventure begin.",
          technologies: "React, JSON server",
          link: "https://naibusbooking.netlify.app",
          image: Wazat
        },
        {
          title: "AirVoyage Travel Website",
          description: "Unleash your wanderlust with AirVoyage Travel Website. Explore a world of flight options tailored to your preferences. Whether you're a solo traveler or a jet-setting family, AirVoyage ensures your journey starts with convenience and ends with unforgettable memories.",
          technologies: "React, Flask, Sql, SqlAlchemy",
          link: "https://airvoyage.netlify.app",
          image: AirVoyage
        },
        {
          title: "Valetroni Car Dealership",
          description: "Step into the future of car buying with Valetroni Car Dealership. Imagine browsing and purchasing your dream car from global dealers, all at your fingertips. With seamless transactions and secure processes, owning a car from across the world has never been this exciting.",
          technologies: "React, FastApi, SqlAlchemy",
          link: "https://valetroni.netlify.app",
          image: Valetroni
        },
        {
          title: "Health Tracker Website",
          description: "Experience healthcare reimagined with Health Tracker Website. Seamlessly connect with medical professionals, receive personalized insights, and monitor your well-being. Powered by AI-driven symptom analysis, virtual consultations have never been this comprehensive and convenient.",
          link: "https://healthhubwise.netlify.app",
          technologies: "React, Flask RESTful, SqlAlchemy, OpenAI",
          image: Health
        },
        {
          title:"NorthLink Gsc Limited",
          description:"NorthLink is  a construction Company Based in Kenya aimed at providing sustainable construction,electrical and energy solution to transform dreams into landmarks for prosperity",
          link:"http://northlink-gsc.netlify.app",
          technologies:"React+Vite, FastAPi, Sqlachemy, Sql",
          image:"data:image/jpeg;base64,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"
        }
      ];

  return (
    <div className="text-center py-10 mt-10 bg-black">
      <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="font-mono text-purple-700 text-4xl font-extrabold mb-4 animated-fade-in">
          🚀 My Projects
        </h1>
        <h2 className="text-lg text-purple-700">
          Explore the realm of creativity and innovation
        </h2>
      </div>

      <div className="flex flex-wrap justify-center items-center">
        {projectData.map((project, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 ">
            <div className="border border-purple-700 p-4 rounded-lg shadow-xl bg-gray-900 hover:scale-105 shadow-purple-900 transition duration-300">
              <h3 className="text-lg font-mono font-bold underline mt-2 text-white">{project.title}</h3>
              <img src={project.image} alt={project.title} className="w-full" />
              <p className="text-blue-500  mt-2">
                Techs used: {project.technologies}
              </p>
              <p className="text-white font-semibold">{project.description}</p>
              <a
                href={project.link}
                className="text-purple-400 block mt-2 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
