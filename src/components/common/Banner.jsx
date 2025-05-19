import Wavify from 'react-wavify';
import reactBanner from "../../assets/images/banner/react-banner.png"
import nodeJsBanner from "../../assets/images/banner/nodejs-banner.png"
import pythonBanner from "../../assets/images/banner/python-banner.png"
import Slider from "react-slick";

export default function Banner() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
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

  const banners = [
    {
      id: 1,
      value: reactBanner
    },
    {
      id: 2,
      value: nodeJsBanner
    },
    {
      id: 1,
      value: pythonBanner
    },
  ]


  return (
    <section id="banner" className="w-full md:w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 py-8 md:py-16">
      <div className="mx-2">
        <h1 className="text-center md:text-start text-2xl md:text-5xl font-bold mb-2 md:mb-4 gradient-text-primary" style={{ lineHeight: "1.6" }}>
          বাংলায় কোডিং শিখুন, গড়ুন আপনার আইটি ক্যারিয়ার — একদম  শুরু থেকে
        </h1>
        <p className="text-sm md:text-lg color-accent mb-4 text-center md:text-start">
          শুরু করুন শূন্য থেকে, হয়ে উঠুন ফুল-স্ট্যাক ডেভেলপার — বাংলায় শেখা, আপনার মতো শিক্ষার্থীদের জন্য।
        </p>
        <div className="flex gap-4 items-center justify-center md:justify-start">
          <a target="_blank" href="https://forms.gle/4LoKrvCZZSwhHXj67">
            <button className="button text-sm md:text-lg px-4 md:px-6 py-3 md:py-3 rounded-2xl">
              এখনই ভর্তি হোন
            </button>
          </a>
          <a target="_blank" href="https://forms.gle/4LoKrvCZZSwhHXj67">
            <button className="button text-sm md:text-lg px-4 md:px-6 py-3 md:py-3 rounded-2xl">
              বিস্তারিত জানুন
            </button>
          </a>
        </div>
      </div>

      <div className="mx-2">
        <Slider {...settings}>
          {banners.map((img, index) => (
            <div key={index} className="mt-4 md:mt-0">
              <div> <img
                src={img.value}
                alt="Course Illustration"
                className="rounded-md w-full md:w-[600px] h-auto md:h-[440px]"
              /></div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}