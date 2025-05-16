import React, { Fragment } from 'react'
import { Chrono } from 'react-chrono';


const CourseTimeline = () => {
    const items = [
        { title: "2010", cardTitle: "Started College", cardSubtitle: "Computer Science", cardDetailedText: "Learned programming." },
        { title: "2014", cardTitle: "Graduated", cardSubtitle: "Bachelor's Degree" },
        { title: "2010", cardTitle: "Started College", cardSubtitle: "Computer Science", cardDetailedText: "Learned programming." },
        { title: "2014", cardTitle: "Graduated", cardSubtitle: "Bachelor's Degree" },
        { title: "2010", cardTitle: "Started College", cardSubtitle: "Computer Science", cardDetailedText: "Learned programming." },
        { title: "2014", cardTitle: "Graduated", cardSubtitle: "Bachelor's Degree" },
    ];
    return (
        <Fragment>

            <section className="bg-gradient-to-b from-slate-50 to-slate-200 py-12 px-4 sm:px-6 lg:px-8 rounded-2xl shadow-xl">
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 text-center">
                   Course Timeline
                </h2>
                <div className="max-w-6xl mx-auto  h-[600px] overflow-y-auto">
                    <Chrono
                        items={items}
                        mode="VERTICAL"
                        theme={{
                            primary: "#0f172a",         // Timeline line
                            secondary: "#38bdf8",       // Dot color
                            cardBgColor: "#ffffff",     // Card background
                            cardForeColor: "#0f172a",   // Text
                            titleColor: "#0f172a",      // Date/year
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
