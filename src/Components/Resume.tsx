function Resume() {
  const softwareSkills = [
    { title: "JavaScript" },
    { title: "React" },
    { title: "Node.js" },
  ];
  const languages = [
    { title: "English" },
    { title: "Germany" },
    { title: "Georgian" },
  ];
  const personalSkills = ["Communication", "Teamwork", "Problem Solving"];
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
  const hobbies = ["Hiking", "Photography", "Reading"];

  return (
    <div id="resume" className="relative px-[20px] py-[20px]">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-80"></div>

      {/* main div for software, language and personal skill */}
      <div>
        {/* SOFTWARE SKILL container */}
        <div className="relative text-white">
          <h3 className="font-bold">SOFTWARE SKILL</h3>
          {softwareSkills.map((item, index) => (
            <p key={index}>{item.title}</p>
          ))}
        </div>

        {/* LANGUAGE container */}
        <div className="relative text-white">
          <h3 className="font-bold">LANGUAGE</h3>
          {languages.map((item, index) => (
            <p key={index}>{item.title}</p>
          ))}
        </div>

        {/* PERSONAL SKILLS */}
        <div className="relative text-white">
          <h3 className="font-bold">PERSONAL SKILLS</h3>
          {personalSkills.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>

      {/* main div for experience and education */}
      <div>
        {/* EXPERIENCE */}
        <div className="relative text-white">
          <h3 className="font-bold">EXPERIENCE</h3>
          {experiences.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>

        {/* EDUCATION */}
        <div className="relative text-white">
          <h3 className="font-bold">EDUCATION</h3>
          {education.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>

      {/* main div for what can i do, interest and hobby */}
      <div>
        {/* WHAT CAN I DO */}
        <div className="relative text-white">
          <h3 className="font-bold">WHAT CAN I DO</h3>
          {whatCanIDo.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>

        {/* INTEREST */}
        <div className="relative text-white">
          <h3 className="font-bold">INTEREST</h3>
          {interests.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>

        {/* HOBBY */}
        <div className="relative text-white">
          <h3 className="font-bold">HOBBY</h3>
          {hobbies.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Resume;
