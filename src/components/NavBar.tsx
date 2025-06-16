import React from "react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  horizontalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import { restrictToHorizontalAxis } from "@dnd-kit/modifiers";
import { useNavBarContext } from "../context/NavBarContext";
import NavBtn from "./NavBtn/NavBtn";
import InsertBtn from "./InsertBtn";

const NavBar = () => {
  const { navBarBtns, setNavBarBtns, selectedId, selectBtn, addBtn } =
    useNavBarContext();

  // prevents accidental drags & selecting a button while attempting to drag
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } })
  );

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (!active || !over || active.id === over.id) return;

    const oldIndex = navBarBtns.findIndex((btn) => btn.id === active.id);
    const newIndex = navBarBtns.findIndex((btn) => btn.id === over.id);

    if (oldIndex !== -1 && newIndex !== -1) {
      const newOrder = arrayMove(navBarBtns, oldIndex, newIndex);
      setNavBarBtns(newOrder);

      // Maintain selection after reordering
      if (selectedId) {
        const newSelectedIndex = newOrder.findIndex(
          (btn) => btn.id === selectedId
        );
        if (newSelectedIndex !== -1) {
          selectBtn(newOrder[newSelectedIndex].id);
        }
      }
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      modifiers={[restrictToHorizontalAxis]}
    >
      <SortableContext
        items={navBarBtns.map((btn) => btn.id)}
        strategy={horizontalListSortingStrategy}
      >
        <div className="flex items-center ml-4">
          {navBarBtns.map((btn, index) => (
            <React.Fragment key={btn.id}>
              <InsertBtn index={index} />
              <NavBtn id={btn.id} label={btn.label} icon={btn.icon} />
            </React.Fragment>
          ))}

          <InsertBtn index={navBarBtns.length} />
        </div>
      </SortableContext>
    </DndContext>
  );
};

export default NavBar;
