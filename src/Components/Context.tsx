import { createContext, useContext } from "react";

interface ComponentsProps {
  menuOpen: boolean;
  setMenuOpen: (menuOpen: boolean) => void;
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
  scrolled: boolean;
  setScrolled: (scrolled: boolean) => void;
}

export const MyContext = createContext<ComponentsProps | null>(null);

export function Context() {
  const context = useContext(MyContext);
  return context;
}
