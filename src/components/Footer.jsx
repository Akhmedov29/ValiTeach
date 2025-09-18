import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-base-300 py-6 mt-[70px] border-[1px] border-gray-700">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Left */}
        <p className="text-sm">
          © {new Date().getFullYear()} MyCourse. All rights reserved.
        </p>

        {/* Right */}
        <div className="flex space-x-5 mt-3 md:mt-0">
          <a
            href="https://t.me/Vali_teach_admin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            Telegram
          </a>
          <a
            href="https://instagram.com/valiteach.uz"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
          >
            Instagram
          </a>
          <a
            href="https://youtube.com/@vali_teach_kokand"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition"
          >
            YouTube
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
