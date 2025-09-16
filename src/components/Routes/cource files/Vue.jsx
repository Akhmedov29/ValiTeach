import { Link } from "react-router-dom";

function Vue() {
  return (
    <div className="w-full h-[65vh] flex justify-center items-center flex-col bg-base-300 text-white rounded-lg border border-gray-700 p-10">
      <div className="flex justify-between items-center">
        {/* Left: Text Section */}
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Vue JS & Vue X</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Xozirda mashhur JavaScript frameworklaridan biri bo'lgan VueJSni
            to'liq o'rganing. VueJS darslari to'liq kurs o‘zbek tilida. Ushbu
            kursda siz VueJS asoslari, komponentlar tuzilishi, reaktivlik va Vue
            Router kabi muhim tushunchalar bilan tanishasiz. O'quv davomida Vuex
            yordamida to‘liq **fullstack loyiha** qurib, bilimlaringizni
            amaliyot orqali mustahkamlaysiz. Bundan tashqari, Pinia, server
            bilan ishlash va backend bilan integratsiya kabi mavzularni ham
            qamrab olganmiz. Real loyihalar yordamida VueJS orqali professional
            darajadagi veb-ilovalarni yaratishni o'rganing!
          </p>

          {/* Icons */}
          <div className="flex items-center flex-wrap text-sm text-gray-400 gap-4 mb-4">
            <div className="flex items-center gap-1">
              <span>👥</span>
              <span>1283 o'quvchilar</span>
            </div>
            <div className="flex items-center gap-1">
              <span>📅</span>
              <span>2025, 11-Mart</span>
            </div>
            <div className="flex items-center gap-1">
              <span>📚</span>
              <span>89 darslar soni</span>
            </div>
          </div>

          {/* Duration + Rating */}
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span>
              Davomiylik: <span className="text-white font-semibold">24</span>{" "}
              soat <span className="text-white font-semibold">08</span> daqiqa
            </span>
            <span className="flex items-center gap-1 text-yellow-400 font-bold">
              5 ★ ★ ★ ★ ★ <span className="text-white font-normal">(68)</span>
            </span>
          </div>
        </div>

        {/* Right: React Logo with Play Button */}
        <div className="relative w-72 h-44 flex-shrink-0">
          <img
            src="/public/Kurs-images/v.webp" // pathni moslashtiring
            alt="React Logo"
            className="w-full h-full object-contain rounded-md"
          />
        </div>
      </div>
      <div className="w-full h-10 flex justify-end items-start pr-3">
        <Link
          to={"/cources/foundation/watch"}
          className="btn btn-outline w-[280px]"
        >
          Dars ko'rish
        </Link>
      </div>
    </div>
  );
}

export default Vue;
