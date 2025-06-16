import React, { useState, CSSProperties } from "react";
import { Button, Popover } from "antd";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { pageTypeMeta, PageTypeKey } from "../../constants/pageTypes";
import { useNavBarContext } from "../../context/NavBarContext";
import NavBtnContextMenu from "./NavBtnContextMenu";

export type NavBtnProps = {
  id: string;
  label: string;
  icon: PageTypeKey;
};

const NavBtn: React.FC<NavBtnProps> = ({ id, label, icon }) => {
  const { selectBtn, selectedId } = useNavBarContext();
  const [contextMenuOpen, setContextMenuOpen] = useState(false);

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const isSelected = selectedId === id;

  const IconComponent = isSelected
    ? BsThreeDotsVertical
    : pageTypeMeta[icon].icon;

  const handleClick = (e: React.MouseEvent) => {
    if (e.button === 0 && !isDragging) {
      selectBtn(id);
    }
  };

  const style: CSSProperties = {
    transform: CSS.Translate.toString(transform),
    transition,
    zIndex: isDragging ? 1000 : "auto",
    position: isDragging ? "relative" : "static",
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...(contextMenuOpen ? {} : listeners)}
    >
      <Popover
        content={
          <div onMouseDown={(e) => e.stopPropagation()}>
            <NavBtnContextMenu
              id={id}
              onClose={() => setContextMenuOpen(false)}
            />
          </div>
        }
        trigger="contextMenu"
        open={contextMenuOpen}
        onOpenChange={setContextMenuOpen}
        placement="top"
        arrow={false}
      >
        <Button
          onClick={handleClick}
          icon={<IconComponent className="h-4 w-4" />}
        >
          <span className={isSelected ? "font-bold" : undefined}>{label}</span>
        </Button>
      </Popover>
    </div>
  );
};

export default React.memo(NavBtn);
