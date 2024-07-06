import ae from "../../public/assets/logos/ae.png";
import boostrap from "../../public/assets/logos/boostrap.png";
import css from "../../public/assets/logos/css.png";
import figma from "../../public/assets/logos/figma.png";
import git from "../../public/assets/logos/git.png";
import html from "../../public/assets/logos/html.png";
import js from "../../public/assets/logos/javascript.png";
import npm from "../../public/assets/logos/npm.png";
import pr from "../../public/assets/logos/pr.png";
import ps from "../../public/assets/logos/ps.png";
import python from "../../public/assets/logos/python.png";
import react from "../../public/assets/logos/react.png";
import redux from "../../public/assets/logos/redux.png";
import tailwind from "../../public/assets/logos/tailwind.png";
import typescript from "../../public/assets/logos/typescript.png";
import vue from "../../public/assets/logos/vue.png";
import xd from "../../public/assets/logos/xd.png";
import jquery from "../../public/assets/logos/jquery.png";

function Work() {
  const images = [
    { src: html },
    { src: css },
    { src: js },
    { src: react },
    { src: vue },
    { src: tailwind },
    { src: boostrap },
    { src: typescript },
    { src: npm },
    { src: git },
    { src: redux },
    { src: jquery },
    { src: figma },
    { src: python },
    { src: xd },
    { src: ps },
    { src: pr },
    { src: ae },
  ];

  return (
    <div>
      <div className="logos">
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
      </div>
    </div>
  );
}

export default Work;
