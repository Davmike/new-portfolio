import link from "../../public/assets/link.jpg";
import redberry from "../../public/assets/redberry.jpg";
import movie from "../../public/assets/movie.jpg";
import { IoOpenOutline } from "react-icons/io5";

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
      name: "Link Sharing App",
      live: "https://davmike.github.io/link-sharing-app/",
      src: link,
      skills: [
        "HTML5",
        "CSS custom properties",
        "Flexbox",
        "JavaScript",
        "Localstorage",
        "Mobile-first workflow",
      ],
      description: [
        "platform is designed to provide an optimal user experience across all devices. Users will enjoy a responsive layout that adjusts seamlessly to their device's screen size, ensuring that each page is perfectly displayed whether you're on a desktop, tablet, or smartphone.",
        "We offer a straightforward registration and authorization process, allowing users to easily sign up and log in to access all features. Once registered, users can upload their personal information securely, ensuring their profile is complete and up-to-date.",
        "Sharing content is made simple with our copy link functionality. Users can quickly copy links to their favorite content and share them with friends, family, or colleagues, expanding the reach and engagement of the platform.",
        "Experience a user-friendly interface with all the features you need to stay connected and share your content effortlessly.",
      ],
    },
    {
      name: "Redberry",
      live: "https://redberry-website-geleck.vercel.app/",
      src: redberry,
      skills: [
        "Semantic HTML5 markup",
        "Tailwind",
        "Desktop",
        "React",
        "React-Slick Slider",
        "TypeScript",
        "Localstorage",
        "API",
        "Back-End",
      ],
      description: [
        "View the optimal layout for each page, no matter their device's screen size. Whether you're using a desktop, tablet, or smartphone, the layout will adjust seamlessly for the best viewing experience.",
        "See hover states for all interactive elements throughout the site, providing clear visual feedback and enhancing usability.",
        "Easily authorize their accounts, ensuring secure and quick access to all features. Upload personal information securely, allowing users to maintain up-to-date profiles.",
        "Add blogs effortlessly, enabling users to share their thoughts, stories, and insights with the community.",
      ],
    },
    {
      name: "Entertainment Web",
      live: "https://entertainment-web-app-five-theta.vercel.app/",
      src: movie,
      skills: [
        "React",
        "Typescript",
        "Vite",
        "Tailwind",
        "JSON",
        "Localstorage",
        "Responsive",
      ],
      description: [
        "Started as a hobby project to help a friend learn for his paragliding exam, I ended up building a full-fledged quiz applicatio",
        "It consists of 1000+ questions from 8 different categories and has a simulation mode that mimics the real exam.",
        "From a technical point of view, my goals were to learn using more complex animations with GSAP and deliver a fast & secure web application. It runs server-less on Vercel and uses Next.js API routes to hide all sensitive data from the client, such as the correct answers.",
      ],
    },
  ];

  return (
    <div
      className="bg-[#242424] px-[20px] py-[20px] flex justify-center items-center flex-col"
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
        <div className="w-5 h-1 bg-green-500 mt-1"></div>
        <p className="text-[12px] text-[white]">Dig into my universe</p>
      </div>
      {/* projects section starts here */}
      {/* main div */}
      {work.map((item, index) => (
        <div
          key={index}
          className={`mt-[50px] relative m-auto group zoom-effect lg:flex lg:max-w-[1200px] ${
            index % 2 !== 0 ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* div for card data */}
          <div
            className={`bg-[#181A1B] px-[32px] py-[32px] flex flex-col justify-between lg:justify-start lg:w-[340px] lg:p-[30px] rounded-t-[10px] lg:rounded-none lg:rounded-l-[10px] ${
              index % 2 !== 0 ? "lg:rounded-l-none lg:rounded-r-[10px]" : ""
            }`}
          >
            <h3 className="text-[white] text-[2rem]">{item.name}</h3>
            <div className="flex flex-wrap gap-[1ch] mt-[20px]">
              {item.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="bg-[#242424] rounded-[5px] inline-block text-[18px] text-[white] font-bold px-[10px] py-[5px] text-for-span"
                >
                  {skill}
                </span>
              ))}
            </div>
            <a
              href={item.live}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-[20px] flex items-center gap-[5px] w-[150px] border-none rounded-[4px] bg-[#57CF57] pointer font-bold text-[1.15rem] px-[15px] py-[8px] lg:mt-auto checkout"
            >
              Check it out
              <IoOpenOutline />
            </a>
          </div>
          {/* div for image and description */}
          <div className="relative">
            <img src={item.src} alt="" className="w-[100%] object-cover" />
            {/* div for description */}
            <div className="bg-[#181A1B] text-[white] px-[32px] py-[32px] rounded-b-[10px] lg:absolute lg:inset-0 lg:bg-black lg:bg-opacity-75 lg:text-white lg:flex lg:flex-col lg:justify-center lg:items-center lg:opacity-0 lg:transition-opacity lg:duration-300 lg:group-hover:opacity-100 lg:rounded-b-md lg:p-4">
              {item.description.map((description, descrindex) => (
                <p key={descrindex}>{description}</p>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* button for more projects */}
      <a
        className="mt-[60px] border-none rounded-[4px] mb-[40px] bg-[#57CF57] pointer font-bold text-[1.15rem] px-[15px] py-[8px] checkout"
        href="https://github.com/Davmike?tab=repositories"
        target="_blank"
      >
        SEE MORE...
      </a>
    </div>
  );
}

export default Work;
