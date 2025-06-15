import NavBtn from "./NavBtn";

const NavBar = () => {
  return (
    <div className="sm:pb-0 flex w-full max-w-full ml-4 ">
      <div className="flex justify-start">
        <NavBtn />
        <NavBtn />
        <NavBtn />
      </div>
    </div>
  );
};

export default NavBar;
