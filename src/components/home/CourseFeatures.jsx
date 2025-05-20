import React from "react";
import { FaClock, FaVideo, FaProjectDiagram, FaChalkboardTeacher, FaCertificate, FaInfinity, FaHeadset } from "react-icons/fa";
import Slider from "react-slick";
import { features } from "../../utilities/fakeData";
import { courseFeatureSettings } from "../../elements/SlickSettings";

export default function CourseFeatures() {

    return (
        <section id="features" className="text-center mx-2 py-0 md:py-8">
            <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4 pt-4 md:pt-8 gradient-text-primary">
                কোর্স ফিচারস
            </h2>
            <p className="text-sm md:text-lg color-accent mx-2">
                এই কোর্সে রয়েছে সফলতার জন্য প্রয়োজনীয় সব উপাদান —
             <br className="hidden md:block" />   সু-সংগঠিত লেসন, হাতে-কলমে প্রজেক্ট, আজীবন কোর্স অ্যাক্সেস,
                এবং শিক্ষার্থী কমিউনিটির সহায়তা — সবকিছু এক জায়গায়।
            </p>
            <div className="py-8 md:py-16">
                <Slider {...courseFeatureSettings}>
                    {features.map((feature, index) => (
                        <div key={index} className="md:px-2">
                            <div className="bg-blue-50 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:border-blue-300 h-[200px]">
                                <div className="mb-4 flex justify-center">
                                    {feature.icon}
                                </div>
                                <h3 className="color-heading text-lg md:text-xl font-semibold mb-2">{feature.title}</h3>
                                <p className="color-accent text-sm md:text-lg">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </Slider>

            </div>
        </section>
    );
}
