import { Link } from "react-router-dom";
import { ProjectsLinks } from "../../constants/Projects";
import { FaArrowRight } from "react-icons/fa";

const Projects = ({ limit }) => {
  // Agar limit berilgan bo‘lsa, shunga ko‘ra filter qilamiz
  const displayedProjects = limit ? ProjectsLinks.slice(0, limit) : ProjectsLinks;

  return (
    <div className="flex flex-col gap-8">
      <div>
        <Link to="/project" className="flex items-end gap-3 text-3xl">
          Loyihalar
          <i className="lni lni-arrow-right transition-transform duration-300 ease-in-out hover:translate-x-2 text-green-200"></i>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedProjects.map((item, idx) => (
          <Link
            key={idx}
            to={item.href}
            className="w-[370px] h-[250px] bg-base-200 rounded-lg overflow-hidden hover:bg-base-100 cursor-pointer"
          >
            <div className="flex items-center justify-center h-[85%]">
              <img src={item.logo} alt={item.text} className="w-full h-full object-cover" />
            </div>

            <div className="bg-black text-white px-3 py-2">
              <span className="text-lg font-mono font-semibold">
                {item.text}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
