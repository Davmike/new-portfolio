import { useState } from "react";
import { MyContext } from "./Components/Context";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Resume from "./Components/Resume";
import withLoading from "./Components/WithLoading";

function App() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [hoveredIndex, setHoveredIndex] = useState<null>(null);
  const [selected, setSelected] = useState<string>("Home");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

  return (
    <>
      <MyContext.Provider
        value={{
          menuOpen,
          setMenuOpen,
          darkMode,
          setDarkMode,
          scrolled,
          setScrolled,
          hoveredIndex,
          setHoveredIndex,
          selected,
          setSelected,
          name,
          setName,
          email,
          setEmail,
          message,
          setMessage,
          isButtonDisabled,
          setIsButtonDisabled,
        }}
      >
        <Header />
        <Home />
        <About />
        <Resume />
        <Work />
        <Contact />
        <Footer />
      </MyContext.Provider>
    </>
  );
}

export default withLoading(App);
