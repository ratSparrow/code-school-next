import React from "react";
import Wavify from 'react-wavify';
import reactBanner from "../../assets/images/banner/react-banner.png"

export default function Banner() {
  return (
    <section className="relative py-16 px-6 md:px-20 text-center z-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="color-heading text-4xl md:text-6xl font-bold mb-6 leading-snug">
          Launch Your Career as a Full Stack Developer
        </h1>
        <p className="text-lg md:text-xl color-accent mb-8">
          Master in HTML, CSS, JavaScript, React, NodeJs & MongoDB <br /> from scratch — no experience needed!
        </p>
        <button className="button text-lg px-6 py-3 rounded-2xl bg-blue-600 ">
          Enroll Now
        </button>
        {/* <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <Wavify
            fill="#3B82F6"
            paused={false}
            options={{
              height: 1,
              amplitude: 40,
              speed: 0.2,
              points: 4,
              
            }}
            style={{ transform: 'scaleY(-1)' }}
          />
        </div> */}
        <div className="mt-12 flex justify-center">
          <img
            src={reactBanner} 
            alt="Learning React illustration"
            width="600"
            height="400"
            className="rounded-xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
}