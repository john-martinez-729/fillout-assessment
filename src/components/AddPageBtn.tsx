import { BsPlus } from "react-icons/bs";

const AddPageBtn = () => {
  return (
    <button className="flex items-center rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-500 hover:bg-gray-50">
      <BsPlus className="mr-1 h-4 w-4" />
      Add page
    </button>
  );
};

export default AddPageBtn;
