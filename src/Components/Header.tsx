import { useContext, useEffect, useRef } from "react";
// import { FaMoon, FaSun } from "react-icons/fa";
import profile from "../../public/assets/mb.jpg";
import { MyContext } from "./Context";
import { Link } from "react-scroll";
import gsap from "gsap";

const buttonCategories = ["About", "Projects", "Contact"];

function Header() {
  const context = useContext(MyContext);
  const {
    // darkMode,
    // setDarkMode,
    scrolled,
    setScrolled,
    hoveredIndex,
    setHoveredIndex,
    selected,
    setSelected,
  }: any = context;

  // const toggleDarkMode = () => {
  //   setDarkMode(!darkMode);
  // };

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

  // gsap animation for davmikeladze text

  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const textElement = textRef.current;

    if (textElement) {
      // Split the text into individual spans
      const text = textElement.textContent || "";
      textElement.innerHTML = text
        .split("")
        .map(
          (char, _index) =>
            `<span class="letter" style="display: inline-block; transition: transform 0.3s">${char}</span>`
        )
        .join("");

      const letters = textElement.querySelectorAll(".letter");

      // GSAP animation setup
      const animation = gsap.timeline({ paused: true });

      animation
        .to(letters, {
          y: -10, // Move letters up
          duration: 0.2,
          stagger: 0.05, // Stagger the animation
          ease: "power2.out",
        })
        .to(letters, {
          y: 10, // Move letters down
          duration: 0.2,
          stagger: 0.05,
          ease: "power2.inOut",
        })
        .to(letters, {
          y: 0, // Return to original position
          duration: 0.2,
          stagger: 0.05,
          ease: "power2.out",
        });

      const handleMouseEnter = () => animation.play();
      const handleMouseLeave = () => animation.reverse();

      textElement.addEventListener("mouseenter", handleMouseEnter);
      textElement.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        textElement.removeEventListener("mouseenter", handleMouseEnter);
        textElement.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  return (
    <header
      className={`bg-[#051018] bg-opacity-50 backdrop-blur-md shadow-2xl px-[20px] py-[10px] fixed z-10 w-[100%] flex justify-between items-center transition-transform duration-300 ${scrolled ? "translate-y-0" : "-translate-y-full"} bg-opacity-50 backdrop-blur-md shadow-2xl`}
    >
      <div className="flex items-center space-x-4">
        <img
          src={profile}
          alt="Profile"
          className="w-10 h-10 rounded-full border-2 border-[white]"
        />
        <h3
          ref={textRef}
          className="hidden md:block text-[white] text-[25px] cursor-pointer dav"
        >
          davmikeladze
        </h3>
      </div>

      <div className="flex gap-[20px]">
        <ul className="flex justify-start items-center flex-row gap-[15px]">
          {buttonCategories.map((category, index) => {
            const categoryId = category.toLowerCase().replace(/\s+/g, "-");
            return (
              <li
                key={index}
                className={`relative cursor-pointer transition-colors duration-200 text-[20px] md:text-[18px] lg:text-[25px] ${selected === categoryId
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
        {/* <div className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className={`relative w-12 h-12 flex items-center justify-center rounded-full border-2 transition-all duration-300 ease-in-out ${darkMode
              ? "bg-[#1c1c1c] border-white"
              : "bg-[#f5f5f5] border-[#aaa6c3]"
              }`}
          >
            <div
<<<<<<< HEAD
              className={`transform transition-transform duration-300 ease-in-out ${darkMode ? "rotate-180" : "rotate-360"
=======
              className={`transform transition-transform duration-300 ease-in-out ${darkMode ? "rotate-0" : "rotate-180"
>>>>>>> c9e67ab (feat: add validation)
                }`}
            >
              {darkMode ? (
                <FaSun size={24} className="text-yellow-500" />
              ) : (
                <FaMoon size={24} className="text-[#F04D40]" />
              )}
            </div>
          </button>
        </div> */}
      </div>
    </header>
  );
}

export default Header;
