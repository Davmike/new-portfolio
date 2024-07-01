import js from "../../public/assets/js.png";
import node from "../../public/assets/node.png";
import react from "../../public/assets/react.png";

function Resume() {
  const softwareSkills = [
    { title: "JavaScript", src: js, value: "50" },
    { title: "React", src: react, value: "70" },
    { title: "Node.js", src: node, value: "90" },
  ];
  const languages = [
    { title: "English", value: "50" },
    { title: "Germany", value: "60" },
    { title: "Georgian", value: "70" },
  ];
  const personalSkills = [
    { title: "Communication", dot: "▫️" },
    { title: "Teamwork", dot: "▫️" },
    { title: "Problem Solving" },
  ];
  const experiences = [
    "Software Developer at XYZ Corp (2018-2021)",
    "Frontend Developer at ABC Inc (2021-Present)",
    "Intern at DEF Ltd (2017-2018)",
  ];
  const education = [
    "B.S. in Computer Science from University of Example (2014-2018)",
    "M.S. in Software Engineering from Example Institute (2018-2020)",
  ];
  const whatCanIDo = [
    "Build scalable web applications",
    "Optimize performance",
    "Lead a team of developers",
  ];
  const interests = [
    "Artificial Intelligence",
    "Open Source Contribution",
    "Tech Blogging",
  ];
  const hobbies = [
    { title: "Hiking" },
    { title: "Photography" },
    { title: "Reading" },
  ];

  return (
    <div id="resume" className="relative px-[20px] py-[20px]">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-80"></div>

      {/* main div for software, language and personal skill */}
      <div>
        {/* SOFTWARE SKILL container */}
        <div className="relative text-white">
          <h3 className="font-bold">SOFTWARE SKILL</h3>
          <div className="w-[66px] h-[1px] bg-[#175b4b]"></div>
          {softwareSkills.map((item, index) => (
            <div
              key={index}
              className="mt-[20px] flex justify-center items-center gap-[10px]"
            >
              <div className="flex w-[170px] gap-[10px]">
                <img src={item.src} alt={item.title} />
                <p>{item.title}</p>
              </div>
              <input
                type="range"
                min="1"
                max="100"
                value={item.value}
                className="slider"
                disabled
              />
            </div>
          ))}
        </div>

        {/* LANGUAGE container */}
        <div className="relative text-white mt-[20px] ">
          <h3 className="font-bold">LANGUAGE</h3>
          <div className="w-[66px] h-[1px] bg-[#175b4b]"></div>
          {languages.map((item, index) => (
            <div
              key={index}
              className="mt-[10px] flex justify-center items-center gap-[10px]"
            >
              <div className="flex w-[170px] gap-[10px]">
                <p>{item.title}</p>
              </div>
              <input
                type="range"
                min="1"
                max="100"
                value={item.value}
                className="slider"
                disabled
              />
            </div>
          ))}
        </div>

        {/* PERSONAL SKILLS */}
        <div className="relative text-white mt-[20px] ">
          <h3 className="font-bold">PERSONAL SKILLS</h3>
          <div className="w-[66px] h-[1px] bg-[#175b4b]"></div>
          <div className="flex items-center flex-row gap-[10px]">
            {personalSkills.map((item, index) => (
              <div className="flex mt-[10px]">
                <p key={index}>{item.title}</p>
                <div className="ml-[10px]">{item.dot}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* main div for experience and education */}
      <div>
        {/* EXPERIENCE */}
        <div className="relative text-white mt-[20px]">
          <h3 className="font-bold">EXPERIENCE</h3>
          <div className="w-[66px] h-[1px] bg-[#175b4b]"></div>
          {experiences.map((item, index) => (
            // main div
            <div className="flex gap-[10px]">
              {/* second div fot circel */}
              <div className="w-[50px] h-[50px] bg-[blue] rounded-[50px] flex justify-center items-center">
                <p>some</p>
              </div>
              {/* for texts this div */}
              <div>
                <p key={index}>{item}</p>
                <p>Company</p>
              </div>
            </div>
          ))}
        </div>

        {/* EDUCATION */}
        <div className="relative text-white">
          <h3 className="font-bold">EDUCATION</h3>
          <div className="w-[66px] h-[1px] bg-[#175b4b]"></div>
          {education.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>

      {/* main div for what can i do, interest and hobby */}
      <div>
        {/* WHAT CAN I DO */}
        <div className="relative text-white mt-[20px]">
          <h3 className="font-bold">WHAT CAN I DO</h3>
          <div className="w-[66px] h-[1px] bg-[#175b4b]"></div>
          {whatCanIDo.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>

        {/* INTEREST */}
        <div className="relative text-white mt-[20px]">
          <h3 className="font-bold">INTEREST</h3>
          <div className="w-[66px] h-[1px] bg-[#175b4b]"></div>
          {interests.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>

        {/* HOBBY */}
        <div className="relative text-white mt-[20px]">
          <h3 className="font-bold">HOBBY</h3>
          <div className="w-[66px] h-[1px] bg-[#175b4b]"></div>
          {hobbies.map((item, index) => (
            <p key={index}>{item.title}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Resume;
