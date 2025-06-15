import { BsCreditCard2BackFill } from "react-icons/bs";

const NavBtn = () => {
  return (
    <button className="flex items-center px-2.5 py-1.5 rounded-md border border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
      <BsCreditCard2BackFill className="mr-1 h-4 w-4" />
      Ending
    </button>
  );
};

export default NavBtn;
