function Resume() {
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
  ];

  return (
    <div className="timeline p-[20px] flex justify-center">
      <div className="outer">
        {timelineData.map((item, index) => (
          <div className="card relative max-w-[400px]" key={index}>
            <div className="info flex flex-col bg-[#051018] text-[white] rounded-[10px] p-[16px]">
              <h3 className="title text-[orangered] relative text-[24px]">
                {item.title}
              </h3>
              <p className="text-[14px] company">{item.company}</p>
              {item.description.map((description, i) => (
                <div className="flex justify-center items-baseline flex-row gap-[10px]">
                  <div className="w-[5px] h-[5px] rounded-[50px] bg-[white] pl-[4px]"></div>
                  <p key={i} className="mt-[10px]">
                    {description}
                  </p>
                </div>
              ))}
              <p className="text-[14px] mt-[10px]">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Resume;
