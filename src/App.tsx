import { useState } from "react";
import { MyContext } from "./Components/Context";
import Header from "./Components/Header";
import Home from "./Components/Home";

function App() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <>
      <MyContext.Provider value={{ menuOpen, setMenuOpen }}>
        <Header />
        <Home />
      </MyContext.Provider>
    </>
  );
}

export default App;
