import { CourceLinks } from "../../constants/Cource";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function Cources({ limit }) {
  const displayedCources = limit ? CourceLinks.slice(0, limit) : CourceLinks;

  return (
    <div className="flex flex-col gap-6">
      <div>
        <Link to="/codefiles" className="flex items-end gap-3 text-3xl">
          Kurslar
          <i className="lni lni-arrow-right transition-transform duration-300 ease-in-out hover:translate-x-2 text-sky-400"></i>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedCources.map((item, idx) => (
          <Link to={item.href} key={idx} className="text-lg font-mono font-semibold">
            <div className="w-[370px] h-[250px] bg-base-200 rounded-lg overflow-hidden hover:bg-base-100 cursor-pointer">
              <div className="flex items-center justify-center h-[85%]">
                <img
                  src={item.logo}
                  alt={item.text}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="bg-black text-white px-3 py-2">{item.text}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Cources;
