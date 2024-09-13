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
      title: "Teaching Assistant",
      company: "Digital Institute",
      date: "May 2023 - Jan 2024",
      description: [
        "Mentored 50+ junior developers on front-end development best practices.",
        "Assisted in the development and review of learning materials and exercises.",
        "Provided technical support and guidance to students during projects.",
        "Collaborated with instructors to deliver high-quality learning experiences."
      ],
    },
    {
      title: "Frontend Developer",
      company: "XLcrewMarine",
      date: "Sep 2023 - Mar 2024",
      description: [
        "Developed and maintained web applications for a marine employment service.",
        "Ensured responsive and user-friendly design across different devices and platforms.",
        "Collaborated with stakeholders to align project goals with client needs.",
        "Fixed bugs and optimized performance to enhance the user experience."
      ],
    },
    {
      title: "Frontend Developer",
      company: "webLance",
      date: "Feb 2024 - Jul 2024",
      description: [
        "Led a team of 5 developers in delivering 40+ successful projects.",
        "Achieved a 99% client satisfaction rate by focusing on high-quality work.",
        "Implemented modern web technologies to create scalable and efficient web applications.",
        "Mentored team members and performed code reviews."
      ],
    },
    {
      title: "CTO & Co-Founder",
      company: "FullX",
      date: "Jul 2024 - Present",
      description: [
        "Oversee the technical strategy and development of all web projects.",
        "Lead a growing team of developers, ensuring alignment with business goals.",
        "Develop and maintain web applications, focusing on scalability and performance.",
        "Collaborate with stakeholders and clients to deliver cutting-edge digital solutions."
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
