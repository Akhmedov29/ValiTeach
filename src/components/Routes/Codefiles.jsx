import { FaGithub } from "react-icons/fa";
import { projects } from "../../constants/Code";
import { Link } from "react-router-dom";

function Codefiles({ limit }) {
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <div className="flex flex-col gap-6">
      <div>
        <Link to="/codefiles" className="flex items-end gap-3 text-3xl">
          Kod Manbalar
          <i className="lni lni-arrow-right transition-transform duration-300 ease-in-out hover:translate-x-2 text-green-500"></i>
        </Link>
      </div>

      <div className="text-white font-mono font-bold grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {displayedProjects.map((project, index) => (
          <a
            href={project.href}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex justify-between items-center bg-gray-800 p-4 rounded cursor-pointer hover:bg-gray-700 transition-colors">
              <span>{project.name}</span>
              <FaGithub size={20} />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Codefiles;
