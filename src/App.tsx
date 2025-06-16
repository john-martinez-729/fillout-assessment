import "./App.css";
import NavBar from "./components/NavBar";
import AddPageBtn from "./components/AddPageBtn/AddPageBtn";
import { NavBarProvider } from "./context/NavBarContext";

function App() {
  return (
    <div className="flex flex-row w-full">
      <NavBarProvider>
        <AddPageBtn />
        <NavBar />
      </NavBarProvider>
    </div>
  );
}

export default App;
