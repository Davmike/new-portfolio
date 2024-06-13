import test from "../assets/test.png";

function About() {
  return (
    <div className="text-[white] px-[20px] py-[20px]">
      {/* second main div */}
      <div>
        {/* about section div */}
        <div>
          <h1 className="font-bold text-[20px]">ABOUT</h1>
          <div className="w-[66px] h-[1px] bg-[#175b4b]"></div>
          <p className="text-[12px]">mikeladzedav@gmail.com</p>
        </div>
        {/* about info text */}
        <p className="text-[17px] mt-[50px]">
          Front-End Developer with 1+ years of experience in creating responsive
          web applications using JavaScript and TypeScript. Skilled in React,
          Vue.js, HTML5, CSS3, and npm. Proficient in component-based
          development and RxJS. Experienced in mentoring and leading projects to
          successful completion.
        </p>
        {/* personal info */}
        <div className="mt-[100px] flex items-center flex-col">
          <p className="mb-[-8px]">Tbilis, Georgia</p>
          <div className="flex items-center gap-[10px]">
            <div className="w-[20px] h-[1px] bg-[#175b4b]"></div>
            <p>30 Oct, 2001</p>
            <div className="w-[20px] h-[1px] bg-[#175b4b]"></div>
          </div>
        </div>
      </div>
      <img src={test} alt="" />
    </div>
  );
}

export default About;
