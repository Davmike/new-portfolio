import { useState } from "react";

const buttonCategories = ["Home", "About", "Resume", "Work", "Contact"];

const Hamburger = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div id="menu">
        <div
          id="menu-bar"
          className={`menu-bar ${menuOpen ? "change" : ""}`}
          onClick={handleMenuClick}
        >
          <div id="bar1" className="bar"></div>
          <div id="bar2" className="bar"></div>
          <div id="bar3" className="bar"></div>
        </div>
        <nav className={`nav ${menuOpen ? "change" : ""}`} id="nav">
          <ul>
            {buttonCategories.map((category, index) => (
              <li key={index}>
                <a href="#">{category}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div
        className={`menu-bg ${menuOpen ? "change-bg" : ""}`}
        id="menu-bg"
      ></div>
    </div>
  );
};

export default Hamburger;
