import React from "react";

function Resume() {
  return (
    <div id="resume" className="relative">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-80"></div>
      {/* main div for software, language and personal skill */}
      <div>
        {/* SOFTWARE SKILL container */}
        <div className="relative text-white">
          <h3 className="font-bold">SOFTWARE SKILL</h3>
          <p>item 1</p>
          <p>item 2</p>
          <p>item 3</p>
        </div>
        {/* LANGUAGE container */}
        <div className="relative text-white">
          <h3 className="font-bold">LANGUAGE</h3>
          <p>item 1</p>
          <p>item 2</p>
          <p>item 3</p>
        </div>
        {/* PERSONAL SKILLS */}
        <div className="relative text-white">
          <h3 className="font-bold">PERSONAL SKILLS</h3>
          <p>item 1</p>
          <p>item 2</p>
          <p>item 3</p>
        </div>
      </div>
      {/* up is 1 container */}
      {/* down start new container */}
      {/* main div for experience and education*/}
      <div>
        {/* EXPERIENCE */}
        <div className="relative text-white">
          <h3 className="font-bold">EXPERIENCE</h3>
          <p>item 1</p>
          <p>item 2</p>
          <p>item 3</p>
        </div>
        {/* EDUCATION */}
        <div className="relative text-white">
          <h3 className="font-bold">EDUCATION</h3>
          <p>item 1</p>
          <p>item 2</p>
          <p>item 3</p>
        </div>
      </div>
      {/* up is 2 container */}
      {/* down start new container */}
      {/* main div for what can i do, interest and hobby*/}
      <div>
        {/* WHAT CAN I DO */}
        <div className="relative text-white">
          <h3 className="font-bold">WHAT CAN I DO</h3>
          <p>item 1</p>
          <p>item 2</p>
          <p>item 3</p>
        </div>
        {/* INTEREST */}
        <div className="relative text-white">
          <h3 className="font-bold">INTEREST</h3>
          <p>item 1</p>
          <p>item 2</p>
          <p>item 3</p>
        </div>
        {/* HOBBY */}
        <div className="relative text-white">
          <h3 className="font-bold">HOBBY</h3>
          <p>item 1</p>
          <p>item 2</p>
          <p>item 3</p>
        </div>
      </div>
    </div>
  );
}

export default Resume;
