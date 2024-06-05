import { MyContext } from "./Components/Context";
import Header from "./Components/Header";
import Home from "./Components/Home";

function App() {
  return (
    <>
      <MyContext.Provider value={{}}>
        <Header />
        <Home />
      </MyContext.Provider>
    </>
  );
}

export default App;
