
import Slider from "react-slick";
import { projectSyllabus } from "../../utilities/fakeData";
import { projectSettings } from "../../elements/SlickSettings";


const ProjectSyllabus = () => {


  return (
    <div id="projects" className="w-full md:w-[1400px] mx-auto py-0 md:py-8">
      <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4 pt-4 md:pt-8 gradient-text-primary text-center">আপনি যেসব প্রজেক্ট করবেন</h2>
      <p className="text-sm md:text-lg color-accent text-center">
        ক্লাসের প্রতিটি ধাপে হাতে-কলমে তৈরি করবেন বাস্তবভিত্তিক প্রজেক্ট, <br className="hidden md:block" /> যা আপনার প্রোফাইলকে করবে আরও শক্তিশালী।
      </p>
      <div className="py-8 md:py-16">
        <Slider {...projectSettings}>
          {projectSyllabus.map((project, index) => (
            <div key={index} className="">
              <div className="rounded-2xl hover:shadow-2xl border border-blue-100 hover:border-blue-300 transition-all 
            duration-300 md:h-[700px] flex flex-col justify-between md:mx-2" >
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-2 md:p-4 space-y-2 md:space-y-3">
                  <h3 className="color-heading text-lg md:text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="color-accent text-sm md:text-lg">{project.overview}</p>

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
    </div>
  );
};

export default ProjectSyllabus;
