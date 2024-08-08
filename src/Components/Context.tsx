import { createContext, useContext } from "react";

interface ComponentsProps {
  menuOpen: boolean;
  setMenuOpen: (menuOpen: boolean) => void;
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
  scrolled: boolean;
  setScrolled: (scrolled: boolean) => void;
  hoveredIndex: null;
  setHoveredIndex: (hoveredIndex: null) => void;
  selected: string;
  setSelected: (selected: string) => void;
  name: string;
  setName: (name: string) => void;
  email: string;
  setEmail: (email: string) => void;
  message: string;
  setMessage: (message: string) => void;
  isButtonDisabled: boolean;
  setIsButtonDisabled: (isButtonDisabled: boolean) => void;
}

export const MyContext = createContext<ComponentsProps | null>(null);

export function Context() {
  const context = useContext(MyContext);
  return context;
}
