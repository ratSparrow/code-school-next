import React, { Fragment } from 'react'
import { Chrono } from 'react-chrono';
import { courseCurriculum } from '../../utilities/fakeData';


const CourseTimeline = () => {

    return (
        <Fragment>

            <section id="timeline" className="text-center mx-2 py-0 md:py-8">
                <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4 pt-4 md:pt-8 gradient-text-primary">
                    কোর্স টাইমলাইন
                </h2>
                <p className="text-sm md:text-lg color-accent">
                    আপনার স্কিল ডেভেলপমেন্টের জন্য ধাপে ধাপে সাজানো ২১ সপ্তাহের পূর্ণাঙ্গ পরিকল্পনা —
                    <br className="hidden md:block"/>প্রতি সপ্তাহে ৩টি ক্লাসে শিখবেন ওয়েব ডেভেলপমেন্টের মূল বিষয়গুলো, হাতে-কলমে প্রজেক্টসহ।
                </p>
                <div className="w-full md:w-[1400px] mx-auto h-[500px] md:h-[700px] overflow-y-auto py-8 md:py-16">
                    <Chrono
                        disableToolbar={true}
                        items={courseCurriculum}
                        mode="VERTICAL_ALTERNATING"
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
