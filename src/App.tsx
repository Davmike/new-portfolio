import { useState } from "react";
import { MyContext } from "./Components/Context";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(true);

  return (
    <>
      <MyContext.Provider
        value={{ menuOpen, setMenuOpen, darkMode, setDarkMode }}
      >
        <Header />
        <Home />
        <About />
        <Work />
        <Contact />
        <Footer />
      </MyContext.Provider>
    </>
  );
}

export default App;
