import { projectSyllabus } from "../../utilities/fakeData";

const ProjectSyllabus = () => {
    return (
        <div className="w-full md:w-[1300px] mx-auto px-4 py-20 md:px-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 text-center">Hands On Project You'll Install</h2>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
                {projectSyllabus.map((project, index) => (
                    <div key={index} className="group bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
                        <img
                            src={project.thumbnail}
                            alt={project.title}
                            className="w-full h-48 object-cover"
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
                ))}
            </div>
        </div>
    );
};

export default ProjectSyllabus;