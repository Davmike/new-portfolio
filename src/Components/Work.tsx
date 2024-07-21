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
    <div className="px-[20px] py-[20px] flex justify-center items-center flex-col">
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
      <div className="mt-[10px] flex justify-center items-center flex-col">
        <h1 className="font-bold text-[20px] text-[white]">WORK</h1>
        <div className="w-[66px] h-[1px] bg-[#175b4b]"></div>
        <p className="text-[12px] text-[white]">Dig into my universe</p>
      </div>
      {/* projects section starts here */}
      {/* main div */}
      {work.map((item, index) => (
        <div
          key={index}
          className="mt-[100px] relative max-w-[768px] m-auto group zoom-effect"
        >
          {/* div for card data */}
          <div className="bg-[#181A1B] px-[16px] py-[16px] rounded-t-[10px] pb-[20px]">
            <h3 className="text-[white] text-[2rem]">{item.name}</h3>
            <div className="flex flex-wrap gap-[1ch] mt-[20px]">
              {item.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="bg-[#242424] rounded-[5px] inline-block text-[18px] text-[white] font-bold px-[10px] py-[5px] text-for-span"
                >
                  {skill}
                </span>
              ))}
            </div>
            <button className="mt-[20px] border-none rounded-[4px] bg-[#57CF57] pointer font-bold text-[1.15rem] px-[15px] py-[8px] checkout">
              check it out
            </button>
          </div>
          {/* div for image and description */}
          <div className="relative">
            <img src={item.src} alt="" className="w-full rounded-b-md" />
            {/* div for description */}
            <div className="absolute inset-0 bg-black bg-opacity-75 text-white flex flex-col justify-center items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-b-md p-4">
              {item.description.map((description, descrindex) => (
                <p key={descrindex}>{description}</p>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* button for more projects */}
      <button className="mt-[100px] border-none rounded-[4px] bg-[#57CF57] pointer font-bold text-[1.15rem] px-[15px] py-[8px] checkout">
        SEE MORE...
      </button>
    </div>
  );
}

export default Work;
