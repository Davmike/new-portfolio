import { Link } from "react-scroll";
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap-trial/ScrollTrigger";

// gsap.registerPlugin(SplitText, ScrollTrigger);

// let mySplitText = new SplitText(".david", { type: "chars" });
// let chars = mySplitText.chars;

function Home() {
  // on scroll show hello text smooth effect
  useEffect(() => {
    const config = {
      origin: "top",
      distance: "50px",
      duration: 1000,
      delay: 300,
      opacity: 0,
      easing: "ease-in-out",
      reset: false,
    };

    ScrollReveal().reveal("#hello", config);
  }, []);

  // on scroll show world text smooth effect
  useEffect(() => {
    const config = {
      origin: "top",
      distance: "50px",
      duration: 1000,
      delay: 800,
      opacity: 0,
      easing: "ease-in-out",
      reset: false,
    };

    ScrollReveal().reveal("#world", config);
  }, []);

  // on scroll show time text smooth effect
  useEffect(() => {
    const config = {
      origin: "top",
      distance: "50px",
      duration: 1000,
      delay: 1200,
      opacity: 0,
      easing: "ease-in-out",
      reset: false,
    };

    ScrollReveal().reveal("#time", config);
  }, []);

  // on scroll show david text smooth effect
  useEffect(() => {
    const config = {
      origin: "top",
      distance: "50px",
      duration: 1000,
      delay: 1600,
      opacity: 0,
      easing: "ease-in-out",
      reset: false,
    };

    ScrollReveal().reveal("#david", config);
  }, []);

  // on scroll show mikeladze text smooth effect
  useEffect(() => {
    const config = {
      origin: "top",
      distance: "50px",
      duration: 1000,
      delay: 2100,
      opacity: 0,
      easing: "ease-in-out",
      reset: false,
    };

    ScrollReveal().reveal("#mikeladze", config);
  }, []);

  // on scroll show fullstack text smooth effect
  useEffect(() => {
    const config = {
      origin: "top",
      distance: "50px",
      duration: 1000,
      delay: 1900,
      opacity: 0,
      easing: "ease-in-out",
      reset: false,
    };

    ScrollReveal().reveal("#fullstack", config);
  }, []);

  // on scroll show cv text smooth effect
  useEffect(() => {
    const config = {
      origin: "top",
      distance: "50px",
      duration: 1000,
      delay: 1700,
      opacity: 0,
      easing: "ease-in-out",
      reset: false,
    };

    ScrollReveal().reveal("#cv", config);
  }, []);

  // on scroll show project text smooth effect
  useEffect(() => {
    const config = {
      origin: "top",
      distance: "50px",
      duration: 1000,
      delay: 1500,
      opacity: 0,
      easing: "ease-in-out",
      reset: false,
    };

    ScrollReveal().reveal("#project", config);
  }, []);

  // gsap.from(chars, {
  //   yPercent: 130,
  //   stagger: 0.05,
  //   ease: "back.out",
  //   duration: 1,
  //   scrollTrigger: {
  //     trigger: ".david",
  //     start: "top 80%",
  //   },
  // });
  // const textRef = useRef(null);

  // useEffect(() => {
  //   gsap.from(textRef.current, {
  //     duration: 1,
  //     autoAlpha: 0,
  //     ease: "none",
  //     delay: 1,
  //   });
  // }, []);

  // useGSAP(
  //   () => {
  //     // gsap code here...
  //     gsap.to(".david", { duration: 3 });
  //   },
  //   { scope: container }
  // );

  const categories = [
    {
      src: <FaFacebook style={{ color: "white", fontSize: "24px" }} />,
      link: "https://www.facebook.com/profile.php?id=61560549462701",
    },
    {
      src: <FaInstagram style={{ color: "white", fontSize: "24px" }} />,
      link: "https://www.instagram.com/davmikeladze/",
    },
    {
      src: <FaXTwitter style={{ color: "white", fontSize: "24px" }} />,
      link: "https://x.com/davmikeladze",
    },
    {
      src: <BiLogoGmail style={{ color: "white", fontSize: "24px" }} />,
      link: "https://mail.google.com/",
    },
    {
      src: <FaLinkedin style={{ color: "white", fontSize: "24px" }} />,
      link: "https://www.linkedin.com/in/davmikeladze/",
    },
    {
      src: <FaGithub style={{ color: "white", fontSize: "24px" }} />,
      link: "https://github.com/Davmike",
    },
  ];

  return (
    <div
      id="home"
      className="relative flex justify-center items-center min-h-screen bg-gray-900"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Background text */}
      <div className="background-text hello-move" id="hello">
        HELLO
      </div>
      <div className="background-text background-world world-move" id="world">
        WORLD
      </div>

      {/* clock section */}
      <div className="relative flex justify-center items-center flex-col text-white mb-[30px]">
        <p className="text-[115px] font-bold lg:text-[140px]" id="time">
          19:22
        </p>

        {/* Content container */}
        <div className="mt-[20px]">
          <div className="text-left leading-[28px]">
            <h3
              className="text-[40px] uppercase font-light lg:text-[50px] david"
              id="david"
            >
              David
            </h3>
            <h1
              className="text-[50px] mt-[5px] uppercase font-extrabold lg:text-[60px] lg:mt-[10px] mikeladze"
              id="mikeladze"
            >
              Mikeladze
            </h1>
          </div>
          <p
            className="text-[30px] font-thin tracking-[3.9px] lg:text-[28px] developer"
            id="fullstack"
          >
            Full-Stack Developer
          </p>

          {/* Buttons container */}
          <div className="flex justify-center items-center gap-[15px] mt-[20px]">
            <button
              className="border-[1px] text-[20px] border-[white] hover:bg-[white] text-[white] hover:text-[black] rounded-[15px] px-[25px] py-[1px]"
              id="cv"
            >
              Resume
            </button>
            <Link
              to={"projects"}
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <button
                className="border-[1px] text-[20px] border-[white] hover:bg-[white] text-[white] hover:text-[black] rounded-[15px] px-[25px] py-[1px]"
                id="project"
              >
                Projects
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* social media section */}
      <div className="absolute bottom-[10px] left-[10px] flex justify-center items-center flex-row w-[160px] gap-[3px]">
        {categories.map((category, index) => (
          <a
            href={category.link}
            target="_blank"
            className="pointer"
            key={index}
          >
            {category.src}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Home;
