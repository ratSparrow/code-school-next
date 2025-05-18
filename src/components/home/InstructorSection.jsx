import React from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import profilePhoto from "../../assets/images/others/rafi.jpg"

export default function InstructorSection() {
  return (
    <section id="instrctor" className="bg-white py-20 px-6 md:px-20">
      <h2 className="text-3xl md:text-5xl font-extrabold text-center text-gray-800 mb-12">
        Meet Your Instructor
      </h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center">
          <img
            src={profilePhoto} // Replace with your actual photo URL
            alt="Instructor"
            className="rounded-full shadow-lg w-64 h-64 object-cover border-4 border-indigo-200"
          />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">M. Rafiul Alam Tonmoy</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            I'm a frontend developer and educator  with over 4 years of experience building modern web applications using HTML, CSS, JavaScript, and 
            React. I’ve trained dozens of aspiring developers who now work professionally.
          </p>
          <p className="text-gray-600 leading-relaxed">
            This course is designed for beginners and local learners who want real-world, 
            job-ready skills. Whether you’re just starting out or aiming to freelance, I’ll guide you every step of the way.
          </p>
        </div>
      </div>
    </section>
  );
}
