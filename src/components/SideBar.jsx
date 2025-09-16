import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTelegramPlane,
  FaYoutube,
  FaBars,
} from "react-icons/fa";
import { SideBarLinks } from "./../constants/index";
import { Link } from "react-router-dom";
import { useState } from "react";

function SideBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="md:hidden fixed z-50">
        <button
          className="btn btn-ghost text-xl"
          onClick={() => setOpen(!open)}
        >
          <FaBars />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-[99vh] w-[70%] mt-1 ml-1 md:w-[16%] bg-base-300 text-base-content rounded border-[1px] border-gray-700 px-3 py-4 flex flex-col justify-between transition-transform duration-300 z-40
        ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        {/* Pages */}
        <div className="my-6 mx-2 ">
          <h1 className="font-bold text-gray-500 mb-3">Sahifalar</h1>
          <div >
            {SideBarLinks.map((item, idx) => (
              <Link
                key={idx}
                to={item.href}
                onClick={() => setOpen(false)} // mobil ekranda bosilganda yopiladi
                className="w-full flex items-center gap-2 mb-3 p-2 hover:bg-base-100 hover:rounded cursor-pointer transition-transform duration-200 hover:scale-105"
              >
               <button className="w-9 h-9 bg-base-100 rounded flex items-center justify-center"><div className="w-7 h-7 text-[10p]" alt="">{item.logo}</div></button>
                <span className="text-lg font-semibold">{item.text}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Social Icons */}
        <div className="border-t border-gray-700 pt-4">
          <div className="flex justify-center items-center gap-5">
            <a
              href="https://t.me/Vali_teach_admin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegramPlane className="text-2xl hover:text-blue-400 transition" />
            </a>
            <a
              href="https://instagram.com/valiteach.uz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-2xl hover:text-pink-500 transition" />
            </a>
            <a
              href="https://youtube.com/@vali_teach_kokand"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="text-2xl hover:text-red-500 transition" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-2xl hover:text-blue-600 transition" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-2xl hover:text-gray-400 transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Background overlay for mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </>
  );
}

export default SideBar;
