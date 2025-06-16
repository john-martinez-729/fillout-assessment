import { useState } from "react";
import { Popover, Button } from "antd";
import { BsPlus } from "react-icons/bs";
import AddPageContextMenu from "./AddPageContextMenu";
import { useNavBarContext } from "../../context/NavBarContext";
import { PageType } from "../../constants/pageTypes";

const AddPageBtn: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { addBtn } = useNavBarContext();

  const handleAdd = (pageType: PageType) => {
    addBtn({
      id: crypto.randomUUID(),
      label: pageType.label,
      icon: pageType.iconKey,
    });
    setOpen(false);
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  return (
    <Popover
      content={<AddPageContextMenu onSelect={handleAdd} />}
      title="Choose a page type"
      trigger="click"
      open={open}
      onOpenChange={handleOpenChange}
      placement="top"
    >
      <Button icon={<BsPlus className="h-4 w-4" />}>Add Page</Button>
    </Popover>
  );
};

export default AddPageBtn;
