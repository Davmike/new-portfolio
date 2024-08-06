import { useEffect, useRef } from "react";
import { Link } from "react-scroll";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function About() {
  const toolkitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const textElements = gsap.utils.toArray(".text");

    textElements.forEach((text) =>
      gsap.to(text, {
        backgroundSize: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: text,
          start: "center 80%",
          end: "center 20%",
          scrub: true,
        },
      })
    );
  }, []);

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

  const skills = [
    {
      toolkit: [
        "JavaScript",
        "Node.js",
        "TypeScript",
        "CSS",
        "SASS",
        "GraphQL",
        "SQL",
        "React",
        "React Native",
        "Redux",
        "Next.js",
        "Angular",
        "Phaser",
        "GSAP",
        "Express",
        "Vite",
        "webpack",
        "Astro",
        "Jest",
        "Cypress",
        "CLI",
        "Git",
        "SEO",
        "a11y",
        "Vercel",
      ],
    },
  ];

  return (
    <div className="text-white px-5 py-5 md:px-20 md:py-20" id="about">
      {/* About Section */}
      <div className="flex justify-center items-center flex-col mt-10">
        <h1 className="font-bold text-2xl md:text-3xl">ABOUT</h1>
        <div className="w-5 h-1 bg-[#F04D40] mt-1"></div>
        <p className="text-[14px]">Full-Stack Developer</p>
      </div>

      {/* Main Content */}
      <div className="mb-10 md:flex md:justify-between md:gap-10">
        {/* About Info */}
        <div className="mt-10 md:w-1/2">
          <h3 className="text-xl font-bold md:text-[1.5rem]">
            Get to know me!
          </h3>
          <div className="mt-5 space-y-4">
            <p className="text-[1rem] md:text-[1.2rem] text">
              I'm a software developer proficient in JavaScript and the web. I'm
              passionate about web performance, accessibility, mentoring, user &
              developer experience.
            </p>
            <p className="text-[1rem] md:text-[1.2rem] text">
              I follow a digital minimalism mindset, using technology to improve
              people's lives and provide value for businesses.
            </p>
            <p className="text-[1rem] md:text-[1.2rem] text">
              In my free time, I build side projects and like exploring new
              technologies. You can see some of my work in the projects section
              below.
            </p>
            <p className="text-[1rem] md:text-[1.2rem] text">
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
            <button className="mt-5 bg-[#F04D40] text-white font-bold py-2 px-4 rounded hover:bg-[#abffe9] transition duration-200">
              PROJECTS
            </button>
          </Link>
        </div>

        {/* Toolkit */}
        <div className="mt-10 md:w-1/2" ref={toolkitRef}>
          <h3 className="text-xl font-bold md:text-[1.5rem]">My Toolkit</h3>
          <div className="flex flex-wrap gap-2 mt-5">
            {skills[0].toolkit.map((toolkit, skillIndex) => (
              <span
                key={skillIndex}
                data-speed={(skillIndex % 2) * 0.5 + 0.5}
                // data-speed={(skillIndex + 1) * 0.1}
                className="bg-[#F04D40] rounded-md inline-block text-[1rem] md:text-[1.2rem] text-white font-bold px-3 py-1"
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
