import { Link } from "react-router-dom";

function Javascript() {
  return (
    <div className="w-full h-[65vh] flex justify-center items-center flex-col bg-base-300 text-white rounded-lg border border-gray-700 p-10">
      <div className="flex justify-between items-center">
        {/* Left: Text Section */}
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">JavaScript</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Eng mashhur dasturlash tillaridan biri xisoblangan Javascript haqida
            to'liq kurs. Ushbu kursda siz JavaScriptni to'liq amaliyot yordamida
            o'rganishingiz mumkin, xar bir nazariy bilimlarni amaliyotda
            qo'llab. Telegram bot yordamida integratsiya qilib, loyihalar
            quramiz. Webpack yordamida loyihani modullarga bo'lish, json-server
            bilan ishlash, server bilan ishlash va yana juda ham ko'p kerakli
            bo'lgan texnologiyalar va ma'lumotlar.
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
            src="/public/Kurs-images/js.webp" // pathni moslashtiring
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

export default Javascript;
