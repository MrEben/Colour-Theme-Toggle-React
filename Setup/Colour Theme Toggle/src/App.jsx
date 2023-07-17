import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Search from "./components/search/Search";
import Card from "./components/card";
function App() {
  return (
    <div>
      <Navbar />
      <Search />
      <Card />
    </div>
  );
}

export default App;
