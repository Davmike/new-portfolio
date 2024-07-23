import { useContext, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import profile from "../../public/assets/mb.jpg";
import { MyContext } from "./Context";

const buttonCategories = ["About", "Projects", "Contact"];

function Header() {
  const context = useContext(MyContext);
  const { darkMode, setDarkMode }: any = context;

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header className="bg-[#181A1B] shadow-2xl px-[20px] py-[10px] fixed z-10 w-[100%] flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <img
          src={profile} // Replace with your profile photo path
          alt="Profile"
          className="w-10 h-10 rounded-full border-2 border-green-500"
        />
      </div>
      <ul className="flex justify-start items-center flex-row gap-[15px]">
        {buttonCategories.map((category, index) => (
          <li
            className="text-white hover:text-green-500 transition-colors duration-200 relative"
            key={index}
          >
            {category}
            <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-green-500 scale-x-0 hover:scale-x-100 transition-transform duration-200"></span>
          </li>
        ))}
      </ul>
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleDarkMode}
          className="text-white hover:text-green-500 transition-colors duration-200 relative w-10 h-10 flex items-center justify-center rounded-full border-2"
          style={{ borderColor: darkMode ? "white" : "green" }}
        >
          {darkMode ? <FaMoon size={24} /> : <FaSun size={24} />}
        </button>
      </div>
    </header>
  );
}

export default Header;
