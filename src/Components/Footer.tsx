import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="h-[1px] w-[100%] bg-[white] mt-[50px]"></div>
      <div className="bg-[#050816] text-white p-4" id="footer">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold">David Mikeladze</h2>
              <p className="mt-2">
                Experienced web developer who{" "}
                <span className="text-[#F04D40] font-bold">enjoys</span>{" "}
                building <span className="text-[#F04D40] font-bold">fast</span>{" "}
                and <span className="text-[#F04D40] font-bold">accessible</span>{" "}
                digital products.
              </p>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-8">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-bold">Contact</h3>
                <p className="mt-2">
                  Gmail:{" "}
                  <a href="" className="text-[#F04D40] font-bold">
                    {" "}
                    mikeladzedav@gmail.com
                  </a>
                </p>
              </div>
              <div>
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
        </div>
      </div>
    </>
  );
}

export default Footer;
