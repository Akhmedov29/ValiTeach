import React from "react";
import angular from "/Kurs-images/angular.webp";
import { Link } from "react-router-dom";

function Angular() {
  return (
    <div className="w-full h-[65vh] flex justify-center items-center flex-col bg-base-300 text-white rounded-lg border border-gray-700 p-10">
      <div className="flex justify-between items-center">
        {/* Left: Text Section */}
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Angular</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Ushbu kursda siz Angular 9 dan to 20-versiyagacha bo'lgan
            o‘zgarishlarni amaliy misollar bilan chuqur o‘rganasiz. Kurs yangi
            boshlovchilar uchun ham, tajribali frontend dasturchilar uchun ham
            foydali bo‘lib, modern Angular arxitekturasi, komponentlar,
            @Input/@Output, Reactive Forms, HttpClient, va Routing kabi
            fundamental tushunchalardan boshlab, NgRx bilan state management,
            Actions, Reducers, Effects va Selectorsni ham to‘liq tushunishga
            yordam beradi. Kursni tugatganingizda, siz zamonaviy Angular
            ilovalarini to‘liq mustaqil yozish, katta kod bazalarni boshqarish
            va state management’ni mukammal tushunish darajasiga erishasiz.
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

        <div className="relative w-72 h-44 flex-shrink-0">
          <img
            src={angular}
            alt="Logo"
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

export default Angular;
