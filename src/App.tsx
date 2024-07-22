import { useState } from "react";
import { MyContext } from "./Components/Context";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Contact from "./Components/Contact";

function App() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <>
      <MyContext.Provider value={{ menuOpen, setMenuOpen }}>
        <Header />
        <Home />
        <About />
        <Work />
        <Contact />
      </MyContext.Provider>
    </>
  );
}

export default App;
