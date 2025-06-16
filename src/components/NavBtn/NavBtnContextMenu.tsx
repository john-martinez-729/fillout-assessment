import { BsFillTrash3Fill } from "react-icons/bs";
import { useNavBarContext } from "../../context/NavBarContext";

type NavBtnContextMenuProps = {
  id: string;
  onClose: () => void;
};

const NavBtnContextMenu: React.FC<NavBtnContextMenuProps> = ({
  id,
  onClose,
}) => {
  const { deleteBtn } = useNavBarContext();

  const handleDelete = () => {
    deleteBtn(id);
    onClose();
  };

  return (
    <div className="min-w-[12rem] px-1 py-1">
      <div className="px-3 py-1 cursor-default text-gray-400">Rename</div>
      <div className="px-3 py-1 cursor-default text-gray-400">Copy</div>
      <div className="px-3 py-1 cursor-default text-gray-400">Duplicate</div>
      <div
        onClick={handleDelete}
        className="text-red-500 hover:bg-red-50 px-3 py-1 cursor-pointer flex items-center gap-2"
      >
        <BsFillTrash3Fill />
        Delete
      </div>
    </div>
  );
};

export default NavBtnContextMenu;
