
import Slider from "react-slick";
import { projectSyllabus } from "../../utilities/fakeData";


const ProjectSyllabus = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
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
    <div id="projects" className="w-full mx-auto px-4 py-20 ">
      <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-6 text-center pt-16">আপনি যেসব প্রজেক্ট করবেন</h2>
      <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto text-center mb-8">
        ক্লাসের প্রতিটি ধাপে হাতে-কলমে তৈরি করবেন বাস্তবভিত্তিক প্রজেক্ট, যা আপনার প্রোফাইলকে করবে আরও শক্তিশালী।
      </p>
      <Slider {...settings}>
        {projectSyllabus.map((project, index) => (
          <div key={index} className="px-4 ">
            <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 h-[650px] flex flex-col justify-between" >
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 space-y-3">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-600">{project.overview}</p>

                <div>
                  <h4 className="font-medium text-sm text-gray-800">Key Outcomes:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-700">
                    {project.outcomes.map((outcome, i) => (
                      <li key={i}>{outcome}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-sm text-gray-800">Features:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-700">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-sm text-gray-800">Tools Used:</h4>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {project.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectSyllabus;
