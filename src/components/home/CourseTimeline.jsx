import React, { Fragment } from 'react'
import { Chrono } from 'react-chrono';
import { courseCurriculum } from '../../utilities/fakeData';


const CourseTimeline = () => {

    return (
        <Fragment>

            <section id="timeline" className="">
                <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-6 text-center pt-16">
                    কোর্স টাইমলাইন
                </h2>
                <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto pb-8 text-center">
                    আপনার স্কিল ডেভেলপমেন্টের জন্য ধাপে ধাপে সাজানো ২১ সপ্তাহের পূর্ণাঙ্গ পরিকল্পনা —
                    প্রতি সপ্তাহে ৩টি ক্লাসে শিখবেন ওয়েব ডেভেলপমেন্টের মূল বিষয়গুলো, হাতে-কলমে প্রজেক্টসহ।
                </p>
                <div className="max-w-5xl mx-auto h-[300px] md:h-[650px] overflow-y-auto">
                    <Chrono
                        items={courseCurriculum}
                        mode="VERTICAL"
                        theme={{
                            primary: "#FB923C",         // Timeline line
                            secondary: "#FFFFFF",       // Dot color
                            cardBgColor: "#F3F4F6",     // Card background
                            cardForeColor: "#374151",   // Text
                            titleColor: "#111827",      // Date/year
                        }}
                        cardHeight={160}
                        // hideControls
                        slideShow
                        enableOutline
                        scrollable
                    />
                </div>
            </section>
        </Fragment>
    )
}

export default CourseTimeline
