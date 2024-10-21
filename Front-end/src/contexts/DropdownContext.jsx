// src/contexts/DropdownContext.js
import React, { createContext, useContext, useState } from "react";

// Create a Context for the dropdown visibility
const DropdownContext = createContext();

// Create a provider component
export const DropdownProvider = ({ children }) => {
  const [dropdownVisible1, setDropdownVisible1] = useState(false);
  const [dropdownVisible2, setDropdownVisible2] = useState(false);

  return (
    <DropdownContext.Provider
      value={{
        dropdownVisible1,
        setDropdownVisible1,
        dropdownVisible2,
        setDropdownVisible2,
      }}
    >
      {children}
    </DropdownContext.Provider>
  );
};

// Create a custom hook to use the DropdownContext
export const useDropdown = () => useContext(DropdownContext);
