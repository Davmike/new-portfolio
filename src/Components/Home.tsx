import fb from "../../public/assets/fb.png";
import insta from "../../public/assets/instagram.png";
import x from "../../public/assets/x.png";
import linkedin from "../../public/assets/linkedin.png";
import github from "../../public/assets/github.png";
import gmail from "../../public/assets/gmail.png";

function Home() {
  const categories = [
    {
      src: fb,
      link: "https://www.facebook.com/profile.php?id=61560549462701",
    },
    {
      src: insta,
      link: "https://www.instagram.com/davmikeladze/",
    },
    {
      src: x,
      link: "https://x.com/davmikeladze",
    },
    {
      src: linkedin,
      link: "https://www.linkedin.com/in/davmikeladze/",
    },
    {
      src: gmail,
      link: "https://mail.google.com/",
    },
    {
      src: github,
      link: "https://github.com/Davmike",
    },
  ];

  return (
    <div
      id="home"
      className="relative flex justify-center items-center min-h-screen bg-gray-900"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* clock section */}
      <div className="relative flex justify-center items-center flex-col text-white mb-[30px]">
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
            <button className="border-[1px] border-[white] hover:bg-[white] text-[white] hover:text-[black] rounded-[15px] px-[25px] py-[1px]">
              Resume
            </button>
            <button className="border-[1px] border-[white] hover:bg-[white] text-[white] hover:text-[black] rounded-[15px] px-[25px] py-[1px]">
              Projects
            </button>
          </div>
        </div>
      </div>
      {/* social media section */}
      <div className="absolute bottom-[10px] left-[10px] flex justify-center items-center flex-row w-[140px] gap-[3px]">
        {categories.map((category, index) => {
          return (
            <a
              href={category.link}
              target="_blank"
              className="pointer"
              key={index}
            >
              <img src={category.src} alt="" />
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
