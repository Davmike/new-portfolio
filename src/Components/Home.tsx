import React from "react";

function Home() {
  return (
    <div
      id="home"
      className="relative flex justify-center items-start min-h-screen bg-gray-900"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* clock section */}
      <div className="relative flex justify-center items-center flex-col text-white">
        {/* <div className="absolute top-5 left-5 text-white text-4xl"> */}
        <p className="text-[100px] font-bold">19:22</p>

        {/* Content container */}
        <div className="mt-[20px]">
          <div className="text-left leading-[28px]">
            <h3 className="text-[30px] uppercase font-light">David</h3>
            <h1 className="text-[40px] uppercase font-extrabold">Mikeladze</h1>
          </div>
          <p className="text-[20px] font-thin tracking-[3.9px]">
            Full-Stack Developer
          </p>

          {/* Buttons container */}
          <div className="flex gap-[15px] mt-[20px]">
            <button className="border-[1px] border-[white] text-[white] rounded-[15px] px-[25px] py-[1px]">
              Resume
            </button>
            <button className="border-[1px] border-[white] text-[white] rounded-[15px] px-[25px] py-[1px]">
              Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
