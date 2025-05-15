import React from "react";
import { BiLogoMongodb, BiLogoRedux } from "react-icons/bi";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaServer, FaSass } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";

export default function WhatYouWillLearn() {
    const topics = [
        { icon: <FaHtml5 className="text-orange-500 text-6xl transition-transform duration-300 group-hover:scale-125" />, label: "HTML5" },
        { icon: <FaCss3Alt className="text-blue-500 text-6xl transition-transform duration-300 group-hover:scale-125" />, label: "CSS3" },
        { icon: <FaSass className="text-blue-500 text-6xl transition-transform duration-300 group-hover:scale-125" />, label: "SASS" },
        { icon: <FaGithub className="text-gray-700 text-6xl transition-transform duration-300 group-hover:scale-125" />, label: "Git & GitHub" },
        { icon: <FaJs className="text-yellow-400 text-6xl transition-transform duration-300 group-hover:scale-125" />, label: "JavaScript" },
        { icon: <FaReact className="text-cyan-500 text-6xl transition-transform duration-300 group-hover:scale-125" />, label: "React" },
        { icon: <BiLogoRedux className="text-cyan-500 text-6xl transition-transform duration-300 group-hover:scale-125" />, label: "Redux" },
        { icon: <IoLogoNodejs className="text-gray-700 text-6xl transition-transform duration-300 group-hover:scale-125" />, label: "Node Js" },
        { icon: <BiLogoMongodb className="text-gray-700 text-6xl transition-transform duration-300 group-hover:scale-125" />, label: "MongoDB" },
        { icon: <FaServer className="text-purple-500 text-6xl transition-transform duration-300 group-hover:scale-125" />, label: "Deployment" },
    ];

    return (
        <section className="py-16 px-6 md:px-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold color-heading mb-6">
                What You’ll Learn
            </h2>
            <p className="text-lg color-text mb-10 max-w-2xl mx-auto">
                This course covers everything you need to start building responsive, modern websites from scratch.
            </p>
            <div className="background-gradient flex justify-between items-center p-16 rounded">
                {topics.map((topic, index) => (
                    <div key={index} className="group flex flex-col items-center cursor-pointer">
                        {topic.icon}
                        <span className="mt-3 text-lg font-medium text-gray-700">{topic.label}</span>
                    </div>
                ))}
            </div>
            {/* Optional: Embed a walkthrough video */}
            <div className="mt-12">
                <iframe
                    className="w-full max-w-2xl aspect-video mx-auto rounded-xl shadow-lg"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Course Walkthrough"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </section>
    );
}
