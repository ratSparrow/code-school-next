import React from "react";
import { FaClock, FaVideo, FaProjectDiagram, FaChalkboardTeacher, FaCertificate, FaInfinity, FaHeadset } from "react-icons/fa";

export default function CourseFeatures() {
    const features = [
        {
            icon: <FaClock className="text-blue-600 text-4xl group-hover:scale-110 transition-transform duration-300" />,
            title: "150 Days Duration",
            description: "Structured over 150 days with weekly goals and checkpoints."
        },
        {
            icon: <FaChalkboardTeacher className="text-yellow-500 text-4xl group-hover:scale-110 transition-transform duration-300" />,
            title: "Live Sessions",
            description: "Weekly Q&A and support sessions with the instructor."
        },
        {
            icon: <FaProjectDiagram className="text-green-500 text-4xl group-hover:scale-110 transition-transform duration-300" />,
            title: "Real Projects",
            description: "Build real-world projects to strengthen your portfolio."
        },

        {
            icon: <FaVideo className="text-purple-500 text-4xl group-hover:scale-110 transition-transform duration-300" />,
            title: "Video Records",
            description: "Engaging, beginner-friendly video records covering for live class practice."
        },
         {
            icon: <FaHeadset className="text-indigo-500 text-4xl group-hover:scale-110 transition-transform duration-300" />,
            title: "Support Sessions",
            description: "Get help via community Facebook & WhatsApp group."
        },
        {
            icon: <FaInfinity className="text-pink-500 text-4xl group-hover:scale-110 transition-transform duration-300" />,
            title: "Lifetime Access",
            description: "Come back and review the course anytime, forever."
        },
        {
            icon: <FaCertificate className="text-red-500 text-4xl group-hover:scale-110 transition-transform duration-300" />,
            title: "Certificate of Completion",
            description: "Receive a professional certificate after finishing the course."
        },
       
    ];

    return (
        <section className="bg-white py-20 px-6 md:px-20 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
                Course Features
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                Everything you need to succeed — from lessons and projects to lifetime access and community support.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="group bg-blue-50 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:border-blue-300"
                    >
                        <div className="mb-4 flex justify-center">
                            {feature.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
