import { useContext, useEffect } from "react";
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
      className={`bg-[#051018] shadow-2xl px-[20px] py-[10px] fixed z-10 w-[100%] flex justify-between items-center transition-transform duration-300 ${
        scrolled ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center space-x-4">
        <img
          src={profile}
          alt="Profile"
          className="w-10 h-10 rounded-full border-2 border-[white]"
        />
      </div>
      <div className="flex gap-[20px]">
        <ul className="flex justify-start items-center flex-row gap-[15px]">
          {buttonCategories.map((category, index) => {
            const categoryId = category.toLowerCase().replace(/\s+/g, "-");
            return (
              <li
                key={index}
                className={`relative cursor-pointer transition-colors duration-200 md:text-[18px] lg:text-[25px] ${
                  selected === categoryId
                    ? "text-[white]"
                    : "text-[white] hover:text-[#dfd4d4]"
                }`}
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
                    <div className="absolute bg-[white] w-full h-[5px] rounded-[5px] bottom-[39px] md:bottom-[45px]"></div>
                  )}
                  {hoveredIndex === index && (
                    <div className="hidden md:block absolute bg-[white] w-full h-[5px] rounded-[5px] md:top-[45px]"></div>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="text-white hover:text-[#aaa6c3] transition-colors duration-200 relative w-10 h-10 flex items-center justify-center rounded-full border-2"
            style={{ borderColor: darkMode ? "white" : "#aaa6c3" }}
          >
            {darkMode ? <FaMoon size={24} /> : <FaSun size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
