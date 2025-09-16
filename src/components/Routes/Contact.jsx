import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTelegramPlane,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Contact() {
  return (
        <div className="w-full h-[66vh]">
          <div> <h1 className="font-mono">Murojat Uchun:</h1>
          </div>
          <div className="flex justify-start items-start gap-5">
            <Link to={"https://t.me/Vali_teach_admin"} className="relative group hover:text-blue-400 flex justify-around items-center gap-1">
              <a
                href="https://t.me/Vali_teach_admin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegramPlane className="text-2xl transition" />
              </a>
              <h1>Telegram</h1>
            </Link>
            <Link to={"https://instagram.com/valiteach.uz"} className="flex justify-around items-center gap-1 hover:text-pink-500">
              <a
                href="https://instagram.com/valiteach.uz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-2xl  transition" />
              </a>
              <h1>Instagram</h1>
            </Link>
            <Link to={"https://youtube.com/@vali_teach_kokand"} className="flex justify-around items-center gap-1 hover:text-red-500">
              <a
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="text-2xl transition" />
              </a>
              <h1>YouTube</h1>
            </Link>
            <Link to={"https://linkedin.com"} className="flex justify-around items-center gap-1 hover:text-blue-600">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-2xl  transition" />
              </a>
              <h1>Linkedin</h1>
            </Link>
            <Link to={"https://github.com"} className="flex justify-around items-center gap-1 hover:text-gray-400">
              <a
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-2xl  transition" />
              </a>
              <h1>GitHub</h1>
            </Link>
          </div>
        </div>
  );
}

export default Contact;
