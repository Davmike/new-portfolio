function About() {
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
    <div className="text-[white] px-[20px] py-[20px]">
      {/* second main div */}
      <div>
        {/* about section div */}
        <div className="flex justify-center items-center flex-col mt-[30px]">
          <h1 className="font-bold text-[2rem]">ABOUT</h1>
          <div className="w-[66px] h-[1px] bg-[#56CE56]"></div>
          <p className="text-[12px]">mikeladzedav@gmail.com</p>
        </div>
        {/* main div for both container */}
        <div className="mb-[40px]">
          {/* about info text */}
          <div className="mt-[50px]">
            <h3 className="text-[1.5rem] font-bold">Get to know me!</h3>
            <div className="mt-[20px]">
              <p className="text-[17px]">
                I'm a software developer proficient in JavaScript and the web.
                I'm passionate about web performance, accessibility, mentoring,
                user & developer experience.
              </p>
              <p className="text-[17px]">
                I follow a digital minimalism mindset, using technology to
                improve people's lives and provide value for businesses.
              </p>
              <p className="text-[17px]">
                In my free time, I build side projects and like exploring new
                technologies. You can see some of my work in the projects
                section below.
              </p>
              <p className="text-[17px]">
                I'm open to collaboration opportunities where I can contribute,
                learn and grow. Don't hesitate to reach out if you think my
                skills and experience are a good fit for your next project.
              </p>
            </div>
          </div>
          <button className="mt-[20px] border-none rounded-[4px] bg-[#57CF57] pointer font-bold text-[1.15rem] px-[15px] py-[8px] checkout">
            PROJECTS
          </button>
          {/* personal info */}
          <div className="flex flex-col mt-[50px]">
            <h3 className="text-[1.5rem] font-bold">My Toolkit</h3>
            <div className="flex flex-wrap gap-2 mt-[20px]">
              {skills[0].toolkit.map((toolkit, skillIndex) => (
                <span
                  key={skillIndex}
                  className="bg-[#242424] rounded-[5px] inline-block text-[18px] text-[white] font-bold px-[10px] py-[5px]"
                >
                  {toolkit}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
