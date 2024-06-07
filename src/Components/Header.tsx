import Hamburger from "./Hamburger";

const buttonCategories = ["Home", "About", "Resume", "Work", "Contact"];

function Header() {
  return (
    <header className="bg-[black] px-[20px] py-[10px] flex justify-between">
      <Hamburger />
      {/* logo */}
      <h2 className="text-[white]">davmikeladze</h2>
      {/* category services with map */}
      <ul className="hidden justify-start items-center flex-row gap-[15px]">
        {buttonCategories.map((category, index) => {
          return (
            <li className="text-[white]" key={index}>
              {category}
            </li>
          );
        })}
      </ul>
    </header>
  );
}

export default Header;
