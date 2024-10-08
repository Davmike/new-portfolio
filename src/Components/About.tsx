import { useEffect, useRef } from "react";
import { Link } from "react-scroll";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function About() {
  const toolkitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const textElements = gsap.utils.toArray(".text") as HTMLElement[];

    textElements.forEach((text: HTMLElement) => {
      gsap.to(text, {
        backgroundSize: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: text,
          start: "center 80%",
          end: "center 20%",
          scrub: true,
        },
      });
    });
  }, []);

  // gsap for toolkit
  useEffect(() => {
    const elements = toolkitRef.current?.querySelectorAll("[data-speed]");

    if (elements) {
      gsap.fromTo(
        elements,
        {
          y: (_i, el): any => {
            return gsap.getProperty(el, "y");
          },
          opacity: 1, // Start fully visible
        },
        {
          y: (_i, el) => {
            const speed = parseFloat(el.getAttribute("data-speed") || "1");
            return (1 - speed) * window.innerHeight; // Move to a new position based on speed
          },
          opacity: 0, // Fade out
          ease: "power2.out",
          scrollTrigger: {
            trigger: toolkitRef.current,
            start: "top 10%",
            end: "bottom top",
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        }
      );
    }
  }, []);

  // show effect
  useEffect(() => {
    const cards = gsap.utils.toArray<HTMLElement>(".fade-in-effect");

    cards.forEach((card) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 50%",
            end: "center 100%",
            scrub: 1,
            markers: false,
          },
        }
      );
    });
  }, []);

  // breathing effect for buttons

  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const buttonElement = buttonRef.current;

    if (buttonElement) {
      // GSAP timeline for the breathing effect
      const breatheTimeline = gsap.timeline({ repeat: -1, yoyo: true });

      breatheTimeline
        .to(buttonElement, {
          scale: 1.1,
          y: -10, // Move up
          duration: 0.6,
          ease: "power1.inOut",
        })
        .to(buttonElement, {
          scale: 1,
          y: 0, // Move back to original position
          duration: 0.6,
          ease: "power1.inOut",
        });
    }
  }, []);

  const skills = [
    {
      toolkit: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "TypeScript",
        "SASS",
        "GraphQL",
        "SQL",
        "React",
        "React Native",
        "Redux",
        "Next.js",
        "Vue.js",
        "Tailwind",
        "GSAP",
        "Boostrap",
        "Three.js",
        "Vite",
        "webpack",
        "Styled-components",
        "D3.js",
        "Python",
        "WordPress",
        "Webflow",
        "Git",
        "SEO",
        "Vercel",
      ],
    },
  ];

  return (
    <div className="text-white px-5 py-5 md:px-20 md:py-20" id="about">
      {/* About Section */}
      <div className="flex justify-center items-center flex-col mt-10 fade-in-effect">
        <h1 className="font-bold text-2xl md:text-3xl">ABOUT</h1>
        <div className="w-5 h-1 bg-[#F04D40] mt-1"></div>
        <p className="text-[14px]">Full-Stack Developer</p>
      </div>

      {/* Main Content */}
      <div className="mb-10 md:flex md:justify-between md:gap-10">
        {/* About Info */}
        <div className="mt-10 md:w-1/2">
          <h3 className="text-xl font-bold md:text-[1.5rem] fade-in-effect">
            Get to know me!
          </h3>
          <div className="mt-5 space-y-4">
            <p className="text-[1rem] md:text-[1.2rem] text fade-in-effect">
              Greetings! I'm David, I am a dedicated and innovative Front-End Developer with 2 years of hands-on experience in creating visually appealing and highly functional web applications.
            </p>
            <p className="text-[1rem] md:text-[1.2rem] text fade-in-effect">
              My previous tenure as a Frontend Developer has cemented a strong foundation in modern web development, which I now leverage to lead webLance's strategic technical initiatives.
            </p>
            <p className="text-[1rem] md:text-[1.2rem] text fade-in-effect">
              I am about continuous learning and staying updated with industry trends.
              I am fluent in Georgian and proficient in English, with basic knowledge of Russian and German.
            </p>
            <p className="text-[1rem] md:text-[1.2rem] text fade-in-effect">
              I'm open to collaboration opportunities where I can contribute,
              learn and grow. Don't hesitate to reach out if you think my skills
              and experience are a good fit for your next project.
            </p>
          </div>
          <Link
            to={"projects"}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <button
              ref={buttonRef}
              className="mt-5 bg-[#F04D40] text-white font-bold py-2 px-4 rounded hover:bg-red-600 transition duration-200 fade-in-effect"
            >
              PROJECTS
            </button>
          </Link>
        </div>

        {/* Toolkit */}
        <div className="mt-10 md:w-1/2" ref={toolkitRef}>
          <h3 className="text-xl font-bold md:text-[1.5rem] fade-in-effect">
            My Toolkit
          </h3>
          <div className="flex flex-wrap gap-2 mt-5 fade-in-effect">
            {skills[0].toolkit.map((toolkit, skillIndex) => (
              <span
                key={skillIndex}
                data-speed={(skillIndex % 2) * 0.5 + 0.5}
                // data-speed={(skillIndex + 1) * 0.1}
                className="bg-[#F04D40] hover:bg-red-600 cursor-pointer rounded-md inline-block text-[1rem] md:text-[1.2rem] text-white font-bold px-3 py-1"
                style={{ transform: "translateY(0)" }}
              >
                {toolkit}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
