
import Wavify from 'react-wavify';
import reactBanner from "../../assets/images/banner/react-banner.png"
import nodeJsBanner from "../../assets/images/banner/nodejs-banner.png"
import pythonBanner from "../../assets/images/banner/python-banner.png"
import Slider from "react-slick";

export default function Banner() {



  return (
    <section className="relative bg-indigo-50 overflow-hidden">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{transform:"scaleY(-1)" }} className="absolute">
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="10%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
        <path
          fill="url(#waveGradient)"
          fillOpacity="1"
          d="M0,128L34.3,144C68.6,160,137,192,206,197.3C274.3,203,343,181,411,144C480,107,549,53,617,69.3C685.7,85,754,171,823,181.3C891.4,192,960,128,1029,122.7C1097.1,117,1166,171,1234,170.7C1302.9,171,1371,117,1406,90.7L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        />
      </svg>


      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-20">
        {/* Text Content */}
        <div className="max-w-xl z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-relax mb-6" style={{ lineHeight: 1.4 }}>
            <span className="!text-white">বাংলায় কোডিং শিখুন,</span> গড়ুন <span className="!text-white">আপনার আইটি </span>ক্যারিয়ার — <span className="!text-white">একদম শুরু </span>থেকে
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            শুরু করুন শূন্য থেকে, হয়ে উঠুন <br /> ফুল-স্ট্যাক ডেভেলপার — বাংলায় শেখা, আপনার মতো শিক্ষার্থীদের জন্য।
          </p>
          <div className="flex gap-4">
            <a target="_blank" href="https://forms.gle/4LoKrvCZZSwhHXj67">
              <button className="button text-lg px-6 py-3 rounded-2xl bg-blue-600 ">
                এখনই ভর্তি হোন
              </button>
            </a>
            <a target="_blank" href="https://forms.gle/4LoKrvCZZSwhHXj67">
              <button className="button text-lg px-6 py-3 rounded-2xl bg-blue-600 ">
                বিস্তারিত জানুন
              </button>
            </a>
          </div>
        </div>

        <div className="py-16 px-8 z-10">
          <div className="" >
            <img
              src={reactBanner}
              alt="Course Illustration"
              className="rounded-md w-full"
            />
          </div>
        </div>


      </div>

      {/* Wave Background */}
      {/* <div className="absolute top-0 left-0 w-full" style={{transform:"scaleY(-1)"}}>
        <Wavify
          fill="#3B82F6" // indigo-600
          paused={false}
          options={{
            height: 1,
            amplitude: 30,
            speed: 0.2,
            points: 4,
          }}
          style={{ height: 120 }}
        />
      </div> */}
    </section>
  );
}