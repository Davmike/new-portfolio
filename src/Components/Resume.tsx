import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function Resume() {
  useEffect(() => {
    const cards = gsap.utils.toArray<HTMLElement>(".card");

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          x: index % 2 === 0 ? "-100%" : "100%",
          opacity: 0,
        },
        {
          x: "0%",
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "bottom 100%",
            scrub: 1,
            markers: false,
          },
        }
      );
    });
  }, []);

  const timelineData = [
    {
      title: "React.js Developer",
      company: "StartupX",
      date: "March 2020 - April 2021",
      description: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company: "TechX",
      date: "Jan 2021 - Feb 2022",
      description: [
        "Developing and maintaining web applications using React Native and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company: "Shopify",
      date: "Jan 2022 - Jan 2023",
      description: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "FullX",
      date: "Jan 2023 - Present",
      description: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "FullX",
      date: "Jan 2023 - Present",
      description: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];

  // smooth show experience text
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
            end: "bottom 20%",
            scrub: 1,
            markers: false,
          },
        }
      );
    });
  }, []);

  return (
    <>
      {/* experience text section */}
      <div className="mt-[120px] mb-[50px] flex justify-center items-center flex-col fade-in-effect">
        <p className="text-[18px] text-[#F04D40] md:text-[20px] lg:text-[22px] uppercase tracking-wider">
          What I have done so far
        </p>
        <h3 className="text-[40px] text-[white] md:text-[45px] lg:text-[50px]">
          Work Experience.
        </h3>
      </div>
      {/* full version here */}
      <div className="timeline p-[20px] flex justify-center overflow-x-hidden">
        <div className="outer">
          {timelineData.map((item, index) => (
            <div
              className="card relative max-w-[400px] cursor-pointer"
              key={index}
            >
              <div className="info flex flex-col bg-[#051018] bg-opacity-20 backdrop-blur-md shadow-2xl text-[white] rounded-[10px] p-[16px]">
                <h3 className="title text-[#F04D40] relative text-[24px]">
                  {item.title}
                </h3>
                <p className="text-[14px] text-[#B4B5BA] company">
                  {item.company}
                </p>
                {item.description.map((description, i) => (
                  <div
                    key={i}
                    className="flex justify-center items-baseline flex-row gap-[10px]"
                  >
                    <div className="w-[5px] h-[5px] rounded-[50px] bg-[white] pl-[4px] md:pl-[6px]"></div>
                    <p className="mt-[10px]">{description}</p>
                  </div>
                ))}
                <p className="text-[14px] mt-[10px] text-[#B4B5BA]">
                  {item.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Resume;
