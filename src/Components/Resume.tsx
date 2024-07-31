import React from "react";

const experiences = [
  {
    title: "React.js Developer",
    company: "StartupX",
    date: "March 2020 - April 2021",
    responsibilities: [
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
    responsibilities: [
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
    responsibilities: [
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
    responsibilities: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

function Resume() {
  return (
    <div className="max-w-4xl mx-auto p-4 text-white bg-gray-900">
      <h2 className="text-center text-4xl font-bold mb-8">Work Experience</h2>
      <div className="relative">
        <div className="absolute w-1 bg-gray-600 h-full left-1/2 transform -translate-x-1/2"></div>
        {experiences.map((experience, index) => (
          <div
            key={index}
            className={`mb-8 flex flex-col items-center ${
              index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full md:w-1/2">
              <h3 className="text-2xl font-semibold">{experience.title}</h3>
              <h4 className="text-xl text-gray-400">{experience.company}</h4>
              <span className="text-gray-500">{experience.date}</span>
              <ul className="list-disc list-inside mt-4 text-left">
                {experience.responsibilities.map((responsibility, i) => (
                  <li key={i}>{responsibility}</li>
                ))}
              </ul>
            </div>
            <div className="hidden md:block w-10 h-10 rounded-full bg-gray-600 flex-shrink-0"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Resume;
