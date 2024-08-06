import { useEffect } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import ScrollReveal from "scrollreveal";

function Footer() {
  // on scroll show component smooth effect
  useEffect(() => {
    const config = {
      origin: "top",
      distance: "50px",
      duration: 1000,
      delay: 300,
      opacity: 0,
      easing: "ease-in-out",
      reset: true,
      viewFactor: 0.5,
    };

    ScrollReveal().reveal("#reset", config);
  }, []);

  return (
    <>
      <div className="h-[1px] w-[100%] bg-[white] mt-[50px]"></div>
      <div className="bg-[#050816] text-white p-4" id="footer">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold" id="reset">
                David Mikeladze
              </h2>
              <p className="mt-2" id="reset">
                Experienced web developer who{" "}
                <span className="text-[#F04D40] font-bold">enjoys</span>{" "}
                building{" "}
                <span className="text-[#F04D40] font-bold" id="reset">
                  fast
                </span>{" "}
                and{" "}
                <span className="text-[#F04D40] font-bold" id="reset">
                  accessible
                </span>{" "}
                digital products.
              </p>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-8">
              <div id="reset">
                <h3 className="text-xl font-bold">Social</h3>
                <div className="flex space-x-4 mt-2">
                  <a
                    href="https://github.com/Davmike"
                    target="_blank"
                    className="text-white hover:text-green-500 transition-colors duration-200"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/davmikeladze/"
                    target="_blank"
                    className="text-white hover:text-green-500 transition-colors duration-200"
                  >
                    <FaLinkedin size={24} />
                  </a>
                  <a
                    href="https://www.instagram.com/davmikeladze/"
                    target="_blank"
                    className="text-white hover:text-green-500 transition-colors duration-200"
                  >
                    <FaInstagram size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex justify-center items-center mt-[20px]"
            id="reset"
          >
            <p className="text-[15px] font-normal">2024 @ David Mikeladze</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
