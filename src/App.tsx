import "./App.css";
import NavBar from "./components/NavBar";
import AddPageBtn from "./components/AddPageBtn";

function App() {
  return (
    <>
      <div className="flex flex-row w-full">
        <AddPageBtn />
        <NavBar />
      </div>
    </>
  );
}

export default App;
