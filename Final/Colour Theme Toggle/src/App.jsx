import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Search from "./components/search/Search";
import Card from "./components/card";
import { AppProvider, useGlobalContext } from "./components/context";

function App() {
  const { state } = useGlobalContext();
  console.log(state.theme);
  return (
    <>
      <div className={`${state.theme}-theme-variables`}>
        <Navbar />
        <Search />
        <Card />
      </div>
    </>
  );
}

export default App;
