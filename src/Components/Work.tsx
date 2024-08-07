import link from "../../public/assets/link.jpg";
import redberry from "../../public/assets/redberry.jpg";
import movie from "../../public/assets/movie.jpg";
import weblance from "../../public/assets/weblance.jpg";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Work() {
  interface work {
    name: string;
    live: string;
    src: string;
    skills: string[];
    description: string;
  }

  const work = [
    {
      name: "Redberry",
      live: "https://redberry-website-geleck.vercel.app/",
      src: redberry,
      description: "Just add your everyday blogs",
      num: "01",
    },
    {
      name: "Entertainment Web",
      live: "https://entertainment-web-app-five-theta.vercel.app/",
      src: movie,
      description: "You can Watch your Fav Movies",
      num: "02",
    },
    {
      name: "Link Sharing App",
      live: "https://davmike.github.io/link-sharing-app/",
      src: link,
      description: "You can share your profile",
      num: "03",
    },
    {
      name: "webLance",
      live: "https://www.weblance.ge/",
      src: weblance,
      description: "Our Company Website",
      num: "04",
    },
  ];

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
            start: "top 80%",
            end: "bottom 30%",
            scrub: 1,
            markers: false,
          },
        }
      );
    });
  }, []);

  return (
    <div
      className="bg-[#122b43] px-[20px] py-[20px] flex justify-center items-center flex-col"
      id="projects"
    >
      {/* work section div */}
      <div className="mt-[30px] flex justify-center items-center flex-col fade-in-effect">
        <h1 className="font-bold text-[white] text-2xl md:text-3xl">WORK</h1>
        <div className="w-5 h-1 bg-[#F04D40] mt-1"></div>
        <p className="text-[12px] text-[white]">Dig into my universe</p>
      </div>
      {work.map((item, index) => (
        <div
          key={index}
          className={`relative flex flex-col md:flex-row ${
            index % 2 === 0 ? "md:flex-row-reverse lg:left-[40px]" : ""
          } bg-cover bg-center h-[400px] w-full max-w-[800px] mt-[50px] shadow-2xl rounded-[10px] group zoom-hover-effect fade-in-effect`}
          style={{ backgroundImage: `url(${item.src})` }}
        >
          <h2
            className={`text-white text-[100px] ${
              index % 2 === 0 ? "md:right-[40px]" : "md:left-[40px]"
            } absolute top-[-30px] right-[30px] md:top-[-40px] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-10`}
          >
            {item.num}
          </h2>
          <div
            className={`absolute inset-0 bg-gray-900 bg-opacity-70 flex flex-col justify-center items-start pl-[20px] ${
              index % 2 === 0 ? "md:items-end pr-20" : "pl-20"
            } transition duration-500 ease-in-out group-hover:bg-opacity-80 group-hover:bg-[#0b2130; group-hover:backdrop-blur-sm`}
          >
            <h1 className="md:text-5xl text-[35px] font-bold text-white">
              {item.name}
            </h1>
            <p className="md:text-xl text-[20px] text-white">
              {item.description}
            </p>
            <a
              href={item.live}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 px-6 py-3 bg-red-500 text-white font-semibold rounded hover:bg-red-600"
            >
              Live Demo
            </a>
          </div>
        </div>
      ))}
      <button className="mt-20 bg-[#F04D40] text-white font-bold py-2 px-4 rounded hover:bg-red-600 transition duration-200 fade-in-effect">
        SEE MORE...
      </button>
    </div>
  );
}
<a
  className="mt-[60px] border-none rounded-[4px] mb-[40px] bg-[#F04D40] pointer font-bold text-[1.15rem] px-[15px] py-[8px] checkout"
  href="https://github.com/Davmike?tab=repositories"
  target="_blank"
>
  SEE MORE...
</a>;

export default Work;
