import React, { useState } from "react";
import { BsPlus } from "react-icons/bs";
import { Button, Popover } from "antd";
import { useNavBarContext } from "../context/NavBarContext";
import AddPageContextMenu from "./AddPageBtn/AddPageContextMenu";
import { PageType } from "../constants/pageTypes";

type InsertBtnProps = {
  index: number;
};

const InsertBtn: React.FC<InsertBtnProps> = ({ index }) => {
  const { isNavBarFull, isNavBarEmpty, addBtn } = useNavBarContext();
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  // If navbar is empty, don't render the button
  if (isNavBarEmpty) {
    return null;
  }

  // If limit is reached render invisible placeholder to preserve spacing
  if (isNavBarFull) {
    return (
      <div
        className="w-1 mx-0"
        style={{ height: "100%", pointerEvents: "none" }}
      />
    );
  }

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  const handleAdd = (pageType: PageType) => {
    addBtn(
      {
        id: crypto.randomUUID(),
        label: pageType.label,
        icon: pageType.iconKey,
      },
      index
    );
    setOpen(false);
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`transition-all duration-200 flex ${
        hovered || open ? "w-6 mx-1" : "w-1 mx-0"
      }`}
      style={{ position: "relative", height: "100%" }}
    >
      {(hovered || open) && (
        <Popover
          content={<AddPageContextMenu onSelect={handleAdd} />}
          title="Choose a page type"
          trigger="click"
          open={open}
          onOpenChange={handleOpenChange}
          placement="top"
        >
          <Button
            icon={<BsPlus className="h-4 w-4" />}
            className="z-10 p-0 w-6 h-6 rounded-full bg-white border hover:bg-gray-100"
          />
        </Popover>
      )}
    </div>
  );
};

export default InsertBtn;
