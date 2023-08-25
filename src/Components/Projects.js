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
            <div className="border border-purple-700 p-4 rounded-lg shadow-xl bg-gray-400 hover:scale-105 shadow-purple-900 transition duration-300">
              <h3 className="text-lg font-mono font-bold underline mt-2">{project.title}</h3>
              <img src={project.image} alt={project.title} className="w-full" />
              <p className="text-blue-500  mt-2">
                Techs used: {project.technologies}
              </p>
              <p className="text-black font-semibold">{project.description}</p>
              <a
                href={project.link}
                className="text-purple-900 block mt-2 hover:underline"
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
