
import Slider from "react-slick";
import { whatYouLearnTopics } from "../../utilities/fakeData";
import { whatYouLearnSettings } from "../../elements/SlickSettings";

export default function WhatYouWillLearn() {



    return (
        <section id="whatyoulearn" className="text-center mx-2 py-0 md:py-8">
            <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4 pt-4 md:pt-8 gradient-text-primary">
                আপনি যা শিখবেন
            </h2>
            <p className="text-sm md:text-lg color-accent ">
                এই কোর্সে আপনি শিখবেন কিভাবে একদম শুরু থেকে রেসপন্সিভ ও মডার্ন ওয়েবসাইট তৈরি করতে হয়। <br />
                HTML, CSS, JavaScript, React, Git, এবং Deployment সহ পুরো Frontend জার্নির জন্য যা যা প্রয়োজন — সবই রয়েছে এখানে।
            </p>
            <div className="py-8 md:py-16">
                <Slider {...whatYouLearnSettings}>
                    {whatYouLearnTopics.map((topic, index) => (
                        <div key={index} className="">
                            <div className="flex flex-col items-center justify-center cursor-pointer">
                                <h1>{topic.icon}</h1>
                                <h5 className="mt-5 text-lg font-medium text-gray-700">{topic.label}</h5>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}
