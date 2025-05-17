import React, { Fragment } from 'react'
import { Chrono } from 'react-chrono';
import { courseCurriculum } from '../../utilities/fakeData';


const CourseTimeline = () => {
   
    return (
        <Fragment>

            <section id="timeline" className="bg-gradient-to-b from-white to-blue-50 py-12 px-4 sm:px-6 lg:px-8 rounded-2xl shadow-xl">
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 text-center">
                   Course Timeline
                </h2>
                <div className="max-w-6xl mx-auto h-[300px] md:h-[650px] overflow-y-auto">
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
