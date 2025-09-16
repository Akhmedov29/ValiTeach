import { Link } from "react-router-dom";
import Cources from "./Cources";
import Projects from "./Projects";
import Codefiles from "./Codefiles";

function Home() {
  return (
    <div className="flex flex-col gap-5">
      <section className="w-full bg-base-300 flex justify-center items-center py-10 md:py-20 px-4">
        <div className="max-w-4xl w-full flex flex-col gap-4 text-center items-center rounded border border-gray-700 p-6">
          {/* Title */}
          <h1 className="text-2xl md:text-4xl font-bold">
            ValiTeach - IT (AYTI) kurslari
          </h1>

          {/* Description */}
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            ValiTeach - bu sizga dasturlashni o&apos;rganishda yordam beradigan
            platforma. <br className="hidden sm:block" />
            Pullik darslardagi ma&apos;lumotlarni bepul olishingiz mumkin.
            Barchasi bir joyda!
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <Link
              to="/cources"
              className="btn btn-outline btn-accent w-[150px] h-[45px] rounded-[20px] flex items-center justify-center "
            >
              Kurslar
            </Link>
            <Link
              to="/project"
              className="btn btn-outline btn-primary w-[150px] h-[45px] rounded-[20px] items-center justify-center flex"
            >
              Loyihalar
            </Link>
          </div>
        </div>
      </section>
      <div className="w-full h-full">
        <Cources limit={3}/>
      </div>
      <div>
        <div>
          <Projects limit={3}/>
        </div>
      </div>
      <div>
        <div>
          <Codefiles limit={6}/>
        </div>
      </div>
    </div>
  );
}

export default Home;
