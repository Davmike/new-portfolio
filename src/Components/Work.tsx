import ae from "../../public/assets/logos/ae.png";
import boostrap from "../../public/assets/logos/boostrap.png";
import css from "../../public/assets/logos/css.png";
import figma from "../../public/assets/logos/figma.png";
import git from "../../public/assets/logos/git.png";
import html from "../../public/assets/logos/html.png";
import js from "../../public/assets/logos/javascript.png";
import npm from "../../public/assets/logos/npm.png";
import pr from "../../public/assets/logos/pr.png";
import ps from "../../public/assets/logos/ps.png";
import python from "../../public/assets/logos/python.png";
import reactLogo from "../../public/assets/logos/react.png";
import redux from "../../public/assets/logos/redux.png";
import tailwind from "../../public/assets/logos/tailwind.png";
import typescript from "../../public/assets/logos/typescript.png";
import vue from "../../public/assets/logos/vue.png";
import xd from "../../public/assets/logos/xd.png";
import jquery from "../../public/assets/logos/jquery.png";
import weblance from "../../public/assets/weblance.jpg";

function Work() {
  const images = [
    { src: html },
    { src: css },
    { src: js },
    { src: reactLogo },
    { src: vue },
    { src: tailwind },
    { src: boostrap },
    { src: typescript },
    { src: npm },
    { src: git },
    { src: redux },
    { src: jquery },
    { src: figma },
    { src: python },
    { src: xd },
    { src: ps },
    { src: pr },
    { src: ae },
  ];

  interface work {
    name: string;
    live: string;
    src: string;
    skills: string[];
    description: string;
  }

  const work = [
    {
      name: "Parapantest",
      live: "https://parapantest.vercel.app/",
      src: weblance,
      skills: ["Next.js", "React", "GSAP", "Vercel API"],
      description: [
        "Started as a hobby project to help a friend learn for his paragliding exam, I ended up building a full-fledged quiz applicatio",
        "It consists of 1000+ questions from 8 different categories and has a simulation mode that mimics the real exam.",
        "From a technical point of view, my goals were to learn using more complex animations with GSAP and deliver a fast & secure web application. It runs server-less on Vercel and uses Next.js API routes to hide all sensitive data from the client, such as the correct answers.",
      ],
    },
    {
      name: "Paddle Pong",
      live: "https://pocket-console.vercel.app/",
      src: weblance,
      skills: ["Next.js", "React", "Java", "Tailwind"],
      description: [
        "Started as a hobby project to help a friend learn for his paragliding exam, I ended up building a full-fledged quiz applicatio",
        "It consists of 1000+ questions from 8 different categories and has a simulation mode that mimics the real exam.",
        "From a technical point of view, my goals were to learn using more complex animations with GSAP and deliver a fast & secure web application. It runs server-less on Vercel and uses Next.js API routes to hide all sensitive data from the client, such as the correct answers.",
      ],
    },
    {
      name: "Snake",
      live: "https://catalinonutu.com/games/play-snake",
      src: weblance,
      skills: ["React", "Redux", "C#"],
      description: [
        "Started as a hobby project to help a friend learn for his paragliding exam, I ended up building a full-fledged quiz applicatio",
        "It consists of 1000+ questions from 8 different categories and has a simulation mode that mimics the real exam.",
        "From a technical point of view, my goals were to learn using more complex animations with GSAP and deliver a fast & secure web application. It runs server-less on Vercel and uses Next.js API routes to hide all sensitive data from the client, such as the correct answers.",
      ],
    },
  ];

  return (
    <div className="px-[20px] py-[20px]">
      <div className="logos">
        <div className="logo_items">
          {images.map((item, index) => (
            <img src={item.src} key={index} alt={`logo-${index}`} />
          ))}
          {images.map((item, index) => (
            <img
              src={item.src}
              key={`duplicate-${index}`}
              alt={`logo-duplicate-${index}`}
            />
          ))}
        </div>
      </div>
      {/* work section div */}
      <div className="mt-[10px]">
        <h1 className="font-bold text-[20px] text-[white]">WORK</h1>
        <div className="w-[66px] h-[1px] bg-[#175b4b]"></div>
        <p className="text-[12px] text-[white]">Dig into my universe</p>
      </div>
      {/* projects section starts here */}
      {/* main div */}
      {work.map((item, index) => (
        <div key={index} className="bg-[white] mt-[100px]">
          {/* div for card data */}
          <div>
            <h3>{item.name}</h3>
            {item.skills.map((skill, skillIndex) => (
              <span key={skillIndex}>{skill}</span>
            ))}
            <button>check it out</button>
          </div>
          {/* div for image and description */}
          <div>
            <img src={item.src} alt="" />
            {/* div for description */}
            <div className="hidden">
              {item.description.map((description, descrindex) => (
                <h4 key={descrindex}>{description}</h4>
              ))}
              <p>text here</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Work;
