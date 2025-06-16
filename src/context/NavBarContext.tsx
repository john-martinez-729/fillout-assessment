import { createContext, useState, useContext } from "react";
import { NavBtnProps } from "../components/NavBtn/NavBtn";

const defaultNavBarBtns: NavBtnProps[] = [
  {
    id: crypto.randomUUID(),
    label: "Page",
    icon: "form",
  },
  {
    id: crypto.randomUUID(),
    label: "Ending",
    icon: "ending",
  },
];

type NavBarContextType = {
  isNavBarFull: boolean;
  isNavBarEmpty: boolean;
  navBarBtns: NavBtnProps[];
  setNavBarBtns: React.Dispatch<React.SetStateAction<NavBtnProps[]>>;
  selectedId: string | null;
  selectBtn: (id: string) => void;
  deleteBtn: (id: string) => void;
  addBtn: (btn: NavBtnProps, index?: number) => void;
};

export const NavBarContext = createContext<NavBarContextType | null>(null);

type NavBarProviderProps = {
  children: React.ReactNode;
};

export const NavBarProvider: React.FC<NavBarProviderProps> = ({ children }) => {
  const [navBarBtns, setNavBarBtns] = useState(defaultNavBarBtns);
  const [selectedId, setSelectedId] = useState<string | null>(
    defaultNavBarBtns[0]?.id || null
  );

  const MAX_BTN_COUNT = 7;
  const isNavBarFull = navBarBtns.length >= MAX_BTN_COUNT;
  const isNavBarEmpty = navBarBtns.length === 0;

  const selectBtn = (id: string) => {
    setSelectedId(id);
  };

  const deleteBtn = (id: string) => {
    const wasSelected = selectedId === id;

    setNavBarBtns((prev) => {
      const newBtns = prev.filter((btn) => btn.id !== id);

      if (wasSelected) {
        const fallback = newBtns[0]?.id || null;
        setSelectedId(fallback);
      }

      return newBtns;
    });
  };

  const addBtn = (btn: NavBtnProps, index?: number) => {
    if (navBarBtns.length >= MAX_BTN_COUNT) return;

    let insertAt = index;
    if (insertAt === undefined) {
      const selectedIndex = navBarBtns.findIndex((b) => b.id === selectedId);
      insertAt = selectedIndex >= 0 ? selectedIndex : navBarBtns.length;
    }

    const newBtns = [...navBarBtns];
    newBtns.splice(insertAt, 0, btn);

    setNavBarBtns(newBtns);
    setSelectedId(btn.id);
  };

  return (
    <NavBarContext.Provider
      value={{
        isNavBarFull,
        isNavBarEmpty,
        navBarBtns,
        setNavBarBtns,
        selectedId,
        selectBtn,
        deleteBtn,
        addBtn,
      }}
    >
      {children}
    </NavBarContext.Provider>
  );
};

export const useNavBarContext = () => {
  const ctx = useContext(NavBarContext);
  if (!ctx)
    throw new Error("useNavBarContext must be used within NavBarProvider");
  return ctx;
};
