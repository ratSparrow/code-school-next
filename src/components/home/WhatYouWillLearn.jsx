import { BiLogoMongodb, BiLogoRedux } from "react-icons/bi";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaServer, FaSass } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMui } from "react-icons/si";
import { TbBrandFigma } from "react-icons/tb";
import Slider from "react-slick";

export default function WhatYouWillLearn() {
    const topics = [
        { icon: <FaHtml5 className="text-orange-500 text-6xl transition-transform duration-300 group-hover:scale-125" />, label: "HTML5" },
        { icon: <FaCss3Alt className="text-blue-500 text-6xl transition-transform duration-300 group-hover:scale-125" />, label: "CSS3" },
        { icon: <TbBrandFigma className="text-blue-500 text-6xl transition-transform duration-300 group-hover:scale-125" />, label: "Figma to HTML" },
        { icon: <RiTailwindCssFill className="text-blue-500 text-6xl transition-transform duration-300 group-hover:scale-125" />, label: "Tailwind" },
        { icon: <FaGithub className="text-gray-700 text-6xl transition-transform duration-300 group-hover:scale-125" />, label: "Git & GitHub" },
        { icon: <FaJs className="text-yellow-400 text-6xl transition-transform duration-300 group-hover:scale-125" />, label: "JavaScript" },
        { icon: <FaReact className="text-cyan-500 text-6xl transition-transform duration-300 group-hover:scale-125" />, label: "React" },
        { icon: <SiMui className="text-cyan-500 text-6xl transition-transform duration-300 group-hover:scale-125" />, label: "Material React" },
        { icon: <BiLogoRedux className="text-cyan-500 text-6xl transition-transform duration-300 group-hover:scale-125" />, label: "Redux" },
        { icon: <IoLogoNodejs className="text-gray-700 text-6xl transition-transform duration-300 group-hover:scale-125" />, label: "Node Js" },
        { icon: <BiLogoMongodb className="text-gray-700 text-6xl transition-transform duration-300 group-hover:scale-125" />, label: "MongoDB" },
        { icon: <FaServer className="text-purple-500 text-6xl transition-transform duration-300 group-hover:scale-125" />, label: "Deployment" },
    ];
    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 10,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <section id="whatyoulearn" className="py-16 px-6 md:px-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold color-heading mb-6">
                What You’ll Learn
            </h2>
            <p className="text-lg color-text mb-10 max-w-2xl mx-auto">
                This course covers everything you need to start building responsive, modern websites from scratch.
            </p>
            <div className="p-16">
                <Slider {...settings}>
                    {topics.map((topic, index) => (
                        <div key={index} className="">
                            <div key={index} className="flex flex-col items-center justify-center cursor-pointer">
                                <h1>{topic.icon}</h1>
                                <h5 className="mt-5 text-lg font-medium text-gray-700">{topic.label}</h5>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>


            {/* <div className="mt-12">
                <iframe
                    className="w-full max-w-2xl aspect-video mx-auto rounded-xl shadow-lg"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Course Walkthrough"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div> */}
        </section>
    );
}
