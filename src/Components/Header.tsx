import React, { useContext, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import profile from "../../public/assets/mb.jpg";
import { MyContext } from "./Context";
import { Link } from "react-scroll";

const buttonCategories = ["About", "Projects", "Contact"];

function Header() {
  const context = useContext(MyContext);
  const {
    darkMode,
    setDarkMode,
    scrolled,
    setScrolled,
    hoveredIndex,
    setHoveredIndex,
    selected,
    setSelected,
  }: any = context;

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  let lastScrollY = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      lastScrollY = window.scrollY;

      // Update selected section
      const sections = buttonCategories.map((category) =>
        document.getElementById(category.toLowerCase().replace(/\s+/g, "-"))
      );

      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let currentSection = "";
      for (let section of sections) {
        if (section && section.offsetTop <= scrollPosition) {
          currentSection = section.id;
        }
      }

      if (currentSection) {
        setSelected(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, setScrolled, setSelected]);

  return (
    <header
      className={`bg-[#181A1B] shadow-2xl px-[20px] py-[10px] fixed z-10 w-[100%] flex justify-between items-center transition-transform duration-300 ${
        scrolled ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center space-x-4">
        <img
          src={profile}
          alt="Profile"
          className="w-10 h-10 rounded-full border-2 border-green-500"
        />
      </div>
      <div className="flex gap-[20px]">
        <ul className="flex justify-start items-center flex-row gap-[15px]">
          {buttonCategories.map((category, index) => {
            const categoryId = category.toLowerCase().replace(/\s+/g, "-");
            return (
              <li
                key={index}
                className="text-white cursor-pointer hover:text-green-500 transition-colors duration-200 relative md:text-[18px] lg:text-[25px]"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setSelected(categoryId)}
                data-to={categoryId}
              >
                <Link
                  to={categoryId}
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  {category}
                  {selected === categoryId && (
                    <div className="absolute bg-[#16A34A] w-full h-[5px] rounded-[5px] bottom-[40px]"></div>
                  )}
                  {hoveredIndex === index && (
                    <div className="absolute bg-[#16A34A] w-full h-[5px] rounded-[5px] top-[40px]"></div>
                  )}
                </Link>
              </li>
            );
          })}
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
      </div>
    </header>
  );
}

export default Header;
