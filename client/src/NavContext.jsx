import { createContext, useState } from "react";

export const NavContext = createContext({});

export default function NavContextProvider({ children }) {
  const [option, setOption] = useState("home");
  return (
    <NavContext.Provider value={{ option, setOption }}>
      {children}
    </NavContext.Provider>
  );
}
