import link from "../../public/assets/link.jpg";
import redberry from "../../public/assets/redberry.jpg";
import movie from "../../public/assets/movie.jpg";
import weblance from "../../public/assets/weblance.jpg";

function Work() {
  interface work {
    name: string;
    live: string;
    src: string;
    skills: string[];
    description: string;
  }

  const work = [
    {
      name: "Redberry",
      live: "https://redberry-website-geleck.vercel.app/",
      src: redberry,
      description: "Just add your everyday blogs",
      num: "01",
    },
    {
      name: "Entertainment Web",
      live: "https://entertainment-web-app-five-theta.vercel.app/",
      src: movie,
      description: "You can Watch your Fav Movies",
      num: "02",
    },
    {
      name: "Link Sharing App",
      live: "https://davmike.github.io/link-sharing-app/",
      src: link,
      description: "You can share your profile",
      num: "03",
    },
    {
      name: "webLance",
      live: "https://www.weblance.ge/",
      src: weblance,
      description: "Our Company Website",
      num: "04",
    },
  ];

  return (
    <div
      className="bg-[#122b43] px-[20px] py-[20px] flex justify-center items-center flex-col"
      id="projects"
    >
      {/* <div className="logos">
        <div className="logo_items">
          {images.map((item, index) => (
            <img src={item.src} key={index} alt={`logo-${index}`} />
          ))}
          {images.map((item, index) => (
            <img
              src={item.src}
              key={`duplicate-${index}`}
              alt={`logo-duplicate-${index}`}
            />
          ))}
        </div>
      </div> */}
      {/* work section div */}
      <div className="mt-[30px] flex justify-center items-center flex-col">
        <h1 className="font-bold text-[white] text-2xl md:text-3xl">WORK</h1>
        <div className="w-5 h-1 bg-[#F04D40] mt-1"></div>
        <p className="text-[12px] text-[white]">Dig into my universe</p>
      </div>
      {work.map((item, index) => (
        <div
          key={index}
          className={`relative flex flex-col md:flex-row ${
            index % 2 === 0 ? "md:flex-row-reverse lg:left-[40px]" : ""
          } bg-cover bg-center h-[400px] w-full max-w-[800px] mt-[50px] group zoom-hover-effect`}
          style={{ backgroundImage: `url(${item.src})` }}
        >
          <h2
            className={`text-white text-[100px] ${
              index % 2 === 0 ? "md:right-[40px]" : "md:left-[40px]"
            } absolute top-[-30px] right-[30px] md:top-[-40px] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-10`}
          >
            {item.num}
          </h2>
          <div
            className={`absolute inset-0 bg-gray-900 bg-opacity-70 flex flex-col justify-center items-start pl-[20px] ${
              index % 2 === 0 ? "md:items-end pr-20" : "pl-20"
            } transition duration-500 ease-in-out group-hover:bg-opacity-80 group-hover:bg-[#0b2130; group-hover:backdrop-blur-sm`}
          >
            <h1 className="md:text-5xl text-[35px] font-bold text-white">
              {item.name}
            </h1>
            <p className="md:text-xl text-[20px] text-white">
              {item.description}
            </p>
            <a
              href={item.live}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 px-6 py-3 bg-red-500 text-white font-semibold rounded hover:bg-red-600"
            >
              Live Demo
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

{
  /* projects section starts here */
}
{
  /* main div */
}
{
  /* {work.map((item, index) => (
        <div
          key={index}
          className={`mt-[50px] relative m-auto group zoom-effect lg:flex lg:max-w-[1200px] ${
            index % 2 !== 0 ? "lg:flex-row-reverse" : ""
          }`}
        > */
}
{
  /* div for card data */
}
{
  /* <div
            className={`bg-[#191D27] px-[32px] py-[32px] flex flex-col justify-between lg:justify-start lg:w-[340px] lg:p-[30px] rounded-t-[10px] lg:rounded-none lg:rounded-l-[10px] ${
              index % 2 !== 0 ? "lg:rounded-l-none lg:rounded-r-[10px]" : ""
            }`}
          >
            <h3 className="text-[white] text-[2rem]">{item.name}</h3>
            <div className="flex flex-wrap gap-[1ch] mt-[20px]">
              {item.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="bg-[#F04D40] rounded-[5px] inline-block text-[18px] text-[white] font-bold px-[10px] py-[5px] text-for-span"
                >
                  {skill}
                </span>
              ))}
            </div>
            <a
              href={item.live}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-[20px] flex items-center gap-[5px] w-[150px] border-none rounded-[4px] bg-[#151030] pointer font-bold text-[1.15rem] px-[15px] py-[8px] lg:mt-auto checkout"
            >
              Check it out
              <IoOpenOutline />
            </a>
          </div> */
}
{
  /* div for image and description */
}
{
  /* <div className="relative">
            <img
              src={item.src}
              alt=""
              className={`w-[100%] lg:rounded-r-md object-cover ${
                index % 2 !== 0 ? "lg:rounded-r-none lg:rounded-l-md" : ""
              }`}
            /> */
}
{
  /* div for description */
}
{
  /* <div
              className={`bg-[#181A1B] text-[white] text-left px-[32px] py-[32px] rounded-b-md lg:rounded-b-none lg:rounded-r-md lg:rounded-br-md lg:absolute lg:inset-0 lg:backdrop-blur-md lg:bg-opacity-75 lg:text-white lg:text-[22px] lg:flex lg:flex-col lg:justify-center lg:opacity-0 lg:transition-opacity lg:duration-300 lg:group-hover:opacity-100 lg:p-4 ${
                index % 2 !== 0
                  ? "lg:rounded-r-none lg:rounded-br-none lg:rounded-l-md lg:rounded-bl-md"
                  : ""
              }`}
            >
              <p className="text-[30px] font-bold lg:text-[35px] lg:mb-[10px] lg:text-left">
                Description
              </p>
              {item.description.map((description, descrindex) => (
                <p key={descrindex}>{description}</p>
              ))}
            </div>
          </div>
        </div>
      ))} */
}

{
  /* button for more projects */
}
<a
  className="mt-[60px] border-none rounded-[4px] mb-[40px] bg-[#F04D40] pointer font-bold text-[1.15rem] px-[15px] py-[8px] checkout"
  href="https://github.com/Davmike?tab=repositories"
  target="_blank"
>
  SEE MORE...
</a>;
// </div>

export default Work;
