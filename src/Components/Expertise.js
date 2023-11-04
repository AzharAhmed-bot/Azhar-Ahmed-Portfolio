import React from "react";

// Import images
import Cpp from "/home/azhar/azhar-ahmed-portfolio/src/cpp.png";
import Js from "/home/azhar/azhar-ahmed-portfolio/src/javascript.png";
import ts from "/home/azhar/azhar-ahmed-portfolio/src/ts.png"
import Python from "/home/azhar/azhar-ahmed-portfolio/src/python.jpg";
import Sql from "/home/azhar/azhar-ahmed-portfolio/src/sql.png";
import SqlAlchemy from "/home/azhar/azhar-ahmed-portfolio/src/sqlalchemy.jpg";
import TailwindCss from "/home/azhar/azhar-ahmed-portfolio/src/tailwind.jpg";
import ReactLogo from "/home/azhar/azhar-ahmed-portfolio/src/logo512.png";
import Html from "/home/azhar/azhar-ahmed-portfolio/src/html.png";
import Css from "/home/azhar/azhar-ahmed-portfolio/src/css.png";
import FastAPi from "/home/azhar/azhar-ahmed-portfolio/src/FastApi.png";
import Flask from "/home/azhar/azhar-ahmed-portfolio/src/flask.png"

const languageSkills = [
    { name: "C++", image: Cpp },
    { name: "JavaScript", image: Js },
    { name: "Python", image: Python },
    {name:"TypeScript", image:ts}
];

const frameworkSkills = [
    { name: "React", image: ReactLogo },
    { name: "Tailwind CSS", image: TailwindCss },
    {name:"FastApi" , image: FastAPi},
    {name:"Flask " , image:Flask}
];

const databaseSkills = [
    { name: "SQL", image: Sql },
    { name: "SQLAlchemy", image: SqlAlchemy },
];

const webSkills = [
    { name: "HTML", image: Html },
    { name: "CSS", image: Css },
];

export default function Expertise() {
    return (
        <div className="justify-center bg-black mt-8 min-h-screen">
            <div className="flex flex-wrap">
                <SkillCategory title="Programming Languages" skills={languageSkills} />
                <SkillCategory title="Web Frameworks" skills={frameworkSkills} />
                <SkillCategory title="Database Languages" skills={databaseSkills} />
                <SkillCategory title="Web Technologies" skills={webSkills} />
            </div>
        </div>
    );
}

function SkillCategory({ title, skills }) {
    return (
        <div className="m-4">
            <h2 className="text-2xl text-white mb-2">{title}</h2>
            <div className="flex flex-wrap">
                {skills.map((skill, index) => (
                    <SkillCard key={index} skill={skill} />
                ))}
            </div>
        </div>
    );
}

function SkillCard({ skill }) {
    return (
        <div className="bg-gray-800 rounded-lg p-4 text-center shadow-xl shadow-purple-900  hover:shadow-lg hover:scale-105 transition duration-300 m-2">
            <div className="flex items-center justify-center h-24">
                <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-16 h-16 rounded-lg"
                />
            </div>
            <h3 className="text-white text-lg font-semibold my-4 ">{skill.name}</h3>
            <div className="flex justify-center">
                <button className="bg-purple-700 text-white px-4 py-2 rounded-md hover:bg-purple-800 transition duration-300">
                    Hover me
                </button>
            </div>
        </div>
    );
}
