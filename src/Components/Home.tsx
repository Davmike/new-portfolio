// import fb from "../../public/assets/fb.png";
// import insta from "../../public/assets/instagram.png";
// import x from "../../public/assets/x.png";
// import linkedin from "../../public/assets/linkedin.png";
// import github from "../../public/assets/github.png";
// import gmail from "../../public/assets/gmail.png";
import { Link } from "react-scroll";
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

function Home() {
  const categories = [
    {
      src: <FaFacebook style={{ color: "white", fontSize: "24px" }} />,
      link: "https://www.facebook.com/profile.php?id=61560549462701",
    },
    {
      src: <FaInstagram style={{ color: "white", fontSize: "24px" }} />,
      link: "https://www.instagram.com/davmikeladze/",
    },
    {
      src: <FaXTwitter style={{ color: "white", fontSize: "24px" }} />,
      link: "https://x.com/davmikeladze",
    },
    {
      src: <BiLogoGmail style={{ color: "white", fontSize: "24px" }} />,
      link: "https://mail.google.com/",
    },
    {
      src: <FaLinkedin style={{ color: "white", fontSize: "24px" }} />,
      link: "https://www.linkedin.com/in/davmikeladze/",
    },
    {
      src: <FaGithub style={{ color: "white", fontSize: "24px" }} />,
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

      {/* Background text */}
      <div className="background-text hello-move">HELLO</div>
      <div className="background-text background-world world-move">WORLD</div>

      {/* clock section */}
      <div className="relative flex justify-center items-center flex-col text-white mb-[30px]">
        <p className="text-[115px] font-bold lg:text-[140px]">19:22</p>

        {/* Content container */}
        <div className="mt-[20px]">
          <div className="text-left leading-[28px]">
            <h3 className="text-[40px] uppercase font-light lg:text-[50px]">
              David
            </h3>
            <h1 className="text-[50px] mt-[5px] uppercase font-extrabold lg:text-[60px] lg:mt-[10px]">
              Mikeladze
            </h1>
          </div>
          <p className="text-[30px] font-thin tracking-[3.9px] lg:text-[28px]">
            Full-Stack Developer
          </p>

          {/* Buttons container */}
          <div className="flex justify-center items-center gap-[15px] mt-[20px]">
            <button className="border-[1px] text-[20px] border-[white] hover:bg-[white] text-[white] hover:text-[black] rounded-[15px] px-[25px] py-[1px]">
              Resume
            </button>
            <Link
              to={"projects"}
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <button className="border-[1px] text-[20px] border-[white] hover:bg-[white] text-[white] hover:text-[black] rounded-[15px] px-[25px] py-[1px]">
                Projects
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* social media section */}
      <div className="absolute bottom-[10px] left-[10px] flex justify-center items-center flex-row w-[160px] gap-[3px]">
        {categories.map((category, index) => (
          <a
            href={category.link}
            target="_blank"
            className="pointer"
            key={index}
          >
            {category.src}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Home;
